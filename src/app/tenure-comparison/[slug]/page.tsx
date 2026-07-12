import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TIER2_PAGES, getTier2PageBySlug } from "@/lib/tier2-data";
import {
  generateSeoMetadata,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo/metadata";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";

export async function generateStaticParams() {
  return TIER2_PAGES.filter(p => p.type === "tenure-comparison").map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const pageData = getTier2PageBySlug(params.slug, "tenure-comparison");

  if (!pageData) {
    return {};
  }

  return generateSeoMetadata({
    title: pageData.title,
    description: pageData.description,
    path: `/tenure-comparison/${params.slug}`,
  });
}

export default async function TenureComparisonPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const pageData = getTier2PageBySlug(params.slug, "tenure-comparison");

  if (!pageData) {
    notFound();
  }

  const faqSchema = generateFaqSchema(pageData.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Tenure Comparison", item: "/tenure-comparison" },
    { name: pageData.h1, item: `/tenure-comparison/${params.slug}` },
  ]);

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {pageData.h1}
        </h1>
        <p className="text-xl text-muted-foreground mb-4">{pageData.intro}</p>
      </div>

      <SeoCalculator
        initialPrincipal={pageData.amount}
        initialInterest={pageData.interestRate}
        initialTenure={pageData.tenure}
      />

      {pageData.content && (
        <div
          className="mt-16 prose prose-slate dark:prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: pageData.content }}
        />
      )}

      <div className="mt-24 space-y-12">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {pageData.faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
