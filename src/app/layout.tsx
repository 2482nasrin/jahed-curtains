import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp"; // ১. ফ্লোটিং হোয়াটসঅ্যাপ ইমপোর্ট করা হলো

export const metadata: Metadata = {
  title: "Jahed Curtains",
  description: "Modern Curtains and Blinds",
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
      </body>
    </html>
  );
}