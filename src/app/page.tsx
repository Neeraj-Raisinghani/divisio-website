import type { Metadata } from "next";
import Link from "next/link";
import AppMock from "@/components/AppMock";
import DebtGraph from "@/components/DebtGraph";
import FAQAccordion from "@/components/FAQAccordion";
import HomeContactForm from "@/components/HomeContactForm";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Divisio | Split expenses, not friendships.",
  description:
    "Track shared expenses for trips, flatmates, and friend groups. Divisio finds the minimum payments to settle all group debts.",
  alternates: { canonical: "https://divisio.in" },
  openGraph: {
    title: "Divisio | Split expenses, not friendships.",
    description:
      "Track shared expenses for trips, flatmates, and friend groups. Settle up with the fewest transfers possible.",
    url: "https://divisio.in",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Divisio free?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely. No premium tier, no hidden limits. The core features are free for everyone." } },
    { "@type": "Question", name: "Do all group members need an account?", acceptedAnswer: { "@type": "Answer", text: "Only the person creating the group needs one. Others join via a link and can view balances without signing up." } },
    { "@type": "Question", name: "How does the debt simplification work?", acceptedAnswer: { "@type": "Answer", text: "Divisio models the group's debts as a directed graph and runs a reduction algorithm to find the minimum number of payments that clear every balance." } },
    { "@type": "Question", name: "Is my data private?", acceptedAnswer: { "@type": "Answer", text: "Group data is only visible to group members. We do not sell your data or show ads." } },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Divisio",
  url: "https://divisio.in",
  description: "Track shared expenses and settle up with the fewest transactions possible. Built for Indian friend groups, trips, and flatmates.",
};

