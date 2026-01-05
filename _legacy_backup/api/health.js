export const config = {
  runtime: 'nodejs',
};

export default function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'GET,HEAD,OPTIONS');
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET,HEAD,OPTIONS');
    res.status(405).json({ status: 'error', error: 'Method Not Allowed' });
    return;
  }

  const geminiConfigured = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim());
  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

  res.status(200).json({
    status: 'ok',
    geminiConfigured,
    model,
    timestamp: new Date().toISOString(),
  });
}
