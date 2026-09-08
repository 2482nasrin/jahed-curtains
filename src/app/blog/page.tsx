import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#FAF9F6] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9c1b63] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">
            Blog
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Curtain &amp; blind guides for UAE homes
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Practical, honest advice from our measuring and installation team
            - written for the light, heat and homes of the Emirates.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#9c1b63]/30 transition-all"
              >
                <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <span className="text-[11px] font-bold tracking-wider text-[#9c1b63] uppercase mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-sm sm:text-base font-black text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#9c1b63] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
