"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en hacerse un proyecto de legalización?",
    a: "Depende del tipo de instalación y del organismo implicado. En general, la redacción del proyecto lleva entre 1 y 3 semanas. La tramitación ante organismos como Industria de Cantabria puede tardar entre 1 y 3 meses adicionales.",
  },
  {
    q: "¿Trabajáis en toda Cantabria o solo en Torrelavega?",
    a: "Trabajamos en toda la comunidad autónoma de Cantabria: Santander, Torrelavega, Laredo, Reinosa, Castro Urdiales, Comillas y cualquier otro municipio de la región.",
  },
  {
    q: "¿El presupuesto inicial tiene algún coste?",
    a: "No. El presupuesto inicial y la primera consulta técnica son completamente gratuitos y sin compromiso. Solo facturamos cuando decide contratarnos.",
  },
  {
    q: "¿Qué diferencia hay entre un ingeniero técnico y uno superior?",
    a: "Para la gran mayoría de proyectos, obras e instalaciones industriales, un ingeniero técnico colegiado tiene exactamente las mismas atribuciones legales que un superior. La colegiación es lo que garantiza la validez de los documentos técnicos.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-padding bg-[#f5f7fa]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-px bg-[#d4631a]" />
            <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase">
              Preguntas frecuentes
            </p>
            <span className="w-10 h-px bg-[#d4631a]" />
          </div>
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl">
            Resolvemos sus dudas
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i}>
              <div className="bg-white border border-[#e8ecf0] rounded-sm overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-[#1a3a5c] font-heading font-bold text-sm leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#d4631a] flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-[#4a6080] font-body text-sm leading-relaxed border-t border-[#f0f4f8]">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
