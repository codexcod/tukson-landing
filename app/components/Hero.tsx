"use client"

import { motion } from "framer-motion"
import { Bot, MessageSquare, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revoluciona tu <span className="text-gradient">Atención al Cliente</span> con IA
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Chatbots inteligentes que entienden, aprenden y resuelven. Automatiza tu servicio al cliente y ofrece
            soporte 24/7 sin perder el toque humano.
          </motion.p>
          <motion.div
            className="mt-20 flex flex-col md:flex-row items-center gap-5 md:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contacto"
              className="apple-button w-full md:w-auto whitespace-nowrap"
            >
              Solicitar Demo
            </a>

            <Link
              href="/crear-bot"
              className="apple-button w-full md:w-auto whitespace-nowrap bg-primary/10 text-primary hover:bg-primary/20"
            >
              Crear Agente en Vivo
            </Link>

            <a
              href="#como-funciona"
              className="text-sm font-semibold leading-6 text-foreground whitespace-nowrap"
            >
              Cómo funciona <span aria-hidden="true">→</span>
            </a>
          </motion.div>

        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-primary/20 to-teal-500/20 p-8 rounded-2xl shadow-xl">
            <div className="absolute -top-4 -left-4 bg-primary text-white p-3 rounded-xl">
              <Bot size={24} />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-background p-3 rounded-lg shadow-md">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <div className="bg-background p-3 rounded-lg shadow-md flex-1">
                  <p className="text-sm">¿En qué puedo ayudarte hoy?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-background p-3 rounded-lg shadow-md flex-1">
                  <p className="text-sm">Necesito cambiar la dirección de envío de mi pedido #12345</p>
                </div>
                <div className="bg-background p-3 rounded-lg shadow-md">
                  <MessageSquare size={20} className="text-foreground" />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-background p-3 rounded-lg shadow-md">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <div className="bg-background p-3 rounded-lg shadow-md flex-1">
                  <p className="text-sm">
                    ¡Claro! He encontrado tu pedido #12345. Puedo ayudarte a cambiar la dirección. ¿Cuál es la nueva
                    dirección de envío?
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-primary/10 px-4 py-2 rounded-full text-xs text-primary flex items-center gap-2">
                  <Zap size={14} />
                  <span>Respuesta en tiempo real</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
