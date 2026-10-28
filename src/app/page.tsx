import UniversalCalculator from "@/components/calculator/UniversalCalculator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EMI Calculator Pro - Free Loan EMI Calculator",
  description:
    "Calculate monthly loan EMIs instantly for home, car, and personal loans. Free EMI calculator with interest breakdowns and repayment schedules.",
  alternates: {
    canonical: "https://emicalculatorpro.alfo.online/",
  },
  openGraph: {
    title: "EMI Calculator Pro - Free Loan EMI Calculator",
    description:
      "Calculate monthly loan EMIs instantly for home, car, and personal loans. Free EMI calculator with interest breakdowns and repayment schedules.",
    url: "https://emicalculatorpro.alfo.online/",
    siteName: "EMI Calculator Pro",
    type: "website",
    images: [
      {
        url: "https://emicalculatorpro.alfo.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free EMI Calculator Pro Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMI Calculator Pro - Free Loan EMI Calculator",
    description:
      "Calculate monthly loan EMIs instantly for home, car, and personal loans. Free EMI calculator with interest breakdowns and repayment schedules.",
    images: ["https://emicalculatorpro.alfo.online/og-image.png"],
  },
};

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "EMI Calculator Pro",
      url: "https://emicalculatorpro.alfo.online/",
      description:
        "Free online loan EMI calculator with instant amortization schedules and interest breakdown charts.",
      applicationCategory: "FinancialApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an Equated Monthly Installment (EMI)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An Equated Monthly Installment (EMI) is a fixed monthly payment made by a borrower to a lender, combining principal repayment and accrued interest to clear the debt over a specified tenure.",
          },
        },
        {
          "@type": "Question",
          name: "How is EMI calculated using the reducing balance method?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EMI is calculated using the standard formula EMI = [P x R x (1+R)^N] / [(1+R)^N - 1], where P is principal, R is the monthly interest rate, and N is the total number of monthly installments.",
          },
        },
        {
          "@type": "Question",
          name: "How does loan tenure affect total interest paid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Longer loan tenures reduce your individual monthly EMI payment but substantially increase the cumulative interest paid over the life of the loan. Shorter tenures minimize total interest expense.",
          },
        },
        {
          "@type": "Question",
          name: "Can I save interest by making extra loan prepayments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, making lump-sum or recurring prepayments directly reduces the outstanding principal balance, thereby shortening the effective loan tenure and drastically cutting total interest payable.",
          },
        },
        {
          "@type": "Question",
          name: "What factors should I consider before applying for a loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evaluate your monthly repayment capacity (keeping debt-to-income below 40-50%), loan processing fees, prepayment penalties, fixed versus floating interest rates, and loan tenure.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Calculate Loan EMI and Amortization Schedule",
      description:
        "Step-by-step guide to calculating loan EMIs, interest breakdowns, and amortization schedules online.",
      step: [
        {
          "@type": "HowToStep",
          name: "Enter Loan Principal",
          text: "Specify the total financing amount needed for your personal, home, or car loan.",
          position: 1,
        },
        {
          "@type": "HowToStep",
          name: "Set Annual Interest Rate",
          text: "Enter your lender's annual percentage interest rate to compute monthly interest charges.",
          position: 2,
        },
        {
          "@type": "HowToStep",
          name: "Choose Repayment Tenure",
          text: "Select the loan duration in months or years to evaluate cash flow impacts.",
          position: 3,
        },
        {
          "@type": "HowToStep",
          name: "Analyze Amortization & Export",
          text: "Review monthly installments, interest versus principal breakdown charts, and download PDF reports.",
          position: 4,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://emicalculatorpro.alfo.online/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "EMI Calculator Pro",
          item: "https://emicalculatorpro.alfo.online/#calculator",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          EMI Calculator Pro - Free Loan EMI Calculator
        </h1>
        <p className="text-xl text-muted-foreground">
          Plan your borrowing with confidence. EMI Calculator Pro provides instantaneous, mathematically exact equated monthly installment calculations for home, car, and personal loans with full amortization schedules and interest breakdown charts.
        </p>
      </div>

      <div id="calculator">
        <UniversalCalculator />
      </div>

      <div className="mt-16 space-y-16">
        <section className="bg-primary/5 p-8 rounded-xl border border-primary/20">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Fast &amp; Accurate EMI Calculations
          </h2>
          <p className="text-lg text-foreground/80 font-medium">
            Our free EMI Calculator Pro is the best way to calculate your monthly loan installments. By inputting your principal, interest rate, and tenure, you receive a precise, reducing-balance amortized schedule showing exactly how much of your payment goes to interest versus principal, helping you make smarter borrowing decisions.
          </p>
        </section>

        {/* 4-Step How It Works Guide */}
        <section className="p-8 rounded-xl border bg-card">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            How It Works: 4 Steps to Calculate Your Loan EMI
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Follow this clear 4-step process to estimate monthly installments and plan debt repayments efficiently.
          </p>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="p-5 rounded-lg border bg-muted/20">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Enter Principal</h3>
              <p className="text-sm text-muted-foreground">
                Specify the exact loan amount required for your purchase or refinancing.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-muted/20">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Set Interest Rate</h3>
              <p className="text-sm text-muted-foreground">
                Input the lender's annual percentage rate (APR) to compute monthly interest.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-muted/20">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Tenure</h3>
              <p className="text-sm text-muted-foreground">
                Select your repayment duration in months or years to balance payment size and interest.
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-muted/20">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-3">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2">Analyze &amp; Export</h3>
              <p className="text-sm text-muted-foreground">
                Review payment curves, amortization schedules, and export PDF reports instantly.
              </p>
            </div>
          </div>
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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

        {/* 5 Machine-Parseable FAQs with Schema Parity */}
        <section className="border-t pt-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-6 max-w-4xl">
            <div className="p-6 border rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-2">
                What is an Equated Monthly Installment (EMI)?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                An Equated Monthly Installment (EMI) is a fixed monthly payment made by a borrower to a lender, combining principal repayment and accrued interest to clear the debt over a specified tenure.
              </p>
            </div>
            <div className="p-6 border rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-2">
                How is EMI calculated using the reducing balance method?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                EMI is calculated using the standard formula EMI = [P x R x (1+R)^N] / [(1+R)^N - 1], where P is principal, R is the monthly interest rate, and N is the total number of monthly installments.
              </p>
            </div>
            <div className="p-6 border rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-2">
                How does loan tenure affect total interest paid?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Longer loan tenures reduce your individual monthly EMI payment but substantially increase the cumulative interest paid over the life of the loan. Shorter tenures minimize total interest expense.
              </p>
            </div>
            <div className="p-6 border rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-2">
                Can I save interest by making extra loan prepayments?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, making lump-sum or recurring prepayments directly reduces the outstanding principal balance, thereby shortening the effective loan tenure and drastically cutting total interest payable.
              </p>
            </div>
            <div className="p-6 border rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-2">
                What factors should I consider before applying for a loan?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Evaluate your monthly repayment capacity (keeping debt-to-income below 40-50%), loan processing fees, prepayment penalties, fixed versus floating interest rates, and loan tenure.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t pt-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Understanding Loan Mathematics
              </h2>
              <div className="prose prose-slate dark:prose-invert text-muted-foreground">
                <p>
                  <strong>EMI (Equated Monthly Installment)</strong> is a fixed
                  payment amount made by a borrower to a lender at a specified
                  date each calendar month. EMIs are used to pay off both
                  interest and principal each month so that over a specified
                  number of years, the loan is paid off in full. If you are financing a vehicle, you can see how this applies specifically in our <Link href="/blog/two-wheeler-loan-emi-guide-2026" className="text-primary hover:underline">Two-Wheeler Loan EMI Planning Guide 2026</Link>.
                </p>
                <p>
                  The formula used by banks to calculate your EMI is: <br />
                  <code className="bg-muted p-2 rounded font-mono text-sm mt-2 block text-foreground">
                    EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
                  </code>
                </p>
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
