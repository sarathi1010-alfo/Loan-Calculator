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
  date: string;
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
    date: "2026-07-10",
    faqs: [
      { question: "What is a Home Loan EMI?", answer: "A Home Loan EMI is the Equated Monthly Installment you pay towards your mortgage, consisting of principal repayment and interest." },
      { question: "How to reduce Home Loan EMI?", answer: "You can reduce your EMI by making a larger down payment, negotiating a lower interest rate, or extending the loan tenure (though this increases total interest)." }
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
    date: "2026-07-10",
    faqs: [
      { question: "What is a Personal Loan EMI?", answer: "A Personal Loan EMI represents the monthly payment required to pay off your unsecured personal loan." },
      { question: "Should I take a personal loan?", answer: "Only if you can comfortably afford the EMI and it helps consolidate higher-interest debt or fund a necessary expense." }
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
    date: "2026-07-10",
    faqs: [
      { question: "What is the ideal tenure for a car loan?", answer: "Financial experts recommend keeping car loan tenures to 3-5 years to avoid owing more than the car's depreciated value." },
      { question: "How does down payment affect car EMI?", answer: "A larger down payment reduces your principal amount, thereby significantly lowering your monthly EMI and total interest." }
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
    date: "2026-07-10",
    faqs: [
      { question: "When does Education Loan EMI start?", answer: "Typically, education loan EMI starts after a moratorium period (course duration + 6 months or 1 year)." },
      { question: "Is interest charged during the moratorium?", answer: "Yes, simple interest is usually calculated and accrued during the moratorium period, which is added to the principal when EMI begins." }
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
    date: "2026-07-10",
    faqs: [
      { question: "What is the EMI for a 5 Lakh loan for 5 years?", answer: "At an assumed interest rate of 10%, the EMI for a 5 Lakh loan for 5 years is approximately ₹10,624." },
      { question: "How much total interest will I pay on 5 Lakhs?", answer: "Total interest depends on the tenure and rate. With a 5-year tenure at 10%, the total interest paid is roughly ₹1,37,411." }
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
    date: "2026-07-10",
    faqs: [
      { question: "What is the EMI for a 10 Lakh loan?", answer: "The EMI varies. For a 7-year (84 months) loan at 9.5%, the EMI is around ₹16,334." },
      { question: "Is it better to prepay a 10 Lakh loan?", answer: "Yes, prepaying a large loan like ₹10 Lakh early in the tenure can save you a significant amount in total interest." }
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
    date: "2026-07-10",
    faqs: [
      { question: "What is the EMI for 20 Lakh home loan?", answer: "For a 15-year tenure at 8.75% interest, the monthly EMI for ₹20 Lakh is approximately ₹19,988." },
      { question: "How much interest will I pay over 15 years on 20 Lakhs?", answer: "At 8.75% over 15 years, you will pay almost ₹15.97 Lakh in interest alone, making the total repayment nearly ₹35.97 Lakh." }
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
    date: "2026-07-10",
    faqs: [
      { question: "Should I choose a 1-year or 5-year loan?", answer: "Choose a 1-year loan if you want to minimize interest and can afford high EMIs. Choose 5 years if you need lower monthly payments and accept paying more total interest." },
      { question: "How much interest do I save with a 1-year loan?", answer: "On a ₹1 Lakh loan at 12%, a 1-year loan costs ~₹6,619 in interest, while a 5-year loan costs ~₹33,467. You save over ₹26,000 by paying it off faster." }
    ]
  }
];

export function getTier2PageBySlug(slug: string, type: string): Tier2Page | undefined {
  return TIER2_PAGES.find((page) => page.slug === slug && page.type === type);
}
