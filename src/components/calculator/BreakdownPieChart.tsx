"use client";

import React from "react";
import { formatCurrency } from "@/lib/formatters";
import { LoanResult } from "@/types";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface BreakdownPieChartProps {
  result: LoanResult;
}

export default function BreakdownPieChart({ result }: BreakdownPieChartProps) {
  const data = [
    { name: "Principal", value: result.principal, color: "var(--chart-1)" },
    {
      name: "Total Interest",
      value: result.totalInterest,
      color: "var(--chart-2)",
    },
  ];

  return (
    <div className="h-64 w-full" id="pie-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any) => {
              if (typeof value === "number") {
                return formatCurrency(value);
              }
              return String(value);
            }}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid hsl(var(--border))",
              backgroundColor: "hsl(var(--background))",
            }}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
