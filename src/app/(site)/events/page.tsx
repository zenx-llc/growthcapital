import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Video, Coffee } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-[#1e3a8a]/30 text-[#1e3a8a]">
              Learning & Networking
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Events &{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] bg-clip-text text-transparent">
                Webinars
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Join our exclusive events, webinars, and educational sessions designed to enhance 
              your investment knowledge and connect with like-minded investors.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Upcoming Events</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Register for our upcoming educational sessions and networking events
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {[
              {
                title: "Market Outlook 2024: Navigating Global Uncertainties",
                type: "Webinar",
                date: "March 15, 2024",
                time: "6:00 PM - 7:30 PM IST",
                location: "Online",
                speakers: ["Rajesh Kumar, CIO", "Priya Sharma, Portfolio Manager"],
                description: "Join our investment experts as they discuss global market trends, opportunities in emerging markets, and portfolio positioning strategies for 2024.",
                seats: "150 seats available",
                icon: Video
              },
              {
                title: "Alternative Investments: Beyond Traditional Assets",
                type: "Workshop",
                date: "March 28, 2024",
                time: "10:00 AM - 4:00 PM IST",
                location: "Growth Capital Office, Mumbai",
                speakers: ["Arjun Patel, Head of Alternatives"],
                description: "Deep dive into alternative investment strategies including REITs, AIFs, and private equity. Interactive session with Q&A and networking lunch.",
                seats: "25 seats available",
                icon: Users
              },
              {
                title: "Tax Planning for HNIs: Strategies for FY 2024-25",
                type: "Seminar",
                date: "April 10, 2024",
                time: "3:00 PM - 5:00 PM IST",
                location: "Hybrid (Online + Delhi Office)",
                speakers: ["CA Neha Gupta, Tax Advisor"],
                description: "Comprehensive tax planning strategies for high-net-worth individuals, including recent regulatory changes and optimization techniques.",
                seats: "75 seats available",
                icon: Coffee
              }
            ].map((event, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                        <event.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-[#1e3a8a] text-white">{event.type}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{event.description}</CardDescription>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Speakers:</h4>
                    <div className="space-y-1">
                      {event.speakers.map((speaker, idx) => (
                        <div key={idx} className="text-sm text-slate-600 dark:text-slate-400">
                          {speaker}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#d97706] font-medium">{event.seats}</span>
                    <Button className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Past Events</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Catch up on recordings and resources from our previous sessions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: "ESG Investing: The Future of Sustainable Finance",
                date: "February 2024",
                type: "Webinar",
                attendees: "200+ attendees",
                recording: true
              },
              {
                title: "Portfolio Rebalancing in Volatile Markets",
                date: "January 2024",
                type: "Workshop",
                attendees: "50+ attendees",
                recording: true
              },
              {
                title: "Crypto & Digital Assets: Risk vs Opportunity",
                date: "December 2023",
                type: "Panel Discussion",
                attendees: "300+ attendees",
                recording: true
              },
              {
                title: "Retirement Planning for Millennials",
                date: "November 2023",
                type: "Seminar",
                attendees: "150+ attendees",
                recording: true
              },
              {
                title: "Global Market Outlook Q4 2023",
                date: "October 2023",
                type: "Webinar",
                attendees: "250+ attendees",
                recording: true
              },
              {
                title: "Family Office Best Practices",
                date: "September 2023",
                type: "Exclusive Event",
                attendees: "30+ attendees",
                recording: false
              }
            ].map((event, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{event.type}</Badge>
                    {event.recording && (
                      <Badge className="bg-[#d97706] text-white text-xs">Recording Available</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {event.date} • {event.attendees}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant={event.recording ? "default" : "outline"} 
                    className={event.recording ? "bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white w-full" : "w-full"}
                    disabled={!event.recording}
                  >
                    {event.recording ? "Watch Recording" : "Private Event"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Newsletter */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Updated</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Subscribe to our event newsletter to receive early access to registration 
              and exclusive invitations to our premium events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
