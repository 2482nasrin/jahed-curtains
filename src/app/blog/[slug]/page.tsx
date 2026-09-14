import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug, getOtherBlogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";
import { buildMetadata, withSeoSuffix } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found", robots: { index: false, follow: false } };
  }
  return buildMetadata({
    title: post.title,
    description: withSeoSuffix(post.description),
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    absoluteTitle: true,
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = getOtherBlogPosts(post);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="text-xs text-gray-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#9c1b63] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#9c1b63] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-wider text-[#9c1b63] bg-[#fdf0f6] px-3 py-1 rounded-full uppercase mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4 leading-snug max-w-4xl">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500">
            By <span className="font-semibold text-gray-700">{post.author}</span>
            <span className="mx-2">&middot;</span>
            {post.date}
            <span className="mx-2">&middot;</span>
            {post.readTime}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl shadow-gray-400/30 bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Article Content */}
          <article className="lg:col-span-2 space-y-6">
            {post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight pt-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <div
                  key={index}
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl shadow-gray-400/30 bg-gray-100 my-2"
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </article>

          {/* Sidebar */}
          <aside>
            <h3 className="text-lg font-black text-gray-900 tracking-tight mb-5">
              You might also like
            </h3>
            <div className="space-y-4">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group flex items-start gap-3 bg-white rounded-xl shadow-lg shadow-gray-400/20 border border-gray-100 p-3 hover:shadow-xl hover:shadow-gray-400/30 transition-shadow"
                >
                  <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#9c1b63] transition-colors line-clamp-2">
                      {other.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{other.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
