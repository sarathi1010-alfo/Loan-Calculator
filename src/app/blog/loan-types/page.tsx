import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loan Types Guides | EMI Calculator Pro",
  description:
    "Explore our comprehensive guides on different loan types including Home, Personal, and Car loans to make informed financial decisions.",
};

export default function LoanTypesHubPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Loan Types Guides
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Navigate the complexities of different loan types with our detailed guides. Whether you are looking for a mortgage, need a personal loan, or want to finance a new car, we provide you with all the essential information.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Featured Guides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/loan-types/home-loan-emi-guide" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2">Home Loan EMI Guide</h3>
            <p className="text-sm text-muted-foreground">Everything you need to know about planning and paying off your mortgage.</p>
          </Link>
          <Link href="/loan-types/personal-loan-emi-guide" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2">Personal Loan EMI Guide</h3>
            <p className="text-sm text-muted-foreground">Navigate unsecured loans effectively and minimize interest burdens.</p>
          </Link>
           <Link href="/loan-types/car-loan-emi-guide" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2">Car Loan EMI Guide</h3>
            <p className="text-sm text-muted-foreground">Plan your vehicle purchase with our comprehensive car loan guide.</p>
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
