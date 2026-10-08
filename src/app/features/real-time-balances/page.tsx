import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-time Balances",
  description: "Add an expense and every group member sees their balance update instantly. Powered by Supabase Realtime, no refresh needed.",
  alternates: { canonical: "https://divisio.in/features/real-time-balances" },
  openGraph: { title: "Real-time Balances | Divisio", description: "Live balance updates the moment an expense is added.", url: "https://divisio.in/features/real-time-balances" },
};

const wrap: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

export default function RealTimeBalancesPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="two-col">
            <div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4.5vw, 54px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 24 }}>
                Everyone sees the<br />same number, instantly.
              </h1>
              <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", lineHeight: 1.75, marginBottom: 16 }}>
                The moment someone logs an expense, every member&apos;s balance updates. No refreshing, no syncing, no one working off an old screenshot.
              </p>
              <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", lineHeight: 1.75 }}>
                Powered by Supabase Realtime  |  the same infrastructure that runs live collaborative tools. Your group always has one source of truth.
              </p>
            </div>

            {/* Live balance mock */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-4)", padding: 24, boxShadow: "var(--shadow-md)" }}>
              <div style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Live balances  |  Goa Trip 2025</div>
              {[
                { name: "You", amount: "+₹2,150", pos: true },
                { name: "Arjun", amount: "-₹1,400", pos: false },
                { name: "Priya", amount: "+₹640", pos: true },
                { name: "Rohan", amount: "-₹950", pos: false },
                { name: "Sneha", amount: "+₹600", pos: true },
                { name: "Dev", amount: "-₹1,040", pos: false },
              ].map((m) => (
                <div key={m.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", color: "var(--text-2)" }}>
                      {m.name[0]}
                    </div>
                    <span style={{ fontSize: "var(--font-size-sm)" }}>{m.name}</span>
                  </div>
                  <span style={{ fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-semibold)", fontVariantNumeric: "tabular-nums", color: m.pos ? "var(--color-green-600)" : "var(--color-red-500)" }}>{m.amount}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, padding: "8px 12px", borderRadius: "var(--radius-2)", background: "var(--surface-2)", display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-green-500)", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text-2)" }}>Live  |  updates as expenses are added</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </>
  );
}
