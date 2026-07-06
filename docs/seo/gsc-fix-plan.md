# Google Search Console (GSC) Fix Plan
**Property:** alfo.online / emicalculatorpro.alfo.online

## Identified Coverage Issues & Action Plan

### 1. Discovered - Currently Not Indexed
* **Issue Description:** Google has found these URLs but hasn't crawled them yet, likely due to crawl budget constraints or rapid programmatic generation.
* **Fix Plan:** (Updated 2026-07-07)
  * Implement the internal linking graph strictly as detailed in `seo-pages.json`.
  * Added 2 internal links from established blog posts (`/blog/what-is-emi-complete-guide` and `/blog/common-emi-calculation-mistakes`) pointing to the new Tier 1 authority article (`/blog/how-to-calculate-emi`) to boost crawl priority.
  * Updated 'lastModified' dates for these articles to 2026-07-07.
  * Manually triggered IndexNow API/Sitemap Ping via `scripts/submit-sitemap.ts`.
  * Verified 200 OK status for all new URLs via Playwright headless tests.

### 2. Crawled - Currently Not Indexed
* **Issue Description:** Google crawled the pages but decided not to index them. This usually indicates thin content, duplicate content, or a lack of internal PageRank.
* **Fix Plan:**
  * The programmatic pages now include comprehensive FAQ schemas and robust unique intro texts.
  * All programmatic pages dynamically render the `SeoCalculator` and enforce strict H1 uniqueness.
  * Will monitor this status over the next 2 weeks. If the issue persists, we will increase the length of the `intro` blocks in the `data/generated/seo-pages.json` ontology matrix.

### 3. Soft 404s / Excluded by 'noindex' Tag
* **Issue Description:** Pages are returning a 200 OK but acting like 404s, or have rogue noindex tags.
* **Fix Plan:**
  * Run a full Playwright headless test to ensure all newly generated Tier 2 routes return strict HTTP 200 statuses and render content fully on the server side (SSG).
  * Ensure the `metadataBase` and `robots` parameters in `layout.tsx` and specific `page.tsx` files are allowing indexation.
