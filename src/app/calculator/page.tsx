"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calculator, 
  DollarSign, 
  Plane, 
  FileText, 
  Home, 
  GraduationCap,
  RefreshCcw,
  Download,
  Info
} from "lucide-react"

const costCategories = [
  {
    id: "exams",
    title: "Examinations & Assessments",
    icon: GraduationCap,
    items: [
      { name: "AMC MCQ Examination", cost: 2720, checked: true },
      { name: "AMC Clinical Examination", cost: 3530, checked: true },
      { name: "English Language Test (IELTS/OET)", cost: 600, checked: true },
      { name: "Skills Assessment Fee", cost: 300, checked: true },
      { name: "EPIC Verification", cost: 215, checked: true },
    ],
  },
  {
    id: "registration",
    title: "Registration & Legal",
    icon: FileText,
    items: [
      { name: "AHPRA Registration Fee", cost: 860, checked: true },
      { name: "Professional Indemnity Insurance (1st year)", cost: 3500, checked: true },
      { name: "Medical Board Application", cost: 200, checked: false },
    ],
  },
  {
    id: "visa",
    title: "Visa & Immigration",
    icon: FileText,
    items: [
      { name: "Visa Application (482/186/189)", cost: 4640, checked: true },
      { name: "Skilled Migration Agent Fees", cost: 3000, checked: false },
      { name: "Health Examination", cost: 400, checked: true },
      { name: "Police Clearances", cost: 200, checked: true },
    ],
  },
  {
    id: "travel",
    title: "Travel & Relocation",
    icon: Plane,
    items: [
      { name: "Flights (One-way)", cost: 1500, checked: true },
      { name: "Shipping / Excess Baggage", cost: 2000, checked: false },
      { name: "Temporary Accommodation (4 weeks)", cost: 4000, checked: true },
    ],
  },
  {
    id: "settling",
    title: "Settling In",
    icon: Home,
    items: [
      { name: "Rental Bond (4 weeks) + 2 weeks rent", cost: 6000, checked: true },
      { name: "Furniture & Household Items", cost: 5000, checked: false },
      { name: "Vehicle Purchase / Deposit", cost: 10000, checked: false },
      { name: "Living Expenses (3 months buffer)", cost: 15000, checked: true },
    ],
  },
]

export default function CalculatorPage() {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    costCategories.forEach(cat => {
      cat.items.forEach((item, idx) => {
        initial[`${cat.id}-${idx}`] = item.checked
      })
    })
    return initial
  })

  const toggleItem = (catId: string, itemIdx: number) => {
    const key = `${catId}-${itemIdx}`
    setSelectedItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const calculateTotal = () => {
    let total = 0
    costCategories.forEach(cat => {
      cat.items.forEach((item, idx) => {
        if (selectedItems[`${cat.id}-${idx}`]) {
          total += item.cost
        }
      })
    })
    return total
  }

  const calculateMin = () => {
    let total = 0
    costCategories.forEach(cat => {
      cat.items.forEach((item, idx) => {
        if (item.checked) {
          total += item.cost
        }
      })
    })
    return total
  }

  const total = calculateTotal()
  const minimum = calculateMin()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
    }).format(amount)
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
              Cost Calculator
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Plan Your Relocation Budget
            </h1>
            <p className="text-xl text-amber-100">
              Calculate the total cost of moving to Australia as an international GP. 
              Customize the items based on your specific situation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cost Categories */}
            <div className="lg:col-span-2 space-y-6">
              {costCategories.map((category, catIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <Card>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-amber-600" />
                        </div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item, itemIdx) => (
                          <label
                            key={itemIdx}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={selectedItems[`${category.id}-${itemIdx}`] || false}
                                onChange={() => toggleItem(category.id, itemIdx)}
                                className="w-5 h-5 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
                              />
                              <span className="text-gray-700">{item.name}</span>
                            </div>
                            <span className="font-medium text-gray-900">{formatCurrency(item.cost)}</span>
                          </label>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      Total Estimate
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Based on selected items
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-4">
                      <div className="text-5xl font-bold text-amber-400 mb-2">
                        {formatCurrency(total)}
                      </div>
                      <p className="text-sm text-gray-400">Estimated total cost</p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-700">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Minimum essential</span>
                        <span className="font-medium">{formatCurrency(minimum)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Your selection</span>
                        <span className="font-medium">{formatCurrency(total)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Difference</span>
                        <span className="font-medium text-amber-400">
                          {formatCurrency(total - minimum)}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-700 space-y-3">
                      <Button 
                        className="w-full bg-amber-500 hover:bg-amber-600" 
                        onClick={() => alert('PDF download feature coming soon!')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                        onClick={() => {
                          const initial: Record<string, boolean> = {}
                          costCategories.forEach(cat => {
                            cat.items.forEach((item, idx) => {
                              initial[`${cat.id}-${idx}`] = item.checked
                            })
                          })
                          setSelectedItems(initial)
                        }}
                      >
                        <RefreshCcw className="w-4 h-4 mr-2" />
                        Reset
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div className="text-sm text-amber-800">
                        <p className="font-medium mb-1">Important Note</p>
                        <p>These are estimates only. Actual costs may vary. Consider adding 10-15% buffer for unexpected expenses. Some employers offer relocation assistance.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Financing Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-2">
                    <p>• Many clinics offer relocation packages</p>
                    <p>• Some costs are tax deductible</p>
                    <p>• Consider currency exchange rates</p>
                    <p>• Budget for 3-6 months without income</p>
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
