import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Licencia de Actividad Industrial | Cantabria | Proyecto Técnico Obligatorio",
  description:
    "Licencia de actividad industrial en Cantabria. Proyecto técnico para licencia en nave industrial, requisitos, tramitación ante Industria y Ayuntamiento. Ingeniero colegiado en Torrelavega. Presupuesto gratuito.",
  keywords: [
    "licencia actividad industrial",
    "licencia actividad nave industrial Cantabria",
    "proyecto técnico licencia industrial",
    "licencia industrial Cantabria",
    "tramitación licencia actividad industrial",
  ],
  alternates: { canonical: "https://www.ingenieriacantabria.com/licencia-actividad-industrial" },
  openGraph: {
    title: "Licencia de Actividad Industrial | Cantabria | Proyecto Técnico Obligatorio",
    description: "Proyecto técnico para licencia de actividad industrial en Cantabria. Tramitación completa ante Industria y Ayuntamiento. Ingeniero colegiado en Torrelavega.",
    url: "https://www.ingenieriacantabria.com/licencia-actividad-industrial",
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
      name: "Licencia de Actividad Industrial en Cantabria",
      description: "Servicio de proyecto técnico y tramitación de licencia de actividad industrial en Cantabria. Naves industriales, talleres, almacenes y plantas de producción. Tramitación ante Industria de Cantabria y Ayuntamiento. Ingeniero Técnico Industrial Colegiado en Torrelavega.",
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
          name: "¿Es obligatorio un proyecto técnico para la licencia de actividad industrial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Para cualquier actividad industrial en Cantabria es obligatorio presentar un proyecto técnico firmado por ingeniero colegiado. El proyecto debe incluir memoria descriptiva de la actividad, planos de distribución y sección, descripción de instalaciones (eléctrica, contra incendios, ventilación) y estudio de impacto acústico cuando corresponda. Sin este documento, el Ayuntamiento no tramita la licencia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué diferencia hay entre licencia de actividad industrial y comunicación previa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La comunicación previa es el trámite simplificado para actividades de bajo impacto. La licencia de actividad industrial completa se requiere para actividades clasificadas: aquellas que generan ruido, vibraciones, emisiones al aire, residuos peligrosos, almacenamiento de productos inflamables o cualquier otro impacto significativo. La mayoría de actividades industriales requieren licencia, no comunicación previa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué instalaciones debo legalizar para obtener la licencia industrial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Además del proyecto de actividad, suele ser necesario legalizar la instalación eléctrica en baja tensión (boletín eléctrico), la instalación de contra incendios si la superficie supera 500 m² o se almacenan materiales inflamables, la instalación de climatización o ventilación forzada, y en algunos casos la instalación de gas o aire comprimido. Nos encargamos de gestionar todos estos trámites de forma coordinada.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta el proyecto técnico para una licencia de actividad industrial en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El coste del proyecto técnico depende de la superficie de la nave, el tipo de actividad y los anejos de instalaciones necesarios. Para naves de hasta 500 m² con actividades de bajo impacto, los honorarios de ingeniería oscilan entre 1.200 y 2.500 euros. Para actividades clasificadas o instalaciones complejas, entre 2.000 y 5.000 euros. Ofrecemos presupuesto gratuito y detallado.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Industrial", item: "https://www.ingenieriacantabria.com/industrial" },
        { "@type": "ListItem", position: 3, name: "Licencia Actividad Industrial", item: "https://www.ingenieriacantabria.com/licencia-actividad-industrial" },
      ],
    },
  ],
}

