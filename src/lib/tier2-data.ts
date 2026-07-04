export interface Tier2Page {
  slug: string;
  type: "loan-types" | "scenarios" | "tenure-comparison";
  title: string;
  h1: string;
  description: string;
  intro: string;
  amount: number;
  interestRate: number;
  tenure: number; // in months
  faqs: { question: string; answer: string }[];
}

export const TIER2_PAGES: Tier2Page[] = [
  // Loan Types
  {
    slug: "home-loan-emi-calculator",
    type: "loan-types",
    title: "Home Loan EMI Calculator | Compare Rates & Repayment",
    h1: "Home Loan EMI Calculator",
    description: "Calculate your home loan EMI instantly. View complete amortization schedule and balance between your monthly EMI and total interest paid.",
    intro: "Planning to buy your dream home? Use this specific calculator to find your exact monthly outgoing. It defaults to typical home loan terms but can be customized completely.",
    amount: 5000000,
    interestRate: 8.5,
    tenure: 240,
    faqs: [
      { question: "What is a Home Loan EMI?", answer: "A Home Loan EMI is the Equated Monthly Installment you pay towards your mortgage, consisting of principal repayment and interest." },
      { question: "How to reduce Home Loan EMI?", answer: "You can reduce your EMI by making a larger down payment, negotiating a lower interest rate, or extending the loan tenure (though this increases total interest)." },
      { question: "What is the reducing balance method for home loans?", answer: "Most home loans use the reducing balance method, where interest is calculated only on the remaining principal balance, causing the interest component to decrease over time." }
    ]
  },
  {
    slug: "personal-loan-emi-calculator",
    type: "loan-types",
    title: "Personal Loan EMI Calculator | Check Monthly Installments",
    h1: "Personal Loan EMI Calculator",
    description: "Plan your personal loan repayment efficiently. Check your monthly payments, compare interest rates, and find the perfect tenure for your budget.",
    intro: "Personal loans are unsecured and typically have higher interest rates. Use this tool to instantly generate a precise amortization schedule for your personal financing needs.",
    amount: 500000,
    interestRate: 11.5,
    tenure: 60,
    faqs: [
      { question: "What is a Personal Loan EMI?", answer: "A Personal Loan EMI represents the monthly payment required to pay off your unsecured personal loan." },
      { question: "Should I take a personal loan?", answer: "Only if you can comfortably afford the EMI and it helps consolidate higher-interest debt or fund a necessary expense." },
      { question: "Can I prepay a personal loan?", answer: "Yes, many banks allow personal loan prepayments, which helps you save on total interest costs. Always check for prepayment penalty clauses in your agreement." }
    ]
  },
  {
    slug: "car-loan-emi-calculator",
    type: "loan-types",
    title: "Car Loan EMI Calculator | Auto Finance Planning",
    h1: "Car Loan EMI Calculator",
    description: "Calculate your car loan EMI and plan your auto finance. Understand your monthly payments and total interest over the life of the loan.",
    intro: "Since cars are depreciating assets, experts recommend keeping loan tenures relatively short. Find the perfect balance between loan tenure and your monthly budget.",
    amount: 800000,
    interestRate: 9.0,
    tenure: 48,
    faqs: [
      { question: "What is the ideal tenure for a car loan?", answer: "Financial experts recommend keeping car loan tenures to 3-5 years to avoid owing more than the car's depreciated value." },
      { question: "How does down payment affect car EMI?", answer: "A larger down payment reduces your principal amount, thereby significantly lowering your monthly EMI and total interest." },
      { question: "Are car loan interest rates fixed or floating?", answer: "Most car loans in India come with fixed interest rates, providing certainty for your monthly budget throughout the 3-7 year tenure." }
    ]
  },
  {
    slug: "education-loan-emi-calculator",
    type: "loan-types",
    title: "Education Loan EMI Calculator | Student Finance",
    h1: "Education Loan EMI Calculator",
    description: "Plan your student loan repayment. Calculate your education loan EMI, view the amortization schedule, and manage your future finances.",
    intro: "Education loans often have moratorium periods. This calculator helps you determine what your EMI will look like once repayment begins based on the principal and interest accrued.",
    amount: 2000000,
    interestRate: 10.5,
    tenure: 120,
    faqs: [
      { question: "When does Education Loan EMI start?", answer: "Typically, education loan EMI starts after a moratorium period (course duration + 6 months or 1 year)." },
      { question: "Is interest charged during the moratorium?", answer: "Yes, simple interest is usually calculated and accrued during the moratorium period, which is added to the principal when EMI begins.", },
      { question: "Who is responsible for student loan EMI?", answer: "While the student is the primary borrower, a parent or guardian often acts as a co-applicant and is responsible for the EMI if the student cannot pay." }
    ]
  },

  // Scenarios
  {
    slug: "emi-calculator-5-lakh",
    type: "scenarios",
    title: "5 Lakh EMI Calculator | Loan Scenario",
    h1: "EMI Calculator for ₹5 Lakh",
    description: "Calculate the exact EMI for a 5 Lakh loan. Adjust the interest rate and tenure to find your monthly payment and total interest breakdown.",
    intro: "Looking to borrow ₹5 Lakh? Use this scenario calculator to see exactly how your monthly payments change based on different interest rates and tenures.",
    amount: 500000,
    interestRate: 10.0,
    tenure: 60,
    faqs: [
      { question: "What is the EMI for a 5 Lakh loan for 5 years?", answer: "At an assumed interest rate of 10%, the EMI for a 5 Lakh loan for 5 years is approximately ₹10,624." },
      { question: "How much total interest will I pay on 5 Lakhs?", answer: "Total interest depends on the tenure and rate. With a 5-year tenure at 10%, the total interest paid is roughly ₹1,37,411." },
      { question: "Is a ₹5 Lakh personal loan easy to get?", answer: "Approval depends on your credit score (750+) and stable income. Lenders typically look for a debt-to-income ratio below 40%." }
    ]
  },
  {
    slug: "emi-calculator-10-lakh",
    type: "scenarios",
    title: "10 Lakh EMI Calculator | Loan Scenario",
    h1: "EMI Calculator for ₹10 Lakh",
    description: "Calculate the exact EMI for a 10 Lakh loan. Explore different tenures and interest rates to optimize your repayment strategy.",
    intro: "Planning a ₹10 Lakh expense? Whether it's for home renovation or a personal need, calculate your precise monthly EMI and total interest burden here.",
    amount: 1000000,
    interestRate: 9.5,
    tenure: 84,
    faqs: [
      { question: "What is the EMI for a 10 Lakh loan?", answer: "The EMI varies. For a 7-year (84 months) loan at 9.5%, the EMI is around ₹16,334." },
      { question: "Is it better to prepay a 10 Lakh loan?", answer: "Yes, prepaying a large loan like ₹10 Lakh early in the tenure can save you a significant amount in total interest." },
      { question: "How much salary is needed for a 10 Lakh EMI?", answer: "Lenders suggest that your total EMIs should not exceed 50% of your take-home pay. For a ₹16,334 EMI, a minimum salary of ₹35,000-40,000 is usually required." }
    ]
  },
  {
    slug: "emi-calculator-20-lakh",
    type: "scenarios",
    title: "20 Lakh EMI Calculator | Loan Scenario",
    h1: "EMI Calculator for ₹20 Lakh",
    description: "Calculate your EMI for a 20 Lakh loan. Ideal for housing or business loans. View full amortization and interest charts.",
    intro: "A ₹20 Lakh loan is a significant financial commitment. Use this calculator to see how a small change in interest rate or tenure affects your large monthly EMI.",
    amount: 2000000,
    interestRate: 8.75,
    tenure: 180,
    faqs: [
      { question: "What is the EMI for 20 Lakh home loan?", answer: "For a 15-year tenure at 8.75% interest, the monthly EMI for ₹20 Lakh is approximately ₹19,988." },
      { question: "How much interest will I pay over 15 years on 20 Lakhs?", answer: "At 8.75% over 15 years, you will pay almost ₹15.97 Lakh in interest alone, making the total repayment nearly ₹35.97 Lakh." },
      { question: "What documents are needed for a 20 Lakh loan?", answer: "Typical requirements include identity proof, address proof, last 3-6 months' salary slips, Form 16, and bank statements for the last 6 months." }
    ]
  },

  // Tenure Comparison
  {
    slug: "emi-1-year-vs-5-years",
    type: "tenure-comparison",
    title: "EMI Comparison: 1 Year vs 5 Years | Tenure Analysis",
    h1: "EMI Comparison: 1 Year vs 5 Years",
    description: "Compare how loan tenure affects your EMI and total interest. See the difference between a 1-year and 5-year repayment plan.",
    intro: "Choosing the right tenure is crucial. A shorter tenure (1 year) means high monthly EMIs but massive interest savings, whereas a longer tenure (5 years) lowers the monthly burden but increases the total cost of borrowing.",
    amount: 100000,
    interestRate: 12.0,
    tenure: 60, // Default to 5 years for visualization, text will explain comparison
    faqs: [
      { question: "Should I choose a 1-year or 5-year loan?", answer: "Choose a 1-year loan if you want to minimize interest and can afford high EMIs. Choose 5 years if you need lower monthly payments and accept paying more total interest." },
      { question: "How much interest do I save with a 1-year loan?", answer: "On a ₹1 Lakh loan at 12%, a 1-year loan costs ~₹6,619 in interest, while a 5-year loan costs ~₹33,467. You save over ₹26,000 by paying it off faster." },
      { question: "What is the 5-year vs 1-year EMI trade-off?", answer: "A 5-year loan prioritizes monthly liquidity (lower EMI), while a 1-year loan prioritizes wealth preservation (lower total cost). Use our calculator to see the exact difference for your amount." }
    ]
  }
];

export function getTier2PageBySlug(slug: string, type: string): Tier2Page | undefined {
  return TIER2_PAGES.find((page) => page.slug === slug && page.type === type);
}
