import type { CSSProperties } from "react";

export const wrap: CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

export const section: CSSProperties = { padding: "80px 24px" };
export const heroSection: CSSProperties = { padding: "120px 24px 80px" };
export const divSection: CSSProperties = { padding: "80px 24px", borderTop: "1px solid var(--border)" };

export const eyebrow: CSSProperties = {
  fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.08em",
  textTransform: "uppercase" as const, color: "var(--text-3)", marginBottom: 16,
};

export const eyebrowBrand: CSSProperties = { ...eyebrow, color: "var(--brand)" };

export const h1: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(34px, 5vw, 60px)",
  fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 24,
};

export const h2: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(26px, 3.5vw, 44px)",
  fontWeight: "var(--font-weight-bold)", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 20,
};

export const lead: CSSProperties = { fontSize: "var(--font-size-base)", color: "var(--text-2)", lineHeight: 1.75 };
