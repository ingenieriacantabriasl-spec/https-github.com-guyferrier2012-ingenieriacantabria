import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad — Ingeniería Cantabria",
  description: "Política de privacidad y protección de datos de Ingeniería Cantabria. Información sobre el tratamiento de sus datos personales conforme al RGPD.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/privacidad" },
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
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
            Política de Privacidad
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
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">1. Responsable del tratamiento</h2>
              <ul className="space-y-1">
                <li><strong>Responsable:</strong> Jesús Rosas</li>
                <li><strong>Dirección:</strong> Calle José María Pereda, 21, 39300 Torrelavega, Cantabria</li>
                <li><strong>Contacto:</strong> jesus@ingenieriacantabria.com / +34 623 96 70 87</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">2. Datos que recogemos y finalidad</h2>
              <p>A través del formulario de contacto del sitio web recogemos:</p>
              <ul className="mt-3 space-y-2">
                <li><strong>Nombre y apellidos:</strong> para identificar al solicitante y gestionar la relación.</li>
                <li><strong>Correo electrónico y/o teléfono:</strong> para responder a su consulta o solicitud de presupuesto.</li>
                <li><strong>Descripción del proyecto:</strong> para elaborar una propuesta técnica adecuada.</li>
              </ul>
              <p className="mt-3">La base jurídica del tratamiento es el consentimiento del interesado (art. 6.1.a RGPD) y la ejecución de medidas precontractuales a petición del mismo (art. 6.1.b RGPD).</p>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">3. Conservación de los datos</h2>
              <p>
                Los datos se conservan durante el tiempo necesario para atender la consulta y, en su caso, durante la relación profesional. Transcurrido ese plazo, se bloquean y eliminan conforme a la normativa aplicable.
              </p>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">4. Destinatarios</h2>
              <p>
                No cedemos sus datos a terceros salvo obligación legal. Los datos se almacenan en Supabase (proveedor de base de datos en la nube), que actúa como encargado del tratamiento bajo las garantías del RGPD y el Marco de Privacidad de Datos UE-EE.UU.
              </p>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">5. Sus derechos</h2>
              <p>Como interesado, puede ejercer los siguientes derechos dirigiéndose a jesus@ingenieriacantabria.com:</p>
              <ul className="mt-3 space-y-1">
                <li><strong>Acceso:</strong> conocer qué datos tratamos sobre usted.</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
                <li><strong>Oposición:</strong> oponerse al tratamiento en determinados supuestos.</li>
                <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
                <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
              </ul>
              <p className="mt-3">
                También puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" className="text-[#d4631a] hover:underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
              </p>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">6. Cookies</h2>
              <p>
                Este sitio no utiliza cookies propias de seguimiento ni publicidad. Puede utilizarse alguna cookie técnica estrictamente necesaria para el funcionamiento del sitio. Consulte la configuración de su navegador para gestionarlas.
              </p>
            </div>

            <div>
              <h2 className="text-[#1a3a5c] font-heading font-bold text-xl mb-3">7. Seguridad</h2>
              <p>
                Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos frente al acceso no autorizado, pérdida o alteración. La transmisión de datos se realiza siempre mediante cifrado SSL/TLS.
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
