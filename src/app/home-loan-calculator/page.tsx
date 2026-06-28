import { Metadata } from "next";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Home Loan EMI Calculator - Free & Accurate (2026)",
  description:
    "Calculate your home loan EMI instantly with our free calculator. View detailed amortization schedule and interest breakdown. Compare housing loan options easily.",
};

export default function HomeLoanCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an EMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EMI (Equated Monthly Installment) is the fixed amount you pay to a lender each month to repay your loan, including both principal and interest.",
        },
      },
      {
        "@type": "Question",
        name: "How is EMI calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EMI is calculated using the formula: P × r × (1+r)^n / ((1+r)^n - 1), where P is the principal, r is the monthly interest rate, and n is the number of monthly installments.",
        },
      },
      {
        "@type": "Question",
        name: "What factors affect my EMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your EMI is affected by three main factors: loan amount, interest rate, and loan tenure. Higher loan amounts or interest rates increase EMI, while longer tenure reduces it.",
        },
      },
    ],
  };

  // Extract a few programmatic links for cross-linking
  let topLinks: any[] = [];
  try {
    const dataPath = path.join(
      process.cwd(),
      "data",
      "generated",
      "seo-pages.json",
    );
    if (fs.existsSync(dataPath)) {
      const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
      // Filter for home loans and take top 6 examples
      topLinks = data
        .filter((d: any) => d.loanType === "home" && d.bank === "generic")
        .slice(0, 6);
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center space-x-2 text-sm text-muted-foreground"
        >
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link href="/" itemProp="item" className="hover:text-foreground">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li>/</li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span
              itemProp="name"
              className="text-foreground"
              aria-current="page"
            >
              Home Loan Calculator
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Home Loan EMI Calculator
        </h1>
        <p className="text-xl text-muted-foreground">
          Buying your dream house? Use our Home Loan EMI calculator to
          understand your monthly payments, total interest burden, and
          amortization schedule.
        </p>
      </div>

      {/* Default values for Home Loan: ₹50 Lakh, 8.5%, 20 Years */}
      <SeoCalculator
        initialPrincipal={5000000}
        initialInterest={8.5}
        initialTenure={240}
      />

      <div className="mt-24 space-y-16">
        <section className="bg-muted/30 p-8 rounded-xl border">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Current Home Loan Interest Rates (2026)
          </h2>
          <p className="text-muted-foreground mb-6">
            Here are the indicative floating interest rates from top lenders.
            Actual rates may vary based on your credit score and loan amount.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-card">
                  <th className="p-4 font-semibold text-foreground">
                    Bank / Housing Finance Co.
                  </th>
                  <th className="p-4 font-semibold text-foreground">
                    Interest Rate (p.a.)
                  </th>
                  <th className="p-4 font-semibold text-foreground">
                    Processing Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 text-muted-foreground">HDFC Bank</td>
                  <td className="p-4 text-foreground font-medium">
                    8.40% - 9.00%
                  </td>
                  <td className="p-4 text-muted-foreground">Up to 0.50%</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 text-muted-foreground">
                    State Bank of India (SBI)
                  </td>
                  <td className="p-4 text-foreground font-medium">
                    8.50% - 9.15%
                  </td>
                  <td className="p-4 text-muted-foreground">Up to 0.35%</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 text-muted-foreground">ICICI Bank</td>
                  <td className="p-4 text-foreground font-medium">
                    8.75% - 9.25%
                  </td>
                  <td className="p-4 text-muted-foreground">Up to 0.50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                How Home Loan EMI Works
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  Your Home Loan EMI consists of two main components: the
                  principal amount and the interest charged by the bank. In the
                  initial years of your home loan, the interest component makes
                  up a larger portion of your EMI. Over time, as the principal
                  outstanding reduces, the principal component of your EMI
                  increases while the interest component decreases.
                </p>
                <p className="mt-4">
                  Using our calculator, you can visually see this shift in the
                  amortization schedule. For a typical 20-year home loan, it
                  takes almost 12-14 years just to pay off half of your original
                  principal!
                </p>
                <h3 className="text-xl font-bold text-foreground mt-6 mb-2">
                  Smart Repayment Strategies
                </h3>
                <p>
                  Because home loans are large and long-term, small changes make
                  a massive difference. Here are the top strategies:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    <strong>Increase EMI Annually:</strong> Try to increase your
                    EMI by 5% every year as your salary grows.
                  </li>
                  <li>
                    <strong>Lump Sum Prepayments:</strong> Use your annual bonus
                    to make a partial prepayment toward the principal.
                  </li>
                  <li>
                    <strong>Extra EMI Strategy:</strong> Make 13 EMIs in a year
                    instead of 12. This alone can shave 3-4 years off a 20-year
                    loan.
                  </li>
                </ul>
                <h3 className="text-xl font-bold text-foreground mt-6 mb-2">
                  Home Loan vs Renting
                </h3>
                <p>
                  When deciding whether to buy or rent, consider that a home
                  loan EMI goes toward building an asset, whereas rent is an
                  expense. However, home ownership comes with property taxes,
                  maintenance, and insurance costs which you should factor into
                  your overall affordability calculations.
                </p>
                <p className="mt-4">
                  <strong>Pro Tip:</strong> Use the "Total Interest Paid" metric
                  in our calculator to see the true cost of the property over
                  the life of the loan.
                </p>
              </div>
            </div>

            {topLinks.length > 0 && (
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tight mb-4">
                  Common Home Loan Calculations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topLinks.map((link) => (
                    <Link
                      key={link.slug}
                      href={`/loan/${link.slug}`}
                      className="block p-4 border rounded-lg hover:border-primary transition-colors hover:bg-muted/30"
                    >
                      <h3 className="font-semibold text-primary text-sm">
                        {link.title.replace(" EMI Calculator", "")}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
