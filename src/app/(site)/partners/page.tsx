import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Building2, Globe, TrendingUp, Award, Users } from "lucide-react";

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-[#1e3a8a]/30 text-[#1e3a8a]">
              Strategic Partnerships
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] bg-clip-text text-transparent">
                Partner Network
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We collaborate with leading financial institutions, technology providers, and 
              professional service firms to deliver comprehensive wealth management solutions 
              to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Partnership Categories</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Strategic alliances that enhance our service delivery
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Custody Partners",
                description: "Leading global custodians ensuring the safety and security of client assets",
                partners: ["HDFC Bank", "ICICI Bank", "Kotak Mahindra Bank"]
              },
              {
                icon: Building2,
                title: "Product Partners",
                description: "Top-tier fund managers and investment product providers",
                partners: ["Axis Mutual Fund", "SBI Mutual Fund", "Nippon India MF"]
              },
              {
                icon: Globe,
                title: "Technology Partners",
                description: "Cutting-edge fintech solutions for portfolio management and reporting",
                partners: ["Bloomberg Terminal", "Refinitiv Eikon", "FactSet"]
              },
              {
                icon: TrendingUp,
                title: "Research Partners",
                description: "Independent research providers for enhanced investment insights",
                partners: ["CRISIL Research", "ICRA Analytics", "Morningstar"]
              },
              {
                icon: Award,
                title: "Professional Services",
                description: "Expert legal, tax, and compliance advisory services",
                partners: ["Deloitte", "PwC", "KPMG"]
              },
              {
                icon: Users,
                title: "Distribution Partners",
                description: "Certified financial planners and wealth advisors network",
                partners: ["Certified Partner Network", "Regional Advisors", "IFA Partners"]
              }
            ].map((category, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="h-12 w-12 mb-4 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{category.description}</CardDescription>
                  <div className="space-y-2">
                    {category.partners.map((partner, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2 mb-2">
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Partners */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Key Strategic Partners</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Long-term partnerships that add value to our client relationships
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                name: "HDFC Bank Limited",
                type: "Primary Custodian",
                relationship: "Since 2010",
                description: "India's leading private sector bank providing comprehensive custody, clearing, and settlement services. Their robust infrastructure and regulatory compliance ensure the highest level of asset protection for our clients.",
                services: ["Asset Custody", "Trade Settlement", "Corporate Actions", "Regulatory Reporting"]
              },
              {
                name: "Bloomberg Terminal",
                type: "Technology Provider",
                relationship: "Since 2008",
                description: "Industry-leading financial data and analytics platform providing real-time market data, research, and portfolio management tools. Essential for our investment decision-making process.",
                services: ["Market Data", "Portfolio Analytics", "Risk Management", "Research Platform"]
              },
              {
                name: "CRISIL Limited",
                type: "Research Partner",
                relationship: "Since 2012",
                description: "India's foremost provider of credit ratings, research, and policy advisory services. Their independent research and analytics enhance our investment research capabilities.",
                services: ["Credit Research", "Market Analysis", "ESG Ratings", "Policy Advisory"]
              }
            ].map((partner, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{partner.name}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-[#1e3a8a] text-white">{partner.type}</Badge>
                        <Badge variant="outline" className="border-[#d97706]/30 text-[#d97706]">
                          {partner.relationship}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{partner.description}</CardDescription>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Partnership Benefits</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              How our strategic partnerships benefit our clients
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Enhanced Security",
                description: "Top-tier custody and security protocols through established financial institutions"
              },
              {
                title: "Broader Access",
                description: "Access to exclusive investment products and opportunities through our network"
              },
              {
                title: "Cost Efficiency",
                description: "Competitive pricing and fee structures through strategic partner relationships"
              },
              {
                title: "Innovation",
                description: "Latest technology and analytical tools through our fintech partnerships"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Become a Partner</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Are you a financial services provider, technology company, or professional service firm 
            interested in partnering with Growth Capital? We're always looking for strategic partnerships 
            that can add value to our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Partnership Inquiry
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1e3a8a] transition-colors">
              partnerships@growthcapital.com
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
