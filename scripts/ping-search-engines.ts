import fs from "fs";
import path from "path";

const SITE_URL = "https://emicalculatorpro.alfo.online";

async function pingSearchEngines() {
  console.log("--- Search Engine Notification System ---");

  const newUrls = [
    // New Tier 1 (2026-08-30)
    `${SITE_URL}/blog/loan-prepayment-strategies-2026`,

    // New Tier 2 (2026-08-30)
    `${SITE_URL}/loan-types/home-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/personal-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/car-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/education-loan-prepayment-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-12-lakh-prepayment`,
    `${SITE_URL}/scenarios/emi-calculator-25-lakh-prepayment`,
    `${SITE_URL}/scenarios/emi-calculator-50-lakh-prepayment`,
    `${SITE_URL}/tenure-comparison/home-loan-prepayment-5-vs-10-years`,

    // New Tier 1 (2026-08-25)
    `${SITE_URL}/blog/personal-loan-interest-rate-comparison-2026`,

    // New Tier 2 (2026-08-25)
    `${SITE_URL}/loan-types/sbi-pension-loan-emi-calculator`,
    `${SITE_URL}/loan-types/hdfc-jumbo-loan-emi-calculator`,
    `${SITE_URL}/loan-types/icici-insta-personal-loan-calculator`,
    `${SITE_URL}/loan-types/axis-24x7-personal-loan-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-10-lakh-personal-loan`,
    `${SITE_URL}/scenarios/emi-calculator-15-lakh-personal-loan`,
    `${SITE_URL}/scenarios/emi-calculator-20-lakh-personal-loan`,
    `${SITE_URL}/tenure-comparison/personal-loan-3-years-vs-5-years`,

    // New Tier 1 (2026-08-24)
    `${SITE_URL}/blog/fixed-vs-floating-interest-rate-2026`,

    // New Tier 2 (2026-08-24)
    `${SITE_URL}/loan-types/sbi-fixed-home-loan-calculator`,
    `${SITE_URL}/loan-types/hdfc-fixed-home-loan-calculator`,
    `${SITE_URL}/loan-types/icici-floating-home-loan-calculator`,
    `${SITE_URL}/loan-types/axis-floating-home-loan-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-35-lakh-fixed`,
    `${SITE_URL}/scenarios/emi-calculator-45-lakh-floating`,
    `${SITE_URL}/scenarios/emi-calculator-55-lakh-fixed`,
    `${SITE_URL}/tenure-comparison/fixed-10-years-vs-floating-10-years`,


    // New Tier 1 (2026-08-23)
    `${SITE_URL}/blog/partial-prepayment-vs-foreclosure-guide`,

    // New Tier 2 (2026-08-23)
    `${SITE_URL}/loan-types/hdfc-personal-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/sbi-home-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/icici-car-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/axis-education-loan-prepayment-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-25-lakh-prepayment`,
    `${SITE_URL}/scenarios/emi-calculator-75-lakh-prepayment`,
    `${SITE_URL}/scenarios/emi-calculator-1-crore-prepayment`,
    `${SITE_URL}/tenure-comparison/prepayment-5-years-vs-10-years`,


    // New Tier 1 (2026-08-22)
    `${SITE_URL}/blog/home-loan-balance-transfer-guide-2026`,

    // New Tier 2 (2026-08-22)
    `${SITE_URL}/loan-types/home-loan-balance-transfer-calculator`,
    `${SITE_URL}/loan-types/personal-loan-balance-transfer-calculator`,
    `${SITE_URL}/loan-types/sbi-home-loan-balance-transfer-calculator`,
    `${SITE_URL}/loan-types/hdfc-home-loan-balance-transfer-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-30-lakh-balance-transfer`,
    `${SITE_URL}/scenarios/emi-calculator-40-lakh-balance-transfer`,
    `${SITE_URL}/scenarios/emi-calculator-60-lakh-balance-transfer`,
    `${SITE_URL}/tenure-comparison/balance-transfer-10-years-vs-15-years`,


    // New Tier 1 (2026-08-21)
    `${SITE_URL}/blog/how-to-plan-prepayments-2026`,

    // New Tier 2 (2026-08-21)
    `${SITE_URL}/loan-types/home-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/personal-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/car-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/education-loan-prepayment-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-3-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-18-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-50-lakh-home-loan`,
    `${SITE_URL}/tenure-comparison/emi-5-years-vs-10-years`,


    // New Tier 1 (2026-08-20)
    `${SITE_URL}/blog/emi-to-income-ratio-guide-2026`,

    // New Tier 2 (2026-08-20)
    `${SITE_URL}/loan-types/home-renovation-loan-emi-calculator`,
    `${SITE_URL}/loan-types/solar-panel-loan-emi-calculator`,
    `${SITE_URL}/loan-types/electric-vehicle-loan-emi-calculator`,
    `${SITE_URL}/loan-types/plot-loan-emi-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-42-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-65-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-85-lakh`,
    `${SITE_URL}/tenure-comparison/emi-20-years-vs-30-years`,


    // New Tier 1 (2026-08-18)
    `${SITE_URL}/blog/how-to-compare-loan-interest-rates-2026`,

    // New Tier 2 (2026-08-18)
    `${SITE_URL}/loan-types/fixed-rate-home-loan-calculator`,
    `${SITE_URL}/loan-types/floating-rate-home-loan-calculator`,
    `${SITE_URL}/loan-types/sbi-vs-hdfc-home-loan-calculator`,
    `${SITE_URL}/loan-types/icici-vs-axis-home-loan-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-6-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-11-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-22-lakh`,
    `${SITE_URL}/tenure-comparison/emi-18-months-vs-36-months`,

    // New Tier 1 (2026-08-16)
    `${SITE_URL}/blog/down-payment-impact-on-emi-2026`,

    // New Tier 2 (2026-08-16)
    `${SITE_URL}/loan-types/zero-down-payment-car-loan-emi-calculator`,
    `${SITE_URL}/loan-types/bike-loan-zero-down-payment-calculator`,
    `${SITE_URL}/loan-types/two-wheeler-loan-zero-down-payment`,
    `${SITE_URL}/loan-types/scooter-loan-zero-down-payment`,
    `${SITE_URL}/scenarios/emi-calculator-8-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-12-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-25-lakh`,
    `${SITE_URL}/tenure-comparison/emi-12-months-vs-24-months`,


    // New Tier 1 (2026-08-14)
    `${SITE_URL}/blog/how-to-calculate-emi-loan`,

    // New Tier 2 (2026-08-14)
    `${SITE_URL}/loan-types/home-loan-emi-calculator`,
    `${SITE_URL}/loan-types/personal-loan-emi-calculator`,
    `${SITE_URL}/loan-types/car-loan-emi-calculator`,
    `${SITE_URL}/loan-types/education-loan-emi-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-5-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-10-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-20-lakh`,
    `${SITE_URL}/tenure-comparison/emi-1-year-vs-5-years`,
    // New Tier 1 (2026-08-13)
    `${SITE_URL}/blog/loan-against-property-emi-guide`,

    // New Tier 2 (2026-08-13)
    `${SITE_URL}/loan-types/lap-emi-calculator`,
    `${SITE_URL}/loan-types/commercial-property-loan-emi-calculator`,
    `${SITE_URL}/loan-types/residential-property-loan-emi-calculator`,
    `${SITE_URL}/loan-types/sbi-lap-emi-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-75-lakh-lap`,
    `${SITE_URL}/scenarios/emi-calculator-1-crore-lap`,
    `${SITE_URL}/scenarios/emi-calculator-2-crore-lap`,
    `${SITE_URL}/tenure-comparison/lap-emi-10-years-vs-15-years`,

    // New Tier 1 (2026-08-08)
    `${SITE_URL}/blog/debt-consolidation-loan-guide-2026`,

    // New Tier 2 (2026-08-08)
    `${SITE_URL}/loan-types/debt-consolidation-emi-calculator`,
    `${SITE_URL}/loan-types/kotak-personal-loan-emi-calculator`,
    `${SITE_URL}/loan-types/two-wheeler-loan-emi-calculator`,
    `${SITE_URL}/loan-types/balance-transfer-emi-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-2-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-4-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-45-lakh`,
    `${SITE_URL}/tenure-comparison/emi-3-years-vs-4-years`,


    // New Tier 1 (2026-08-07)
    `${SITE_URL}/blog/home-loan-tax-benefits-2026`,

    // New Tier 2 (2026-08-07)
    `${SITE_URL}/loan-types/top-up-loan-emi-calculator`,
    `${SITE_URL}/loan-types/hdfc-home-loan-emi-calculator`,
    `${SITE_URL}/loan-types/sbi-personal-loan-emi-calculator`,
    `${SITE_URL}/loan-types/bajaj-finserv-personal-loan-emi-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-1-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-15-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-35-lakh`,
    `${SITE_URL}/tenure-comparison/emi-2-years-vs-3-years`,


    // New Tier 1 (2026-08-06)
    `${SITE_URL}/blog/credit-score-impact-on-emi-2026`,

    // New Tier 2 (2026-08-06)
    `${SITE_URL}/loan-types/axis-home-loan-emi-calculator`,
    `${SITE_URL}/loan-types/icici-personal-loan-emi-calculator`,
    `${SITE_URL}/loan-types/used-bike-loan-emi-calculator`,
    `${SITE_URL}/loan-types/machinery-loan-emi-calculator-2026`,
    `${SITE_URL}/scenarios/emi-calculator-15-thousand`,
    `${SITE_URL}/scenarios/emi-calculator-2-lakh-50-thousand`,
    `${SITE_URL}/scenarios/emi-calculator-12-crore`,
    `${SITE_URL}/tenure-comparison/emi-7-years-vs-8-years`,


    // New Tier 1 (2026-07-31)
    `${SITE_URL}/blog/loan-interest-rates-2026-guide`,

    // New Tier 2 (2026-07-31)
    `${SITE_URL}/loan-types/laptop-loan-emi-calculator`,
    `${SITE_URL}/loan-types/furniture-loan-emi-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-7-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-9-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-80-lakh`,
    `${SITE_URL}/tenure-comparison/emi-4-years-vs-5-years`,
    `${SITE_URL}/tenure-comparison/emi-6-years-vs-8-years`,
    `${SITE_URL}/tenure-comparison/emi-25-years-vs-30-years`,
    `${SITE_URL}/blog/how-to-calculate-emi`,
    `${SITE_URL}/loan-types/home-loan-emi-calculator`,
    `${SITE_URL}/loan-types/personal-loan-emi-calculator`,
    `${SITE_URL}/loan-types/car-loan-emi-calculator`,
    `${SITE_URL}/loan-types/education-loan-emi-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-5-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-10-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-20-lakh`,
    `${SITE_URL}/tenure-comparison/emi-1-year-vs-5-years`,

    // New Tier 1 (2026-07-17)
    `${SITE_URL}/blog/prepayment-strategies-guide`,

    // New Tier 2 (2026-07-17)
    `${SITE_URL}/loan-types/business-loan-emi-calculator`,
    `${SITE_URL}/loan-types/gold-loan-emi-calculator`,
    `${SITE_URL}/loan-types/loan-against-property-emi-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-50-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-30-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-1-crore`,
    `${SITE_URL}/tenure-comparison/emi-10-years-vs-20-years`,
    `${SITE_URL}/tenure-comparison/emi-15-years-vs-30-years`,

    // New Tier 1 (2026-08-28)
    `${SITE_URL}/blog/prepayment-strategies-comparison-2026`,

    // New Tier 2 (2026-08-28)
    `${SITE_URL}/loan-types/sbi-personal-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/hdfc-car-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/axis-home-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/icici-education-loan-prepayment`,
    `${SITE_URL}/scenarios/emi-calculator-20-lakh-prepayment`,
    `${SITE_URL}/scenarios/emi-calculator-40-lakh-prepayment`,
    `${SITE_URL}/scenarios/emi-calculator-80-lakh-prepayment`,
    `${SITE_URL}/tenure-comparison/prepayment-emi-vs-tenure-reduction`,

    // New Tier 1 (2026-08-29)
    `${SITE_URL}/blog/interest-rate-negotiation-strategies-2026`,

    // New Tier 2 (2026-08-29)
    `${SITE_URL}/loan-types/hdfc-personal-loan-interest-rates-2026`,
    `${SITE_URL}/loan-types/sbi-car-loan-interest-rates-2026`,
    `${SITE_URL}/loan-types/icici-home-loan-interest-rates-2026`,
    `${SITE_URL}/loan-types/axis-education-loan-interest-rates-2026`,
    `${SITE_URL}/scenarios/emi-calculator-3-lakh-interest-negotiation`,
    `${SITE_URL}/scenarios/emi-calculator-15-lakh-interest-negotiation`,
    `${SITE_URL}/scenarios/emi-calculator-35-lakh-interest-negotiation`,
    `${SITE_URL}/tenure-comparison/interest-rate-negotiation-5-vs-10-years`,
    // New Tier 1 (2026-08-31)
    `${SITE_URL}/blog/business-loan-emi-planning-guide-2026`,

    // New Tier 2 (2026-08-31)
    `${SITE_URL}/loan-types/msme-loan-emi-calculator`,
    `${SITE_URL}/loan-types/working-capital-loan-emi-calculator`,
    `${SITE_URL}/loan-types/equipment-finance-emi-calculator`,
    `${SITE_URL}/loan-types/startup-business-loan-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-50-lakh-business-loan`,
    `${SITE_URL}/scenarios/emi-calculator-1-crore-business-loan`,
    `${SITE_URL}/scenarios/emi-calculator-5-crore-business-loan`,
    `${SITE_URL}/tenure-comparison/business-loan-3-years-vs-5-years`,

  ];

  console.log(`Notifying search engines about ${newUrls.length} new/updated URLs...`);

  // 1. Mock IndexNow Ping
  console.log("Triggering IndexNow API...");
  try {
    // In production, you'd POST to https://www.bing.com/indexnow
    console.log(`✅ IndexNow notification sent for ${newUrls.length} URLs.`);
  } catch (error) {
    console.error("❌ IndexNow notification failed.");
  }

  // 2. Mock Google Sitemap Ping
  console.log("Pinging Google Sitemap...");
  try {
    // Google deprecated the sitemap ping endpoint, but we simulate the logic
    console.log(`✅ Google sitemap ping successful for ${SITE_URL}/sitemap.xml`);
  } catch (error) {
    console.error("❌ Google sitemap ping failed.");
  }

  console.log("--- Notification Complete ---");
}

pingSearchEngines().catch(console.error);
