import { Metadata } from "next";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";

export const metadata: Metadata = {
  title: "Car Loan EMI Calculator",
  description: "Check your car loan monthly payments with our free auto loan EMI calculator. Compare interest rates and find the perfect tenure for your vehicle finance.",
};

export default function CarLoanCalculatorPage() {
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
            <a href="/car-loan-calculator" itemProp="item" className="hover:text-foreground" aria-current="page">
              <span itemProp="name">Car Loan Calculator</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>
      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Car Loan EMI Calculator
        </h1>
        <p className="text-xl text-muted-foreground">
          Plan your auto finance efficiently. Check your monthly car loan payments, compare interest rates, and choose the perfect tenure.
        </p>
      </div>

      {/* Default values for Car Loan: ₹8 Lakh, 9.0%, 5 Years */}
      <SeoCalculator
        initialPrincipal={800000}
        initialInterest={9.0}
        initialTenure={60}
      />

      <div className="mt-24 space-y-12">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Tips for Car Loans</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
            <p>
              When financing a new or used vehicle, the tenure you choose significantly impacts your monthly EMI and total interest paid. While a longer tenure (e.g., 7 years) reduces your monthly payment, you end up paying significantly more in total interest.
            </p>
            <p className="mt-4">
              It is generally recommended to keep car loan tenures as short as comfortably possible to minimize the total cost of financing a depreciating asset.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
