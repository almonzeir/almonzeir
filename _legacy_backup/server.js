import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import net from 'node:net';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const DEFAULT_PORT = Number.parseInt(process.env.PORT, 10) || 8080;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-pro';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!GEMINI_API_KEY) {
    console.warn('[warn] GEMINI_API_KEY is not set. Requests to /api/chat will fail until it is provided.');
}

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));
app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use('/images', express.static(path.join(__dirname, 'Images')));

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const portfolioProfile = `
You are "Ask Almonzer", a concise, friendly AI assistant who answers on behalf of Almonzer Hamid Sarray.
Always respond in first person as Almonzer and keep replies under six sentences unless the user explicitly asks for more detail.
Tone: confident, warm, impact-focused.
Only discuss Almonzer's work, experience, and ways to collaborate; politely redirect other topics.
Key information about Almonzer:
- Title: AI/ML passionate, prompt enthusiast, web developer, researcher.
- Tagline: Turning ideas into AI-powered reality.
- Mission: build intelligent digital products that blend strategy, storytelling, and emerging AI technologies.
Signature projects:
1. Dalili Al-Dawaa: full-stack AI platform connecting patients and pharmacists across Sudan's crisis zones with real-time medication insights.
2. ScholarSeeker AI: Gemini-powered scholarship matcher delivering personalised opportunities for emerging-market students.
3. AI CV-to-Portfolio: automated pipeline that converts resumes into interactive 3D web portfolios using AI-generated narratives and visuals.
Roles and achievements:
- Head of Academic Affairs, Sudanese Association (2023-present) leading AI literacy initiatives and workshops that empowered more than 50 learners.
- AI Product Developer (2024-present) designing and deploying AI web applications with measurable business outcomes.
- 2024 Scopus-indexed publication on AI in education for resource-constrained environments.
- Google Cloud certifications and OpenAI prompt engineering coursework (2024-2025).
Core belief: technology should serve people, curiosity, and meaningful impact.
`;

const buildConversation = ({ message, history = [] }) => {
    const sanitizedHistory = Array.isArray(history) ? history.slice(-6) : [];

    const historyMessages = sanitizedHistory
        .map((entry) => {
            if (!entry || typeof entry !== 'object') {
                return null;
            }

            const role = entry.role === 'model' || entry.role === 'assistant' ? 'model' : 'user';
            const text = entry.text || entry.message || '';

            if (!text) {
                return null;
            }

            return {
                role,
                parts: [{ text }],
            };
        })
        .filter(Boolean);

    return [
        {
            role: 'user',
            parts: [{ text: portfolioProfile.trim() }],
        },
        ...historyMessages,
        {
            role: 'user',
            parts: [{ text: message }],
        },
    ];
};

app.post('/api/chat', async (req, res) => {
    try {
        if (!GEMINI_API_KEY) {
            return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
        }

        const { message, history } = req.body || {};

        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Request body must include a "message" string.' });
        }

        const contents = buildConversation({ message, history });

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.65,
                    topP: 0.9,
                    topK: 40,
                    maxOutputTokens: 512,
                },
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('[gemini] error response:', errorBody);
            return res.status(response.status).json({ error: 'Gemini API request failed.', details: errorBody });
        }

        const data = await response.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

        if (!reply) {
            console.warn('[gemini] empty response structure:', JSON.stringify(data, null, 2));
            return res.status(502).json({ error: 'Gemini returned an empty response.' });
        }

        res.json({ reply });
    } catch (error) {
        console.error('[api/chat] unexpected error:', error);
        res.status(500).json({ error: 'Unexpected server error.' });
    }
});

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
});

const isPortAvailable = (port) => new Promise((resolve, reject) => {
    const tester = net.createServer()
        .once('error', (error) => {
            if (error?.code === 'EADDRINUSE') {
                resolve(false);
            } else {
                reject(error);
            }
        })
        .once('listening', () => {
            tester.close(() => resolve(true));
        })
        .listen(port, '0.0.0.0');
});

const findAvailablePort = async (startPort, maxAttempts = 10) => {
    let candidate = startPort;

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        try {
            const available = await isPortAvailable(candidate);
            if (available) {
                return candidate;
            }
        } catch (error) {
            if (error?.code !== 'EACCES') {
                throw error;
            }
        }
        candidate += 1;
    }

    throw new Error(`Unable to find an open port after checking ${maxAttempts} options starting at ${startPort}.`);
};

const startServer = async () => {
    try {
        const portToUse = await findAvailablePort(DEFAULT_PORT);

        if (portToUse !== DEFAULT_PORT) {
            console.warn(`[server] port ${DEFAULT_PORT} is in use. Falling back to ${portToUse}.`);
        }

        app.listen(portToUse, () => {
            console.log(`[server] listening on http://localhost:${portToUse}`);
        });
    } catch (error) {
        console.error('[server] failed to start:', error);
        process.exit(1);
    }
};

startServer();
