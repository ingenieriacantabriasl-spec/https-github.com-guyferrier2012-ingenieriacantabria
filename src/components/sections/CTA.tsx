import Link from "next/link"
import { Phone } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#d4631a]">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)"
      }} />
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white opacity-5" />
      <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-white opacity-5" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-6">
          ¿Tiene un proyecto en mente?
        </h2>
        <p className="text-orange-100 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Cuéntenos qué necesita. Le respondemos en menos de 24 horas con un presupuesto sin compromiso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#d4631a] font-heading font-bold text-base rounded-sm hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Solicitar presupuesto gratuito →
          </Link>
          <a
            href="tel:+34623967087"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-heading font-semibold text-base rounded-sm hover:bg-white hover:text-[#d4631a] transition-all duration-300 hover:scale-105"
          >
            <Phone size={16} /> +34 623 96 70 87
          </a>
        </div>
      </div>
    </section>
  )
}
