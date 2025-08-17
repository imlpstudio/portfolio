const hits = new Map<string, { count: number; ts: number }>();

export function rateLimit(ip: string, windowMs = 60_000, max = 5) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > windowMs) {
    hits.set(ip, { count: 1, ts: now });
    return { ok: true };
  }
  if (entry.count >= max) return { ok: false };
  entry.count++;
  return { ok: true };
}
