import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sobre Nosotros — Jesús Rosas, Ingeniero Técnico en Cantabria",
  description:
    "Conozca a Jesús Rosas, ingeniero técnico colegiado en Torrelavega, Cantabria. Especialista en ingeniería industrial, edificación y agronómica. Proyectos con rigor y compromiso.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/sobre-nosotros" },
}

const values = [
  { icon: "🎯", title: "Rigor técnico", description: "Cada proyecto se ejecuta con la máxima precisión técnica y respeto a la normativa vigente." },
  { icon: "🤝", title: "Compromiso", description: "Trato directo y personalizado. El cliente siempre sabe en qué punto está su proyecto." },
  { icon: "📍", title: "Conocimiento local", description: "Profundo conocimiento de la normativa, organismos y mercado de Cantabria." },
  { icon: "⚡", title: "Agilidad", description: "Respuesta rápida y plazos cumplidos. Sin burocracia innecesaria." },
]

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4d7a 100%)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4631a]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Quién somos
          </p>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Ingeniería Cantabria
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed">
            Despacho de ingeniería técnica en Torrelavega, Cantabria. Especializado en ingeniería industrial, de edificación y agronómica para empresas, particulares y administraciones.
          </p>
        </div>
      </section>

      {/* Sobre Jesús */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Foto */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-[#1a3a5c]">
                <Image
                  src="/jesus-rosas.png"
                  alt="Jesús Rosas — Ingeniero Técnico, Ingeniería Cantabria, Torrelavega"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#d4631a] rounded-sm -z-10" />
            </div>

            {/* Bio */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#d4631a]/10 border border-[#d4631a]/30 rounded-sm px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-[#d4631a] rounded-full" />
                <span className="text-[#d4631a] text-sm font-heading font-semibold">Ingeniero colegiado</span>
              </div>

              <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-6">
                Jesús Rosas
              </h2>

              <div className="space-y-4 text-[#4a6080] font-body text-base leading-relaxed">
                <p>
                  Soy Jesús Rosas, ingeniero técnico colegiado con despacho en Torrelavega, Cantabria. Fundé Ingeniería Cantabria con un objetivo claro: ofrecer servicios técnicos de calidad con trato directo y sin intermediarios.
                </p>
                <p>
                  Me especializo en tres áreas complementarias — ingeniería industrial, edificación y agronómica — lo que me permite dar solución integral a proyectos que combinan varias disciplinas, algo habitual en el tejido empresarial y agrario de Cantabria.
                </p>
                <p>
                  Trabajo en toda la comunidad autónoma, con especial presencia en Torrelavega, Santander y la comarca del Besaya. Cada proyecto recibe la misma atención y rigor, independientemente de su tamaño.
                </p>
              </div>

              {/* Credenciales */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Especialidades", value: "3 áreas" },
                  { label: "Ámbito", value: "Toda Cantabria" },
                  { label: "Colegiado", value: "Sí ✓" },
                  { label: "Respuesta", value: "< 24 horas" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#f5f7fa] p-4 rounded-sm">
                    <p className="text-[#4a6080] font-body text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-[#1a3a5c] font-heading font-bold text-base">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-4">Cómo trabajo</h2>
            <p className="text-[#4a6080] font-body text-lg max-w-xl mx-auto">
              Los principios que guían cada proyecto, desde la consulta inicial hasta la entrega final.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="text-[#1a3a5c] font-heading font-bold text-base mb-2">{v.title}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a3a5c]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-white font-heading font-black text-2xl md:text-3xl mb-4">
            ¿Hablamos de su proyecto?
          </h2>
          <p className="text-gray-300 font-body mb-8">
            Consulta gratuita y sin compromiso. Respondo en menos de 24 horas.
          </p>
          <Link href="/#contacto" className="btn-primary">
            Solicitar presupuesto →
          </Link>
        </div>
      </section>
    </>
  )
}
