export const prerender = false

export async function POST({ request }: any) {
  const body = await request.json()
  const falKey = import.meta.env.FAL_KEY

  const response = await fetch(body.url, {
    method: 'POST',
    headers: {
      'Authorization': `Key ${falKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body.payload)
  })
  const data = await response.json()
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function GET({ url }: any) {
  const targetUrl = url.searchParams.get('url')
  const falKey = import.meta.env.FAL_KEY

  const response = await fetch(targetUrl, {
    headers: { 'Authorization': `Key ${falKey}` }
  })
  const data = await response.json()
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  })
}
