import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/sections/ContactForm"

export interface LandingFAQ {
  pregunta: string
  respuesta: string
}

export interface LandingPaso {
  num: string
  titulo: string
  desc: string
}

export interface LandingServicioData {
  slug: string
  servicio: string
  ciudad: string
  provincia: string
  metaTitle: string
  metaDescription: string
  h1: string
  subtitulo: string
  descripcion: string
  contextoLocal: string
  pasos: LandingPaso[]
  faqs: LandingFAQ[]
  serviciosRelacionados: { titulo: string; url: string }[]
}

export function buildMetadata(data: LandingServicioData): Metadata {
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://www.ingenieriacantabria.com/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.ingenieriacantabria.com/${data.slug}`,
      siteName: "Ingeniería Cantabria",
      locale: "es_ES",
      type: "website",
    },
  }
}

export function buildSchema(data: LandingServicioData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${data.servicio} en ${data.ciudad}`,
        description: data.metaDescription,
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
          name: data.ciudad,
          containedIn: { "@type": "State", name: "Cantabria" },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.pregunta,
          acceptedAnswer: { "@type": "Answer", text: f.respuesta },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.ingenieriacantabria.com" },
          { "@type": "ListItem", position: 2, name: data.servicio, item: `https://www.ingenieriacantabria.com/${data.slug}` },
        ],
      },
    ],
  }
}

export default function LandingServicio({ data }: { data: LandingServicioData }) {
  const schema = buildSchema(data)

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
            <span className="text-gray-300">{data.servicio} en {data.ciudad}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e07b39] rounded-full" />
            <span className="text-gray-300 text-sm">{data.ciudad}, {data.provincia}</span>
          </div>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            {data.h1.split(data.ciudad)[0]}
            <span className="text-[#e07b39]">{data.ciudad}</span>
            {data.h1.split(data.ciudad)[1] || ""}
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed mb-8">
            {data.subtitulo}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contacto" className="btn-primary">
              Solicitar presupuesto gratuito
            </Link>
            <a href="tel:+34623967087" className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white/60 rounded-sm px-6 py-3 font-body font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              623 96 70 87
            </a>
          </div>
        </div>
      </section>

      {/* Descripción + contexto local */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a3a5c] font-heading font-black text-3xl mb-6">
                Ingenieros técnicos colegiados en {data.ciudad}
              </h2>
              <div className="prose prose-lg text-[#4a6080] font-body space-y-4">
                <p>{data.descripcion}</p>
                <p>{data.contextoLocal}</p>
              </div>
            </div>
            <div className="bg-[#f5f7fa] rounded-sm p-8 space-y-4">
              {[
                { icon: "✓", text: "Ingeniero Técnico Industrial Colegiado" },
                { icon: "✓", text: "Tramitación directa ante organismos de Cantabria" },
                { icon: "✓", text: "Presupuesto gratuito en 24 horas" },
                { icon: "✓", text: "Sin desplazamientos innecesarios — visita en obra" },
                { icon: "✓", text: "Más de 200 proyectos realizados en Cantabria" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-[#e07b39] font-bold text-lg mt-0.5">{item.icon}</span>
                  <span className="text-[#1a3a5c] font-body">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-12 text-center">
            Cómo trabajamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.pasos.map((paso) => (
              <div key={paso.num} className="card p-6 text-center relative">
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
            {data.faqs.map((faq) => (
              <div key={faq.pregunta} className="border-b border-gray-200 pb-6">
                <h3 className="text-[#1a3a5c] font-heading font-semibold text-base mb-2">{faq.pregunta}</h3>
                <p className="text-[#4a6080] font-body text-sm leading-relaxed">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios relacionados */}
      {data.serviciosRelacionados.length > 0 && (
        <section className="section-padding bg-[#f5f7fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#1a3a5c] font-heading font-black text-2xl mb-8 text-center">
              Otros servicios en {data.ciudad} y Cantabria
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.serviciosRelacionados.map((s) => (
                <Link
                  key={s.url}
                  href={s.url}
                  className="inline-flex items-center gap-2 bg-white border border-[#1a3a5c]/20 hover:border-[#e07b39] text-[#1a3a5c] hover:text-[#e07b39] rounded-sm px-4 py-2 font-body text-sm transition-colors"
                >
                  {s.titulo}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactForm />
    </>
  )
}
