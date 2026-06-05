"use client";

import React, { useState } from "react";
import { formatCurrency } from "@/lib/formatters";
import { AmortizationRow } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface AmortizationTableProps {
  schedule: AmortizationRow[];
}

export function AmortizationTable({ schedule }: AmortizationTableProps) {
  const [showAll, setShowAll] = useState(false);

  type YearlySummary = {
    year: number;
    emi: number;
    principalComponent: number;
    interestComponent: number;
    balance: number;
  };

  // Group by year
  const yearlySchedule = schedule.reduce((acc, curr) => {
    const year = Math.ceil(curr.month / 12);
    if (!acc[year]) {
      acc[year] = {
        year,
        emi: 0,
        principalComponent: 0,
        interestComponent: 0,
        balance: curr.balance,
      };
    }
    acc[year].emi += curr.emi;
    acc[year].principalComponent += curr.principalComponent;
    acc[year].interestComponent += curr.interestComponent;
    acc[year].balance = curr.balance; // Balance at the end of the year
    return acc;
  }, {} as Record<number, YearlySummary>);

  const yearlyData: YearlySummary[] = Object.values(yearlySchedule);

  const displayData = showAll ? yearlyData : yearlyData.slice(0, 5);

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead className="text-right">Principal Paid</TableHead>
              <TableHead className="text-right">Interest Paid</TableHead>
              <TableHead className="text-right">Total Payment</TableHead>
              <TableHead className="text-right">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.map((row: YearlySummary) => (
              <TableRow key={row.year}>
                <TableCell className="font-medium">{row.year}</TableCell>
                <TableCell className="text-right">{formatCurrency(row.principalComponent)}</TableCell>
                <TableCell className="text-right">{formatCurrency(row.interestComponent)}</TableCell>
                <TableCell className="text-right">{formatCurrency(row.emi)}</TableCell>
                <TableCell className="text-right">{formatCurrency(row.balance)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {yearlyData.length > 5 && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : `Show All ${yearlyData.length} Years`}
          </Button>
        </div>
      )}
    </div>
  );
}
