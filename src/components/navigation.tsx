"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Guides & Tools",
    href: "#",
    children: [
      { name: "Registration Guide", href: "/registration" },
      { name: "Visa Pathways", href: "/visas" },
      { name: "Jobs Board", href: "/jobs" },
      { name: "Cost Calculator", href: "/calculator" },
      { name: "Documents Checklist", href: "/checklist" },
      { name: "Location Explorer", href: "/locations" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  {
    name: "For Clinics",
    href: "#",
    children: [
      { name: "Post a Job", href: "/jobs/post" },
      { name: "Partnerships", href: "/partnerships" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4">
        <nav className="max-w-7xl mx-auto bg-[#0c4a6e]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg shadow-black/20">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Image
                src="/Gemini_Generated_Image_13cgo313cgo313cg_transparent.png"
                alt="GP2Aus"
                width={160}
                height={60}
                className="h-14 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-sky-200 hover:text-amber-300 transition-colors rounded-lg hover:bg-white/5"
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-[#0c4a6e]/95 backdrop-blur-xl rounded-xl shadow-xl shadow-black/20 border border-white/10 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-sky-200 hover:text-amber-300 hover:bg-white/5 transition-colors"
                          >
                            {child.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-sky-200 hover:text-white hover:bg-white/10"
                onClick={() => window.location.href='/jobs/'}
              >
                Find Jobs
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
                onClick={() => window.location.href='/contact/'}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-sky-200 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-4 mt-2"
          >
            <div className="bg-[#0c4a6e]/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="px-4 py-3">
                      <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                        {item.name}
                      </p>
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-sm text-sky-200 hover:text-amber-300"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-sky-200 hover:text-amber-300 hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  )}
                  {index < navItems.length - 1 && <div className="border-b border-white/10" />}
                </div>
              ))}
              <div className="p-4 space-y-2">
                <Button 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                  onClick={() => { window.location.href='/contact/'; setMobileMenuOpen(false); }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
