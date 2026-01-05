import { NextRequest, NextResponse } from "next/server";

// Groq API Configuration
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = "llama-3.3-70b-versatile";

const portfolioProfile = `
You are "Ask Almonzer", a concise, friendly AI assistant who answers on behalf of Almonzer Hamid Sarray.
Always respond in first person as Almonzer and keep replies under six sentences unless the user explicitly asks for more detail.
Tone: confident, warm, impact-focused.
Only discuss Almonzer's work, experience, and ways to collaborate; politely redirect other topics.

Key information about Almonzer:
- Title: AI Solutions Architect & Full Stack Engineer
- Tagline: Turning ideas into AI-powered reality.
- Mission: Build production-grade AI systems and intelligent digital products that blend strategy, storytelling, and emerging technologies.

Signature Engineering Projects:
1. UltraFolio: Production-grade SaaS with Binary-to-JSON parsing engine and Memory-State Preview system. Handles 4,000+ requests/hour. 500+ portfolios created in 48 hours.
2. Dalili Al-Dawaa: Crisis-ready platform connecting patients and pharmacists in Sudan with real-time medication insights and SMS fallbacks.
3. MaiKedah Tourism Platform: Enterprise SaaS with 3-Level Role-Based Access Control (RBAC) and real-time dashboard sync.
4. IndabaX Quiz Platform: Real-time multiplayer engine supporting 300+ concurrent WebSocket connections with zero latency.
5. Viewer Intelligence: Hybrid Recommender System combining Collaborative Filtering with FP-Growth Market Basket Analysis and Isolation Forest anomaly detection.

Roles and achievements:
- Organizer, IndabaX Sudan 2025 - Deep Learning Indaba national team coordinator.
- Head of Academic Affairs, Sudanese Association (2023-present) - AI literacy initiatives empowering 50+ learners.
- AI Product Developer (2024-present) - Deployed 5+ production AI web applications.
- 2024 Scopus-indexed publication on AI in education for resource-constrained environments.
- Google Cloud Associate Cloud Engineer certified (2024).
- Google AI Solutions Hackathon 2025 Finalist with "Say Simple" Gemini-powered interpreter.

Tech Stack: Next.js, TypeScript, React, Python, Node.js, Supabase, WebSocket, Gemini AI, OpenAI, Scikit-learn.
Core belief: Technology should serve people, curiosity, and meaningful impact.
Contact: monzeer2002@gmail.com | LinkedIn: 3.6k+ followers | Available for internship March 2026.
`;

const buildMessages = ({ message, history = [] }: { message: string; history: any[] }) => {
    // Limit history to last 6 turns to manage context window
    const sanitizedHistory = Array.isArray(history) ? history.slice(-6) : [];

    const historyMessages = sanitizedHistory
        .map((entry) => {
            if (!entry || typeof entry !== 'object') {
                return null;
            }

            // Map 'model' to 'assistant' for OpenAI-compatible format
            const role = entry.role === 'model' ? 'assistant' : entry.role === 'user' ? 'user' : 'assistant';
            const content = entry.text || entry.message || (entry.parts && entry.parts[0]?.text) || '';

            if (!content) {
                return null;
            }

            return { role, content };
        })
        .filter(Boolean);

    return [
        {
            role: 'system',
            content: portfolioProfile.trim(),
        },
        ...historyMessages,
        {
            role: 'user',
            content: message,
        },
    ];
};

export async function POST(req: NextRequest) {
    try {
        if (!GROQ_API_KEY) {
            return NextResponse.json({ error: 'GROQ_API_KEY is not configured.' }, { status: 500 });
        }

        const body = await req.json();
        const { message, history } = body;

        if (!message || typeof message !== 'string') {
            return NextResponse.json({ error: 'Request body must include a "message" string.' }, { status: 400 });
        }

        const messages = buildMessages({ message, history });

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`,
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages,
                temperature: 0.65,
                max_tokens: 512,
                top_p: 0.9,
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('[groq] error response:', errorBody);
            return NextResponse.json({ error: 'Groq API request failed.', details: errorBody }, { status: response.status });
        }

        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content?.trim();

        if (!reply) {
            console.warn('[groq] empty response structure:', JSON.stringify(data, null, 2));
            return NextResponse.json({ error: 'Groq returned an empty response.' }, { status: 502 });
        }

        return NextResponse.json({ reply });
    } catch (error) {
        console.error('[api/chat] unexpected error:', error);
        return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 });
    }
}
