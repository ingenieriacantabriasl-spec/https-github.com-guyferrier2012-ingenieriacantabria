import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Ayudas Next Generation Cantabria para Empresas 2026 | Gestión con Ingeniero",
  description:
    "Gestión integral de ayudas Next Generation EU para empresas en Cantabria: Kit Digital, eficiencia energética, autoconsumo solar, movilidad sostenible. Ingeniero colegiado.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/ayudas-next-generation-cantabria" },
  openGraph: {
    title: "Ayudas Next Generation Cantabria para Empresas 2026 | Gestión con Ingeniero",
    description: "Gestión integral de ayudas Next Generation EU para empresas en Cantabria. Ingeniero Técnico Industrial Colegiado.",
    url: "https://www.ingenieriacantabria.com/ayudas-next-generation-cantabria",
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
      name: "Gestión de Ayudas Next Generation EU en Cantabria",
      description: "Servicio de gestión y tramitación integral de ayudas Next Generation EU para empresas en Cantabria: digitalización Kit Digital, eficiencia energética, autoconsumo solar, movilidad sostenible y rehabilitación de edificios.",
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
          name: "¿Qué empresas pueden solicitar las ayudas Next Generation en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pueden solicitar las ayudas Next Generation en Cantabria las pymes, autónomos y grandes empresas, aunque los requisitos varían según la línea. El Kit Digital está dirigido a pymes y autónomos; las ayudas de eficiencia energética y autoconsumo solar son accesibles para todo tipo de empresas; las de rehabilitación de edificios aplican a propietarios o comunidades de propietarios. Un ingeniero puede determinar qué líneas aplican a su caso concreto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto dinero se puede obtener con las ayudas Next Generation para empresas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los importes varían por línea: el Kit Digital ofrece bonos de hasta 29.000 € para pymes de hasta 50 empleados; las ayudas de autoconsumo solar pueden cubrir hasta el 40-65% del coste de la instalación; las de eficiencia energética en edificios pueden llegar al 80% de la inversión en intervenciones con reducción de demanda superiores al 60%. En todos los casos los importes dependen del tamaño de empresa y del porcentaje de mejora acreditado.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué sirve un ingeniero en la tramitación de ayudas Next Generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El ingeniero técnico industrial es imprescindible para las ayudas que requieren proyecto técnico, memoria descriptiva, certificado energético o informe de idoneidad: instalaciones de autoconsumo solar, proyectos de eficiencia energética, rehabilitación energética de edificios y movilidad sostenible. Sin la firma de un ingeniero colegiado, estas solicitudes no se admiten a trámite. Además el ingeniero identifica qué líneas son compatibles y cuáles acumulables.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es el plazo para solicitar las ayudas Next Generation en Cantabria en 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los fondos Next Generation EU tienen como horizonte de ejecución el 31 de diciembre de 2026. Las convocatorias regionales en Cantabria, gestionadas a través del IDCAN y SODERCAN, se publican de forma periódica. Algunas líneas como el Kit Digital siguen abiertas de manera continuada. Es recomendable iniciar la tramitación cuanto antes para no perder las convocatorias que aún tienen presupuesto disponible.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Ingeniería Industrial", item: "https://www.ingenieriacantabria.com/industrial" },
        { "@type": "ListItem", position: 3, name: "Ayudas Next Generation Cantabria", item: "https://www.ingenieriacantabria.com/ayudas-next-generation-cantabria" },
      ],
    },
  ],
}

