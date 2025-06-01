"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileAudio, File, ImageIcon, Bot, Zap } from "lucide-react"

export default function WhatsAppIntegration() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Integración con WhatsApp</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conecta tu chatbot directamente con la plataforma de mensajería más utilizada en Latinoamérica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Conversaciones Naturales</h3>
                <p className="text-muted-foreground">
                  Nuestro chatbot mantiene conversaciones fluidas y naturales, entendiendo el contexto y las intenciones
                  del usuario.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileAudio className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Procesamiento de Audios</h3>
                <p className="text-muted-foreground">
                  Transcribe y analiza mensajes de voz para ofrecer respuestas precisas sin importar el formato.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <File className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Gestión de Archivos</h3>
                <p className="text-muted-foreground">
                  Procesa documentos PDF, imágenes y otros archivos enviados por los clientes para una atención
                  integral.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Respuestas Instantáneas</h3>
                <p className="text-muted-foreground">
                  Atiende a tus clientes en segundos, sin tiempos de espera, las 24 horas del día.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 max-w-sm mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold">Tukson AI</h3>
                    <p className="text-xs text-muted-foreground">Asistente virtual</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Ahora</div>
              </div>

              <div className="space-y-4">
                <div className="bg-primary/10 p-3 rounded-lg text-sm">
                  <p>Hola, soy el asistente virtual de Empresa XYZ. ¿En qué puedo ayudarte hoy?</p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg ml-auto text-sm max-w-[80%]">
                  <p>Hola, quisiera saber el estado de mi pedido</p>
                </div>

                <div className="bg-primary/10 p-3 rounded-lg text-sm">
                  <p>
                    Por supuesto. Para ayudarte con el estado de tu pedido, ¿podrías proporcionarme el número de pedido
                    o el correo electrónico asociado a tu compra?
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg ml-auto text-sm max-w-[80%]">
                  <p>Te envío el comprobante</p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg ml-auto text-sm max-w-[80%] flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  <p>comprobante_pedido.pdf</p>
                </div>

                <div className="bg-primary/10 p-3 rounded-lg text-sm">
                  <p>
                    Gracias por enviar el comprobante. He analizado el documento y veo que tu pedido #78901 está en
                    camino. Según el seguimiento, será entregado mañana entre las 10:00 y las 14:00 horas. ¿Necesitas
                    alguna otra información?
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  className="flex-1 p-2 text-sm rounded-full border border-gray-300 dark:border-gray-600 bg-background"
                />
                <button className="bg-primary text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-full shadow-lg">
              <Bot size={24} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
