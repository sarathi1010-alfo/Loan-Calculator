import UniversalCalculator from "@/components/calculator/UniversalCalculator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free EMI Calculator Pro - Personal, Home & Car Loan EMI Calculator",
  description:
    "Free EMI calculator for personal, home, and car loans. Calculate your monthly payments instantly and compare different loan options. 100% free, no registration required.",
  alternates: {
    canonical: "https://emicalculatorpro.alfo.online/",
  },
};

export default function Home() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "EMI Calculator Pro",
    url: "https://emicalculatorpro.alfo.online/",
    description:
      "Free online EMI calculator for personal, home, and car loans.",
    applicationCategory: "FinancialApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
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
          Use our lightning-fast, highly accurate tools to visualize your
          repayment strategies and make confident financial decisions.
        </p>
      </div>

      <UniversalCalculator />

      <div className="mt-16 space-y-16">
        <section className="bg-primary/5 p-8 rounded-xl border border-primary/20">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Fast & Accurate EMI Calculations</h2>
          <p className="text-lg text-foreground/80 font-medium">
            Our free EMI Calculator Pro is the best way to calculate your monthly loan installments. By inputting your principal, interest rate, and tenure, you receive a precise, reducing-balance amortized schedule showing exactly how much of your payment goes to interest versus principal, helping you make smarter borrowing decisions.
          </p>
        </section>

        {/* Quick Links Section */}
        <section id="explore-calculators" className="bg-muted/30 p-8 rounded-xl border scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Explore Specific Calculators
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/home-loan-calculator"
              className="bg-card p-6 rounded-lg border hover:border-primary transition-colors hover:shadow-sm group"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                Home Loan Calculator &rarr;
              </h3>
              <p className="text-sm text-muted-foreground">
                Plan your dream home with our detailed amortization schedules.
              </p>
            </Link>
            <Link
              href="/personal-loan-calculator"
              className="bg-card p-6 rounded-lg border hover:border-primary transition-colors hover:shadow-sm group"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                Personal Loan Calculator &rarr;
              </h3>
              <p className="text-sm text-muted-foreground">
                Calculate payments for unsecured loans and debt consolidation.
              </p>
            </Link>
            <Link
              href="/car-loan-calculator"
              className="bg-card p-6 rounded-lg border hover:border-primary transition-colors hover:shadow-sm group"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                Car Loan Calculator &rarr;
              </h3>
              <p className="text-sm text-muted-foreground">
                Find the perfect tenure for your new or used vehicle finance.
              </p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Why use our EMI Calculator?
          </h2>
          <div className="grid gap-8 md:grid-cols-3 text-muted-foreground">
            <div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Accurate Results
              </h3>
              <p>
                Our algorithms exactly match the reducing balance calculations
                used by major banks, giving you precise numbers down to the last
                decimal.
              </p>
            </div>
            <div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Visual Breakdown
              </h3>
              <p>
                See exactly how much of your hard-earned money goes to interest
                versus principal with our interactive pie charts and
                amortization schedules.
              </p>
            </div>
            <div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Download Reports
              </h3>
              <p>
                Export your full amortization schedules instantly as clean,
                printable PDFs to share with your family or financial advisor.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t pt-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                What is an EMI?
              </h2>
              <div className="prose prose-slate dark:prose-invert text-muted-foreground">
                <p>
                  <strong>EMI (Equated Monthly Installment)</strong> is a fixed
                  payment amount made by a borrower to a lender at a specified
                  date each calendar month. EMIs are used to pay off both
                  interest and principal each month so that over a specified
                  number of years, the loan is paid off in full.
                </p>
                <p>
                  In the most common types of loans, such as real estate mortgages,
                  auto loans, and student loans, the borrower makes fixed periodic
                  payments to the lender over several years to retire the loan,
                  which uses the standard reducing-balance formula. For a comprehensive walkthrough
                  of the exact mathematical inputs and outputs, plus tips to save on interest by exploring a <Link href="/blog/how-to-refinance-a-loan-2026" className="text-primary hover:underline">loan refinance</Link>,
                  check out our dedicated <Link href="/blog/how-to-calculate-emi-loan" className="text-primary hover:underline">How to Calculate EMI for a Loan</Link> deep-dive guide.
                </p>
                <p>
                  The formula used by banks to calculate your EMI is: <br />
                  <code className="bg-muted p-2 rounded font-mono text-sm mt-2 block text-foreground">
                    EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
                  </code>
                </p>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  How to Use the EMI Calculator
                </h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Enter Principal:</strong> Input the total amount you
                    wish to borrow.
                  </li>
                  <li>
                    <strong>Set Interest Rate:</strong> Enter the annual
                    interest rate offered by the bank.
                  </li>
                  <li>
                    <strong>Choose Tenure:</strong> Select the loan duration in
                    months or years.
                  </li>
                  <li>
                    <strong>Analyze:</strong> Review the monthly EMI, total
                    interest payable, and the amortization schedule generated
                    instantly.
                  </li>
                </ol>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  Different Types of EMIs Explained
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Home Loan EMIs:</strong> Typically the longest
                    tenure (up to 30 years) with the lowest interest rates.
                  </li>
                  <li>
                    <strong>Personal Loan EMIs:</strong> Unsecured loans with
                    shorter tenures (1-5 years) and higher interest rates.
                  </li>
                  <li>
                    <strong>Car Loan EMIs:</strong> Secured against the vehicle,
                    usually spanning 3-7 years.
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  Common <Link href="/blog/how-to-calculate-emi-loan" className="hover:underline">EMI Mistakes</Link> to Avoid
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Choosing the longest tenure:</strong> While it
                    lowers the monthly EMI, you end up paying significantly more
                    total interest.
                  </li>
                  <li>
                    <strong>Ignoring the processing fees:</strong> Banks often
                    charge processing fees that add to the cost of borrowing.
                  </li>
                  <li>
                    <strong>Not considering prepayments:</strong> Failing to
                    plan for prepayments can cost you thousands in potential
                    interest savings.
                  </li>
                  <li>
                    <strong>Over-borrowing:</strong> Your total EMI commitments
                    should ideally not exceed 40-50% of your net monthly income.
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Financial Planning Hub
              </h2>
              <p className="text-muted-foreground mb-6">
                Want to learn more about how loans work and how to optimize your
                debt? Check out our latest guides.
              </p>

              <div className="space-y-4">
                <Link
                  href="/blog/what-is-emi-complete-guide"
                  className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-primary">
                    What is EMI? The Complete Guide
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    Understand the fundamentals of Equated Monthly Installments.
                  </p>
                </Link>
                <Link
                  href="/blog/how-loan-tenure-affects-your-emi"
                  className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-primary">
                    How Loan Tenure Affects Your Total Interest
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    Discover why a shorter loan is usually better for your
                    wallet.
                  </p>
                </Link>
                <Link
                  href="/blog/what-is-amortization-schedule"
                  className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-primary">
                    Understanding Amortization Schedules
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    Learn how to read the most important table in your loan
                    agreement.
                  </p>
                </Link>
              </div>

              <div className="mt-6 flex gap-4">
                <Link
                  href="/blog"
                  className="text-primary hover:underline font-medium"
                >
                  View all guides &rarr;
                </Link>
                <Link
                  href="/faq"
                  className="text-primary hover:underline font-medium"
                >
                  Read the FAQ &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
