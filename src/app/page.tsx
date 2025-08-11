import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Users, BarChart3, Target, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-800/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-blue-900/20 blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
        
        <div className="container relative mx-auto px-4 py-24 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative">
                  <div className="h-2 w-2 bg-[#d97706] rounded-full"></div>
                  <div className="absolute inset-0 h-2 w-2 bg-[#d97706] rounded-full animate-pulse-ring"></div>
                </div>
                <Badge variant="outline" className="border-[#d97706]/30 text-[#d97706] bg-[#d97706]/5 backdrop-blur-sm">
                  ✨ Trusted by 500+ investors
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-300">
                  Institutional-grade
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#d97706] bg-clip-text text-transparent">
                  wealth management
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-300">
                  for ambitious investors
                </span>
              </h1>
              
              <p className="mt-8 text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Disciplined strategies, active risk management, transparent reporting. 
                Partner with us to build enduring wealth across market cycles with institutional-grade expertise.
              </p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="group relative h-14 px-8 gradient-navy text-white border-0 shadow-lg shadow-blue-800/25 hover:shadow-xl hover:shadow-blue-800/40 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 font-semibold">Book a Consultation</span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#1e40af] to-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </Link>
                <Link href="/solutions/wealth-management">
                  <Button variant="outline" size="lg" className="h-14 px-8 border-2 border-slate-300 hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="text-2xl font-bold text-[#d97706] group-hover:scale-110 transition-transform">₹25B+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">AUM</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-[#d97706] group-hover:scale-110 transition-transform">15+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Years</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-[#d97706] group-hover:scale-110 transition-transform">98%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Retention</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:h-[600px] animate-slide-in-left">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3a8a] to-[#d97706] rounded-2xl blur-lg opacity-20 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
        <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Financial growth and investment visualization"
                  fill
                  className="object-cover"
          priority
        />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating cards */}
                <div className="absolute top-6 right-6 glass rounded-xl p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-amber-400" />
                    <div>
                      <div className="text-sm font-semibold">Portfolio Growth</div>
                      <div className="text-2xl font-bold text-amber-400">+24.8%</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 glass rounded-xl p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold">Risk Score</div>
                      <div className="text-lg font-bold text-blue-400">Low-Medium</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d97706] lg:text-4xl">₹25B+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d97706] lg:text-4xl">15+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d97706] lg:text-4xl">500+</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d97706] lg:text-4xl">98%</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1e3a8a]/10 px-4 py-2 text-sm font-medium text-[#1e3a8a] mb-6">
              <BarChart3 className="h-4 w-4" />
              Our Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-300">
              Comprehensive Wealth Solutions
            </h2>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              From portfolio management to alternative investments, we offer institutional-grade strategies tailored to your goals and risk profile.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] shadow-lg">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] opacity-20 blur"></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#1e3a8a] transition-colors">Wealth Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base text-slate-600 leading-relaxed mb-6">
                  Bespoke multi-asset portfolios with active risk controls and tax-efficient implementation for growing your wealth systematically across market cycles.
                </CardDescription>
                <Link href="/solutions/wealth-management" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a] hover:text-[#d97706] transition-colors">
                  <span>Learn more</span>
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] shadow-lg">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] opacity-20 blur"></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#1e3a8a] transition-colors">Portfolio Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base text-slate-600 leading-relaxed mb-6">
                  Core-satellite strategies with disciplined rebalancing, benchmark-aware allocation, and transparent performance reporting.
                </CardDescription>
                <Link href="/solutions/portfolio-management" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a] hover:text-[#d97706] transition-colors">
                  <span>Learn more</span>
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] shadow-lg">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] opacity-20 blur"></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#1e3a8a] transition-colors">Alternative Investments</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base text-slate-600 leading-relaxed mb-6">
                  Access to AIF, PE/VC, private credit, and real assets with institutional-grade due diligence and risk assessment.
                </CardDescription>
                <Link href="/solutions/alternative-investments" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a] hover:text-[#d97706] transition-colors">
                  <span>Learn more</span>
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] opacity-20 blur"></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#1e3a8a] transition-colors">Risk Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base text-slate-600 leading-relaxed mb-6">
                  Comprehensive risk assessment, hedging strategies, and downside protection to preserve capital through market volatility.
                </CardDescription>
                <Link href="/solutions/retirement-tax" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a] hover:text-[#d97706] transition-colors">
                  <span>Learn more</span>
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] opacity-20 blur"></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#1e3a8a] transition-colors">Family Office Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base text-slate-600 leading-relaxed mb-6">
                  Dedicated relationship management, consolidated reporting, and governance frameworks for ultra-high-net-worth families.
                </CardDescription>
                <Link href="/who-we-serve/family-offices" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a] hover:text-[#d97706] transition-colors">
                  <span>Learn more</span>
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#d97706] opacity-20 blur"></div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#1e3a8a] transition-colors">Tax & Estate Planning</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base text-slate-600 leading-relaxed mb-6">
                  Strategic tax optimization, succession planning, and estate structuring to maximize wealth transfer efficiency.
                </CardDescription>
                <Link href="/solutions/retirement-tax" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a] hover:text-[#d97706] transition-colors">
                  <span>Learn more</span>
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900/50 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Investment Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A disciplined, transparent approach to growing and protecting your wealth
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="relative lg:h-[400px]">
            <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Investment planning and strategy meeting"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a] text-sm font-medium text-white">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Discovery & Goal Setting</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Comprehensive assessment of your financial situation, risk tolerance, and long-term objectives.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a] text-sm font-medium text-white">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Strategic Asset Allocation</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Design optimal portfolio mix based on your goals, time horizon, and market outlook.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a] text-sm font-medium text-white">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Implementation & Execution</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Deploy capital efficiently across asset classes with best-execution practices and cost optimization.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a] text-sm font-medium text-white">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Monitoring & Rebalancing</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Continuous performance tracking with systematic rebalancing to maintain target allocations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a] text-sm font-medium text-white">
                  5
                </div>
                <div>
                  <h3 className="font-semibold">Regular Review & Optimization</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Quarterly reviews and strategy adjustments based on life changes and market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Trusted by successful investors and families across the globe
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg">
                  &ldquo;Growth Capital&rsquo;s disciplined approach and transparent reporting have been instrumental in preserving and growing our family wealth through volatile markets.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <div className="font-semibold">Rajesh Sharma</div>
                    <div className="text-sm text-muted-foreground">Family Office Principal</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg">
                  &ldquo;The alternative investment opportunities and due diligence process have exceeded our expectations. Truly institutional-grade service.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <div className="font-semibold">Priya Mehta</div>
                    <div className="text-sm text-muted-foreground">Startup Founder</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg">
                  &ldquo;Professional, responsive, and results-oriented. Growth Capital has been an invaluable partner in our wealth management journey.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <div className="font-semibold">Arjun Patel</div>
                    <div className="text-sm text-muted-foreground">NRI Investor</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-navy-gold"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium mb-8 backdrop-blur-sm">
              <Target className="h-4 w-4" />
              Start Your Journey
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Ready to Start Your
              <br />
              <span className="bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                Wealth Journey?
              </span>
            </h2>
            
            <p className="mx-auto max-w-2xl text-xl leading-relaxed opacity-90 mb-12">
              Schedule a confidential consultation to discuss your investment goals and learn how our institutional-grade approach can transform your financial future.
            </p>
            
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button size="lg" className="group h-16 px-10 bg-white text-[#1e3a8a] hover:bg-amber-50 shadow-2xl border-0 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  <span className="mr-2">Book a Consultation</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </Link>
              <Link href="/performance">
                <Button size="lg" variant="outline" className="h-16 px-10 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg font-semibold transition-all duration-300 hover:scale-105">
                  View Performance
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Shield className="h-8 w-8" />
                </div>
                <div className="font-semibold">Secure & Regulated</div>
                <div className="text-sm opacity-80 mt-1">SEBI registered and compliant</div>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div className="font-semibold">Proven Track Record</div>
                <div className="text-sm opacity-80 mt-1">15+ years of consistent returns</div>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Users className="h-8 w-8" />
                </div>
                <div className="font-semibold">Dedicated Service</div>
                <div className="text-sm opacity-80 mt-1">Personal relationship managers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
