import { Metadata } from "next";

export const siteConfig = {
  name: "LoanCalculatorHub",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://loancalculatorhub.com",
  description: "Instantly calculate EMIs, compare loans, and plan smarter repayments.",
};

interface MetadataProps {
  title: string;
  description: string;
  path: string;
}

export function generateSeoMetadata({ title, description, path }: MetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: `${siteConfig.url}${breadcrumb.item}`,
    })),
  };
}
