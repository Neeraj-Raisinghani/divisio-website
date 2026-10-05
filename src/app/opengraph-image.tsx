import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Divisio | Split expenses, not friendships.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C0C14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#4F6EF7", letterSpacing: "-0.02em", marginBottom: 36 }}>
          divisio
        </div>

        <div style={{ display: "flex", fontSize: 68, fontWeight: 800, color: "#E6E6F0", letterSpacing: "-0.04em", lineHeight: 1.02, marginBottom: 28 }}>
          Split expenses, not friendships.
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#9898B8", lineHeight: 1.5, maxWidth: 700 }}>
          Track shared costs and settle with the fewest transfers possible. Built for Indian friend groups, trips, and flatmates.
        </div>

        <div style={{
          display: "flex",
          marginTop: 48,
          padding: "14px 28px",
          borderRadius: 12,
          background: "#4F6EF7",
          color: "#fff",
          fontSize: 18,
          fontWeight: 600,
        }}>
          divisio.in
        </div>
      </div>
    ),
    { ...size }
  );
}
