import { Metadata } from "next";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";

export const metadata: Metadata = {
  title: "Personal Loan EMI Calculator - Free & Instant | EMI Calculator Pro",
  description: "Calculate your personal loan EMI instantly. Adjust loan amount, interest rate, and tenure to find affordable monthly payments. Free, fast, and easy to use.",
};

export default function PersonalLoanCalculatorPage() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Personal Loan EMI Calculator",
    "url": "https://emicalculatorpro.alfo.online/personal-loan-calculator",
    "description": "Calculate your personal loan EMI instantly with adjustable rates and tenure.",
    "applicationCategory": "FinancialApplication",
    "operatingSystem": "All"
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
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item" className="hover:text-foreground">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li>/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/personal-loan-calculator" itemProp="item" className="hover:text-foreground" aria-current="page">
              <span itemProp="name">Personal Loan Calculator</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>
      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Personal Loan EMI Calculator
        </h1>
        <p className="text-xl text-muted-foreground">
          Find out exactly how much you&apos;ll pay each month. Adjust interest rates and tenure to find a payment plan that fits your budget.
        </p>
      </div>

      {/* Default values for Personal Loan: ₹5 Lakh, 11.5%, 3 Years */}
      <SeoCalculator
        initialPrincipal={500000}
        initialInterest={11.5}
        initialTenure={36}
      />

      <div className="mt-24 space-y-12">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Understanding Personal Loan EMIs</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
            <p>
              Personal loans are typically unsecured loans, meaning they often come with higher interest rates compared to home or car loans. Because of this, it&apos;s crucial to calculate your EMI beforehand to ensure the monthly payments fit within your financial plan.
            </p>
            <p className="mt-4">
              Use the calculator above to find the sweet spot between an affordable EMI and minimizing the total interest paid over the life of the loan.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
