"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon, Bot } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  const handleNavClick = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tukson AI</span>
            <div className="flex items-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">
                Tukson<span className="text-foreground">AI</span>
              </span>
            </div>
          </Link>
        </div>

        {/* links ocultos en móvil */}
        <div className="hidden md:flex gap-x-12">
          <button
            onClick={() => handleNavClick("soluciones")}
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Soluciones
          </button>
          <button
            onClick={() => handleNavClick("beneficios")}
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Beneficios
          </button>
          <Link
            href="/crear-bot"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Crear Agente en Vivo
          </Link>
          <button
            onClick={() => handleNavClick("contacto")}
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Contacto
          </button>
        </div>

        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
