import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Peritaje Industrial Cantabria | Perito Industrial Colegiado | Informes Periciales",
  description:
    "Peritaje industrial en Cantabria. Perito industrial colegiado en Torrelavega: informes periciales para seguros, juicios, valoraciones técnicas y siniestros industriales. Presupuesto gratuito.",
  keywords: [
    "peritaje industrial Cantabria",
    "perito industrial Cantabria",
    "informe pericial industrial",
    "perito industrial Torrelavega",
    "peritaje industrial seguros Cantabria",
  ],
  alternates: { canonical: "https://www.ingenieriacantabria.com/peritaje-industrial-cantabria" },
  openGraph: {
    title: "Peritaje Industrial Cantabria | Perito Industrial Colegiado | Informes Periciales",
    description: "Perito industrial colegiado en Cantabria. Informes periciales para seguros, juicios y valoraciones técnicas. Despacho en Torrelavega.",
    url: "https://www.ingenieriacantabria.com/peritaje-industrial-cantabria",
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
      name: "Peritaje Industrial en Cantabria",
      description: "Servicio de peritaje industrial en Cantabria. Informes periciales con validez ante juzgados y aseguradoras: siniestros industriales, valoración de maquinaria, daños en instalaciones, accidentes laborales y conflictos técnicos. Perito industrial colegiado en Torrelavega.",
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
          name: "¿Qué es un peritaje industrial y cuándo se necesita?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un peritaje industrial es un informe técnico elaborado por un perito colegiado que analiza, valora y dictamina sobre hechos de naturaleza técnica o industrial. Se necesita cuando existe un siniestro cubierto por seguro (incendio, explosión, inundación, robo de maquinaria), cuando hay un conflicto técnico entre partes en un proceso judicial o arbitral, o cuando se requiere una valoración objetiva de instalaciones, maquinaria o daños para tomar decisiones empresariales.",
          },
        },
        {
          "@type": "Question",
          name: "¿Tiene validez legal el informe pericial industrial en un juicio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El informe pericial elaborado por un ingeniero técnico industrial colegiado tiene plena validez como prueba pericial en procedimientos judiciales civiles, mercantiles y contencioso-administrativos, conforme a la Ley de Enjuiciamiento Civil. El perito puede ser llamado a ratificar el informe ante el juez y a responder a las preguntas de las partes en la vista oral.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda en elaborarse un informe pericial industrial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El plazo depende de la complejidad del caso y del tipo de peritaje. Un informe de valoración de daños por siniestro sencillo puede estar listo en 5-10 días hábiles tras la visita. Un peritaje complejo con análisis de causa-efecto, reconstrucción de accidente o valoración de pérdida de beneficios puede requerir de 2 a 4 semanas. Informamos del plazo real antes de iniciar el encargo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta un peritaje industrial en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El coste del peritaje depende del tipo de informe, la complejidad técnica y los desplazamientos necesarios. Un informe de valoración de daños por siniestro parte desde 400 euros. Peritajes complejos con análisis técnico profundo, consulta de documentación y ratificación judicial pueden situarse entre 1.000 y 3.500 euros. Ofrecemos presupuesto gratuito y sin compromiso tras la primera consulta.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.ingenieriacantabria.com/servicios" },
        { "@type": "ListItem", position: 3, name: "Peritaje Industrial Cantabria", item: "https://www.ingenieriacantabria.com/peritaje-industrial-cantabria" },
      ],
    },
  ],
}

const tiposPeritaje = [
  {
    titulo: "Siniestros industriales para seguros",
    desc: "Valoración de daños materiales en naves, maquinaria e instalaciones producidos por incendio, explosión, inundación, robo o catástrofe natural. Informe para compañía aseguradora.",
    icono: "🔥",
  },
  {
    titulo: "Peritajes para procedimientos judiciales",
    desc: "Informes periciales con plena validez como prueba en juicios civiles, mercantiles y contencioso-administrativos. El perito puede ratificar el informe ante el juez.",
    icono: "⚖",
  },
  {
    titulo: "Valoración de maquinaria e instalaciones",
    desc: "Tasación técnica de maquinaria, equipos industriales e instalaciones para compraventa, herencias, disolución de sociedades o aportación a capital social.",
    icono: "⚙",
  },
  {
    titulo: "Análisis de causas y daños en accidentes",
    desc: "Investigación técnica de la causa de un accidente industrial, fallo de maquinaria o incidente con daños materiales o personales. Reconstrucción del hecho técnico.",
    icono: "🔍",
  },
  {
    titulo: "Conflictos técnicos entre empresas",
    desc: "Dictamen pericial en disputas entre empresas por defectos de fabricación, incumplimiento de especificaciones técnicas, obras defectuosas o instalaciones incorrectas.",
    icono: "📋",
  },
  {
    titulo: "Perito industrial colegiado en Cantabria",
    desc: "Jesús Rosas, Ingeniero Técnico Industrial Colegiado, actúa como perito de parte o perito judicial en toda Cantabria con responsabilidad civil profesional.",
    icono: "🏅",
  },
]

