import re

file_path = 'src/lib/tier2-data.ts'

with open(file_path, 'r') as f:
    content = f.read()

new_pages = """
  {
    slug: "home-loan-prepayment-calculator",
    type: "loan-types",
    title: "Home Loan Prepayment Calculator 2026 | Save on Interest",
    h1: "Home Loan Prepayment Calculator",
    description: "Calculate how much you can save in total interest and tenure by making partial prepayments on your home loan.",
    intro: "A home loan prepayment can shave off years from your repayment schedule. Use our calculator to see the exact impact.",
    amount: 5000000,
    interestRate: 8.5,
    tenure: 240,
    date: "2026-08-21",
    content: `
      <h2>Planning Your Home Loan Prepayment</h2>
      <p>By making strategic prepayments towards your principal balance, you bypass future interest calculations, resulting in massive savings over the 20-year span of typical home loans.</p>
    `,
    faqs: [
      { question: "Is there a penalty for home loan prepayments?", answer: "Usually, floating rate home loans for individuals do not carry a prepayment penalty, per RBI guidelines." },
      { question: "When is the best time to prepay a home loan?", answer: "The earlier in your loan tenure, the better. Prepayments made in the first 5 years yield exponentially more savings than those made in the last 5 years." }
    ]
  },
  {
    slug: "personal-loan-prepayment-calculator",
    type: "loan-types",
    title: "Personal Loan Prepayment Calculator 2026",
    h1: "Personal Loan Prepayment Calculator",
    description: "Calculate the exact savings from prepaying your personal loan. Find out if the savings outweigh the prepayment penalties.",
    intro: "Prepaying a high-interest personal loan can free up significant cash flow. See how much you can save before the penalty kicks in.",
    amount: 500000,
    interestRate: 11.5,
    tenure: 60,
    date: "2026-08-21",
    content: `
      <h2>Evaluating Personal Loan Prepayments</h2>
      <p>Personal loans often have higher interest rates than secured loans. Prepaying them is a great strategy, but you must account for potential foreclosure or partial payment charges.</p>
    `,
    faqs: [
      { question: "Do personal loans have prepayment fees?", answer: "Yes, many lenders charge a prepayment or foreclosure fee ranging from 2% to 5% of the outstanding principal." },
      { question: "Is it worth prepaying a personal loan?", answer: "It is generally worth it if the interest saved over the remaining tenure is significantly greater than the prepayment penalty fee." }
    ]
  },
  {
    slug: "car-loan-prepayment-calculator",
    type: "loan-types",
    title: "Car Loan Prepayment Calculator 2026 | Early Payoff",
    h1: "Car Loan Prepayment Calculator",
    description: "Estimate your interest savings by prepaying your car loan. Plan your early auto loan payoff strategy.",
    intro: "Looking to own your car outright sooner? Calculate your savings by making partial prepayments on your auto loan.",
    amount: 800000,
    interestRate: 9.5,
    tenure: 60,
    date: "2026-08-21",
    content: `
      <h2>Accelerating Auto Loan Repayment</h2>
      <p>Because cars depreciate quickly, getting out of a car loan early can prevent you from being underwater on your loan.</p>
    `,
    faqs: [
      { question: "Can I prepay my car loan?", answer: "Yes, though many lenders impose a lock-in period (e.g., 6 to 12 months) before you are allowed to make partial prepayments." },
      { question: "How does prepayment affect my car loan EMI?", answer: "You typically have the choice to either keep your EMI the same and reduce your tenure, or keep the tenure the same and reduce your monthly EMI." }
    ]
  },
  {
    slug: "education-loan-prepayment-calculator",
    type: "loan-types",
    title: "Education Loan Prepayment Calculator 2026",
    h1: "Education Loan Prepayment Calculator",
    description: "See how early repayment strategies on your student loan can reduce your total debt burden.",
    intro: "Clear your student debt faster. Use our education loan prepayment calculator to model your interest savings.",
    amount: 1500000,
    interestRate: 9.0,
    tenure: 120,
    date: "2026-08-21",
    content: `
      <h2>Managing Student Debt Strategically</h2>
      <p>Once you secure a job, applying surplus income towards your education loan principal can quickly mitigate the compounding interest effect.</p>
    `,
    faqs: [
      { question: "Does prepaying an education loan affect tax benefits?", answer: "Yes, Section 80E allows you to deduct interest paid on education loans. Prepaying reduces the interest paid, which might reduce your tax deduction in the short term, though you still save money overall." },
      { question: "When should I start prepaying my education loan?", answer: "As soon as you have a stable income and an adequate emergency fund established." }
    ]
  },
  {
    slug: "emi-calculator-3-lakh",
    type: "scenarios",
    title: "EMI Calculator for ₹3 Lakh Loan | Monthly Repayment",
    h1: "EMI Calculator for ₹3 Lakh Loan",
    description: "Calculate the exact EMI and view the amortization schedule for a ₹3 Lakh personal or vehicle loan.",
    intro: "Planning to borrow ₹3 Lakhs? Use our calculator to find a monthly EMI that fits your budget perfectly.",
    amount: 300000,
    interestRate: 11.0,
    tenure: 36,
    date: "2026-08-21",
    content: `
      <h2>Repaying a ₹3 Lakh Loan</h2>
      <p>A ₹3 Lakh loan is a common requirement for medical emergencies or home upgrades. Adjust the tenure to optimize your EMI and total interest outflow.</p>
    `,
    faqs: [
      { question: "What is the EMI for a 3 Lakh loan for 3 years?", answer: "At an 11% interest rate, the monthly EMI is approximately ₹9,822." },
      { question: "How much interest will I pay on a 3 Lakh loan over 3 years?", answer: "The total interest payable will be around ₹53,586." }
    ]
  },
  {
    slug: "emi-calculator-18-lakh",
    type: "scenarios",
    title: "EMI Calculator for ₹18 Lakh Loan | Full Breakdown",
    h1: "EMI Calculator for ₹18 Lakh Loan",
    description: "Calculate the EMI for an ₹18 Lakh loan. Plan your home renovation or premium car purchase accurately.",
    intro: "Looking for an ₹18 Lakh loan? Determine your monthly commitment and long-term interest cost before applying.",
    amount: 1800000,
    interestRate: 9.25,
    tenure: 84,
    date: "2026-08-21",
    content: `
      <h2>Managing an ₹18 Lakh Loan</h2>
      <p>For mid-to-large purchases like a premium vehicle, an ₹18 Lakh loan requires careful cash flow planning to avoid excessive debt burden.</p>
    `,
    faqs: [
      { question: "What is the EMI for an 18 Lakh loan for 7 years?", answer: "At 9.25%, the monthly EMI is roughly ₹29,202." },
      { question: "Is a 7-year tenure good for an 18 Lakh car loan?", answer: "While it lowers the EMI, a 7-year car loan means you will likely pay a lot of interest on a depreciating asset. A 4 to 5-year tenure is generally recommended." }
    ]
  },
  {
    slug: "emi-calculator-50-lakh-home-loan",
    type: "scenarios",
    title: "EMI Calculator for ₹50 Lakh Home Loan | 2026 Rates",
    h1: "EMI Calculator for ₹50 Lakh Home Loan",
    description: "Calculate the monthly EMI and view the full amortization schedule for a ₹50 Lakh home loan.",
    intro: "Buying a property? Use our calculator to model the exact EMI for a ₹50 Lakh home loan at current interest rates.",
    amount: 5000000,
    interestRate: 8.5,
    tenure: 240,
    date: "2026-08-21",
    content: `
      <h2>Financing a ₹50 Lakh Home</h2>
      <p>A ₹50 Lakh mortgage is a significant long-term commitment. Use our tool to compare how different interest rates affect your monthly affordability.</p>
    `,
    faqs: [
      { question: "What is the EMI for a 50 Lakh home loan for 20 years?", answer: "At an 8.5% interest rate, the monthly EMI is approximately ₹43,391." },
      { question: "How much total interest will I pay on a 50 Lakh home loan?", answer: "Over a 20-year tenure at 8.5%, the total interest paid will be nearly ₹54.14 Lakhs." }
    ]
  },
  {
    slug: "emi-5-years-vs-10-years",
    type: "tenure-comparison",
    title: "EMI Comparison: 5 Years vs 10 Years Tenure",
    h1: "5 Years vs 10 Years EMI Comparison",
    description: "Compare the EMI and total interest for 5-year (60 months) and 10-year (120 months) loan tenures to find your ideal balance.",
    intro: "Deciding between a 5-year and 10-year loan? See how extending the tenure drastically increases your total interest despite lowering the EMI.",
    amount: 2000000,
    interestRate: 9.5,
    tenure: 60,
    date: "2026-08-21",
    content: `
      <h2>Evaluating Long-Term vs Short-Term Tenures</h2>
      <p>Choosing between 5 and 10 years fundamentally alters your loan's cost profile. A 10-year loan offers breathing room in your budget but significantly enriches the lender via interest payments.</p>
    `,
    faqs: [
      { question: "How much more interest do I pay on a 10-year loan compared to a 5-year loan?", answer: "On a ₹20 Lakh loan at 9.5%, a 10-year tenure costs about ₹6.2 Lakhs more in total interest than a 5-year tenure." },
      { question: "When should I choose a 10-year tenure over a 5-year one?", answer: "Choose the longer tenure if the 5-year EMI pushes your EMI-to-Income ratio beyond 40-50%, risking your monthly financial stability." }
    ]
  },
"""

pattern = r'(export const TIER2_PAGES: Tier2Page\[\] = \[\n)'
new_content = re.sub(pattern, r'\1' + new_pages, content, count=1)

with open(file_path, 'w') as f:
    f.write(new_content)

print("Insertion complete.")
