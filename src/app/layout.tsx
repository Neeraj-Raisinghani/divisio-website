import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divisio.in"),
  title: {
    default: "Divisio | Split expenses, not friendships.",
    template: "%s | Divisio",
  },
  description:
    "Track shared expenses and settle up with the fewest transactions possible. Built for Indian friend groups, trips, and flatmates.",
  keywords: [
    "expense splitting",
    "split expenses",
    "group expenses India",
    "shared expenses app",
    "trip expense tracker",
    "flatmate expenses",
    "debt simplification",
    "settle up",
    "UPI expense tracker",
    "Splitwise alternative India",
  ],
  authors: [{ name: "Neeraj Raisinghani", url: "https://neerajraisinghani.com" }],
  creator: "Neeraj Raisinghani",
  publisher: "Divisio",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Divisio | Split expenses, not friendships.",
    description:
      "Track shared expenses and settle up with the fewest transactions possible. Built for Indian friend groups, trips, and flatmates.",
    url: "https://divisio.in",
    siteName: "Divisio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Divisio | Split expenses, not friendships.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divisio | Split expenses, not friendships.",
    description:
      "Track shared expenses and settle up with the fewest transactions possible. Built for Indian friend groups, trips, and flatmates.",
    images: ["/og-image.png"],
    creator: "@neerajraisinghani",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
