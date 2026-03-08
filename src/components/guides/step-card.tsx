"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, Clock, AlertCircle } from "lucide-react"
import { type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface StepCardProps {
  number: string
  title: string
  description: string
  icon: LucideIcon
  estimatedTime?: string
  difficulty?: "easy" | "medium" | "hard"
  requirements?: string[]
  details?: string
  tips?: string[]
  defaultExpanded?: boolean
}

export function StepCard({
  number,
  title,
  description,
  icon: Icon,
  estimatedTime,
  difficulty,
  requirements,
  details,
  tips,
  defaultExpanded = false,
}: StepCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const difficultyColors = {
    easy: "success",
    medium: "warning",
    hard: "destructive",
  } as const

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start gap-4">
          {/* Number Badge */}
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
            <span className="text-white font-bold text-lg">{number}</span>
          </div>

          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-teal-600" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-gray-400 transition-transform flex-shrink-0",
                  isExpanded && "transform rotate-180"
                )}
              />
            </div>
            <p className="text-gray-600 mb-3">{description}</p>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-2">
              {estimatedTime && (
                <Badge variant="secondary" className="gap-1">
                  <Clock className="w-3 h-3" />
                  {estimatedTime}
                </Badge>
              )}
              {difficulty && (
                <Badge variant={difficultyColors[difficulty]}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 space-y-6 border-t border-gray-100">
              {/* Details */}
              {details && (
                <div className="pt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Details</h4>
                  <p className="text-gray-600 leading-relaxed">{details}</p>
                </div>
              )}

              {/* Requirements */}
              {requirements && requirements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tips */}
              {tips && tips.length > 0 && (
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-900 mb-3">💡 Pro Tips</h4>
                  <ul className="space-y-2">
                    {tips.map((tip, index) => (
                      <li key={index} className="text-sm text-teal-800 leading-relaxed">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
