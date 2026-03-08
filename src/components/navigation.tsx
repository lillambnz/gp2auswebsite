"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Find a Job", href: "/jobs" },
  { name: "For Practices", href: "/partnerships" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                alt="GP2AUS"
                width={160}
                height={60}
                className="h-14 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-sky-200 hover:text-amber-300 transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                size="sm"
                className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white border-0"
                onClick={() => window.location.href = '/contact/'}
              >
                Register as GP
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-amber-400 text-amber-300 hover:bg-amber-500/10 hover:text-amber-200 bg-transparent"
                onClick={() => window.location.href = '/partnerships/'}
              >
                Post a Vacancy
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
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-sky-200 hover:text-amber-300 hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                  {index < navItems.length - 1 && <div className="border-b border-white/10" />}
                </div>
              ))}
              <div className="p-4 space-y-2 border-t border-white/10">
                <Button
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white"
                  onClick={() => { window.location.href = '/contact/'; setMobileMenuOpen(false); }}
                >
                  Register as GP
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-amber-400 text-amber-300 hover:bg-amber-500/10 bg-transparent"
                  onClick={() => { window.location.href = '/partnerships/'; setMobileMenuOpen(false); }}
                >
                  Post a Vacancy
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
