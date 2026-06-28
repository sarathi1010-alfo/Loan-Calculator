import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Calculator } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block text-lg">
              LoanCalculatorHub
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              href="/home-loan-calculator"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home Loan
            </Link>
            <Link
              href="/car-loan-calculator"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Car Loan
            </Link>
            <Link
              href="/personal-loan-calculator"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Personal Loan
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
