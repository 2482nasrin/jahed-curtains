import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo1.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  description:
    "Made-to-measure curtains, blinds and motorized curtains for homes and offices in Dubai, Sharjah and Abu Dhabi. Free home visit, measuring and installation.",
  telephone: "+971547839880",
  email: "zaheedfeni47@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Mohammed Bin Zayed City, Mohammed Bin Zayed East, Al Majmoua Al Muttahida Al Qabidha Building",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Abu Dhabi" },
  ],
  sameAs: ["https://www.instagram.com/jahid_curtains/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971547839880",
    contactType: "sales",
    availableLanguage: ["en", "ar"],
  },
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
