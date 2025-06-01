"use client"

import { motion } from "framer-motion"
import { Bot, BrainCircuit, BarChart, Headphones, Globe, FileText } from "lucide-react"

const services = [
  {
    icon: <Bot className="w-12 h-12 mb-4 text-primary" />,
    title: "Chatbots Personalizados",
    description: "Asistentes virtuales adaptados a tu marca y necesidades específicas de tu negocio.",
  },
  {
    icon: <BrainCircuit className="w-12 h-12 mb-4 text-green-500" />,
    title: "IA Conversacional",
    description: "Tecnología avanzada que entiende el lenguaje natural y aprende de cada interacción.",
  },
  {
    icon: <BarChart className="w-12 h-12 mb-4 text-yellow-500" />,
    title: "Análisis de Datos",
    description: "Insights detallados sobre las conversaciones para mejorar tu servicio continuamente.",
  },
  {
    icon: <Headphones className="w-12 h-12 mb-4 text-purple-500" />,
    title: "Integración con WhatsApp",
    description: "Conecta tu chatbot directamente con WhatsApp para atender a tus clientes donde ya están.",
  },
  {
    icon: <Globe className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Soporte Multilingüe",
    description: "Atiende a tus clientes en múltiples idiomas sin barreras de comunicación.",
  },
  {
    icon: <FileText className="w-12 h-12 mb-4 text-red-500" />,
    title: "Procesamiento de Archivos",
    description: "Detecta y procesa audios y archivos enviados por tus clientes para una atención completa.",
  },
]

export default function Services() {
  return (
    <section id="soluciones" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-6 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestras Soluciones
        </motion.h2>
        <motion.p
          className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Automatización inteligente que transforma la manera en que las empresas se conectan con sus clientes
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-background p-6 rounded-lg shadow-md border border-border hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
