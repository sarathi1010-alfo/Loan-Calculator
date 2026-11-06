import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lender Specific Guides | EMI Calculator Pro",
  description:
    "Compare and explore lender-specific EMI guides, interest rates, and loan features from top banks and NBFCs.",
};

export default function LendersHubPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Lender Specific Guides
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Make the right choice by comparing top lenders. Our lender-specific guides break down current interest rates, processing fees, and eligibility criteria across major banks and financial institutions.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Top Lender Guides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/home-loan-calculator" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2">Home Loan EMI Guide & Calculator</h3>
            <p className="text-sm text-muted-foreground">Detailed overview of top bank home loan offerings and monthly payment calculation.</p>
          </Link>
          <Link href="/personal-loan-calculator" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2">Personal Loan EMI Guide & Calculator</h3>
            <p className="text-sm text-muted-foreground">Comprehensive guide to personal loan borrowing options and rate comparisons.</p>
          </Link>
          <Link href="/car-loan-calculator" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2">Car Loan EMI Guide & Calculator</h3>
            <p className="text-sm text-muted-foreground">Everything you need to know about top auto loans and amortization schedules.</p>
          </Link>
        </div>
      </div>

      <div>
         <Link href="/blog" className="text-primary hover:underline font-medium">
          &#8592; Back to Main Blog
        </Link>
      </div>
    </div>
  );
}
