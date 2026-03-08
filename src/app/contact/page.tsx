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
  CheckCircle,
  Star,
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
    icon: Clock,
    title: "Response Time",
    description: "We aim to respond to all enquiries",
    value: "Within 24 hours",
    action: "Book a Call",
    href: "mailto:hello@gp2aus.com?subject=Book a call",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    userType: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#0c4a6e]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0c4a6e] via-[#075985] to-[#0369a1] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 2 + (i % 3) * 0.5,
                repeat: Infinity,
                delay: i * 0.1,
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
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Start the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              Whether you&apos;re a UK GP ready to make the move, or an Australian practice looking for talent — we&apos;re here to help.
            </p>
          </motion.div>
        </div>

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
      <section className="py-12 bg-[#0c4a6e]">
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
      <section className="py-20 bg-[#0c4a6e]">
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
                        Fill out the form below and one of our team will be in touch.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* User Type */}
                        <div>
                          <label className="block text-sm font-medium text-sky-300 mb-2">
                            I am a
                          </label>
                          <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="userType"
                                value="gp"
                                checked={formState.userType === "gp"}
                                onChange={(e) => setFormState({ ...formState, userType: e.target.value })}
                                className="accent-teal-500"
                              />
                              <span className="text-sky-200 text-sm">GP</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="userType"
                                value="practice"
                                checked={formState.userType === "practice"}
                                onChange={(e) => setFormState({ ...formState, userType: e.target.value })}
                                className="accent-amber-500"
                              />
                              <span className="text-sky-200 text-sm">Practice / Employer</span>
                            </label>
                          </div>
                        </div>

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
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formState.phone}
                              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder:text-sky-500"
                              placeholder="+44 7700 000000"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-sky-300 mb-1">
                              Country (for GPs)
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
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-sky-300 mb-1">
                            Message
                          </label>
                          <textarea
                            rows={5}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder:text-sky-500 resize-none"
                            placeholder="Tell us about your situation and what you need..."
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
                  What Happens Next?
                </h2>
                <ul className="space-y-4">
                  {[
                    "We review your enquiry within 24 hours",
                    "A member of our team calls to understand your situation",
                    "We assess your profile and match you to relevant practices",
                    "We guide you through every step from there",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-sky-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-700 to-[#075985] rounded-2xl p-8 text-white border border-white/10">
                <h3 className="text-xl font-bold mb-2">For UK GPs</h3>
                <p className="text-teal-100 mb-4">
                  Registering with us is free. We earn our fee from the practices we place you with — so our incentive is to find you the right role, not just any role.
                </p>
                <ul className="space-y-2">
                  {[
                    "No cost to you as a GP",
                    "No obligation to accept any placement",
                    "Confidential — your profile is only shared with your consent",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-teal-200">
                      <CheckCircle className="w-4 h-4 text-teal-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <Clock className="w-6 h-6 text-amber-400 mb-2" />
                  <p className="text-sm text-sky-300">
                    <strong className="text-white">Response Time:</strong><br />
                    Within 24 hours
                  </p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-400 mb-2" />
                  <p className="text-sm text-sky-300">
                    <strong className="text-white">Base:</strong><br />
                    Melbourne, Australia
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
