import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Divisio team. Report bugs, suggest features, or just say hello.",
  alternates: { canonical: "https://divisio.in/contact" },
  openGraph: { title: "Contact | Divisio", description: "Get in touch. We read every message and reply fast.", url: "https://divisio.in/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
