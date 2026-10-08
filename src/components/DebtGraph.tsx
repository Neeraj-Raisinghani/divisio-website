"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const nodes = [
  { id: "A", x: 70,  y: 32,  label: "Arjun" },
  { id: "P", x: 230, y: 14,  label: "Priya" },
  { id: "R", x: 365, y: 42,  label: "Rohan" },
  { id: "S", x: 110, y: 145, label: "Sneha" },
  { id: "Y", x: 280, y: 155, label: "You"   },
];
const beforeEdges = [["A","P"],["A","S"],["A","Y"],["P","R"],["P","S"],["P","Y"],["R","S"],["R","Y"],["S","Y"]];
const afterEdges  = [["Y","A"],["R","P"],["S","Y"]];
const nm = Object.fromEntries(nodes.map(n => [n.id, n]));

function lineLen(a: string, b: string) {
  const f = nm[a], t = nm[b];
  return Math.sqrt((t.x - f.x) ** 2 + (t.y - f.y) ** 2);
}

function Seg({ a, b, markerId, dashOffset, color }: { a: string; b: string; markerId: string; dashOffset?: number; color: string }) {
  const f = nm[a], t = nm[b];
  const dx = t.x - f.x, dy = t.y - f.y, len = Math.sqrt(dx * dx + dy * dy);
  const len2 = lineLen(a, b);
  return (
    <line
      x1={f.x + (dx / len) * 13} y1={f.y + (dy / len) * 13}
      x2={t.x - (dx / len) * 15} y2={t.y - (dy / len) * 15}
      stroke={color} strokeWidth="1.5" markerEnd={`url(#${markerId})`}
      strokeDasharray={dashOffset !== undefined ? `${len2}` : undefined}
      strokeDashoffset={dashOffset !== undefined ? dashOffset : undefined}
      style={{ transition: dashOffset !== undefined ? "stroke-dashoffset 0.7s cubic-bezier(0.22,1,0.36,1)" : "none" }}
    />
  );
}

const NodeEl = ({ n }: { n: typeof nodes[0] }) => (
  <g key={n.id}>
    <circle cx={n.x} cy={n.y} r={11} fill="var(--surface-2)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <text x={n.x} y={n.y + 26} textAnchor="middle" fill="var(--text-3)" fontSize="10" fontFamily="var(--font-body)">{n.label}</text>
  </g>
);

export default function DebtGraph() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState<"idle" | "before" | "clearing" | "after" | "done">("idle");

  useEffect(() => {
    if (!inView || phase !== "idle") return;
    setPhase("before");
    const t1 = setTimeout(() => setPhase("clearing"), 1600);
    const t2 = setTimeout(() => setPhase("after"), 2200);
    const t3 = setTimeout(() => setPhase("done"), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [inView, phase]);

  const showBefore   = phase === "before" || phase === "clearing";
  const showAfter    = phase === "after" || phase === "done";
  const beforeOpacity = phase === "clearing" ? 0 : phase === "before" ? 1 : 0;

  return (
    <div ref={ref}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "center", marginBottom: 16 }}>
        <motion.div animate={{ opacity: showBefore ? 1 : 0.25 }} transition={{ duration: 0.6 }}
          style={{ fontSize: "var(--font-size-xs)", color: "var(--text-3)" }}>Without Divisio</motion.div>
        <div style={{ color: "var(--text-3)", fontSize: "var(--font-size-md)" }}>→</div>
        <motion.div animate={{ opacity: showAfter ? 1 : 0.25 }} transition={{ duration: 0.6 }}
          style={{ fontSize: "var(--font-size-xs)", color: "var(--brand)" }}>With Divisio</motion.div>
      </div>

      <svg viewBox="0 0 800 200" style={{ width: "100%", overflow: "visible" }}>
        <defs>
          <marker id="mb" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.2)" />
          </marker>
          <marker id="ma" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--brand)" />
          </marker>
        </defs>

        <g style={{ color: "rgba(255,255,255,0.2)", opacity: beforeOpacity, transition: "opacity 0.8s ease" }}>
          {beforeEdges.map(([a, b]) => <Seg key={a+b} a={a} b={b} markerId="mb" color="rgba(255,255,255,0.2)" />)}
          {nodes.map(n => <NodeEl key={n.id} n={n} />)}
        </g>

        <line x1="430" y1="0" x2="430" y2="190" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />

        <g style={{ transform: "translateX(430px)" }}>
          {afterEdges.map(([a, b], i) => (
            <Seg key={a+b} a={a} b={b} markerId="ma" color="var(--brand)"
              dashOffset={showAfter ? 0 : lineLen(a, b)}
            />
          ))}
          {nodes.map(n => <NodeEl key={n.id} n={n} />)}
        </g>
      </svg>

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, marginTop: 12 }}>
        <motion.div animate={{ opacity: showBefore ? 1 : 0.25 }} transition={{ duration: 0.6 }}
          style={{ fontSize: "var(--font-size-xs)", color: "var(--text-3)" }}>9 transfers needed</motion.div>
        <div />
        <motion.div animate={{ opacity: showAfter ? 1 : 0.25 }} transition={{ duration: 0.6 }}
          style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", color: showAfter ? "var(--brand)" : "var(--text-3)" }}>
          {phase === "done" ? "3 transfers. Done." : "3 transfers."}
        </motion.div>
      </div>
    </div>
  );
}
