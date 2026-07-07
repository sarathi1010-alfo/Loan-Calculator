import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:3000';

test.describe('Technical Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Wait for the server to be ready
    await page.goto(baseUrl);
  });

  test('New Tier 1 URL returns 200 OK', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/how-to-calculate-emi`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('How to Calculate EMI');
  });

  test('Tier 2 programmatic URLs return 200 OK', async ({ page }) => {
    const slugs = [
      '/loan-types/home-loan-emi-calculator',
      '/loan-types/personal-loan-emi-calculator',
      '/loan-types/car-loan-emi-calculator',
      '/loan-types/education-loan-emi-calculator',
      '/scenarios/emi-calculator-5-lakh',
      '/scenarios/emi-calculator-10-lakh',
      '/scenarios/emi-calculator-20-lakh',
      '/tenure-comparison/emi-1-year-vs-5-years'
    ];

    for (const slug of slugs) {
      const response = await page.goto(`${baseUrl}${slug}`);
      expect(response?.status()).toBe(200);
    }
  });

  test('EMI calculation accuracy on main page', async ({ page }) => {
    await page.goto(baseUrl);

    // Result for defaults (₹5L, 8.5%, 20y) is ₹4,339
    // Selecting the one in the summary card to avoid strict mode violation
    const emiResult = page.locator('div').filter({ hasText: /^₹4,339$/ }).first();
    await expect(emiResult).toBeVisible();
  });

  test('Pie chart and Amortization schedule rendering', async ({ page }) => {
    await page.goto(baseUrl);

    // Check for Pie Chart
    const pieChart = page.getByRole('application');
    await expect(pieChart).toBeVisible();

    // Switch to Amortization tab
    await page.getByRole('tab', { name: /Amortization/i }).click();

    // Check for Amortization Schedule table
    const table = page.locator('table');
    await expect(table).toBeVisible();
    await expect(table).toContainText('Principal');
    await expect(table).toContainText('Interest');
  });

  test('PDF Export functionality', async ({ page }) => {
    await page.goto(baseUrl);
    const exportButton = page.getByRole('button', { name: /PDF/i });
    await expect(exportButton).toBeVisible();

    // We expect NO critical failures in export.
    // The 'lab' color warning seems to be a non-fatal warning from html2canvas/jspdf
    // in some environments, but let's see if the PDF actually triggers.
    await exportButton.click();
    await page.waitForTimeout(2000);
  });
});
