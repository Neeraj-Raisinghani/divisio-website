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
    changes: [
      "Group creation, expense logging, equal splits",
      "Debt simplification algorithm  |  minimum transactions via graph reduction",
      "Real-time balance updates via Supabase Realtime",
      "Invite members via shareable link",
      "Edit and delete expenses with instant recalculation",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <section style={heroSection}>
        <div style={wrap}>
          <div style={eyebrow}>Changelog</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06, maxWidth: 560 }}>
            What&apos;s shipped.
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-2)", marginTop: 20, maxWidth: 440 }}>
            Every release documented. We ship fast and tell you what changed.
          </p>
        </div>
      </section>

      <section style={divSection}>
        <div style={wrap}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ position: "relative", borderLeft: "1px solid var(--border)", paddingLeft: 32 }}>
              {entries.map((e) => (
                <div key={e.version} style={{ marginBottom: 56, position: "relative" }}>
                  <div style={{ position: "absolute", left: -37, top: 4, width: 10, height: 10, borderRadius: "50%", background: "var(--brand)", border: "2px solid var(--bg)" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>v{e.version}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 5, background: "rgba(240,160,80,0.12)", color: "var(--settle)", border: "1px solid rgba(240,160,80,0.25)" }}>{e.label}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 20 }}>{e.date}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {e.changes.map((c) => (
                      <div key={c} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--brand)", marginTop: 2, flexShrink: 0 }}>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5L5.5 10L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.6 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: -37, top: 4, width: 10, height: 10, borderRadius: "50%", background: "var(--surface-2)", border: "1px solid var(--border)" }} />
                <p style={{ fontSize: 14, color: "var(--text-3)" }}>More coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
