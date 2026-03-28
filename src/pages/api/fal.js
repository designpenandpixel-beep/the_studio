export const prerender = false;

// Allowed fal.ai domains — prevents SSRF
const ALLOWED_HOSTS = [
  'queue.fal.run',
  'rest.fal.run',
  'fal.run',
  'gateway.fal.run',
  'storage.fal.run',
  'v3.fal.media',
  'fal.media',
];

function isAllowedUrl(urlStr) {
  try {
    const parsed = new URL(urlStr);
    if (parsed.protocol !== 'https:') return false;
    return ALLOWED_HOSTS.some(h => parsed.hostname === h || parsed.hostname.endsWith('.' + h));
  } catch {
    return false;
  }
}

export const OPTIONS = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-session-token, Authorization',
    },
  });
};

export const POST = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers });
  }

  const { url, method = 'POST', body: falBody, authorization } = body;

  if (!url) {
    return new Response(JSON.stringify({ error: 'Missing url parameter' }), { status: 400, headers });
  }

  if (!isAllowedUrl(url)) {
    return new Response(JSON.stringify({ error: 'URL not allowed — only fal.ai endpoints permitted' }), { status: 403, headers });
  }

  // Use server key if available, fall back to client-provided key
  const falKey = import.meta.env.FAL_KEY;
  const authHeader = falKey ? `Key ${falKey}` : authorization;

  if (!authHeader) {
    return new Response(JSON.stringify({ error: 'No fal.ai API key. Set FAL_KEY env var or provide key in Settings.' }), { status: 401, headers });
  }

  const safeMethod = ['GET', 'POST', 'PUT'].includes((method || '').toUpperCase())
    ? method.toUpperCase()
    : 'POST';

  const fetchOptions = {
    method: safeMethod,
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
    },
  };

  if (safeMethod !== 'GET' && falBody) {
    fetchOptions.body = JSON.stringify(falBody);
  }

  try {
    const response = await fetch(url, fetchOptions);
    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { error: text.substring(0, 300) };
    }

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers,
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Upstream fal.ai request failed: ' + e.message }), {
      status: 502,
      headers,
    });
  }
};
