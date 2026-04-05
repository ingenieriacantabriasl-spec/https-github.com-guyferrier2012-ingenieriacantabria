import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Legalización de Actividades Cantabria | Licencia Apertura | Ingeniero Colegiado",
  description:
    "Legalización de actividades empresariales en Cantabria. Tramitación completa de licencias de apertura y actividad ante Ayuntamiento y Gobierno de Cantabria. Ingeniero colegiado en Torrelavega. Presupuesto gratuito.",
  keywords: [
    "legalización actividades Cantabria",
    "licencia apertura actividad Cantabria",
    "licencia actividad Cantabria",
    "tramitación licencia apertura Cantabria",
    "proyecto actividad Cantabria",
  ],
  alternates: { canonical: "https://www.ingenieriacantabria.com/legalizacion-actividades-cantabria" },
  openGraph: {
    title: "Legalización de Actividades Cantabria | Licencia Apertura | Ingeniero Colegiado",
    description: "Tramitación completa de licencias de apertura y actividad en Cantabria. Ingeniero Técnico Industrial Colegiado en Torrelavega.",
    url: "https://www.ingenieriacantabria.com/legalizacion-actividades-cantabria",
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
      name: "Legalización de Actividades en Cantabria",
      description: "Servicio de tramitación completa de licencias de apertura y actividad en Cantabria: comunicaciones previas, licencias ambientales, proyectos técnicos y gestión ante Ayuntamiento y Gobierno de Cantabria. Ingeniero Técnico Industrial Colegiado en Torrelavega.",
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
          name: "¿Qué es la legalización de una actividad empresarial en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La legalización de una actividad consiste en obtener la autorización administrativa necesaria para ejercer una actividad económica en un local o nave. En Cantabria, según el tipo de actividad, puede requerir una comunicación previa, una declaración responsable o una licencia de actividad clasificada ante el Ayuntamiento correspondiente. En todos los casos es necesario un proyecto técnico firmado por ingeniero colegiado.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuándo necesito licencia de apertura de actividad en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Toda actividad empresarial que se desarrolle en un local, nave o establecimiento abierto al público o con acceso de trabajadores requiere algún tipo de autorización. Las actividades inocuas o de bajo impacto pueden tramitarse mediante comunicación previa o declaración responsable. Las actividades clasificadas (con ruido, emisiones, productos químicos o mayor impacto) requieren licencia ambiental con informe técnico previo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda la tramitación de una licencia de actividad en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los plazos varían según el tipo de trámite. Una comunicación previa o declaración responsable puede resolverse en 2-4 semanas. Una licencia ambiental de actividad clasificada tiene plazos legales de 3 a 6 meses, aunque el tiempo efectivo depende del Ayuntamiento. Gestionamos el seguimiento del expediente para agilizar el proceso en todo momento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta legalizar una actividad en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El coste depende del tipo de actividad, la superficie y los trámites necesarios. Para locales o naves de hasta 300 m² con actividades de bajo impacto, los honorarios de ingeniería se sitúan entre 600 y 1.800 euros. Para actividades clasificadas o con mayores requisitos técnicos, entre 1.500 y 4.000 euros. Ofrecemos presupuesto gratuito y sin compromiso.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.ingenieriacantabria.com/servicios" },
        { "@type": "ListItem", position: 3, name: "Legalización Actividades Cantabria", item: "https://www.ingenieriacantabria.com/legalizacion-actividades-cantabria" },
      ],
    },
  ],
}

