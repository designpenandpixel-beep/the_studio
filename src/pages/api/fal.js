export const prerender = false
import { getSession } from '../../lib/auth.js';

// Allowed fal.ai domains — prevents SSRF attacks
const ALLOWED_HOSTS = [
  'queue.fal.run',
  'rest.fal.run',
  'fal.run',
  'gateway.fal.run',
  'storage.fal.run',
  'v3.fal.media',
  'fal.media',
]

// Allowed HTTP methods
const ALLOWED_METHODS = ['GET', 'POST', 'PUT']

function isAllowedUrl(urlStr) {
  try {
    const parsed = new URL(urlStr)
    if (parsed.protocol !== 'https:') return false
    return ALLOWED_HOSTS.some(h => parsed.hostname === h || parsed.hostname.endsWith('.' + h))
  } catch {
    return false
  }
}

export async function POST({ request }) {
    // Session validation — allow if session exists OR FAL_KEY env var set OR client auth provided
    if (import.meta.env.SESSION_SECRET) {
      const session = await getSession(request);
      const hasFalKey = !!import.meta.env.FAL_KEY;
      if (!session && !hasFalKey) {
        return new Response(JSON.stringify({ error: 'Authentication required' }), {
          status: 401, headers: { 'Content-Type': 'application/json' }
        })
      }
    }

    const { url, method = 'POST', body, authorization } = await request.json()

    if (!url) {
      return new Response(JSON.stringify({ error: 'Missing url' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
      })
    }

    // SSRF protection: only allow fal.ai domains
    if (!isAllowedUrl(url)) {
      return new Response(JSON.stringify({ error: 'URL not allowed. Only fal.ai endpoints are permitted.' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
      })
    }

    // Method validation
    const safeMethod = ALLOWED_METHODS.includes(method.toUpperCase()) ? method.toUpperCase() : 'POST'

    // Prefer server-side key, fall back to client-provided
    const falKey = import.meta.env.FAL_KEY
    if (!falKey && !authorization) {
      return new Response(JSON.stringify({ error: 'No API key configured. Set FAL_KEY in environment or provide authorization.' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
      })
    }

    const options = {
      method: safeMethod,
      headers: {
              'Authorization': falKey ? `Key ${falKey}` : authorization,
              'Content-Type': 'application/json'
      }
    }

    if (safeMethod !== 'GET' && body) {
      options.body = JSON.stringify(body)
    }

    try {
      const response = await fetch(url, options)
      const text = await response.text()
      try {
        const data = JSON.parse(text)
        return new Response(JSON.stringify(data), {
              status: response.status,
              headers: { 'Content-Type': 'application/json' }
        })
      } catch {
        return new Response(JSON.stringify({ error: text.substring(0, 500) }), {
              status: response.status || 502,
              headers: { 'Content-Type': 'application/json' }
        })
      }
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Upstream request failed: ' + e.message }), {
            status: 502,
            headers: { 'Content-Type': 'application/json' }
      })
    }
}
