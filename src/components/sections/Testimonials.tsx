import ScrollReveal from "@/components/ui/ScrollReveal"
import { Star } from "lucide-react"

const testimonials = [
  {
    text: "Nos ayudaron con la legalización de toda la maquinaria de nuestra planta. Rápidos, profesionales y sin complicaciones. Totalmente recomendables.",
    name: "Carlos M.",
    role: "Director técnico · Industria metalúrgica",
    initials: "CM",
    color: "#1a3a5c",
  },
  {
    text: "Gestionó la ITE de nuestro edificio de forma impecable. Trato cercano, explicó todo con claridad y resolvió las deficiencias detectadas sin problemas.",
    name: "Ana L.",
    role: "Presidenta comunidad · Santander",
    initials: "AL",
    color: "#2d6a9f",
  },
  {
    text: "Solicitamos un proyecto de explotación ganadera y el asesoramiento para solicitar las subvenciones PAC. Muy eficiente, conoce muy bien el sector.",
    name: "Manuel R.",
    role: "Ganadero · Valle de Cabuérniga",
    initials: "MR",
    color: "#2d6a4f",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-px bg-[#d4631a]" />
            <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase">
              Opiniones de clientes
            </p>
            <span className="w-10 h-px bg-[#d4631a]" />
          </div>
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-[#4a6080] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Más de 200 proyectos completados en Cantabria. Empresas, particulares e instituciones que confían en nosotros.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} className={`fade-up-delay-${i + 1}`}>
              <div className="bg-[#f8fafc] border border-[#e8ecf0] rounded-sm p-7 flex flex-col h-full">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={15} fill="#d4631a" color="#d4631a" />
                  ))}
                </div>
                <p className="text-[#374151] font-body text-sm leading-relaxed italic flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-[#e8ecf0]">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[#1a3a5c] font-heading font-bold text-sm">{t.name}</p>
                    <p className="text-[#6b7280] font-body text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
