export interface SeoPageData {
  slug: string;
  type: "home" | "car" | "personal" | "general";
  title: string;
  description: string;
  h1: string;
  defaultPrincipal: number;
  defaultInterest: number;
  defaultTenure: number; // in months
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "home-loan-emi-calculator",
    type: "home",
    title: "Home Loan EMI Calculator | Fast & Accurate",
    description: "Calculate your home loan EMI instantly. View detailed amortization schedules, interest breakdowns, and plan your housing finance better.",
    h1: "Home Loan EMI Calculator",
    defaultPrincipal: 5000000, // 50 Lakh
    defaultInterest: 8.5,
    defaultTenure: 240, // 20 years
  },
  {
    slug: "car-loan-emi-calculator",
    type: "car",
    title: "Car Loan EMI Calculator | Check Auto Loan EMI",
    description: "Check your monthly auto loan payments with our car loan EMI calculator. Compare interest rates and find the right tenure for your vehicle.",
    h1: "Car Loan EMI Calculator",
    defaultPrincipal: 800000, // 8 Lakh
    defaultInterest: 9.0,
    defaultTenure: 60, // 5 years
  },
  {
    slug: "personal-loan-emi-calculator",
    type: "personal",
    title: "Personal Loan EMI Calculator",
    description: "Calculate your personal loan EMI with ease. Adjust interest rates and tenure to find an affordable monthly payment plan.",
    h1: "Personal Loan EMI Calculator",
    defaultPrincipal: 500000, // 5 Lakh
    defaultInterest: 11.5,
    defaultTenure: 36, // 3 years
  },
  // Programmatic Variations (Examples)
  {
    slug: "5-lakh-loan-emi",
    type: "general",
    title: "₹5 Lakh Loan EMI Calculator | Check Monthly Payments",
    description: "Calculate the EMI for a ₹5 Lakh loan. See how the tenure and interest rate affect your monthly payments.",
    h1: "EMI Calculator for ₹5 Lakh Loan",
    defaultPrincipal: 500000,
    defaultInterest: 10.5,
    defaultTenure: 60,
  },
  {
    slug: "10-lakh-home-loan-emi",
    type: "home",
    title: "₹10 Lakh Home Loan EMI Calculator",
    description: "Planning a ₹10 Lakh home loan? Calculate your exact monthly EMI, total interest, and view the amortization schedule.",
    h1: "₹10 Lakh Home Loan EMI Calculator",
    defaultPrincipal: 1000000,
    defaultInterest: 8.5,
    defaultTenure: 180, // 15 years
  },
  {
    slug: "30-lakh-home-loan-emi-20-years",
    type: "home",
    title: "₹30 Lakh Home Loan EMI for 20 Years",
    description: "Calculate the EMI for a ₹30 Lakh home loan taken for 20 years. View detailed monthly breakdown.",
    h1: "₹30 Lakh Home Loan EMI for 20 Years",
    defaultPrincipal: 3000000,
    defaultInterest: 8.5,
    defaultTenure: 240, // 20 years
  },
  {
    slug: "1-crore-home-loan-emi",
    type: "home",
    title: "₹1 Crore Home Loan EMI Calculator",
    description: "Calculate EMI for a ₹1 Crore home loan. Estimate your monthly outgoing and total interest burden instantly.",
    h1: "₹1 Crore Home Loan EMI Calculator",
    defaultPrincipal: 10000000,
    defaultInterest: 8.5,
    defaultTenure: 240,
  },
  {
    slug: "10-year-personal-loan-emi",
    type: "personal",
    title: "Personal Loan EMI Calculator for 10 Years",
    description: "Calculate personal loan EMI for a 10-year tenure. Check the impact of long-term personal loans.",
    h1: "Personal Loan EMI Calculator (10 Years)",
    defaultPrincipal: 1000000,
    defaultInterest: 11.5,
    defaultTenure: 120, // 10 years
  }
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find(page => page.slug === slug);
}
