"use client";
import { type CSSProperties, type ReactNode } from "react";

type Size      = "lg" | "md" | "sm";
type Hierarchy = "primary" | "secondary" | "ghost";
type Shape     = "rounded" | "pill" | "square";

interface ButtonProps {
  children?: ReactNode;
  size?: Size;
  hierarchy?: Hierarchy;
  shape?: Shape;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  className?: string;
}

const radius: Record<Shape, string> = {
  rounded: "var(--radius-2)",
  pill:    "var(--radius-full)",
  square:  "var(--radius-0)",
};

const sizes: Record<Size, CSSProperties> = {
  lg: { fontSize: "var(--font-size-base)", padding: "12px 20px",  gap: 8,  height: 48 },
  md: { fontSize: "var(--font-size-sm)",   padding: "9px 16px",   gap: 6,  height: 40 },
  sm: { fontSize: "var(--font-size-xs)",   padding: "6px 12px",   gap: 4,  height: 32 },
};

const iconOnlySizes: Record<Size, CSSProperties> = {
  lg: { width: 48, height: 48, padding: 0 },
  md: { width: 40, height: 40, padding: 0 },
  sm: { width: 32, height: 32, padding: 0 },
};

const hierarchyStyles: Record<Hierarchy, { normal: CSSProperties; hover: CSSProperties }> = {
  primary: {
    normal: { background: "var(--brand)", color: "#fff", border: "1px solid transparent" },
    hover:  { background: "var(--color-blue-600)" },
  },
  secondary: {
    normal: { background: "var(--brand-dim)", color: "var(--brand)", border: "1px solid var(--brand-border)" },
    hover:  { background: "var(--color-blue-200)" },
  },
  ghost: {
    normal: { background: "transparent", color: "var(--text-2)", border: "1px solid var(--border)" },
    hover:  { background: "var(--surface-2)" },
  },
};

const disabledStyle: CSSProperties = {
  background: "var(--surface-2)",
  color: "var(--text-3)",
  border: "1px solid var(--border)",
  cursor: "not-allowed",
  opacity: 0.6,
};

export default function Button({
  children,
  size = "md",
  hierarchy = "primary",
  shape = "rounded",
  leftIcon,
  rightIcon,
  iconOnly,
  disabled = false,
  href,
  onClick,
  type = "button",
  style,
  className,
}: ButtonProps) {
  const isIconOnly = !!iconOnly;
  const sizeStyle = isIconOnly ? iconOnlySizes[size] : sizes[size];
  const hStyle = hierarchyStyles[hierarchy];

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius[shape],
    fontFamily: "var(--font-body)",
    fontWeight: "var(--font-weight-semibold)",
    letterSpacing: "-0.01em",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    transition: "background 0.15s, opacity 0.15s, box-shadow 0.15s",
    outline: "none",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...sizeStyle,
    ...(disabled ? disabledStyle : hStyle.normal),
    ...style,
  };

  const inner = isIconOnly ? iconOnly : (
    <>
      {leftIcon && <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>{rightIcon}</span>}
    </>
  );

  function handleMouseEnter(e: React.MouseEvent<HTMLElement>) {
    if (!disabled) Object.assign((e.currentTarget as HTMLElement).style, hStyle.hover);
  }
  function handleMouseLeave(e: React.MouseEvent<HTMLElement>) {
    if (!disabled) Object.assign((e.currentTarget as HTMLElement).style, hStyle.normal);
  }

  if (href) {
    return (
      <a href={href} style={base} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} style={base} className={className} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {inner}
    </button>
  );
}
