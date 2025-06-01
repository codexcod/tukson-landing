"use client"

import { motion } from "framer-motion"
import { Bot, BrainCircuit, BarChart, Zap } from "lucide-react"

const steps = [
  {
    icon: <Bot className="w-12 h-12 text-primary" />,
    title: "Análisis y Diseño",
    description:
      "Estudiamos tu negocio y diseñamos un chatbot personalizado que refleje tu marca y objetivos específicos.",
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-primary" />,
    title: "Entrenamiento IA",
    description:
      "Alimentamos al sistema con datos relevantes de tu industria y empresa para crear respuestas precisas y naturales.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "Implementación y Pruebas",
    description:
      "Integramos el chatbot en tus canales y realizamos pruebas exhaustivas para garantizar su funcionamiento óptimo.",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Mejora Continua",
    description:
      "Analizamos el rendimiento y refinamos constantemente el sistema para mejorar la experiencia del usuario.",
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Cómo Funciona</h2>
          <p className="text-lg text-muted-foreground">
            Un proceso simple para transformar tu atención al cliente con inteligencia artificial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-background p-6 rounded-xl shadow-md border border-border hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contacto" className="apple-button inline-flex items-center">
            Solicitar Demostración
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
