import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px) clamp(36px, 5vw, 60px)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 40, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--font-weight-bold)", fontSize: "var(--font-size-md)", letterSpacing: "-0.03em", marginBottom: 12 }}>divisio</div>
            <p style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)", lineHeight: 1.7, maxWidth: 260, marginBottom: 16 }}>
              Shared expense tracking with minimum-transaction settlement. Built for Indian friend groups, trips, and flatmates.
            </p>
          </div>

          {/* Product */}
          <div>
            <div style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Product</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/features/debt-simplification", label: "Debt Simplification" },
                { href: "/features/flexible-splits", label: "Flexible Splits" },
                { href: "/features/real-time-balances", label: "Real-time Balances" },
                { href: "/features/group-management", label: "Group Management" },
                { href: "/features/settle-summary", label: "Settle Summary" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)" }}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/use-cases", label: "Use Cases" },
                { href: "/about", label: "About" },
                { href: "/changelog", label: "Changelog" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)" }}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Builder */}
          <div>
            <div style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Builder</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="https://neerajraisinghani.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)" }}>neerajraisinghani.com</a>
              <a href="mailto:neeraj@divisio.in" style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)" }}>neeraj@divisio.in</a>
              <a href="https://linkedin.com/in/neerajraisinghani" target="_blank" rel="noopener noreferrer" style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)" }}>LinkedIn</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text-3)" }}>
            © {new Date().getFullYear()} Divisio. Built by{" "}
            <a href="https://neerajraisinghani.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-2)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              Neeraj Raisinghani
            </a>
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text-3)" }}>Privacy Policy</span>
            <span style={{ fontSize: "var(--font-size-xs)", color: "var(--text-3)" }}>Terms of Use</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr; } .footer-grid > *:first-child { grid-column: 1 / -1; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}
