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
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Financial Planning Guides
        </h1>
        <p className="text-xl text-muted-foreground">
          Expert insights and comprehensive guides to help you understand loans,
          optimize your EMIs, and manage your debt effectively.
        </p>
      </div>

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
  );
}
