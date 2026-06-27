import { LoanResult, AmortizationRow } from "@/types";

/**
 * Calculates EMI, Total Interest, Total Payment, and Amortization Schedule.
 *
 * @param principal The loan amount.
 * @param annualInterestRate The annual interest rate in percentage (e.g., 8.5).
 * @param tenureInMonths The duration of the loan in months.
 * @param prepaymentAmount Optional extra payment amount.
 * @param prepaymentType Type of prepayment ('one-time' or 'monthly').
 * @param prepaymentMonth The month in which prepayment starts/occurs.
 * @returns LoanResult object containing calculation details.
 */
export function calculateEMI(
  principal: number,
  annualInterestRate: number,
  tenureInMonths: number,
  prepaymentAmount: number = 0,
  prepaymentType: "one-time" | "monthly" = "one-time",
  prepaymentMonth: number = 1
): LoanResult {
  if (principal <= 0 || tenureInMonths <= 0) {
    return {
      emi: 0,
      totalInterest: 0,
      totalPayment: 0,
      principal,
      amortizationSchedule: [],
      originalTotalInterest: 0,
      originalTotalPayment: 0,
      actualTenureMonths: 0,
    };
  }

  const monthlyInterestRate = annualInterestRate / 12 / 100;
  let emi = 0;
  let originalTotalPayment = principal;
  let originalTotalInterest = 0;

  if (annualInterestRate === 0) {
    emi = principal / tenureInMonths;
    originalTotalPayment = principal;
    originalTotalInterest = 0;
  } else {
    // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const mathPow = Math.pow(1 + monthlyInterestRate, tenureInMonths);
    emi = (principal * monthlyInterestRate * mathPow) / (mathPow - 1);
    originalTotalPayment = emi * tenureInMonths;
    originalTotalInterest = originalTotalPayment - principal;
  }

  const amortizationSchedule: AmortizationRow[] = [];
  let balance = principal;
  let totalInterest = 0;
  let totalPayment = 0;
  let month = 1;

  for (; month <= tenureInMonths && balance > 0; month++) {
    const interestComponent = balance * monthlyInterestRate;
    let currentPayment = emi;

    if (prepaymentAmount > 0) {
      if (prepaymentType === "one-time" && month === prepaymentMonth) {
        currentPayment += prepaymentAmount;
      } else if (prepaymentType === "monthly" && month >= prepaymentMonth) {
        currentPayment += prepaymentAmount;
      }
    }

    if (currentPayment > balance + interestComponent) {
      currentPayment = balance + interestComponent;
    }

    const principalComponent = currentPayment - interestComponent;
    balance -= principalComponent;

    // Fix floating point issues when balance gets very small
    if (balance < 0.01) {
      balance = 0;
    }

    totalInterest += interestComponent;
    totalPayment += currentPayment;

    amortizationSchedule.push({
      month,
      emi: currentPayment,
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
    originalTotalInterest,
    originalTotalPayment,
    actualTenureMonths: month - 1, // Exclude the loop increment after condition failure
  };
}
