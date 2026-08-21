import re

file_path = 'scripts/ping-search-engines.ts'

with open(file_path, 'r') as f:
    content = f.read()

new_urls = """
    // New Tier 1 (2026-08-21)
    `${SITE_URL}/blog/how-to-plan-prepayments-2026`,

    // New Tier 2 (2026-08-21)
    `${SITE_URL}/loan-types/home-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/personal-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/car-loan-prepayment-calculator`,
    `${SITE_URL}/loan-types/education-loan-prepayment-calculator`,
    `${SITE_URL}/scenarios/emi-calculator-3-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-18-lakh`,
    `${SITE_URL}/scenarios/emi-calculator-50-lakh-home-loan`,
    `${SITE_URL}/tenure-comparison/emi-5-years-vs-10-years`,

"""

pattern = r'(const newUrls = \[\n)'
new_content = re.sub(pattern, r'\1' + new_urls, content, count=1)

with open(file_path, 'w') as f:
    f.write(new_content)

print("Update complete.")
