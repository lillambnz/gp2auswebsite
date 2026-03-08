"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calculator,
  ChevronDown,
  ChevronUp,
  Info,
  DollarSign,
  RefreshCcw,
  Download,
  Share2,
  CheckCircle
} from "lucide-react"

const costCategories = [
  {
    id: "ahpra",
    title: "AHPRA Registration",
    description: "Fees associated with obtaining medical registration in Australia",
    color: "from-teal-500 to-emerald-500",
    items: [
      { id: "amc_mcq", label: "AMC MCQ Examination", amount: 3500, range: "$3,500", note: "One-time exam fee" },
      { id: "amc_clinical", label: "AMC Clinical Examination", amount: 4200, range: "$4,200", note: "If required" },
      { id: "ahpra_registration", label: "AHPRA Annual Registration", amount: 860, range: "$860", note: "Annual fee" },
      { id: "criminal_check", label: "Criminal History Check", amount: 150, range: "$80-200", note: "Varies by country" },
      { id: "document_verify", label: "Document Verification", amount: 500, range: "$300-700", note: "Authentication costs" },
    ],
  },
  {
    id: "english",
    title: "English Language Tests",
    description: "Costs for English proficiency test",
    color: "from-blue-500 to-cyan-500",
    items: [
      { id: "ielts", label: "IELTS Academic", amount: 350, range: "$340-360", note: "Per attempt" },
      { id: "oet", label: "OET (Occupational English Test)", amount: 600, range: "$580-630", note: "Per attempt" },
      { id: "pte", label: "PTE Academic", amount: 300, range: "$280-320", note: "Per attempt" },
    ],
  },
  {
    id: "visa",
    title: "Visa Application",
    description: "Government fees for work visa applications",
    color: "from-amber-500 to-orange-500",
    items: [
      { id: "visa_482", label: "482 TSS Visa (Temporary)", amount: 3115, range: "$3,115+", note: "Main applicant" },
      { id: "visa_186", label: "186 ENS Visa (Permanent)", amount: 4640, range: "$4,640+", note: "Main applicant" },
      { id: "family_visa", label: "Family Members (each)", amount: 1730, range: "$1,500-2,500", note: "Per family member" },
      { id: "migration_agent", label: "Migration Agent Fees", amount: 5000, range: "$3,000-8,000", note: "Varies by agent" },
      { id: "health_exam", label: "Health Examination", amount: 350, range: "$300-400", note: "Per person" },
    ],
  },
  {
    id: "relocation",
    title: "Relocation Costs",
    description: "Moving and initial setup expenses",
    color: "from-purple-500 to-pink-500",
    items: [
      { id: "flights", label: "International Flights", amount: 3000, range: "$1,500-5,000", note: "Depends on family size" },
      { id: "shipping", label: "Household Shipping", amount: 8000, range: "$5,000-15,000", note: "Full container" },
      { id: "temp_accommodation", label: "Temporary Accommodation", amount: 3000, range: "$2,000-5,000", note: "First month" },
      { id: "car", label: "Vehicle Purchase/Hire", amount: 5000, range: "$3,000-8,000", note: "Initial transport" },
    ],
  },
  {
    id: "living",
    title: "Living Expenses Buffer",
    description: "Emergency fund for initial months before income",
    color: "from-emerald-500 to-green-500",
    items: [
      { id: "buffer_3months", label: "3-Month Living Buffer", amount: 12000, range: "$10,000-15,000", note: "For family of 2-3" },
      { id: "school_fees", label: "School Enrollment Fees", amount: 1500, range: "$500-3,000", note: "If applicable" },
      { id: "insurance", label: "Health Insurance (3 months)", amount: 1500, range: "$1,200-2,000", note: "While waiting for Medicare" },
    ],
  },
]

type SelectedItems = { [key: string]: boolean }

