import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-[#1e3a8a]/30 text-[#1e3a8a]">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Contact{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] bg-clip-text text-transparent">
                Growth Capital
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Ready to start your wealth creation journey? Our experienced team is here to help 
              you achieve your financial goals. Schedule a consultation or reach out to us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#1e3a8a]" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        id="firstName" 
                        className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent" 
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        id="lastName" 
                        className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div>
                    <label htmlFor="investmentAmount" className="block text-sm font-medium mb-2">Investment Amount Range</label>
                    <select 
                      id="investmentAmount" 
                      className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="1-5cr">₹1-5 Crores</option>
                      <option value="5-10cr">₹5-10 Crores</option>
                      <option value="10-25cr">₹10-25 Crores</option>
                      <option value="25cr+">₹25+ Crores</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent" 
                      placeholder="Tell us about your investment goals and any specific requirements..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white h-12">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#1e3a8a]" />
                    Schedule a Consultation
                  </CardTitle>
                  <CardDescription>
                    Book a personalized consultation with our investment experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white h-12 mb-4">
                    Book Online Meeting
                  </Button>
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Available: Monday to Friday, 9 AM - 6 PM
                    </div>
                    <div>• 30-minute initial consultation (Free)</div>
                    <div>• Video call or in-person meeting</div>
                    <div>• Portfolio review and recommendations</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">+91 22 6789 1234</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">contact@growthcapital.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#d97706] flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">+91 98765 43210</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Offices</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Visit us at our conveniently located offices across major cities
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                city: "Mumbai",
                address: "Level 15, Tower A, Peninsula Business Park, Ganpatrao Kadam Marg, Lower Parel",
                phone: "+91 22 6789 1234",
                hours: "Mon-Fri: 9:00 AM - 6:00 PM"
              },
              {
                city: "Delhi NCR",
                address: "3rd Floor, Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana",
                phone: "+91 124 567 8901",
                hours: "Mon-Fri: 9:00 AM - 6:00 PM"
              },
              {
                city: "Bangalore",
                address: "6th Floor, UB City Mall, Vittal Mallya Road, Ashok Nagar, Bengaluru",
                phone: "+91 80 4567 8901",
                hours: "Mon-Fri: 9:00 AM - 6:00 PM"
              }
            ].map((office, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#1e3a8a]" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-medium mb-1">Address</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{office.address}</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Phone</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{office.phone}</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Hours</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{office.hours}</div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            For urgent portfolio matters or after-hours support, our dedicated 
            client service team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#1e3a8a] to-[#d97706] text-white">
              Emergency Hotline: +91 22 6789 0000
            </Button>
            <Button size="lg" variant="outline">
              Client Portal Login
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
