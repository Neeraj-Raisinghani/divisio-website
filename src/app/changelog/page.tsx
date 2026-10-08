import type { Metadata } from "next";
import { wrap, heroSection, divSection, eyebrow } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Every Divisio release documented. See what has shipped and what is coming next.",
  alternates: { canonical: "https://divisio.in/changelog" },
  openGraph: { title: "Changelog | Divisio", description: "Every release documented. We ship fast and tell you what changed.", url: "https://divisio.in/changelog" },
};

const entries = [
  {
    version: "0.1.0",
    date: "October 2025",
    label: "Alpha",
    labelColor: "var(--color-orange-500)",
    labelBg: "var(--color-orange-100)",
    labelBorder: "var(--color-orange-200)",
    dotColor: "var(--color-blue-500)",
    changes: [
      { text: "Group creation, expense logging, equal splits", color: "var(--color-blue-500)" },
      { text: "Debt simplification algorithm — minimum transactions via graph reduction", color: "var(--color-blue-500)" },
      { text: "Real-time balance updates via Supabase Realtime", color: "var(--color-green-600)" },
      { text: "Invite members via shareable link", color: "var(--color-green-600)" },
      { text: "Edit and delete expenses with instant recalculation", color: "var(--color-green-600)" },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <section style={heroSection}>
        <div style={wrap}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06, maxWidth: 560 }}>
            What&apos;s shipped.
          </h1>
          <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", marginTop: 20, maxWidth: 440 }}>
            Every release documented. We ship fast and tell you what changed.
          </p>
        </div>
      </section>

      <section style={divSection}>
        <div style={wrap}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ position: "relative", borderLeft: "2px solid var(--color-blue-200)", paddingLeft: 32 }}>
              {entries.map((e) => (
                <div key={e.version} style={{ marginBottom: 56, position: "relative" }}>
                  <div style={{ position: "absolute", left: -38, top: 4, width: 12, height: 12, borderRadius: "50%", background: e.dotColor, border: "2px solid var(--bg)" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-lg)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.02em" }}>v{e.version}</span>
                    <span style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "var(--radius-1)", background: e.labelBg, color: e.labelColor, border: `1px solid ${e.labelBorder}` }}>{e.label}</span>
                  </div>
                  <div style={{ fontSize: "var(--font-size-sm)", color: "var(--text-3)", marginBottom: 20 }}>{e.date}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {e.changes.map((c) => (
                      <div key={c.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: c.color, marginTop: 2, flexShrink: 0 }}>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5L5.5 10L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)", lineHeight: 1.6 }}>{c.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: -37, top: 4, width: 10, height: 10, borderRadius: "50%", background: "var(--surface-2)", border: "1px solid var(--border)" }} />
                <p style={{ fontSize: "var(--font-size-sm)", color: "var(--text-3)" }}>More coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