const beneficios = [
  {
    titulo: "Tramitación completa licencias actividad",
    desc: "Nos encargamos de toda la tramitación: proyecto técnico, presentación ante el Ayuntamiento y seguimiento del expediente hasta la obtención de la licencia.",
    icono: "📋",
  },
  {
    titulo: "Proyecto técnico con visado colegial",
    desc: "Redacción de la memoria descriptiva, planos, anejos técnicos y toda la documentación exigida, con visado del Colegio Oficial de Ingenieros Técnicos Industriales.",
    icono: "📐",
  },
  {
    titulo: "Actividades inocuas y clasificadas",
    desc: "Gestionamos tanto comunicaciones previas y declaraciones responsables como licencias ambientales de actividades clasificadas con mayor impacto ambiental o acústico.",
    icono: "🏢",
  },
  {
    titulo: "Coordinación con Gobierno de Cantabria",
    desc: "Tramitación ante la Consejería de Medio Ambiente y Ordenación del Territorio del Gobierno de Cantabria cuando la actividad lo requiere.",
    icono: "🏛",
  },
  {
    titulo: "Asesoramiento normativo previo",
    desc: "Antes de iniciar el trámite, analizamos la compatibilidad urbanística de la actividad y le informamos de los requisitos técnicos concretos de su caso.",
    icono: "⚖",
  },
  {
    titulo: "Presupuesto gratuito en 24 horas",
    desc: "Consulta sin compromiso. Le informamos del proceso completo, los plazos reales y el coste antes de iniciar cualquier trabajo.",
    icono: "✅",
  },
]

const pasos = [
  { num: "01", titulo: "Consulta inicial gratuita", desc: "Analizamos su actividad, el local o nave y la normativa municipal aplicable sin coste alguno." },
  { num: "02", titulo: "Clasificación de la actividad", desc: "Determinamos si su actividad requiere comunicación previa, declaración responsable o licencia ambiental clasificada." },
  { num: "03", titulo: "Redacción del proyecto técnico", desc: "Elaboramos la memoria, planos y documentación técnica completa con visado del colegio profesional." },
  { num: "04", titulo: "Presentación y tramitación", desc: "Presentamos el expediente ante el Ayuntamiento y el Gobierno de Cantabria y hacemos el seguimiento completo." },
  { num: "05", titulo: "Obtención de la licencia", desc: "Recepción de la licencia de actividad o el silencio administrativo positivo que permite operar legalmente." },
]

const faqs = [
  {
    pregunta: "¿Qué es la legalización de una actividad empresarial en Cantabria?",
    respuesta: "La legalización de una actividad consiste en obtener la autorización administrativa necesaria para ejercer una actividad económica en un local o nave. En Cantabria, según el tipo de actividad, puede requerir una comunicación previa, una declaración responsable o una licencia de actividad clasificada ante el Ayuntamiento correspondiente. En todos los casos es necesario un proyecto técnico firmado por ingeniero colegiado.",
  },
  {
    pregunta: "¿Cuándo necesito licencia de apertura de actividad en Cantabria?",
    respuesta: "Toda actividad empresarial que se desarrolle en un local, nave o establecimiento abierto al público o con acceso de trabajadores requiere algún tipo de autorización. Las actividades inocuas o de bajo impacto pueden tramitarse mediante comunicación previa o declaración responsable. Las actividades clasificadas (con ruido, emisiones, productos químicos o mayor impacto) requieren licencia ambiental con informe técnico previo.",
  },
  {
    pregunta: "¿Cuánto tarda la tramitación de una licencia de actividad en Cantabria?",
    respuesta: "Los plazos varían según el tipo de trámite. Una comunicación previa o declaración responsable puede resolverse en 2-4 semanas. Una licencia ambiental de actividad clasificada tiene plazos legales de 3 a 6 meses, aunque el tiempo efectivo depende del Ayuntamiento. Gestionamos el seguimiento del expediente para agilizar el proceso en todo momento.",
  },
  {
    pregunta: "¿Cuánto cuesta legalizar una actividad en Cantabria?",
    respuesta: "El coste depende del tipo de actividad, la superficie y los trámites necesarios. Para locales o naves de hasta 300 m² con actividades de bajo impacto, los honorarios de ingeniería se sitúan entre 600 y 1.800 euros. Para actividades clasificadas o con mayores requisitos técnicos, entre 1.500 y 4.000 euros. Ofrecemos presupuesto gratuito y sin compromiso.",
  },
]

