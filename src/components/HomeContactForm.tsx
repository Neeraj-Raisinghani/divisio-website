"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomeContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ email: "", msg: "" });
  const field: React.CSSProperties = {
    padding: "11px 14px", borderRadius: 8,
    background: "transparent", border: "1px solid var(--border)",
    color: "var(--text)", fontSize: 14, outline: "none",
    fontFamily: "var(--font-body)", width: "100%", transition: "border-color 0.15s",
  };
  if (sent) return (
    <motion.p
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      style={{ fontSize: 15, color: "var(--text-2)", paddingTop: 8 }}
    >
      Got it. We&apos;ll get back to you soon.
    </motion.p>
  );
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 480 }}>
      <input type="email" placeholder="Your email" value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })} required style={field}
        onFocus={e => (e.target.style.borderColor = "var(--brand)")}
        onBlur={e => (e.target.style.borderColor = "var(--border)")} />
      <textarea placeholder="What's on your mind?" value={form.msg}
        onChange={e => setForm({ ...form, msg: e.target.value })} required rows={4}
        style={{ ...field, resize: "vertical" }}
        onFocus={e => (e.target.style.borderColor = "var(--brand)")}
        onBlur={e => (e.target.style.borderColor = "var(--border)")} />
      <motion.button type="submit"
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        style={{
          alignSelf: "flex-start", padding: "10px 22px", borderRadius: 8,
          background: "var(--brand)", color: "#fff", fontSize: 14,
          fontWeight: 600, border: "none", cursor: "pointer",
        }}
      >Send</motion.button>
    </form>
  );
}
