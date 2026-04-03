import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Aviso Legal — Ingeniería Cantabria",
  description: "Aviso legal e información sobre el titular del sitio web Ingeniería Cantabria, despacho de ingeniería técnica en Torrelavega, Cantabria.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/aviso-legal" },
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <>
      <section
        className="pt-32 pb-12 relative"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4631a]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="text-white font-heading font-black text-4xl mb-4">
            Aviso Legal
          </h1>
          <p className="text-gray-300 font-body text-base">
            Última actualización: enero de 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none font-body text-[#4a6080] leading-relaxed space-y-8">

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">1. Identificación del titular</h2>
              <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa:</p>
              <ul className="mt-3 space-y-1">
                <li><strong>Titular:</strong> Jesús Rosas</li>
                <li><strong>Actividad:</strong> Ingeniería técnica (industrial, edificación y agronómica)</li>
                <li><strong>Domicilio:</strong> Calle José María Pereda, 21, 39300 Torrelavega, Cantabria, España</li>
                <li><strong>Teléfono:</strong> +34 623 96 70 87</li>
                <li><strong>Correo electrónico:</strong> jesus@ingenieriacantabria.com</li>
                <li><strong>Web:</strong> https://www.ingenieriacantabria.com</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">2. Objeto</h2>
              <p>
                El presente aviso legal regula el uso del sitio web www.ingenieriacantabria.com. El acceso y uso del sitio implica la aceptación plena de las condiciones aquí establecidas. El titular se reserva el derecho a modificarlas en cualquier momento.
              </p>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">3. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos del sitio (textos, imágenes, diseño, código fuente) son propiedad del titular o dispone de licencia para su uso. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa por escrito.
              </p>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">4. Exclusión de garantías y responsabilidad</h2>
              <p>
                El titular no garantiza la disponibilidad continua del sitio ni la ausencia de errores en sus contenidos. La información publicada tiene carácter orientativo y no constituye asesoramiento técnico ni jurídico. El titular no será responsable de daños derivados del uso o imposibilidad de uso del sitio.
              </p>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">5. Política de enlaces</h2>
              <p>
                El sitio puede contener enlaces a páginas de terceros. El titular no controla ni se responsabiliza del contenido, políticas de privacidad ni prácticas de dichos sitios externos.
              </p>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">6. Legislación aplicable y jurisdicción</h2>
              <p>
                El presente aviso legal se rige por la legislación española. Para la resolución de controversias, las partes se someten a los Juzgados y Tribunales de Torrelavega (Cantabria), salvo que la normativa de consumo aplicable establezca fuero imperativo distinto.
              </p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-[#d4631a] font-body text-sm hover:underline">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
