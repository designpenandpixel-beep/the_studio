const ALLOWED = ['https://queue.fal.run/', 'https://rest.fal.run/'];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const target = req.query.url;

  if (!target || !ALLOWED.some(prefix => target.startsWith(prefix))) {
    return res.status(400).json({ error: 'Invalid target URL' });
  }

  const headers = {};
  const auth = req.headers['authorization'];
  if (auth) headers['Authorization'] = auth;

  const init = { method: req.method, headers };

  if (req.method === 'POST' || req.method === 'PUT') {
    headers['Content-Type'] = 'application/json';
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const rawBody = Buffer.concat(chunks).toString();
    init.body = rawBody || '{}';
  }

  try {
    const response = await fetch(target, init);
    const text = await response.text();

    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    return res.status(response.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
