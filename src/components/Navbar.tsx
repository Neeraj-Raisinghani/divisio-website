"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Button from "@/components/Button";

const productFeatures = [
  { href: "/features/debt-simplification", label: "Debt Simplification", desc: "Minimum payments to clear all group debts" },
  { href: "/features/flexible-splits", label: "Flexible Splits", desc: "Equal, exact, percentage, or shares" },
  { href: "/features/real-time-balances", label: "Real-time Balances", desc: "Live updates the moment an expense is added" },
  { href: "/features/group-management", label: "Group Management", desc: "Separate groups for trips, flats, squads" },
  { href: "/features/settle-summary", label: "Settle Summary", desc: "One-tap view of who pays whom" },
];

const topLinks = [
  { label: "Use Cases", href: "/use-cases" },
  { label: "About", href: "/about" },
  { label: "Changelog", href: "/changelog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setProductOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isProductActive = pathname.startsWith("/features");

  return (
    <nav style={{
      position: "fixed", top: 0, insetInline: 0, zIndex: 50,
      transition: "background 0.2s, border-color 0.2s",
      background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: "var(--font-weight-bold)", fontSize: "var(--font-size-md)", letterSpacing: "-0.03em", color: "var(--text)" }}>
          divisio
        </Link>

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="hidden md:flex">
          {/* Product dropdown */}
          <div style={{ position: "relative" }} ref={dropRef} onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
            <button
              onFocus={() => setProductOpen(true)}
              onBlur={() => setProductOpen(false)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "var(--font-size-sm)", fontFamily: "var(--font-body)", fontWeight: "var(--font-weight-medium)",
                color: isProductActive ? "var(--text)" : "var(--text-2)",
                display: "flex", alignItems: "center", gap: 4, padding: 0,
                transition: "color 0.15s",
              }}
            >
              Product
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.15s", transform: productOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {productOpen && (
              <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: 10 }}>
              <div style={{
                background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-4)",
                padding: 6, minWidth: 260, boxShadow: "var(--shadow-lg)",
              }}>
                <div style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-3)", padding: "8px 12px 6px" }}>
                  Features
                </div>
                {productFeatures.map((f) => (
                  <Link
                    key={f.href} href={f.href}
                    onClick={() => setProductOpen(false)}
                    style={{ display: "block", padding: "10px 12px", borderRadius: "var(--radius-2)", transition: "background 0.1s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <div style={{ fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-medium)", color: pathname === f.href ? "var(--brand)" : "var(--text)" }}>{f.label}</div>
                    <div style={{ fontSize: "var(--font-size-xs)", color: "var(--text-2)", marginTop: 2 }}>{f.desc}</div>
                  </Link>
                ))}
              </div>
              </div>
            )}
          </div>

          {topLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-medium)", color: pathname === l.href ? "var(--text)" : "var(--text-2)", transition: "color 0.15s" }}>
              {l.label}
            </Link>
          ))}

          <Button href="https://app.divisio.in" size="sm" hierarchy="primary" shape="rounded">Try it free</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "var(--text)" }} aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen
              ? <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              : <><line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><line x1="3" y1="14" x2="13" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "16px 24px 20px", display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-3)", padding: "8px 0 4px" }}>Product</div>
          {productFeatures.map((f) => (
            <Link key={f.href} href={f.href} style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)", padding: "7px 0" }} onClick={() => setMobileOpen(false)}>{f.label}</Link>
          ))}
          <div style={{ borderTop: "1px solid var(--border)", marginTop: 8, paddingTop: 8, display: "flex", flexDirection: "column", gap: 2 }}>
            {topLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: "var(--font-size-sm)", color: "var(--text-2)", padding: "7px 0" }} onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
          </div>
          <Button href="https://app.divisio.in" size="md" hierarchy="primary" shape="rounded" style={{ marginTop: 10, width: "100%", justifyContent: "center" }}>Try it free</Button>
        </div>
      )}
    </nav>
  );
}
