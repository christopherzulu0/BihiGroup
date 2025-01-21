"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, SearchIcon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "@/components/search"
import { cn } from "@/lib/utils"

type RouteItem = {
  href: string
  label: string
}

type Route = {
  label: string
  href?: string
  items?: RouteItem[]
}

const routes: Route[] = [
  {
    label: "Who We Are",
    items: [
      { href: "/about", label: "About Us" },
      { href: "/vision", label: "Our Vision" },
      { href: "/leadership", label: "Leadership" },
    ]
  },
  {
    label: "What We Do",
    items: [
      { href: "/agriculture-livestock", label: "Agriculture & Livestock" },
      { href: "/manufacturing", label: "Manufacturing" },
      { href: "/food-and-beverage", label: "Food & Beverage" },
      { href: "/real-estate-development", label: "Real Estate" },
      { href: "/technology", label: "Technology" },
      { href: "/mining", label: "Mining" },
      { href: "/transportation-logistics", label: "Transportation" },
      { href: "/renewable-energy", label: "Renewable Energy" },
    ]
  },
  {
    href: "/news",
    label: "In The News"
  },
  {
    href: "/giving-back",
    label: "Giving Back"
  },
  {
    href: "/careers",
    label: "Careers"
  }
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                BihiGroup
              </span>
            </Link>
          </motion.div>
          <nav className="hidden lg:flex items-center space-x-8">
            {routes.map((route, index) => (
              route.items ? (
                <NavDropdown
                  key={`dropdown-${index}`}
                  label={route.label}
                  items={route.items}
                  isActive={route.items.some(item => pathname === item.href)}
                />
              ) : (
                <NavItem
                  key={`link-${route.href}`}
                  href={route.href!}
                  label={route.label}
                  isActive={pathname === route.href}
                />
              )
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
              >
                <SearchIcon className="h-5 w-5" />
              </Button>
            </motion.div>
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "200px" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Search />
                </motion.div>
              )}
            </AnimatePresence>
            <ThemeToggle />
            <Button asChild className="hidden lg:inline-flex">
              <Link href="/contact">Contact</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {routes.map((route, index) => (
                    route.items ? (
                      <MobileNavDropdown
                        key={`mobile-dropdown-${index}`}
                        label={route.label}
                        items={route.items}
                      />
                    ) : (
                      <Link
                        key={`mobile-link-${route.href}`}
                        href={route.href!}
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        {route.label}
                      </Link>
                    )
                  ))}
                  <Button className="mt-4" asChild>
                    <Link href="/contact">Contact</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

function NavItem({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary relative",
        isActive && "text-primary"
      )}
    >
      {label}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
          layoutId="underline"
        />
      )}
    </Link>
  )
}

function NavDropdown({ label, items, isActive }: { label: string; items: RouteItem[]; isActive: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(
        "text-sm font-medium transition-colors hover:text-primary flex items-center",
        isActive && "text-primary"
      )}>
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href} className="w-full">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function MobileNavDropdown({ label, items }: { label: string; items: RouteItem[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg font-semibold hover:text-primary transition-colors"
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 ml-4 space-y-2 overflow-hidden"
          >
            {items.map((item) => (
              <motion.div
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="block text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