export default function LegalizacionActividadesCantabriaPage() {
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
            <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-gray-300">Legalización actividades Cantabria</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Torrelavega · Cantabria · Ingeniero Colegiado</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Legalización de Actividades en{" "}
            <span className="text-[#e07b39]">Cantabria</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Tramitación completa de licencias de apertura y actividad ante el Ayuntamiento y el Gobierno de Cantabria. Jesús Rosas, Ingeniero Técnico Industrial Colegiado en Torrelavega, gestiona su expediente de principio a fin.
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
                Gestión integral de licencias de actividad en Cantabria
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                Abrir un negocio o poner en marcha una actividad empresarial en Cantabria exige cumplir con los requisitos técnicos y administrativos de cada municipio. Según el tipo de actividad y su impacto, el proceso puede requerir desde una simple comunicación previa hasta una licencia ambiental de actividad clasificada que involucra a varios organismos.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                Desde el despacho de Torrelavega, Jesús Rosas gestiona cada expediente con conocimiento directo de los procedimientos del Ayuntamiento de Torrelavega, Santander y el resto de municipios de Cantabria, así como de la Consejería de Medio Ambiente del Gobierno de Cantabria.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Tramitación completa: proyecto técnico, presentación y seguimiento",
                "Comunicaciones previas, declaraciones responsables y licencias ambientales",
                "Conocimiento directo de los Ayuntamientos de Cantabria",
                "Coordinación con la Consejería de Medio Ambiente cuando se requiere",
                "Presupuesto gratuito y sin compromiso en 24 horas",
                "Ingeniero Técnico Industrial Colegiado — validez legal garantizada",
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

      {/* Beneficios */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4 text-center">
            Qué incluye el servicio de legalización de actividades
          </h2>
          <p className="text-[#4a6080] font-body text-lg text-center max-w-2xl mx-auto mb-12">
            Solución completa para empresas y autónomos que quieren operar legalmente en Cantabria
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b) => (
              <div key={b.titulo} className="card p-6">
                <div className="text-3xl mb-4">{b.icono}</div>
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-base mb-2 leading-snug">{b.titulo}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Proceso de legalización de actividad en Cantabria
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

      {/* Tipos de actividades */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4 text-center">
            Tipos de actividades que tramitamos
          </h2>
          <p className="text-[#4a6080] font-body text-lg text-center max-w-2xl mx-auto mb-12">
            Experiencia en sectores industriales, comerciales y de servicios en toda Cantabria
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { nombre: "Industria y manufactura", nota: "Talleres, fábricas, almacenes industriales y plantas de producción" },
              { nombre: "Comercio y hostelería", nota: "Tiendas, bares, restaurantes, hoteles y establecimientos de ocio" },
              { nombre: "Talleres y automoción", nota: "Talleres mecánicos, lavaderos, concesionarios y servicios del automóvil" },
              { nombre: "Oficinas y servicios", nota: "Despachos profesionales, centros de estética, clínicas y academias" },
              { nombre: "Almacenes y logística", nota: "Naves de almacenamiento, distribución y centros logísticos" },
              { nombre: "Agroalimentario", nota: "Industrias de transformación, bodegas, queserías y granjas" },
              { nombre: "Construcción e instalaciones", nota: "Empresas constructoras, instaladoras y de mantenimiento industrial" },
              { nombre: "Energía y medio ambiente", nota: "Plantas fotovoltaicas, puntos de recarga y actividades ambientales" },
            ].map((tipo) => (
              <div key={tipo.nombre} className="bg-white rounded-sm p-5 border-l-2 border-[#e07b39]">
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-sm mb-1">{tipo.nombre}</h3>
                <p className="text-[#4a6080] font-body text-xs leading-relaxed">{tipo.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-10 text-center">
            Preguntas frecuentes sobre legalización de actividades en Cantabria
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
            ¿Necesita legalizar su actividad en Cantabria?
          </h2>
          <p className="text-gray-300 font-body text-lg mb-8">
            Llámenos o escriba un correo y le explicamos el proceso sin compromiso. Presupuesto gratuito en menos de 24 horas.
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
            Otros servicios en Cantabria
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { titulo: "Licencia actividad industrial", url: "/licencia-actividad-industrial" },
              { titulo: "Legalización nave industrial Torrelavega", url: "/legalizacion-nave-industrial-torrelavega" },
              { titulo: "Ingeniería Industrial Cantabria", url: "/ingenieria-industrial-cantabria" },
              { titulo: "Servicios de Ingeniería", url: "/servicios" },
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
