"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Target,
  ShieldCheck,
  RefreshCw,
  CheckCircle,
  Star,
  ArrowRight,
  ClipboardList,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Pre-Screened UK GPs",
    description: "Every GP in our network is UK-trained, motivated, and has been vetted by our team before we recommend them to practices.",
  },
  {
    icon: Target,
    title: "Precision Matching",
    description: "We don&apos;t send you a pile of CVs. We match your specific vacancy to the right candidates and present a curated shortlist.",
  },
  {
    icon: ShieldCheck,
    title: "Full Vetting & Compliance",
    description: "We handle AHPRA eligibility checks, reference verification, and visa sponsorship guidance so your practice stays compliant.",
  },
  {
    icon: RefreshCw,
    title: "Replacement Guarantee",
    description: "If a placed GP leaves within the agreed period, we will source a replacement at no additional cost.",
  },
]

const packages = [
  {
    name: "Basic",
    price: "$299",
    period: "per vacancy",
    description: "For practices with a single GP opening",
    features: [
      "Vacancy listing in our network",
      "GP candidate matching",
      "Up to 3 candidate profiles",
      "Email support",
    ],
    cta: "Post a Vacancy",
    popular: false,
  },
  {
    name: "Featured",
    price: "$499",
    period: "per vacancy",
    description: "Priority matching with full placement support",
    features: [
      "Priority placement in our GP network",
      "Up to 6 candidate profiles",
      "Interview coordination",
      "Onboarding support guidance",
      "Dedicated account contact",
      "Replacement guarantee (90 days)",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Partnership",
    price: "$1,999",
    period: "per month",
    description: "Ongoing recruitment for multiple or recurring vacancies",
    features: [
      "Unlimited vacancy postings",
      "All Featured benefits",
      "Dedicated account manager",
      "Priority candidate access",
      "Extended replacement guarantee",
      "Quarterly talent pipeline briefings",
    ],
    cta: "Become a Partner",
    popular: false,
  },
]

const testimonials = [
  {
    quote: "We filled our DPA position in under two weeks. The candidates GP2Aus presented were genuinely interested in the role and the location — not just looking for any job.",
    author: "Dr. Michael Roberts",
    role: "Practice Principal",
    clinic: "Coastal Medical Centre, QLD",
  },
  {
    quote: "The quality of UK GPs they sent us was exceptional. All had strong references and were well-prepared for the Australian environment. We&apos;ve now placed three GPs through them.",
    author: "Sarah Thompson",
    role: "Practice Manager",
    clinic: "Sydney Family Practice, NSW",
  },
]

export default function PartnershipsPage() {
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
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Star className="w-4 h-4 fill-amber-400" />
              For Australian Practices
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hire Pre-Screened{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                UK-Trained GPs
              </span>
            </h1>
            <p className="text-xl text-sky-200 mb-8">
              We connect Australian practices with motivated, qualified GPs from the UK who are ready to relocate. Less hassle, better candidates, faster hires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
                onClick={() => window.location.href = '/contact/'}
              >
                Post a Vacancy
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
                onClick={() => window.location.href = '/contact/'}
              >
                Talk to Our Team
              </Button>
            </div>
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

      {/* Stats */}
      <section className="py-12 bg-[#082f4a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "GP Placements Made" },
              { value: "200+", label: "Partner Practices" },
              { value: "92%", label: "Fill Rate" },
              { value: "2 weeks", label: "Avg. Time to Shortlist" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-300 mb-1">{stat.value}</div>
                <div className="text-sm text-sky-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Offer Practices
            </h2>
            <p className="text-lg text-sky-300">
              We do the heavy lifting so your practice team can focus on what matters — patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <benefit.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-sky-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Practices */}
      <section className="py-20 bg-[#082f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-sky-300">Four straightforward steps to your next GP hire.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ClipboardList,
                step: "1",
                title: "Post your vacancy",
                desc: "Tell us your requirements — location, hours, billing model, special interests. No obligation.",
              },
              {
                icon: Users,
                step: "2",
                title: "We source pre-screened GPs",
                desc: "We match your role to motivated, UK-trained GPs from our network who are ready to relocate.",
              },
              {
                icon: MessagesSquare,
                step: "3",
                title: "Interview your shortlist",
                desc: "We present a curated shortlist. You conduct interviews and choose your preferred candidate.",
              },
              {
                icon: CheckCircle2,
                step: "4",
                title: "We handle onboarding support",
                desc: "We support your new GP through visa, AHPRA, and relocation logistics until their first day.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-sky-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Recruitment Packages
            </h2>
            <p className="text-lg text-orange-100">
              Choose the option that fits your hiring needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 bg-white text-orange-600 text-sm font-medium rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full bg-white/10 backdrop-blur-sm border-white/20 ${pkg.popular ? "ring-1 ring-white/30" : ""}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{pkg.name}</CardTitle>
                    <p className="text-sm text-orange-200">{pkg.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">{pkg.price}</span>
                      <span className="text-orange-200 ml-1">{pkg.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-white text-orange-600 hover:bg-gray-100"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      }`}
                      onClick={() => window.location.href = '/contact/'}
                    >
                      {pkg.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-orange-100 mb-4">
              Need a custom arrangement for a hospital network or group practice? Let&apos;s talk.
            </p>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              onClick={() => window.location.href = '/contact/'}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Practices Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <p className="text-sky-200 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-sky-400">{testimonial.role}</div>
                  <div className="text-sm text-amber-300">{testimonial.clinic}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#082f4a] to-[#0c4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Find Your Next GP?
          </h2>
          <p className="text-lg text-sky-300 mb-8">
            Join 200+ practices already working with GP2Aus to recruit UK-trained talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
              onClick={() => window.location.href = '/contact/'}
            >
              Post a Vacancy
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
              onClick={() => window.location.href = '/contact/'}
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
