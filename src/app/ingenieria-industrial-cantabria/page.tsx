import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Ingeniería Industrial en Cantabria | Proyectos, Legalizaciones y Consultoría",
  description:
    "Ingeniería industrial en Cantabria: proyectos de obra, legalización de actividades, instalaciones industriales y consultoría técnica. Ingeniero colegiado en Torrelavega. Presupuesto gratuito.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/ingenieria-industrial-cantabria" },
  openGraph: {
    title: "Ingeniería Industrial en Cantabria | Proyectos, Legalizaciones y Consultoría",
    description: "Proyectos industriales, legalización de actividades e instalaciones en Cantabria. Ingeniero Técnico Industrial Colegiado en Torrelavega.",
    url: "https://www.ingenieriacantabria.com/ingenieria-industrial-cantabria",
    siteName: "Ingeniería Cantabria",
    locale: "es_ES",
    type: "website",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Servicios de Ingeniería Industrial en Cantabria",
      description: "Servicios integrales de ingeniería industrial en Cantabria: proyectos de obra, legalización de actividades industriales, diseño de instalaciones y consultoría técnica. Ingeniero Técnico Industrial Colegiado con despacho en Torrelavega.",
      provider: {
        "@type": "ProfessionalService",
        name: "Ingeniería Cantabria",
        url: "https://www.ingenieriacantabria.com",
        telephone: "+34623967087",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle José María Pereda 21",
          addressLocality: "Torrelavega",
          postalCode: "39300",
          addressRegion: "Cantabria",
          addressCountry: "ES",
        },
      },
      areaServed: {
        "@type": "State",
        name: "Cantabria",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué servicios de ingeniería industrial ofrece en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ofrezco servicios completos de ingeniería industrial en Cantabria: redacción de proyectos de obra industrial, legalización de actividades ante el Ayuntamiento y la Consejería de Industria de Cantabria, diseño y legalización de instalaciones eléctricas, mecánicas y contra incendios, y consultoría técnica para empresas. Atiendo clientes en Torrelavega, Santander y toda la región.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta legalizar una actividad industrial en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El coste de legalizar una actividad industrial en Cantabria depende del tipo de actividad, la superficie de la instalación y los trámites necesarios. En general, para una nave o local de hasta 500 m², los honorarios de ingeniería se sitúan entre 1.200 y 3.500 euros, sin contar tasas municipales ni de la Consejería. Ofrecemos presupuesto gratuito y sin compromiso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué plazo tiene la legalización de una actividad industrial en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los plazos varían según el tipo de trámite. Una comunicación previa de actividad puede resolverse en 2-4 semanas. Una licencia ambiental de actividad clasificada tiene plazos legales de 3 a 6 meses en Cantabria, aunque el tiempo efectivo depende de la carga del Ayuntamiento. Nos encargamos de hacer el seguimiento y agilizar el expediente en todo momento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito un proyecto de ingeniería para instalar maquinaria industrial en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de la potencia y el tipo de instalación. Según el Reglamento de Seguridad Industrial, la instalación de maquinaria con potencia superior a 10 kW o que implique riesgos especiales (presión, temperatura, gases) requiere proyecto técnico firmado por ingeniero colegiado y posterior acta de puesta en marcha. Le asesoramos sobre los requisitos concretos de su caso antes de iniciar cualquier trámite.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Industrial", item: "https://www.ingenieriacantabria.com/industrial" },
        { "@type": "ListItem", position: 3, name: "Ingeniería Industrial Cantabria", item: "https://www.ingenieriacantabria.com/ingenieria-industrial-cantabria" },
      ],
    },
  ],
}

