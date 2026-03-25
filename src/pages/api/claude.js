export const prerender = false;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key, anthropic-version',
};

export const OPTIONS = async () => {
  return new Response(null, { status: 200, headers: CORS });
};

export const POST = async ({ request }) => {
  const apiKey = request.headers.get('x-api-key');
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Missing API key' }), {
      status: 400, headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.text();
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': request.headers.get('anthropic-version') || '2023-06-01',
      },
      body,
    });

    const text = await response.text();
    return new Response(text, {
      status: response.status,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }
};
