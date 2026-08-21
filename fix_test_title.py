import re

file_path = 'tests/technical-verification.spec.ts'

with open(file_path, 'r') as f:
    content = f.read()

# Make the title of the test at line 708 unique.
# "New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Prepayment focus (2026-08-21)"
lines = content.split('\n')
for i, line in enumerate(lines):
    if i > 700 and 'New Tier 2 Programmatic URLs return 200 OK and have FAQ Schema for Prepayment focus' in line:
        lines[i] = line.replace('focus', 'focus (2026-08-21)')

with open(file_path, 'w') as f:
    f.write('\n'.join(lines))

print("Fixed.")
