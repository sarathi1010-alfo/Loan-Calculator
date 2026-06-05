import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEO_PAGES, getSeoPageBySlug } from "@/lib/seo/pages";
import { generateSeoMetadata, generateFaqSchema, generateBreadcrumbSchema } from "@/lib/seo/metadata";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";

export async function generateStaticParams() {
  return SEO_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const pageData = getSeoPageBySlug(params.slug);

  if (!pageData) {
    return {};
  }

  return generateSeoMetadata({
    title: pageData.title,
    description: pageData.description,
    path: `/loan/${params.slug}`,
  });
}

export default async function ProgrammaticLoanPage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const pageData = getSeoPageBySlug(params.slug);

  if (!pageData) {
    notFound();
  }

  const faqs = [
    {
      question: `How is the EMI calculated for a ${pageData.h1}?`,
      answer: "The EMI is calculated using the standard formula: P * r * (1+r)^n / ((1+r)^n - 1), where P is the principal amount, r is the monthly interest rate, and n is the tenure in months."
    },
    {
      question: "Can I prepay my loan to save on interest?",
      answer: "Yes, prepaying your loan can significantly reduce your total interest burden. Check with your lender regarding any prepayment penalties."
    }
  ];

  const faqSchema = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Loans", item: "/loan" },
    { name: pageData.h1, item: `/loan/${params.slug}` },
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
        <p className="text-xl text-muted-foreground">
          {pageData.description}
        </p>
      </div>

      <SeoCalculator
        initialPrincipal={pageData.defaultPrincipal}
        initialInterest={pageData.defaultInterest}
        initialTenure={pageData.defaultTenure}
      />

      <div className="mt-24 space-y-12">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
