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

  const headers = { 'Content-Type': 'application/json' };
  const auth = req.headers['authorization'];
  if (auth) headers['Authorization'] = auth;

  try {
    const init = { method: req.method, headers };
    if (req.method === 'POST') {
      init.body = JSON.stringify(req.body);
    }

    const response = await fetch(target, init);
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
