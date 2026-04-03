import ScrollReveal from "@/components/ui/ScrollReveal"

const projects = [
  {
    title: "Nave industrial polígono Raos",
    location: "Santander",
    category: "Industrial",
    categoryColor: "#e07b39",
    description: "Proyecto completo de instalaciones eléctricas, contra incendios y legalización de maquinaria para nave de 3.200 m².",
  },
  {
    title: "Rehabilitación edificio residencial",
    location: "Torrelavega",
    category: "Edificación",
    categoryColor: "#2d6a9f",
    description: "ITE, proyecto de rehabilitación de fachada y cubierta con certificado de eficiencia energética en edificio de 24 viviendas.",
  },
  {
    title: "Explotación ganadera ecológica",
    location: "Potes, Liébana",
    category: "Agronómica",
    categoryColor: "#2d6a4f",
    description: "Proyecto de establo para 80 vacas en transición ecológica, gestión de purines y plan de cultivos forrajeros.",
  },
  {
    title: "Auditoría energética planta láctea",
    location: "Torrelavega",
    category: "Industrial",
    categoryColor: "#e07b39",
    description: "Auditoría energética completa con propuesta de mejoras que redujeron el consumo eléctrico un 23%.",
  },
  {
    title: "Proyecto de obra nueva unifamiliar",
    location: "Camargo",
    category: "Edificación",
    categoryColor: "#2d6a9f",
    description: "Dirección técnica y proyecto de ejecución de vivienda unifamiliar de 280 m² con jardín y garaje.",
  },
  {
    title: "Sistema de riego por goteo",
    location: "Val de San Vicente",
    category: "Agronómica",
    categoryColor: "#2d6a4f",
    description: "Diseño e instalación de sistema de riego por goteo para 4 ha de horticultura ecológica con automatización.",
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="section-padding bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="section-line mx-auto" />
          <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Casos de éxito
          </p>
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4">
            Proyectos destacados en Cantabria
          </h2>
          <p className="text-[#4a6080] font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Una muestra de los proyectos que hemos llevado a cabo para empresas, particulares y administraciones en toda la región.
          </p>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} className={`fade-up-delay-${(i % 3) + 1}`}>
              <div className="card group h-full">
                <div className="h-1 transition-all duration-300 group-hover:h-2" style={{ backgroundColor: project.categoryColor }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: project.categoryColor }}
                    >
                      {project.category}
                    </span>
                    <span className="text-[#4a6080] text-xs font-body">📍 {project.location}</span>
                  </div>
                  <h3 className="text-[#1a3a5c] font-heading font-bold text-lg mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[#4a6080] font-body text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
