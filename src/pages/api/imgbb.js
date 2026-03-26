export const prerender = false;

export async function POST({ request }) {
  const IMGBB_KEY = import.meta.env.IMGBB_KEY;
  if (!IMGBB_KEY) {
    return new Response(JSON.stringify({ error: 'IMGBB_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { image } = await request.json();
    if (!image) {
      return new Response(JSON.stringify({ error: 'Missing image data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // image can be base64 string or URL
    const form = new FormData();
    if (image.startsWith('http')) {
      // Fetch the image server-side and convert to base64
      const resp = await fetch(image);
      if (!resp.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch image from URL' }), {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      const buf = await resp.arrayBuffer();
      const b64 = Buffer.from(buf).toString('base64');
      form.append('image', b64);
    } else if (image.startsWith('data:')) {
      // data URL — extract base64 part
      form.append('image', image.split(',')[1]);
    } else {
      // assume raw base64
      form.append('image', image);
    }

    const r = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, {
      method: 'POST',
      body: form,
    });

    const d = await r.json();
    if (!r.ok || !d.data) {
      return new Response(JSON.stringify({ error: d.error?.message || 'imgbb upload failed' }), {
        status: r.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ url: d.data.display_url || d.data.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Upload failed: ' + e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
