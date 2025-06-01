"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "BotifyAI transformó nuestra atención al cliente. Redujimos los tiempos de espera en un 90% y aumentamos la satisfacción del cliente en un 40%.",
    author: "María Rodríguez",
    position: "Directora de Atención al Cliente, TechRetail",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Implementamos el chatbot de BotifyAI y logramos atender 5 veces más consultas con el mismo equipo. La capacidad de aprendizaje del sistema es impresionante.",
    author: "Carlos Méndez",
    position: "CEO, Seguros Confianza",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Nuestros clientes no distinguen cuándo hablan con el bot y cuándo con un agente humano. La transición es perfecta y la experiencia consistente.",
    author: "Laura Sánchez",
    position: "Gerente de Innovación, Banco Futuro",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lo Que Dicen Nuestros Clientes
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-background p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
