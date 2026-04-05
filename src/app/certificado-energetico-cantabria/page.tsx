import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Certificado Energético en Cantabria | Ingeniero Técnico Colegiado",
  description:
    "Certificado energético en Cantabria para venta o alquiler. Visita técnica, cálculo CE3X y registro en CERMA. Ingeniero colegiado en Torrelavega. Presupuesto gratuito.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/certificado-energetico-cantabria" },
  openGraph: {
    title: "Certificado Energético en Cantabria | Ingeniero Técnico Colegiado",
    description: "Certificado energético en Cantabria para venta o alquiler. Visita técnica, cálculo CE3X y registro en CERMA. Presupuesto gratuito.",
    url: "https://www.ingenieriacantabria.com/certificado-energetico-cantabria",
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
      name: "Certificado Energético en Cantabria",
      description: "Servicio de certificación de eficiencia energética para viviendas, locales comerciales, naves industriales y edificios plurifamiliares en Cantabria. Visita técnica, cálculo con software oficial CE3X y registro en CERMA.",
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
          name: "¿Cuándo es obligatorio el certificado energético en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El certificado energético es obligatorio para vender o alquilar cualquier inmueble con superficie superior a 50 m² en Cantabria desde 2013. También es exigible en edificios de nueva construcción y en grandes rehabilitaciones que afecten a más del 25% de la envolvente térmica.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta el certificado energético en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El coste varía según el tipo y la superficie del inmueble. Para viviendas de hasta 100 m², el precio habitual está entre 80 y 150 euros. Para locales comerciales y naves industriales de hasta 500 m², entre 200 y 400 euros. El precio incluye visita técnica, cálculo con CE3X y registro en CERMA. Solicite presupuesto gratuito sin compromiso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda en obtenerse el certificado energético?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El plazo habitual desde la visita técnica hasta la entrega del certificado registrado en CERMA es de 3 a 7 días hábiles. En casos urgentes, por ejemplo ante una firma de escritura inminente, podemos agilizar el proceso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es el sistema CERMA en Cantabria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CERMA (Cantabria Eficiencia en Recursos y Medio Ambiente) es el registro oficial del Gobierno de Cantabria donde se inscriben todos los certificados de eficiencia energética emitidos en la región. El técnico certificador realiza el registro telemáticamente y el propietario recibe el número de registro que da validez legal al certificado.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
        { "@type": "ListItem", position: 2, name: "Industrial", item: "https://www.ingenieriacantabria.com/industrial" },
        { "@type": "ListItem", position: 3, name: "Certificado Energético Cantabria", item: "https://www.ingenieriacantabria.com/certificado-energetico-cantabria" },
      ],
    },
  ],
}

const pasos = [
  { num: "01", titulo: "Visita técnica", desc: "El ingeniero acude al inmueble y toma datos de la envolvente térmica: muros, cubierta, ventanas y puentes térmicos." },
  { num: "02", titulo: "Mediciones e instalaciones", desc: "Se registran las instalaciones de calefacción, refrigeración, agua caliente sanitaria e iluminación existentes." },
  { num: "03", titulo: "Cálculo con CE3X", desc: "Introducción de datos en el software oficial CE3X del Ministerio y cálculo del consumo y la demanda energética." },
  { num: "04", titulo: "Etiqueta energética", desc: "Emisión del certificado con la calificación de la A a la G y las medidas de mejora recomendadas." },
  { num: "05", titulo: "Registro en CERMA", desc: "Inscripción telemática en el registro oficial CERMA del Gobierno de Cantabria. Certificado con plena validez legal." },
]

