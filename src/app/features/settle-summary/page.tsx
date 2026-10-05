import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settle Summary",
  description: "One screen showing exactly who pays whom to clear all group debts. Share directly to WhatsApp in one tap.",
  alternates: { canonical: "https://divisio.in/features/settle-summary" },
  openGraph: { title: "Settle Summary | Divisio", description: "One screen. Everyone knows exactly what to do. Share to WhatsApp instantly.", url: "https://divisio.in/features/settle-summary" },
};

const wrap: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

export default function SettleSummaryPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="two-col">
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand)", marginBottom: 20 }}>Settle Summary</div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4.5vw, 54px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 24 }}>
                One screen.<br />Everyone knows<br />exactly what to do.
              </h1>
              <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.75, marginBottom: 16 }}>
                The settle summary shows the minimum transfers needed to clear all group debts  |  no ambiguity, no math, no one wondering if they&apos;ve covered their share.
              </p>
              <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.75 }}>
                Share the summary directly to your WhatsApp group. Done.
              </p>
            </div>

            {/* Settle summary mock */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 4 }}>Goa Trip 2025</div>
              <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 20 }}>6 members · ₹27,900 total · 3 transfers to settle</div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { from: "Arjun", to: "You", amount: "₹1,400" },
                  { from: "Rohan", to: "Priya", amount: "₹950" },
                  { from: "Dev", to: "Sneha", amount: "₹600" },
                ].map((t, i) => (
                  <div key={i} style={{ padding: "14px 16px", borderRadius: 10, background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{t.from}</div>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{t.to}</div>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--settle)", fontVariantNumeric: "tabular-nums" }}>{t.amount}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
                <button style={{ flex: 1, padding: "10px 0", borderRadius: 9, background: "var(--brand)", color: "#fff", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer" }}>
                  Share to WhatsApp
                </button>
                <button style={{ flex: 1, padding: "10px 0", borderRadius: 9, background: "var(--surface-2)", color: "var(--text-2)", fontSize: 13, fontWeight: 500, border: "1px solid var(--border)", cursor: "pointer" }}>
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </>
  );
}
