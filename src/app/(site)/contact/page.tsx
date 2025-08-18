import { useState } from "react";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type ContactResponse = { ok: true } | { ok: false; error: string };

function isContactResponse(x: unknown): x is ContactResponse {
  if (typeof x !== "object" || x === null) return false;
  const v = x as Record<string, unknown>;
  if (v.ok === true) return true;
  if (v.ok === false && typeof v.error === "string") return true;
  return false;
}

export default function ContactPage() {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState<null | "ok" | string>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(null);
    setPending(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement | null)?.value.trim() ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement | null)?.value.trim() ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement | null)?.value.trim() ?? "";

    const data: ContactPayload = { name, email, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json: unknown = await res.json();
      if (!res.ok || !isContactResponse(json) || json.ok !== true) {
        const err = isContactResponse(json) && json.ok === false ? json.error : "Failed to send";
        setDone(err);
      } else {
        setDone("ok");
        form.reset();
      }
    } catch {
      setDone("Network error");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-5 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-neutral-600">Tell me a bit about your project.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea id="message" name="message" required rows={6} className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center rounded-md bg-black px-4 py-2 text-white disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send"}
        </button>

        {done === "ok" && <p className="text-sm text-green-600">Thanks — I’ll get back to you shortly.</p>}
        {done && done !== "ok" && <p className="text-sm text-red-600">{done}</p>}
      </form>
    </section>
  );
}
TS
