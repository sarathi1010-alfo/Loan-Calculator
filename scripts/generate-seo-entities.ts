import fs from 'fs';
import path from 'path';

// --- 1. Ontology Definition ---

type LoanType = 'home' | 'car' | 'personal';
type Bank = 'hdfc' | 'sbi' | 'icici' | 'axis' | 'bajaj' | 'generic';

interface EntityInput {
  amount: number;      // e.g. 500000
  amountText: string;  // e.g. "5 Lakh"
  tenure: number;      // in months, e.g. 120
  tenureText: string;  // e.g. "10 Years"
  loanType: LoanType;
  bank: Bank;
  interestRate: number; // e.g. 8.5
}

interface SemanticBlocks {
  title: string;
  description: string;
  h1: string;
  intro: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[]; // For Internal Link Graph
}

export interface GeneratedEntity extends EntityInput, SemanticBlocks {
  slug: string;
}

// --- 2. Data Pools ---

const AMOUNTS = [
  { val: 100000, text: "1 Lakh" },
  { val: 500000, text: "5 Lakh" },
  { val: 1000000, text: "10 Lakh" },
  { val: 2000000, text: "20 Lakh" },
  { val: 3000000, text: "30 Lakh" },
  { val: 5000000, text: "50 Lakh" },
  { val: 10000000, text: "1 Crore" },
];

const TENURES = [
  { val: 12, text: "1 Year" },
  { val: 36, text: "3 Years" },
  { val: 60, text: "5 Years" },
  { val: 120, text: "10 Years" },
  { val: 180, text: "15 Years" },
  { val: 240, text: "20 Years" },
  { val: 360, text: "30 Years" },
];

const BANKS = [
  { id: 'generic', name: '', rateHome: 8.5, rateCar: 9.0, ratePersonal: 11.5 },
  { id: 'hdfc', name: 'HDFC', rateHome: 8.4, rateCar: 8.75, ratePersonal: 10.5 },
  { id: 'sbi', name: 'SBI', rateHome: 8.5, rateCar: 8.65, ratePersonal: 11.0 },
  { id: 'icici', name: 'ICICI', rateHome: 8.75, rateCar: 9.0, ratePersonal: 10.75 },
];

const LOAN_TYPES = [
  { id: 'home', name: 'Home Loan', intent: 'housing finance' },
  { id: 'car', name: 'Car Loan', intent: 'auto finance' },
  { id: 'personal', name: 'Personal Loan', intent: 'personal finance' },
];

// --- 3. Slug Compiler ---

function generateSlug(amountText: string, bankName: string, loanTypeName: string, tenureText: string): string {
  const parts = [];
  if (amountText) parts.push(amountText);
  if (bankName) parts.push(bankName);
  parts.push(loanTypeName);
  parts.push("emi");
  if (tenureText) parts.push(`for ${tenureText}`);

  return parts.join("-").toLowerCase().replace(/\s+/g, '-');
}

// --- 4. Semantic Block Generator ---

