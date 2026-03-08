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
  MessageCircle,
  Video,
  CheckCircle
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
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4 border border-white/20">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Start Your Journey
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Have questions about moving to Australia as a GP? 
              Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{method.description}</p>
                    <p className="text-lg font-medium text-teal-600 mb-4">{method.value}</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
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
      <section id="consultation" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-teal-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setSubmitted(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                      <p className="text-gray-600 mb-6">
                        Fill out the form below and we&apos;ll get back to you shortly.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name
                            </label>
                            <input
                              type="text"
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                              placeholder="Dr. Jane Smith"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                              placeholder="jane@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Current Country
                            </label>
                            <select
                              value={formState.country}
                              onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Stage in Journey
                            </label>
                            <select
                              value={formState.stage}
                              onChange={(e) => setFormState({ ...formState, stage: e.target.value })}
                              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            How can we help?
                          </label>
                          <textarea
                            rows={5}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                            placeholder="Tell us about your situation and what help you need..."
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
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
                      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl p-8 text-white">
                <MessageCircle className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Prefer to Chat?</h3>
                <p className="text-teal-100 mb-6">
                  Join our WhatsApp community of 2,000+ international GPs. 
                  Get real-time advice from those who&apos;ve made the move.
                </p>
                <Button className="bg-white text-teal-700 hover:bg-gray-100">
                  Join Community
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 rounded-xl">
                  <Clock className="w-6 h-6 text-teal-600 mb-2" />
                  <p className="text-sm text-gray-600">
                    <strong>Response Time:</strong><br />
                    Usually within 24 hours
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-xl">
                  <MapPin className="w-6 h-6 text-teal-600 mb-2" />
                  <p className="text-sm text-gray-600">
                    <strong>Location:</strong><br />
                    Melbourne, Australia
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-gray-400 mb-8">
            Check our comprehensive FAQ sections on registration, visas, and jobs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700" onClick={() => window.location.href='/registration/'}>
              Registration FAQs
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700" onClick={() => window.location.href='/visas/'}>
              Visa FAQs
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700" onClick={() => window.location.href='/jobs/'}>
              Jobs FAQs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
