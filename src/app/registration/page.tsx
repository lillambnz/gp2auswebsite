"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ClipboardCheck,
  ArrowRight,
  BookOpen,
  Star,
  CheckCircle,
  Lock,
} from "lucide-react"

export default function RegistrationPage() {
  const [formState, setFormState] = useState({ name: "", email: "" })
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
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2 + (i % 3) * 0.5, repeat: Infinity, delay: i * 0.1 }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ top: `${10 + (i * 5) % 40}%`, left: `${5 + (i * 7) % 90}%` }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Star className="w-4 h-4 fill-amber-400" />
              AHPRA & Registration
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              GP Registration &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                AHPRA Guide
              </span>
            </h1>
            <p className="text-xl text-sky-200">
              What UK GPs need to know about practising in Australia.
            </p>
          </motion.div>
        </div>
        <svg className="absolute bottom-0 left-0 right-0 w-full h-24" viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path d="M0,96 L0,60 Q200,40 400,55 T800,50 Q1000,35 1200,50 T1440,45 L1440,96 Z" fill="#0c4a6e" opacity="0.5" />
        </svg>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            {/* Teaser */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="w-6 h-6 text-amber-400" />
                <h2 className="text-xl font-semibold text-white">About Registration in Australia</h2>
              </div>
              <p className="text-sky-300 leading-relaxed mb-4">
                As a UK-trained GP, you have access to one of the most favourable registration pathways into Australian general practice — the Competent Authority Pathway. This means that in many cases, your existing qualifications are directly recognised.
              </p>
              <p className="text-sky-300 leading-relaxed">
                The full registration process involves several steps, timelines, and fees — and the right approach depends entirely on your specific qualifications and circumstances.
              </p>
            </div>

            {/* Gated content notice */}
            <Card className="bg-gradient-to-br from-[#082f4a] to-[#0c4a6e] border-amber-500/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-amber-400" />
                  <h3 className="text-lg font-semibold text-white">Full Guide Available to Registered GPs</h3>
                </div>
                <p className="text-sky-300 mb-6">
                  The detailed step-by-step registration guide, document checklists, timeline planning, and cost breakdowns are available in our <strong className="text-amber-300">GP Australia Relocation Guide</strong> — or through a one-on-one conversation with our team when you register.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                  {[
                    "Registration pathway guide",
                    "AHPRA application walkthrough",
                    "Document checklist",
                    "Cost breakdown",
                    "Timeline planning",
                    "Ongoing support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-sky-200">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email capture */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-amber-400" />
                      <h4 className="font-semibold text-white text-sm">Get the Free Guide</h4>
                    </div>
                    {submitted ? (
                      <div className="text-center py-4">
                        <CheckCircle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                        <p className="text-sky-300 text-sm">Guide sent! Check your inbox.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-sky-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="Your email"
                          className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-sky-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0 text-sm">
                          Get the Free Guide
                        </Button>
                      </form>
                    )}
                  </div>

                  {/* Register CTA */}
                  <div className="bg-teal-700/30 rounded-xl p-6 border border-teal-500/30 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Register with us instead</h4>
                      <p className="text-sm text-teal-200 mb-4">
                        Register as a GP and we&apos;ll guide you through every step of the process personally — no guides needed.
                      </p>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white border-0 text-sm"
                      onClick={() => window.location.href = '/contact/'}
                    >
                      Register as a GP
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
