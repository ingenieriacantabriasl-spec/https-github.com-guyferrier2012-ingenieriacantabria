import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Ingeniero Técnico en Cantabria | Torrelavega | Presupuesto Gratis",
  description:
    "Ingeniero Técnico Industrial Colegiado en Cantabria. Certificados energéticos, legalizaciones, peritajes y proyectos en Torrelavega y toda Cantabria. Presupuesto gratuito.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/ingeniero-tecnico-cantabria" },
  openGraph: {
    title: "Ingeniero Técnico en Cantabria | Torrelavega | Presupuesto Gratis",
    description: "Ingeniero Técnico Industrial Colegiado en Cantabria. Certificados energéticos, legalizaciones, peritajes y proyectos. Presupuesto gratuito.",
    url: "https://www.ingenieriacantabria.com/ingeniero-tecnico-cantabria",
    siteName: "Ingeniería Cantabria",
    locale: "es_ES",
    type: "website",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Ingeniería Cantabria — Jesús Rosas, Ingeniero Técnico Industrial",
      description: "Servicios de ingeniería técnica industrial en Cantabria: certificados energéticos, legalizaciones, auditorías, peritajes y proyectos de edificación. Ingeniero Técnico Industrial Colegiado.",
      url: "https://www.ingenieriacantabria.com",
      telephone: "+34623967087",
      email: "info@ingenieriacantabria.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle José María Pereda 21",
        addressLocality: "Torrelavega",
        postalCode: "39300",
        addressRegion: "Cantabria",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "43.3614",
        longitude: "-4.0499",
      },
      areaServed: {
        "@type": "State",
        name: "Cantabria",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Ingeniería Técnica en Cantabria",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Certificado energético" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Legalización de instalaciones" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auditoría energética" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peritaje técnico" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Proyectos de edificación y reforma" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inspección Técnica de Edificios (ITE)" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta contratar un ingeniero técnico en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El precio varía según el servicio. Un certificado energético para vivienda parte desde 80 €. Una legalización de instalación eléctrica, desde 200 €. Un proyecto de reforma o edificación, desde 500 €. Un peritaje técnico, desde 400 €. Solicite presupuesto gratuito sin compromiso llamando al +34 623 96 70 87.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué diferencia hay entre un ingeniero técnico y un arquitecto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ambos pueden firmar proyectos de edificación, pero el ingeniero técnico industrial tiene formación especializada en instalaciones (electricidad, climatización, gas), maquinaria, eficiencia energética y procesos industriales. Es el profesional más adecuado para legalizaciones industriales, auditorías energéticas y proyectos con instalaciones complejas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo pedir presupuesto online sin visita previa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Para muchos servicios como certificados energéticos, asesoramiento de legalizaciones o consultas técnicas, podemos orientarle y facilitar un presupuesto aproximado por teléfono, WhatsApp o correo. Para peritajes, proyectos de obra e inspecciones, la visita es necesaria pero se coordina en el horario que mejor convenga.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda en completarse un proyecto de ingeniería en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un certificado energético puede estar listo en 2-3 días hábiles tras la visita. Una legalización de instalación, entre 2 y 6 semanas según complejidad y tiempos de la administración. Un proyecto de obra completo, entre 3 y 8 semanas según los requisitos del ayuntamiento. Informamos de los plazos reales antes de iniciar el trabajo.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Ingeniero Técnico Cantabria", item: "https://www.ingenieriacantabria.com/ingeniero-tecnico-cantabria" },
      ],
    },
  ],
}

