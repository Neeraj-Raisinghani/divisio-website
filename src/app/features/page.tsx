"use client";
import Link from "next/link";
import Tag from "@/components/Tag";

const wrap: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

const features = [
  { href: "/features/debt-simplification", title: "Debt Simplification", desc: "A graph algorithm reduces all group debts to the minimum possible transfers. Every time, for any group size.", tag: "Core", tagColor: "blue" as const },
  { href: "/features/flexible-splits", title: "Flexible Splits", desc: "Equal, exact amounts, percentages, or shares. Every real-world split scenario handled without workarounds.", tag: "Splitting", tagColor: "green" as const },
  { href: "/features/real-time-balances", title: "Real-time Balances", desc: "Powered by Supabase Realtime. Add an expense, everyone's balance updates instantly across all devices.", tag: "Live", tagColor: "orange" as const },
  { href: "/features/group-management", title: "Group Management", desc: "Separate groups for trips, flats, friend squads. Unlimited groups, invite via link, full history.", tag: "Organisation", tagColor: "purple" as const },
  { href: "/features/settle-summary", title: "Settle Summary", desc: "One screen showing exactly who pays whom — with a direct share to WhatsApp.", tag: "Settlement", tagColor: "lime" as const },
];

export default function FeaturesIndexPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div style={wrap}>
          <div style={{ maxWidth: 600 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06 }}>
              Everything Divisio can do.
            </h1>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div style={wrap}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {features.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr auto",
                  gap: 40,
                  alignItems: "center",
                  padding: "28px 0",
                  borderTop: "1px solid var(--border)",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                className="feature-row"
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 2vw, 20px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.02em" }}>{f.title}</div>
                <div style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)", lineHeight: 1.65 }}>{f.desc}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <Tag color={f.tagColor} variant="light">{f.tag}</Tag>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </Link>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 640px) { .feature-row { grid-template-columns: 1fr !important; gap: 12px !important; } .feature-row > *:last-child { display: none; } }`}</style>
    </>
  );
}
