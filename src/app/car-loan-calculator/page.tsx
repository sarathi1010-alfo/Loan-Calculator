import { Metadata } from "next";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Car Loan EMI Calculator - Auto Finance Planner (2026)",
  description:
    "Check your car loan monthly payments with our free auto loan EMI calculator. Compare interest rates and find the perfect tenure for your vehicle finance.",
};

export default function CarLoanCalculatorPage() {
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
      // Filter for car loans and take top 6 examples
      topLinks = data
        .filter((d: any) => d.loanType === "car" && d.bank === "generic")
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
              Car Loan Calculator
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Car Loan EMI Calculator
        </h1>
        <p className="text-xl text-muted-foreground">
          Plan your auto finance efficiently. Check your monthly car loan
          payments, compare interest rates, and choose the perfect tenure.
        </p>
      </div>

      {/* Default values for Car Loan: ₹8 Lakh, 9.0%, 5 Years */}
      <SeoCalculator
        initialPrincipal={800000}
        initialInterest={9.0}
        initialTenure={60}
      />

      <div className="mt-24 space-y-16">
        <section className="bg-muted/30 p-8 rounded-xl border">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Current Car Loan Interest Rates (2026)
          </h2>
          <p className="text-muted-foreground mb-6">
            Rates for new cars are generally lower than for used cars. Check
            indicative new car loan rates below.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-card">
                  <th className="p-4 font-semibold text-foreground">Bank</th>
                  <th className="p-4 font-semibold text-foreground">
                    Interest Rate (New Car)
                  </th>
                  <th className="p-4 font-semibold text-foreground">
                    Processing Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 text-muted-foreground">
                    State Bank of India (SBI)
                  </td>
                  <td className="p-4 text-foreground font-medium">
                    8.65% - 9.45%
                  </td>
                  <td className="p-4 text-muted-foreground">
                    Nil (Offer period)
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 text-muted-foreground">HDFC Bank</td>
                  <td className="p-4 text-foreground font-medium">
                    8.75% - 9.50%
                  </td>
                  <td className="p-4 text-muted-foreground">Up to ₹5,000</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 text-muted-foreground">ICICI Bank</td>
                  <td className="p-4 text-foreground font-medium">
                    9.00% - 9.75%
                  </td>
                  <td className="p-4 text-muted-foreground">Up to ₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Tips for Smart Auto Financing
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  When financing a new or used vehicle, the tenure you choose
                  significantly impacts your monthly EMI and total interest
                  paid. While a longer tenure (e.g., 7 years) reduces your
                  monthly payment, you end up paying significantly more in total
                  interest.
                </p>
                <h3 className="text-xl font-bold text-foreground mt-6 mb-2">
                  The Depreciation Trap
                </h3>
                <p>
                  Cars are rapidly depreciating assets. A new car loses roughly
                  20% of its value in the first year alone, and about 15% each
                  year after that. If you take a very long loan (e.g., 7 years)
                  with a small down payment, you will likely spend several years
                  "underwater" on your loan—meaning you owe the bank more money
                  than the car is actually worth on the open market.
                </p>
                <h3 className="text-xl font-bold text-foreground mt-6 mb-2">
                  The 20/4/10 Rule for Car Buying
                </h3>
                <p>
                  Financial experts often recommend the 20/4/10 rule for
                  responsible car ownership:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong>20% Down Payment:</strong> Put down at least 20% to
                    avoid being underwater immediately.
                  </li>
                  <li>
                    <strong>4-Year Loan Max:</strong> Limit the loan tenure to a
                    maximum of 4 years (48 months) to keep interest costs in
                    check.
                  </li>
                  <li>
                    <strong>10% of Income:</strong> Ensure your total monthly
                    car expenses (EMI + insurance + fuel + maintenance) do not
                    exceed 10% of your gross monthly income.
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Pro Tip:</strong> Used car loans typically carry
                  higher interest rates than new car loans. However, because
                  used cars have already undergone their steepest depreciation,
                  they often represent a much better financial decision overall.
                </p>
              </div>
            </div>

            {topLinks.length > 0 && (
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tight mb-4">
                  Common Car Loan Calculations
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
