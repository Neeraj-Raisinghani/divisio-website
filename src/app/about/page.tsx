import type { Metadata } from "next";

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
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 20 }}>About</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 28 }}>
              Built to end the<br />money conversation.
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.75, marginBottom: 20 }}>
              Divisio started from a simple frustration: every trip ends with a 200-message WhatsApp thread about who owes what. Spreadsheets get abandoned. Reminders feel awkward. Friendships quietly strain under unresolved balances.
            </p>
            <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.75, marginBottom: 20 }}>
              The real problem isn&apos;t tracking  |  it&apos;s settlement. Knowing who paid for the hotel doesn&apos;t tell you who should pay whom, or how many transfers it takes to clear the slate. That&apos;s a graph problem, and it has an optimal solution.
            </p>
            <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.75 }}>
              Divisio runs that algorithm for every group, every time. No spreadsheet, no guesswork. Just a clean list of the minimum transfers needed to settle up.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px 80px", borderTop: "1px solid var(--border)" }}>
        <div style={wrap}>
          <div style={{ maxWidth: 560 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 20 }}>The builder</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>Neeraj Raisinghani</h2>
            <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, marginBottom: 24 }}>
              Designer and developer building products for the Indian internet. Divisio is a personal project  |  built out of real trips, real arguments, and a belief that software should solve the whole problem, not half of it.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <a href="https://neerajraisinghani.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "var(--brand)" }}>neerajraisinghani.com →</a>
              <a href="mailto:neeraj@divisio.in" style={{ fontSize: 14, color: "var(--text-2)" }}>neeraj@divisio.in</a>
              <a href="https://linkedin.com/in/neerajraisinghani" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "var(--text-2)" }}>LinkedIn →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
