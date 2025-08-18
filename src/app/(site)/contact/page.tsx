"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitState>("idle");

  function onChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Safe even if you don't have this API; failure is handled in UI.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-xl px-5 py-12">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="mt-2 text-neutral-600">
        Tell me about your project and I’ll get back to you.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            value={fields.name}
            onChange={onChange}
            className="mt-1 w-full rounded-md border px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={onChange}
            className="mt-1 w-full rounded-md border px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={fields.message}
            onChange={onChange}
            rows={6}
            className="mt-1 w-full rounded-md border px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-700">Thanks—message sent.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong. You can also email me directly.
          </p>
        )}
      </form>
    </section>
  );
}