const servicios = [
  {
    titulo: "Proyectos de obra industrial",
    desc: "Redacción de proyectos técnicos para naves industriales, ampliaciones y cambios de uso. Coordinación con Ayuntamiento y visado colegial.",
    icono: "🏗",
  },
  {
    titulo: "Legalización de actividades",
    desc: "Tramitación de licencias de actividad, comunicaciones previas y autorizaciones ambientales ante el Ayuntamiento y la Consejería de Industria de Cantabria.",
    icono: "📋",
  },
  {
    titulo: "Instalaciones industriales",
    desc: "Diseño, dirección y legalización de instalaciones eléctricas BT/AT, climatización, contra incendios, gases y maquinaria. Actas de puesta en marcha.",
    icono: "⚙",
  },
  {
    titulo: "Consultoría técnica",
    desc: "Asesoramiento a empresas en Cantabria sobre normativa industrial, PRL, eficiencia energética, subvenciones SODERCAN y optimización de procesos productivos.",
    icono: "💼",
  },
]

const pasos = [
  { num: "01", titulo: "Consulta inicial gratuita", desc: "Analizamos su proyecto, identificamos los trámites necesarios y le damos una estimación de plazo y coste sin compromiso." },
  { num: "02", titulo: "Redacción del proyecto", desc: "Elaboramos la documentación técnica completa: memoria, planos, presupuesto y anejos de instalaciones con visado colegial." },
  { num: "03", titulo: "Tramitación administrativa", desc: "Presentamos la documentación ante el Ayuntamiento y la Consejería de Industria de Cantabria y hacemos el seguimiento del expediente." },
  { num: "04", titulo: "Dirección de obra", desc: "Supervisión técnica durante la ejecución para garantizar el cumplimiento del proyecto y la normativa vigente." },
  { num: "05", titulo: "Legalización final", desc: "Obtención de licencias, actas de puesta en marcha y certificados de fin de obra. Entrega de expediente completo." },
]

const faqs = [
  {
    pregunta: "¿Qué servicios de ingeniería industrial ofrece en Cantabria?",
    respuesta: "Ofrezco servicios completos de ingeniería industrial en Cantabria: redacción de proyectos de obra industrial, legalización de actividades ante el Ayuntamiento y la Consejería de Industria de Cantabria, diseño y legalización de instalaciones eléctricas, mecánicas y contra incendios, y consultoría técnica para empresas. Atiendo clientes en Torrelavega, Santander y toda la región.",
  },
  {
    pregunta: "¿Cuánto cuesta legalizar una actividad industrial en Cantabria?",
    respuesta: "El coste de legalizar una actividad industrial en Cantabria depende del tipo de actividad, la superficie de la instalación y los trámites necesarios. En general, para una nave o local de hasta 500 m², los honorarios de ingeniería se sitúan entre 1.200 y 3.500 euros, sin contar tasas municipales ni de la Consejería. Ofrecemos presupuesto gratuito y sin compromiso.",
  },
  {
    pregunta: "¿Qué plazo tiene la legalización de una actividad industrial en Cantabria?",
    respuesta: "Los plazos varían según el tipo de trámite. Una comunicación previa de actividad puede resolverse en 2-4 semanas. Una licencia ambiental de actividad clasificada tiene plazos legales de 3 a 6 meses en Cantabria, aunque el tiempo efectivo depende de la carga del Ayuntamiento. Nos encargamos de hacer el seguimiento y agilizar el expediente en todo momento.",
  },
  {
    pregunta: "¿Necesito un proyecto de ingeniería para instalar maquinaria industrial en Cantabria?",
    respuesta: "Depende de la potencia y el tipo de instalación. Según el Reglamento de Seguridad Industrial, la instalación de maquinaria con potencia superior a 10 kW o que implique riesgos especiales (presión, temperatura, gases) requiere proyecto técnico firmado por ingeniero colegiado y posterior acta de puesta en marcha. Le asesoramos sobre los requisitos concretos de su caso antes de iniciar cualquier trámite.",
  },
]

export default function IngenieriaIndustrialCantabriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{ background: "linear-gradient(135deg, #0d1e30 0%, #1a3a5c 70%, #2a3a4a 100%)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e07b39]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/industrial" className="hover:text-white transition-colors">Industrial</Link>
            <span>/</span>
            <span className="text-gray-300">Ingeniería industrial Cantabria</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Torrelavega · Cantabria · Ingeniero Colegiado</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Ingeniería Industrial en{" "}
            <span className="text-[#e07b39]">Cantabria</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Proyectos industriales, legalización de actividades, instalaciones y consultoría técnica en Cantabria. Jesús Rosas, Ingeniero Técnico Industrial Colegiado con despacho en Torrelavega, a su servicio en toda la región.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contacto" className="btn-primary">Solicitar presupuesto gratuito</Link>
            <a href="tel:+34623967087" className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white/60 rounded-sm px-6 py-3 font-body font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              623 96 70 87
            </a>
          </div>
        </div>
      </section>

      {/* Intro + credenciales */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-6">
                Ingeniero industrial colegiado en Cantabria a su servicio
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                Con despacho profesional en Torrelavega y actividad en toda Cantabria, ofrezco a empresas y particulares un servicio de ingeniería industrial completo: desde el proyecto técnico inicial hasta la obtención de licencias y la dirección de obra. Cada expediente cuenta con visado del Colegio Oficial de Ingenieros Técnicos Industriales, garantía de calidad y validez legal en toda la comunidad.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                Trabajo con empresas de los sectores agroalimentario, metalúrgico, químico, logístico y de servicios en Santander, Torrelavega, Castro Urdiales, Laredo y el resto de municipios de Cantabria. Mi objetivo es que el proceso sea lo más ágil y transparente posible, con plazos reales y comunicación directa.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Ingeniero Técnico Industrial Colegiado — visado en todos los proyectos",
                "Tramitación de licencias ante Ayuntamiento y Consejería de Industria de Cantabria",
                "Proyectos de obra, instalaciones y legalizaciones de actividad",
                "Consultoría técnica y asesoramiento normativo",
                "Presupuesto gratuito y sin compromiso en 24 horas",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#e07b39] font-bold text-lg mt-0.5">✓</span>
                  <span className="text-[#1a3a5c] font-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4 text-center">
            Servicios de ingeniería industrial en Cantabria
          </h2>
          <p className="text-[#4a6080] font-body text-lg text-center max-w-2xl mx-auto mb-12">
            Soluciones técnicas y administrativas para empresas e industriales en toda la región
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicios.map((s) => (
              <div key={s.titulo} className="card p-8">
                <div className="text-3xl mb-4">{s.icono}</div>
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-xl mb-3">{s.titulo}</h3>
                <p className="text-[#4a6080] font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos del proceso */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Cómo trabajamos en cada proyecto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pasos.map((paso) => (
              <div key={paso.num} className="card p-6 text-center">
                <div className="w-10 h-10 bg-[#e07b39] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-heading font-black text-sm">{paso.num}</span>
                </div>
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-sm mb-2 leading-snug">{paso.titulo}</h3>
                <p className="text-[#4a6080] font-body text-xs leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-10 text-center">
            Preguntas frecuentes sobre ingeniería industrial en Cantabria
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.pregunta} className="border-b border-gray-200 pb-6">
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-base mb-2">{faq.pregunta}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relacionados */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-2xl mb-8 text-center">
            Otros servicios en Cantabria
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { titulo: "Legalización nave industrial Torrelavega", url: "/legalizacion-nave-industrial-torrelavega" },
              { titulo: "Legalización nave industrial Santander", url: "/legalizacion-nave-industrial-santander" },
              { titulo: "Auditoría energética empresas Cantabria", url: "/auditoria-energetica-empresas-cantabria" },
              { titulo: "Certificado de eficiencia energética", url: "/industrial" },
            ].map((s) => (
              <Link key={s.url} href={s.url} className="inline-flex items-center bg-white border border-[#1a3a5c]/20 hover:border-[#e07b39] text-[#1a3a5c] hover:text-[#e07b39] rounded-sm px-4 py-2 font-body text-sm transition-colors">
                {s.titulo}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
