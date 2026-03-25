const ALLOWED = ['https://queue.fal.run/', 'https://rest.fal.run/'];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST' });

  const { url, method = 'GET', body, authorization } = req.body || {};

  if (!url || !ALLOWED.some(p => url.startsWith(p))) {
    return res.status(400).json({ error: 'Invalid target URL' });
  }

  const headers = {};
  if (authorization) headers['Authorization'] = authorization;
  if (body) headers['Content-Type'] = 'application/json';

  try {
    const init = { method, headers };
    if (body) init.body = typeof body === 'string' ? body : JSON.stringify(body);

    const response = await fetch(url, init);
    const text = await response.text();

    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    return res.status(response.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
