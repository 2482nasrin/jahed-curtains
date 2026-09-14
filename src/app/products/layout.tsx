import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Curtains, Blinds & Motorized Curtains",
  description:
    "Browse made-to-measure curtains, sheer and blackout curtains, roller, roman and zebra blinds and motorized curtains. Free home visit and installation in the UAE.",
  path: "/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
