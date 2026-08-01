import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "EMI & Financial Planning Blog | EMI Calculator Pro",
  description:
    "Read our comprehensive guides on EMIs, loan strategies, interest rates, and financial planning to make smarter borrowing decisions.",
};

export default function BlogHubPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          EMI Calculator Pro Blog – Expert Guides on Loans & Financial Planning
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Welcome to the EMI Calculator Pro Blog, your ultimate destination for mastering loans and personal finance. Whether you're planning to buy a new home, finance a car, or looking to restructure your existing debts, navigating the complex world of interest rates and tenures can be daunting. Our mission is to demystify financial jargon and equip you with actionable, expert-backed strategies that you can apply immediately to your financial life. We believe that an informed borrower is an empowered borrower, capable of saving thousands over the lifetime of a loan.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Here, you'll find comprehensive guides that break down how Equated Monthly Installments (EMIs) work, deep dives into smart borrowing, and objective comparisons of top lenders. By understanding the mathematics of your loans and utilizing our <Link href="/" className="text-primary hover:underline font-medium">cutting-edge calculation tools</Link>, you can avoid common pitfalls, save thousands in interest, and take full control of your financial future. Explore our expertly curated categories below to start making smarter, more informed borrowing decisions today and build a secure foundation for your goals.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Featured Week 1 Guides</h2>
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Link href="/blog/the-ultimate-guide-to-emi-calculations-in-2026" className="block p-6 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-primary">The Ultimate Guide to EMI Calculations in 2026</h3>
            <p className="text-sm text-muted-foreground">Master the math behind your loans and optimize your borrowing strategy.</p>
          </Link>
          <Link href="/loan-types/home-loan-emi-guide" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2">Home Loan EMI Guide</h3>
            <p className="text-sm text-muted-foreground">Everything you need to know about planning and paying off your mortgage.</p>
          </Link>
          <Link href="/loan-types/personal-loan-emi-guide" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2">Personal Loan EMI Guide</h3>
            <p className="text-sm text-muted-foreground">Navigate unsecured loans effectively and minimize interest burdens.</p>
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Explore by Category</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-card rounded-lg border p-6">
            <h3 className="font-bold text-lg mb-3">Loan Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/home-loan-calculator" className="text-muted-foreground hover:text-primary">Home Loan Calculator</Link></li>
              <li><Link href="/personal-loan-calculator" className="text-muted-foreground hover:text-primary">Personal Loan Calculator</Link></li>
              <li><Link href="/car-loan-calculator" className="text-muted-foreground hover:text-primary">Car Loan Calculator</Link></li>
            </ul>
          </div>
          <div className="bg-card rounded-lg border p-6">
            <h3 className="font-bold text-lg mb-3">Financial Planning</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Budgeting around EMIs</li>
              <li>Debt-to-Income Strategies</li>
              <li>Prepayment Tactics</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg border p-6">
            <h3 className="font-bold text-lg mb-3">Lender Comparisons</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Top Bank Rates</li>
              <li>Fixed vs Floating</li>
              <li>NBFCs vs Banks</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg border p-6">
            <h3 className="font-bold text-lg mb-3">Interest Rate Updates</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Repo Rate Impacts</li>
              <li>2026 Rate Trends</li>
              <li>Historical Analysis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">All Articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group block"
            >
              <div className="bg-card rounded-lg border p-6 h-full transition-shadow hover:shadow-md">
                <div className="text-sm text-muted-foreground mb-3 flex items-center justify-between">
                  <span className="font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