const wrap: React.CSSProperties   = { maxWidth: 1160, margin: "0 auto" };
const narrow: React.CSSProperties = { maxWidth: 740,  margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" };
const SP = "clamp(60px, 9vw, 112px) clamp(24px, 5vw, 64px)" as const;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section style={{ padding: "clamp(100px, 14vw, 160px) clamp(24px, 5vw, 64px) clamp(80px, 10vw, 120px)" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 100px)", alignItems: "center" }} className="two-col">
            <div>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 5.5vw, 68px)",
                fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.035em", marginBottom: 22,
                animation: "fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) both",
              }}>
                Split expenses,<br />not friendships.
              </h1>
              <p style={{
                fontSize: 17, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 400, marginBottom: 36,
                animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.12s both",
              }}>
                Track shared costs for trips, flats, and friend groups. Divisio figures out who pays whom with the fewest transfers possible.
              </p>
              <div style={{
                display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center",
                animation: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.22s both",
              }}>
                <a href="https://app.divisio.in"
                  style={{ padding: "11px 22px", borderRadius: 9, background: "var(--brand)", color: "#fff", fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>
                  Try it free
                </a>
                <a href="https://app.divisio.in/demo"
                  style={{ padding: "11px 22px", borderRadius: 9, color: "var(--text-2)", fontSize: 15, fontWeight: 500, border: "1px solid var(--border)", background: "transparent" }}>
                  See a demo
                </a>
              </div>
              <p style={{ fontSize: 12, color: "var(--text-3)", marginTop: 14, animation: "fadeUp 0.5s 0.5s both" }}>
                No credit card. No download. Works in any browser.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <AppMock />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem statement ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: SP }}>
        <RevealSection>
          <div style={narrow}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 600, lineHeight: 1.45, letterSpacing: "-0.02em",
              color: "var(--text-2)",
            }}>
              Every trip ends with 200 WhatsApp messages. Half of them are just &ldquo;wait who paid for the hotel?&rdquo; The spreadsheet is abandoned. The reminders get awkward.{" "}
              <span style={{ color: "var(--text)" }}>Divisio fixes this in one tap.</span>
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ── Debt simplification ── */}
      <section style={{ padding: SP, borderTop: "1px solid var(--border)" }}>
        <div style={{ ...wrap, padding: "0 clamp(24px, 5vw, 64px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }} className="two-col">
            <RevealSection>
              <div style={{ position: "sticky", top: 88 }}>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3.5vw, 46px)",
                  fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 20,
                }}>
                  The fewest<br />payments.<br />Every time.
                </h2>
                <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, marginBottom: 16 }}>
                  Most expense apps track who paid. They leave you to figure out who pays whom. That math is surprisingly hard and groups almost never find the optimal answer.
                </p>
                <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.75 }}>
                  Divisio treats the group&apos;s debts as a graph and runs a reduction algorithm. 10 people, 45 possible transfers, reduced to 9 or fewer.
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={0.15}>
              <div style={{ paddingTop: 8 }}>
                <DebtGraph />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── Features list ── */}
      <section style={{ padding: SP, borderTop: "1px solid var(--border)" }}>
        <div style={{ ...wrap, padding: "0 clamp(24px, 5vw, 64px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="two-col">
            <RevealSection>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              }}>
                What Divisio does.
              </h2>
            </RevealSection>
            <div>
              {[
                { n: "01", href: "/features/debt-simplification", title: "Debt simplification", body: "Graph reduction algorithm finds the minimum payments to clear all balances. Works for any group size." },
                { n: "02", href: "/features/flexible-splits",       title: "Flexible splits",       body: "Equal, exact amounts, percentages, or shares. Every real-world split scenario handled." },
                { n: "03", href: "/features/real-time-balances",    title: "Real-time balances",    body: "Add an expense and every member sees their balance update instantly via Supabase Realtime." },
                { n: "04", href: "/features/group-management",      title: "Group management",      body: "Separate groups for each trip, flat, or squad. Unlimited groups, full history, invite via link." },
                { n: "05", href: "/features/settle-summary",        title: "Settle summary",        body: "One screen showing exactly who pays whom. Share directly to WhatsApp." },
              ].map((f, i) => (
                <RevealSection key={f.n} delay={i * 0.07} y={12}>
                  <Link
                    href={f.href}
                    style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: 20, padding: "24px 0", borderTop: "1px solid var(--border)", textDecoration: "none" }}
                  >
                    <span style={{ fontSize: 11, color: "var(--text-3)", paddingTop: 3, fontVariantNumeric: "tabular-nums", fontWeight: 500 }}>{f.n}</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, letterSpacing: "-0.015em", marginBottom: 6 }}>{f.title}</div>
                      <div style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.65 }}>{f.body}</div>
                    </div>
                  </Link>
                </RevealSection>
              ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section style={{ padding: SP, borderTop: "1px solid var(--border)" }}>
        <div style={{ ...wrap, padding: "0 clamp(24px, 5vw, 64px)" }}>
          <RevealSection>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 40 }}>Built for</p>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }} className="three-col">
            {[
              { title: "Friend trips",  body: "Goa, Manali, Thailand. Log expenses as you go, settle when you land back home. Works across hotels, activities, food, even when different people join different days.", href: "/use-cases#trips" },
              { title: "Flatmates",     body: "Rent, electricity, groceries, the Netflix plan. Monthly balances, zero confusion. No more reconstructing who paid for what at the end of the month.", href: "/use-cases#flatmates" },
              { title: "Friend groups", body: "Dinners, concerts, road trips, shared subscriptions. Everyone always knows where they stand. The group keeps moving without the money conversation slowing it down.", href: "/use-cases#groups" },
            ].map((uc, i) => (
              <RevealSection key={uc.title} delay={i * 0.1} y={16}>
                <Link href={uc.href} style={{
                  display: "block", textDecoration: "none",
                  padding: `0 ${i < 2 ? 40 : 0}px 0 ${i > 0 ? 40 : 0}px`,
                  borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>{uc.title}</div>
                  <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 16 }}>{uc.body}</p>
                  <span style={{ fontSize: 13, color: "var(--brand)" }}>Read more →</span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo video ── */}
      <section style={{ padding: SP, borderTop: "1px solid var(--border)" }}>
        <div style={{ ...wrap, padding: "0 clamp(24px, 5vw, 64px)" }}>
          <RevealSection>
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 10 }}>See it in action</h2>
              <p style={{ fontSize: 15, color: "var(--text-2)" }}>A group settles a 5-day trip in under a minute.</p>
            </div>
          </RevealSection>
          <RevealSection delay={0.1}>
            {/* Replace with: <iframe src="YOUR_YOUTUBE_OR_LOOM_URL" ... /> */}
            <div style={{ borderRadius: 14, border: "1px solid var(--border)", background: "var(--surface)", aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 5.5L18.5 12L8 18.5V5.5Z" fill="white" /></svg>
              </div>
              <span style={{ fontSize: 13, color: "var(--text-3)" }}>Add YouTube or Loom embed</span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: SP, borderTop: "1px solid var(--border)" }}>
        <div style={{ ...wrap, padding: "0 clamp(24px, 5vw, 64px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="two-col">
            <RevealSection>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                Questions
              </h2>
            </RevealSection>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section style={{ padding: SP, borderTop: "1px solid var(--border)" }}>
        <div style={{ ...wrap, padding: "0 clamp(24px, 5vw, 64px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }} className="two-col">
            <RevealSection>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 14 }}>
                Got a question<br />or found a bug?
              </h2>
              <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.7 }}>
                We read every message and reply within a day. Feature ideas welcome too.
              </p>
            </RevealSection>
            <RevealSection delay={0.1}>
              <HomeContactForm />
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "clamp(60px, 9vw, 112px) clamp(24px, 5vw, 64px) clamp(80px, 12vw, 140px)", borderTop: "1px solid var(--border)" }}>
        <RevealSection>
          <div style={narrow}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4.5vw, 58px)",
              fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 28,
            }}>
              No more money<br />arguments.
            </h2>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="https://app.divisio.in"
                style={{ padding: "12px 24px", borderRadius: 9, background: "var(--brand)", color: "#fff", fontSize: 15, fontWeight: 600 }}>
                Try it free
              </a>
              <a href="https://app.divisio.in/demo"
                style={{ padding: "12px 24px", borderRadius: 9, background: "transparent", color: "var(--text-2)", fontSize: 15, fontWeight: 500, border: "1px solid var(--border)" }}>
                Try demo account
              </a>
            </div>
            <p style={{ fontSize: 12, color: "var(--text-3)", marginTop: 16 }}>Free. No credit card. No download.</p>
          </div>
        </RevealSection>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .two-col   { grid-template-columns: 1fr !important; gap: 40px !important; }
          .three-col { grid-template-columns: 1fr !important; gap: 36px !important; }
          .three-col > * { border-left: none !important; padding-left: 0 !important; padding-right: 0 !important; border-top: 1px solid var(--border); padding-top: 28px; }
          .three-col > *:first-child { border-top: none; padding-top: 0; }
        }
      `}</style>
    </>
  );
}
