import { Metadata } from "next";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";

export const metadata: Metadata = {
  title: "Personal Loan EMI Calculator",
  description: "Calculate your personal loan EMI with ease. Adjust interest rates and tenure to find an affordable monthly payment plan.",
};

export default function PersonalLoanCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
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
