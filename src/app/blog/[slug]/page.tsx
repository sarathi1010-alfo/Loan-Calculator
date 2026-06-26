import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-data";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["EMI Calculator Pro"],
    }
  };
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    authorName: "EMI Calculator Pro",
    url: `https://emicalculatorpro.alfo.online/blog/${post.slug}`
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: post.title, item: `/blog/${post.slug}` },
  ]);

  return (
    <article className="container mx-auto px-4 py-8 md:px-8 lg:py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6">
        <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center space-x-2 text-sm text-muted-foreground flex-wrap">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item" className="hover:text-foreground">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li>/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/blog" itemProp="item" className="hover:text-foreground">
              <span itemProp="name">Blog</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li>/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="truncate">
            <span itemProp="name" className="text-foreground" aria-current="page">{post.title}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <header className="mb-10 border-b pb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {post.description}
        </p>
      </header>

      {/* AEO Answer Block */}
      <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-10">
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
          Quick Answer
        </h2>
        <p className="text-lg font-medium">
          {post.answerBlock}
        </p>
      </div>

      <div
        className="prose prose-slate dark:prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 bg-card border rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to calculate your own EMI?</h3>
        <p className="text-muted-foreground mb-6">Use our lightning-fast, highly accurate tools to visualize your repayment strategies.</p>
        <Link href="/" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Try the EMI Calculator Now
        </Link>
      </div>
    </article>
  );
}
