import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb"

export const metadata: Metadata = {
  title: "Ingeniería de Edificación Cantabria",
  description:
    "Proyectos de obra nueva, rehabilitación, ITE, dirección de obras y peritajes en Cantabria. Ingenieros de edificación colegiados.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/edificacion" },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Inicio", url: "https://www.ingenieriacantabria.com" },
  { name: "Ingeniería de Edificación", url: "https://www.ingenieriacantabria.com/edificacion" },
])

const services = [
  { title: "Proyectos de obra nueva", description: "Proyectos completos para construcción de viviendas, naves, locales y edificios en toda Cantabria.", icon: "🏠" },
  { title: "Rehabilitación y reformas", description: "Proyecto y dirección de rehabilitaciones integrales, reformas de fachada, cubiertas y estructura.", icon: "🔨" },
  { title: "Inspección Técnica de Edificios (ITE)", description: "Realización y tramitación del informe ITE obligatorio para edificios de más de 30 años.", icon: "🔍" },
  { title: "Dirección técnica de obras", description: "Dirección de ejecución material de obras como técnico competente colegiado.", icon: "📐" },
  { title: "Certificados de habitabilidad", description: "Certificado de habitabilidad para primera ocupación o cambios de uso en Cantabria.", icon: "🏷️" },
  { title: "Peritajes y tasaciones", description: "Informes periciales de patologías constructivas, valoración de daños y tasaciones inmobiliarias.", icon: "⚖️" },
  { title: "Eficiencia energética edificios", description: "Certificado energético de edificios residenciales y terciarios con etiqueta oficial.", icon: "🌱" },
  { title: "Accesibilidad y barreras arquitectónicas", description: "Informes y proyectos de eliminación de barreras arquitectónicas en edificios y espacios.", icon: "♿" },
]

export default function EdificacionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section
        className="pt-32 pb-20 relative"
        style={{ background: "linear-gradient(135deg, #0d1e30 0%, #1a2d4a 70%, #1a3a5c 100%)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2d6a9f]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#2d6a9f] rounded-full" />
            <span className="text-gray-300 text-sm">Especialidad</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Ingeniería de <span className="text-[#2d6a9f]">Edificación</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Proyectos, inspecciones y dirección técnica de obras en Cantabria. Ingenieros de edificación colegiados con experiencia en todo tipo de inmuebles.
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
              Servicios de ingeniería de edificación
            </h2>
            <p className="text-[#4a6080] font-body text-lg max-w-2xl mx-auto">
              Todo lo que necesita para su proyecto de construcción o rehabilitación en Cantabria.
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
