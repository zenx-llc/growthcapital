"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

const navItems: { label: string; href?: string; children?: { label: string; href: string }[] }[] = [
  {
    label: "Solutions",
    children: [
      { label: "Wealth Management", href: "/solutions/wealth-management" },
      { label: "Portfolio Management", href: "/solutions/portfolio-management" },
      { label: "Alternative Investments", href: "/solutions/alternative-investments" },
      { label: "Real Estate & REITs", href: "/solutions/real-estate-reits" },
      { label: "Retirement & Tax Planning", href: "/solutions/retirement-tax" },
      { label: "Treasury & Cash", href: "/solutions/treasury-cash" },
    ],
  },
  {
    label: "Who We Serve",
    children: [
      { label: "HNIs & Ultra-HNIs", href: "/who-we-serve/hnis" },
      { label: "Family Offices", href: "/who-we-serve/family-offices" },
      { label: "NRIs / Global", href: "/who-we-serve/nri" },
      { label: "Institutions", href: "/who-we-serve/institutions" },
      { label: "Founders", href: "/who-we-serve/founders" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Performance", href: "/performance" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/20 dark:border-slate-700/20 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-950/80 shadow-lg shadow-slate-900/5">
      <div className="container mx-auto flex h-32 items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center" aria-label="Growth Capital home">
          <Logo className="flex-shrink-0" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <>
                  <button className="inline-flex items-center gap-1 font-medium hover:text-primary">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pointer-events-none absolute left-0 top-full mt-2 w-[280px] rounded-md border bg-popover p-2 opacity-0 shadow-md transition-all group-hover:pointer-events-auto group-hover:opacity-100">
                    <ul className="grid gap-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link href={item.href ?? "#"} className="font-medium hover:text-primary">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/client-portal">
            <Button variant="ghost" className="text-slate-600 hover:text-[#1e3a8a] transition-colors">
              Client Portal
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] hover:from-[#1e40af] hover:to-[#f59e0b] text-white shadow-lg shadow-blue-800/25 hover:shadow-xl hover:shadow-blue-800/40 transition-all duration-300 hover:scale-105">
              Book Consultation
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="ml-auto h-full w-80 bg-background p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <Logo className="scale-75" />
              <Button variant="ghost" onClick={() => setOpen(false)} className="text-slate-600 hover:text-[#1e3a8a]">Close</Button>
            </div>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <details className="group">
                      <summary className="cursor-pointer list-none rounded-md px-2 py-2 font-medium hover:bg-accent hover:text-accent-foreground">
                        <span className="inline-flex items-center gap-2">{item.label} <ChevronDown className="h-4 w-4" /></span>
                      </summary>
                      <ul className="mt-1 pl-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link onClick={() => setOpen(false)} href={child.href} className="block rounded-md px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link onClick={() => setOpen(false)} href={item.href ?? "#"} className="block rounded-md px-2 py-2 font-medium hover:bg-accent hover:text-accent-foreground">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              <Link href="/client-portal" className="flex-1">
                <Button variant="outline" className="w-full">Client Portal</Button>
              </Link>
              <Link href="/contact" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#d97706] hover:from-[#1e40af] hover:to-[#f59e0b] text-white">Book</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


