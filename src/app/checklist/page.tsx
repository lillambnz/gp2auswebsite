"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  CheckSquare, 
  FileText, 
  GraduationCap, 
  Plane, 
  Home,
  Briefcase,
  Download,
  RotateCcw,
  CheckCircle,
  Circle,
  Star
} from "lucide-react"

const checklistData = [
  {
    id: "qualifications",
    title: "Qualifications & Documents",
    icon: GraduationCap,
    items: [
      { id: "q1", text: "Primary medical degree certificate", required: true },
      { id: "q2", text: "Medical school transcripts", required: true },
      { id: "q3", text: "Internship completion certificate", required: true },
      { id: "q4", text: "Postgraduate qualifications", required: false },
      { id: "q5", text: "Specialist qualification certificates", required: false },
      { id: "q6", text: "Medical registration certificates from all countries", required: true },
      { id: "q7", text: "Good standing certificates from all medical councils", required: true },
      { id: "q8", text: "Work experience certificates/References", required: true },
    ],
  },
  {
    id: "ahpra",
    title: "AHPRA Registration",
    icon: FileText,
    items: [
      { id: "a1", text: "AMC MCQ certificate", required: true },
      { id: "a2", text: "AMC Clinical exam certificate / WBA", required: true },
      { id: "a3", text: "English language test results (IELTS/OET)", required: true },
      { id: "a4", text: "EPIC verification for all documents", required: true },
      { id: "a5", text: "Proof of identity (passport, birth certificate)", required: true },
      { id: "a6", text: "Name change documentation (if applicable)", required: false },
      { id: "a7", text: "Curriculum Vitae (structured format)", required: true },
      { id: "a8", text: "Professional indemnity insurance", required: true },
    ],
  },
  {
    id: "visa",
    title: "Visa Application",
    icon: FileText,
    items: [
      { id: "v1", text: "Valid passport (6+ months)", required: true },
      { id: "v2", text: "Skills assessment from AMC", required: true },
      { id: "v3", text: "Expression of Interest (EOI) submission", required: false },
      { id: "v4", text: "Health examination results", required: true },
      { id: "v5", text: "Police clearance certificates (all countries)", required: true },
      { id: "v6", text: "Marriage certificate (if applicable)", required: false },
      { id: "v7", text: "Birth certificates for children", required: false },
      { id: "v8", text: "Evidence of funds/financial capacity", required: true },
    ],
  },
  {
    id: "travel",
    title: "Travel & Arrival",
    icon: Plane,
    items: [
      { id: "t1", text: "Flight bookings", required: true },
      { id: "t2", text: "Travel insurance", required: true },
      { id: "t3", text: "International driving permit", required: false },
      { id: "t4", text: "Medication prescriptions & records", required: true },
      { id: "t5", text: "Vaccination records", required: true },
      { id: "t6", text: "Emergency contacts list", required: true },
      { id: "t7", text: "Temporary accommodation booked", required: true },
    ],
  },
  {
    id: "settling",
    title: "Settling In",
    icon: Home,
    items: [
      { id: "s1", text: "Apply for Tax File Number (TFN)", required: true },
      { id: "s2", text: "Open Australian bank account", required: true },
      { id: "s3", text: "Apply for Medicare card", required: true },
      { id: "s4", text: "Get Australian phone number", required: true },
      { id: "s5", text: "Long-term rental secured", required: true },
      { id: "s6", text: "Purchase/arrange vehicle", required: false },
      { id: "s7", text: "Enroll children in school (if applicable)", required: false },
      { id: "s8", text: "Connect utilities (electricity, gas, internet)", required: true },
    ],
  },
  {
    id: "work",
    title: "Employment Setup",
    icon: Briefcase,
    items: [
      { id: "w1", text: "Job offer letter/contract signed", required: true },
      { id: "w2", text: "Provider number application submitted", required: true },
      { id: "w3", text: "Medicare provider registration", required: true },
      { id: "w4", text: "Professional indemnity insurance arranged", required: true },
      { id: "w5", text: "RACGP/ACRRM membership", required: true },
      { id: "w6", text: "CPD (continuing professional development) plan", required: true },
    ],
  },
]

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const getProgress = (category: typeof checklistData[0]) => {
    const checked = category.items.filter(item => checkedItems[item.id]).length
    return { checked, total: category.items.length, percentage: Math.round((checked / category.items.length) * 100) }
  }

  const getOverallProgress = () => {
    const total = checklistData.reduce((acc, cat) => acc + cat.items.length, 0)
    const checked = Object.values(checkedItems).filter(Boolean).length
    return { checked, total, percentage: Math.round((checked / total) * 100) }
  }

  const overall = getOverallProgress()

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
              Documents Checklist
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Track Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                Progress
              </span>
            </h1>
            <p className="text-xl text-sky-200">
              Interactive checklist to ensure you have all documents ready for your 
              AHPRA registration, visa application, and move to Australia.
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

      {/* Progress Bar */}
      <section className="py-6 bg-[#0c4a6e]/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">Overall Progress</span>
            <span className="text-sm font-medium text-amber-400">{overall.percentage}% Complete</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
              style={{ width: `${overall.percentage}%` }}
            />
          </div>
          <p className="text-sm text-sky-400 mt-2">
            {overall.checked} of {overall.total} items completed
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {checklistData.map((category, catIndex) => {
                const progress = getProgress(category)
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                              <category.icon className="w-5 h-5 text-amber-400" />
                            </div>
                            <div>
                              <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                              <p className="text-sm text-sky-400">
                                {progress.checked} of {progress.total} completed
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-amber-400">{progress.percentage}%</span>
                          </div>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden mt-3">
                          <div 
                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                            style={{ width: `${progress.percentage}%` }}
                          />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {category.items.map((item) => (
                            <label
                              key={item.id}
                              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                                checkedItems[item.id] 
                                  ? 'bg-amber-500/10 border border-amber-500/30' 
                                  : 'hover:bg-white/5 border border-transparent'
                              }`}
                            >
                              <button
                                onClick={() => toggleItem(item.id)}
                                className="flex-shrink-0"
                              >
                                {checkedItems[item.id] ? (
                                  <CheckCircle className="w-6 h-6 text-amber-400" />
                                ) : (
                                  <Circle className="w-6 h-6 text-sky-600" />
                                )}
                              </button>
                              <span className={`flex-grow ${checkedItems[item.id] ? 'text-sky-200 line-through' : 'text-sky-200'}`}>
                                {item.text}
                              </span>
                              {item.required && (
                                <span className="px-2 py-0.5 bg-red-500/20 text-red-300 rounded text-xs font-medium border border-red-500/30">
                                  Required
                                </span>
                              )}
                            </label>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-48 space-y-6">
                <Card className="bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#d97706] text-white border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5" />
                      Your Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center py-4">
                      <div className="text-5xl font-bold text-white mb-2">
                        {overall.percentage}%
                      </div>
                      <p className="text-orange-100">
                        {overall.checked} of {overall.total} items checked
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/20 space-y-3">
                      <Button 
                        className="w-full bg-white text-orange-600 hover:bg-gray-100"
                        onClick={() => alert('PDF export coming soon!')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Export Checklist
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-white/30 text-white hover:bg-white/10"
                        onClick={() => setCheckedItems({})}
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset All
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-base text-white">Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-sky-300 space-y-3">
                    <p>• Start gathering documents early — some take months</p>
                    <p>• Get certified copies of all original documents</p>
                    <p>• Keep digital backups in cloud storage</p>
                    <p>• EPIC verification can take 6-8 weeks</p>
                    <p>• Police clearances expire — time them carefully</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
