import type { Metadata } from "next";

export const SITE_URL = "https://www.jahedcurtains.com";
export const SITE_NAME = "Jahed Curtains";
export const DEFAULT_OG_IMAGE = "/images/curtains-image-1.png";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  /** Use the title as-is instead of applying the "%s | Jahed Curtains" template. */
  absoluteTitle?: boolean;
};

const MAX_DESCRIPTION = 155;
const DESCRIPTION_SUFFIXES = [
  " Free home visit, measurement and installation across Dubai, Sharjah and Abu Dhabi.",
  " Free home visit and installation in the UAE.",
  " Free quote in the UAE.",
];

/**
 * Pads a short catalogue/blog description with a call to action so meta
 * descriptions land in the recommended 120-155 character range, without
 * ever exceeding the limit.
 */
export function withSeoSuffix(description: string): string {
  const base = description.trim();
  for (const suffix of DESCRIPTION_SUFFIXES) {
    if (base.length + suffix.length <= MAX_DESCRIPTION) return base + suffix;
  }
  return base;
}

/**
 * Builds consistent per-page metadata: canonical URL, Open Graph, Twitter
 * card and robots directives. `path` must start with "/".
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  return {
    title: absoluteTitle
      ? { absolute: title }
      : { default: title, template: `%s | ${SITE_NAME}` },
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      locale: "en_AE",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
