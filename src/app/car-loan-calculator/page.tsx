import { Metadata } from "next";
import { SeoCalculator } from "@/components/calculator/SeoCalculator";

export const metadata: Metadata = {
  title: "Car Loan EMI Calculator",
  description: "Check your monthly auto loan payments with our car loan EMI calculator. Compare interest rates and find the right tenure for your vehicle.",
};

export default function CarLoanCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
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
