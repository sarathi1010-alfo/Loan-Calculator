import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl text-foreground">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Calculator or Page Not Found
      </h2>
      <p className="mt-3 text-base text-muted-foreground max-w-md">
        The loan calculator or page you requested doesn&apos;t exist. Use our free calculators to plan your loans accurately.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
        >
          Return to EMI Calculator
        </Link>
      </div>
    </div>
  );
}
