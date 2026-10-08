import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Management",
  description: "Create unlimited groups for trips, flats, and friend squads. Invite via link, full expense history, edit at any time.",
  alternates: { canonical: "https://divisio.in/features/group-management" },
  openGraph: { title: "Group Management | Divisio", description: "Unlimited groups, invite via link, full history. A group for every context.", url: "https://divisio.in/features/group-management" },
};

const wrap: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

export default function GroupManagementPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div style={wrap}>
          <div style={{ maxWidth: 640 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4.5vw, 54px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 24 }}>
              A group for every context.<br />Nothing mixed up.
            </h1>
            <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", lineHeight: 1.75 }}>
              Goa trip, flat expenses, college group, work team lunch  |  every group gets its own space, its own history, and its own settlement state.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="three-col">
            {[
              { title: "Unlimited groups", body: "Create as many groups as you need. No per-group limits.", color: "var(--color-blue-500)", bg: "var(--color-blue-100)" },
              { title: "Invite via link", body: "Share a group link. Members join instantly — no account required to view.", color: "var(--color-green-700)", bg: "var(--color-green-100)" },
              { title: "Full expense history", body: "Every expense logged, searchable, and editable. Nothing lost in a chat thread.", color: "var(--color-orange-500)", bg: "var(--color-orange-100)" },
              { title: "Edit at any time", body: "Made a mistake? Update or remove any expense. Balances recalculate automatically.", color: "var(--color-purple-700)", bg: "var(--color-purple-100)" },
              { title: "Member management", body: "Add or remove members. Balances adjust for any outstanding amounts.", color: "var(--color-yellow-700)", bg: "var(--color-yellow-100)" },
              { title: "Group archive", body: "Trip over? Archive the group. The history stays — you can always look back.", color: "var(--color-red-500)", bg: "var(--color-red-100)" },
            ].map((f) => (
              <div key={f.title} style={{ padding: "22px 22px 26px", borderRadius: "var(--radius-4)", background: f.bg, border: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-base)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "-0.01em", marginBottom: 10, color: f.color }}>{f.title}</div>
                <div style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)", lineHeight: 1.65 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .three-col { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
