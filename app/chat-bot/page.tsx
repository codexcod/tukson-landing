"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Bot, User, Send, Loader2, Copy, Check, Share2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Message = {
  id: number
  type: "bot" | "user"
  message: string
  timestamp: string
}

export default function ChatBotPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [nombreEmpresa, setNombreEmpresa] = useState<string>("")
  const [isLoadingEmpresa, setIsLoadingEmpresa] = useState(true)
  const [linkCopied, setLinkCopied] = useState(false)
  const [linkShared, setLinkShared] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Función para obtener la hora actual formateada
  const getCurrentTime = () => {
    const now = new Date()
    return `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`
  }

  // Función para obtener el nombre de la empresa
  const fetchNombreEmpresa = async () => {
    if (!token) return

    try {
      const response = await fetch("https://n8n.tukson-ai.com/webhook/getNombreEmpresa", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      setNombreEmpresa(data.nombreEmpresa || "Tu Empresa")
    } catch (error) {
      console.error("Error al obtener nombre de empresa:", error)
      setNombreEmpresa("Tu Empresa")
    } finally {
      setIsLoadingEmpresa(false)
    }
  }

  // Función para copiar el link del bot
  const copyBotLink = async () => {
    const currentUrl = window.location.href
    try {
      await navigator.clipboard.writeText(currentUrl)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    } catch (error) {
      console.error("Error al copiar link:", error)
    }
  }

  // Función para compartir el link del bot
  const shareBotLink = async () => {
    const currentUrl = window.location.href
    const title = `Chatbot de ${nombreEmpresa}`
    const text = `¡Chatea con el asistente virtual de ${nombreEmpresa}!`

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url: currentUrl,
        })
        setLinkShared(true)
        setTimeout(() => setLinkShared(false), 2000)
      } else {
        // Fallback para navegadores que no soportan Web Share API
        await navigator.clipboard.writeText(currentUrl)
        setLinkCopied(true)
        setTimeout(() => setLinkCopied(false), 2000)
      }
    } catch (error) {
      console.error("Error al compartir:", error)
    }
  }

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "541124708693"
    const message = "Hola, estoy interesado en implementar mi agente de Inteligencia Artificial en WhatsApp"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Función para enviar mensaje al bot
  const sendMessageToBot = async (messageText: string) => {
    if (!token) {
      setError("No se encontró el token. Por favor, vuelve a generar tu bot.")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("https://n8n.tukson-ai.com/webhook/chatearBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          mensaje: messageText,
        }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()

      // Añadir respuesta del bot
      const botMessage: Message = {
        id: Date.now(),
        type: "bot",
        message: data.respuesta || "Lo siento, no pude procesar tu solicitud.",
        timestamp: getCurrentTime(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error al enviar mensaje:", error)
      setError("Hubo un problema al comunicarse con el bot. Por favor, intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  // Función para manejar el envío de mensajes
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      message: inputMessage,
      timestamp: getCurrentTime(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    // Enviar mensaje al bot
    await sendMessageToBot(inputMessage)
  }

  // Obtener nombre de empresa al cargar la página
  useEffect(() => {
    if (token) {
      fetchNombreEmpresa()
    }
  }, [token])

  // Enviar "Hola" automáticamente al cargar la página
  useEffect(() => {
    const sendInitialMessage = async () => {
      if (hasInitialized) return

      const initialMessage: Message = {
        id: Date.now(),
        type: "user",
        message: "Hola",
        timestamp: getCurrentTime(),
      }

      setMessages([initialMessage])
      setHasInitialized(true)
      await sendMessageToBot("Hola")
    }

    if (token && !isLoadingEmpresa && !hasInitialized) {
      sendInitialMessage()
    }
  }, [token, isLoadingEmpresa, hasInitialized])

  // Scroll al último mensaje solo cuando hay nuevos mensajes
  useEffect(() => {
    if (messages.length > 1 && messagesContainerRef.current) {
      // Desplazar solo el contenedor de mensajes, no toda la página
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {isLoadingEmpresa ? (
            <div className="flex items-center justify-center gap-2 mb-6">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <span className="text-lg">Cargando...</span>
            </div>
          ) : (
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Agente de </span>
              <span className="text-primary">{nombreEmpresa}</span>
            </h1>
          )}

          {token && (
            <div className="flex flex-col sm:flex-row justify-center gap-2 mb-4">
              <Button
                onClick={copyBotLink}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 flex items-center gap-2"
              >
                {linkCopied ? (
                  <>
                    <Check className="h-4 w-4" />
                    ¡Link Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copiar Link
                  </>
                )}
              </Button>

              <Button
                onClick={shareBotLink}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 flex items-center gap-2"
              >
                {linkShared ? (
                  <>
                    <Check className="h-4 w-4" />
                    ¡Compartido!
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" />
                    Compartir
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Botón de WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 mx-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Integrar con WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Chat Container */}
          <div className="bg-background border border-border rounded-2xl shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-primary/10 p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-2 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">
                    {isLoadingEmpresa ? "Asistente Virtual" : `Asistente de ${nombreEmpresa}`}
                  </h3>
                  <p className="text-sm text-muted-foreground">{isLoading ? "Escribiendo..." : "En línea"}</p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div ref={messagesContainerRef} className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.type === "bot" && <Bot className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />}
                      {message.type === "user" && (
                        <User className="h-4 w-4 mt-1 flex-shrink-0 text-primary-foreground" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{message.message}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.type === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Indicador de escritura */}
              {isLoading && (
                <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error message */}
              {error && (
                <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-lg text-sm">
                    {error}
                  </div>
                </motion.div>
              )}

              {/* Elemento invisible para scroll */}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
                className="flex gap-2"
              >
                <Input
                  placeholder="Escribe tu mensaje..."
                  className="flex-1"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-primary text-primary-foreground"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
