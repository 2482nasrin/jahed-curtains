import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Book a Free Home Visit",
  description:
    "Book a free home visit for curtains and blinds anywhere in Dubai, Sharjah or Abu Dhabi. Call, email or WhatsApp Jahed Curtains for a free measurement and quote.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
