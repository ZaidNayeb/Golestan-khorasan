import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

// TODO: Update SITE_URL to the production domain once it is live.
const SITE_URL = "https://golestan-khorasan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "پانسی – گلستان خراسان",
    template: "%s | پانسی – گلستان خراسان",
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/pansy-logo.svg",
    apple: "/images/pansy-logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "fa_AF",
    url: SITE_URL,
    siteName: "پانسی – گلستان خراسان",
    title: "پانسی – گلستان خراسان",
    description: siteConfig.description,
    images: [
      {
        url: "/images/pansy-orange-3d.png",
        width: 1200,
        height: 630,
        alt: "پانسی – آبمیوه‌های طبیعی و خمیرمایه از خراسان",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "پانسی – گلستان خراسان",
    description: siteConfig.description,
    images: ["/images/pansy-orange-3d.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