const servicios = [
  {
    titulo: "Certificados Energéticos",
    desc: "Obligatorios para vender o alquilar. Emitidos con validez oficial y registrados en la Junta de Cantabria. Desde 80 €.",
  },
  {
    titulo: "Legalización de Instalaciones",
    desc: "Instalaciones eléctricas, de gas, climatización e industriales. Tramitación completa ante la Consejería de Industria.",
  },
  {
    titulo: "Auditorías Energéticas",
    desc: "Obligatorias para grandes empresas. Norma UNE-EN ISO 50001. Identificación de mejoras con ROI cuantificado.",
  },
  {
    titulo: "Peritajes Técnicos",
    desc: "Informes con validez ante juzgados y aseguradoras. Humedades, patologías estructurales, siniestros y vicios ocultos.",
  },
  {
    titulo: "Proyectos de Edificación",
    desc: "Proyectos básicos y de ejecución para obra nueva, ampliaciones, cambios de uso y rehabilitaciones.",
  },
  {
    titulo: "Inspección Técnica de Edificios",
    desc: "ITE obligatoria para edificios de más de 50 años. Informe oficial para el certificado de aptitud municipal.",
  },
  {
    titulo: "Eficiencia Energética",
    desc: "Proyectos de mejora energética para viviendas y empresas. Asesoramiento en subvenciones IDAE y SODERCAN.",
  },
  {
    titulo: "Consultoría Industrial",
    desc: "Seguridad industrial, evaluación de riesgos, planes de autoprotección y adecuación de maquinaria (marcado CE).",
  },
  {
    titulo: "Informes Técnicos",
    desc: "Valoraciones inmobiliarias, informes de estado de conservación, documentación técnica para trámites administrativos.",
  },
]

const zonas = [
  { nombre: "Torrelavega", nota: "Sede del despacho — atención presencial con cita" },
  { nombre: "Santander", nota: "Capital de Cantabria — desplazamientos frecuentes" },
  { nombre: "Laredo", nota: "Costa oriental — actividad inmobiliaria e industrial" },
  { nombre: "Castro Urdiales", nota: "Zona en expansión — límite con País Vasco" },
  { nombre: "Comillas", nota: "Municipio turístico — rehabilitaciones y certificaciones" },
  { nombre: "Reinosa", nota: "Interior — industria metalúrgica y legalizaciones" },
  { nombre: "Santoña / Noja", nota: "Costa central — certificados y proyectos" },
  { nombre: "Cabezón de la Sal", nota: "Comarca del Besaya — proyectos y auditorías" },
]

const proceso = [
  { num: "01", titulo: "Consulta inicial", desc: "Contacta por teléfono, WhatsApp o formulario. Analizamos tu necesidad y te orientamos sin compromiso." },
  { num: "02", titulo: "Presupuesto gratuito", desc: "Recibes un presupuesto detallado en menos de 24 h laborables con plazos y alcance del servicio." },
  { num: "03", titulo: "Visita técnica", desc: "Para los servicios que lo requieren, coordinamos la visita al inmueble o instalación en tu horario." },
  { num: "04", titulo: "Redacción y tramitación", desc: "Elaboramos el proyecto, certificado o informe y gestionamos todos los trámites administrativos." },
  { num: "05", titulo: "Entrega y registro", desc: "Recibes la documentación firmada y, si aplica, el justificante de registro ante la administración." },
]

const faqs = [
  {
    pregunta: "¿Cuánto cuesta contratar un ingeniero técnico en Cantabria?",
    respuesta: "El precio varía según el servicio. Un certificado energético para vivienda parte desde 80 €. Una legalización de instalación eléctrica, desde 200 €. Un proyecto de reforma o edificación, desde 500 €. Un peritaje técnico, desde 400 €. Solicite presupuesto gratuito sin compromiso.",
  },
  {
    pregunta: "¿Qué diferencia hay entre un ingeniero técnico y un arquitecto?",
    respuesta: "Ambos pueden firmar proyectos de edificación, pero el ingeniero técnico industrial tiene formación especializada en instalaciones (electricidad, climatización, gas), maquinaria, eficiencia energética y procesos industriales. Es el profesional más adecuado para legalizaciones industriales, auditorías energéticas y proyectos con instalaciones complejas.",
  },
  {
    pregunta: "¿Puedo pedir presupuesto online sin visita previa?",
    respuesta: "Sí. Para muchos servicios como certificados energéticos, asesoramiento de legalizaciones o consultas técnicas, podemos orientarle y facilitar un presupuesto aproximado por teléfono, WhatsApp o correo. Para peritajes, proyectos de obra e inspecciones, la visita es necesaria pero se coordina en el horario que mejor convenga.",
  },
  {
    pregunta: "¿Cuánto tarda en completarse un proyecto de ingeniería en Cantabria?",
    respuesta: "Un certificado energético puede estar listo en 2-3 días hábiles tras la visita. Una legalización de instalación, entre 2 y 6 semanas. Un proyecto de obra completo, entre 3 y 8 semanas según los requisitos del ayuntamiento. Informamos de los plazos reales antes de iniciar el trabajo.",
  },
]

