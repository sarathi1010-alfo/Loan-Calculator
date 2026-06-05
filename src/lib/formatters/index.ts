/**
 * Formats a number to Indian Rupee (₹) currency style.
 * Example: 100000 -> ₹1,00,000
 */
export function formatCurrency(
  value: number,
  options: { currency?: string; locale?: string; maximumFractionDigits?: number } = {}
): string {
  const {
    currency = "INR",
    locale = "en-IN",
    maximumFractionDigits = 0,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits,
  }).format(value);
}

/**
 * Formats a number in Indian text representation (Lakhs, Crores).
 * Example: 1500000 -> 15 Lakh
 */
export function formatToIndianWords(value: number): string {
  if (value >= 10000000) {
    const crores = value / 10000000;
    return `${crores % 1 === 0 ? crores : crores.toFixed(2)} Crore`;
  }
  if (value >= 100000) {
    const lakhs = value / 100000;
    return `${lakhs % 1 === 0 ? lakhs : lakhs.toFixed(2)} Lakh`;
  }
  if (value >= 1000) {
    const thousands = value / 1000;
    return `${thousands % 1 === 0 ? thousands : thousands.toFixed(2)}k`;
  }
  return value.toString();
}

/**
 * Formats a given number of months into Years and Months.
 * Example: 26 -> 2 Years 2 Months
 */
export function formatTenure(months: number): string {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const yearStr = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
  const monthStr = remainingMonths > 0 ? `${remainingMonths} Month${remainingMonths > 1 ? "s" : ""}` : "";

  if (yearStr && monthStr) {
    return `${yearStr} ${monthStr}`;
  }
  return yearStr || monthStr || "0 Months";
}
