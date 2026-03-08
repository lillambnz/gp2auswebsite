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
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Star className="w-4 h-4 fill-amber-400" />
              For Clinics & Recruiters
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hire the Best{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                International GPs
              </span>
            </h1>
            <p className="text-xl text-sky-200 mb-8">
              Connect with thousands of qualified GPs actively seeking positions in Australia. 
              Faster hires, better candidates, less hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
                onClick={() => window.location.href='/jobs/post/'}
              >
                Post a Job
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
                onClick={() => window.location.href='/contact/'}
              >
                Talk to Sales
              </Button>
            </div>
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

      {/* Stats */}
      <section className="py-12 bg-[#082f4a] border-b border-white/10">
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
                <div className="text-4xl font-bold text-amber-300 mb-1">{stat.value}</div>
                <div className="text-sm text-sky-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Partner With GP2Aus?
            </h2>
            <p className="text-lg text-sky-300">
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

      {/* How It Works */}
      <section className="py-20 bg-[#082f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
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
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Recruitment Packages
            </h2>
            <p className="text-lg text-orange-100">
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
                <Card className={`h-full bg-white/10 backdrop-blur-sm border-white/20 ${pkg.popular ? 'ring-1 ring-white/30' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-white text-orange-600 text-sm font-medium rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{pkg.name}</CardTitle>
                    <p className="text-sm text-orange-200">{pkg.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">{pkg.price}</span>
                      <span className="text-orange-200">{pkg.period}</span>
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
                      className={`w-full ${pkg.popular 
                        ? 'bg-white text-orange-600 hover:bg-gray-100' 
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
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
            <p className="text-orange-100 mb-4">
              Need a custom solution? We offer tailored packages for large practices and hospital networks.
            </p>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              onClick={() => window.location.href='/contact/'}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
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

      {/* FAQ */}
      <section className="py-20 bg-[#082f4a]">
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
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sky-400 text-sm">{faq.a}</p>
              </div>
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
            Join 500+ clinics already using GP2Aus to hire international talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
              onClick={() => window.location.href='/jobs/post/'}
            >
              Post Your First Job
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
              onClick={() => window.location.href='/contact/'}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
