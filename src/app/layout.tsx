import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LoanCalculatorHub | Fast & Accurate EMI Calculator",
    template: "%s | LoanCalculatorHub"
  },
  description: "Instantly calculate EMIs, compare loans, and plan smarter repayments with our free, accurate, and fast loan calculators.",
  openGraph: {
    title: "Free EMI Calculator Pro - Personal, Home & Car Loan Calculator",
    description: "Calculate your loan EMI instantly with our free calculator. Compare personal, home, and car loan options.",
    url: "https://emicalculatorpro.alfo.online/",
    type: "website",
    images: [
      {
        url: "https://emicalculatorpro.alfo.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free EMI Calculator Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free EMI Calculator Pro",
    description: "Calculate loan EMIs instantly - Personal, Home, and Car loans.",
    images: ["https://emicalculatorpro.alfo.online/twitter-image.jpg"],
  },
  other: {
    "google-adsense-account": "ca-pub-6393936268623951"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
