export interface RetryOptions {
  retries: number;
  baseDelayMs: number;
  label?: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Retry with exponential backoff. Used for transient search/API errors. */
export async function withRetry<T>(
  fn: () => Promise<T>,
  { retries, baseDelayMs, label = "operation" }: RetryOptions,
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (attempt < retries) {
        const delay = baseDelayMs * 2 ** attempt;
        console.warn(
          `[retry] ${label} failed (attempt ${attempt + 1}/${retries + 1}), retrying in ${delay}ms`,
        );
        await sleep(delay);
      }
    }
  }
  throw lastError;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/g, "");
}

/** Extract the first JSON value from an LLM response (handles code fences). */
export function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.search(/[[{]/);
  if (start === -1) throw new Error("No JSON found in LLM response");
  return JSON.parse(candidate.slice(start).trim());
}

export function daysBetween(a: string, b: string): number {
  return Math.abs(
    (new Date(a).getTime() - new Date(b).getTime()) / 86_400_000,
  );
}
