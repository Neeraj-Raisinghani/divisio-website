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
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand)", marginBottom: 20 }}>Real-time Balances</div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4.5vw, 54px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 24 }}>
                Everyone sees the<br />same number, instantly.
              </h1>
              <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.75, marginBottom: 16 }}>
                The moment someone logs an expense, every member&apos;s balance updates. No refreshing, no syncing, no one working off an old screenshot.
              </p>
              <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.75 }}>
                Powered by Supabase Realtime  |  the same infrastructure that runs live collaborative tools. Your group always has one source of truth.
              </p>
            </div>

            {/* Live balance mock */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Live balances  |  Goa Trip 2025</div>
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
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "var(--text-2)" }}>
                      {m.name[0]}
                    </div>
                    <span style={{ fontSize: 14 }}>{m.name}</span>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, fontVariantNumeric: "tabular-nums", color: m.pos ? "#4ade80" : "#f87171" }}>{m.amount}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, padding: "8px 12px", borderRadius: 8, background: "var(--surface-2)", display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: 12, color: "var(--text-2)" }}>Live  |  updates as expenses are added</span>
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
