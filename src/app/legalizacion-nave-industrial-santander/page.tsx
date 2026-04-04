import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Legalización de Nave Industrial en Santander | Ingeniero Técnico Colegiado",
  description:
    "Legalización de naves industriales en Santander. Proyecto técnico firmado, tramitación ante Industria de Cantabria y licencia municipal. Presupuesto gratuito en 24h.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/legalizacion-nave-industrial-santander" },
  openGraph: {
    title: "Legalización de Nave Industrial en Santander | Ingeniero Técnico Colegiado",
    description: "Legalización de naves industriales en Santander. Proyecto técnico y tramitación completa ante Industria de Cantabria.",
    url: "https://www.ingenieriacantabria.com/legalizacion-nave-industrial-santander",
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
      name: "Legalización de Nave Industrial en Santander",
      description: "Proyecto técnico, tramitación ante Industria de Cantabria y licencia de actividad para naves industriales en Santander.",
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
        name: "Santander",
        containedIn: { "@type": "State", name: "Cantabria" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué diferencia hay entre licencia de actividad y legalización industrial en Santander?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La licencia de actividad es el permiso municipal para ejercer una actividad en un local o nave. La legalización industrial ante la Delegación de Industria de Cantabria es el registro de las instalaciones técnicas (electricidad, maquinaria, presión, etc.). En muchos casos ambas tramitaciones son necesarias y pueden hacerse de forma simultánea.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo legalizar una nave en el Polígono de Raos desde cero?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El Polígono de Raos en Santander tiene usos industriales y logísticos permitidos. Es necesario verificar la compatibilidad urbanística de la actividad concreta, elaborar el proyecto técnico correspondiente y tramitarlo ante el Ayuntamiento de Santander e Industria de Cantabria.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda y cuánto cuesta legalizar una nave en Santander?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los plazos oscilan entre 2 y 6 meses según la complejidad de la actividad. El coste del proyecto técnico está entre 800 y 3.500 euros, dependiendo de la superficie y el tipo de instalaciones. El presupuesto es gratuito y sin compromiso.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Ingeniería Industrial", item: "https://www.ingenieriacantabria.com/industrial" },
        { "@type": "ListItem", position: 3, name: "Legalización Nave Industrial Santander", item: "https://www.ingenieriacantabria.com/legalizacion-nave-industrial-santander" },
      ],
    },
  ],
}

const pasos = [
  { num: "01", titulo: "Consulta gratuita", desc: "Estudiamos la nave, la actividad y el estado administrativo actual sin coste." },
  { num: "02", titulo: "Proyecto técnico", desc: "Memoria, planos, cálculos y documentación firmada por ingeniero colegiado." },
  { num: "03", titulo: "Tramitación Industria", desc: "Presentación del expediente ante la Delegación de Industria de Cantabria." },
  { num: "04", titulo: "Licencia municipal", desc: "Gestión de la licencia de actividad ante el Ayuntamiento de Santander." },
  { num: "05", titulo: "Puesta en marcha", desc: "Acta de puesta en marcha y certificado final que acredita la legalidad de la instalación." },
]

const faqs = [
  {
    pregunta: "¿Qué diferencia hay entre licencia de actividad y legalización industrial en Santander?",
    respuesta: "La licencia de actividad es el permiso municipal para ejercer una actividad en un local o nave. La legalización industrial ante la Delegación de Industria de Cantabria es el registro de las instalaciones técnicas (electricidad, maquinaria, presión, etc.). En muchos casos ambas tramitaciones son necesarias y pueden hacerse de forma simultánea.",
  },
  {
    pregunta: "¿Puedo legalizar una nave en el Polígono de Raos desde cero?",
    respuesta: "Sí. El Polígono de Raos en Santander tiene usos industriales y logísticos permitidos. Es necesario verificar la compatibilidad urbanística de la actividad concreta, elaborar el proyecto técnico correspondiente y tramitarlo ante el Ayuntamiento de Santander e Industria de Cantabria.",
  },
  {
    pregunta: "¿Cuánto tarda y cuánto cuesta legalizar una nave en Santander?",
    respuesta: "Los plazos oscilan entre 2 y 6 meses según la complejidad de la actividad. El coste del proyecto técnico está entre 800 y 3.500 euros, dependiendo de la superficie y el tipo de instalaciones. El presupuesto es gratuito y sin compromiso.",
  },
]

export default function LegalizacionNaveSantanderPage() {
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
            <span className="text-gray-300">Legalización nave Santander</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Santander · Cantabria</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Legalización de Nave Industrial en{" "}
            <span className="text-[#e07b39]">Santander</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Proyecto técnico, tramitación ante Industria de Cantabria y licencia municipal. Ingeniero Técnico Industrial Colegiado con amplia experiencia en polígonos de Santander: Raos, Guarnizo, Candina.
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

      {/* Contenido */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-6">
                Especialistas en legalización industrial en Santander
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                Legalizar una nave en Santander implica conocer los usos permitidos en cada polígono, los tiempos reales del Ayuntamiento y los requisitos específicos de la Delegación de Industria de Cantabria. El Polígono de Raos, el Parque Empresarial de Guarnizo o las naves de Candina tienen particularidades que conviene conocer antes de iniciar el expediente.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                Gestionamos la legalización completa: desde la consulta previa de compatibilidad urbanística hasta la obtención del acta de puesta en marcha, pasando por el proyecto técnico y todas las tramitaciones ante los organismos competentes.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Ingeniero Técnico Industrial Colegiado en Cantabria",
                "Experiencia en Polígono de Raos, Guarnizo y Candina",
                "Tramitación completa ante Industria y Ayuntamiento de Santander",
                "Sin intermediarios — gestión directa del expediente",
                "Presupuesto gratuito en menos de 24 horas",
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
            Proceso de legalización en Santander
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
            Preguntas frecuentes
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
            Otros servicios en Santander y Cantabria
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { titulo: "Legalización nave industrial Torrelavega", url: "/legalizacion-nave-industrial-torrelavega" },
              { titulo: "Auditoría energética empresas Cantabria", url: "/auditoria-energetica-empresas-cantabria" },
              { titulo: "Ingeniería Industrial Cantabria", url: "/industrial" },
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
