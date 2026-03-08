"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Facebook,
  Video,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    value: "hello@gp2aus.com",
    action: "Send Email",
    href: "mailto:hello@gp2aus.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri, 9am-6pm AEDT",
    value: "1800 GP2AUS",
    action: "Call Now",
    href: "tel:1800472287",
  },
  {
    icon: Video,
    title: "Book a Consultation",
    description: "30-min video call with our team",
    value: "Free for new inquiries",
    action: "Book Now",
    href: "#consultation",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    country: "",
    stage: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In a real implementation, this would send the data to a server
  }

  return (
    <main className="min-h-screen bg-[#0c4a6e]">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0c4a6e] via-[#075985] to-[#0369a1] relative overflow-hidden">
        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ 
                duration: 2 + (i % 3) * 0.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${10 + (i * 5) % 40}%`,
                left: `${5 + (i * 7) % 90}%`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Star className="w-4 h-4 fill-amber-400" />
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                Journey
              </span>
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              Have questions about moving to Australia as a GP? 
              Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
        
        {/* Mountain silhouette at bottom */}
        <svg 
          className="absolute bottom-0 left-0 right-0 w-full h-24"
          viewBox="0 0 1440 96" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,96 L0,60 Q200,40 400,55 T800,50 Q1000,35 1200,50 T1440,45 L1440,96 Z"
            fill="#0c4a6e"
            opacity="0.5"
          />
        </svg>
      </section>

      {/* Contact Methods */}
      <section className="py-12 -mt-8 relative z-10 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-sm text-sky-400 mb-3">{method.description}</p>
                    <p className="text-lg font-medium text-amber-300 mb-4">{method.value}</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
                      onClick={() => window.open(method.href, '_blank')}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="consultation" className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-amber-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-sky-300 mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setSubmitted(false)} 
                        variant="outline"
                        className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
                      <p className="text-sky-400 mb-6">
                        Fill out the form below and we&apos;ll get back to you shortly.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-sky-300 mb-1">
                              Full Name
                            </label>
                            <input
                              type="text"
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder:text-sky-500"
                              placeholder="Dr. Jane Smith"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-sky-300 mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder:text-sky-500"
                              placeholder="jane@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-sky-300 mb-1">
                              Current Country
                            </label>
                            <select
                              value={formState.country}
                              onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white [&>option]:text-gray-900"
                            >
                              <option value="">Select country</option>
                              <option value="uk">United Kingdom</option>
                              <option value="ireland">Ireland</option>
                              <option value="south-africa">South Africa</option>
                              <option value="india">India</option>
                              <option value="canada">Canada</option>
                              <option value="singapore">Singapore</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-sky-300 mb-1">
                              Stage in Journey
                            </label>
                            <select
                              value={formState.stage}
                              onChange={(e) => setFormState({ ...formState, stage: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white [&>option]:text-gray-900"
                            >
                              <option value="">Select stage</option>
                              <option value="researching">Just researching</option>
                              <option value="amc">Preparing for AMC exams</option>
                              <option value="ahpra">AHPRA application in progress</option>
                              <option value="job">Looking for a job</option>
                              <option value="visa">Visa application stage</option>
                              <option value="moving">Ready to move</option>
                              <option value="arrived">Already in Australia</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-sky-300 mb-1">
                            How can we help?
                          </label>
                          <textarea
                            rows={5}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder:text-sky-500 resize-none"
                            placeholder="Tell us about your situation and what help you need..."
                          />
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Why Get in Touch?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Personalized pathway assessment based on your qualifications",
                    "Guidance on complex registration scenarios",
                    "Connections to verified migration agents and recruiters",
                    "Information about current job opportunities",
                    "Help with document preparation and verification",
                    "Ongoing support throughout your journey",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-sky-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] rounded-2xl p-8 text-white">
                <Facebook className="w-10 h-10 mb-4 text-amber-300" />
                <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
                <p className="text-orange-100 mb-6">
                  Connect with our Facebook community of 6,000+ international GPs. 
                  Get real-time advice from those who&apos;ve made the move.
                </p>
                <Button 
                  className="bg-white text-orange-600 hover:bg-gray-100"
                  onClick={() => window.open('https://www.facebook.com/groups/810474272306522', '_blank')}
                >
                  Join Facebook Group
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Clock className="w-6 h-6 text-amber-400 mb-2" />
                  <p className="text-sm text-sky-300">
                    <strong className="text-white">Response Time:</strong><br />
                    Usually within 24 hours
                  </p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-400 mb-2" />
                  <p className="text-sm text-sky-300">
                    <strong className="text-white">Location:</strong><br />
                    Melbourne, Australia
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-gradient-to-br from-[#082f4a] to-[#0c4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-sky-300 mb-8">
            Check our comprehensive FAQ sections on registration, visas, and jobs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
              onClick={() => window.location.href='/registration/'}
            >
              Registration FAQs
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
              onClick={() => window.location.href='/visas/'}
            >
              Visa FAQs
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
              onClick={() => window.location.href='/jobs/'}
            >
              Jobs FAQs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
