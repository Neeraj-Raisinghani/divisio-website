"use client";
import { motion } from "framer-motion";

const expenses = [
  { label: "Hotel | Arjun paid",         amount: "₹12,400", split: "÷6" },
  { label: "Scooter rental | Priya paid", amount: "₹3,200",  split: "÷6" },
  { label: "Beach dinner | you paid",     amount: "₹4,800",  split: "÷6" },
  { label: "Paragliding | Rohan paid",    amount: "₹7,500",  split: "÷4" },
];

export default function AppMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      style={{ animation: "float 5s ease-in-out infinite", animationDelay: "1s" }}
    >
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 18, overflow: "hidden",
        width: "100%", maxWidth: 400,
        boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
      }}>
        <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em", fontFamily: "var(--font-display)" }}>Goa Trip 2025</div>
            <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 1 }}>6 members · 4 expenses</div>
          </div>
          <div style={{ fontSize: 11, padding: "3px 9px", borderRadius: 5, background: "rgba(79,110,247,0.1)", color: "var(--brand)", border: "1px solid var(--brand-border)", fontWeight: 500 }}>Active</div>
        </div>
        <div style={{ padding: "4px 18px" }}>
          {expenses.map((e, i) => (
            <motion.div
              key={e.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4, ease: "easeOut" }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" }}
            >
              <div style={{ fontSize: 12, color: "var(--text-2)" }}>{e.label}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, color: "var(--text-3)", fontVariantNumeric: "tabular-nums" }}>{e.split}</span>
                <span style={{ fontSize: 12, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{e.amount}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ margin: "12px 14px 14px", borderRadius: 10, background: "rgba(240,160,80,0.07)", border: "1px solid rgba(240,160,80,0.18)", padding: "12px 14px" }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--settle)", marginBottom: 8 }}>
            3 payments clear all debts
          </div>
          {[
            ["You to Arjun", "₹1,400"],
            ["Rohan to Priya", "₹950"],
            ["Sneha to You", "₹600"],
          ].map(([from, amt]) => (
            <motion.div
              key={from}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ fontSize: 12, color: "var(--text-2)", display: "flex", justifyContent: "space-between", marginTop: 5 }}
            >
              <span>{from}</span>
              <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: 600, color: "var(--text)" }}>{amt}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