const ayudas = [
  {
    titulo: "Kit Digital",
    desc: "Bonos de hasta 29.000 € para digitalización de pymes y autónomos. Implantación de software de gestión, ciberseguridad, presencia web y comercio electrónico.",
    importe: "Hasta 29.000 €",
  },
  {
    titulo: "Autoconsumo solar fotovoltaico",
    desc: "Subvenciones para instalaciones de autoconsumo solar en empresas. Reducción directa de la factura eléctrica y mejora de la huella de carbono.",
    importe: "40–65% del coste",
  },
  {
    titulo: "Eficiencia energética industrial",
    desc: "Ayudas para proyectos de reducción del consumo energético en instalaciones industriales, incluyendo climatización, iluminación LED y envolvente térmica.",
    importe: "Hasta el 45%",
  },
  {
    titulo: "Rehabilitación energética de edificios",
    desc: "Financiación para mejorar la eficiencia energética de edificios de uso terciario y residencial. Requiere reducción mínima del 30% en demanda energética.",
    importe: "Hasta el 80%",
  },
  {
    titulo: "Movilidad eléctrica sostenible",
    desc: "Ayudas para adquisición de vehículos eléctricos e instalación de puntos de recarga en empresas y flotas. Programas MOVES III y convocatorias autonómicas.",
    importe: "Hasta 9.000 € por vehículo",
  },
  {
    titulo: "Proyectos de I+D e innovación",
    desc: "Financiación para proyectos de investigación, desarrollo e innovación empresarial a través del programa Horizon Europe y convocatorias CDTI.",
    importe: "Variable por proyecto",
  },
  {
    titulo: "Digitalización del sector turístico",
    desc: "Líneas específicas para empresas turísticas en Cantabria que busquen modernizar su operativa, mejorar la experiencia del cliente o implementar soluciones digitales.",
    importe: "Hasta 15.000 €",
  },
  {
    titulo: "Formación y reskilling",
    desc: "Ayudas para formación de trabajadores en competencias digitales y transición ecológica, vinculadas al Plan de Recuperación y los fondos del FSE+.",
    importe: "Hasta el 100% en micropymes",
  },
]

const pasos = [
  { num: "01", titulo: "Diagnóstico inicial", desc: "Analizamos su empresa, instalaciones y situación para identificar qué líneas de ayudas son aplicables y compatibles." },
  { num: "02", titulo: "Selección de convocatorias", desc: "Identificamos las convocatorias abiertas o próximas en Cantabria y el calendario de resolución estimado." },
  { num: "03", titulo: "Proyecto técnico", desc: "Redactamos la memoria, los planos y el proyecto técnico firmado por ingeniero colegiado que exige cada solicitud." },
  { num: "04", titulo: "Presentación de la solicitud", desc: "Preparamos y presentamos toda la documentación ante el organismo competente: IDCAN, SODERCAN o entidad gestora." },
  { num: "05", titulo: "Seguimiento y justificación", desc: "Acompañamos la tramitación hasta la resolución y gestionamos la justificación económica y técnica del gasto." },
]

const faqs = [
  {
    pregunta: "¿Qué empresas pueden solicitar las ayudas Next Generation en Cantabria?",
    respuesta: "Pueden solicitar las ayudas Next Generation en Cantabria las pymes, autónomos y grandes empresas, aunque los requisitos varían según la línea. El Kit Digital está dirigido a pymes y autónomos; las ayudas de eficiencia energética y autoconsumo solar son accesibles para todo tipo de empresas; las de rehabilitación de edificios aplican a propietarios o comunidades de propietarios. Un ingeniero puede determinar qué líneas aplican a su caso concreto.",
  },
  {
    pregunta: "¿Cuánto dinero se puede obtener con las ayudas Next Generation para empresas?",
    respuesta: "Los importes varían por línea: el Kit Digital ofrece bonos de hasta 29.000 € para pymes de hasta 50 empleados; las ayudas de autoconsumo solar pueden cubrir hasta el 40-65% del coste de la instalación; las de eficiencia energética en edificios pueden llegar al 80% de la inversión en intervenciones con reducción de demanda superiores al 60%. En todos los casos los importes dependen del tamaño de empresa y del porcentaje de mejora acreditado.",
  },
  {
    pregunta: "¿Para qué sirve un ingeniero en la tramitación de ayudas Next Generation?",
    respuesta: "El ingeniero técnico industrial es imprescindible para las ayudas que requieren proyecto técnico, memoria descriptiva, certificado energético o informe de idoneidad: instalaciones de autoconsumo solar, proyectos de eficiencia energética, rehabilitación energética de edificios y movilidad sostenible. Sin la firma de un ingeniero colegiado, estas solicitudes no se admiten a trámite. Además el ingeniero identifica qué líneas son compatibles y cuáles acumulables.",
  },
  {
    pregunta: "¿Cuál es el plazo para solicitar las ayudas Next Generation en Cantabria en 2026?",
    respuesta: "Los fondos Next Generation EU tienen como horizonte de ejecución el 31 de diciembre de 2026. Las convocatorias regionales en Cantabria, gestionadas a través del IDCAN y SODERCAN, se publican de forma periódica. Algunas líneas como el Kit Digital siguen abiertas de manera continuada. Es recomendable iniciar la tramitación cuanto antes para no perder las convocatorias que aún tienen presupuesto disponible.",
  },
]

