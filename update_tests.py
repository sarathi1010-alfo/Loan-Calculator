import re

file_path = 'tests/technical-verification.spec.ts'

with open(file_path, 'r') as f:
    content = f.read()

new_tests = """
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

  test('New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Prepayment focus', async ({ page }) => {
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
"""

# Replace the very last `});`
content = content.rstrip()
if content.endswith('});'):
    content = content[:-3] + new_tests + '\n});\n'

with open(file_path, 'w') as f:
    f.write(content)

print("Update complete.")
