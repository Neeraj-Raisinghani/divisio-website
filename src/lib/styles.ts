import type { CSSProperties } from "react";

export const wrap: CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };

/** Standard section padding  |  80px top/bottom */
export const section: CSSProperties = { padding: "80px 24px" };

/** First section after navbar  |  extra top clearance */
export const heroSection: CSSProperties = { padding: "120px 24px 80px" };

/** Section with top border divider */
export const divSection: CSSProperties = { padding: "80px 24px", borderTop: "1px solid var(--border)" };

export const eyebrow: CSSProperties = {
  fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
  textTransform: "uppercase" as const, color: "var(--text-3)", marginBottom: 16,
};

export const eyebrowBrand: CSSProperties = { ...eyebrow, color: "var(--brand)" };

export const h1: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(34px, 5vw, 60px)",
  fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 24,
};

export const h2: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(26px, 3.5vw, 44px)",
  fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 20,
};

export const lead: CSSProperties = { fontSize: 16, color: "var(--text-2)", lineHeight: 1.75 };