function generateSemanticBlocks(entity: EntityInput): SemanticBlocks {
  const amountStr = `₹${entity.amountText}`;
  const bankStr = entity.bank === 'generic' ? '' : `${BANKS.find(b => b.id === entity.bank)?.name} `;
  const loanTypeStr = LOAN_TYPES.find(l => l.id === entity.loanType)?.name || '';

  // Title Variations
  const title = `${amountStr} ${bankStr}${loanTypeStr} EMI Calculator | ${entity.tenureText}`;

  // Description Variations
  const description = `Calculate the exact EMI for a ${amountStr} ${bankStr}${loanTypeStr} taken for ${entity.tenureText} at ${entity.interestRate}% interest rate. View the complete amortization schedule and interest breakdown.`;

  const h1 = `EMI Calculator for ${amountStr} ${bankStr}${loanTypeStr} (${entity.tenureText})`;

  const intro = `Planning to take a ${bankStr}${loanTypeStr.toLowerCase()} of ${amountStr}? Use this specific calculator to find your exact monthly outgoing. Assuming an interest rate of ${entity.interestRate}%, your repayment structure over ${entity.tenureText} is detailed below.`;

  // Deterministic FAQs
  const faqs = [
    {
      question: `What is the monthly EMI for a ${amountStr} ${bankStr}${loanTypeStr} for ${entity.tenureText}?`,
      answer: `The monthly EMI depends on the exact interest rate. At a standard ${entity.interestRate}% rate, you can see the precise monthly installment calculated in the tool above.`
    },
    {
      question: `How much total interest will I pay on a ${amountStr} loan over ${entity.tenureText}?`,
      answer: `Total interest is calculated on a reducing balance basis. For a ${entity.tenureText} tenure at ${entity.interestRate}%, the interest forms a significant portion of the total repayment. Check the pie chart breakdown for exact figures.`
    }
  ];

  return { title, description, h1, intro, faqs, relatedSlugs: [] };
}

// --- 5. Main Generation Loop ---

async function generateEntities() {
  console.log("Initializing Entity Generation Engine...");
  const entities: GeneratedEntity[] = [];
  const slugsSet = new Set<string>();

  // Nested loops to create the ontology matrix
  for (const amount of AMOUNTS) {
    for (const type of LOAN_TYPES) {
      for (const bank of BANKS) {
        for (const tenure of TENURES) {

          // Logic constraint: Skip 30 year car/personal loans
          if ((type.id === 'car' || type.id === 'personal') && tenure.val > 84) continue;

          // Logic constraint: Skip 1 year home loans (unrealistic)
          if (type.id === 'home' && tenure.val < 60) continue;

          let rate = bank.rateHome;
          if (type.id === 'car') rate = bank.rateCar;
          if (type.id === 'personal') rate = bank.ratePersonal;

          const slug = generateSlug(
            amount.text,
            bank.name,
            type.name,
            tenure.text
          );

          if (slugsSet.has(slug)) continue;
          slugsSet.add(slug);

          const input: EntityInput = {
            amount: amount.val,
            amountText: amount.text,
            tenure: tenure.val,
            tenureText: tenure.text,
            loanType: type.id as LoanType,
            bank: bank.id as Bank,
            interestRate: rate
          };

          const semanticBlocks = generateSemanticBlocks(input);

          entities.push({
            slug,
            ...input,
            ...semanticBlocks
          });
        }
      }
    }
  }

  // --- 6. Internal Link Graphing ---
  // Assign 3 semantically relevant internal links to each page
  console.log(`Generated ${entities.length} base entities. Building internal link graph...`);

  for (let i = 0; i < entities.length; i++) {
    const current = entities[i];

    // Find same amount, different tenure
    const sameAmount = entities.find(e => e.amount === current.amount && e.loanType === current.loanType && e.slug !== current.slug);

    // Find same tenure, different amount
    const sameTenure = entities.find(e => e.tenure === current.tenure && e.loanType === current.loanType && e.slug !== current.slug);

    // Find same bank, different type
    const sameBank = entities.find(e => e.bank === current.bank && e.slug !== current.slug && current.bank !== 'generic');

    if (sameAmount) current.relatedSlugs.push(sameAmount.slug);
    if (sameTenure) current.relatedSlugs.push(sameTenure.slug);
    if (sameBank) current.relatedSlugs.push(sameBank.slug);

    // Deduplicate
    current.relatedSlugs = [...new Set(current.relatedSlugs)].slice(0, 3);
  }

  // Write to filesystem
  const outputPath = path.join(process.cwd(), 'data', 'generated', 'seo-pages.json');
  fs.writeFileSync(outputPath, JSON.stringify(entities, null, 2));

  console.log(`✅ Successfully generated ${entities.length} highly-optimized programmatic entities.`);
  console.log(`Output saved to: ${outputPath}`);
}

generateEntities().catch(console.error);
