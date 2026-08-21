import re

file_path = 'src/lib/blog-data.ts'

with open(file_path, 'r') as f:
    content = f.read()

# Try to find the second place to update. I already updated `loan-against-property-emi-guide` properly.
# Let's check `what-is-amortization-schedule`.
pattern = r'(slug: "what-is-amortization-schedule",.*?date: ")(\d{4}-\d{2}-\d{2})(")'
content = re.sub(pattern, r'\g<1>2026-08-21\3', content, flags=re.DOTALL)

old_text = "<p>Because interest is calculated based on the outstanding principal balance (using the reducing balance method), reducing your principal as quickly as possible is the key to minimizing the total cost of the loan. This is why making extra payments (prepayments) directly toward the principal can be highly beneficial.</p>"
new_text = "<p>Because interest is calculated based on the outstanding principal balance (using the reducing balance method), reducing your principal as quickly as possible is the key to minimizing the total cost of the loan. This is why making extra payments (prepayments) directly toward the principal can be highly beneficial. For an in-depth strategy, check out our guide on <a href=\"/blog/how-to-plan-prepayments-2026\">how to plan prepayments</a>.</p>"

content = content.replace(old_text, new_text)

with open(file_path, 'w') as f:
    f.write(content)

print("Update complete.")
