const maxLengths = { name: 100, email: 254, subject: 160, message: 4000 } as const

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try { body = await request.json() as Record<string, unknown> }
  catch { return Response.json({ error: "Please submit a valid message." }, { status: 400 }) }

  // Return a generic success for bot submissions caught by the honeypot.
  if (cleanText(body.website, 200)) return Response.json({ ok: true })

  const name = cleanText(body.name, maxLengths.name)
  const email = cleanText(body.email, maxLengths.email)
  const subject = cleanText(body.subject, maxLengths.subject)
  const message = cleanText(body.message, maxLengths.message)
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !subject || message.length < 10) {
    return Response.json({ error: "Enter your name, a valid email, a topic, and a message of at least 10 characters." }, { status: 400 })
  }

  const databaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!databaseUrl || !serviceKey) return Response.json({ error: "The contact form is not configured yet. Please email contact.ansh03@gmail.com instead." }, { status: 503 })

  const origin = request.headers.get("origin")
  const requestOrigin = new URL(request.url).origin
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL
  if (origin && origin !== requestOrigin && origin !== configuredOrigin) return Response.json({ error: "This request could not be accepted." }, { status: 403 })

  try {
    const response = await fetch(`${databaseUrl.replace(/\/$/, "")}/rest/v1/contact_messages`, {
      method: "POST",
      headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}`, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ name, email, subject, message }),
      cache: "no-store",
    })
    if (!response.ok) {
      console.error("Supabase contact insert failed with status", response.status)
      return Response.json({ error: "Your message could not be saved. Please try again later or email me directly." }, { status: 502 })
    }
    return Response.json({ ok: true })
  } catch {
    console.error("Supabase contact service could not be reached")
    return Response.json({ error: "The contact service is temporarily unavailable. Please email me directly." }, { status: 502 })
  }
}
