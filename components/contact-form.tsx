"use client"

import { FormEvent, useState } from "react"

type SubmissionState = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === "sending") return
    const form = event.currentTarget
    const formData = new FormData(form)
    setState("sending")
    setErrorMessage("")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.get("name"), email: formData.get("email"), subject: formData.get("subject"), message: formData.get("message"), website: formData.get("website") }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Your message could not be sent. Please try again.")
      form.reset()
      setState("success")
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Your message could not be sent. Please try again.")
      setState("error")
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Name<input autoComplete="name" name="name" maxLength={100} required /></label><label>Email<input autoComplete="email" name="email" type="email" maxLength={254} required /></label></div>
    <label>What would you like to discuss?<select name="subject" defaultValue="Website or product build"><option>Website or product build</option><option>Booking or lead flow</option><option>Data dashboard</option><option>Something else</option></select></label>
    <label>Message<textarea name="message" rows={5} maxLength={4000} required /></label>
    <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <button className="contact-button form-submit" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}<span aria-hidden="true"> ↗</span></button>
    <p className="form-feedback" aria-live="polite" role={state === "error" ? "alert" : "status"}>{state === "success" ? "Thanks — your message has been sent." : state === "error" ? errorMessage : ""}</p>
  </form>
}
