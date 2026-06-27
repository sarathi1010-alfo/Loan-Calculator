export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string; // Storing as HTML/Markdown string for simplicity in this mock
  answerBlock: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-is-emi-complete-guide',
    title: 'What is EMI? The Complete Guide to Equated Monthly Installments',
    description: 'Understand what EMI is, how it works, and why it is crucial for personal finance and loan management.',
    date: '2026-06-25',
    category: 'EMI Fundamentals',
    answerBlock: 'EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.',
    content: `
      <h2>Understanding the Basics</h2>
      <p>When you take a loan from a bank or financial institution, you are required to repay the borrowed amount (the principal) along with the cost of borrowing (the interest). Instead of paying this back in one lump sum, the total amount is broken down into smaller, manageable chunks called Equated Monthly Installments, or EMIs.</p>

      <h2>How Does an EMI Work?</h2>
      <p>Every EMI you pay consists of two parts:</p>
      <ul>
        <li><strong>Principal Repayment:</strong> A portion of the payment goes toward reducing the original amount you borrowed.</li>
        <li><strong>Interest Payment:</strong> The remaining portion pays the interest charged on the outstanding loan balance for that month.</li>
      </ul>
      <p>In the early years of a loan (especially long-term loans like home loans), the interest component makes up a large part of the EMI. As you continue to pay off the loan, the interest portion decreases, and the principal portion increases. This process is known as amortization.</p>
    `
  },
  {
    slug: 'how-to-calculate-emi',
    title: 'How to Calculate EMI: Formula, Examples & Step-by-Step Guide',
    description: 'Learn the exact mathematical formula used by banks to calculate your EMI and how to compute it yourself.',
    date: '2026-06-24',
    category: 'EMI Fundamentals',
    answerBlock: 'EMI is calculated using the formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1], where P is the Principal loan amount, R is the monthly interest rate, and N is the loan tenure in months.',
    content: `
      <h2>The Universal EMI Formula</h2>
      <p>The mathematical formula used by almost all financial institutions to calculate the EMI on a reducing balance loan is:</p>
      <p><strong>EMI = [P x R x (1+R)^N] / [(1+R)^N-1]</strong></p>
      <p>Here is what each variable means:</p>
      <ul>
        <li><strong>P (Principal):</strong> The original loan amount you are borrowing.</li>
        <li><strong>R (Rate):</strong> The monthly interest rate. If your annual interest rate is 12%, the monthly rate is 12/12/100 = 0.01.</li>
        <li><strong>N (Number of months):</strong> The loan tenure expressed in months. A 5-year loan would be 60 months.</li>
      </ul>

      <h2>Example Calculation</h2>
      <p>Let's say you borrow ₹10,00,000 (10 Lakh) at an annual interest rate of 10.5% for a tenure of 5 years (60 months).</p>
      <ul>
        <li>P = 10,00,000</li>
        <li>R = 10.5 / 12 / 100 = 0.00875</li>
        <li>N = 60</li>
      </ul>
      <p>Using the formula, your EMI would be exactly ₹21,494. Using an online EMI calculator is the easiest way to avoid manual math errors.</p>
    `
  },
  {
    slug: 'how-loan-tenure-affects-your-emi',
    title: 'How Loan Tenure Affects Your EMI and Total Interest',
    description: 'Discover the hidden costs of long-term loans. See how choosing a shorter tenure increases your EMI but saves you money.',
    date: '2026-06-23',
    category: 'Tenure & Strategy Guides',
    answerBlock: 'A longer loan tenure lowers your monthly EMI payment but significantly increases the total amount of interest you will pay over the life of the loan. A shorter tenure increases the monthly EMI but saves you money on total interest.',
    content: `
      <h2>The Trade-off: Monthly Cash Flow vs. Total Cost</h2>
      <p>When taking a loan, one of the most critical decisions you make is selecting the loan tenure (the amount of time you have to repay the loan). This decision directly impacts your EMI and the total cost of borrowing.</p>

      <h2>The Impact of a Long Tenure</h2>
      <p><strong>Pros:</strong> A longer tenure spreads out your principal repayment over a greater number of months, resulting in a lower monthly EMI. This makes the loan more manageable month-to-month and can help you qualify for a larger loan amount based on your income.</p>
      <p><strong>Cons:</strong> Because you are holding onto the borrowed money for a longer period, the bank charges you interest for a longer time. The total interest paid over a 20-year loan is vastly higher than on a 10-year loan.</p>

      <h2>Finding the Sweet Spot</h2>
      <p>Financial experts generally advise keeping the tenure as short as you can comfortably afford. A good rule of thumb is that your total EMIs (including the new loan) should not exceed 40% of your net monthly income.</p>
    `
  },
  {
    slug: 'what-is-amortization-schedule',
    title: 'What is an Amortization Schedule? Complete Guide',
    description: 'Learn how to read an amortization schedule to understand exactly where your EMI payments are going.',
    date: '2026-06-22',
    category: 'Amortization & Visual Breakdowns',
    answerBlock: 'An amortization schedule is a detailed table showing each periodic loan payment, broken down into the amount applied to the principal balance and the amount paid in interest, until the loan is fully paid off.',
    content: `
      <h2>Decoding the Amortization Schedule</h2>
      <p>When you get a loan, the bank often provides a table showing your repayment plan. This is the amortization schedule. It reveals the exact anatomy of your loan from the first payment to the very last.</p>

      <h2>Key Components of the Schedule</h2>
      <ul>
        <li><strong>Payment Number / Date:</strong> Which month of the loan the row represents.</li>
        <li><strong>Beginning Balance:</strong> The total principal you owe before making that month's payment.</li>
        <li><strong>EMI (Total Payment):</strong> Your fixed monthly payment.</li>
        <li><strong>Interest Paid:</strong> How much of your EMI went to the bank as profit this month. (Calculated as Beginning Balance x Monthly Interest Rate).</li>
        <li><strong>Principal Paid:</strong> How much of your EMI went toward reducing your actual debt. (Calculated as Total EMI - Interest Paid).</li>
        <li><strong>Ending Balance:</strong> What you owe after the payment is made. (Calculated as Beginning Balance - Principal Paid).</li>
      </ul>
      <p>In the early years of a home loan, you will notice that the "Interest Paid" column is much larger than the "Principal Paid" column. This flips toward the end of the loan.</p>
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}
