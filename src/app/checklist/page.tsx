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
  Circle
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
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
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
              Documents Checklist
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Track Your Progress
            </h1>
            <p className="text-xl text-emerald-100">
              Interactive checklist to ensure you have all documents ready for your 
              AHPRA registration, visa application, and move to Australia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm font-medium text-teal-600">{overall.percentage}% Complete</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${overall.percentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {overall.checked} of {overall.total} items completed
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12">
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
                    <Card>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                              <category.icon className="w-5 h-5 text-teal-600" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{category.title}</CardTitle>
                              <p className="text-sm text-gray-500">
                                {progress.checked} of {progress.total} completed
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-teal-600">{progress.percentage}%</span>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden mt-3">
                          <div 
                            className="h-full bg-teal-500 transition-all duration-300"
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
                                  ? 'bg-teal-50 border border-teal-200' 
                                  : 'hover:bg-gray-50 border border-transparent'
                              }`}
                            >
                              <button
                                onClick={() => toggleItem(item.id)}
                                className="flex-shrink-0"
                              >
                                {checkedItems[item.id] ? (
                                  <CheckCircle className="w-6 h-6 text-teal-600" />
                                ) : (
                                  <Circle className="w-6 h-6 text-gray-300" />
                                )}
                              </button>
                              <span className={`flex-grow ${checkedItems[item.id] ? 'text-gray-700 line-through' : 'text-gray-700'}`}>
                                {item.text}
                              </span>
                              {item.required && (
                                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">
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
                <Card className="bg-gradient-to-br from-teal-600 to-emerald-700 text-white">
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
                      <p className="text-teal-100">
                        {overall.checked} of {overall.total} items checked
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/20 space-y-3">
                      <Button 
                        className="w-full bg-white text-teal-700 hover:bg-gray-100"
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

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-3">
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
