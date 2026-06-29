import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Comprehensive EMI FAQ - Frequently Asked Questions | EMI Calculator Pro",
  description:
    "Find answers to 50+ common questions about EMIs, home loans, car loans, personal loans, interest rates, and amortization schedules.",
};

const faqs = [
  {
    category: "EMI Fundamentals",
    questions: [
      {
        q: "What is an EMI?",
        a: "EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.",
      },
      {
        q: "How is EMI calculated?",
        a: "EMI is calculated using a mathematical formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1]. P stands for Principal (loan amount), R for monthly interest rate (annual rate/12/100), and N for tenure in months.",
      },
      {
        q: "What is the difference between principal and interest?",
        a: "The principal is the original sum of money borrowed, while the interest is the cost of borrowing that money, usually expressed as an annual percentage rate (APR). Your EMI covers a portion of both each month.",
      },
      {
        q: "How does loan tenure affect my EMI?",
        a: "A longer loan tenure significantly decreases your monthly EMI payment but increases the total amount of interest you will pay over the life of the loan. A shorter tenure increases the monthly EMI but saves you money on total interest.",
      },
      {
        q: "What happens if I miss an EMI payment?",
        a: "Missing an EMI payment typically results in a late fee or penalty charge by your lender. Crucially, it will also negatively impact your credit score, making future borrowing more difficult or expensive. Continual missed payments can lead to loan default.",
      },
      {
        q: "Is EMI the same for all months?",
        a: "Yes, for a standard fixed-rate loan, the total EMI amount remains the same every month. However, the proportion of that payment going toward the principal versus the interest changes each month (this is called amortization).",
      },
      {
        q: "What is a reducing balance interest rate?",
        a: "In a reducing balance rate, the interest is calculated only on the remaining loan principal. As you pay off the principal each month, the interest portion of your EMI decreases, and the principal repayment portion increases.",
      },
      {
        q: "Can my EMI change during the loan tenure?",
        a: "Your EMI will only change if you have a floating (variable) interest rate loan and the underlying benchmark rate changes, or if you make a significant partial prepayment (part-payment) and request the lender to adjust your EMI rather than your loan tenure.",
      },
      {
        q: "What is an amortization schedule?",
        a: "An amortization schedule is a complete table of periodic loan payments, showing the amount of principal and the amount of interest that comprise each payment until the loan is paid off at the end of its term.",
      },
      {
        q: "Is it better to have a higher EMI or lower EMI?",
        a: "It depends on your cash flow. A higher EMI clears debt faster and saves total interest, but requires more monthly disposable income. A lower EMI provides monthly budget breathing room but costs more in long-term interest. A healthy EMI is usually 30-40% of your monthly income.",
      },
      {
        q: "What is a flat interest rate?",
        a: "A flat interest rate is calculated on the entire original principal amount for the full term of the loan, regardless of how much of the principal has already been paid off. This means you pay more interest compared to a reducing balance rate.",
      },
      {
        q: "How can I lower my EMI without extending tenure?",
        a: "You can lower your EMI without extending tenure by making partial prepayments towards your principal or by refinancing your loan at a lower interest rate through a balance transfer.",
      },
    ],
  },
  {
    category: "Home Loans",
    questions: [
      {
        q: "What is the maximum tenure for a home loan?",
        a: "Home loans typically offer the longest tenures of any loan type, commonly up to 30 years in many countries, depending on the borrower's age at loan maturity.",
      },
      {
        q: "Can I use an EMI calculator for joint home loans?",
        a: "Yes. An EMI calculator works on the total loan amount, regardless of how many borrowers apply. You would input the total joint loan amount you intend to borrow.",
      },
      {
        q: "Does home loan EMI include property tax and insurance?",
        a: "A standard EMI calculator only computes principal and interest. However, in some regions (like the US, where it's called PITI), lenders escrow property taxes and insurance, adding them to your monthly payment.",
      },
      {
        q: "How does part-payment affect my home loan EMI?",
        a: "Making a lump sum part-payment reduces your outstanding principal. You can then ask the bank to either keep the EMI same and reduce the remaining tenure (recommended to save interest) or keep the tenure same and reduce the monthly EMI.",
      },
      {
        q: "What is a pre-EMI?",
        a: "For under-construction properties, lenders disburse the loan in stages. A pre-EMI is the monthly interest charged only on the disbursed amount, not the full loan. Full EMI starts after final disbursement or possession.",
      },
      {
        q: "What is a home loan balance transfer?",
        a: "A home loan balance transfer involves transferring your outstanding principal amount from your current lender to a new lender who offers a lower interest rate, reducing your overall interest burden.",
      },
      {
        q: "Is property insurance mandatory with a home loan?",
        a: "Most lenders strongly recommend or require property insurance to protect the property against damages from fire, natural disasters, etc., since the property serves as collateral for the loan.",
      },
      {
        q: "Do I get a tax benefit on both principal and interest?",
        a: "Yes, in many jurisdictions (such as India), you can claim tax deductions on the principal repayment (e.g., under Section 80C) and the interest payment (e.g., under Section 24(b)) for a housing loan.",
      },
      {
        q: "What is an under-construction property home loan?",
        a: "It is a loan taken for a property that is still being built. Lenders disburse the loan amount in tranches based on the construction progress rather than a lump sum.",
      },
      {
        q: "What is Pre-EMI?",
        a: "For under-construction properties, you may only pay the interest on the disbursed loan amount until the property is completed. This payment is known as Pre-EMI. Regular EMIs start upon possession or full disbursement.",
      },
    ],
  },
  {
    category: "Personal & Car Loans",
    questions: [
      {
        q: "Why are personal loan interest rates usually higher?",
        a: "Personal loans are unsecured, meaning they are not backed by collateral (like a house or car). This increases the risk for the lender, which is offset by charging a higher interest rate.",
      },
      {
        q: "How long is a typical car loan tenure?",
        a: "Car loan tenures usually range from 1 to 7 years (12 to 84 months). Shorter tenures are common to prevent the loan balance from exceeding the rapidly depreciating value of the car.",
      },
      {
        q: "What is the difference between new and used car loan EMIs?",
        a: "Used car loans typically have higher interest rates than new car loans due to higher risk and depreciation. Therefore, for the same loan amount and tenure, a used car loan EMI will be higher.",
      },
      {
        q: "Can I prepay my personal loan?",
        a: "Yes, you can prepay most personal loans. However, lenders often charge a foreclosure or prepayment penalty (e.g., 2-5% of outstanding principal) to recoup some of the interest they lose by you paying off early.",
      },
      {
        q: "Should I take a longer tenure for a car loan?",
        a: "It's generally advised to keep car loans to 3-5 years. Cars depreciate quickly. A 7-year loan means you'll likely owe more than the car is worth for a significant portion of the loan (being 'underwater').",
      },
      {
        q: "Can I transfer my personal loan to another bank?",
        a: "Yes, you can opt for a balance transfer if another bank offers a significantly lower interest rate. However, calculate the foreclosure charges of your current bank and the processing fees of the new bank to ensure it is financially beneficial.",
      },
      {
        q: "Does my credit score impact my personal loan EMI?",
        a: "Absolutely. A higher credit score (typically 750+) can help you secure a lower interest rate, which directly reduces your monthly EMI and total interest paid.",
      },
      {
        q: "What happens to the car loan if the car is totaled?",
        a: "If your car is totaled, your auto insurance will pay the actual cash value of the car. If you owe more on the loan than the car is worth, you are still responsible for paying the difference (unless you have GAP insurance).",
      },
      {
        q: "Can I get a 100% financing on a car loan?",
        a: "Some banks offer 100% financing on the ex-showroom price for certain car models, especially to customers with excellent credit scores, meaning no down payment is required. However, it increases your EMI.",
      },
      {
        q: "Is it a good idea to consolidate debt with a personal loan?",
        a: "Debt consolidation can be a smart move if you use a personal loan with a lower interest rate to pay off high-interest debt (like credit card balances). It simplifies payments into a single EMI.",
      },
      {
        q: "How fast can a personal loan be approved?",
        a: "Many banks and NBFCs now offer instant or same-day approval and disbursement for personal loans, especially for pre-approved customers with strong credit histories.",
      },
      {
        q: "Is a guarantor required for a personal loan?",
        a: "Typically, no. Personal loans are unsecured. However, if your credit score is low or income is unstable, a lender might request a co-applicant or guarantor.",
      },
      {
        q: "Can self-employed individuals get personal loans?",
        a: "Yes, self-employed individuals can get personal loans, but lenders typically require proof of business continuity and income stability, such as IT returns and bank statements for the past 2-3 years.",
      },
      {
        q: "Does applying for personal loans in multiple banks hurt my credit score?",
        a: "Yes, applying for multiple loans simultaneously results in multiple 'hard inquiries' on your credit report, which can temporarily reduce your credit score.",
      },
      {
        q: "What is the maximum amount I can borrow for a personal loan?",
        a: "The maximum amount depends on your net monthly income, existing debt obligations, and the lender's policies. Usually, it ranges up to 20-40 times your monthly net income.",
      },
    ],
  },
  {
    category: "Education Loans",
    questions: [
      {
        q: "When does the EMI start for an education loan?",
        a: "Repayment (EMI) for an education loan usually starts after a 'moratorium period', which is typically the course duration plus 6 months or 1 year after getting a job, whichever is earlier.",
      },
      {
        q: "Do I have to pay interest during the study period?",
        a: "While you are not required to pay the principal during the study period, interest does accrue. You can choose to pay this 'simple interest' during your studies to reduce your future EMI burden.",
      },
      {
        q: "What is the typical tenure for an education loan?",
        a: "Education loan tenures usually range from 5 to 15 years, giving students enough time to settle into their careers and comfortably manage the EMIs.",
      },
      {
        q: "Are there tax benefits on education loan EMIs?",
        a: "Yes, in many countries (like India under Section 80E), the interest component of an education loan EMI is fully tax-deductible without any upper limit for up to 8 years.",
      },
      {
        q: "Can parents be co-applicants for an education loan?",
        a: "Yes, and it is usually mandatory. Parents or guardians act as co-applicants or guarantors, and their income and credit history are considered when approving the loan and deciding the interest rate.",
      },
      {
        q: "Can I get an auto loan without a down payment?",
        a: "Some lenders offer 'zero down payment' or '100% financing' on the ex-showroom price, usually for customers with excellent credit scores, but you will still need to pay registration and insurance out of pocket.",
      },
      {
        q: "What is the typical processing fee for a car loan?",
        a: "The processing fee for a car loan usually ranges from 1% to 2% of the loan amount, but lenders often waive or reduce this fee during festive seasons.",
      },
      {
        q: "Does the car loan tenure affect my interest rate?",
        a: "In some cases, yes. Lenders may charge slightly higher interest rates for longer loan tenures (e.g., 7 years) compared to shorter tenures (e.g., 3 years).",
      },
      {
        q: "Are EV (Electric Vehicle) car loans cheaper?",
        a: "Yes, many banks now offer specialized EV loans with lower interest rates (often 0.25% to 0.50% lower) and longer tenures to promote green energy.",
      },
      {
        q: "Can a student apply for a car loan?",
        a: "Students generally cannot get a car loan independently without a steady income source. They usually need a working parent to act as a co-applicant or guarantor.",
      },
    ],
  },
  {
    category: "Gold & Two-Wheeler Loans",
    questions: [
      {
        q: "How is gold loan EMI different?",
        a: "Gold loans often offer flexible repayment options. Instead of a standard EMI, you might choose to pay only interest monthly and the principal at the end of the term, or clear the entire amount in a single bullet payment.",
      },
      {
        q: "What happens if gold prices fall during my loan tenure?",
        a: "If gold prices drop significantly, the value of your collateral decreases. The bank may ask you to pledge more gold or prepay a part of the loan to maintain the required Loan-to-Value (LTV) ratio.",
      },
      {
        q: "Are two-wheeler loan interest rates high?",
        a: "Two-wheeler loans typically have slightly higher interest rates than car loans because the loan amount is smaller and the asset depreciates faster.",
      },
      {
        q: "What is the maximum tenure for a two-wheeler loan?",
        a: "Two-wheeler loans usually have shorter tenures, typically ranging from 1 to 5 years (12 to 60 months).",
      },
      {
        q: "Can I get a loan for a used two-wheeler?",
        a: "Yes, many banks and NBFCs offer loans for pre-owned two-wheelers, though the interest rates may be slightly higher than for new vehicles.",
      },
      {
        q: "What expenses does an education loan cover?",
        a: "A typical education loan covers tuition fees, hostel or accommodation charges, books, laptops, and even travel expenses for studies abroad.",
      },
      {
        q: "Is collateral required for an education loan?",
        a: "For smaller amounts (e.g., up to ₹4 Lakhs in India), collateral is typically not required. For larger amounts, banks require tangible collateral like property or fixed deposits.",
      },
      {
        q: "Can I get an education loan for an online degree?",
        a: "Yes, many lenders now offer loans for online and distance learning degrees, provided the institution and program are recognized and accredited.",
      },
      {
        q: "What is the interest rate margin for an education loan?",
        a: "The margin is the percentage of the total education cost that the student/family must fund themselves. For example, a 15% margin means the bank funds 85% of the total cost.",
      },
      {
        q: "Does the interest rate vary based on the university?",
        a: "Yes, students admitted to premier institutions (like IITs, IIMs, Ivy League) often get significantly lower interest rates and faster processing compared to other universities.",
      },
    ],
  },
  {
    category: "Amortization & Repayment Strategy",
    questions: [
      {
        q: "What is the difference between simple interest and amortization?",
        a: "Simple interest is calculated only on the principal amount once. Amortization uses reducing balance interest, where interest is calculated monthly on the remaining principal, which decreases with every EMI payment.",
      },
      {
        q: "How can I reduce my total interest burden?",
        a: "You can reduce interest by choosing a shorter loan tenure, opting for a lower interest rate, making regular partial prepayments, or increasing your EMI amount every year (step-up EMI).",
      },
      {
        q: "What is a 'Step-up' EMI?",
        a: "A Step-up EMI is a repayment plan where your EMI starts low and gradually increases over time. This is beneficial for young professionals who expect their income to rise in the future.",
      },
      {
        q: "What is a 'Step-down' EMI?",
        a: "A Step-down EMI plan involves paying higher EMIs in the initial years and lower EMIs later. It reduces the principal faster, saving total interest, and is useful if you expect expenses to increase later (e.g., retirement).",
      },
      {
        q: "Should I prepay my loan or invest the money?",
        a: "It depends on the numbers. If your loan interest rate (after tax benefits) is higher than the expected post-tax return on your investments, it is mathematically better to prepay the loan.",
      },
      {
        q: "What documents are required for a gold loan?",
        a: "Gold loans require minimal documentation, typically just identity and address proof (KYC). No income proof or credit score is strictly necessary.",
      },
      {
        q: "How fast are gold loans processed?",
        a: "Gold loans are often disbursed within hours or even minutes of the gold appraisal at the branch.",
      },
      {
        q: "What purity of gold is accepted?",
        a: "Banks and NBFCs generally accept gold jewelry of 18-karat to 24-karat purity. Gold coins or bars may have different restrictions depending on the lender.",
      },
      {
        q: "Can I take a two-wheeler loan for an electric scooter?",
        a: "Yes, electric scooters are fully eligible for two-wheeler loans, and many lenders offer preferential rates for EVs.",
      },
      {
        q: "Is my pledged gold safe?",
        a: "Yes, lenders store pledged gold in high-security strong rooms or vaults, and it is fully insured against theft or loss.",
      },
    ],
  },
  {
    category: "Credit Score & EMIs",
    questions: [
      {
        q: "Does checking an EMI calculator affect my credit score?",
        a: "No, using an online EMI calculator does not involve a 'hard pull' of your credit report, so it has absolutely no impact on your credit score.",
      },
      {
        q: "How does paying EMIs on time affect my credit score?",
        a: "Consistently paying your EMIs on or before the due date is the most significant factor in building a strong, high credit score. It demonstrates responsible credit behavior.",
      },
      {
        q: "Will taking multiple loans lower my credit score?",
        a: "Applying for multiple loans in a short period generates multiple 'hard inquiries', which can temporarily lower your score. However, managing different types of loans well (credit mix) can eventually improve it.",
      },
      {
        q: "Does prepaying a loan improve my credit score?",
        a: "Prepaying and closing a loan early might cause a slight, temporary dip in your score because a credit account is closed, but in the long run, having less debt is positive for your financial health.",
      },
      {
        q: "What is a Debt-to-Income (DTI) ratio?",
        a: "DTI ratio is the percentage of your gross monthly income that goes toward paying debts (including your new EMI). Lenders prefer a DTI ratio below 40-50% when approving new loans.",
      },
      {
        q: "How long does a late payment stay on my credit report?",
        a: "A late or missed EMI payment can stay on your credit report for up to 7 years, negatively impacting your score for much of that time.",
      },
      {
        q: "Does a high credit score guarantee loan approval?",
        a: "No. While a high credit score is crucial, lenders also evaluate your income, employment stability, DTI ratio, and the purpose of the loan before approving.",
      },
      {
        q: "Can settling a loan for less than owed hurt my score?",
        a: "Yes, settling a loan (paying less than the full amount due to close the account) severely damages your credit score, as it is marked as 'Settled' rather than 'Closed'.",
      },
      {
        q: "How quickly does my credit score update after paying off a loan?",
        a: "Credit bureaus generally update your score every 30 to 45 days based on information provided by lenders. It may take a month or two for a paid-off loan to reflect.",
      },
      {
        q: "What is a good credit score to get a lower EMI?",
        a: "A credit score of 750 or above is generally considered excellent and will help you negotiate the lowest possible interest rates and EMIs.",
      },
    ],
  },
];

export default function FAQPage() {
  const allQuestions = faqs.flatMap((c) => c.questions);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.a,
      },
    })),
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about EMIs, loans, interest rates, and
          amortization.
        </p>
      </div>

      <div className="space-y-12">
        {faqs.map((category, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-primary border-b pb-2">
              {category.category}
            </h2>
            <div className="space-y-6">
              {category.questions.map((faq, qIdx) => (
                <div
                  key={qIdx}
                  className="bg-card p-6 rounded-lg shadow-sm border"
                >
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
