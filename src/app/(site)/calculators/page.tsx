"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, PiggyBank, Target, DollarSign } from "lucide-react";

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState("sip");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-[#1e3a8a]/30 text-[#1e3a8a]">
              Financial Tools
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Investment{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] bg-clip-text text-transparent">
                Calculators
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Plan your financial future with our comprehensive suite of investment calculators. 
              Make informed decisions about SIPs, retirement planning, and goal-based investments.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Navigation */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: "sip", label: "SIP Calculator", icon: TrendingUp },
              { id: "retirement", label: "Retirement Planner", icon: PiggyBank },
              { id: "goal", label: "Goal Planning", icon: Target },
              { id: "swp", label: "SWP Calculator", icon: DollarSign }
            ].map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCalculator === calc.id
                    ? "bg-[#1e3a8a] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <calc.icon className="h-4 w-4" />
                {calc.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {activeCalculator === "sip" && <SIPCalculator />}
            {activeCalculator === "retirement" && <RetirementCalculator />}
            {activeCalculator === "goal" && <GoalCalculator />}
            {activeCalculator === "swp" && <SWPCalculator />}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-sm text-slate-600 dark:text-slate-400">
            <p className="mb-2">
              <strong>Disclaimer:</strong> These calculators are for illustrative purposes only and do not constitute investment advice.
            </p>
            <p>
              Past performance is not indicative of future results. Please consult with a financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SIPCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState("10000");
  const [years, setYears] = useState("10");
  const [expectedReturn, setExpectedReturn] = useState("12");

  const calculateSIP = () => {
    const P = parseFloat(monthlyAmount);
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseFloat(years) * 12;
    
    const futureValue = P * (((1 + r) ** n - 1) / r) * (1 + r);
    const totalInvestment = P * n;
    const gains = futureValue - totalInvestment;
    
    return { futureValue, totalInvestment, gains };
  };

  const result = calculateSIP();

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card className="border-0 bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-[#1e3a8a]" />
            SIP Calculator
          </CardTitle>
          <CardDescription>
            Calculate the future value of your Systematic Investment Plan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Monthly Investment (₹)</label>
            <input
              type="number"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              placeholder="10000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Investment Period (Years)</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              placeholder="10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Expected Annual Return (%)</label>
            <input
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              placeholder="12"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Investment Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-[#1e3a8a]/10 to-[#d97706]/10 rounded-lg">
            <div className="text-sm text-slate-600 dark:text-slate-400">Future Value</div>
            <div className="text-3xl font-bold text-[#1e3a8a]">
              ₹{result.futureValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="text-xs text-slate-600 dark:text-slate-400">Total Investment</div>
              <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                ₹{result.totalInvestment.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="text-xs text-slate-600 dark:text-slate-400">Total Gains</div>
              <div className="text-lg font-semibold text-[#d97706]">
                ₹{result.gains.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white">
            Start SIP Investment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function RetirementCalculator() {
  return (
    <div className="text-center py-12">
      <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
        <PiggyBank className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4">Retirement Planning Calculator</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
        Plan your retirement with our comprehensive calculator. Input your current age, 
        retirement age, current savings, and expected lifestyle to get a detailed retirement plan.
      </p>
      <Button className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white">
        Coming Soon
      </Button>
    </div>
  );
}

function GoalCalculator() {
  return (
    <div className="text-center py-12">
      <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
        <Target className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4">Goal-Based Investment Calculator</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
        Calculate how much you need to invest to achieve specific financial goals like 
        buying a house, child's education, or dream vacation.
      </p>
      <Button className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white">
        Coming Soon
      </Button>
    </div>
  );
}

function SWPCalculator() {
  return (
    <div className="text-center py-12">
      <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
        <DollarSign className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4">Systematic Withdrawal Plan Calculator</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
        Plan your retirement income with SWP calculator. Determine how long your 
        investments will last based on your withdrawal amount and expected returns.
      </p>
      <Button className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white">
        Coming Soon
      </Button>
    </div>
  );
}
