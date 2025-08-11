import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Shield, Award, TrendingUp, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-[#1e3a8a]/30 text-[#1e3a8a]">
              Established 2008
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] bg-clip-text text-transparent">
                Growth Capital
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We partner with ambitious investors to build enduring wealth through disciplined strategy, 
              rigorous risk management, and transparent reporting. Our institutional-grade approach serves 
              high-net-worth individuals, family offices, and institutions across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  Founded in 2008 by veteran financial professionals, Growth Capital was established with a 
                  simple yet powerful vision: to democratize institutional-grade investment management for 
                  ambitious investors seeking long-term wealth creation.
                </p>
                <p>
                  Our founders recognized a gap in the market where sophisticated investors needed access to 
                  the same caliber of investment strategies, risk management, and reporting that large 
                  institutions enjoyed, but with the personalized service and attention that only a 
                  dedicated wealth management firm could provide.
                </p>
                <p>
                  Today, with over ₹25 billion in assets under management, we continue to uphold our founding 
                  principles of transparency, discipline, and unwavering commitment to our clients' financial success.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office building representing Growth Capital"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Integrity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We operate with the highest ethical standards, ensuring complete transparency 
                  in all our dealings and maintaining fiduciary responsibility to our clients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We strive for excellence in every aspect of our service, from investment 
                  research and portfolio construction to client communication and reporting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Partnership</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We view our clients as partners in their wealth creation journey, building 
                  long-term relationships based on trust, communication, and shared success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Track Record</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Delivering consistent results for over 15 years
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d97706] mb-2">₹25B+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d97706] mb-2">500+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d97706] mb-2">98%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d97706] mb-2">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Experienced professionals dedicated to your financial success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                role: "Chief Executive Officer",
                credentials: "CFA, MBA Finance",
                experience: "25+ years in investment management"
              },
              {
                name: "Priya Sharma",
                role: "Chief Investment Officer", 
                credentials: "CFA, FRM",
                experience: "20+ years in portfolio management"
              },
              {
                name: "Arjun Patel",
                role: "Head of Client Relations",
                credentials: "CFP, MBA",
                experience: "18+ years in wealth management"
              }
            ].map((member, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-[#1e3a8a] font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{member.credentials}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Certifications & Compliance</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Regulated and compliant with the highest industry standards
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, label: "SEBI Registered", desc: "Portfolio Manager" },
              { icon: Shield, label: "ISO 27001", desc: "Information Security" },
              { icon: Globe, label: "GIPS Compliant", desc: "Performance Standards" },
              { icon: TrendingUp, label: "CFA Institute", desc: "Member Firm" }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{cert.label}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


