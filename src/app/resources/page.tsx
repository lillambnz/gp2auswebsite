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
  ChevronRight
} from "lucide-react"
import Link from "next/link"

const resourceCategories = [
  {
    id: "starter",
    title: "GP Starter Pack",
    icon: Stethoscope,
    description: "Essential resources for your first day as a GP in Australia",
    color: "from-teal-500 to-emerald-500",
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
    color: "from-blue-500 to-cyan-500",
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
    color: "from-amber-500 to-orange-500",
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
              Resources & Guidelines
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your GP Practice Toolkit
            </h1>
            <p className="text-xl text-indigo-100">
              Essential resources, clinical guidelines, and tools to help you succeed 
              as a GP in Australia. Everything you need for confident practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                              {item.type === "PDF" && <FileText className="w-4 h-4 text-red-500" />}
                              {item.type === "DOCX" && <FileText className="w-4 h-4 text-blue-500" />}
                              {item.type === "Video" && <Video className="w-4 h-4 text-purple-500" />}
                              {item.type === "Tool" && <Calculator className="w-4 h-4 text-emerald-500" />}
                              {item.type === "Course" && <GraduationCap className="w-4 h-4 text-amber-500" />}
                              {item.type === "Link" && <ExternalLink className="w-4 h-4 text-indigo-500" />}
                            </div>
                            <span className="font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {('size' in item) && (item as {size?: string}).size && <span className="text-xs text-gray-400">{(item as {size?: string}).size}</span>}
                            {('duration' in item) && (item as {duration?: string}).duration && <span className="text-xs text-gray-400">{(item as {duration?: string}).duration}</span>}
                            <Download className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6" 
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Links</h2>
            <p className="text-gray-600">Quick access to important Australian medical organizations and resources</p>
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
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 border border-transparent transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <ExternalLink className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{link.name}</h3>
                  <p className="text-sm text-gray-500">{link.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            We&apos;re constantly adding new resources. Let us know what would help you 
            most in your GP journey.
          </p>
          <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100" onClick={() => window.location.href='/contact/'}>
            Request a Resource
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
