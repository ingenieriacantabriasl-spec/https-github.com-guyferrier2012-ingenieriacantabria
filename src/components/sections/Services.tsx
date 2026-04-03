import Link from "next/link"
import { Wrench, Building2, Leaf, Check } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

const services = [
  {
    id: "industrial",
    title: "Ingeniería Industrial",
    color: "#e07b39",
    bg: "from-orange-50 to-amber-50",
    icon: <Wrench size={22} color="#e07b39" strokeWidth={1.75} />,
    iconBg: "#fff0e6",
    description: "Proyectos de instalaciones industriales, legalización de maquinaria, seguridad industrial y eficiencia energética para empresas de Cantabria.",
    items: [
      "Proyectos de instalaciones eléctricas y mecánicas",
      "Legalización de maquinaria y equipos",
      "Evaluaciones de riesgo y seguridad",
      "Auditorías energéticas",
      "Certificados de eficiencia energética",
      "Planes de autoprotección",
    ],
    href: "/industrial",
  },
  {
    id: "edificacion",
    title: "Ingeniería de Edificación",
    color: "#2d6a9f",
    bg: "from-blue-50 to-sky-50",
    icon: <Building2 size={22} color="#2d6a9f" strokeWidth={1.75} />,
    iconBg: "#e8f0fa",
    description: "Proyectos de construcción, reformas, inspecciones técnicas de edificios (ITE) y rehabilitación de inmuebles en toda Cantabria.",
    items: [
      "Proyectos de obra nueva y reforma",
      "Dirección técnica de obras",
      "Inspecciones técnicas de edificios (ITE)",
      "Certificados de habitabilidad",
      "Peritajes y tasaciones",
      "Rehabilitación y conservación",
    ],
    href: "/edificacion",
  },
  {
    id: "agronomica",
    title: "Ingeniería Agronómica",
    color: "#2d6a4f",
    bg: "from-green-50 to-emerald-50",
    icon: <Leaf size={22} color="#2d6a4f" strokeWidth={1.75} />,
    iconBg: "#e3f4ea",
    description: "Proyectos agronómicos, estudios de viabilidad, gestión de explotaciones y asesoramiento técnico para el sector agrícola y ganadero de Cantabria.",
    items: [
      "Proyectos de explotaciones ganaderas",
      "Estudios de viabilidad agrícola",
      "Gestión de regadíos y sistemas hídricos",
      "Planes de gestión de purines",
      "Proyectos de energías renovables en el campo",
      "Asesoramiento PAC y subvenciones",
    ],
    href: "/agronomica",
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-px bg-[#d4631a]" />
            <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase">
              Nuestras especialidades
            </p>
            <span className="w-10 h-px bg-[#d4631a]" />
          </div>
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4">
            Tres áreas, un equipo de confianza
          </h2>
          <p className="text-[#4a6080] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Cubrimos todas las necesidades de ingeniería técnica para empresas, particulares e instituciones en Cantabria.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} className={`fade-up-delay-${i + 1}`}>
              <div className={`card group flex flex-col h-full bg-gradient-to-br ${service.bg} border border-gray-100 cursor-pointer`}>
                <div className="h-1 transition-all duration-300 group-hover:h-1.5" style={{ backgroundColor: service.color }} />
                <div className="p-8 flex flex-col flex-1">
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: service.iconBg }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-[#4a6080] font-body text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-body text-[#1a2744]">
                        <span
                          className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: service.color }}
                        >
                          <Check size={10} color="white" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-heading font-semibold text-sm transition-all duration-200 hover:gap-3"
                    style={{ color: service.color }}
                  >
                    Ver más detalles →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
