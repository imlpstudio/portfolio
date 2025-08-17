"use client";
import { useState } from "react";
import Container from "@/components/Container";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData as any)),
    });
    setStatus(res.ok ? "ok" : "err");
    if (res.ok) form.reset();
  }

  return (
    <Container>
      <h1 className="mt-12 text-3xl font-bold">Contact</h1>
      <form onSubmit={onSubmit} className="mt-6 max-w-lg space-y-4">
        <input className="w-full border rounded-xl px-3 py-2" name="name" placeholder="Your name" required />
        <input className="w-full border rounded-xl px-3 py-2" type="email" name="email" placeholder="you@example.com" required />
        {/* honeypot */}
        <input className="hidden" tabIndex={-1} autoComplete="off" name="website" />
        <textarea className="w-full border rounded-xl px-3 py-2 h-40" name="message" placeholder="What are we building?" required />
        <button className="rounded-xl px-4 py-2 border bg-black text-white">Send</button>
        {status==="ok" && <p className="text-green-600 text-sm">Thanks — I’ll reply soon.</p>}
        {status==="err" && <p className="text-red-600 text-sm">Something went wrong. Please email contact@imlpstudio.com.</p>}
      </form>
    </Container>
  );
}
