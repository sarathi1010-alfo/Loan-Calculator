import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information when using our EMI calculator tools.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Introduction</h2>
        <p>
          Welcome to LoanCalculatorHub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. The Data We Collect About You</h2>
        <p>
          Our application is designed as a client-side tool. This means that all loan calculations (EMI, Principal, Interest, etc.) are performed entirely within your web browser.
          <strong> We do not collect, store, or transmit your financial input data to our servers.</strong>
        </p>
        <p>
          However, we may automatically collect certain non-personally identifiable information, such as your IP address, browser type, operating system, referring URLs, and information about your interaction with our website using cookies and similar tracking technologies for analytics and ad-serving purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. Google AdSense</h2>
        <p>
          We use Google AdSense to display advertisements on our site. Google, as a third-party vendor, uses cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
        </p>
        <p>
          Users may opt-out of personalized advertising by visiting Google's <a href="https://myaccount.google.com/ad-settings" target="_blank" rel="nofollow" className="text-primary hover:underline">Ads Settings</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </div>
    </div>
  );
}
