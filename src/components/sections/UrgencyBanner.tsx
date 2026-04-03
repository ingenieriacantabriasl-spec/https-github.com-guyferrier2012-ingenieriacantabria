import Link from "next/link"

export default function UrgencyBanner() {
  return (
    <div className="bg-[#1a3a5c] px-4 py-3.5 flex items-center justify-center gap-4 flex-wrap">
      <div className="flex items-center gap-2 text-white font-body text-sm">
        <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 pulse-glow" />
        <span>
          <strong className="font-heading">Disponible ahora</strong> — Respondemos en menos de 24 horas
        </span>
      </div>
      <Link
        href="#contacto"
        className="bg-[#d4631a] text-white px-5 py-2 rounded-sm font-heading font-bold text-xs tracking-wide hover:bg-[#c25a17] transition-colors whitespace-nowrap"
      >
        Solicitar presupuesto →
      </Link>
    </div>
  )
}
