export const prerender = false;
import { getSession } from '../../lib/auth.js';

export async function POST({ request }) {
  if (import.meta.env.SESSION_SECRET) {
    const session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401, headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  const SUPABASE_URL = import.meta.env.SUPABASE_URL;
  const SUPABASE_SERVICE_KEY = import.meta.env.SUPABASE_SERVICE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    return new Response(JSON.stringify({ error: 'Supabase not configured' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { url, type = 'image' } = await request.json();
    if (!url) {
      return new Response(JSON.stringify({ error: 'Missing url' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    let fileBuffer, mimeType;

    if (url.startsWith('data:')) {
      const [header, b64] = url.split(',');
      mimeType = header.match(/:(.*?);/)?.[1] || 'image/jpeg';
      const binary = atob(b64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      fileBuffer = bytes.buffer;
    } else {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`Failed to fetch media: ${resp.status}`);
      mimeType = resp.headers.get('content-type') || (type === 'video' ? 'video/mp4' : 'image/jpeg');
      fileBuffer = await resp.arrayBuffer();
    }

    let ext;
    if (mimeType.includes('mp4') || mimeType.includes('video')) ext = 'mp4';
    else if (mimeType.includes('webm')) ext = 'webm';
    else if (mimeType.includes('png')) ext = 'png';
    else if (mimeType.includes('webp')) ext = 'webp';
    else ext = 'jpg';

    const ts = Date.now();
    const rand = Math.random().toString(36).slice(2, 8);
    const folder = type === 'video' ? 'videos' : 'images';
    const filename = `${folder}/${ts}_${rand}.${ext}`;

    const uploadUrl = `${SUPABASE_URL}/storage/v1/object/cinexai-media/${filename}`;
    const uploadResp = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': mimeType,
        'x-upsert': 'false',
      },
      body: fileBuffer,
    });

    if (!uploadResp.ok) {
      const errText = await uploadResp.text();
      throw new Error(`Supabase upload failed (${uploadResp.status}): ${errText}`);
    }

    const permanentUrl = `${SUPABASE_URL}/storage/v1/object/public/cinexai-media/${filename}`;

    return new Response(JSON.stringify({ url: permanentUrl }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });

  } catch (e) {
    return new Response(JSON.stringify({ error: 'Upload failed: ' + e.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
}