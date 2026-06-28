import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2canvas from "html2canvas";
import { LoanResult } from "@/types";
import { formatCurrency } from "./formatters";

export async function exportToPDF(
  result: LoanResult,
  chartElementId: string = "pie-chart-container",
  filename: string = "loan-report.pdf",
) {
  const doc = new jsPDF("p", "pt", "a4");
  const margin = 40;
  let yPos = margin;

  // Title
  doc.setFontSize(20);
  doc.text("Loan Calculation Report", margin, yPos);
  yPos += 30;

  // Summary
  doc.setFontSize(12);
  doc.text(
    `Principal Amount: ${formatCurrency(result.principal)}`,
    margin,
    yPos,
  );
  yPos += 20;
  doc.text(`Monthly EMI: ${formatCurrency(result.emi)}`, margin, yPos);
  yPos += 20;
  doc.text(
    `Total Interest: ${formatCurrency(result.totalInterest)}`,
    margin,
    yPos,
  );
  yPos += 20;
  doc.text(
    `Total Payment: ${formatCurrency(result.totalPayment)}`,
    margin,
    yPos,
  );
  yPos += 40;

  // Capture Chart
  const chartElement = document.getElementById(chartElementId);
  if (chartElement) {
    try {
      const canvas = await html2canvas(chartElement, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 400;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Ensure we don't overflow the page
      if (yPos + imgHeight > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        yPos = margin;
      }

      doc.addImage(imgData, "PNG", margin, yPos, imgWidth, imgHeight);
      yPos += imgHeight + 40;
    } catch (e) {
      console.error("Failed to capture chart for PDF", e);
    }
  }

  // Amortization Table
  const tableData = result.amortizationSchedule.map((row) => [
    row.month.toString(),
    formatCurrency(row.principalComponent),
    formatCurrency(row.interestComponent),
    formatCurrency(row.emi),
    formatCurrency(row.balance),
  ]);

  autoTable(doc, {
    startY: yPos,
    head: [["Month", "Principal Paid", "Interest Paid", "EMI", "Balance"]],
    body: tableData,
    margin: { top: margin, right: margin, bottom: margin, left: margin },
    styles: { fontSize: 9 },
    headStyles: { fillColor: [41, 128, 185] },
  });

  doc.save(filename);
}

export function exportToCSV(
  result: LoanResult,
  filename: string = "amortization-schedule.csv",
) {
  const headers = [
    "Month",
    "Principal Paid",
    "Interest Paid",
    "EMI",
    "Balance",
  ];
  const rows = result.amortizationSchedule.map((row) => [
    row.month,
    row.principalComponent.toFixed(2),
    row.interestComponent.toFixed(2),
    row.emi.toFixed(2),
    row.balance.toFixed(2),
  ]);

  const csvContent = [headers.join(","), ...rows.map((e) => e.join(","))].join(
    "\n",
  );

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
