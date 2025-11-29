"use client"

import { Link, useLocation } from "wouter"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { PillButton } from "./PillButton"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Payments", href: "/payments" },
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "ZtakeX", href: "/ztakex" },
  { label: "Developers", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [location] = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[40px] bg-white/70 dark:bg-gray-900/60 border-b border-white/30 dark:border-white/15 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* FIXED DYNAMIC LOGO */}
          <Link href="/" prefetch={false}>
            <img
              src={theme === "dark" ? "/Ztake-logo-dark.png" : "/Ztake-logo-light.png"}
              alt="Ztake Logo"
              className="h-8 w-auto cursor-pointer select-none transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active =
                location === link.href || location.startsWith(link.href + "/")

              return (
                <Link key={link.href} href={link.href}>
                  <div
                    className={cn(
                      "px-4 py-2 rounded-[20px] text-sm font-medium cursor-pointer",
                      "transition-all duration-300 backdrop-blur-md",
                      "hover:bg-white/50 dark:hover:bg-white/10 hover:shadow-sm hover:scale-[1.03]",
                      active
                        ? "bg-white/70 dark:bg-white/20 text-primary shadow-sm"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[16px] backdrop-blur-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-300 shadow-sm hover:scale-[1.05]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <div className="hidden md:flex items-center space-x-2">
              <PillButton variant="ghost" href="/contact">
                Contact Sales
              </PillButton>
              <PillButton variant="default" href="/contact">
                Get Started
              </PillButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-[16px] backdrop-blur-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-300 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-[40px] bg-white/85 dark:bg-gray-900/70 border-t border-white/30 dark:border-white/15 transition-all duration-300">
          <div className="px-4 py-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => {
              const active =
                location === link.href || location.startsWith(link.href + "/")

              return (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-[16px] text-sm font-medium cursor-pointer transition-all duration-300",
                      "hover:bg-white/60 dark:hover:bg-white/10 hover:shadow-sm hover:scale-[1.02]",
                      active
                        ? "bg-white/70 dark:bg-white/15 text-primary shadow-sm"
                        : "text-foreground/70"
                    )}
                  >
                    {link.label}
                  </div>
                </Link>
              )
            })}

            <div className="flex flex-col space-y-2 pt-2">
              <PillButton variant="outline" href="/contact">
                Contact Sales
              </PillButton>
              <PillButton variant="default" href="/contact">
                Get Started
              </PillButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
