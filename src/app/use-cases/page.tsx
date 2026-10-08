import type { Metadata } from "next";
import Button from "@/components/Button";

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
    tagColor: "var(--color-blue-500)", tagBg: "var(--color-blue-100)", tagBorder: "var(--color-blue-200)",
    accentColor: "var(--color-blue-500)", accentBg: "var(--color-blue-100)",
    title: "From the first booking to the last UPI transfer.",
    body: `Trips have the most complex split scenarios: hotel split across 6 but paragliding only 4 went, that one person who missed the beach dinner. Divisio tracks every nuance and at the end shows you the minimum number of transfers to clear all debts — not 45, not 20, but the actual minimum.`,
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
    tagColor: "var(--color-green-700)", tagBg: "var(--color-green-100)", tagBorder: "var(--color-green-200)",
    accentColor: "var(--color-green-700)", accentBg: "var(--color-green-100)",
    title: "Monthly balances with zero drama.",
    body: `Rent, electricity, gas, groceries, the Netflix subscription. Flatmate expenses repeat and accumulate. Divisio makes it easy to log them as they happen and see a running balance — so the monthly settlement is one quick round of transfers, not a reconstruction.`,
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
    tagColor: "var(--color-orange-500)", tagBg: "var(--color-orange-100)", tagBorder: "var(--color-orange-200)",
    accentColor: "var(--color-orange-500)", accentBg: "var(--color-orange-100)",
    title: "Dinners, outings, shared subscriptions.",
    body: `Ongoing friend group expenses are smaller but more frequent: dinners where someone always forgets their wallet, movie tickets bought in advance, a group Spotify plan. Divisio keeps a live balance so everyone always knows where they stand — no end-of-month reconstruction needed.`,
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
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06, maxWidth: 680 }}>
            Built for every way<br />Indians share money.
          </h1>
        </div>
      </section>

      {cases.map((c, i) => (
        <section key={c.id} id={c.id} style={{ padding: "72px 24px", borderTop: "1px solid var(--border)" }}>
          <div style={wrap}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="two-col">
              <div style={i % 2 !== 0 ? { order: 2 } : {}}>
                <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: "var(--radius-full)", background: c.tagBg, border: `1px solid ${c.tagBorder}`, marginBottom: 16 }}>
                  <span style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: c.tagColor }}>{c.tag}</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.025em", lineHeight: 1.12, marginBottom: 20 }}>{c.title}</h2>
                <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", lineHeight: 1.75, marginBottom: 28 }}>{c.body}</p>
                <div style={{ padding: "14px 16px", borderRadius: "var(--radius-3)", background: c.accentBg, border: `1px solid ${c.tagBorder}`, fontSize: "var(--font-size-sm)", color: c.accentColor, fontWeight: "var(--font-weight-medium)" }}>
                  {c.settle}
                </div>
              </div>
              <div style={i % 2 !== 0 ? { order: 1 } : {}}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Common scenarios</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {c.scenarios.map((s) => (
                    <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", borderRadius: "var(--radius-2)", background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <span style={{ color: c.accentColor, marginTop: 1, flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L6 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section style={{ padding: "80px 24px 100px", background: "var(--color-blue-500)" }}>
        <div style={{ ...wrap, textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.025em", marginBottom: 20, color: "#fff" }}>Ready to try it?</h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button href="https://app.divisio.in" size="lg" hierarchy="primary" shape="rounded" style={{ background: "#fff", color: "var(--color-blue-500)" }}>Try it free</Button>
            <Button href="https://app.divisio.in/demo" size="lg" hierarchy="ghost" shape="rounded" style={{ color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.3)" }}>Try demo account</Button>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 36px !important; } .two-col > * { order: unset !important; } }`}</style>
    </>
  );
}
