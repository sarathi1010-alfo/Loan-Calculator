import { Metadata } from "next";

export const siteConfig = {
  name: "EMICalculatorPro",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://emicalculatorpro.alfo.online",
  description:
    "Instantly calculate EMIs, compare loans, and plan smarter repayments.",
};

interface MetadataProps {
  title: string;
  description: string;
  path: string;
}

export function generateSeoMetadata({
  title,
  description,
  path,
}: MetadataProps): Metadata {
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

export function generateFaqSchema(
  faqs: { question: string; answer: string }[],
) {
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

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.title,
    description: props.description,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    author: {
      "@type": "Person",
      name: props.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": props.url,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; item: string }[],
) {
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
