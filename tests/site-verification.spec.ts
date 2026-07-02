import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:3000';

const urlsToVerify = [
  '/',
  '/blog/how-to-calculate-emi',
  '/loan-types/home-loan-emi-calculator',
  '/loan-types/personal-loan-emi-calculator',
  '/loan-types/car-loan-emi-calculator',
  '/loan-types/education-loan-emi-calculator',
  '/scenarios/emi-calculator-5-lakh',
  '/scenarios/emi-calculator-10-lakh',
  '/scenarios/emi-calculator-20-lakh',
  '/tenure-comparison/emi-1-year-vs-5-years',
];

test.describe('Site SEO and Functionality Verification', () => {
  for (const url of urlsToVerify) {
    test(`Verify ${url} returns 200 OK and has no console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      const response = await page.goto(`${baseUrl}${url}`, { waitUntil: 'networkidle' });
      expect(response?.status()).toBe(200);
      expect(consoleErrors).toEqual([]);
    });
  }

  test('Verify EMI Calculator functionality on homepage', async ({ page }) => {
    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    // Verify default calculation for default values (5L, 8.5%, 20Y/240M)
    // EMI for 5L, 8.5%, 20Y is ~₹4,339. Using first() to avoid strict mode violation.
    const defaultEmi = page.locator('text=₹4,339').first();
    await expect(defaultEmi).toBeVisible();

    // Verify Recharts Pie Chart visibility (ResponsiveContainer parent)
    const chartContainer = page.locator('.recharts-responsive-container');
    await expect(chartContainer).toBeVisible();

    // Switch to Amortization tab
    const amortizationTab = page.locator('button[role="tab"]:has-text("Amortization")');
    await amortizationTab.click();

    // Verify Amortization Table visibility
    const amortizationTable = page.locator('table');
    await expect(amortizationTable).toBeVisible();

    // Verify "Export PDF" button exists
    const exportButton = page.locator('button:has-text("PDF")');
    await expect(exportButton).toBeVisible();
  });
});
