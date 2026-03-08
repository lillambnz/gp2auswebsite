"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  ClipboardCheck, 
  FileText, 
  GraduationCap, 
  Award, 
  Clock, 
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Globe
} from "lucide-react"
import Link from "next/link"

const pathways = [
  {
    id: "standard",
    title: "Standard Pathway",
    icon: Stethoscope,
    description: "For IMGs who have completed their primary medical qualification and want to practice as a GP in Australia.",
    requirements: [
      "Primary medical degree recognized by AMC",
      "Completed internship or equivalent",
      "English language proficiency (IELTS/OET)",
      "AMC MCQ examination passed",
      "AMC clinical examination or workplace-based assessment",
    ],
    timeline: "12-24 months",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "specialist",
    title: "Specialist Pathway",
    icon: Award,
    description: "For specialists who hold a specialist qualification in general practice from another country.",
    requirements: [
      "Specialist qualification in General Practice/Family Medicine",
      "Currently practicing as a specialist",
      "English language proficiency",
      " comparability assessment by RACGP/ACRRM",
      "May require additional training or examinations",
    ],
    timeline: "6-18 months",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "competent",
    title: "Competent Authority Pathway",
    icon: CheckCircle,
    description: "For doctors from approved competent authority jurisdictions (UK, Ireland, US, Canada, New Zealand).",
    requirements: [
      "Medical degree from approved competent authority",
      "Completed training in approved jurisdiction",
      "English language proficiency",
      "May be exempt from AMC examinations",
      "Apply directly to AHPRA for registration",
    ],
    timeline: "3-12 months",
    color: "from-blue-500 to-cyan-500",
  },
]

const steps = [
  {
    number: "1",
    title: "Check Your Eligibility",
    description: "Determine which registration pathway applies to you based on your qualifications and experience.",
    icon: AlertCircle,
  },
  {
    number: "2",
    title: "AMC Primary Examination (MCQ)",
    description: "Pass the multiple-choice question examination covering medicine, surgery, and population health.",
    icon: FileText,
  },
  {
    number: "3",
    title: "AMC Clinical Examination / WBA",
    description: "Complete either the clinical examination or workplace-based assessment.",
    icon: Stethoscope,
  },
  {
    number: "4",
    title: "Apply for Registration",
    description: "Apply to AHPRA for general or provisional registration with your AMC certificates.",
    icon: ClipboardCheck,
  },
  {
    number: "5",
    title: "Fellowship Training",
    description: "Complete FRACGP or FACRRM training program (3-4 years for the standard pathway).",
    icon: GraduationCap,
  },
  {
    number: "6",
    title: "Achieve Fellowship",
    description: "Pass fellowship exams and become a Fellow of RACGP or ACRRM.",
    icon: Award,
  },
]

const faqs = [
  {
    question: "How long does the entire registration process take?",
    answer: "The timeline varies significantly based on your pathway. The Standard Pathway typically takes 12-24 months from AMC MCQ to provisional registration, plus 3-4 years for fellowship training. The Competent Authority Pathway can be completed in 3-12 months. The Specialist Pathway varies from 6-18 months depending on comparability assessment.",
  },
  {
    question: "What are the English language requirements?",
    answer: "You must demonstrate English language proficiency through IELTS (minimum 7.0 in each band), OET (minimum B in each band), PTE Academic (minimum 65 in each band), or TOEFL iBT (minimum 94 with specific section scores). Results must be from a test taken within the last 2 years.",
  },
  {
    question: "Can I work while waiting for registration?",
    answer: "You cannot practice medicine in Australia without AHPRA registration. However, some doctors work in non-clinical roles or research positions while completing their registration requirements. Once you have provisional registration, you can work under supervision.",
  },
  {
    question: "What is the difference between RACGP and ACRRM?",
    answer: "RACGP (Royal Australian College of General Practitioners) is the larger body focusing on general practice in urban and regional areas. ACRRM (Australian College of Rural and Remote Medicine) specializes in rural and remote medicine. Both lead to specialist GP registration, but ACRRM has a specific rural focus.",
  },
  {
    question: "Do I need to secure a job before applying for registration?",
    answer: "No, you don't need a job to apply for registration. However, for the Specialist Pathway, you may need to demonstrate employment prospects. For supervised practice positions, many employers prefer candidates who already have or are close to obtaining registration.",
  },
]

export default function RegistrationPage() {
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
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4 border border-white/20">
              Registration Guide
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AHPRA Registration for International GPs
            </h1>
            <p className="text-xl text-teal-100">
              Your complete guide to navigating the Australian Health Practitioner Regulation Agency 
              registration process and becoming a practicing GP in Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Registration Pathway
            </h2>
            <p className="text-lg text-gray-600">
              The pathway you take depends on your qualifications and where you trained. 
              Select the option that applies to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <motion.div
                key={pathway.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${pathway.color} rounded-xl flex items-center justify-center mb-4`}>
                      <pathway.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{pathway.title}</CardTitle>
                    <CardDescription>{pathway.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: {pathway.timeline}</span>
                    </div>
                    <ul className="space-y-2">
                      {pathway.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Registration Process
            </h2>
            <p className="text-lg text-gray-600">
              Follow these steps to complete your AHPRA registration and become a practicing GP in Australia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <step.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Understanding the Costs
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The registration process involves several fees. Use our cost calculator to estimate 
                your total investment for relocating to Australia as a GP.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "AMC Examination fees: ~$3,500 AUD",
                  "AHPRA Registration: ~$860 AUD",
                  "English Language Tests: ~$500-600 AUD",
                  "Document Verification: ~$300-500 AUD",
                  "Visa Application: ~$4,000+ AUD",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <Globe className="w-5 h-5 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => window.location.href='/calculator/'}>
                Calculate Your Costs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Key Organizations</h3>
              <div className="space-y-4">
                {[
                  { name: "AHPRA", desc: "Australian Health Practitioner Regulation Agency - handles all medical registration" },
                  { name: "AMC", desc: "Australian Medical Council - conducts examinations for IMGs" },
                  { name: "RACGP", desc: "Royal Australian College of General Practitioners - fellowship training" },
                  { name: "ACRRM", desc: "Australian College of Rural and Remote Medicine - rural pathway" },
                ].map((org) => (
                  <div key={org.name} className="p-4 bg-gray-50 rounded-xl">
                    <div className="font-semibold text-teal-700">{org.name}</div>
                    <div className="text-sm text-gray-600">{org.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about the registration process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Registration Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Use our interactive tools to check your eligibility, calculate costs, 
            and track your progress through the registration process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100" onClick={() => window.location.href='/checklist/'}>
              Get Documents Checklist
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 bg-transparent" onClick={() => window.location.href='/calculator/'}>
              Calculate Costs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