const requisitos = [
  {
    titulo: "Proyecto técnico para licencia industrial",
    desc: "Redacción completa de la memoria descriptiva, planos de planta y sección, anejos de instalaciones y toda la documentación exigida por el Ayuntamiento y la Consejería de Industria.",
    icono: "📐",
  },
  {
    titulo: "Legalización de instalaciones",
    desc: "Tramitación ante Industria de Cantabria de las instalaciones eléctricas, contra incendios, ventilación, climatización, gas y maquinaria que forman parte de la actividad industrial.",
    icono: "⚡",
  },
  {
    titulo: "Estudio acústico y ambiental",
    desc: "Elaboración del estudio de impacto acústico y ambiental cuando la actividad lo requiere, cumpliendo con el Reglamento de Contaminación Acústica de Cantabria.",
    icono: "📊",
  },
  {
    titulo: "Plan de autoprotección",
    desc: "Redacción del Plan de Autoprotección y el plan de emergencia exigidos para actividades industriales con mayor riesgo o superficie superior a 500 m².",
    icono: "🛡",
  },
  {
    titulo: "Coordinación con Ayuntamiento",
    desc: "Presentación del expediente, seguimiento ante el técnico municipal y resolución de subsanaciones hasta la obtención de la licencia de actividad definitiva.",
    icono: "🏛",
  },
  {
    titulo: "Acta de puesta en marcha",
    desc: "Una vez concedida la licencia, tramitación del acta de puesta en marcha ante Industria de Cantabria que habilita el inicio de la actividad con plena seguridad jurídica.",
    icono: "✅",
  },
]

const pasos = [
  { num: "01", titulo: "Visita técnica a la nave", desc: "Inspeccionamos el estado actual de la nave, sus instalaciones y la actividad a desarrollar para determinar los trámites necesarios." },
  { num: "02", titulo: "Proyecto de actividad", desc: "Redactamos el proyecto técnico completo con memoria, planos, anejos de instalaciones y documentación complementaria con visado colegial." },
  { num: "03", titulo: "Tramitación Industria", desc: "Presentamos las legalizaciones de instalaciones ante la Delegación de Industria de Cantabria y gestionamos su resolución." },
  { num: "04", titulo: "Licencia municipal", desc: "Presentamos el expediente de licencia de actividad ante el Ayuntamiento y hacemos seguimiento hasta su resolución." },
  { num: "05", titulo: "Acta y puesta en marcha", desc: "Obtenemos el acta de puesta en marcha y la licencia definitiva que permite operar con seguridad jurídica plena." },
]

const faqs = [
  {
    pregunta: "¿Es obligatorio un proyecto técnico para la licencia de actividad industrial?",
    respuesta: "Sí. Para cualquier actividad industrial en Cantabria es obligatorio presentar un proyecto técnico firmado por ingeniero colegiado. El proyecto debe incluir memoria descriptiva de la actividad, planos de distribución y sección, descripción de instalaciones (eléctrica, contra incendios, ventilación) y estudio de impacto acústico cuando corresponda. Sin este documento, el Ayuntamiento no tramita la licencia.",
  },
  {
    pregunta: "¿Qué diferencia hay entre licencia de actividad industrial y comunicación previa?",
    respuesta: "La comunicación previa es el trámite simplificado para actividades de bajo impacto. La licencia de actividad industrial completa se requiere para actividades clasificadas: aquellas que generan ruido, vibraciones, emisiones al aire, residuos peligrosos, almacenamiento de productos inflamables o cualquier otro impacto significativo. La mayoría de actividades industriales requieren licencia, no comunicación previa.",
  },
  {
    pregunta: "¿Qué instalaciones debo legalizar para obtener la licencia industrial?",
    respuesta: "Además del proyecto de actividad, suele ser necesario legalizar la instalación eléctrica en baja tensión (boletín eléctrico), la instalación de contra incendios si la superficie supera 500 m² o se almacenan materiales inflamables, la instalación de climatización o ventilación forzada, y en algunos casos la instalación de gas o aire comprimido. Nos encargamos de gestionar todos estos trámites de forma coordinada.",
  },
  {
    pregunta: "¿Cuánto cuesta el proyecto técnico para una licencia de actividad industrial en Cantabria?",
    respuesta: "El coste del proyecto técnico depende de la superficie de la nave, el tipo de actividad y los anejos de instalaciones necesarios. Para naves de hasta 500 m² con actividades de bajo impacto, los honorarios de ingeniería oscilan entre 1.200 y 2.500 euros. Para actividades clasificadas o instalaciones complejas, entre 2.000 y 5.000 euros. Ofrecemos presupuesto gratuito y detallado.",
  },
]

