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
  Globe,
  Star
} from "lucide-react"

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
    color: "from-amber-500 to-orange-500",
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
      "Comparability assessment by RACGP/ACRRM",
      "May require additional training or examinations",
    ],
    timeline: "6-18 months",
    color: "from-sky-500 to-blue-500",
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
    color: "from-emerald-500 to-teal-500",
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
              Registration Guide
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AHPRA Registration for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                International GPs
              </span>
            </h1>
            <p className="text-xl text-sky-200">
              Your complete guide to navigating the Australian Health Practitioner Regulation Agency 
              registration process and becoming a practicing GP in Australia.
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

      {/* Pathways */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Registration Pathway
            </h2>
            <p className="text-lg text-sky-300">
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
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${pathway.color} rounded-xl flex items-center justify-center mb-4`}>
                      <pathway.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{pathway.title}</CardTitle>
                    <CardDescription className="text-sky-400">{pathway.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-sky-400 mb-4">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>Timeline: {pathway.timeline}</span>
                    </div>
                    <ul className="space-y-2">
                      {pathway.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-sky-300">
                          <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
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
      <section className="py-20 bg-[#082f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Registration Process
            </h2>
            <p className="text-lg text-sky-300">
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
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <step.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-sky-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Understanding the Costs
              </h2>
              <p className="text-lg text-orange-100 mb-6">
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
                  <li key={i} className="flex items-center gap-3 text-orange-100">
                    <Globe className="w-5 h-5 text-amber-300" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => window.location.href='/calculator/'}
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Calculate Your Costs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Key Organizations</h3>
              <div className="space-y-4">
                {[
                  { name: "AHPRA", desc: "Australian Health Practitioner Regulation Agency - handles all medical registration" },
                  { name: "AMC", desc: "Australian Medical Council - conducts examinations for IMGs" },
                  { name: "RACGP", desc: "Royal Australian College of General Practitioners - fellowship training" },
                  { name: "ACRRM", desc: "Australian College of Rural and Remote Medicine - rural pathway" },
                ].map((org) => (
                  <div key={org.name} className="p-4 bg-white/10 rounded-xl border border-white/10">
                    <div className="font-semibold text-amber-300">{org.name}</div>
                    <div className="text-sm text-sky-200">{org.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-sky-300">
              Common questions about the registration process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sky-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#082f4a] to-[#0c4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Registration Journey?
          </h2>
          <p className="text-xl text-sky-300 mb-8">
            Use our interactive tools to check your eligibility, calculate costs, 
            and track your progress through the registration process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
              onClick={() => window.location.href='/checklist/'}
            >
              Get Documents Checklist
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-sky-200 hover:bg-white/10 hover:text-white bg-transparent"
              onClick={() => window.location.href='/calculator/'}
            >
              Calculate Costs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
