"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Pizza,
  PieChart,
  Briefcase,
  Clock,
  CalendarCheck,
  FileText,
  Search,
  Scissors,
  Stethoscope,
  MessageSquare,
  ImageIcon,
  BarChart,
  Handshake,
  Bell,
  FileScanIcon as FileAnalytics,
  HelpCircle,
  Wrench,
  MonitorSmartphone,
} from "lucide-react"

const botExamples = [
  {
    id: 1,
    title: "Agendador de Turnos",
    description:
      "Automatiza la gestión de citas para peluquerías, centros médicos y servicios profesionales. Reduce las cancelaciones con recordatorios automáticos.",
    icons: [
      <Calendar key="calendar" className="w-10 h-10 text-primary" />,
      <Scissors key="scissors" className="w-6 h-6 text-blue-400" />,
      <Stethoscope key="stethoscope" className="w-6 h-6 text-green-400" />,
    ],
    color: "from-blue-500/20 to-primary/20",
  },
  {
    id: 2,
    title: "Asistente Nutricional",
    description:
      "Analiza imágenes de comidas, calcula macronutrientes y calorías, y te ayuda a seguir tu dieta con recomendaciones personalizadas.",
    icons: [
      <Pizza key="pizza" className="w-10 h-10 text-primary" />,
      <ImageIcon key="image" className="w-6 h-6 text-orange-400" />,
      <PieChart key="piechart" className="w-6 h-6 text-green-400" />,
    ],
    color: "from-green-500/20 to-primary/20",
  },
  {
    id: 3,
    title: "Vendedor Virtual",
    description:
      "Especializado en ventas, califica leads, cierra ventas y agenda reuniones con potenciales clientes, aumentando tu tasa de conversión.",
    icons: [
      <Briefcase key="briefcase" className="w-10 h-10 text-primary" />,
      <BarChart key="barchart" className="w-6 h-6 text-yellow-400" />,
      <Handshake key="handshake" className="w-6 h-6 text-blue-400" />,
    ],
    color: "from-yellow-500/20 to-primary/20",
  },
  {
    id: 4,
    title: "Asistente de Rutina",
    description:
      "Conectado a tu Google Calendar, te ayuda a seguir tu rutina diaria con recordatorios personalizados y gestión eficiente de tu tiempo.",
    icons: [
      <Clock key="clock" className="w-10 h-10 text-primary" />,
      <CalendarCheck key="calendarcheck" className="w-6 h-6 text-purple-400" />,
      <Bell key="bell" className="w-6 h-6 text-red-400" />,
    ],
    color: "from-purple-500/20 to-primary/20",
  },
  {
    id: 5,
    title: "Analista de Documentos",
    description:
      "Procesa facturas y documentos, extrae información clave, y organiza los datos para facilitar la gestión administrativa de tu negocio.",
    icons: [
      <FileText key="filetext" className="w-10 h-10 text-primary" />,
      <Search key="search" className="w-6 h-6 text-orange-400" />,
      <FileAnalytics key="fileanalytics" className="w-6 h-6 text-blue-400" />,
    ],
    color: "from-red-500/20 to-primary/20",
  },
  {
    id: 6,
    title: "Soporte Técnico 24/7",
    description:
      "Resuelve problemas técnicos comunes, guía a los usuarios paso a paso y escala incidencias complejas al equipo adecuado cuando sea necesario.",
    icons: [
      <HelpCircle key="help" className="w-10 h-10 text-primary" />,
      <Wrench key="wrench" className="w-6 h-6 text-indigo-400" />,
      <MonitorSmartphone key="devices" className="w-6 h-6 text-cyan-400" />,
    ],
    color: "from-indigo-500/20 to-primary/20",
  },
]

export default function CrearBotPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-foreground mb-8">
            Creá tu Agente
            <span className="block text-primary">en Vivo</span>
          </h1>

          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Responde preguntas acerca de tu negocio para poder conocerte mejor y poder crear un bot a tu medida que
            podrás probar en vivo
          </motion.p>

          <motion.div
            className="mt-8 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/formulario-bot">
              <Button className="apple-button text-lg px-8 py-4">Comenzar</Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Ejemplos de Bots */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Ejemplos de Agentes</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Descubre las posibilidades de automatización con nuestros agentes inteligentes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {botExamples.map((example, index) => (
              <motion.div
                key={example.id}
                className={`bg-gradient-to-br ${example.color} p-8 rounded-2xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-background p-3 rounded-xl shadow-md">{example.icons[0]}</div>
                  <div className="flex gap-2">
                    <div className="bg-background p-2 rounded-full shadow-md">{example.icons[1]}</div>
                    <div className="bg-background p-2 rounded-full shadow-md">{example.icons[2]}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{example.title}</h3>
                <p className="text-muted-foreground mb-6">{example.description}</p>
                <div className="flex items-center gap-2 text-primary">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">Personalizable para tu negocio</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-lg text-muted-foreground mb-8">¿Listo para crear tu propio agente inteligente?</p>
            <Link href="/formulario-bot">
              <Button className="apple-button text-lg px-8 py-4">Crear mi Agente Ahora</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
