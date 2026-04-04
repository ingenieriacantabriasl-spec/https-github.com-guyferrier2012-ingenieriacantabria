import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Legalización de Nave Industrial en Torrelavega | Ingeniero Técnico Colegiado",
  description:
    "Legalización de naves industriales en Torrelavega y comarca. Tramitación ante Industria de Cantabria, proyecto técnico y licencia de actividad. Presupuesto en 24h.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/legalizacion-nave-industrial-torrelavega" },
  openGraph: {
    title: "Legalización de Nave Industrial en Torrelavega | Ingeniero Técnico Colegiado",
    description: "Legalización de naves industriales en Torrelavega y comarca. Tramitación ante Industria de Cantabria.",
    url: "https://www.ingenieriacantabria.com/legalizacion-nave-industrial-torrelavega",
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
      name: "Legalización de Nave Industrial en Torrelavega",
      description:
        "Servicio de legalización de naves industriales en Torrelavega, Cantabria. Proyecto técnico, tramitación ante Industria y licencia de actividad.",
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
        "@type": "City",
        name: "Torrelavega",
        containedIn: { "@type": "State", name: "Cantabria" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué documentación necesito para legalizar una nave industrial en Torrelavega?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necesitas un proyecto técnico firmado por ingeniero colegiado, memoria descriptiva de la actividad, planos de planta y alzados, y la solicitud de licencia ante el Ayuntamiento de Torrelavega. En algunos casos se requiere también informe de compatibilidad urbanística previo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo tarda la legalización de una nave en Torrelavega?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El plazo depende del tipo de actividad y la complejidad del expediente. En actividades inocuas o de bajo impacto, el proceso puede resolverse en 2-3 meses. Para actividades clasificadas o con mayor impacto ambiental, el plazo puede extenderse a 4-6 meses.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es obligatorio tener la nave legalizada para operar en Torrelavega?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Operar en una nave sin licencia de actividad supone una infracción administrativa que puede conllevar multas, el cese de la actividad y problemas con seguros y financiación. La legalización protege legalmente al empresario y a sus trabajadores.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta legalizar una nave industrial en Torrelavega?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El coste varía según la superficie, el tipo de actividad y la complejidad del proyecto. Generalmente oscila entre 800 y 3.000 euros por el proyecto técnico, más las tasas municipales e impuestos correspondientes. Ofrecemos presupuesto gratuito tras una primera consulta.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Ingeniería Industrial", item: "https://www.ingenieriacantabria.com/industrial" },
        { "@type": "ListItem", position: 3, name: "Legalización Nave Industrial Torrelavega", item: "https://www.ingenieriacantabria.com/legalizacion-nave-industrial-torrelavega" },
      ],
    },
  ],
}

const pasos = [
  { num: "01", titulo: "Consulta gratuita", desc: "Analizamos tu situación, la actividad y el estado actual de la nave sin coste." },
  { num: "02", titulo: "Proyecto técnico", desc: "Redactamos la memoria, planos y documentación necesaria firmada por ingeniero colegiado." },
  { num: "03", titulo: "Tramitación Industria", desc: "Presentamos el expediente ante la Delegación de Industria de Cantabria en Torrelavega." },
  { num: "04", titulo: "Licencia municipal", desc: "Gestionamos la licencia de actividad ante el Ayuntamiento de Torrelavega." },
  { num: "05", titulo: "Acta de puesta en marcha", desc: "Obtenemos el acta final que permite operar legalmente con total seguridad jurídica." },
]

const faqs = [
  {
    pregunta: "¿Qué documentación necesito para legalizar una nave industrial en Torrelavega?",
    respuesta: "Necesitas un proyecto técnico firmado por ingeniero colegiado, memoria descriptiva de la actividad, planos de planta y alzados, y la solicitud de licencia ante el Ayuntamiento de Torrelavega. En algunos casos se requiere también informe de compatibilidad urbanística previo.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda la legalización de una nave en Torrelavega?",
    respuesta: "El plazo depende del tipo de actividad y la complejidad del expediente. En actividades inocuas o de bajo impacto, el proceso puede resolverse en 2-3 meses. Para actividades clasificadas o con mayor impacto ambiental, el plazo puede extenderse a 4-6 meses.",
  },
  {
    pregunta: "¿Es obligatorio tener la nave legalizada para operar en Torrelavega?",
    respuesta: "Sí. Operar en una nave sin licencia de actividad supone una infracción administrativa que puede conllevar multas, el cese de la actividad y problemas con seguros y financiación. La legalización protege legalmente al empresario y a sus trabajadores.",
  },
  {
    pregunta: "¿Cuánto cuesta legalizar una nave industrial en Torrelavega?",
    respuesta: "El coste varía según la superficie, el tipo de actividad y la complejidad del proyecto. Generalmente oscila entre 800 y 3.000 euros por el proyecto técnico, más las tasas municipales e impuestos correspondientes. Ofrecemos presupuesto gratuito tras una primera consulta.",
  },
]

export default function LegalizacionNaveTorrelavegaPage() {
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
            <span className="text-gray-300">Legalización nave Torrelavega</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Torrelavega · Cantabria</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Legalización de Nave Industrial en{" "}
            <span className="text-[#e07b39]">Torrelavega</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Proyecto técnico, tramitación ante Industria de Cantabria y licencia de actividad. Ingenieros colegiados con despacho en Torrelavega — conocemos el Ayuntamiento y los plazos reales.
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

      {/* Por qué nosotros */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-6">
                Ingenieros locales en Torrelavega para tu nave industrial
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                Legalizar una nave industrial en Torrelavega requiere conocer la normativa del Ayuntamiento, los tiempos de la Delegación de Industria de Cantabria y los requisitos específicos del polígono donde se ubica la instalación — ya sea El Campillo, Barreda, La Pañoleta o cualquier otro.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                Jesús Rosas, Ingeniero Técnico Industrial Colegiado, gestiona personalmente cada expediente desde nuestro despacho en la Calle José María Pereda 21. Sin intermediarios, con acceso directo a los organismos competentes.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Ingeniero Técnico Industrial Colegiado en Cantabria",
                "Despacho en Torrelavega — visita en obra sin desplazamiento extra",
                "Tramitación directa ante Industria de Cantabria y Ayuntamiento",
                "Presupuesto gratuito en menos de 24 horas",
                "Experiencia en polígonos de Torrelavega: El Campillo, Barreda, La Pañoleta",
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

      {/* Pasos */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Proceso de legalización paso a paso
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
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-10 text-center">
            Preguntas frecuentes sobre legalización de naves en Torrelavega
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
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-2xl mb-8 text-center">
            Otros servicios en Torrelavega y Cantabria
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { titulo: "Legalización nave industrial Santander", url: "/legalizacion-nave-industrial-santander" },
              { titulo: "Auditoría energética empresas Cantabria", url: "/auditoria-energetica-empresas-cantabria" },
              { titulo: "Ingeniería Industrial Cantabria", url: "/industrial" },
              { titulo: "Proyecto de actividad y licencias", url: "/industrial" },
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