export default function AyudasNextGenerationPage() {
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
            <span className="text-gray-300">Ayudas Next Generation Cantabria</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Cantabria · Fondos Next Generation EU · Plazo 2026</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Ayudas Next Generation para Empresas en{" "}
            <span className="text-[#e07b39]">Cantabria</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Gestión integral de los fondos europeos Next Generation EU para su empresa en Cantabria. Identificamos las líneas aplicables, redactamos los proyectos técnicos y tramitamos las solicitudes hasta la resolución. Ingeniero Técnico Industrial Colegiado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contacto" className="btn-primary">Consulta gratuita sin compromiso</Link>
            <a href="tel:+34623967087" className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white/60 rounded-sm px-6 py-3 font-body font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              623 96 70 87
            </a>
          </div>
        </div>
      </section>

      {/* Contexto + por qué un ingeniero */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-6">
                ¿Por qué necesita un ingeniero para tramitar las ayudas Next Generation?
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                La mayoría de las líneas de ayudas Next Generation EU que generan mayor ahorro para las empresas —autoconsumo solar, eficiencia energética, rehabilitación de edificios, movilidad eléctrica— exigen un proyecto técnico firmado por un ingeniero colegiado. Sin ese documento, la solicitud no se admite a trámite.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                Como Ingeniero Técnico Industrial Colegiado en Cantabria, Jesús Rosas gestiona el proceso completo: diagnóstico de elegibilidad, redacción del proyecto técnico, presentación ante IDCAN o SODERCAN y justificación final. Su empresa solo tiene que ejecutar la inversión.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Diagnóstico gratuito: analizamos qué ayudas aplican a su empresa",
                "Proyecto técnico firmado por ingeniero colegiado incluido",
                "Tramitación completa ante IDCAN, SODERCAN y entidades gestoras",
                "Identificación de ayudas acumulables para maximizar la subvención",
                "Seguimiento hasta resolución y gestión de la justificación final",
                "Experiencia en pymes industriales, comerciales y del sector servicios de Cantabria",
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

      {/* Tipos de ayudas */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4 text-center">
            Líneas de ayudas Next Generation que gestionamos
          </h2>
          <p className="text-[#4a6080] font-body text-lg text-center max-w-2xl mx-auto mb-12">
            Más de 8 programas activos con fondos europeos disponibles para empresas en Cantabria hasta 2026.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ayudas.map((ayuda) => (
              <div key={ayuda.titulo} className="card p-6">
                <div className="inline-flex items-center bg-[#e07b39]/10 text-[#e07b39] text-xs font-heading font-semibold px-2 py-1 rounded-sm mb-3">
                  {ayuda.importe}
                </div>
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-base mb-2 leading-snug">{ayuda.titulo}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{ayuda.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Cómo tramitamos las ayudas para su empresa
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
            Preguntas frecuentes sobre ayudas Next Generation en Cantabria
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
              { titulo: "Auditoría energética para empresas", url: "/auditoria-energetica-empresas-cantabria" },
              { titulo: "Legalización nave industrial Torrelavega", url: "/legalizacion-nave-industrial-torrelavega" },
              { titulo: "Legalización nave industrial Santander", url: "/legalizacion-nave-industrial-santander" },
              { titulo: "Ingeniería Industrial Cantabria", url: "/industrial" },
            ].map((s) => (
              <Link key={s.url} href={s.url} className="inline-flex items-center bg-[#f5f7fa] border border-[#1a3a5c]/20 hover:border-[#e07b39] text-[#1a3a5c] hover:text-[#e07b39] rounded-sm px-4 py-2 font-body text-sm transition-colors">
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
