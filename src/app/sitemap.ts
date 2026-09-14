import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blogPosts";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/trade-license", priority: 0.3, changeFrequency: "yearly" },
  { path: "/info/delivery-information", priority: 0.3, changeFrequency: "yearly" },
  { path: "/info/payment-details", priority: 0.3, changeFrequency: "yearly" },
  { path: "/info/payment-terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/info/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/info/refund-and-returns-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/info/terms-conditions", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${SITE_URL}${product.image}`],
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
    images: [`${SITE_URL}${post.image}`],
  }));

  return [...staticEntries, ...productEntries, ...blogEntries];
}
