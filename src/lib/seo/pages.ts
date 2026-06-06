import generatedData from "../../../data/generated/seo-pages.json";

// The shape matches our new ontology
export interface GeneratedEntity {
  slug: string;
  amount: number;
  amountText: string;
  tenure: number;
  tenureText: string;
  loanType: string;
  bank: string;
  interestRate: number;
  title: string;
  description: string;
  h1: string;
  intro: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const SEO_PAGES: GeneratedEntity[] = generatedData as GeneratedEntity[];

export function getSeoPageBySlug(slug: string): GeneratedEntity | undefined {
  return SEO_PAGES.find(page => page.slug === slug);
}
