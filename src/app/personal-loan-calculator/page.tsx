import { Metadata } from "next";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Personal Loan EMI Calculator - Free & Instant (2026)",
  description:
    "Calculate your personal loan EMI instantly. Adjust loan amount, interest rate, and tenure to find affordable monthly payments. Free, fast, and easy to use.",
};

export default function PersonalLoanCalculatorPage() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Personal Loan EMI Calculator",
    url: "https://emicalculatorpro.alfo.online/personal-loan-calculator",
    description:
      "Calculate your personal loan EMI instantly with adjustable rates and tenure.",
    applicationCategory: "FinancialApplication",
    operatingSystem: "All",
  };

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
      // Filter for personal loans and take top 6 examples
      topLinks = data
        .filter((d: any) => d.loanType === "personal" && d.bank === "generic")
        .slice(0, 6);
    }
  } catch (e) {
    console.error(e);
  }

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
              Personal Loan Calculator
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Personal Loan EMI Calculator
        </h1>
        <p className="text-xl text-muted-foreground">
          Find out exactly how much you&apos;ll pay each month. Adjust interest
          rates and tenure to find a payment plan that fits your budget.
        </p>
      </div>

      <section className="mb-8 bg-primary/5 p-6 rounded-xl border border-primary/20">
        <h2 className="text-xl font-bold tracking-tight mb-2">What is a Personal Loan EMI?</h2>
        <p className="text-md text-foreground/80 font-medium">
          A Personal Loan EMI is the Equated Monthly Installment you pay towards your unsecured personal loan. Because these loans don't require collateral, they typically carry higher interest rates and shorter tenures (1-5 years) compared to home loans. Use the calculator below to find the exact amount you will pay every month based on the reducing balance method.
        </p>
      </section>

      {/* Default values for Personal Loan: ₹5 Lakh, 11.5%, 3 Years */}
      <SeoCalculator
        initialPrincipal={500000}
        initialInterest={11.5}
        initialTenure={36}
      />

      <div className="mt-24 space-y-16">
        <section className="bg-muted/30 p-8 rounded-xl border">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Current Personal Loan Interest Rates (2026)
          </h2>
          <p className="text-muted-foreground mb-6">
            Because personal loans are unsecured, rates are heavily dependent on
            your credit score, income, and employer profile.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-card">
                  <th className="p-4 font-semibold text-foreground">
                    Bank / NBFC
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
                    10.50% - 21.00%
                  </td>
                  <td className="p-4 text-muted-foreground">Up to 2.50%</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 text-muted-foreground">
                    State Bank of India (SBI)
                  </td>
                  <td className="p-4 text-foreground font-medium">
                    11.00% - 15.50%
                  </td>
                  <td className="p-4 text-muted-foreground">Up to 1.50%</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 text-muted-foreground">Bajaj Finserv</td>
                  <td className="p-4 text-foreground font-medium">
                    11.00% - 24.00%
                  </td>
                  <td className="p-4 text-muted-foreground">Up to 3.93%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Understanding Personal Loan EMIs
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  Personal loans are typically unsecured loans, meaning they
                  often come with higher interest rates compared to home or car
                  loans. Because of this, it&apos;s crucial to calculate your
                  EMI beforehand to ensure the monthly payments fit within your
                  financial plan without causing stress.
                </p>
                <p className="mt-4">
                  When choosing a personal loan, many borrowers are tempted to
                  choose the maximum possible tenure (e.g., 5 years) to keep the
                  EMI low. However, due to the high interest rate, this
                  significantly increases the total amount you repay.
                </p>
                <h3 className="text-xl font-bold text-foreground mt-6 mb-2">
                  The Danger of Long Tenures
                </h3>
                <p>For a ₹5 Lakh loan at 15% interest:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong>3-year tenure:</strong> EMI is ₹17,333. Total
                    interest paid is ~₹1.24 Lakh.
                  </li>
                  <li>
                    <strong>5-year tenure:</strong> EMI is ₹11,895. Total
                    interest paid is ~₹2.13 Lakh.
                  </li>
                </ul>
                <p className="mt-2">
                  While you save ~₹5,000 per month on the EMI with the longer
                  tenure, you pay almost double the interest overall.
                </p>
                <h3 className="text-xl font-bold text-foreground mt-6 mb-2">
                  Debt Consolidation Strategy
                </h3>
                <p>
                  A common and smart use of personal loans is debt
                  consolidation. If you have high-interest credit card debt
                  (often 30-40% APR), taking a personal loan at 12-15% to clear
                  the credit cards can significantly lower your EMI and save you
                  money, provided you don't rack up credit card debt again.
                </p>
                <p className="mt-4">
                  <strong>Pro Tip:</strong> Always read the fine print for
                  foreclosure or prepayment charges on personal loans. Try to
                  negotiate a loan without these fees so you can pay it off
                  early.
                </p>
              </div>
            </div>

            {topLinks.length > 0 && (
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tight mb-4">
                  Common Personal Loan Calculations
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
