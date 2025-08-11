import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, Users, TrendingUp, Heart, Coffee, Laptop } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-[#1e3a8a]/30 text-[#1e3a8a]">
              Join Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Build Your Career with{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] bg-clip-text text-transparent">
                Growth Capital
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Join a team of passionate professionals dedicated to delivering exceptional 
              investment solutions. We offer a collaborative environment where innovation 
              thrives and careers flourish.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Join Growth Capital?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Discover what makes Growth Capital an exceptional place to build your career
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: TrendingUp,
                title: "Career Growth",
                description: "Clear advancement paths with mentorship and professional development opportunities"
              },
              {
                icon: Users,
                title: "Collaborative Culture",
                description: "Work with talented professionals in a supportive, team-oriented environment"
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description: "Flexible schedules and wellness programs to maintain a healthy work-life balance"
              },
              {
                icon: Laptop,
                title: "Cutting-Edge Technology",
                description: "Access to the latest financial technology and analytical tools"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm text-center">
                <CardHeader>
                  <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Open Positions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Explore current opportunities to join our growing team
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: "Senior Portfolio Manager",
                department: "Investment Management",
                location: "Mumbai",
                type: "Full-time",
                description: "Lead portfolio construction and management for high-net-worth clients. Requires CFA and 8+ years experience."
              },
              {
                title: "Investment Research Analyst",
                department: "Research",
                location: "Delhi",
                type: "Full-time",
                description: "Conduct equity and fixed income research to support investment decisions. Strong analytical skills required."
              },
              {
                title: "Client Relationship Manager",
                department: "Client Services",
                location: "Bangalore",
                type: "Full-time",
                description: "Manage relationships with UHNI clients. Excellent communication skills and wealth management experience preferred."
              }
            ].map((job, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-[#1e3a8a]/30 text-[#1e3a8a]">
                          <Briefcase className="h-3 w-3 mr-1" />
                          {job.department}
                        </Badge>
                        <Badge variant="outline" className="border-[#d97706]/30 text-[#d97706]">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{job.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
