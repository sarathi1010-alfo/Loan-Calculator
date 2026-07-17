import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:3000';

test.describe('Technical Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Wait for the server to be ready
    await page.goto(baseUrl);
  });

  test('Tier 1 Article returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/how-to-calculate-emi`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('How to Calculate EMI');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
    expect(articleSchema.headline).toBe('How to Calculate EMI: Formula, Examples & Step-by-Step Guide');
  });


  test('New Tier 1 Article returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/prepayment-strategies-guide`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Prepayment Strategies');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('Tier 2 programmatic URLs return 200 OK and have FAQ Schema', async ({ page }) => {
    const slugs = [
      '/loan-types/home-loan-emi-calculator',
      '/loan-types/personal-loan-emi-calculator',
      '/loan-types/car-loan-emi-calculator',
      '/loan-types/education-loan-emi-calculator',
      '/scenarios/emi-calculator-5-lakh',
      '/scenarios/emi-calculator-10-lakh',
      '/scenarios/emi-calculator-20-lakh',
      '/tenure-comparison/emi-1-year-vs-5-years',
      '/loan-types/business-loan-emi-calculator',
      '/loan-types/gold-loan-emi-calculator',
      '/loan-types/loan-against-property-emi-calculator',
      '/scenarios/emi-calculator-50-lakh',
      '/scenarios/emi-calculator-30-lakh',
      '/scenarios/emi-calculator-1-crore',
      '/tenure-comparison/emi-10-years-vs-20-years',
      '/tenure-comparison/emi-15-years-vs-30-years'
    ];

    for (const slug of slugs) {
      const response = await page.goto(`${baseUrl}${slug}`);
      expect(response?.status()).toBe(200);

      // Validate FAQ Schema
      const faqSchema = await page.evaluate(() => {
        const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
          .find(s => s.textContent?.includes('"@type":"FAQPage"'));
        return script ? JSON.parse(script.textContent || '{}') : null;
      });
      expect(faqSchema).not.toBeNull();
      expect(faqSchema['@type']).toBe('FAQPage');
      expect(faqSchema.mainEntity.length).toBeGreaterThan(0);
    }
  });

  test('EMI calculation accuracy on main page', async ({ page }) => {
    await page.goto(baseUrl);

    // Result for defaults (₹5L, 8.5%, 20y) is ₹4,339
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
    await exportButton.click();
    await page.waitForTimeout(2000);
  });
});
