import { Metadata } from "next";
import { GeneratedEntity } from "../../scripts/generate-seo-entities";

const SITE_URL = "https://loancalculatorhub.com";

/**
 * Automates the generation of Next.js Metadata objects for programmatic tool pages.
 * Ensures titles and descriptions adhere to character limits and SEO best practices.
 */
export function generateToolMetadata(entity: GeneratedEntity): Metadata {
  const clusterPath = `${entity.loanType}-loan-calculator`;
  const canonicalUrl = `${SITE_URL}/${clusterPath}/${entity.slug}`;

  // Ensure title is under 60 chars. The entity generator handles the core string,
  // but we enforce a fallback if it somehow exceeds limits.
  let safeTitle = entity.title;
  if (safeTitle.length > 60) {
    // Fallback template
    safeTitle = `${entity.amountText} ${entity.loanType} EMI Calculator`;
  }

  // Ensure description is under 155 chars.
  let safeDesc = entity.description;
  if (safeDesc.length > 155) {
    safeDesc = `Calculate the exact EMI for a ₹${entity.amountText} ${entity.loanType} taken for ${entity.tenureText}. Free and accurate.`;
  }

  return {
    title: safeTitle,
    description: safeDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: safeTitle,
      description: safeDesc,
      url: canonicalUrl,
      type: "website",
      siteName: "LoanCalculatorHub",
      // Dynamic OG image generation route (can be implemented later)
      // images: [{ url: `${SITE_URL}/api/og?title=${encodeURIComponent(safeTitle)}` }]
    },
    twitter: {
      card: "summary_large_image",
      title: safeTitle,
      description: safeDesc,
    },
    // Schema Injection logic
    // We pass this as a raw string to be rendered in the page's <head> later,
    // or return it here if using Next.js JSON-LD approaches.
  };
}
