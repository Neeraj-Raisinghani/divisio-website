import { type CSSProperties, type ReactNode } from "react";

type TagColor  = "blue" | "green" | "lime" | "orange" | "purple" | "red" | "dark";
type TagStyle  = "light" | "solid";

interface TagProps {
  children: ReactNode;
  color?: TagColor;
  variant?: TagStyle;
  dot?: boolean;
  style?: CSSProperties;
}

const palette: Record<TagColor, { light: { bg: string; text: string; dot: string }; solid: { bg: string; text: string; dot: string } }> = {
  blue:   { light: { bg: "var(--color-blue-100)",   text: "var(--color-blue-600)",   dot: "var(--color-blue-500)"   }, solid: { bg: "var(--color-blue-500)",   text: "#fff", dot: "rgba(255,255,255,0.6)" } },
  green:  { light: { bg: "var(--color-green-100)",  text: "var(--color-green-700)",  dot: "var(--color-green-500)"  }, solid: { bg: "var(--color-green-500)",  text: "#fff", dot: "rgba(255,255,255,0.6)" } },
  lime:   { light: { bg: "var(--color-yellow-100)", text: "var(--color-yellow-700)", dot: "var(--color-yellow-500)" }, solid: { bg: "var(--color-yellow-500)", text: "#fff", dot: "rgba(255,255,255,0.6)" } },
  orange: { light: { bg: "var(--color-orange-100)", text: "var(--color-orange-500)", dot: "var(--color-orange-500)" }, solid: { bg: "var(--color-orange-500)", text: "#fff", dot: "rgba(255,255,255,0.6)" } },
  purple: { light: { bg: "var(--color-purple-100)", text: "var(--color-purple-700)", dot: "var(--color-purple-500)" }, solid: { bg: "var(--color-purple-700)", text: "#fff", dot: "rgba(255,255,255,0.6)" } },
  red:    { light: { bg: "var(--color-red-100)",    text: "var(--color-red-500)",    dot: "var(--color-red-500)"    }, solid: { bg: "var(--color-red-500)",    text: "#fff", dot: "rgba(255,255,255,0.6)" } },
  dark:   { light: { bg: "var(--surface-2)",        text: "var(--text-2)",           dot: "var(--text-3)"           }, solid: { bg: "var(--color-primary-900)", text: "#fff", dot: "rgba(255,255,255,0.6)" } },
};

export default function Tag({ children, color = "blue", variant = "light", dot = true, style }: TagProps) {
  const p = palette[color][variant];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "3px 8px", borderRadius: "var(--radius-full)",
      background: p.bg,
      fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)",
      color: p.text, letterSpacing: "0.01em", whiteSpace: "nowrap",
      ...style,
    }}>
      {dot && <span style={{ width: 5, height: 5, borderRadius: "50%", background: p.dot, flexShrink: 0, display: "inline-block" }} />}
      {children}
    </span>
  );
}
