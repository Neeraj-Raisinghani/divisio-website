"use client";

const expenses = [
  { date: "Oct 14", desc: "Hotel Booking",    paidBy: "Arjun", amount: "₹12,400", split: "÷6" },
  { date: "Oct 14", desc: "Scooter Rental",   paidBy: "Priya", amount: "₹3,200",  split: "÷6" },
  { date: "Oct 15", desc: "Beach Dinner",     paidBy: "You",   amount: "₹4,800",  split: "÷6" },
  { date: "Oct 15", desc: "Paragliding",      paidBy: "Rohan", amount: "₹7,500",  split: "÷4" },
  { date: "Oct 16", desc: "Taxi to Airport",  paidBy: "Sneha", amount: "₹1,200",  split: "÷6" },
];

const balances = [
  { name: "You",   initials: "Y", amount: "+₹2,150", pos: true  },
  { name: "Arjun", initials: "A", amount: "-₹1,400", pos: false },
  { name: "Priya", initials: "P", amount: "+₹640",   pos: true  },
  { name: "Rohan", initials: "R", amount: "-₹950",   pos: false },
  { name: "Sneha", initials: "S", amount: "+₹600",   pos: true  },
  { name: "Dev",   initials: "D", amount: "-₹1,040", pos: false },
];

const settlements = [
  { from: "Arjun", to: "You",   amount: "₹1,400" },
  { from: "Rohan", to: "Priya", amount: "₹950"   },
  { from: "Dev",   to: "Sneha", amount: "₹440"   },
];

const avatarColors = ["#6B7280","#9CA3AF","#4B5563","#6B7280","#9CA3AF","#4B5563"];

export default function AppScreenshot() {
  return (
    <div style={{
      background: "var(--surface)",
      borderRadius: "var(--radius-4)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-2xl)",
      overflow: "hidden",
      fontFamily: "var(--font-body)",
      userSelect: "none",
      width: "100%",
      maxWidth: 900,
    }}>
      {/* Top bar */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "11px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--font-weight-bold)", fontSize: "var(--font-size-sm)", letterSpacing: "-0.03em", color: "var(--text)" }}>divisio</span>
          <svg width="4" height="4" viewBox="0 0 4 4"><circle cx="2" cy="2" r="2" fill="var(--color-primary-300)" /></svg>
          <span style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)", fontWeight: "var(--font-weight-medium)" }}>Goa Trip 2025</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex" }}>
            {["A","P","R","S","Y","D"].map((m, i) => (
              <div key={m} style={{ width: 22, height: 22, borderRadius: "50%", background: avatarColors[i], border: "2px solid var(--surface)", marginLeft: i > 0 ? -6 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#fff", fontWeight: 700 }}>{m}</div>
            ))}
          </div>
          <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text-3)" }}>6 members</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 272px" }}>

        {/* Left — expenses */}
        <div style={{ borderRight: "1px solid var(--border)" }}>

          {/* Stats */}
          <div style={{ padding: "12px 20px", borderBottom: "1px solid var(--border)", display: "flex", gap: 8 }}>
            {[
              { label: "Total spent", value: "₹29,100" },
              { label: "Your share",  value: "₹4,850",  accent: "var(--color-blue-500)" },
              { label: "You're owed", value: "₹2,150",  accent: "var(--color-green-600)" },
            ].map((s) => (
              <div key={s.label} style={{ flex: 1, padding: "10px 12px", borderRadius: "var(--radius-2)", background: "var(--color-primary-100)", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 3 }}>{s.label}</div>
                <div style={{ fontSize: "var(--font-size-base)", fontWeight: "var(--font-weight-bold)", color: s.accent ?? "var(--text)", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Table header */}
          <div style={{ display: "grid", gridTemplateColumns: "64px 1fr 80px 52px 80px", padding: "7px 20px", borderBottom: "1px solid var(--border)", background: "var(--color-primary-100)" }}>
            {["Date","Description","Paid by","Split","Amount"].map(h => (
              <span key={h} style={{ fontSize: 10, color: "var(--text-3)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.04em" }}>{h}</span>
            ))}
          </div>

          {/* Rows */}
          {expenses.map((e, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "64px 1fr 80px 52px 80px", padding: "10px 20px", borderBottom: "1px solid var(--border)", alignItems: "center", background: "var(--surface)" }}>
              <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text-3)" }}>{e.date}</span>
              <span style={{ fontSize: "var(--font-size-sm)", color: "var(--text)", fontWeight: "var(--font-weight-medium)" }}>{e.desc}</span>
              <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text-2)", background: "var(--surface-2)", padding: "2px 7px", borderRadius: "var(--radius-full)", border: "1px solid var(--border)", display: "inline-block", width: "fit-content" }}>{e.paidBy}</span>
              <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text-3)", fontVariantNumeric: "tabular-nums" }}>{e.split}</span>
              <span style={{ fontSize: "var(--font-size-sm)", color: "var(--text)", fontWeight: "var(--font-weight-semibold)", fontVariantNumeric: "tabular-nums" }}>{e.amount}</span>
            </div>
          ))}
        </div>

        {/* Right panel */}
        <div style={{ background: "var(--color-primary-100)" }}>

          {/* Balances */}
          <div style={{ padding: "12px 14px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontSize: 10, fontWeight: "var(--font-weight-semibold)", color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Balances</div>
            {balances.map((b, i) => (
              <div key={b.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 0", borderBottom: i < balances.length - 1 ? "1px solid var(--border)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: avatarColors[i], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#fff", fontWeight: 700 }}>{b.initials}</div>
                  <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text)" }}>{b.name}</span>
                </div>
                <span style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", fontVariantNumeric: "tabular-nums", color: b.pos ? "var(--color-green-600)" : "var(--color-red-500)" }}>{b.amount}</span>
              </div>
            ))}
          </div>

          {/* Settle summary */}
          <div style={{ padding: "12px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ fontSize: 10, fontWeight: "var(--font-weight-semibold)", color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Settle up</div>
              <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: "var(--radius-full)", background: "var(--color-orange-100)", color: "var(--color-orange-500)", fontWeight: "var(--font-weight-semibold)", border: "1px solid var(--color-orange-200)" }}>3 transfers</span>
            </div>
            {settlements.map((s, i) => (
              <div key={i} style={{ padding: "8px 10px", borderRadius: "var(--radius-2)", background: "var(--surface)", border: "1px solid var(--border)", marginBottom: 5, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text)", fontWeight: "var(--font-weight-medium)" }}>{s.from}</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5H8M6 3L8 5L6 7" stroke="var(--text-3)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text)", fontWeight: "var(--font-weight-medium)" }}>{s.to}</span>
                </div>
                <span style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-bold)", color: "var(--color-orange-500)", fontVariantNumeric: "tabular-nums" }}>{s.amount}</span>
              </div>
            ))}
            <div style={{ marginTop: 10, padding: "9px", borderRadius: "var(--radius-2)", background: "var(--brand)", textAlign: "center", cursor: "pointer" }}>
              <span style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", color: "#fff" }}>Share to WhatsApp →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
