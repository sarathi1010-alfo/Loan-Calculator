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
}
