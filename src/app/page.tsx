import UniversalCalculator from "@/components/calculator/UniversalCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free EMI Calculator Pro - Personal, Home & Car Loan EMI Calculator",
  description: "Free EMI calculator for personal, home, and car loans. Calculate your monthly payments instantly and compare different loan options. 100% free, no registration required.",
};

export default function Home() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "EMI Calculator Pro",
    "url": "https://emicalculatorpro.alfo.online/",
    "description": "Free online EMI calculator for personal, home, and car loans.",
    "applicationCategory": "FinancialApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EMI (Equated Monthly Installment) is the fixed amount you pay to a lender each month to repay your loan, including both principal and interest."
        }
      },
      {
        "@type": "Question",
        "name": "How is EMI calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EMI is calculated using the formula: P × r × (1+r)^n / ((1+r)^n - 1), where P is the principal, r is the monthly interest rate, and n is the number of monthly installments."
        }
      },
      {
        "@type": "Question",
        "name": "What factors affect my EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your EMI is affected by three main factors: loan amount, interest rate, and loan tenure. Higher loan amounts or interest rates increase EMI, while longer tenure reduces it."
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Free EMI Calculator - Compare Personal, Home & Car Loans
        </h1>
        <p className="text-xl text-muted-foreground">
          Use our lightning-fast, highly accurate tools to visualize your repayment strategies and make confident financial decisions.
        </p>
      </div>

      <UniversalCalculator />

      <div className="mt-24 space-y-12">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Why use our calculator?</h2>
          <div className="grid gap-6 md:grid-cols-3 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Accurate Results</h3>
              <p>Our algorithms match standard bank calculations exactly.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Visual Breakdown</h3>
              <p>See exactly how much goes to interest vs principal.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Download Reports</h3>
              <p>Export your amortization schedules instantly.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground">What is an EMI?</h3>
              <p className="text-muted-foreground">Equated Monthly Installment (EMI) is the fixed payment amount made by a borrower to a lender at a specified date each calendar month.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">How does loan tenure affect my EMI?</h3>
              <p className="text-muted-foreground">A longer loan tenure decreases your monthly EMI but increases the total interest you will pay over the life of the loan. A shorter tenure increases the EMI but saves you money on interest.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
