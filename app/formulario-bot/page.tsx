"use client"

import { useState, type KeyboardEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    id: 1,
    title: "¿Cuál es el nombre de tu empresa?",
    type: "text",
    placeholder: "Ej: Mi Empresa S.A.",
    required: true,
  },
  {
    id: 2,
    title: "¿A qué se dedica tu empresa?",
    type: "textarea",
    placeholder: "Describe brevemente el giro de tu negocio...",
    required: true,
  },
  {
    id: 3,
    title: "¿Qué tipo de consultas reciben más frecuentemente?",
    type: "textarea",
    placeholder: "Ej: Consultas sobre productos, horarios de atención, precios, etc.",
    required: true,
  },
  {
    id: 4,
    title: "¿Cuál es el horario de atención de tu empresa?",
    type: "text",
    placeholder: "Ej: Lunes a Viernes de 9:00 a 18:00",
    required: true,
  },
  {
    id: 5,
    title: "¿Cómo te gustaría que se identifique el Agente?",
    type: "text",
    placeholder: "Ej: Asistente Virtual de [Empresa], Empleado humano, etc.",
    required: true,
  },
  {
    id: 6,
    title: "¿Qué tono de comunicación prefieres para tu bot?",
    type: "select",
    options: [
      { value: "formal", label: "Formal y profesional" },
      { value: "amigable", label: "Amigable y cercano" },
      { value: "casual", label: "Casual y relajado" },
      { value: "tecnico", label: "Técnico y especializado" },
    ],
    required: true,
  },
  {
    id: 7,
    title: "¿Qué acciones te gustaría que el agente realice por vos?",
    type: "textarea",
    placeholder: "Ej: Responder consultas, agendar citas, procesar pedidos, brindar información de productos, etc.",
    required: true,
  },
  {
    id: 8,
    title: "¿Tienes alguna información específica que el bot debe conocer?",
    type: "textarea",
    placeholder: "Ej: Políticas de devolución, métodos de pago, ubicaciones, etc.",
    required: false,
  },
]

export default function FormularioBotPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [botToken, setBotToken] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const currentQuestion = questions[currentSlide]
  const isLastSlide = currentSlide === questions.length - 1
  const canProceed = currentQuestion.required ? answers[currentQuestion.id] : true

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && canProceed) {
      // Para textareas, permitir Enter para nuevas líneas si se presiona Shift+Enter
      if (currentQuestion.type === "textarea" && !e.ctrlKey) {
        return
      }

      e.preventDefault()
      if (isLastSlide) {
        nextSlide()
      } else {
        setCurrentSlide((prev) => prev + 1)
      }
    }
  }

  const nextSlide = async () => {
    if (isLastSlide) {
      setIsSubmitting(true)
      setSubmitError(null)

      try {
        // Crear el mapa de respuestas
        const respuestasMap: Record<string, string> = {}
        questions.forEach((question) => {
          const answer = answers[question.id] || ""
          if (answer) {
            respuestasMap[question.title] = answer
          }
        })

        // Enviar solicitud POST
        const response = await fetch("https://n8n.tukson-ai.com/webhook/generarBotLanding", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            respuestas: respuestasMap,
          }),
        })

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setBotToken(data.token)
        setIsCompleted(true)
      } catch (error) {
        console.error("Error al generar el bot:", error)
        setSubmitError("Hubo un problema al generar tu bot. Por favor, intenta nuevamente.")
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1)
  }

  const renderInput = () => {
    const value = answers[currentQuestion.id] || ""

    switch (currentQuestion.type) {
      case "text":
        return (
          <Input
            value={value}
            onChange={(e) => handleAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={currentQuestion.placeholder}
            className="text-lg p-4 h-14"
            autoFocus
          />
        )
      case "textarea":
        return (
          <Textarea
            value={value}
            onChange={(e) => handleAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={currentQuestion.placeholder}
            className="text-lg p-4 min-h-[120px]"
            autoFocus
          />
        )
      case "select":
        return (
          <Select value={value} onValueChange={handleAnswer}>
            <SelectTrigger className="text-lg p-4 h-14">
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              {currentQuestion.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      default:
        return null
    }
  }

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          className="text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-primary"></div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Generando tu Bot...</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Estamos procesando tu información y creando un bot personalizado para tu empresa. Este proceso puede tomar
            varios minutos, por favor espera.
          </p>
          {submitError && (
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
              <p className="text-red-600 dark:text-red-400">{submitError}</p>
              <Button
                onClick={() => {
                  setIsSubmitting(false)
                  setSubmitError(null)
                }}
                variant="outline"
                className="mt-4"
              >
                Intentar nuevamente
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    )
  }

  if (isCompleted && botToken) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          className="text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">¡Agente Generado Exitosamente!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Tu agente personalizado ha sido creado y está listo para usar.
          </p>

          <div className="flex flex-col gap-6 justify-center items-center">
            <Link href={`/chat-bot?token=${botToken}`} className="w-full">
              <Button className="apple-button text-xl px-12 py-6 h-auto w-full">Chatear con mi Agente</Button>
            </Link>

            <div className="flex flex-col w-full gap-2">
              <p className="text-sm text-muted-foreground">Link del chat con tu agente (guardalo si queres volver a chatear con el):</p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 border border-border flex items-center justify-between">
                <p className="text-sm font-mono text-muted-foreground truncate mr-2">{`https://tuksonai.vercel.app/chat-bot?token=${botToken}`}</p>
                <Button
                  onClick={() => navigator.clipboard.writeText(`https://tuksonai.vercel.app/chat-bot?token=${botToken}`)}
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10 shrink-0"
                >
                  Copiar
                </Button>
              </div>
            </div>

            <Button onClick={() => (window.location.href = "/")} variant="outline" className="w-full">
              Volver al Inicio
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Pregunta {currentSlide + 1} de {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentSlide + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-primary h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Slide */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">{currentQuestion.title}</h1>
                {currentQuestion.required && <p className="text-muted-foreground">* Campo obligatorio</p>}
              </div>

              <div className="max-w-xl mx-auto">{renderInput()}</div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-8">
                <Button
                  variant="outline"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </Button>

                <Button onClick={nextSlide} disabled={!canProceed} className="apple-button flex items-center gap-2">
                  {isLastSlide ? "Finalizar" : "Siguiente"}
                  {!isLastSlide && <ChevronRight className="h-4 w-4" />}
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>Presiona Enter para avanzar a la siguiente pregunta</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
