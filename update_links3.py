import re

file_path = 'src/lib/blog-data.ts'

with open(file_path, 'r') as f:
    content = f.read()

# For loan-against-property-emi-guide
old_text_lap = "<p>A Loan Against Property (LAP) is a secured loan where you pledge your commercial or residential property as collateral. It's one of the most effective ways to raise large amounts of capital at relatively lower interest rates compared to unsecured personal loans or business loans. Whether you need funds for business expansion, medical emergencies, or higher education, a LAP offers a flexible financial solution.</p>"
new_text_lap = "<p>A Loan Against Property (LAP) is a secured loan where you pledge your commercial or residential property as collateral. It's one of the most effective ways to raise large amounts of capital at relatively lower interest rates compared to unsecured personal loans or business loans. Whether you need funds for business expansion, medical emergencies, or higher education, a LAP offers a flexible financial solution. Since you are dealing with large amounts, learn <a href=\"/blog/how-to-plan-prepayments-2026\">how to plan prepayments</a> efficiently to minimize your total interest burden.</p>"
content = content.replace(old_text_lap, new_text_lap)

# For debt-consolidation-loan-guide-2026
pattern2 = r'(slug: "debt-consolidation-loan-guide-2026",.*?date: ")(\d{4}-\d{2}-\d{2})(")'
content = re.sub(pattern2, r'\g<1>2026-08-21\3', content, flags=re.DOTALL)

old_text_dc = "<p>The new loan will likely have a processing fee (usually 1-3% of the loan amount). Factor this into your cost-benefit analysis.</p>"
new_text_dc = "<p>The new loan will likely have a processing fee (usually 1-3% of the loan amount). Factor this into your cost-benefit analysis. Also, once you consolidate, consider reading <a href=\"/blog/how-to-plan-prepayments-2026\">how to plan prepayments</a> on your new loan to clear your debt even faster.</p>"
content = content.replace(old_text_dc, new_text_dc)

with open(file_path, 'w') as f:
    f.write(content)

print("Update complete.")
