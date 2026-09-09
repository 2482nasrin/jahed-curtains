import type { ProductSpec } from "@/data/products";

export default function ProductDetailsSection({
  sectionTitle,
  sectionParagraphs,
  specs,
}: {
  sectionTitle: string;
  sectionParagraphs: string[];
  specs: ProductSpec[];
}) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-8">
        Details &amp; specifications
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <dl className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {specs.map((spec) => (
            <div key={spec.label} className="grid grid-cols-2 gap-4 py-3.5">
              <dt className="text-sm font-bold text-gray-900">{spec.label}</dt>
              <dd className="text-sm text-gray-600">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-4">
            {sectionTitle}
          </h3>
          <div className="space-y-4">
            {sectionParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
