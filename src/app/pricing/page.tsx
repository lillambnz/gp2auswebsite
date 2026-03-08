"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Check, 
  X, 
  Sparkles, 
  Zap,
  Crown,
  ArrowRight,
  Shield,
  Clock,
  Users
} from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    description: "Get started with essential resources",
    price: "$0",
    period: "forever",
    icon: Zap,
    color: "from-gray-500 to-gray-600",
    features: [
      { text: "Registration guides & articles", included: true },
      { text: "Basic cost calculator", included: true },
      { text: "Job board browsing", included: true },
      { text: "Location explorer (basic)", included: true },
      { text: "Community forum access", included: true },
      { text: "Email newsletter", included: true },
      { text: "GP Essentials Starter Pack", included: false },
      { text: "Location Deep Dive tool", included: false },
      { text: "Resources & Guidelines library", included: false },
      { text: "Priority job alerts", included: false },
      { text: "1-on-1 consultation", included: false },
      { text: "Document templates", included: false },
    ],
    cta: "Get Started Free",
    ctaVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Premium",
    description: "Everything you need to succeed",
    price: "$49",
    period: "/month",
    icon: Crown,
    color: "from-amber-400 to-orange-500",
    features: [
      { text: "Registration guides & articles", included: true },
      { text: "Advanced cost calculator", included: true },
      { text: "Job board browsing", included: true },
      { text: "Location explorer (full)", included: true },
      { text: "Community forum access", included: true },
      { text: "Email newsletter", included: true },
      { text: "GP Essentials Starter Pack", included: true },
      { text: "Location Deep Dive tool", included: true },
      { text: "Resources & Guidelines library", included: true },
      { text: "Priority job alerts", included: true },
      { text: "1-on-1 consultation (1/month)", included: true },
      { text: "Document templates", included: true },
    ],
    cta: "Start Premium Trial",
    ctaVariant: "default" as const,
    popular: true,
  },
]

const toolkitPlans = [
  {
    name: "Complete Toolkit",
    price: "$199",
    description: "One-time purchase. Lifetime access.",
    features: [
      "GP Essentials Starter Pack",
      "Location Deep Dive Tool",
      "Full Resources Library",
      "Document Templates Pack",
      "MBS Billing Guide",
      "Clinical Guidelines Summary",
      "Future updates included",
    ],
  },
]

export default function PricingPage() {
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
              <Sparkles className="w-4 h-4 inline mr-1" />
              Simple, Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Choose Your Path to Australia
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Start free and upgrade when you need more. No hidden fees. 
              Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-amber-400 border-2 shadow-xl shadow-amber-500/10' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <p className="text-gray-500 mt-2">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      size="lg" 
                      variant={plan.ctaVariant}
                      className="w-full"
                      onClick={() => window.location.href='/contact/'}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm">
              <Shield className="w-4 h-4" />
              7-day money-back guarantee on all paid plans
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Or Get the Complete Toolkit
            </h2>
            <p className="text-lg text-gray-600">
              One-time purchase. Lifetime access. No subscription needed.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="border-2 border-teal-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Complete Toolkit</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gray-900">$199</span>
                  <span className="text-gray-500"> one-time</span>
                </div>
                <p className="text-gray-500 mt-2">Lifetime access. No recurring fees.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {toolkitPlans[0].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.location.href='/contact/'}
                >
                  Purchase Toolkit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Secure payment via Stripe or PayPal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Premium */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Go Premium?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save Weeks of Research",
                desc: "Our Location Deep Dive tool analyzes 500+ locations instantly. What takes days of research takes minutes.",
              },
              {
                icon: Users,
                title: "Expert Guidance",
                desc: "Monthly 1-on-1 consultations with GPs who've made the move. Get answers specific to your situation.",
              },
              {
                icon: Shield,
                title: "Everything You Need",
                desc: "From document templates to clinical guidelines. Hit the ground running from day one.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl text-white font-medium mb-6">
            &ldquo;The Premium membership paid for itself in the first week. 
            The consultation alone saved me from making a costly mistake with my visa application.&rdquo;
          </blockquote>
          <div className="text-teal-100">
            <div className="font-semibold">Dr. Sarah Chen</div>
            <div className="text-sm">Premium Member, now practicing in Melbourne</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a free 15-minute call to discuss which option is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href='/contact/'}>
              Book Free Call
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href='/contact/'}>
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