export default function LicenciaActividadIndustrialPage() {
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
            <span className="text-gray-300">Licencia actividad industrial</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Torrelavega · Cantabria · Ingeniero Colegiado</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Licencia de Actividad{" "}
            <span className="text-[#e07b39]">Industrial</span>
            <br />en Cantabria
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Proyecto técnico para licencia de actividad en nave industrial, tramitación ante Industria de Cantabria y Ayuntamiento. Jesús Rosas, Ingeniero Técnico Industrial Colegiado, gestiona su expediente completo en toda la región.
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
                Proyecto técnico para licencia industrial: qué es y por qué es obligatorio
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                Para iniciar o regularizar una actividad industrial en Cantabria es imprescindible disponer de un proyecto técnico firmado por un ingeniero colegiado. Este documento recoge la descripción de la actividad, los planos de la instalación y la justificación del cumplimiento de la normativa de seguridad industrial, protección contra incendios, acústica y medio ambiente.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                Sin el proyecto técnico, el Ayuntamiento no puede tramitar la licencia de actividad y Industria de Cantabria no puede legalizar las instalaciones. Operar sin esta documentación expone al empresario a sanciones, multas y la posibilidad de cierre cautelar de la actividad.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Proyecto técnico con visado colegial — exigido por Ayuntamiento e Industria",
                "Legalización de instalaciones eléctricas, contra incendios y maquinaria",
                "Tramitación ante Delegación de Industria de Cantabria",
                "Estudio acústico y ambiental cuando la actividad lo requiere",
                "Seguimiento hasta la obtención del acta de puesta en marcha",
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

      {/* Requisitos / Servicios */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4 text-center">
            Qué incluye la tramitación de la licencia industrial
          </h2>
          <p className="text-[#4a6080] font-body text-lg text-center max-w-2xl mx-auto mb-12">
            Servicio integral para naves industriales en Cantabria: proyecto, instalaciones y licencia municipal
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requisitos.map((r) => (
              <div key={r.titulo} className="card p-6">
                <div className="text-3xl mb-4">{r.icono}</div>
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-base mb-2 leading-snug">{r.titulo}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos del proceso */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Proceso para obtener la licencia de actividad industrial
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
            Preguntas frecuentes sobre licencia de actividad industrial en Cantabria
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

      {/* CTA final */}
      <section className="section-padding bg-[#1a3a5c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-heading font-black text-3xl mb-4">
            Solicite el proyecto técnico para su licencia industrial
          </h2>
          <p className="text-gray-300 font-body text-lg mb-8">
            Le explicamos el proceso completo y le enviamos un presupuesto detallado sin coste en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+34623967087" className="inline-flex items-center justify-center gap-2 bg-[#e07b39] hover:bg-[#c96a2e] text-white rounded-sm px-6 py-3 font-body font-semibold transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              623 96 70 87
            </a>
            <a href="mailto:jesus@ingenieriacantabria.com" className="inline-flex items-center justify-center gap-2 text-white border border-white/30 hover:border-white/60 rounded-sm px-6 py-3 font-body font-medium transition-colors">
              jesus@ingenieriacantabria.com
            </a>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-2xl mb-8 text-center">
            Otros servicios industriales en Cantabria
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { titulo: "Legalización actividades Cantabria", url: "/legalizacion-actividades-cantabria" },
              { titulo: "Legalización nave industrial Torrelavega", url: "/legalizacion-nave-industrial-torrelavega" },
              { titulo: "Ingeniería Industrial Cantabria", url: "/ingenieria-industrial-cantabria" },
              { titulo: "Servicios industriales", url: "/industrial" },
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
