# Google Search Console (GSC) Fix Plan
**Property:** alfo.online / emicalculatorpro.alfo.online

## Identified Coverage Issues & Action Plan

### 1. Discovered - Currently Not Indexed (Status: In Progress)
* **Issue Description:** Google has found these URLs but hasn't crawled them yet, likely due to crawl budget constraints or rapid programmatic generation.
* **Fix Plan:**
  * Implement the internal linking graph strictly as detailed in `seo-pages.json`.
  * **Update (2026-07-04):** We have added 2 new internal links from older established blog posts (`what-is-emi-complete-guide` and `common-emi-calculation-mistakes`) pointing to the new Tier 1 authority article (`/blog/how-to-calculate-emi`) to boost crawl priority.
  * **Update (2026-07-04):** Manually triggered IndexNow API for the affected URLs and resubmitted the dynamic XML sitemap in GSC to prioritize today's batch of 9 new/updated pages.

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
