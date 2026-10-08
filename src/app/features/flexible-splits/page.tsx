import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexible Splits",
  description: "Split expenses equally, by exact amount, percentage, or shares. Divisio handles every real-world split scenario without workarounds.",
  alternates: { canonical: "https://divisio.in/features/flexible-splits" },
  openGraph: { title: "Flexible Splits | Divisio", description: "Equal, exact, percentage, or share-based splits. Every scenario covered.", url: "https://divisio.in/features/flexible-splits" },
};

const wrap: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

const splits = [
  { label: "Equal", desc: "Everyone pays the same amount. The default for most situations.", example: "₹1,200 dinner, 4 people → ₹300 each", color: "var(--color-blue-500)", bg: "var(--color-blue-100)", border: "var(--color-blue-200)" },
  { label: "Exact amounts", desc: "You specify each person's exact share. No rounding, no assumptions.", example: "You had the thali (₹280), your friend had the biryani (₹420)", color: "var(--color-green-700)", bg: "var(--color-green-100)", border: "var(--color-green-200)" },
  { label: "Percentage", desc: "Divide by percentage of the total — useful when contribution levels differ.", example: "60% / 40% split on a shared Airbnb room", color: "var(--color-orange-500)", bg: "var(--color-orange-100)", border: "var(--color-orange-200)" },
  { label: "Shares", desc: "Set a ratio — e.g. 2:1:1 — and Divisio calculates the amounts.", example: "Senior teammate covers 2x, juniors cover 1x each", color: "var(--color-purple-700)", bg: "var(--color-purple-100)", border: "var(--color-purple-200)" },
];

export default function FlexibleSplitsPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div style={wrap}>
          <div style={{ maxWidth: 640 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 24 }}>
              Split the way your<br />group actually works.
            </h1>
            <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", lineHeight: 1.75 }}>
              Groups don&apos;t always split equally. Divisio supports four split types  |  covering every real-world scenario without workarounds or awkward rounding.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col">
            {splits.map((s) => (
              <div key={s.label} style={{ padding: "26px 26px 28px", borderRadius: "var(--radius-4)", background: s.bg, border: `1px solid ${s.border}` }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-lg)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.02em", marginBottom: 10, color: s.color }}>{s.label}</div>
                <p style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)", lineHeight: 1.65, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ fontSize: "var(--font-size-sm)", padding: "10px 14px", borderRadius: "var(--radius-2)", background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-2)", fontVariantNumeric: "tabular-nums" }}>
                  e.g. {s.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
