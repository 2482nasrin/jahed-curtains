import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp"; // ১. ফ্লোটিং হোয়াটসঅ্যাপ ইমপোর্ট করা হলো
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const HOME_TITLE = "Jahed Curtains | Made-to-Measure Curtains & Blinds in UAE";
const HOME_DESCRIPTION =
  "Made-to-measure curtains, blinds and motorized curtains for homes and offices in Dubai, Sharjah and Abu Dhabi. Free home visit, measurement and installation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "curtains Dubai",
    "blinds Dubai",
    "made to measure curtains UAE",
    "blackout curtains",
    "sheer curtains",
    "motorized curtains",
    "roller blinds",
    "curtains Abu Dhabi",
    "curtains Sharjah",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "/",
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* ২. এখানে বসানোর ফলে এখন এটি সব পেজে অটোমেটিক দেখাবে */}
        <FloatingWhatsApp />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
