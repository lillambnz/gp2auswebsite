"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Building2, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Briefcase,
  Globe,
  Clock
} from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Users,
    title: "Access to 15,000+ GPs",
    description: "Connect with qualified international GPs actively seeking positions in Australia.",
  },
  {
    icon: Target,
    title: "Pre-Screened Candidates",
    description: "Our GPs understand the registration process and are ready to make the move.",
  },
  {
    icon: TrendingUp,
    title: "Faster Time to Hire",
    description: "Average 48-hour response time vs weeks with traditional job boards.",
  },
  {
    icon: Globe,
    title: "International Reach",
    description: "Reach GPs from UK, Ireland, South Africa, India, Canada, and more.",
  },
]

const packages = [
  {
    name: "Basic Listing",
    price: "$299",
    period: "per job",
    description: "Standard job posting for 30 days",
    features: [
      "30-day job listing",
      "Appear in job search",
      "Email to matching candidates",
      "Basic analytics",
      "Standard support",
    ],
    cta: "Post a Job",
    popular: false,
  },
  {
    name: "Featured Listing",
    price: "$499",
    period: "per job",
    description: "Highlighted posting with priority placement",
    features: [
      "60-day job listing",
      "Featured at top of search",
      "Priority email to candidates",
      "Advanced analytics",
      "Dedicated support",
      "Social media promotion",
      "Newsletter feature",
    ],
    cta: "Get Featured",
    popular: true,
  },
  {
    name: "Recruiter Partnership",
    price: "$1,999",
    period: "per month",
    description: "Unlimited postings for agencies",
    features: [
      "Unlimited job postings",
      "All Featured benefits",
      "API access",
      "Bulk upload tools",
      "Account manager",
      "Priority candidate matching",
      "White-label options",
      "Custom integrations",
    ],
    cta: "Become a Partner",
    popular: false,
  },
]

const stats = [
  { value: "15,000+", label: "GPs in Network" },
  { value: "500+", label: "Partner Clinics" },
  { value: "48hr", label: "Avg. Response" },
  { value: "92%", label: "Fill Rate" },
]

const testimonials = [
  {
    quote: "We filled our DPA position in under 2 weeks. The quality of candidates from GP2Aus was exceptional.",
    author: "Dr. Michael Roberts",
    role: "Practice Principal",
    clinic: "Coastal Medical Centre, QLD",
  },
  {
    quote: "Best ROI of any recruitment channel we've used. The candidates are actually serious about relocating.",
    author: "Sarah Thompson",
    role: "Practice Manager",
    clinic: "Sydney Family Practice, NSW",
  },
]

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 relative overflow-hidden">
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
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4 border border-white/20">
              For Clinics & Recruiters
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hire the Best International GPs
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Connect with thousands of qualified GPs actively seeking positions in Australia. 
              Faster hires, better candidates, less hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-indigo-700 hover:bg-gray-100"
                onClick={() => window.location.href='/jobs/post/'}
              >
                Post a Job
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.location.href='/contact/'}
              >
                Talk to Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With GP2Aus?
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in connecting Australian clinics with international medical talent.
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
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Post Your Job",
                desc: "Create your listing in minutes. Specify requirements, salary, and DPA status.",
              },
              {
                step: "2",
                title: "We Match Candidates",
                desc: "Our algorithm shows your job to relevant GPs based on location, visa status, and preferences.",
              },
              {
                step: "3",
                title: "Review Applications",
                desc: "Receive applications directly. View CVs, credentials, and candidate profiles.",
              },
              {
                step: "4",
                title: "Hire & Onboard",
                desc: "Interview your favorites and make your hire. We provide resources to help with onboarding.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Recruitment Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose the option that works best for your hiring needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${pkg.popular ? 'border-indigo-400 border-2 shadow-xl shadow-indigo-500/10' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <p className="text-sm text-gray-500">{pkg.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-500">{pkg.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={pkg.popular ? 'default' : 'outline'}
                      onClick={() => window.location.href='/jobs/post/'}
                    >
                      {pkg.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom solution? We offer tailored packages for large practices and hospital networks.
            </p>
            <Button variant="outline" onClick={() => window.location.href='/contact/'}>
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Clinics Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-indigo-600">{testimonial.clinic}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How quickly can we expect applications?",
                a: "Most clinics receive their first applications within 24-48 hours of posting.",
              },
              {
                q: "Do you screen candidates?",
                a: "Yes, we verify AHPRA registration status and visa eligibility before matching.",
              },
              {
                q: "What if we don't find a suitable candidate?",
                a: "We'll extend your listing or provide a credit for future postings.",
              },
              {
                q: "Can we edit our job posting?",
                a: "Yes, you can edit your listing anytime from your dashboard.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-indigo-100 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your Next GP?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join 500+ clinics already using GP2Aus to hire international talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href='/jobs/post/'}>
              Post Your First Job
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href='/contact/'}>
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
