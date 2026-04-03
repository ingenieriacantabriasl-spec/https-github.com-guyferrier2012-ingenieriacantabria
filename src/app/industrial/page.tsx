import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb"

export const metadata: Metadata = {
  title: "Ingeniería Industrial Cantabria",
  description:
    "Proyectos industriales, legalización de maquinaria, seguridad industrial y auditorías energéticas en Cantabria. Ingenieros colegiados.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/industrial" },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Inicio", url: "https://www.ingenieriacantabria.com" },
  { name: "Ingeniería Industrial", url: "https://www.ingenieriacantabria.com/industrial" },
])

const services = [
  {
    title: "Proyectos de instalaciones industriales",
    description: "Electricidad, mecánica, hidráulica, aire comprimido, gas y contra incendios para naves y plantas industriales.",
    icon: "⚡",
  },
  {
    title: "Legalización de maquinaria y equipos",
    description: "Tramitación ante Industria de toda la documentación necesaria para poner en marcha o regularizar equipos industriales.",
    icon: "📋",
  },
  {
    title: "Seguridad industrial y evaluación de riesgos",
    description: "Evaluaciones ATEX, planes de seguridad, formación y coordinación de seguridad en obra.",
    icon: "🛡️",
  },
  {
    title: "Auditorías energéticas",
    description: "Diagnóstico del consumo energético de su empresa con propuestas de mejora y ahorro avaladas técnicamente.",
    icon: "🔋",
  },
  {
    title: "Certificados de eficiencia energética",
    description: "Certificación energética de naves, instalaciones y edificios industriales con calificación oficial.",
    icon: "🏷️",
  },
  {
    title: "Planes de autoprotección",
    description: "Elaboración y registro del Plan de Autoprotección según normativa para instalaciones y actividades.",
    icon: "🚨",
  },
  {
    title: "Proyectos de actividad y licencias",
    description: "Gestión integral de licencias de apertura y actividad ante Ayuntamientos y organismos autonómicos.",
    icon: "📝",
  },
  {
    title: "Peritajes industriales",
    description: "Informes periciales técnicos para seguros, litigios o valoración de daños en instalaciones industriales.",
    icon: "🔍",
  },
]

export default function IndustrialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{ background: "linear-gradient(135deg, #0d1e30 0%, #1a3a5c 70%, #2a3a4a 100%)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e07b39]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Especialidad</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Ingeniería <span className="text-[#e07b39]">Industrial</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Soluciones técnicas para empresas industriales en Cantabria. Proyectos, legalizaciones, seguridad y eficiencia energética con ingenieros colegiados.
          </p>
          <Link href="#contacto" className="btn-primary">
            Solicitar presupuesto gratuito
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4">
              Servicios de ingeniería industrial
            </h2>
            <p className="text-[#4a6080] font-body text-lg max-w-2xl mx-auto">
              Cubrimos todas las necesidades técnicas de su empresa o instalación industrial.
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
