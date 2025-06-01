"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Headphones, Building, Stethoscope, Briefcase, GraduationCap } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Asistente de Compras",
    description: "Chatbot para e-commerce que aumentó las conversiones en un 35%",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "E-commerce",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Soporte Técnico 24/7",
    description: "Resolución automática del 78% de tickets de soporte técnico",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Tecnología",
    icon: <Headphones className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Onboarding Corporativo",
    description: "Automatización del proceso de incorporación de nuevos empleados",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Empresarial",
    icon: <Building className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Asistente Médico Virtual",
    description: "Programación de citas y seguimiento de pacientes para clínicas",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Salud",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Asesor Financiero IA",
    description: "Consultas y gestión de productos bancarios automatizados",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Finanzas",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Tutor Educativo",
    description: "Plataforma de aprendizaje con asistencia personalizada",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Educación",
    icon: <GraduationCap className="w-6 h-6" />,
  },
]

const categories = ["Todos", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("Todos")

  const filteredProjects = filter === "Todos" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="casos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Casos de Éxito</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre cómo nuestros chatbots han transformado empresas en diferentes industrias
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-background p-2 rounded-full">{project.icon}</div>
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <a href="#contacto" className="text-primary hover:underline inline-flex items-center">
                    Ver Detalles
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