const pasos = [
  { num: "01", titulo: "Consulta del caso", desc: "Analizamos el objeto del peritaje, el contexto legal y lo que necesita acreditar el informe técnico." },
  { num: "02", titulo: "Visita de inspección", desc: "Nos desplazamos a la instalación, nave o lugar del siniestro para tomar medidas, fotografías y muestras necesarias." },
  { num: "03", titulo: "Análisis técnico", desc: "Estudiamos la documentación disponible, normativa aplicable y realizamos los cálculos y valoraciones precisas." },
  { num: "04", titulo: "Redacción del informe", desc: "Elaboramos el informe pericial con estructura clara, conclusiones fundamentadas y anexo documental completo." },
  { num: "05", titulo: "Ratificación si se precisa", desc: "Si el informe se utiliza en juicio, el perito puede comparecer para ratificar y defender sus conclusiones ante el juez." },
]

const faqs = [
  {
    pregunta: "¿Qué es un peritaje industrial y cuándo se necesita?",
    respuesta: "Un peritaje industrial es un informe técnico elaborado por un perito colegiado que analiza, valora y dictamina sobre hechos de naturaleza técnica o industrial. Se necesita cuando existe un siniestro cubierto por seguro (incendio, explosión, inundación, robo de maquinaria), cuando hay un conflicto técnico entre partes en un proceso judicial o arbitral, o cuando se requiere una valoración objetiva de instalaciones, maquinaria o daños para tomar decisiones empresariales.",
  },
  {
    pregunta: "¿Tiene validez legal el informe pericial industrial en un juicio?",
    respuesta: "Sí. El informe pericial elaborado por un ingeniero técnico industrial colegiado tiene plena validez como prueba pericial en procedimientos judiciales civiles, mercantiles y contencioso-administrativos, conforme a la Ley de Enjuiciamiento Civil. El perito puede ser llamado a ratificar el informe ante el juez y a responder a las preguntas de las partes en la vista oral.",
  },
  {
    pregunta: "¿Cuánto tarda en elaborarse un informe pericial industrial?",
    respuesta: "El plazo depende de la complejidad del caso y del tipo de peritaje. Un informe de valoración de daños por siniestro sencillo puede estar listo en 5-10 días hábiles tras la visita. Un peritaje complejo con análisis de causa-efecto, reconstrucción de accidente o valoración de pérdida de beneficios puede requerir de 2 a 4 semanas. Informamos del plazo real antes de iniciar el encargo.",
  },
  {
    pregunta: "¿Cuánto cuesta un peritaje industrial en Cantabria?",
    respuesta: "El coste del peritaje depende del tipo de informe, la complejidad técnica y los desplazamientos necesarios. Un informe de valoración de daños por siniestro parte desde 400 euros. Peritajes complejos con análisis técnico profundo, consulta de documentación y ratificación judicial pueden situarse entre 1.000 y 3.500 euros. Ofrecemos presupuesto gratuito y sin compromiso tras la primera consulta.",
  },
]

export default function PeritajeIndustrialCantabriaPage() {
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
            <span className="text-gray-300">Peritaje industrial Cantabria</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Perito Industrial Colegiado en Cantabria</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Peritaje Industrial en{" "}
            <span className="text-[#e07b39]">Cantabria</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Informes periciales industriales con validez ante juzgados y aseguradoras. Jesús Rosas, perito industrial colegiado en Torrelavega, elabora dictámenes técnicos para siniestros, juicios y valoraciones en toda Cantabria.
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
                Perito industrial colegiado en Cantabria a su servicio
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                Cuando se produce un siniestro industrial, un accidente laboral con daños materiales o un conflicto técnico entre empresas, la valoración objetiva de un perito independiente y colegiado es determinante para defender sus intereses ante aseguradoras y juzgados. El informe pericial es el documento que acredita técnicamente los hechos y su valoración económica.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                Jesús Rosas actúa como perito de parte en toda Cantabria: analiza los hechos sobre el terreno, documenta los daños, aplica la normativa técnica vigente y redacta un informe claro y fundamentado que puede ser utilizado ante cualquier instancia legal o extrajudicial.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Perito industrial colegiado en Cantabria — responsabilidad civil profesional",
                "Informes con validez ante juzgados, compañías de seguros y arbitraje",
                "Visita a la instalación o siniestro en cualquier municipio de Cantabria",
                "Ratificación del informe en sede judicial si se requiere",
                "Experiencia en siniestros, conflictos técnicos y valoraciones de maquinaria",
                "Presupuesto gratuito y confidencial — respuesta en 24 horas",
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

      {/* Tipos de peritaje */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4 text-center">
            Tipos de peritaje industrial en Cantabria
          </h2>
          <p className="text-[#4a6080] font-body text-lg text-center max-w-2xl mx-auto mb-12">
            Informes periciales para empresas, abogados, compañías aseguradoras y particulares en toda la región
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiposPeritaje.map((t) => (
              <div key={t.titulo} className="card p-6">
                <div className="text-3xl mb-4">{t.icono}</div>
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-base mb-2 leading-snug">{t.titulo}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Cómo elaboramos el informe pericial industrial
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
            Preguntas frecuentes sobre peritaje industrial en Cantabria
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
            Necesita un perito industrial en Cantabria
          </h2>
          <p className="text-gray-300 font-body text-lg mb-8">
            Consulta confidencial y presupuesto sin compromiso. Atendemos urgencias para siniestros activos.
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
              { titulo: "Ingeniero Técnico Cantabria", url: "/ingeniero-tecnico-cantabria" },
              { titulo: "Legalización actividades Cantabria", url: "/legalizacion-actividades-cantabria" },
              { titulo: "Ingeniería Industrial Cantabria", url: "/ingenieria-industrial-cantabria" },
              { titulo: "Todos los servicios", url: "/servicios" },
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
