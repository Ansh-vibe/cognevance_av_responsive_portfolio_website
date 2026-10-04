import { NextResponse } from 'next/server'

const limits = { name: 80, email: 160, subject: 120, message: 4000 }

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().replace(/[<>]/g, '').slice(0, max) : ''
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    if (clean(body.website, 120)) return NextResponse.json({ ok: true })

    const name = clean(body.name, limits.name)
    const email = clean(body.email, limits.email)
    const subject = clean(body.subject, limits.subject)
    const message = clean(body.message, limits.message)

    if (!name || !subject || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please complete every field with valid details.' }, { status: 400 })
    }

    const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY
    if (!url || !key) return NextResponse.json({ error: 'Contact storage is not configured yet. Please email Ansh directly.' }, { status: 503 })

    const response = await fetch(`${url}/rest/v1/contact_messages`, {
      method: 'POST',
      headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify({ name, email, subject, message }),
      cache: 'no-store',
    })
    if (!response.ok) return NextResponse.json({ error: 'Something went wrong while sending your message. Please try again or email directly.' }, { status: 502 })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unable to send your message right now. Please try again.' }, { status: 500 })
  }
}