export default function CalculatorPage() {
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({
    ahpra_registration: true,
    criminal_check: true,
    document_verify: true,
    ielts: true,
    visa_482: true,
    health_exam: true,
    flights: true,
    buffer_3months: true,
  })
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
    ahpra: true,
    english: true,
    visa: true,
    relocation: true,
    living: true,
  })

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const calculateTotal = () => {
    let total = 0
    costCategories.forEach((category) => {
      category.items.forEach((item) => {
        if (selectedItems[item.id]) {
          total += item.amount
        }
      })
    })
    return total
  }

  const getCategoryTotal = (categoryId: string) => {
    const category = costCategories.find((c) => c.id === categoryId)
    if (!category) return 0
    return category.items.reduce(
      (sum, item) => (selectedItems[item.id] ? sum + item.amount : sum),
      0
    )
  }

  const total = calculateTotal()

  const resetToDefaults = () => {
    setSelectedItems({
      ahpra_registration: true,
      criminal_check: true,
      document_verify: true,
      ielts: true,
      visa_482: true,
      health_exam: true,
      flights: true,
      buffer_3months: true,
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 relative overflow-hidden">
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
              <Calculator className="inline-block w-4 h-4 mr-1" />
              Cost Calculator
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Plan Your Budget to Move to Australia
            </h1>
            <p className="text-xl text-amber-100">
              Calculate the total cost of relocating to Australia as a GP.
              Select the expenses that apply to your situation for an accurate estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cost Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Select Your Expenses</h2>
                <Button variant="ghost" size="sm" onClick={resetToDefaults} className="gap-2">
                  <RefreshCcw className="w-4 h-4" />
                  Reset
                </Button>
              </div>

              {costCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <button
                      className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                            <DollarSign className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                            <p className="text-xs text-gray-500">{category.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-gray-900">
                            ${getCategoryTotal(category.id).toLocaleString()}
                          </span>
                          {expandedCategories[category.id] ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </button>

                    {expandedCategories[category.id] && (
                      <CardContent className="p-0">
                        <Separator />
                        <div className="p-4 space-y-2">
                          {category.items.map((item) => (
                            <label
                              key={item.id}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={!!selectedItems[item.id]}
                                onChange={() => toggleItem(item.id)}
                                className="w-4 h-4 rounded accent-teal-600"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-gray-900 text-sm">{item.label}</span>
                                  <span className="font-semibold text-gray-900">${item.amount.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-xs text-gray-500">Range: {item.range}</span>
                                  {item.note && (
                                    <>
                                      <span className="text-gray-300">•</span>
                                      <span className="text-xs text-gray-400">{item.note}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="sticky top-28 space-y-4">
                <Card className="overflow-hidden shadow-xl">
                  <CardHeader className="bg-gradient-to-br from-teal-600 to-emerald-600 text-white p-6">
                    <CardTitle className="text-2xl">Total Estimate</CardTitle>
                    <div className="text-5xl font-bold mt-2">
                      ${total.toLocaleString()}
                    </div>
                    <p className="text-teal-100 text-sm mt-2">AUD · Based on your selections</p>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      {costCategories.map((category) => {
                        const catTotal = getCategoryTotal(category.id)
                        if (catTotal === 0) return null
                        return (
                          <div key={category.id} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{category.title}</span>
                            <span className="font-medium text-gray-900">${catTotal.toLocaleString()}</span>
                          </div>
                        )
                      })}
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>

                    <p className="text-xs text-gray-500">
                      <Info className="inline w-3 h-3 mr-1" />
                      These are estimates only. Actual costs may vary based on your specific situation, family size, and when you apply.
                    </p>

                    <div className="space-y-2">
                      <Button className="w-full" variant="default">
                        <Download className="w-4 h-4 mr-2" />
                        Download Estimate (PDF)
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Estimate
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Tips */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">💰 Cost-Saving Tips</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {[
                        "Many clinics offer relocation assistance packages",
                        "Rural and remote areas offer higher GP incentives",
                        "Some states offer settlement support grants",
                        "DWS (District of Workforce Shortage) areas have fewer restrictions",
                      ].map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Warning about accuracy */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-900 text-sm mb-1">Disclaimer</h4>
                      <p className="text-xs text-amber-700">
                        Fees shown are approximate estimates for 2024-2025. Government fees change regularly.
                        Always verify current fees on official government websites before making financial decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
