import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Divisio was built to end the awkward money conversation after every trip. One graph algorithm, minimum transfers, no spreadsheet needed.",
  alternates: { canonical: "https://divisio.in/about" },
  openGraph: { title: "About | Divisio", description: "Built to end the awkward money conversation after every trip.", url: "https://divisio.in/about" },
};

const wrap: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

export default function AboutPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div style={wrap}>
          <div style={{ maxWidth: 680 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 28 }}>
              Built to end the<br />money conversation.
            </h1>
            <p style={{ fontSize: "var(--font-size-md)", color: "var(--text-2)", lineHeight: 1.75, marginBottom: 20 }}>
              Divisio started from a simple frustration: every trip ends with a 200-message WhatsApp thread about who owes what. Spreadsheets get abandoned. Reminders feel awkward. Friendships quietly strain under unresolved balances.
            </p>
            <p style={{ fontSize: "var(--font-size-md)", color: "var(--text-2)", lineHeight: 1.75, marginBottom: 20 }}>
              The real problem isn&apos;t tracking — it&apos;s settlement. Knowing who paid for the hotel doesn&apos;t tell you who should pay whom, or how many transfers it takes to clear the slate. That&apos;s a graph problem, and it has an optimal solution.
            </p>
            <p style={{ fontSize: "var(--font-size-md)", color: "var(--text-2)", lineHeight: 1.75 }}>
              Divisio runs that algorithm for every group, every time. No spreadsheet, no guesswork. Just a clean list of the minimum transfers needed to settle up.
            </p>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }} className="stats-grid">
            {[
              { value: "0", label: "Premium tiers", color: "var(--color-green-500)", bg: "var(--color-green-100)" },
              { value: "∞", label: "Groups per user", color: "var(--color-blue-500)", bg: "var(--color-blue-100)" },
              { value: "Min", label: "Transfers, always", color: "var(--color-orange-500)", bg: "var(--color-orange-100)" },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: "40px 32px", borderLeft: i > 0 ? "1px solid var(--border)" : "none", background: s.bg }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-4xl)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", color: s.color, lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px 80px", borderTop: "1px solid var(--border)" }}>
        <div style={wrap}>
          <div style={{ maxWidth: 560 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-2xl)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.02em", marginBottom: 16 }}>Neeraj Raisinghani</h2>
            <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", lineHeight: 1.75, marginBottom: 24 }}>
              Designer and developer building products for the Indian internet. Divisio is a personal project — built out of real trips, real arguments, and a belief that software should solve the whole problem, not half of it.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button href="https://neerajraisinghani.com" size="md" hierarchy="primary" shape="rounded">neerajraisinghani.com →</Button>
              <Button href="mailto:neeraj@divisio.in" size="md" hierarchy="ghost" shape="rounded">neeraj@divisio.in</Button>
              <Button href="https://linkedin.com/in/neerajraisinghani" size="md" hierarchy="ghost" shape="rounded">LinkedIn →</Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 640px) { .stats-grid { grid-template-columns: 1fr !important; } .stats-grid > * { border-left: none !important; border-top: 1px solid var(--border); } .stats-grid > *:first-child { border-top: none; } }`}</style>
    </>
  );
}
