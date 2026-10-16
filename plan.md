1. **Explore & Select Thematic Angle**:
   - We need a fresh thematic angle that does not duplicate existing content.
   - Based on the memory "Prepayment Strategies" or "Interest Rate Comparison" are given as generalized suggestions but we see they exist.
   - We will select **Machinery Loan EMI Planning Guide 2026** as the thematic angle. We checked `src/lib/blog-data.ts` and there is no Tier 1 guide for "machinery loan".

2. **Tier 1 Content Creation**:
   - Write a 1,200+ word authority pillar article on "how to calculate machinery loan emi" and add it to `src/lib/blog-data.ts`.
   - Ensure it includes the AI Snapshot under the H2.
   - Include 1 H1 per page.
   - Link out to the Homepage (`/`) and Specific Calculators section (`/#loan-types`).

3. **Tier 2 Programmatic Pages**:
   - Create 8 unique Tier 2 pages in `src/lib/tier2-data.ts` related to Machinery loans (e.g., `sbi-machinery-loan-calculator`, `emi-calculator-20-lakh-machinery-loan`, etc.). Ensure 200 OK headless verification later.
   - Add content sections (intro, why calculate, key factors, faqs).

4. **Tier 3 Social Posts**:
   - Generate 10 platform-native posts and save them to `tier3-social-posts-machinery.txt`.

5. **Internal Linking (Inbound Retro)**:
   - Identify an existing old content piece in `src/lib/blog-data.ts` (e.g., "smart-loan-borrowing-guide-2026") and inject a link back to the new Tier 1 article. Update its `date` to today's date.

6. **Sitemap Regeneration & Ping**:
   - Update `scripts/ping-search-engines.ts` with the 9 new URLs.
   - Run the script to generate sitemap and ping IndexNow & Google.

7. **Playwright Test Updates**:
   - Append tests in `tests/technical-verification.spec.ts` for the new 9 URLs to assert 200 OK and check for Schema (Article/FAQPage).

8. **Pre-commit Steps**:
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
