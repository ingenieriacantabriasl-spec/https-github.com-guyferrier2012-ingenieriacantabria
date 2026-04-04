import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Auditoría Energética para Empresas en Cantabria | Ingeniero Técnico Colegiado",
  description:
    "Auditoría energética obligatoria para empresas en Cantabria. Diagnóstico del consumo, plan de mejoras y certificado oficial. Ingeniero colegiado. Presupuesto gratuito.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/auditoria-energetica-empresas-cantabria" },
  openGraph: {
    title: "Auditoría Energética para Empresas en Cantabria | Ingeniero Técnico Colegiado",
    description: "Auditoría energética obligatoria para empresas en Cantabria. Diagnóstico, plan de mejoras y certificado oficial.",
    url: "https://www.ingenieriacantabria.com/auditoria-energetica-empresas-cantabria",
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
      name: "Auditoría Energética para Empresas en Cantabria",
      description: "Servicio de auditoría energética obligatoria para grandes empresas y pymes en Cantabria. Diagnóstico del consumo, identificación de mejoras y certificado oficial según norma UNE-EN 16247.",
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
          name: "¿Qué empresas están obligadas a hacer una auditoría energética en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Según el Real Decreto 56/2016, están obligadas las grandes empresas (más de 250 trabajadores o facturación superior a 50 millones de euros) a realizar una auditoría energética cada 4 años. Las pymes no están obligadas pero pueden beneficiarse de subvenciones del IDAE y de la reducción real de costes energéticos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta una auditoría energética para una empresa en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El coste varía según el tamaño y la complejidad de las instalaciones. Para una pyme con superficie de 500-2.000 m², el rango habitual está entre 800 y 2.500 euros. Para grandes empresas con múltiples instalaciones, se elabora un presupuesto personalizado. El ahorro energético obtenido suele amortizar la inversión en el primer año.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué incluye una auditoría energética según la norma UNE-EN 16247?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La auditoría conforme a la norma UNE-EN 16247 incluye: recogida de datos de consumo energético histórico, visita técnica a las instalaciones, análisis de envolvente térmica, instalaciones de climatización, iluminación y procesos productivos, identificación de oportunidades de mejora con cálculo de retorno de inversión, y elaboración del informe de auditoría con el plan de acción.",
          },
        },
        {
          "@type": "Question",
          name: "¿Hay subvenciones para auditorías energéticas en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El IDAE y el Gobierno de Cantabria publican convocatorias periódicas que cubren hasta el 70% del coste de la auditoría energética para pymes. También existen líneas de financiación de SODERCAN para proyectos de eficiencia energética empresarial. Le asesoramos sobre las ayudas disponibles en el momento de contratar el servicio.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Ingeniería Industrial", item: "https://www.ingenieriacantabria.com/industrial" },
        { "@type": "ListItem", position: 3, name: "Auditoría Energética Empresas Cantabria", item: "https://www.ingenieriacantabria.com/auditoria-energetica-empresas-cantabria" },
      ],
    },
  ],
}

const pasos = [
  { num: "01", titulo: "Recogida de datos", desc: "Recopilamos facturas energéticas, planos y datos de consumo de los últimos 12 meses." },
  { num: "02", titulo: "Visita técnica", desc: "Inspección in situ de instalaciones: climatización, iluminación, envolvente y procesos." },
  { num: "03", titulo: "Análisis energético", desc: "Modelado del consumo real e identificación de focos de pérdida energética." },
  { num: "04", titulo: "Plan de mejoras", desc: "Propuestas de actuación con cálculo de inversión, ahorro esperado y retorno." },
  { num: "05", titulo: "Informe y certificado", desc: "Informe completo conforme a UNE-EN 16247 y certificado oficial de auditoría." },
]

const faqs = [
  {
    pregunta: "¿Qué empresas están obligadas a hacer una auditoría energética en Cantabria?",
    respuesta: "Según el Real Decreto 56/2016, están obligadas las grandes empresas (más de 250 trabajadores o facturación superior a 50 millones de euros) a realizar una auditoría energética cada 4 años. Las pymes no están obligadas pero pueden beneficiarse de subvenciones del IDAE y de la reducción real de costes energéticos.",
  },
  {
    pregunta: "¿Cuánto cuesta una auditoría energética para una empresa en Cantabria?",
    respuesta: "El coste varía según el tamaño y la complejidad de las instalaciones. Para una pyme con superficie de 500-2.000 m², el rango habitual está entre 800 y 2.500 euros. Para grandes empresas con múltiples instalaciones, se elabora un presupuesto personalizado. El ahorro energético obtenido suele amortizar la inversión en el primer año.",
  },
  {
    pregunta: "¿Qué incluye una auditoría energética según la norma UNE-EN 16247?",
    respuesta: "La auditoría conforme a la norma UNE-EN 16247 incluye: recogida de datos de consumo energético histórico, visita técnica a las instalaciones, análisis de envolvente térmica, instalaciones de climatización, iluminación y procesos productivos, identificación de oportunidades de mejora con cálculo de retorno de inversión, y elaboración del informe de auditoría con el plan de acción.",
  },
  {
    pregunta: "¿Hay subvenciones para auditorías energéticas en Cantabria?",
    respuesta: "Sí. El IDAE y el Gobierno de Cantabria publican convocatorias periódicas que cubren hasta el 70% del coste de la auditoría energética para pymes. También existen líneas de financiación de SODERCAN para proyectos de eficiencia energética empresarial. Le asesoramos sobre las ayudas disponibles en el momento de contratar el servicio.",
  },
]

export default function AuditoriaEnergeticaPage() {
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
            <span className="text-gray-300">Auditoría energética empresas Cantabria</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Cantabria · Norma UNE-EN 16247</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Auditoría Energética para Empresas en{" "}
            <span className="text-[#e07b39]">Cantabria</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Diagnóstico completo del consumo energético de su empresa, plan de mejoras con retorno de inversión calculado y certificado oficial conforme a la norma UNE-EN 16247. Ingenieros colegiados en Cantabria.
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

      {/* Obligatoriedad + contexto */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-6">
                ¿Tu empresa necesita una auditoría energética?
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                El Real Decreto 56/2016 obliga a las grandes empresas a realizar auditorías energéticas cada cuatro años. Pero más allá de la obligación legal, una auditoría bien realizada identifica un ahorro medio del 15-30% en la factura energética — algo especialmente relevante para industrias de Cantabria con consumos intensivos como las del sector químico, metalúrgico o agroalimentario.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                Realizamos auditorías en todo tipo de instalaciones: naves industriales, oficinas, hoteles, instalaciones agrícolas y ganaderas. El informe incluye priorización de actuaciones por retorno de inversión y asesoramiento sobre subvenciones disponibles del IDAE y SODERCAN.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Conforme a norma UNE-EN 16247 — válido para cumplimiento legal",
                "Ingeniero Técnico Industrial Colegiado en Cantabria",
                "Cubre todos los vectores energéticos: electricidad, gas, combustibles",
                "Plan de mejoras con cálculo de ROI por actuación",
                "Asesoramiento sobre subvenciones IDAE y SODERCAN incluido",
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
            Cómo realizamos la auditoría energética
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
            Preguntas frecuentes sobre auditorías energéticas
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
            Otros servicios en Cantabria
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { titulo: "Legalización nave industrial Torrelavega", url: "/legalizacion-nave-industrial-torrelavega" },
              { titulo: "Legalización nave industrial Santander", url: "/legalizacion-nave-industrial-santander" },
              { titulo: "Ingeniería Industrial Cantabria", url: "/industrial" },
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
