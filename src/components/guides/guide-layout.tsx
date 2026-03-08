"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, BookOpen, Download, Share2, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

export interface TableOfContentsItem {
  id: string
  title: string
  level?: number
}

export interface GuideLayoutProps {
  title: string
  description: string
  lastUpdated: string
  readTime: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  breadcrumbs: { label: string; href?: string }[]
  tableOfContents: TableOfContentsItem[]
  relatedGuides?: { title: string; href: string; description: string }[]
  children: React.ReactNode
}

export function GuideLayout({
  title,
  description,
  lastUpdated,
  readTime,
  difficulty,
  category,
  breadcrumbs,
  tableOfContents,
  relatedGuides,
  children,
}: GuideLayoutProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const article = document.getElementById("guide-content")
      if (!article) return

      const { scrollTop } = document.documentElement
      const articleTop = article.offsetTop
      const articleHeight = article.scrollHeight
      const windowHeight = window.innerHeight
      const progress = Math.min(
        100,
        Math.max(0, ((scrollTop - articleTop) / (articleHeight - windowHeight)) * 100)
      )
      setReadingProgress(progress)
    }

    const updateActiveSection = () => {
      const sections = tableOfContents.map((item) =>
        document.getElementById(item.id)
      )

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(tableOfContents[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", updateProgress)
    window.addEventListener("scroll", updateActiveSection)
    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("scroll", updateActiveSection)
    }
  }, [tableOfContents])

  const difficultyColors = {
    Beginner: "success",
    Intermediate: "warning",
    Advanced: "destructive",
  } as const

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1">
        <Progress value={readingProgress} className="rounded-none h-1" />
      </div>

      {/* Header */}
      <div className="bg-gradient-to-br from-teal-600 to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList className="text-teal-200">
              {breadcrumbs.map((crumb, index) => (
                <BreadcrumbItem key={index}>
                  {index < breadcrumbs.length - 1 ? (
                    <>
                      {crumb.href ? (
                        <BreadcrumbLink href={crumb.href} className="hover:text-white">
                          {crumb.label}
                        </BreadcrumbLink>
                      ) : (
                        <span>{crumb.label}</span>
                      )}
                      <BreadcrumbSeparator className="text-teal-300">
                        <ChevronRight className="w-4 h-4" />
                      </BreadcrumbSeparator>
                    </>
                  ) : (
                    <BreadcrumbPage className="text-white font-medium">
                      {crumb.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <BookOpen className="w-3 h-3 mr-1" />
                {category}
              </Badge>
              <Badge variant={difficultyColors[difficulty]}>
                {difficulty}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-teal-100 mb-6">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-teal-200">
              <span>📅 Updated: {lastUpdated}</span>
              <span>⏱️ {readTime} read</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-200 hover:text-white hover:bg-white/10"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-200 hover:text-white hover:bg-white/10"
                >
                  <Printer className="w-4 h-4 mr-1" />
                  Print
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-200 hover:text-white hover:bg-white/10"
                >
                  <Download className="w-4 h-4 mr-1" />
                  PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-3">
            <div id="guide-content" className="space-y-8">
              {children}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            {/* Table of Contents */}
            <div className="sticky top-28">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
                <h2 className="font-semibold text-gray-900 mb-4">
                  In This Guide
                </h2>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={cn(
                        "block py-1.5 px-3 rounded-lg text-sm transition-colors",
                        item.level === 2 ? "pl-6" : "",
                        activeSection === item.id
                          ? "bg-teal-50 text-teal-700 font-medium"
                          : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                      )}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Guides */}
              {relatedGuides && relatedGuides.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="font-semibold text-gray-900 mb-4">
                    Related Guides
                  </h2>
                  <div className="space-y-4">
                    {relatedGuides.map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="block group"
                      >
                        <div className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
                          {guide.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {guide.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
