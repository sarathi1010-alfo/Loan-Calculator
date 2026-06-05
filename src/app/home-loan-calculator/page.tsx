import { Metadata } from "next";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";

export const metadata: Metadata = {
  title: "Home Loan EMI Calculator",
  description: "Calculate your home loan EMI instantly. View detailed amortization schedules, interest breakdowns, and plan your housing finance better.",
};

export default function HomeLoanCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <div className="max-w-3xl mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Home Loan EMI Calculator
        </h1>
        <p className="text-xl text-muted-foreground">
          Buying your dream house? Use our Home Loan EMI calculator to understand your monthly payments, total interest burden, and amortization schedule.
        </p>
      </div>

      {/* Default values for Home Loan: ₹50 Lakh, 8.5%, 20 Years */}
      <SeoCalculator
        initialPrincipal={5000000}
        initialInterest={8.5}
        initialTenure={240}
      />

      <div className="mt-24 space-y-12">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">How Home Loan EMI Works</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
            <p>
              Your Home Loan EMI consists of two main components: the principal amount and the interest charged by the bank. In the initial years of your home loan, the interest component makes up a larger portion of your EMI. Over time, as the principal outstanding reduces, the principal component of your EMI increases while the interest component decreases.
            </p>
            <p className="mt-4">
              Using our calculator, you can visually see this shift in the amortization schedule.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
