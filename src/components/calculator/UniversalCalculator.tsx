"use client";

import React, { useState, useEffect } from "react";
import { calculateEMI } from "@/lib/calculations/emi";
import { LoanInputForm } from "@/components/calculator/LoanInputForm";
import { AmortizationTable } from "@/components/calculator/AmortizationTable";
import { ScenarioComparisonTable } from "@/components/calculator/ScenarioComparisonTable";
import { SummaryCard } from "@/components/calculator/SummaryCard";
import { formatCurrency, formatTenure } from "@/lib/formatters";
import { ComparisonScenario } from "@/types";
import dynamic from "next/dynamic";
import html2canvas from "html2canvas";

const BreakdownPieChart = dynamic(() => import("@/components/calculator/BreakdownPieChart"), { ssr: false });
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { exportToPDF, exportToCSV } from "@/lib/export";

export default function UniversalCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [interest, setInterest] = useState(8.5);
  const [tenure, setTenure] = useState(240); // 20 years in months
  const [prepaymentAmount, setPrepaymentAmount] = useState(0);
  const [prepaymentType, setPrepaymentType] = useState<"one-time" | "monthly">("one-time");
  const [prepaymentMonth, setPrepaymentMonth] = useState(1);
  const [result, setResult] = useState(() => calculateEMI(principal, interest, tenure, prepaymentAmount, prepaymentType, prepaymentMonth));
  const [scenarios, setScenarios] = useState<ComparisonScenario[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("emi-scenarios");
    if (saved) {
      try {
        setScenarios(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse scenarios", e);
      }
    }
  }, []);

  const saveScenario = () => {
    if (scenarios.length >= 5) {
      alert("You can compare up to 5 scenarios. Please remove one first.");
      return;
    }
    const newScenario: ComparisonScenario = {
      id: Date.now().toString(),
      principal,
      interestRate: interest,
      tenureMonths: tenure,
      emi: result.emi,
      totalInterest: result.totalInterest,
      totalPayment: result.totalPayment,
      prepaymentAmount: prepaymentAmount > 0 ? prepaymentAmount : undefined,
      prepaymentType: prepaymentAmount > 0 ? prepaymentType : undefined,
      prepaymentMonth: prepaymentAmount > 0 ? prepaymentMonth : undefined,
    };
    const updated = [...scenarios, newScenario];
    setScenarios(updated);
    localStorage.setItem("emi-scenarios", JSON.stringify(updated));
  };

  const removeScenario = (id: string) => {
    const updated = scenarios.filter((s) => s.id !== id);
    setScenarios(updated);
    localStorage.setItem("emi-scenarios", JSON.stringify(updated));
  };

  const handleExportPNG = async () => {
    const element = document.getElementById("summary-card");
    if (!element) return;
    try {
      const canvas = await html2canvas(element, { scale: 2, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "emi-summary.png";
      link.click();
    } catch (e) {
      console.error("Failed to export PNG", e);
    }
  };

  const handleCopySummary = () => {
    const text = `EMI Calculator Summary
-------------------------
Loan Amount: ${formatCurrency(principal)}
Interest Rate: ${interest}% p.a.
Tenure: ${formatTenure(tenure)}
-------------------------
Monthly EMI: ${formatCurrency(result.emi)}
Total Interest: ${formatCurrency(result.totalInterest)}
Total Payment: ${formatCurrency(result.totalPayment)}
-------------------------
Calculated via emicalculatorpro.alfo.online`;

    navigator.clipboard.writeText(text).then(() => {
      alert("Summary copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  useEffect(() => {
    setResult(calculateEMI(principal, interest, tenure, prepaymentAmount, prepaymentType, prepaymentMonth));
  }, [principal, interest, tenure, prepaymentAmount, prepaymentType, prepaymentMonth]);

  const handleValuesChange = (
    p: number,
    i: number,
    t: number,
    pAmt: number = 0,
    pType: "one-time" | "monthly" = "one-time",
    pMonth: number = 1
  ) => {
    setPrincipal(p);
    setInterest(i);
    setTenure(t);
    setPrepaymentAmount(pAmt);
    setPrepaymentType(pType);
    setPrepaymentMonth(pMonth);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Calculate EMI</CardTitle>
            <CardDescription>Adjust the sliders to estimate your monthly payment.</CardDescription>
          </CardHeader>
          <CardContent>
            <LoanInputForm
              initialPrincipal={principal}
              initialInterest={interest}
              initialTenure={tenure}
              onValuesChange={handleValuesChange}
            />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-7 space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Monthly EMI</CardDescription>
              <CardTitle className="text-2xl text-primary">{formatCurrency(result.emi)}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Interest</CardDescription>
              <CardTitle className="text-xl">{formatCurrency(result.totalInterest)}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Payment</CardDescription>
              <CardTitle className="text-xl">{formatCurrency(result.totalPayment)}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {prepaymentAmount > 0 && result.originalTotalInterest && (
          <div className="grid gap-4 md:grid-cols-2 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
            <div>
              <p className="text-sm text-green-700 dark:text-green-400 font-medium">Interest Saved</p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                {formatCurrency(result.originalTotalInterest - result.totalInterest)}
              </p>
            </div>
            <div>
              <p className="text-sm text-green-700 dark:text-green-400 font-medium">Time Saved</p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                {result.actualTenureMonths !== undefined ? tenure - result.actualTenureMonths : 0} Months
              </p>
            </div>
          </div>
        )}

        <Tabs defaultValue="chart" className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="chart">Breakdown</TabsTrigger>
              <TabsTrigger value="schedule">Amortization</TabsTrigger>
            </TabsList>
            <div className="flex gap-2 flex-wrap justify-end">
              <Button variant="default" size="sm" onClick={saveScenario}>
                + Compare
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportPNG}>
                <Download className="mr-2 h-4 w-4" /> PNG
              </Button>
              <Button variant="outline" size="sm" onClick={handleCopySummary}>
                Copy Text
              </Button>
              <Button variant="outline" size="sm" onClick={() => exportToCSV(result)}>
                <Download className="mr-2 h-4 w-4" /> CSV
              </Button>
              <Button variant="outline" size="sm" onClick={() => exportToPDF(result)}>
                <Download className="mr-2 h-4 w-4" /> PDF
              </Button>
            </div>
          </div>

          <TabsContent value="chart" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <BreakdownPieChart result={result} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <AmortizationTable schedule={result.amortizationSchedule} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {scenarios.length > 0 && (
          <ScenarioComparisonTable scenarios={scenarios} onRemove={removeScenario} />
        )}

        {/* Hidden Summary Card for PNG export */}
        <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
          <SummaryCard principal={principal} interest={interest} tenure={tenure} result={result} />
        </div>
      </div>
    </div>
  );
}