const faqs = [
  {
    pregunta: "¿Cuándo es obligatorio el certificado energético en Cantabria?",
    respuesta: "El certificado energético es obligatorio para vender o alquilar cualquier inmueble con superficie superior a 50 m² en Cantabria desde 2013. También es exigible en edificios de nueva construcción y en grandes rehabilitaciones que afecten a más del 25% de la envolvente térmica.",
  },
  {
    pregunta: "¿Cuánto cuesta el certificado energético en Cantabria?",
    respuesta: "El coste varía según el tipo y la superficie del inmueble. Para viviendas de hasta 100 m², el precio habitual está entre 80 y 150 euros. Para locales comerciales y naves industriales de hasta 500 m², entre 200 y 400 euros. El precio incluye visita técnica, cálculo con CE3X y registro en CERMA. Solicite presupuesto gratuito sin compromiso.",
  },
  {
    pregunta: "¿Cuánto tarda en obtenerse el certificado energético?",
    respuesta: "El plazo habitual desde la visita técnica hasta la entrega del certificado registrado en CERMA es de 3 a 7 días hábiles. En casos urgentes, por ejemplo ante una firma de escritura inminente, podemos agilizar el proceso.",
  },
  {
    pregunta: "¿Qué es el sistema CERMA en Cantabria?",
    respuesta: "CERMA (Cantabria Eficiencia en Recursos y Medio Ambiente) es el registro oficial del Gobierno de Cantabria donde se inscriben todos los certificados de eficiencia energética emitidos en la región. El técnico certificador realiza el registro telemáticamente y el propietario recibe el número de registro que da validez legal al certificado.",
  },
]

export default function CertificadoEnergeticoCantabriaPage() {
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
            <span className="text-gray-300">Certificado energético Cantabria</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">Cantabria · Registro oficial CERMA</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Certificado Energético en{" "}
            <span className="text-[#e07b39]">Cantabria</span>
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            Certificado de eficiencia energética para viviendas, locales, naves y edificios en Cantabria. Visita técnica, cálculo con software oficial CE3X y registro en CERMA. Ingeniero Técnico Industrial Colegiado en Torrelavega.
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
                ¿Necesita certificado energético para su inmueble en Cantabria?
              </h2>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-4">
                Desde 2013, el certificado energético es obligatorio para vender o alquilar cualquier vivienda, local comercial, nave industrial o edificio en España. En Cantabria, el certificado debe registrarse en el sistema <strong>CERMA</strong> (Cantabria Eficiencia en Recursos y Medio Ambiente) para tener validez legal. Sin él, la operación inmobiliaria no puede formalizarse y su ausencia puede acarrear sanciones de hasta 6.000 euros.
              </p>
              <p className="text-[#4a6080] font-body text-lg leading-relaxed">
                Jesús Rosas, Ingeniero Técnico Industrial Colegiado, realiza certificados energéticos en Torrelavega, Santander, Castro Urdiales, Laredo y en toda Cantabria. El servicio incluye visita técnica, cálculo con el software oficial CE3X y registro telemático en CERMA.
              </p>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                "Válido para viviendas, locales, naves industriales y edificios plurifamiliares",
                "Ingeniero Técnico Industrial Colegiado en Cantabria",
                "Software oficial CE3X reconocido por el Ministerio",
                "Registro incluido en CERMA — plena validez legal",
                "Plazo de entrega: 3 a 7 días hábiles",
                "Presupuesto gratuito sin compromiso",
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

      {/* Tipos de inmueble */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Certificamos todo tipo de inmuebles en Cantabria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titulo: "Viviendas",
                desc: "Pisos, casas unifamiliares y chalés. Obligatorio para venta o alquiler. Cálculo rápido con CE3X.",
              },
              {
                titulo: "Locales comerciales",
                desc: "Oficinas, tiendas, restaurantes y cualquier local de uso terciario. Certificación conforme al RD 390/2021.",
              },
              {
                titulo: "Naves industriales",
                desc: "Naves de producción, almacenes y talleres. Certificación energética adaptada a instalaciones industriales.",
              },
              {
                titulo: "Edificios plurifamiliares",
                desc: "Certificación del edificio completo o por unidades. Gestión de comunidades de propietarios incluida.",
              },
            ].map((tipo) => (
              <div key={tipo.titulo} className="card p-6">
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-lg mb-3">{tipo.titulo}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{tipo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Cómo obtenemos su certificado energético
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
            Preguntas frecuentes sobre el certificado energético en Cantabria
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
              { titulo: "Auditoría energética para empresas en Cantabria", url: "/auditoria-energetica-empresas-cantabria" },
              { titulo: "Ingeniero técnico industrial en Cantabria", url: "/ingeniero-tecnico-cantabria" },
              { titulo: "Legalización nave industrial Torrelavega", url: "/legalizacion-nave-industrial-torrelavega" },
              { titulo: "Legalización nave industrial Santander", url: "/legalizacion-nave-industrial-santander" },
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
