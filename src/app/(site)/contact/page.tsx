"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12 py-12">
        <h1 className="text-3xl font-bold">Contact</h1>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm text-neutral-600">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-sm text-neutral-600">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-sm text-neutral-600">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              required
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-black px-4 py-2 text-white disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-600">Thanks! I’ll get back to you shortly.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
