import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb"

export const metadata: Metadata = {
  title: "Ingeniería Agronómica Cantabria",
  description:
    "Proyectos de explotaciones ganaderas, sistemas de riego, viabilidad agrícola y asesoramiento PAC en Cantabria. Ingenieros agrónomos colegiados.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/agronomica" },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Inicio", url: "https://www.ingenieriacantabria.com" },
  { name: "Ingeniería Agronómica", url: "https://www.ingenieriacantabria.com/agronomica" },
])

const services = [
  { title: "Proyectos de explotaciones ganaderas", description: "Diseño y legalización de establos, granjas y instalaciones ganaderas bovinas, ovinas y porcinas.", icon: "🐄" },
  { title: "Gestión de purines y residuos", description: "Planes de gestión de deyecciones ganaderas conforme a la normativa autonómica y nacional.", icon: "♻️" },
  { title: "Sistemas de riego", description: "Diseño de sistemas de riego por goteo, aspersión y pivot para cultivos hortícolas y forrajeros.", icon: "💧" },
  { title: "Estudios de viabilidad agrícola", description: "Análisis técnico-económico para nuevas explotaciones, transformaciones o ampliaciones.", icon: "📊" },
  { title: "Asesoramiento PAC y subvenciones", description: "Tramitación de solicitudes PAC, FEADER y otras ayudas agrarias europeas y autonómicas.", icon: "🇪🇺" },
  { title: "Energías renovables en el sector agrario", description: "Proyectos de instalaciones fotovoltaicas y biomasa para autoconsumo en explotaciones.", icon: "☀️" },
  { title: "Planes de abonado y fertilización", description: "Estudios agronómicos del suelo y planes de fertilización para maximizar rendimientos.", icon: "🌱" },
  { title: "Peritajes agrarios", description: "Informes periciales para seguros agrarios, valoración de daños por granizo, sequía u otros siniestros.", icon: "⚖️" },
]

export default function AgronomicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section
        className="pt-32 pb-20 relative"
        style={{ background: "linear-gradient(135deg, #0d1e30 0%, #1a2d1a 70%, #2d4a2d 100%)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2d6a4f]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#2d6a4f] rounded-full" />
            <span className="text-gray-300 text-sm">Especialidad</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Ingeniería <span className="text-[#4a9a6f]">Agronómica</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Técnicos especializados en el sector agrícola y ganadero de Cantabria. Proyectos, gestión de subvenciones y asesoramiento técnico para el campo.
          </p>
          <Link href="#contacto" className="btn-primary">
            Solicitar presupuesto gratuito
          </Link>
        </div>
      </section>

      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4">
              Servicios de ingeniería agronómica
            </h2>
            <p className="text-[#4a6080] font-body text-lg max-w-2xl mx-auto">
              Apoyo técnico completo para agricultores, ganaderos y cooperativas de Cantabria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card p-6">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
