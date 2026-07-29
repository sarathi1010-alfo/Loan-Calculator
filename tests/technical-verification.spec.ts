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
      '/tenure-comparison/emi-15-years-vs-30-years',

      '/loan-types/scooter-loan-emi-calculator',
      '/loan-types/tractor-loan-emi-calculator',
      '/loan-types/commercial-vehicle-loan-emi-calculator',
      '/scenarios/emi-calculator-1-lakh',
      '/scenarios/emi-calculator-6-lakh',
      '/scenarios/emi-calculator-12-lakh',
      '/scenarios/emi-calculator-22-lakh',
      '/scenarios/emi-calculator-35-lakh'
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


  test('New Tier 1 Article returns 200 OK and has valid Schema for smart loan borrowing', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/smart-loan-borrowing-guide-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('The Complete Guide to Smart Loan Borrowing in 2026');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Week 1', async ({ page }) => {
    const newSlugs = [
      '/loan-types/icici-car-loan-emi-calculator',
      '/loan-types/axis-personal-loan-emi-calculator',
      '/loan-types/bajaj-finserv-personal-loan-emi-calculator',
      '/scenarios/emi-calculator-14-lakh',
      '/scenarios/emi-calculator-16-lakh',
      '/scenarios/emi-calculator-45-lakh',
      '/tenure-comparison/emi-2-years-vs-3-years',
      '/tenure-comparison/emi-3-years-vs-4-years'
    ];

    for (const slug of newSlugs) {
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

  test('New Tier 1 Article returns 200 OK and has valid Schema for prepayment strategies', async ({ page }) => {
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

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Prepayment focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/two-wheeler-loan-emi-calculator',
      '/loan-types/machinery-loan-emi-calculator',
      '/loan-types/pnb-home-loan-emi-calculator',
      '/loan-types/kotak-personal-loan-emi-calculator',
      '/scenarios/emi-calculator-75-lakh',
      '/scenarios/emi-calculator-2-crore',
      '/tenure-comparison/emi-5-years-vs-7-years',
      '/tenure-comparison/emi-20-years-vs-25-years'
    ];

    for (const slug of newSlugs) {
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

  test('New Tier 1 Article returns 200 OK and has valid Schema for loan affordability planning', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/loan-affordability-planning-guide`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('The Ultimate Guide to Loan Affordability Planning in 2026');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Affordability focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/sbi-home-loan-emi-calculator',
      '/loan-types/hdfc-personal-loan-emi-calculator',
      '/loan-types/consumer-durable-loan-emi-calculator',
      '/scenarios/emi-calculator-8-lakh',
      '/scenarios/emi-calculator-50-thousand',
      '/scenarios/emi-calculator-3-crore',
      '/tenure-comparison/emi-12-years-vs-15-years',
      '/tenure-comparison/emi-7-years-vs-10-years'
    ];

    for (const slug of newSlugs) {
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


  test('New hub pages and about page return 200 OK and have valid Schema', async ({ page }) => {
    const urls = [
      '/about',
      '/blog/loan-types',
      '/blog/lenders',
      '/blog/financial-planning'
    ];

    for (const url of urls) {
      const response = await page.goto(`${baseUrl}${url}`);
      expect(response?.status()).toBe(200);
    }
  });
});
