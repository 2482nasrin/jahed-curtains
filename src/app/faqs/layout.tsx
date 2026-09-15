import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about our curtains and blinds: pricing, free home visits, measuring, installation time, fabrics, payment and aftercare.",
  path: "/faqs",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
