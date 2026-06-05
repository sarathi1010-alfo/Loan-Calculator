import UniversalCalculator from "@/components/calculator/UniversalCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universal EMI Calculator",
  description: "Instantly calculate EMIs, compare loans, and plan smarter repayments.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Instantly calculate EMIs, compare loans, and plan smarter repayments.
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
