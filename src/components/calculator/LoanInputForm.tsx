"use client";

import React, { useState } from "react";
import { formatCurrency, formatTenure } from "@/lib/formatters";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface LoanInputFormProps {
  initialPrincipal?: number;
  initialInterest?: number;
  initialTenure?: number; // In months
  onValuesChange: (
    principal: number,
    interest: number,
    tenure: number,
    prepaymentAmount?: number,
    prepaymentType?: "one-time" | "monthly",
    prepaymentMonth?: number,
  ) => void;
}

import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LoanInputForm({
  initialPrincipal = 500000,
  initialInterest = 8.5,
  initialTenure = 240, // 20 years
  onValuesChange,
}: LoanInputFormProps) {
  const [principal, setPrincipal] = useState(initialPrincipal);
  const [interest, setInterest] = useState(initialInterest);
  const [tenure, setTenure] = useState(initialTenure);

  const [enablePrepayment, setEnablePrepayment] = useState(false);
  const [prepaymentAmount, setPrepaymentAmount] = useState(0);
  const [prepaymentType, setPrepaymentType] = useState<"one-time" | "monthly">(
    "one-time",
  );
  const [prepaymentMonth, setPrepaymentMonth] = useState(1);

  const emitChanges = (
    p: number,
    i: number,
    t: number,
    enabled: boolean,
    amount: number,
    type: "one-time" | "monthly",
    month: number,
  ) => {
    if (enabled && amount > 0) {
      onValuesChange(p, i, t, amount, type, month);
    } else {
      onValuesChange(p, i, t, 0, "one-time", 1);
    }
  };

  const handlePrincipalChange = (val: number) => {
    setPrincipal(val);
    emitChanges(
      val,
      interest,
      tenure,
      enablePrepayment,
      prepaymentAmount,
      prepaymentType,
      prepaymentMonth,
    );
  };

  const handleInterestChange = (val: number) => {
    setInterest(val);
    emitChanges(
      principal,
      val,
      tenure,
      enablePrepayment,
      prepaymentAmount,
      prepaymentType,
      prepaymentMonth,
    );
  };

  const handleTenureChange = (val: number) => {
    setTenure(val);
    emitChanges(
      principal,
      interest,
      val,
      enablePrepayment,
      prepaymentAmount,
      prepaymentType,
      prepaymentMonth,
    );
  };

  const handleEnablePrepaymentChange = (val: boolean) => {
    setEnablePrepayment(val);
    emitChanges(
      principal,
      interest,
      tenure,
      val,
      prepaymentAmount,
      prepaymentType,
      prepaymentMonth,
    );
  };

  const handlePrepaymentAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    const val = value === "" ? 0 : Number(value);
    setPrepaymentAmount(val);
    emitChanges(
      principal,
      interest,
      tenure,
      enablePrepayment,
      val,
      prepaymentType,
      prepaymentMonth,
    );
  };

  const handlePrepaymentTypeChange = (val: "one-time" | "monthly") => {
    setPrepaymentType(val);
    emitChanges(
      principal,
      interest,
      tenure,
      enablePrepayment,
      prepaymentAmount,
      val,
      prepaymentMonth,
    );
  };

  const handlePrepaymentMonthChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    // Allow empty input for backspacing, fallback to 1 only if it's completely cleared/NaN upon evaluation.
    const val = value === "" ? (0 as any) : Number(value);
    setPrepaymentMonth(val);
    emitChanges(
      principal,
      interest,
      tenure,
      enablePrepayment,
      prepaymentAmount,
      prepaymentType,
      val || 1,
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="principal">Loan Amount</Label>
          <span className="font-semibold text-lg text-primary">
            {formatCurrency(principal)}
          </span>
        </div>
        <Slider
          id="principal"
          min={10000}
          max={100000000}
          step={10000}
          value={[principal]}
          onValueChange={(vals: number | readonly number[]) => {
            const v = Array.isArray(vals)
              ? vals[0]
              : ((vals as readonly number[])[0] ?? (vals as number));
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
          <span className="font-semibold text-lg text-primary">
            {interest}%
          </span>
        </div>
        <Slider
          id="interest"
          min={1}
          max={30}
          step={0.1}
          value={[interest]}
          onValueChange={(vals: number | readonly number[]) => {
            const v = Array.isArray(vals)
              ? vals[0]
              : ((vals as readonly number[])[0] ?? (vals as number));
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
          <span className="font-semibold text-lg text-primary">
            {formatTenure(tenure)}
          </span>
        </div>
        <Slider
          id="tenure"
          min={6}
          max={360}
          step={1}
          value={[tenure]}
          onValueChange={(vals: number | readonly number[]) => {
            const v = Array.isArray(vals)
              ? vals[0]
              : ((vals as readonly number[])[0] ?? (vals as number));
            handleTenureChange(v);
          }}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>6 Mo</span>
          <span>30 Yrs</span>
        </div>
      </div>

      <div className="pt-4 border-t space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="enable-prepayment" className="text-base font-medium">
            Extra Prepayment
          </Label>
          <Switch
            id="enable-prepayment"
            checked={enablePrepayment}
            onCheckedChange={handleEnablePrepaymentChange}
          />
        </div>

        {enablePrepayment && (
          <div className="grid gap-4 mt-4 bg-muted/50 p-4 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="prepayment-amount">Prepayment Amount</Label>
              <Input
                id="prepayment-amount"
                type="number"
                value={prepaymentAmount || ""}
                onChange={handlePrepaymentAmountChange}
                placeholder="e.g. 50000"
                min={0}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="prepayment-type">Frequency</Label>
                <Select
                  value={prepaymentType}
                  onValueChange={(val: string | null) => {
                    if (val === "one-time" || val === "monthly") {
                      handlePrepaymentTypeChange(val);
                    }
                  }}
                >
                  <SelectTrigger id="prepayment-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-time">One-time</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prepayment-month">Start Month</Label>
                <Input
                  id="prepayment-month"
                  type="number"
                  value={prepaymentMonth || ""}
                  onChange={handlePrepaymentMonthChange}
                  min={1}
                  max={tenure}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
