"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Search, HelpCircle, Shield, CreditCard, TrendingUp, Users } from "lucide-react";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All FAQs", icon: HelpCircle },
    { id: "general", label: "General", icon: HelpCircle },
    { id: "accounts", label: "Accounts & KYC", icon: Users },
    { id: "investments", label: "Investments", icon: TrendingUp },
    { id: "fees", label: "Fees & Pricing", icon: CreditCard },
    { id: "security", label: "Security", icon: Shield }
  ];

  const faqs = [
    {
      category: "general",
      question: "What is Growth Capital's investment philosophy?",
      answer: "Our investment philosophy is built on three core principles: disciplined asset allocation based on long-term fundamentals, active risk management to protect capital during volatile periods, and transparent reporting to keep clients fully informed."
    },
    {
      category: "accounts",
      question: "What documents are required for KYC?",
      answer: "For KYC compliance, you'll need: PAN card, Aadhaar card, address proof, income proof, bank account details, and photographs. For NRIs, additional documents may be required."
    },
    {
      category: "investments",
      question: "What investment strategies do you offer?",
      answer: "We offer multiple strategies including Conservative Growth, Balanced Growth, Aggressive Growth, Alternative Investments, and customized strategies based on your specific goals."
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-[#1e3a8a]/30 text-[#1e3a8a]">
              Help Center
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about our services, investment process, 
              and account management. Can't find what you're looking for? Contact our team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-[#1e3a8a] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 dark:text-slate-400">
                  No FAQs found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ faq }: { faq: { question: string; answer: string; category: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border-0 bg-white/50 backdrop-blur-sm">
      <CardHeader 
        className="cursor-pointer hover:bg-slate-50/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
          <ChevronDown 
            className={`h-5 w-5 text-slate-400 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`} 
          />
        </div>
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-0">
          <CardDescription className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {faq.answer}
          </CardDescription>
        </CardContent>
      )}
    </Card>
  );
}
