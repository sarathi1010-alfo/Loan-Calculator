import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for LoanCalculatorHub",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Terms and Conditions</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Acceptance of Terms</h2>
        <p>
          By accessing and using LoanCalculatorHub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. Description of Service</h2>
        <p>
          LoanCalculatorHub provides web-based tools to estimate loan EMIs, interest rates, and generate amortization schedules. These tools are provided for educational and informational purposes only.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. No Financial Advice</h2>
        <p>
          The calculations provided by our tools are estimates based on the information you provide and standard mathematical formulas. <strong>They do not constitute financial, legal, or tax advice.</strong>
        </p>
        <p>
          Actual loan terms, EMIs, and interest rates may vary depending on the lender, your credit score, market conditions, and other factors. We strongly recommend consulting with a qualified financial advisor or your lender before making any financial decisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Disclaimer of Warranties</h2>
        <p>
          The service is provided on an "as is" and "as available" basis without any warranties of any kind, whether express or implied. We do not warrant that the calculations will be 100% accurate, error-free, or meet your specific requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">5. Limitation of Liability</h2>
        <p>
          In no event shall LoanCalculatorHub or its operators be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our tools, including but not limited to any financial losses incurred based on our estimates.
        </p>
      </div>
    </div>
  );
}
