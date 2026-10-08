"use client";
import { useState } from "react";
import { wrap, heroSection, eyebrow } from "@/lib/styles";
import Button from "@/components/Button";

// Note: metadata cannot be exported from a "use client" component.
// Move to a layout.tsx or a server wrapper if per-page metadata is needed here.

const inputStyle: React.CSSProperties = {
  padding: "12px 16px",
  borderRadius: "var(--radius-3)",
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontSize: "var(--font-size-sm)",
  outline: "none",
  width: "100%",
  fontFamily: "var(--font-body)",
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <section style={heroSection}>
        <div style={wrap}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 20 }}>
            We read everything.
          </h1>
          <p style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)", maxWidth: 440, lineHeight: 1.7 }}>
            Bug to report, feature to suggest, or just want to say hi? We reply fast.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="two-col">
            <div>
              {sent ? (
                <div style={{ padding: "32px 28px", borderRadius: "var(--radius-4)", background: "var(--surface)", border: "1px solid var(--border)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-md)", fontWeight: "var(--font-weight-bold)", marginBottom: 8 }}>Message sent.</div>
                  <p style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)" }}>We&apos;ll get back to you within a day or two.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-medium)", color: "var(--text-2)" }}>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Arjun Mehta" style={inputStyle} required />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-medium)", color: "var(--text-2)" }}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="arjun@example.com" style={inputStyle} required />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-medium)", color: "var(--text-2)" }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="I&apos;d love to see..." rows={5} style={{ ...inputStyle, resize: "vertical" }} required />
                  </div>
                  <Button type="submit" size="md" hierarchy="primary" shape="rounded" style={{ alignSelf: "flex-start" }}>Send message</Button>
                </form>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                <div style={{ ...eyebrow, marginBottom: 10 }}>Email</div>
                <a href="mailto:neeraj@divisio.in" style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)" }}>neeraj@divisio.in</a>
              </div>
              <div>
                <div style={{ ...eyebrow, marginBottom: 10 }}>LinkedIn</div>
                <a href="https://linkedin.com/in/neerajraisinghani" target="_blank" rel="noopener noreferrer" style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)" }}>linkedin.com/in/neerajraisinghani</a>
              </div>
              <div>
                <div style={{ ...eyebrow, marginBottom: 10 }}>Website</div>
                <a href="https://neerajraisinghani.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "var(--font-size-base)", color: "var(--text-2)" }}>neerajraisinghani.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </>
  );
}
