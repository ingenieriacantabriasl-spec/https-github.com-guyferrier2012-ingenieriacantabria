import type { Metadata } from "next"
import ContactForm from "@/components/sections/ContactForm"
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb"

export const metadata: Metadata = {
  title: "Proyectos de Ingeniería en Cantabria",
  description:
    "Proyectos de ingeniería industrial, edificación y agronómica realizados en Cantabria. Casos de éxito reales con empresas, particulares y administraciones.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/proyectos" },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Inicio", url: "https://www.ingenieriacantabria.com" },
  { name: "Proyectos", url: "https://www.ingenieriacantabria.com/proyectos" },
])

const projects = [
  {
    title: "Nave industrial polígono Raos",
    location: "Santander",
    year: "2024",
    category: "Industrial",
    categoryColor: "#e07b39",
    description:
      "Proyecto completo de instalaciones eléctricas BT/MT, instalación contra incendios y legalización de maquinaria industrial para nave de 3.200 m² en el polígono Raos.",
    tags: ["Instalaciones eléctricas", "Contra incendios", "Legalización"],
  },
  {
    title: "Rehabilitación edificio residencial",
    location: "Torrelavega",
    year: "2024",
    category: "Edificación",
    categoryColor: "#2d6a9f",
    description:
      "ITE, proyecto de rehabilitación integral de fachada y cubierta con certificado de eficiencia energética en edificio de 24 viviendas de los años 70.",
    tags: ["ITE", "Rehabilitación", "Eficiencia energética"],
  },
  {
    title: "Explotación ganadera ecológica",
    location: "Potes, Liébana",
    year: "2023",
    category: "Agronómica",
    categoryColor: "#2d6a4f",
    description:
      "Proyecto de establo para 80 vacas de leche en transición a producción ecológica, plan de gestión de purines conforme a normativa y plan de cultivos forrajeros.",
    tags: ["Ganadería ecológica", "Gestión purines", "Cultivos"],
  },
  {
    title: "Auditoría energética planta láctea",
    location: "Torrelavega",
    year: "2023",
    category: "Industrial",
    categoryColor: "#e07b39",
    description:
      "Auditoría energética completa de planta de procesado lácteo con propuesta de mejoras que redujeron el consumo eléctrico un 23% y el de gas un 15%.",
    tags: ["Auditoría energética", "Industria alimentaria", "Ahorro"],
  },
  {
    title: "Vivienda unifamiliar obra nueva",
    location: "Camargo",
    year: "2023",
    category: "Edificación",
    categoryColor: "#2d6a9f",
    description:
      "Proyecto básico y de ejecución, dirección técnica de obra nueva de vivienda unifamiliar de 280 m² con sótano, planta baja y primera, jardín y garaje.",
    tags: ["Obra nueva", "Dirección de obra", "Vivienda unifamiliar"],
  },
  {
    title: "Sistema de riego por goteo",
    location: "Val de San Vicente",
    year: "2023",
    category: "Agronómica",
    categoryColor: "#2d6a4f",
    description:
      "Diseño e instalación de sistema de riego por goteo para 4 ha de horticultura ecológica con automatización por sondas de humedad y gestión remota.",
    tags: ["Riego", "Horticultura ecológica", "Automatización"],
  },
  {
    title: "Legalización instalación fotovoltaica",
    location: "Reinosa",
    year: "2022",
    category: "Industrial",
    categoryColor: "#e07b39",
    description:
      "Proyecto y legalización ante Industria de instalación fotovoltaica de autoconsumo de 98 kW para empresa metalúrgica. Reducción de factura eléctrica del 40%.",
    tags: ["Fotovoltaica", "Autoconsumo", "Legalización"],
  },
  {
    title: "ITE edificio terciario",
    location: "Santander",
    year: "2022",
    category: "Edificación",
    categoryColor: "#2d6a9f",
    description:
      "Inspección Técnica de Edificio de uso terciario (oficinas) de 6 plantas. Informe con patologías detectadas, prescripciones de intervención urgente y plan de mantenimiento.",
    tags: ["ITE", "Edificio terciario", "Patologías"],
  },
  {
    title: "Plan de gestión de explotación agrícola",
    location: "Suances",
    year: "2022",
    category: "Agronómica",
    categoryColor: "#2d6a4f",
    description:
      "Estudio de viabilidad y plan de gestión para reconversión de 12 ha de prado en cultivo hortícola intensivo bajo invernadero con tramitación de ayudas FEADER.",
    tags: ["Viabilidad agrícola", "Invernadero", "FEADER"],
  },
]

const categories = ["Todos", "Industrial", "Edificación", "Agronómica"]

export default function ProyectosPage() {
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
            Casos de éxito
          </p>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Proyectos en Cantabria
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl mx-auto leading-relaxed">
            Más de 200 proyectos completados. Una selección de los trabajos realizados
            para empresas, particulares y administraciones en toda la región.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1a3a5c] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "+200", label: "Proyectos completados" },
              { value: "15+", label: "Años de experiencia" },
              { value: "3", label: "Especialidades" },
              { value: "Cantabria", label: "Ámbito geográfico" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[#d4631a] font-heading font-black text-2xl">{s.value}</div>
                <div className="text-gray-400 font-body text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter labels */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-heading font-semibold border border-gray-300 text-[#4a6080] bg-white"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="card group h-full flex flex-col">
                <div className="h-1.5 group-hover:h-2 transition-all duration-300" style={{ backgroundColor: project.categoryColor }} />
                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: project.categoryColor }}
                    >
                      {project.category}
                    </span>
                    <span className="text-[#4a6080] text-xs font-body">{project.year} · 📍 {project.location}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-[#1a3a5c] font-heading font-bold text-lg mb-3 leading-snug">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#4a6080] font-body text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-body px-2 py-1 rounded-sm"
                        style={{ backgroundColor: `${project.categoryColor}15`, color: project.categoryColor }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
