import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Curtain & Blind Projects Across the UAE",
  description:
    "See recent curtain and blind installations by Jahed Curtains in villas, apartments, offices and hotels across Dubai, Sharjah and Abu Dhabi.",
  path: "/projects",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
