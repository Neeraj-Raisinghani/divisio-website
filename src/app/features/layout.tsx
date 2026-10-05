import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Everything Divisio does: debt simplification, flexible splits, real-time balances, group management, and settle summary.",
  alternates: { canonical: "https://divisio.in/features" },
  openGraph: { title: "Features | Divisio", description: "Debt simplification, flexible splits, real-time balances, and more.", url: "https://divisio.in/features" },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
