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
    <main className="container mx-auto px-4 py-8 md:px-8 lg:py-12">
      <header className="max-w-4xl mb-12 blog-intro-section" data-test="blog-header">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          <span className="text-primary">EMI Calculator Pro Blog</span> &#8211; Expert Guides on Loans &#38; Financial Planning
        </h1>
        <section className="prose-lg text-muted-foreground">
          <p className="leading-relaxed mb-4">
            Welcome to the EMI Calculator Pro Blog, your ultimate destination for mastering loans &amp; personal finance. Whether you&#39;re planning to buy a new home, finance a car, or looking to restructure your existing debts, navigating the complex world of interest rates and tenures can be daunting. Our mission is to demystify financial jargon and equip you with actionable, expert-backed strategies that you can apply immediately to your financial life. We believe that an informed borrower is an empowered borrower, capable of saving thousands over the lifetime of a loan!
          </p>
          <p className="leading-relaxed">
            Here, you&#39;ll find comprehensive guides that break down how Equated Monthly Installments (EMIs) work, deep dives into smart borrowing, and objective comparisons of top lenders. By understanding the mathematics of your loans and utilizing our <Link href="/" className="text-primary hover:underline font-medium"><strong><em>cutting-edge calculation tools</em></strong></Link>, you can avoid common pitfalls, save thousands in interest, and take full control of your financial future. Explore our expertly curated categories below to start making smarter, more informed borrowing decisions today and build a secure foundation for your financial goals.
          </p>
        </section>
      </header>

      <section className="mb-16 week-1-guides" data-test="week-1-guides">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2"><span>Featured Week 1 Guides</span></h2>
        <nav className="grid gap-4 md:grid-cols-3 mb-8">
          <Link href="/blog/the-ultimate-guide-to-emi-calculations-in-2026" className="block p-6 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-primary"><strong><em>The Ultimate Guide to EMI Calculations in 2026</em></strong></h3>
            <p className="text-sm text-muted-foreground"><span>Master the math behind your loans and optimize your borrowing strategy.</span></p>
          </Link>
          <Link href="/loan-types/home-loan-emi-guide" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2"><strong><em>Home Loan EMI Guide</em></strong></h3>
            <p className="text-sm text-muted-foreground"><span>Everything you need to know about planning and paying off your mortgage.</span></p>
          </Link>
          <Link href="/loan-types/personal-loan-emi-guide" className="block p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
            <h3 className="font-bold text-lg mb-2"><strong><em>Personal Loan EMI Guide</em></strong></h3>
            <p className="text-sm text-muted-foreground"><span>Navigate unsecured loans effectively and minimize interest burdens.</span></p>
          </Link>
        </nav>
      </section>

      <section className="mb-16 category-sections" data-test="categories">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2"><span>Explore by Category</span></h2>
        <nav className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article className="bg-card rounded-lg border p-6">
            <Link href="/blog/loan-types" className="group block mb-3">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors"><strong><em>Loan Guides</em></strong></h3>
            </Link>
            <ul className="space-y-2 text-sm">
              <li><Link href="/home-loan-calculator" className="text-muted-foreground hover:text-primary">Home Loan Calculator</Link></li>
              <li><Link href="/personal-loan-calculator" className="text-muted-foreground hover:text-primary">Personal Loan Calculator</Link></li>
              <li><Link href="/car-loan-calculator" className="text-muted-foreground hover:text-primary">Car Loan Calculator</Link></li>
            </ul>
          </article>
          <article className="bg-card rounded-lg border p-6">
            <Link href="/blog/financial-planning" className="group block mb-3">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors"><strong><em>Financial Planning</em></strong></h3>
            </Link>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span>Budgeting around EMIs</span></li>
              <li><span>Debt-to-Income Strategies</span></li>
              <li><span>Prepayment Tactics</span></li>
            </ul>
          </article>
          <article className="bg-card rounded-lg border p-6">
            <Link href="/blog/lenders" className="group block mb-3">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors"><strong><em>Lender Comparisons</em></strong></h3>
            </Link>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span>Top Bank Rates</span></li>
              <li><span>Fixed vs Floating</span></li>
              <li><span>NBFCs vs Banks</span></li>
            </ul>
          </article>
          <article className="bg-card rounded-lg border p-6">
            <Link href="/blog/loan-interest-rates-2026-guide" className="group block mb-3">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors"><strong><em>Interest Rate Updates</em></strong></h3>
            </Link>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span>Repo Rate Impacts</span></li>
              <li><span>2026 Rate Trends</span></li>
              <li><span>Historical Analysis</span></li>
            </ul>
          </article>
        </nav>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">All Articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group block"
            >
              <article className="bg-card rounded-lg border p-6 h-full transition-shadow hover:shadow-md">
                <div className="text-sm text-muted-foreground mb-3 flex items-center justify-between">
                  <span className="font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <time>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
