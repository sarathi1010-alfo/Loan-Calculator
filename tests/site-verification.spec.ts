import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

const NEW_URLS = [
  '/blog/how-to-calculate-emi',
  '/loan-types/home-loan-emi-calculator',
  '/loan-types/personal-loan-emi-calculator',
  '/loan-types/car-loan-emi-calculator',
  '/loan-types/education-loan-emi-calculator',
  '/scenarios/emi-calculator-5-lakh',
  '/scenarios/emi-calculator-10-lakh',
  '/scenarios/emi-calculator-20-lakh',
  '/tenure-comparison/emi-1-year-vs-5-years'
];

test.describe('Technical Integrity - 200 OK Check', () => {
  for (const url of NEW_URLS) {
    test(`Verify ${url} returns 200 OK`, async ({ page }) => {
      const response = await page.goto(`${BASE_URL}${url}`);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe('Core Calculator Functionality', () => {
  test('Verify EMI calculation on homepage', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check for the default EMI value in the Summary cards
    const defaultEmiValue = page.getByText('₹4,339').first();
    await expect(defaultEmiValue).toBeVisible();

    // Verify Pie Chart is visible
    const pieChart = page.locator('.recharts-responsive-container');
    await expect(pieChart).toBeVisible();

    // Select the Amortization tab
    await page.getByRole('tab', { name: /Amortization/i }).click();

    // Verify Amortization Schedule table exists
    const scheduleTable = page.locator('table');
    await expect(scheduleTable).toBeVisible();

    // Verify PDF Export button exists
    const exportButton = page.getByRole('button', { name: /PDF/i });
    await expect(exportButton).toBeVisible();
  });
});
