import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases",
  description: "Divisio works for friend trips, flatmates, and ongoing friend groups. Track shared expenses and settle up with the minimum number of transfers.",
  alternates: { canonical: "https://divisio.in/use-cases" },
  openGraph: { title: "Use Cases | Divisio", description: "Friend trips, flatmates, ongoing groups. Settle with the fewest transfers possible.", url: "https://divisio.in/use-cases" },
};

const wrap: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

const cases = [
  {
    id: "trips",
    tag: "Friend trips",
    title: "From the first booking to the last UPI transfer.",
    body: `Trips have the most complex split scenarios: hotel split across 6 but paragliding only 4 went, that one person who missed the beach dinner. Divisio tracks every nuance and at the end shows you the minimum number of transfers to clear all debts  |  not 45, not 20, but the actual minimum.`,
    scenarios: [
      "Hotel cost split across all members",
      "Activity costs split only among participants",
      "Food bills with unequal portions",
      "One person booking flights for the group",
    ],
    settle: "Typical settle: 4–6 payments for a group of 8 on a 4-day trip.",
  },
  {
    id: "flatmates",
    tag: "Flatmates",
    title: "Monthly balances with zero drama.",
    body: `Rent, electricity, gas, groceries, the Netflix subscription. Flatmate expenses repeat and accumulate. Divisio makes it easy to log them as they happen and see a running balance  |  so the monthly settlement is one quick round of transfers, not a reconstruction.`,
    scenarios: [
      "Rent paid by one person, split equally",
      "Utility bills that fluctuate month to month",
      "Shared subscriptions with rotating payers",
      "Grocery runs with unequal buyers",
    ],
    settle: "Typical settle: 2–3 transfers per flatmate per month.",
  },
  {
    id: "groups",
    tag: "Friend groups",
    title: "Dinners, outings, shared subscriptions.",
    body: `Ongoing friend group expenses are smaller but more frequent: dinners where someone always forgets their wallet, movie tickets bought in advance, a group Spotify plan. Divisio keeps a live balance so everyone always knows where they stand  |  no end-of-month reconstruction needed.`,
    scenarios: [
      "Restaurant bills with unequal portions",
      "Movie tickets bought by one person for everyone",
      "Group Spotify or OTT subscriptions",
      "Petrol for group road trips",
    ],
    settle: "Typical settle: 3–5 transfers to clear a month of group expenses.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div style={wrap}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Use cases</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06, maxWidth: 680 }}>
            Built for every way<br />Indians share money.
          </h1>
        </div>
      </section>

      {cases.map((c, i) => (
        <section key={c.id} id={c.id} style={{ padding: "72px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={wrap}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="two-col">
              <div style={i % 2 !== 0 ? { order: 2 } : {}}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand)", marginBottom: 16 }}>{c.tag}</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.12, marginBottom: 20 }}>{c.title}</h2>
                <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, marginBottom: 28 }}>{c.body}</p>
                <div style={{ padding: "14px 16px", borderRadius: 10, background: "var(--settle-dim)", border: "1px solid rgba(240,160,80,0.2)", fontSize: 13, color: "var(--settle)", fontWeight: 500 }}>
                  {c.settle}
                </div>
              </div>
              <div style={i % 2 !== 0 ? { order: 1 } : {}}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Common scenarios</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {c.scenarios.map((s) => (
                    <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", borderRadius: 9, background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <span style={{ color: "var(--brand)", marginTop: 1, flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L6 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span style={{ fontSize: 14, color: "var(--text-2)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section style={{ padding: "80px 24px 100px" }}>
        <div style={{ ...wrap, textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 20 }}>Ready to try it?</h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.divisio.in" style={{ padding: "12px 24px", borderRadius: 10, background: "var(--brand)", color: "#fff", fontSize: 15, fontWeight: 600 }}>Try it free</a>
            <a href="https://app.divisio.in/demo" style={{ padding: "12px 24px", borderRadius: 10, background: "var(--surface)", color: "var(--text-2)", fontSize: 15, fontWeight: 500, border: "1px solid var(--border)" }}>Try demo account</a>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 36px !important; } .two-col > * { order: unset !important; } }`}</style>
    </>
  );
}
