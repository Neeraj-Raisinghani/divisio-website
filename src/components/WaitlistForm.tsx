"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    // TODO: wire up to Supabase or a form endpoint
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium"
        style={{ background: "rgba(108,71,255,0.12)", color: "var(--brand-light)", border: "1px solid rgba(108,71,255,0.3)" }}
      >
        ✓ You&apos;re on the list  |  we&apos;ll reach out soon!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-3 rounded-full text-sm outline-none w-full sm:w-72"
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          color: "var(--text)",
        }}
        required
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 whitespace-nowrap"
        style={{ background: "var(--brand)", color: "#fff" }}
      >
        Join waitlist
      </button>
      {error && <p className="text-xs text-red-400 mt-1 text-center w-full">{error}</p>}
    </form>
  );
}
