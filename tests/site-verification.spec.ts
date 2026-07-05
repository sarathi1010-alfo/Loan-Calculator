import { test, expect } from "@playwright/test";

const SITE_URL = process.env.SITE_URL || "http://localhost:3000";

const NEW_URLS = [
  "/blog/how-to-calculate-emi",
  "/loan-types/home-loan-emi-calculator",
  "/loan-types/personal-loan-emi-calculator",
  "/loan-types/car-loan-emi-calculator",
  "/loan-types/education-loan-emi-calculator",
  "/scenarios/emi-calculator-5-lakh",
  "/scenarios/emi-calculator-10-lakh",
  "/scenarios/emi-calculator-20-lakh",
  "/tenure-comparison/emi-1-year-vs-5-years",
];

test.describe("Site Verification", () => {
  for (const url of NEW_URLS) {
    test(`Verify ${url} returns 200 and has no console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });

      const response = await page.goto(`${SITE_URL}${url}`);
      expect(response?.status()).toBe(200);
      expect(consoleErrors).toEqual([]);

      // Basic content check
      const h1 = await page.locator("h1");
      await expect(h1).toBeVisible();
    });
  }

  test("Verify core EMI calculation functionality on home page", async ({ page }) => {
    await page.goto(SITE_URL);

    // Initial values check (default ₹5 Lakh, 8.5%, 20 years)
    // EMI for 5L, 8.5%, 20y is ₹4,339
    const emiValue = await page.locator("text=₹4,339").first();
    await expect(emiValue).toBeVisible();

    // Check Pie Chart (client-side dynamic import)
    const pieChart = await page.locator(".recharts-responsive-container");
    await expect(pieChart).toBeVisible();

    // Check Amortization Schedule Tab
    const scheduleTab = await page.locator("button:has-text('Amortization')");
    await scheduleTab.click();
    const scheduleTable = await page.locator("table");
    await expect(scheduleTable).toBeVisible();

    // Check PDF Export Button
    const pdfButton = await page.locator("button:has-text('PDF')");
    await expect(pdfButton).toBeVisible();
  });
});