export default function IngenieroTecnicoCantabriaPage() {
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
            <span className="text-gray-300">Ingeniero Técnico Cantabria</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Torrelavega · Toda Cantabria · Ingeniero Colegiado</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Ingeniero Técnico en{" "}
            <span className="text-[#e07b39]">Cantabria</span>
            <br />Servicios Profesionales para Empresas y Particulares
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Jesús Rosas, Ingeniero Técnico Industrial Colegiado con despacho en Torrelavega. Certificados energéticos, legalizaciones, peritajes, auditorías y proyectos en toda Cantabria. Presupuesto gratuito en menos de 24 h.
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

      {/* Intro + garantías */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-6">
                ¿Por qué contratar un ingeniero técnico colegiado?
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                La firma de un ingeniero técnico colegiado no es solo un requisito legal: es una garantía de rigor, responsabilidad y validez ante cualquier administración, juzgado o compañía de seguros. En Cantabria, el despacho de Jesús Rosas ofrece trato directo, plazos reales y documentación con plena validez oficial.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                A diferencia de las grandes consultoras, aquí el ingeniero que firma el trabajo es el mismo que lo visita, lo redacta y lo tramita. Sin intermediarios, sin subcontratación, con control de calidad en cada paso.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Ingeniero Técnico Industrial Colegiado — responsabilidad civil incluida",
                "Validez legal ante juzgados, administraciones y aseguradoras",
                "Trato directo: el mismo ingeniero visita, redacta y tramita",
                "Presupuesto gratuito en menos de 24 horas laborables",
                "Desplazamientos a cualquier municipio de Cantabria",
                "Asesoramiento en subvenciones IDAE y SODERCAN sin coste adicional",
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
            Servicios de Ingeniería Técnica en Cantabria
          </h2>
          <p className="text-[#4a6080] font-body text-lg text-center max-w-2xl mx-auto mb-12">
            Soluciones técnicas integrales para particulares, comunidades de propietarios, pymes y grandes empresas en toda la comunidad autónoma.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio) => (
              <div key={servicio.titulo} className="card p-6">
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-base mb-2 leading-snug">{servicio.titulo}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{servicio.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zona de cobertura */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4 text-center">
            Área de Actuación: Toda Cantabria
          </h2>
          <p className="text-[#4a6080] font-body text-lg text-center max-w-2xl mx-auto mb-12">
            Despacho en Torrelavega con desplazamientos a cualquier municipio de la comunidad. Conocemos los procedimientos y plazos de los principales ayuntamientos cántabros.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {zonas.map((zona) => (
              <div key={zona.nombre} className="bg-[#f5f7fa] rounded-sm p-5 border-l-2 border-[#e07b39]">
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-base mb-1">{zona.nombre}</h3>
                <p className="text-[#4a6080] font-body text-xs leading-relaxed">{zona.nota}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4a6080] font-body text-sm mt-8">
            También: Santoña, Colindres, Noja, Suances, Potes, Ramales de la Victoria, Ampuero, Bárcena de Pie de Concha y todos los municipios de Cantabria.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Cómo trabajamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {proceso.map((paso) => (
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
            Preguntas frecuentes sobre ingeniería técnica en Cantabria
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
              { titulo: "Auditoría energética empresas Cantabria", url: "/auditoria-energetica-empresas-cantabria" },
              { titulo: "Legalización nave industrial Torrelavega", url: "/legalizacion-nave-industrial-torrelavega" },
              { titulo: "Legalización nave industrial Santander", url: "/legalizacion-nave-industrial-santander" },
              { titulo: "Ingeniería Industrial Cantabria", url: "/industrial" },
              { titulo: "Ayudas Next Generation Cantabria", url: "/ayudas-next-generation-cantabria" },
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
