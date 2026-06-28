import React from "react";
import { ComparisonScenario } from "@/types";
import { formatCurrency, formatTenure } from "@/lib/formatters";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface ScenarioComparisonTableProps {
  scenarios: ComparisonScenario[];
  onRemove: (id: string) => void;
}

export function ScenarioComparisonTable({
  scenarios,
  onRemove,
}: ScenarioComparisonTableProps) {
  if (scenarios.length === 0) return null;

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-xl font-bold tracking-tight">Scenario Comparison</h3>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Loan Amount</TableHead>
              <TableHead>Interest</TableHead>
              <TableHead>Tenure</TableHead>
              <TableHead>Prepayment</TableHead>
              <TableHead>EMI</TableHead>
              <TableHead>Total Interest</TableHead>
              <TableHead>Total Payment</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scenarios.map((s) => (
              <TableRow key={s.id}>
                <TableCell className="font-medium">
                  {formatCurrency(s.principal)}
                </TableCell>
                <TableCell>{s.interestRate}%</TableCell>
                <TableCell>{formatTenure(s.tenureMonths)}</TableCell>
                <TableCell>
                  {s.prepaymentAmount && s.prepaymentAmount > 0 ? (
                    <span className="text-xs text-muted-foreground">
                      {formatCurrency(s.prepaymentAmount)} ({s.prepaymentType}{" "}
                      from M{s.prepaymentMonth})
                    </span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell>{formatCurrency(s.emi)}</TableCell>
                <TableCell>{formatCurrency(s.totalInterest)}</TableCell>
                <TableCell>{formatCurrency(s.totalPayment)}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemove(s.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
