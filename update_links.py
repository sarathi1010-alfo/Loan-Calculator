import re

file_path = 'src/lib/blog-data.ts'

with open(file_path, 'r') as f:
    content = f.read()

# Update 1: loan-against-property-emi-guide
# Find the slug and its corresponding date and content.
def update_post(content, slug, old_text, new_text):
    # Find the post block by slug to ensure we replace within the right post
    pattern = rf'(slug: "{slug}".*?date: ")(\d{{4}}-\d{{2}}-\d{{2}})(".*?content: `.*?){re.escape(old_text)}'

    # We replace the date with '2026-08-21' and the old_text with new_text
    match = re.search(pattern, content, re.DOTALL)
    if match:
        new_content = content[:match.start()] + match.group(1) + "2026-08-21" + match.group(3) + new_text + content[match.end():]
        return new_content
    return content


# For loan-against-property-emi-guide
old_text_lap = "<p>By putting up a valuable asset as collateral, you significantly reduce the lender's risk.</p>"
new_text_lap = "<p>By putting up a valuable asset as collateral, you significantly reduce the lender's risk. If you are looking to minimize your interest burden further, you should learn <a href=\"/blog/how-to-plan-prepayments-2026\">how to plan prepayments</a> on your LAP effectively.</p>"

content = update_post(content, "loan-against-property-emi-guide", old_text_lap, new_text_lap)


# For home-loan-prepayment-strategies-2026
old_text_hlps = "<p>Because interest is calculated on the reducing balance, making partial prepayments early in your loan tenure has a compounding effect on your savings.</p>"
new_text_hlps = "<p>Because interest is calculated on the reducing balance, making partial prepayments early in your loan tenure has a compounding effect on your savings. You can also refer to our 2026 guide on <a href=\"/blog/how-to-plan-prepayments-2026\">how to plan prepayments</a> for a broader perspective on strategy.</p>"

content = update_post(content, "home-loan-prepayment-strategies-2026", old_text_hlps, new_text_hlps)


with open(file_path, 'w') as f:
    f.write(content)

print("Update complete.")
