"use client"

import { motion } from "framer-motion"
import { Check, Bot, FileText, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Básico",
    description: "Ideal para pequeñas empresas que quieren comenzar con la automatización",
    features: [
      "Chatbot básico para WhatsApp",
      "Configuración del agente de IA",
      "Panel de control básico",
      "Auditoría del agente",
    ],
    icon: <Bot className="h-10 w-10 text-primary" />,
    popular: false,
    buttonText: "Comenzar Gratis",
  },
  {
    name: "Standard",
    description: "Para empresas que necesitan funcionalidades avanzadas",
    features: [
      "Todo lo del plan Básico",
      "Inteligencia más avanzada",
      "Reconocimiento de archivos",
      "Soporte de múltiples idiomas",
      "Panel de control de contactos",
    ],
    icon: <FileText className="h-10 w-10 text-primary" />,
    popular: true,
    buttonText: "Solicitar Demo",
    highlights: ["Inteligencia más avanzada", "Reconocimiento de archivos", "Soporte de múltiples idiomas"],
  },
  {
    name: "Deluxe",
    description: "Solución completa para empresas con necesidades complejas",
    features: [
      "Todo lo del plan Standard",
      "Múltiples usuarios en un mismo chat",
      "Integraciones personalizadas",
      "Análisis de datos de sus clientes",
    ],
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    popular: false,
    buttonText: "Solicitar Demo",
    highlights: [
      "Múltiples usuarios en un mismo chat",
      "Integraciones personalizadas",
      "Análisis de datos de sus clientes",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Nuestros Planes</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu empresa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-background rounded-2xl shadow-lg overflow-hidden border-2 ${
                plan.popular ? "border-primary" : "border-transparent"
              } relative`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Más popular
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">{plan.icon}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        className={`h-5 w-5 mr-2 mt-0.5 ${
                          plan.highlights && plan.highlights.includes(feature)
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                      <span
                        className={
                          plan.highlights && plan.highlights.includes(feature)
                            ? "font-medium text-foreground"
                            : "text-muted-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => {
                    if (plan.name === "Básico") {
                      window.open("https://tukson-ai.com/registro", "_blank")
                    } else {
                      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            ¿Necesitas una solución personalizada?{" "}
            <a href="#contacto" className="text-primary hover:underline">
              Contáctanos
            </a>{" "}
            para un plan a medida.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
