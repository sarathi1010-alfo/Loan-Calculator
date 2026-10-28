import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://emicalculatorpro.alfo.online"),
  title: {
    default: "EMI Calculator Pro - Free Loan EMI Calculator",
    template: "%s | EMI Calculator Pro",
  },
  description:
    "Calculate monthly loan EMIs instantly for home, car, and personal loans. Free EMI calculator with interest breakdowns and repayment schedules.",
  alternates: {
    canonical: "https://emicalculatorpro.alfo.online/",
  },
  openGraph: {
    title: "EMI Calculator Pro - Free Loan EMI Calculator",
    description:
      "Calculate monthly loan EMIs instantly for home, car, and personal loans. Free EMI calculator with interest breakdowns and repayment schedules.",
    url: "https://emicalculatorpro.alfo.online/",
    siteName: "EMI Calculator Pro",
    type: "website",
    images: [
      {
        url: "https://emicalculatorpro.alfo.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free EMI Calculator Pro Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMI Calculator Pro - Free Loan EMI Calculator",
    description:
      "Calculate monthly loan EMIs instantly for home, car, and personal loans. Free EMI calculator with interest breakdowns and repayment schedules.",
    images: ["https://emicalculatorpro.alfo.online/og-image.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-6393936268623951",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EMI Calculator Pro",
    url: "https://emicalculatorpro.alfo.online/",
    logo: "https://emicalculatorpro.alfo.online/logo.png",
    description:
      "Free EMI Calculator for personal, home, and car loans with visual amortization breakdowns.",
    sameAs: [
      "https://twitter.com/emicalculatorpro",
      "https://www.linkedin.com/company/emicalculatorpro",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-HZQ3QT11QC`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HZQ3QT11QC');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-background antialiased`}
      >
        <a
          href="#main-content"
          id="skip-link"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
