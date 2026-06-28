"use client";

import React, { useState, useEffect } from "react";
import { calculateEMI } from "@/lib/calculations/emi";
import { LoanInputForm } from "@/components/calculator/LoanInputForm";
import { AmortizationTable } from "@/components/calculator/AmortizationTable";
import { formatCurrency } from "@/lib/formatters";
import dynamic from "next/dynamic";

const BreakdownPieChart = dynamic(
  () => import("@/components/calculator/BreakdownPieChart"),
  { ssr: false },
);
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { exportToPDF, exportToCSV } from "@/lib/export";

interface SeoCalculatorProps {
  initialPrincipal: number;
  initialInterest: number;
  initialTenure: number;
}

export function SeoCalculator({
  initialPrincipal,
  initialInterest,
  initialTenure,
}: SeoCalculatorProps) {
  const [principal, setPrincipal] = useState(initialPrincipal);
  const [interest, setInterest] = useState(initialInterest);
  const [tenure, setTenure] = useState(initialTenure);
  const [result, setResult] = useState(() =>
    calculateEMI(principal, interest, tenure),
  );

  useEffect(() => {
    setResult(calculateEMI(principal, interest, tenure));
  }, [principal, interest, tenure]);

  const handleValuesChange = (p: number, i: number, t: number) => {
    setPrincipal(p);
    setInterest(i);
    setTenure(t);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Calculate EMI</CardTitle>
            <CardDescription>
              Adjust the sliders to estimate your monthly payment.
            </CardDescription>
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
              <CardTitle className="text-2xl text-primary">
                {formatCurrency(result.emi)}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Interest</CardDescription>
              <CardTitle className="text-xl">
                {formatCurrency(result.totalInterest)}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Payment</CardDescription>
              <CardTitle className="text-xl">
                {formatCurrency(result.totalPayment)}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="chart" className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="chart">Breakdown</TabsTrigger>
              <TabsTrigger value="schedule">Amortization</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => exportToCSV(result)}
              >
                <Download className="mr-2 h-4 w-4" /> CSV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => exportToPDF(result)}
              >
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
      </div>
    </div>
  );
}
