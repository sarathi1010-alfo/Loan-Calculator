export interface AmortizationRow {
  month: number;
  emi: number;
  principalComponent: number;
  interestComponent: number;
  balance: number;
}

export interface LoanResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  principal: number;
  amortizationSchedule: AmortizationRow[];
  originalTotalInterest?: number;
  originalTotalPayment?: number;
  actualTenureMonths?: number;
}

export interface ComparisonScenario {
  id: string;
  principal: number;
  interestRate: number;
  tenureMonths: number;
  emi: number;
  totalInterest: number;
  totalPayment: number;
  prepaymentAmount?: number;
  prepaymentType?: "one-time" | "monthly";
  prepaymentMonth?: number;
}
