"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download,
  ExternalLink,
  Stethoscope,
  Calculator,
  GraduationCap,
  Users,
  ChevronRight,
  Star,
  ArrowRight
} from "lucide-react"

const resourceCategories = [
  {
    id: "starter",
    title: "GP Starter Pack",
    icon: Stethoscope,
    description: "Essential resources for your first day as a GP in Australia",
    color: "from-amber-500 to-orange-500",
    items: [
      { name: "Australian MBS Quick Reference", type: "PDF", size: "2.4 MB" },
      { name: "Bulk Billing vs Private Billing Guide", type: "PDF", size: "1.1 MB" },
      { name: "Common Australian Drug Names", type: "PDF", size: "890 KB" },
      { name: "Referral Template Pack", type: "DOCX", size: "450 KB" },
      { name: "Practice Software Guide", type: "PDF", size: "3.2 MB" },
    ],
  },
  {
    id: "clinical",
    title: "Clinical Guidelines",
    icon: BookOpen,
    description: "Australian clinical guidelines and protocols",
    color: "from-sky-500 to-blue-500",
    items: [
      { name: "RACGP Clinical Guidelines Summary", type: "PDF", size: "5.6 MB" },
      { name: "Immunisation Handbook Summary", type: "PDF", size: "2.8 MB" },
      { name: "Cervical Screening Guidelines", type: "PDF", size: "1.4 MB" },
      { name: "Mental Health Care Plans Guide", type: "PDF", size: "2.1 MB" },
      { name: "Chronic Disease Management Templates", type: "DOCX", size: "680 KB" },
    ],
  },
  {
    id: "calculators",
    title: "Medical Calculators",
    icon: Calculator,
    description: "Essential calculators for Australian general practice",
    color: "from-emerald-500 to-teal-500",
    items: [
      { name: "CV Risk Calculator (Aus-modified FRAX)", type: "Tool" },
      { name: "Pregnancy Dating Calculator", type: "Tool" },
      { name: "Child Growth Charts (WHO/Australian)", type: "PDF", size: "4.2 MB" },
      { name: "BMI Calculator with Asian Cut-offs", type: "Tool" },
      { name: "Renal Function Calculator (CKD-EPI)", type: "Tool" },
    ],
  },
  {
    id: "learning",
    title: "Learning Resources",
    icon: GraduationCap,
    description: "Courses and materials for CPD requirements",
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Australian Healthcare System Overview", type: "Video", duration: "45 min" },
      { name: "Medicare Billing Masterclass", type: "Video", duration: "2 hours" },
      { name: "Indigenous Health Cultural Safety", type: "Course", duration: "3 hours" },
      { name: "Prescribing in Australia: PBS Explained", type: "PDF", size: "1.8 MB" },
      { name: "CPD Planning Template", type: "DOCX", size: "320 KB" },
    ],
  },
  {
    id: "community",
    title: "Community & Support",
    icon: Users,
    description: "Connect with other international GPs",
    color: "from-rose-500 to-red-500",
    items: [
      { name: "IMG GP Facebook Groups List", type: "Link" },
      { name: "Regional GP Networks Directory", type: "PDF", size: "890 KB" },
      { name: "Mentorship Program Information", type: "PDF", size: "540 KB" },
      { name: "AHPRA Approved Supervisors List", type: "Link" },
      { name: "GP Locum Agencies Directory", type: "PDF", size: "670 KB" },
    ],
  },
]

const quickLinks = [
  { name: "AHPRA", url: "https://www.ahpra.gov.au", desc: "Medical registration authority" },
  { name: "AMC", url: "https://www.amc.org.au", desc: "Australian Medical Council" },
  { name: "RACGP", url: "https://www.racgp.org.au", desc: "Royal Australian College of GPs" },
  { name: "ACRRM", url: "https://www.acrrm.org.au", desc: "Rural & Remote Medicine College" },
  { name: "Medicare", url: "https://www.servicesaustralia.gov.au", desc: "Government health services" },
  { name: "MBS Online", url: "http://www.mbsonline.gov.au", desc: "Medicare Benefits Schedule" },
]

export default function ResourcesPage() {
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
              Resources & Guidelines
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your GP Practice{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                Toolkit
              </span>
            </h1>
            <p className="text-xl text-sky-200">
              Essential resources, clinical guidelines, and tools to help you succeed 
              as a GP in Australia. Everything you need for confident practice.
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

      {/* Resource Categories */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                    <CardDescription className="text-sky-400">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group cursor-pointer border border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                              {item.type === "PDF" && <FileText className="w-4 h-4 text-amber-400" />}
                              {item.type === "DOCX" && <FileText className="w-4 h-4 text-sky-400" />}
                              {item.type === "Video" && <Video className="w-4 h-4 text-purple-400" />}
                              {item.type === "Tool" && <Calculator className="w-4 h-4 text-emerald-400" />}
                              {item.type === "Course" && <GraduationCap className="w-4 h-4 text-amber-400" />}
                              {item.type === "Link" && <ExternalLink className="w-4 h-4 text-sky-400" />}
                            </div>
                            <span className="font-medium text-sky-200 group-hover:text-amber-300 transition-colors">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {('size' in item) && (item as {size?: string}).size && <span className="text-xs text-sky-500">{(item as {size?: string}).size}</span>}
                            {('duration' in item) && (item as {duration?: string}).duration && <span className="text-xs text-sky-500">{(item as {duration?: string}).duration}</span>}
                            <Download className="w-4 h-4 text-sky-500 group-hover:text-amber-300 transition-colors" />
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6 border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent" 
                      variant="outline"
                      onClick={() => alert('More resources coming soon!')}
                    >
                      View All {category.title}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-[#082f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Essential Links</h2>
            <p className="text-sky-300">Quick access to important Australian medical organizations and resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-amber-300 transition-colors">{link.name}</h3>
                  <p className="text-sm text-sky-400">{link.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            We&apos;re constantly adding new resources. Let us know what would help you 
            most in your GP journey.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100"
            onClick={() => window.location.href='/contact/'}
          >
            Request a Resource
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
