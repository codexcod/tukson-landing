import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Bot className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold">
                Tukson<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transformando la atención al cliente con inteligencia artificial avanzada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-2">
              <li>
                <a href="#soluciones" className="text-muted-foreground hover:text-primary">
                  Chatbots Personalizados
                </a>
              </li>
              <li>
                <a href="#soluciones" className="text-muted-foreground hover:text-primary">
                  IA Conversacional
                </a>
              </li>
              <li>
                <a href="#soluciones" className="text-muted-foreground hover:text-primary">
                  Análisis de Datos
                </a>
              </li>
              <li>
                <a href="#soluciones" className="text-muted-foreground hover:text-primary">
                  Integración con WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-muted-foreground">admin@tukson-ai.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-muted-foreground">+54 11 24708693</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span className="text-muted-foreground">Buenos Aires</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">© 2023 Tukson AI. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Términos de Servicio
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
