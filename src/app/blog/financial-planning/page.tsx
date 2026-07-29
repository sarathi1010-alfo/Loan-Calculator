import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Planning Insights | EMI Calculator Pro",
  description:
    "Master your personal finances with our expert guides on budgeting around EMIs, managing debt-to-income ratios, and smart loan repayment strategies.",
};

export default function FinancialPlanningHubPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Financial Planning Insights
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Taking out a loan is just one part of your financial journey. Explore our resources to learn how to effectively budget around your EMIs, manage your debt-to-income ratio, and plan smart prepayments to achieve long-term financial health.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Essential Planning Guides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/blog/the-ultimate-guide-to-emi-calculations-in-2026" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2">The Ultimate Guide to EMI Calculations</h3>
            <p className="text-sm text-muted-foreground">Master the math behind your loans and optimize your borrowing strategy.</p>
          </Link>
          <Link href="#" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors opacity-70">
            <h3 className="font-bold text-lg mb-2">Budgeting Around EMIs</h3>
            <p className="text-sm text-muted-foreground">Learn how to effectively balance your monthly loan payments with everyday expenses.</p>
          </Link>
          <Link href="#" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors opacity-70">
            <h3 className="font-bold text-lg mb-2">Prepayment Strategies</h3>
            <p className="text-sm text-muted-foreground">Discover when and how to prepay your loans to save on interest.</p>
          </Link>
        </div>
      </div>

      <div>
         <Link href="/blog" className="text-primary hover:underline font-medium">
          &larr; Back to Main Blog
        </Link>
      </div>
    </div>
  );
}
