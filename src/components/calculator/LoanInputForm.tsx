"use client"

import React, { useState } from "react";
import { formatCurrency, formatTenure } from "@/lib/formatters";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface LoanInputFormProps {
  initialPrincipal?: number;
  initialInterest?: number;
  initialTenure?: number; // In months
  onValuesChange: (principal: number, interest: number, tenure: number) => void;
}

export function LoanInputForm({
  initialPrincipal = 500000,
  initialInterest = 8.5,
  initialTenure = 240, // 20 years
  onValuesChange,
}: LoanInputFormProps) {
  const [principal, setPrincipal] = useState(initialPrincipal);
  const [interest, setInterest] = useState(initialInterest);
  const [tenure, setTenure] = useState(initialTenure);

  const handlePrincipalChange = (val: number) => {
    setPrincipal(val);
    onValuesChange(val, interest, tenure);
  };

  const handleInterestChange = (val: number) => {
    setInterest(val);
    onValuesChange(principal, val, tenure);
  };

  const handleTenureChange = (val: number) => {
    setTenure(val);
    onValuesChange(principal, interest, val);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="principal">Loan Amount</Label>
          <span className="font-semibold text-lg text-primary">{formatCurrency(principal)}</span>
        </div>
        <Slider
          id="principal"
          min={10000}
          max={100000000}
          step={10000}
          value={[principal]}
          onValueChange={(vals: number | readonly number[]) => {
            const v = Array.isArray(vals) ? vals[0] : (vals as readonly number[])[0] ?? (vals as number);
            handlePrincipalChange(v);
          }}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>₹10K</span>
          <span>₹10Cr</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="interest">Interest Rate (p.a.)</Label>
          <span className="font-semibold text-lg text-primary">{interest}%</span>
        </div>
        <Slider
          id="interest"
          min={1}
          max={30}
          step={0.1}
          value={[interest]}
          onValueChange={(vals: number | readonly number[]) => {
            const v = Array.isArray(vals) ? vals[0] : (vals as readonly number[])[0] ?? (vals as number);
            handleInterestChange(v);
          }}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1%</span>
          <span>30%</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="tenure">Loan Tenure</Label>
          <span className="font-semibold text-lg text-primary">{formatTenure(tenure)}</span>
        </div>
        <Slider
          id="tenure"
          min={6}
          max={360}
          step={1}
          value={[tenure]}
          onValueChange={(vals: number | readonly number[]) => {
            const v = Array.isArray(vals) ? vals[0] : (vals as readonly number[])[0] ?? (vals as number);
            handleTenureChange(v);
          }}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>6 Mo</span>
          <span>30 Yrs</span>
        </div>
      </div>
    </div>
  );
}
