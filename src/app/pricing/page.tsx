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
  Users,
  Star
} from "lucide-react"

const plans = [
  {
    name: "Free",
    description: "Get started with essential resources",
    price: "$0",
    period: "forever",
    icon: Zap,
    color: "from-sky-500 to-blue-500",
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
              <Sparkles className="w-4 h-4" />
              Simple, Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Choose Your Path to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                Australia
              </span>
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              Start free and upgrade when you need more. No hidden fees. 
              Cancel anytime.
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

      {/* Pricing Cards */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full relative bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all ${plan.popular ? 'border-amber-500/50 ring-1 ring-amber-500/30' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 fill-white" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <p className="text-sky-400 mt-2">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-sky-400">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-sky-200' : 'text-sky-600'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      size="lg" 
                      variant={plan.ctaVariant}
                      className={plan.popular 
                        ? "w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0" 
                        : "w-full border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
                      }
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-sky-300 rounded-full text-sm border border-white/10">
              <Shield className="w-4 h-4 text-amber-400" />
              7-day money-back guarantee on all paid plans
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-20 bg-[#082f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Or Get the Complete Toolkit
            </h2>
            <p className="text-lg text-sky-300">
              One-time purchase. Lifetime access. No subscription needed.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Complete Toolkit</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">$199</span>
                  <span className="text-sky-400"> one-time</span>
                </div>
                <p className="text-sky-400 mt-2">Lifetime access. No recurring fees.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {toolkitPlans[0].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sky-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
                  onClick={() => window.location.href='/contact/'}
                >
                  Purchase Toolkit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-center text-xs text-sky-500 mt-4">
                  Secure payment via Stripe or PayPal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Premium */}
      <section className="py-20 bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
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
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-orange-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl text-white font-medium mb-6">
            &ldquo;The Premium membership paid for itself in the first week. 
            The consultation alone saved me from making a costly mistake with my visa application.&rdquo;
          </blockquote>
          <div className="text-sky-300">
            <div className="font-semibold text-amber-300">Dr. Sarah Chen</div>
            <div className="text-sm">Premium Member, now practicing in Melbourne</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#082f4a] to-[#0c4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-sky-300 mb-8">
            Book a free 15-minute call to discuss which option is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
              onClick={() => window.location.href='/contact/'}
            >
              Book Free Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
              onClick={() => window.location.href='/contact/'}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
