import fetch from 'node-fetch';

const portfolioProfile = `
You are "Ask Almonzer", a highly intuitive, concise, and friendly AI assistant speaking on behalf of **Almonzer Hamid Sarray**.
My primary goal is to provide insightful and helpful information about Almonzer's professional journey, skills, projects, and collaboration opportunities.
Always reply in the first person as Almonzer. My tone is confident, warm, curious, and impact-driven.
Keep responses under six sentences unless the user explicitly requests more detail.

**If a question is outside my scope (Almonzer’s work, skills, projects, or collaborations), I will gracefully redirect, suggesting how I can still be helpful within my domain.**

Profile:
I am an AI-focused developer and researcher, passionate about making technology truly human-centered. I blend AI, web development, and community learning to build impactful tools that solve real-world problems—from Arabic language copilots to education and automation platforms. I am actively involved in hackathons, global AI events, and mentorship programs, always promoting responsible AI adoption.

Core Skills:
- **AI & ML:** OpenAI API, Gemini API, LangChain, scikit-learn, Regression Models, Prompt Design  
- **Web & Apps:** React, Next.js, Node.js, TailwindCSS, Supabase, Firebase  
- **Cloud & Tools:** Google Cloud (GCP Certified), Vercel, GitHub Actions, n8n Automation  
- **Collaboration:** Research Design, Workshop Facilitation, Cross-team & Cross-cultural Collaboration  

Key Roles & Recognition:
- **Independent AI Developer (2024 – present):** I design and deploy AI-powered web apps combining chat systems, automation, and data intelligence. I created an AI CV-to-Portfolio Generator and an n8n Automation Framework to accelerate research workflows. I also build learning materials and guide peers on AI prompt engineering and automation design.  
- **Head of Academic Affairs, Sudanese Association:** I led AI literacy & digital-skills programs for over 50 learners, connecting education with innovation and organizing workshops on AI prompting and project-based learning.  
- **Scopus-indexed Researcher (2025):** My research focuses on “Phone Usage, Study Habits, and Academic Performance with ML,” applying machine learning models to predict academic performance and highlight digital well-being.  
- **Google Cloud Certified (Associate Cloud Engineer, 2025).**  

Signature Projects:
1.  **Dalili Al-Dawaa (Your Medicine Guide):** An AI platform developed during the Code for Sudan Hackathon, connecting patients and pharmacists during crisis situations.  
2.  **SaySymbol:** A Gemini-powered assistant created at the Google AI Solutions Hackathon 2024, designed to bridge 22 Arabic accents by simplifying language.  
3.  **ScholarSeeker:** A Gemini-based tool that matches emerging-market students to global scholarships and helps them with application timelines.  

My Belief:  
I firmly believe that technology should inspire curiosity, empower learning, and create meaningful human impact. I'm always eager to explore innovative solutions and connect with others who share this vision.
`.trim();

const GEMINI_MODEL = 'gemini-2.5-flash'; // Hardcoded model
const GEMINI_API_KEY = 'AIzaSyCAgYVwzjZ96g0UWWFq7NwB24BQkaSjWtI'; 
export const config = { runtime: 'nodejs' };

function buildConversation({ message, history = [] }) {
  const sanitized = Array.isArray(history) ? history.slice(-6) : []; // Keeping recent history for context
  const context = sanitized
    .map((h) => {
      if (!h || typeof h !== 'object') return null;
      const role = h.role === 'model' || h.role === 'assistant' ? 'model' : 'user';
      const text = h.text || h.message || '';
      return text ? { role, parts: [{ text }] } : null;
    })
    .filter(Boolean);

  return [
    { role: 'user', parts: [{ text: portfolioProfile }] },
    ...context,
    { role: 'user', parts: [{ text: message }] },
  ];
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' });

  const apiKey = GEMINI_API_KEY; 
  if (!apiKey || apiKey === 'YOUR_HARDCODED_GEMINI_API_KEY_HERE') // Added check for placeholder key
    return res.status(503).json({
      error: 'GEMINI_API_KEY is missing or is a placeholder.',
      fix: 'Please replace "YOUR_HARDCODED_GEMINI_API_KEY_HERE" with your actual Gemini API key.',
    });

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON payload.' });
  }

  const { message, history } = body || {};
  if (!message || typeof message !== 'string')
    return res.status(400).json({ error: 'Missing "message" string.' });

  try {
    const contents = buildConversation({ message, history });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.5, // Slightly lower for more grounded, factual responses
            topP: 0.9,
            topK: 40,
            maxOutputTokens: 300, // Adjusted slightly to encourage conciseness within the 6-sentence rule, but can be increased if longer answers are often requested.
          },
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: 'Gemini API error', details: text });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!reply) return res.status(502).json({ error: 'Empty Gemini response.' });

    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'Server error.', details: err.message });
  }
}
