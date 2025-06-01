"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { Clock, DollarSign, LineChart, Users, Zap, Shield } from "lucide-react"

const features = [
  {
    title: "Disponibilidad 24/7",
    description: "Atención ininterrumpida todos los días del año, sin tiempos de espera para tus clientes.",
    icon: <Clock className="w-10 h-10 text-primary mb-4" />,
  },
  {
    title: "Reducción de Costos",
    description: "Disminuye hasta un 70% los gastos operativos de tu centro de atención al cliente.",
    icon: <DollarSign className="w-10 h-10 text-green-500 mb-4" />,
  },
  {
    title: "Escalabilidad Inmediata",
    description: "Gestiona miles de conversaciones simultáneas sin comprometer la calidad del servicio.",
    icon: <LineChart className="w-10 h-10 text-blue-500 mb-4" />,
  },
  {
    title: "Experiencia Personalizada",
    description: "Interacciones adaptadas al historial y preferencias de cada cliente.",
    icon: <Users className="w-10 h-10 text-yellow-500 mb-4" />,
  },
  {
    title: "Respuestas Instantáneas",
    description: "Resolución inmediata de consultas frecuentes sin tiempos de espera.",
    icon: <Zap className="w-10 h-10 text-purple-500 mb-4" />,
  },
  {
    title: "Transiciones Fluidas",
    description: "Derivación inteligente a agentes humanos cuando sea necesario, con todo el contexto.",
    icon: <Shield className="w-10 h-10 text-red-500 mb-4" />,
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div id="beneficios" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Beneficios de Nuestros Chatbots</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Descubre cómo nuestras soluciones de IA transforman la experiencia de tus clientes y optimizan tus operaciones
        </p>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[400px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="mt-4">
                  <a href="#contacto" className="text-primary hover:underline">
                    Saber más →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
