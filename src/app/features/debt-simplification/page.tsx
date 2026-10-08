import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debt Simplification",
  description: "Divisio's graph algorithm finds the minimum number of payments to clear all group debts. 10 people, at most 9 transfers, not 45.",
  alternates: { canonical: "https://divisio.in/features/debt-simplification" },
  openGraph: { title: "Debt Simplification | Divisio", description: "Minimum payments to settle all group debts. Every time.", url: "https://divisio.in/features/debt-simplification" },
};

const wrap: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

function DebtGraph() {
  const nodes = [
    { id: "A", x: 60, y: 40, label: "Arjun" },
    { id: "P", x: 200, y: 20, label: "Priya" },
    { id: "R", x: 320, y: 50, label: "Rohan" },
    { id: "S", x: 100, y: 130, label: "Sneha" },
    { id: "Y", x: 250, y: 140, label: "You" },
  ];
  const before = [["A","P"],["A","S"],["A","Y"],["P","R"],["P","S"],["P","Y"],["R","S"],["R","Y"],["S","Y"]];
  const after  = [["Y","A"],["R","P"],["S","Y"]];
  const nm = Object.fromEntries(nodes.map(n => [n.id, n]));
  function arr(a: string, b: string, markerId: string) {
    const f = nm[a], t = nm[b], dx = t.x-f.x, dy = t.y-f.y, len = Math.sqrt(dx*dx+dy*dy);
    return <line key={a+b} x1={f.x+(dx/len)*10} y1={f.y+(dy/len)*10} x2={t.x-(dx/len)*12} y2={t.y-(dy/len)*12} stroke={markerId==="b"?"rgba(152,152,184,0.3)":"rgba(79,110,247,0.6)"} strokeWidth="1.5" markerEnd={`url(#${markerId})`} />;
  }
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start" }}>
      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 10 }}>Before divisio</div>
        <svg viewBox="0 0 380 175" style={{ width: "100%", overflow: "visible" }}>
          <defs><marker id="b" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="rgba(152,152,184,0.4)" /></marker></defs>
          {before.map(([a,c]) => arr(a, c, "b"))}
          {nodes.map(n => <g key={n.id}><circle cx={n.x} cy={n.y} r={8} fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.5" /><text x={n.x} y={n.y+20} textAnchor="middle" fill="var(--text-3)" fontSize="9" fontFamily="var(--font-body)">{n.label}</text></g>)}
        </svg>
        <div style={{ fontSize: "var(--font-size-xs)", color: "var(--text-3)", marginTop: 4 }}>9 payments needed</div>
      </div>
      <div style={{ color: "var(--text-3)", fontSize: "var(--font-size-md)", paddingTop: 56 }}>→</div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--brand)", marginBottom: 10 }}>With divisio</div>
        <svg viewBox="0 0 380 175" style={{ width: "100%", overflow: "visible" }}>
          <defs><marker id="d" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="rgba(79,110,247,0.7)" /></marker></defs>
          {after.map(([a,c]) => arr(a, c, "d"))}
          {nodes.map(n => <g key={n.id}><circle cx={n.x} cy={n.y} r={8} fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1.5" /><text x={n.x} y={n.y+20} textAnchor="middle" fill="var(--text-3)" fontSize="9" fontFamily="var(--font-body)">{n.label}</text></g>)}
        </svg>
        <div style={{ fontSize: "var(--font-size-xs)", color: "var(--brand)", marginTop: 4 }}>3 payments. Done.</div>
      </div>
    </div>
  );
}

export default function DebtSimplificationPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="two-col">
            <div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 24 }}>
                The fewest payments<br />to settle everyone.
              </h1>
              <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", lineHeight: 1.75, marginBottom: 16 }}>
                Most expense apps show you who paid what. They leave you to figure out how many transfers it takes to settle. That math is surprisingly hard  |  and humans almost never find the optimal answer.
              </p>
              <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", lineHeight: 1.75 }}>
                Divisio models your group&apos;s debts as a directed graph and runs a reduction algorithm to find the minimum number of payments that clear all balances. For a group of 10, that&apos;s at most 9 transfers  |  not 45.
              </p>
            </div>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-4)", padding: 28, boxShadow: "var(--shadow-md)" }}>
              <DebtGraph />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={wrap}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.025em", marginBottom: 40 }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="three-col">
            {[
              { n: "1", title: "Expenses are logged", body: "Every expense — who paid, how much, who shares it — is recorded in real time.", color: "var(--color-blue-500)", bg: "var(--color-blue-100)" },
              { n: "2", title: "Net balances computed", body: "Divisio calculates each member's net balance: what they paid minus what they owe.", color: "var(--color-orange-500)", bg: "var(--color-orange-100)" },
              { n: "3", title: "Graph is reduced", body: "The debt network is reduced to the minimum set of transfers that clears all balances.", color: "var(--color-green-700)", bg: "var(--color-green-100)" },
            ].map((s) => (
              <div key={s.n} style={{ padding: "20px 20px 24px", borderRadius: "var(--radius-3)", background: s.bg, border: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-3xl)", fontWeight: "var(--font-weight-bold)", color: s.color, letterSpacing: "-0.04em", marginBottom: 12, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{s.n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-base)", fontWeight: "var(--font-weight-semibold)", marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)", lineHeight: 1.65 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 40px !important; } .three-col { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
