import { GraduationCap, MapPin, Clock, MessageCircle, DollarSign, ShieldCheck } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

const reasons = [
  { icon: GraduationCap, title: "Ingenieros colegiados", description: "Todo nuestro equipo está debidamente colegiado, garantizando la validez legal y técnica de cada proyecto." },
  { icon: MapPin, title: "Conocemos Cantabria", description: "15 años trabajando en la región nos dan un conocimiento profundo de normativa local, organismos y mercado." },
  { icon: Clock, title: "Plazos cumplidos", description: "Entregamos en plazo o le avisamos con antelación. Nunca dejamos a un cliente sin respuesta." },
  { icon: MessageCircle, title: "Comunicación directa", description: "Trato directo con el ingeniero responsable, sin intermediarios. Respuesta en menos de 24 horas." },
  { icon: DollarSign, title: "Presupuesto claro", description: "Precios transparentes desde el primer momento. Sin costes ocultos ni sorpresas en la factura final." },
  { icon: ShieldCheck, title: "Seguros de RC", description: "Contamos con seguro de responsabilidad civil profesional para proteger su proyecto." },
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="section-line" />
            <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase mb-3">
              Por qué elegirnos
            </p>
            <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-6">
              Rigor técnico y compromiso con el cliente
            </h2>
            <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-8">
              En Ingeniería Cantabria no somos una gran consultora anónima. Somos un equipo técnico local con nombre y apellidos, comprometidos con cada proyecto como si fuera el nuestro.
            </p>
            <div className="bg-white border-l-4 border-[#d4631a] p-6 rounded-sm shadow-sm">
              <p className="text-[#1a3a5c] font-body text-base italic leading-relaxed">
                &ldquo;Más de 200 proyectos completados en Cantabria. Cada uno tratado con la misma atención y rigor que el primero.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} className={`fade-up-delay-${(i % 4) + 1}`}>
                <div className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-default flex items-start gap-4 border border-gray-100">
                  <div className="w-10 h-10 bg-[#f0f4f8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <reason.icon size={20} color="#1a3a5c" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-[#1a3a5c] font-heading font-semibold text-sm mb-1">{reason.title}</h3>
                    <p className="text-[#4a6080] font-body text-xs leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
