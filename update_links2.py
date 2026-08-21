import re

file_path = 'src/lib/blog-data.ts'

with open(file_path, 'r') as f:
    content = f.read()

# Fallback robust replacement if the previous specific pattern matching failed
# We just find the slugs and modify the text

# For loan-against-property-emi-guide
pattern1 = r'(slug: "loan-against-property-emi-guide",.*?date: ")(\d{4}-\d{2}-\d{2})(")'
content = re.sub(pattern1, r'\g<1>2026-08-21\3', content, flags=re.DOTALL)
old_text_lap = "<p>By putting up a valuable asset as collateral, you significantly reduce the lender's risk.</p>"
new_text_lap = "<p>By putting up a valuable asset as collateral, you significantly reduce the lender's risk. If you are looking to minimize your interest burden further, you should learn <a href=\"/blog/how-to-plan-prepayments-2026\">how to plan prepayments</a> on your LAP effectively.</p>"
content = content.replace(old_text_lap, new_text_lap)

# For home-loan-prepayment-strategies-2026
pattern2 = r'(slug: "home-loan-prepayment-strategies-2026",.*?date: ")(\d{4}-\d{2}-\d{2})(")'
content = re.sub(pattern2, r'\g<1>2026-08-21\3', content, flags=re.DOTALL)
old_text_hlps = "<p>Because interest is calculated on the reducing balance, making partial prepayments early in your loan tenure has a compounding effect on your savings.</p>"
new_text_hlps = "<p>Because interest is calculated on the reducing balance, making partial prepayments early in your loan tenure has a compounding effect on your savings. You can also refer to our 2026 guide on <a href=\"/blog/how-to-plan-prepayments-2026\">how to plan prepayments</a> for a broader perspective on strategy.</p>"
content = content.replace(old_text_hlps, new_text_hlps)

with open(file_path, 'w') as f:
    f.write(content)

print("Update complete.")
