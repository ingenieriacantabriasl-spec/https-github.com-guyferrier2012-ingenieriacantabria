import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb"

export const metadata: Metadata = {
  title: "Servicios de Ingeniería en Cantabria",
  description:
    "Ingeniería industrial, edificación y agronómica en Cantabria. Proyectos, legalizaciones, peritajes y consultoría técnica con ingenieros colegiados.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/servicios" },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Inicio", url: "https://www.ingenieriacantabria.com" },
  { name: "Servicios", url: "https://www.ingenieriacantabria.com/servicios" },
])

const services = [
  {
    id: "industrial",
    title: "Ingeniería Industrial",
    color: "#e07b39",
    bg: "from-orange-50 to-amber-50",
    icon: "⚙️",
    description:
      "Proyectos de instalaciones industriales, legalización de maquinaria, seguridad industrial y eficiencia energética para empresas de Cantabria.",
    items: [
      "Proyectos de instalaciones eléctricas y mecánicas",
      "Legalización de maquinaria y equipos",
      "Evaluaciones de riesgo y seguridad",
      "Auditorías energéticas",
      "Certificados de eficiencia energética",
      "Planes de autoprotección",
      "Licencias de actividad",
      "Peritajes industriales",
    ],
    href: "/industrial",
  },
  {
    id: "edificacion",
    title: "Ingeniería de Edificación",
    color: "#2d6a9f",
    bg: "from-blue-50 to-sky-50",
    icon: "🏗️",
    description:
      "Proyectos de construcción, reformas, inspecciones técnicas de edificios (ITE) y rehabilitación de inmuebles en toda Cantabria.",
    items: [
      "Proyectos de obra nueva y reforma",
      "Dirección técnica de obras",
      "Inspección Técnica de Edificios (ITE)",
      "Certificados de habitabilidad",
      "Certificados de eficiencia energética",
      "Peritajes y tasaciones",
      "Rehabilitación y conservación",
      "Accesibilidad y eliminación de barreras",
    ],
    href: "/edificacion",
  },
  {
    id: "agronomica",
    title: "Ingeniería Agronómica",
    color: "#2d6a4f",
    bg: "from-green-50 to-emerald-50",
    icon: "🌿",
    description:
      "Proyectos agronómicos, estudios de viabilidad, gestión de explotaciones y asesoramiento técnico para el sector agrícola y ganadero.",
    items: [
      "Proyectos de explotaciones ganaderas",
      "Estudios de viabilidad agrícola",
      "Gestión de regadíos y sistemas hídricos",
      "Planes de gestión de purines",
      "Proyectos de energías renovables",
      "Asesoramiento PAC y subvenciones",
      "Peritajes agrarios",
      "Planes de abonado y fertilización",
    ],
    href: "/agronomica",
  },
]

export default function ServiciosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4d7a 100%)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4631a]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Qué hacemos
          </p>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Servicios de ingeniería técnica
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl mx-auto leading-relaxed">
            Tres especialidades para cubrir todas las necesidades técnicas de empresas,
            particulares e instituciones en Cantabria.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Info */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  {service.icon}
                </div>
                <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-4">
                  {service.title}
                </h2>
                <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="btn-outline inline-flex"
                  style={{ borderColor: service.color, color: service.color }}
                >
                  Ver todos los servicios →
                </Link>
              </div>

              {/* Items */}
              <div className={`bg-gradient-to-br ${service.bg} rounded-sm p-8 border border-gray-100 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-[#1a2744]">
                      <span
                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: service.color }}
                      >✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </>
  )
}
