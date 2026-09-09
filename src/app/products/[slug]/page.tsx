import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiCheckCircle } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import ProductFaqAccordion from "@/components/products/ProductFaqAccordion";
import ProductGallery from "@/components/products/ProductGallery";
import ProductDetailsSection from "@/components/products/ProductDetailsSection";
import ProductReviews from "@/components/products/ProductReviews";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const whatsappText = encodeURIComponent(
    `Hi Jahed Curtains, I'm interested in ${product.title}. Could you tell me more?`
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="text-xs text-gray-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#9c1b63] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#9c1b63] transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-700">{product.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.images} title={product.title} />

          <div>
            <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
              {product.badge}
            </p>
            <h1 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight mb-5 leading-snug">
              {product.title} &mdash; {product.tagline}
            </h1>

            <div className="inline-flex items-center gap-2 bg-[#fdf0f6] text-[#9c1b63] border border-[#9c1b63]/20 rounded-full px-4 py-2 text-xs sm:text-sm font-bold mb-6">
              <HiCheckCircle className="flex-shrink-0" />
              {product.priceBanner}
            </div>

            <div className="space-y-4 mb-6">
              {product.longDescription.map((paragraph) => (
                <p key={paragraph} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <HiCheckCircle className="text-[#9c1b63] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#9c1b63] hover:bg-[#7f1651] text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-colors text-sm"
              >
                Book a Free Visit
              </Link>
              <a
                href={`https://wa.me/971547839880?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebc59] text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-colors text-sm"
              >
                <FaWhatsapp className="text-lg" />
                Ask on WhatsApp
              </a>
            </div>
            <p className="text-xs text-gray-500">
              No advance payment &middot; Free measurement &amp; swatches &middot; 12-month warranty
            </p>
          </div>
        </div>
      </section>

      {/* Details & Specifications */}
      <section className="py-14 sm:py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductDetailsSection
            sectionTitle={product.sectionTitle}
            sectionParagraphs={product.sectionParagraphs}
            specs={product.specs}
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductReviews productTitle={product.title} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
            Good to know
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-8">
            {product.title} - common questions
          </h2>
          <ProductFaqAccordion faqs={product.faqs} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
              You may also like
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-8">
              Related products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/products/${related.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-gray-800 shadow-sm">
                      {related.badge}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#9c1b63] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {related.description}
                    </p>
                    <span className="text-sm font-bold text-[#9c1b63]">VIEW DETAILS &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
