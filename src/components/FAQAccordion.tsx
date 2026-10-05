"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { q: "Is Divisio free?", a: "Yes, completely. No premium tier, no hidden limits. The core features are free for everyone." },
  { q: "Do all group members need an account?", a: "Only the person creating the group needs one. Others join via a link and can view balances without signing up. They need an account to log expenses." },
  { q: "How does the debt simplification work?", a: "Divisio models the group's debts as a directed graph, then runs a reduction algorithm to find the minimum number of payments that clear every balance. 10 people could theoretically need 45 transfers; Divisio gets it done in 9 or fewer." },
  { q: "Does it work for international trips with different currencies?", a: "Multi-currency is on the roadmap. Right now Divisio works best when everyone is in the same currency." },
  { q: "Is my data private?", a: "Group data is only visible to group members. We don't sell your data or show ads." },
  { q: "What if someone disputes an expense?", a: "Any expense can be edited or deleted at any time. Balances recalculate the moment you make a change." },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderTop: "1px solid var(--border)" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%", textAlign: "left", background: "none", border: "none",
              cursor: "pointer", padding: "20px 0",
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
              fontFamily: "var(--font-body)",
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text)", lineHeight: 1.4 }}>{item.q}</span>
            <motion.svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ flexShrink: 0 }}
            >
              <path d="M8 3V13M3 8H13" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" />
            </motion.svg>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div style={{ paddingBottom: 20, fontSize: 14, color: "var(--text-2)", lineHeight: 1.75, maxWidth: 620 }}>
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <div style={{ borderTop: "1px solid var(--border)" }} />
    </div>
  );
}
