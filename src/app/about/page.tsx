import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us | EMI Calculator Pro",
  description:
    "Learn about EMICalculatorPro, your trusted partner for accurate EMI calculations, smarter loan decisions, and comprehensive financial literacy.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About EMICalculatorPro",
    "description": "Learn about EMICalculatorPro, your trusted partner for accurate EMI calculations, smarter loan decisions, and comprehensive financial literacy.",
    "url": "https://emicalculatorpro.alfo.online/about",
    "publisher": {
      "@type": "Organization",
      "name": "EMICalculatorPro",
      "url": "https://emicalculatorpro.alfo.online/"
    }
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 md:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
          About EMICalculatorPro – Helping You Make Smarter Loan Decisions
        </h1>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Welcome to EMICalculatorPro, your definitive resource for navigating the complex world of personal finance and borrowing. Our mission is simple yet powerful: to democratize financial knowledge and empower everyday borrowers to make smarter, more informed loan decisions. We believe that transparency is the cornerstone of financial well-being, and our tools are designed to shine a light on the true costs of borrowing.
          </p>
          <p>
            In today's fast-paced economy, understanding the nuances of Equated Monthly Installments (EMIs), interest rate fluctuations, and loan tenures can be overwhelming. We saw a critical need for an accessible, highly accurate platform that strips away the jargon and provides crystal-clear insights. That's why we built EMICalculatorPro. Our platform offers precision-engineered calculators that utilize the standard reducing-balance EMI formula to give you pinpoint accuracy for every scenario—whether you are planning a home purchase, financing a vehicle, or consolidating debt.
          </p>
          <p>
            Our commitment to financial literacy goes beyond just numbers. We provide comprehensive educational resources, objective lender comparisons, and actionable strategies to help you minimize interest burdens and achieve true financial freedom. We are dedicated to ensuring that you understand not just how much you owe, but why you owe it and how you can optimize your repayments. Explore our <Link href="/" className="text-primary hover:underline font-medium">powerful EMI calculators</Link> to start planning your next steps, and dive into our <Link href="/blog/the-ultimate-guide-to-emi-calculations-in-2026" className="text-primary hover:underline font-medium">Ultimate Guide to EMI Calculations</Link> for deeper insights.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Explore Our Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <h3 className="font-bold text-lg mb-2">EMI Calculators</h3>
              <p className="text-sm text-muted-foreground">Plan your home, personal, and car loans with our accurate tools.</p>
            </Link>
            <Link href="/blog" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <h3 className="font-bold text-lg mb-2">Financial Blog</h3>
              <p className="text-sm text-muted-foreground">Read our comprehensive guides and expert tips on managing your loans.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
