import { LoanResult, AmortizationRow } from "@/types";

/**
 * Calculates EMI, Total Interest, Total Payment, and Amortization Schedule.
 *
 * @param principal The loan amount.
 * @param annualInterestRate The annual interest rate in percentage (e.g., 8.5).
 * @param tenureInMonths The duration of the loan in months.
 * @returns LoanResult object containing calculation details.
 */
export function calculateEMI(
  principal: number,
  annualInterestRate: number,
  tenureInMonths: number
): LoanResult {
  if (principal <= 0 || tenureInMonths <= 0) {
    return {
      emi: 0,
      totalInterest: 0,
      totalPayment: 0,
      principal,
      amortizationSchedule: [],
    };
  }

  if (annualInterestRate === 0) {
    const emi = principal / tenureInMonths;
    const totalPayment = principal;
    const amortizationSchedule: AmortizationRow[] = [];

    let balance = principal;
    for (let month = 1; month <= tenureInMonths; month++) {
      balance -= emi;
      amortizationSchedule.push({
        month,
        emi,
        principalComponent: emi,
        interestComponent: 0,
        balance: Math.max(0, balance),
      });
    }

    return {
      emi,
      totalInterest: 0,
      totalPayment,
      principal,
      amortizationSchedule,
    };
  }

  const monthlyInterestRate = annualInterestRate / 12 / 100;

  // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const mathPow = Math.pow(1 + monthlyInterestRate, tenureInMonths);
  const emi = (principal * monthlyInterestRate * mathPow) / (mathPow - 1);

  const totalPayment = emi * tenureInMonths;
  const totalInterest = totalPayment - principal;

  const amortizationSchedule: AmortizationRow[] = [];
  let balance = principal;

  for (let month = 1; month <= tenureInMonths; month++) {
    const interestComponent = balance * monthlyInterestRate;
    const principalComponent = emi - interestComponent;

    balance -= principalComponent;

    // Fix floating point issues for the last month
    if (month === tenureInMonths || balance < 0) {
      balance = 0;
    }

    amortizationSchedule.push({
      month,
      emi,
      principalComponent,
      interestComponent,
      balance,
    });
  }

  return {
    emi,
    totalInterest,
    totalPayment,
    principal,
    amortizationSchedule,
  };
}
