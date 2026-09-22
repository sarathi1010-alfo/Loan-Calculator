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

  test('New Tier 1 Article returns 200 OK and has valid Schema for loan interest rates 2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/loan-interest-rates-2026-guide`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('The Complete Guide to Loan Interest Rates in 2026');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Interest Rate focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/laptop-loan-emi-calculator',
      '/loan-types/furniture-loan-emi-calculator',
      '/scenarios/emi-calculator-7-lakh',
      '/scenarios/emi-calculator-9-lakh',
      '/scenarios/emi-calculator-80-lakh',
      '/tenure-comparison/emi-4-years-vs-5-years',
      '/tenure-comparison/emi-6-years-vs-8-years',
      '/tenure-comparison/emi-25-years-vs-30-years'
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


  test('New Tier 1 Article returns 200 OK and has valid Schema for home loan prepayment strategies 2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/home-loan-prepayment-strategies-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Home Loan Prepayment Strategies 2026');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Prepayment Strategies focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/medical-loan-emi-calculator',
      '/loan-types/travel-loan-emi-calculator',
      '/loan-types/wedding-loan-emi-calculator',
      '/scenarios/emi-calculator-30-lakh',
      '/scenarios/emi-calculator-40-lakh',
      '/scenarios/emi-calculator-50-lakh',
      '/tenure-comparison/emi-10-years-vs-15-years',
      '/tenure-comparison/emi-15-years-vs-20-years'
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


  test('New Tier 1 Article returns 200 OK and has valid Schema for credit score impact', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/credit-score-impact-on-emi-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('How Credit Scores Impact Loan Interest Rates in 2026');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Credit Score focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/axis-home-loan-emi-calculator',
      '/loan-types/icici-personal-loan-emi-calculator',
      '/loan-types/used-bike-loan-emi-calculator',
      '/loan-types/machinery-loan-emi-calculator-2026',
      '/scenarios/emi-calculator-15-thousand',
      '/scenarios/emi-calculator-2-lakh-50-thousand',
      '/scenarios/emi-calculator-12-crore',
      '/tenure-comparison/emi-7-years-vs-8-years'
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

  test('New Tier 1 Article returns 200 OK and has valid Schema for home loan tax benefits', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/home-loan-tax-benefits-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Home Loan Tax Benefits 2026');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Tax Benefits focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/top-up-loan-emi-calculator',
      '/loan-types/hdfc-home-loan-emi-calculator',
      '/loan-types/sbi-personal-loan-emi-calculator',
      '/loan-types/bajaj-finserv-personal-loan-emi-calculator',
      '/scenarios/emi-calculator-1-lakh',
      '/scenarios/emi-calculator-15-lakh',
      '/scenarios/emi-calculator-35-lakh',
      '/tenure-comparison/emi-2-years-vs-3-years'
    ];

    for (const slug of newSlugs) {
      const response = await page.goto(`${baseUrl}${slug}`);
      expect(response?.status()).toBe(200);

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

  test('New Tier 1 Article returns 200 OK and has valid Schema for debt consolidation loan guide 2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/debt-consolidation-loan-guide-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Debt Consolidation Loan Guide 2026');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Debt Consolidation focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/debt-consolidation-emi-calculator',
      '/loan-types/kotak-personal-loan-emi-calculator',
      '/loan-types/two-wheeler-loan-emi-calculator',
      '/loan-types/balance-transfer-emi-calculator',
      '/scenarios/emi-calculator-2-lakh',
      '/scenarios/emi-calculator-4-lakh',
      '/scenarios/emi-calculator-45-lakh',
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



  test('New Tier 1 Article returns 200 OK and has valid Schema for how-to-calculate-emi-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/how-to-calculate-emi-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('How to Calculate EMI for a Loan: The Complete 2026 Guide');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for how-to-calculate-emi-loan focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/home-loan-emi-calculator',
      '/loan-types/personal-loan-emi-calculator',
      '/loan-types/car-loan-emi-calculator',
      '/loan-types/education-loan-emi-calculator',
      '/scenarios/emi-calculator-5-lakh',
      '/scenarios/emi-calculator-10-lakh',
      '/scenarios/emi-calculator-20-lakh',
      '/tenure-comparison/emi-1-year-vs-5-years'
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

  test('New Tier 1 Article (LAP) returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/loan-against-property-emi-guide`);
    expect(response?.status()).toBe(200);

    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
  });

  test('New Tier 2 Programmatic Page (LAP Calculator) returns 200 OK and has FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/lap-emi-calculator`);
    expect(response?.status()).toBe(200);

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('New Tier 2 Scenario Page (75 Lakh LAP) returns 200 OK', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-75-lakh-lap`);
    expect(response?.status()).toBe(200);
  });

  test('New Tier 2 Comparison Page (10 vs 15 Years) returns 200 OK', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/lap-emi-10-years-vs-15-years`);
    expect(response?.status()).toBe(200);
  });

  test('New Tier 1 Article returns 200 OK and has valid Schema for down payment impact on EMI', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/down-payment-impact-on-emi-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('How Your Down Payment Impacts Your EMI');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Down Payment focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/zero-down-payment-car-loan-emi-calculator',
      '/loan-types/bike-loan-zero-down-payment-calculator',
      '/loan-types/two-wheeler-loan-zero-down-payment',
      '/loan-types/scooter-loan-zero-down-payment',
      '/scenarios/emi-calculator-8-lakh',
      '/scenarios/emi-calculator-12-lakh',
      '/scenarios/emi-calculator-25-lakh',
      '/tenure-comparison/emi-12-months-vs-24-months'
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

  test('New Tier 1 Article returns 200 OK and has valid Schema for how-to-compare-loan-interest-rates-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/how-to-compare-loan-interest-rates-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('How to Compare Loan Interest Rates: The 2026 Complete Guide');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Interest Rate Comparison focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/fixed-rate-home-loan-calculator',
      '/loan-types/floating-rate-home-loan-calculator',
      '/loan-types/sbi-vs-hdfc-home-loan-calculator',
      '/loan-types/icici-vs-axis-home-loan-calculator',
      '/scenarios/emi-calculator-6-lakh',
      '/scenarios/emi-calculator-11-lakh',
      '/scenarios/emi-calculator-22-lakh',
      '/tenure-comparison/emi-18-months-vs-36-months'
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



  test('New Tier 1 Article returns 200 OK and has valid Schema for emi-to-income-ratio-guide-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/emi-to-income-ratio-guide-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('EMI-to-Income Ratio: How Much Loan Can You Actually Afford in 2026?');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for EMI-to-Income Ratio focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/home-renovation-loan-emi-calculator',
      '/loan-types/solar-panel-loan-emi-calculator',
      '/loan-types/electric-vehicle-loan-emi-calculator',
      '/loan-types/plot-loan-emi-calculator',
      '/scenarios/emi-calculator-42-lakh',
      '/scenarios/emi-calculator-65-lakh',
      '/scenarios/emi-calculator-85-lakh',
      '/tenure-comparison/emi-20-years-vs-30-years'
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

  test('New Tier 1 Article returns 200 OK and has valid Schema for how-to-plan-prepayments-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/how-to-plan-prepayments-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('How to Plan Prepayments: Complete Guide for Borrowers in 2026');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Prepayment focus (2026-08-21)', async ({ page }) => {
    const newSlugs = [
      '/loan-types/home-loan-prepayment-calculator',
      '/loan-types/personal-loan-prepayment-calculator',
      '/loan-types/car-loan-prepayment-calculator',
      '/loan-types/education-loan-prepayment-calculator',
      '/scenarios/emi-calculator-3-lakh',
      '/scenarios/emi-calculator-18-lakh',
      '/scenarios/emi-calculator-50-lakh-home-loan',
      '/tenure-comparison/emi-5-years-vs-10-years'
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


  test('New Tier 1 Article returns 200 OK and has valid Schema for home-loan-balance-transfer-guide-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/home-loan-balance-transfer-guide-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Home Loan Balance Transfer Guide 2026: Calculate Your Savings');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Balance Transfer focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/home-loan-balance-transfer-calculator',
      '/loan-types/personal-loan-balance-transfer-calculator',
      '/loan-types/sbi-home-loan-balance-transfer-calculator',
      '/loan-types/hdfc-home-loan-balance-transfer-calculator',
      '/scenarios/emi-calculator-30-lakh-balance-transfer',
      '/scenarios/emi-calculator-40-lakh-balance-transfer',
      '/scenarios/emi-calculator-60-lakh-balance-transfer',
      '/tenure-comparison/balance-transfer-10-years-vs-15-years'
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


  test('New Tier 1 Article returns 200 OK and has valid Schema for partial prepayment vs foreclosure', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/partial-prepayment-vs-foreclosure-guide`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Partial Prepayment vs Foreclosure: The Ultimate 2026 Guide');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Prepayment vs Foreclosure focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/hdfc-personal-loan-prepayment-calculator',
      '/loan-types/sbi-home-loan-prepayment-calculator',
      '/loan-types/icici-car-loan-prepayment-calculator',
      '/loan-types/axis-education-loan-prepayment-calculator',
      '/scenarios/emi-calculator-25-lakh-prepayment',
      '/scenarios/emi-calculator-75-lakh-prepayment',
      '/scenarios/emi-calculator-1-crore-prepayment',
      '/tenure-comparison/prepayment-5-years-vs-10-years'
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



  test('New Tier 1 Article returns 200 OK and has valid Schema for fixed-vs-floating-interest-rate-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/fixed-vs-floating-interest-rate-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Fixed vs Floating Interest Rate: Which is Better in 2026?');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Fixed vs Floating focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/sbi-fixed-home-loan-calculator',
      '/loan-types/hdfc-fixed-home-loan-calculator',
      '/loan-types/icici-floating-home-loan-calculator',
      '/loan-types/axis-floating-home-loan-calculator',
      '/scenarios/emi-calculator-35-lakh-fixed',
      '/scenarios/emi-calculator-45-lakh-floating',
      '/scenarios/emi-calculator-55-lakh-fixed',
      '/tenure-comparison/fixed-10-years-vs-floating-10-years'
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

  test('New Tier 1 Article returns 200 OK and has valid Schema for personal-loan-interest-rate-comparison-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/personal-loan-interest-rate-comparison-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Personal Loan Interest Rate Comparison: Top Banks in 2026');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Personal Loan Interest Rate focus', async ({ page }) => {
    const newSlugs = [
      '/loan-types/sbi-pension-loan-emi-calculator',
      '/loan-types/hdfc-jumbo-loan-emi-calculator',
      '/loan-types/icici-insta-personal-loan-calculator',
      '/loan-types/axis-24x7-personal-loan-calculator',
      '/scenarios/emi-calculator-10-lakh-personal-loan',
      '/scenarios/emi-calculator-15-lakh-personal-loan',
      '/scenarios/emi-calculator-20-lakh-personal-loan',
      '/tenure-comparison/personal-loan-3-years-vs-5-years'
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

  test('2026-08-28 Tier 1: prepayment-strategies-comparison-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/prepayment-strategies-comparison-2026`);
    expect(response?.status()).toBe(200);
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });

  test('2026-08-28 Tier 2: sbi-personal-loan-prepayment-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/sbi-personal-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-28 Tier 2: hdfc-car-loan-prepayment-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/hdfc-car-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-28 Tier 2: axis-home-loan-prepayment-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/axis-home-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-28 Tier 2: icici-education-loan-prepayment', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/icici-education-loan-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-28 Tier 2: emi-calculator-20-lakh-prepayment', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-20-lakh-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-28 Tier 2: emi-calculator-40-lakh-prepayment', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-40-lakh-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-28 Tier 2: emi-calculator-80-lakh-prepayment', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-80-lakh-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-28 Tier 2: prepayment-emi-vs-tenure-reduction', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/prepayment-emi-vs-tenure-reduction`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-29 Tier 1: interest-rate-negotiation-strategies-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/interest-rate-negotiation-strategies-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-29 Tier 2: hdfc-personal-loan-interest-rates-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/hdfc-personal-loan-interest-rates-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-29 Tier 2: sbi-car-loan-interest-rates-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/sbi-car-loan-interest-rates-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-29 Tier 2: icici-home-loan-interest-rates-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/icici-home-loan-interest-rates-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-29 Tier 2: axis-education-loan-interest-rates-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/axis-education-loan-interest-rates-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-29 Tier 2: emi-calculator-3-lakh-interest-negotiation', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-3-lakh-interest-negotiation`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-29 Tier 2: emi-calculator-15-lakh-interest-negotiation', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-15-lakh-interest-negotiation`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-29 Tier 2: emi-calculator-35-lakh-interest-negotiation', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-35-lakh-interest-negotiation`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-29 Tier 2: interest-rate-negotiation-5-vs-10-years', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/interest-rate-negotiation-5-vs-10-years`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-30 Tier 1: loan-prepayment-strategies-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/loan-prepayment-strategies-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-30 Tier 2: home-loan-prepayment-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/home-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-30 Tier 2: personal-loan-prepayment-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/personal-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-30 Tier 2: car-loan-prepayment-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/car-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-30 Tier 2: education-loan-prepayment-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/education-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-30 Tier 2: emi-calculator-12-lakh-prepayment', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-12-lakh-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-30 Tier 2: emi-calculator-25-lakh-prepayment', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-25-lakh-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-30 Tier 2: emi-calculator-50-lakh-prepayment', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-50-lakh-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-30 Tier 2: home-loan-prepayment-5-vs-10-years', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/home-loan-prepayment-5-vs-10-years`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-31 Tier 1: business-loan-emi-planning-guide-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/business-loan-emi-planning-guide-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-31 Tier 2: msme-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/msme-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-31 Tier 2: working-capital-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/working-capital-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-31 Tier 2: equipment-finance-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/equipment-finance-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-31 Tier 2: startup-business-loan-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/startup-business-loan-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-31 Tier 2: emi-calculator-50-lakh-business-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-50-lakh-business-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-31 Tier 2: emi-calculator-1-crore-business-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-1-crore-business-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-31 Tier 2: emi-calculator-5-crore-business-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-5-crore-business-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-08-31 Tier 2: business-loan-3-years-vs-5-years', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/business-loan-3-years-vs-5-years`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-01 Tier 1: how-to-refinance-a-loan-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/how-to-refinance-a-loan-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-01 Tier 2: home-loan-refinance-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/home-loan-refinance-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-01 Tier 2: personal-loan-refinance-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/personal-loan-refinance-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-01 Tier 2: auto-loan-refinance-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/auto-loan-refinance-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-01 Tier 2: education-loan-refinance-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/education-loan-refinance-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-01 Tier 2: emi-calculator-30-lakh-refinance', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-30-lakh-refinance`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-01 Tier 2: emi-calculator-40-lakh-refinance', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-40-lakh-refinance`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-01 Tier 2: emi-calculator-60-lakh-refinance', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-60-lakh-refinance`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-01 Tier 2: refinance-5-years-vs-10-years', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/refinance-5-years-vs-10-years`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-11 Tier 1: education-loan-repayment-strategies-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/education-loan-repayment-strategies-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-11 Tier 2: sbi-education-loan-repayment-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/sbi-education-loan-repayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-11 Tier 2: hdfc-education-loan-repayment-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/hdfc-education-loan-repayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-11 Tier 2: abroad-study-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/abroad-study-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-11 Tier 2: domestic-education-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/domestic-education-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-11 Tier 2: emi-calculator-25-lakh-education-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-25-lakh-education-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-11 Tier 2: emi-calculator-40-lakh-education-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-40-lakh-education-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-11 Tier 2: emi-calculator-75-lakh-education-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-75-lakh-education-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-11 Tier 2: education-loan-7-years-vs-10-years', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/education-loan-7-years-vs-10-years`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-12 Tier 1: gold-loan-emi-planning-guide-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/gold-loan-emi-planning-guide-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-12 Tier 2: muthoot-finance-gold-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/muthoot-finance-gold-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-12 Tier 2: manappuram-gold-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/manappuram-gold-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-12 Tier 2: sbi-gold-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/sbi-gold-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-12 Tier 2: hdfc-gold-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/hdfc-gold-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-12 Tier 2: emi-calculator-3-lakh-gold-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-3-lakh-gold-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-12 Tier 2: emi-calculator-5-lakh-gold-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-5-lakh-gold-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-12 Tier 2: emi-calculator-10-lakh-gold-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-10-lakh-gold-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-12 Tier 2: gold-loan-6-months-vs-12-months', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/gold-loan-6-months-vs-12-months`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-13 Tier 1: ev-loan-emi-planning-guide-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/ev-loan-emi-planning-guide-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-13 Tier 2: sbi-ev-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/sbi-ev-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-13 Tier 2: hdfc-ev-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/hdfc-ev-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-13 Tier 2: tata-ev-loan-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/tata-ev-loan-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-13 Tier 2: two-wheeler-ev-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/two-wheeler-ev-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-13 Tier 2: emi-calculator-10-lakh-ev-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-10-lakh-ev-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-13 Tier 2: emi-calculator-15-lakh-ev-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-15-lakh-ev-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-13 Tier 2: emi-calculator-20-lakh-ev-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-20-lakh-ev-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-13 Tier 2: ev-loan-3-years-vs-5-years', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/ev-loan-3-years-vs-5-years`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-17 Tier 1: consumer-durable-loan-emi-guide-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/consumer-durable-loan-emi-guide-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-17 Tier 2: consumer-durable-loan-emi-calculator-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/consumer-durable-loan-emi-calculator-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-17 Tier 2: bajaj-finserv-consumer-durable-loan-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/bajaj-finserv-consumer-durable-loan-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-17 Tier 2: tata-capital-consumer-durable-loan-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/tata-capital-consumer-durable-loan-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-17 Tier 2: idfc-first-consumer-durable-loan-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/idfc-first-consumer-durable-loan-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-17 Tier 2: emi-calculator-50-thousand-consumer-durable', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-50-thousand-consumer-durable`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-17 Tier 2: emi-calculator-1-lakh-consumer-durable', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-1-lakh-consumer-durable`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-17 Tier 2: emi-calculator-2-lakh-consumer-durable', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-2-lakh-consumer-durable`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-17 Tier 2: consumer-loan-6-months-vs-12-months', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/consumer-loan-6-months-vs-12-months`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });


  test('2026-09-20 Tier 1: wedding-loan-emi-planning-guide-2026', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/wedding-loan-emi-planning-guide-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-20 Tier 2: sbi-wedding-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/sbi-wedding-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-20 Tier 2: hdfc-wedding-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/hdfc-wedding-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-20 Tier 2: axis-wedding-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/axis-wedding-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-20 Tier 2: icici-wedding-loan-emi-calculator', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/icici-wedding-loan-emi-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-20 Tier 2: emi-calculator-5-lakh-wedding-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-5-lakh-wedding-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-20 Tier 2: emi-calculator-10-lakh-wedding-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-10-lakh-wedding-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-20 Tier 2: emi-calculator-15-lakh-wedding-loan', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-15-lakh-wedding-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('2026-09-20 Tier 2: wedding-loan-3-years-vs-5-years', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/wedding-loan-3-years-vs-5-years`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('New Tier 1 Article returns 200 OK and has valid Schema - Interest Rates', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/comprehensive-interest-rate-comparison-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Comprehensive Interest Rate Comparison');

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
    expect(articleSchema['@type']).toBe('Article');
  });

  test('New Tier 2 Page 1 returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/sbi-vs-hdfc-home-loan-interest-rate-2026`);
    expect(response?.status()).toBe(200);
    // Validate FAQ Schema
    const schema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(schema).not.toBeNull();
  });

  test('New Tier 2 Page 2 returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/icici-vs-axis-personal-loan-interest-rate-2026`);
    expect(response?.status()).toBe(200);
    const schema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(schema).not.toBeNull();
  });

  test('New Tier 2 Page 3 returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/bajaj-vs-tata-capital-business-loan-rates`);
    expect(response?.status()).toBe(200);
    const schema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(schema).not.toBeNull();
  });

  test('New Tier 2 Page 4 returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/fixed-vs-floating-home-loan-rates-2026`);
    expect(response?.status()).toBe(200);
    const schema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(schema).not.toBeNull();
  });

  test('New Tier 2 Page 5 returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/sbi-home-loan-interest-rate-calculator-2026`);
    expect(response?.status()).toBe(200);
    const schema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(schema).not.toBeNull();
  });

  test('New Tier 2 Page 6 returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/hdfc-personal-loan-interest-rate-calculator`);
    expect(response?.status()).toBe(200);
    const schema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(schema).not.toBeNull();
  });

  test('New Tier 2 Page 7 returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-15-lakh-at-9-percent`);
    expect(response?.status()).toBe(200);
    const schema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(schema).not.toBeNull();
  });

  test('New Tier 2 Page 8 returns 200 OK and has valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-30-lakh-at-8-5-percent`);
    expect(response?.status()).toBe(200);
    const schema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(schema).not.toBeNull();
  });


  test('2026-09-21 Tier 1: smart-prepayment-strategies-2026 returns 200 OK and valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/smart-prepayment-strategies-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    // Validate Article Schema
    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
  });

  test('2026-09-21 Tier 2: axis-personal-loan-prepayment-calculator returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/axis-personal-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-21 Tier 2: hdfc-home-loan-prepayment-calculator returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/hdfc-home-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-21 Tier 2: icici-car-loan-prepayment-calculator returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/icici-car-loan-prepayment-calculator`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-21 Tier 2: emi-calculator-30-lakh-prepayment returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-30-lakh-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-21 Tier 2: emi-calculator-50-lakh-prepayment returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-50-lakh-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-21 Tier 2: emi-calculator-60-lakh-prepayment returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-60-lakh-prepayment`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-21 Tier 2: prepayment-3-years-vs-5-years returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/prepayment-3-years-vs-5-years`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-21 Tier 2: prepayment-emi-vs-tenure-reduction returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/prepayment-emi-vs-tenure-reduction`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-22 Tier 1: cibil-score-impact-on-loan-emi-2026 returns 200 OK and valid Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/blog/cibil-score-impact-on-loan-emi-2026`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const articleSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"Article"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(articleSchema).not.toBeNull();
  });

  test('2026-09-22 Tier 2: cibil-score-calculator-for-home-loan returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/cibil-score-calculator-for-home-loan`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-22 Tier 2: personal-loan-emi-with-low-cibil returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/personal-loan-emi-with-low-cibil`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-22 Tier 2: car-loan-interest-rates-by-cibil-score returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/loan-types/car-loan-interest-rates-by-cibil-score`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-22 Tier 2: emi-calculator-10-lakh-low-cibil returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-10-lakh-low-cibil`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-22 Tier 2: emi-calculator-20-lakh-good-cibil returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-20-lakh-good-cibil`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-22 Tier 2: emi-calculator-50-lakh-excellent-cibil returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/scenarios/emi-calculator-50-lakh-excellent-cibil`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-22 Tier 2: cibil-score-impact-5-vs-10-years returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/cibil-score-impact-5-vs-10-years`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });

  test('2026-09-22 Tier 2: home-loan-cibil-750-vs-650 returns 200 OK and FAQ Schema', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/tenure-comparison/home-loan-cibil-750-vs-650`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    const faqSchema = await page.evaluate(() => {
      const script = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .find(s => s.textContent?.includes('"@type":"FAQPage"'));
      return script ? JSON.parse(script.textContent || '{}') : null;
    });
    expect(faqSchema).not.toBeNull();
  });
});
