import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0d1e30] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#d4631a] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">IC</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-heading font-bold text-sm tracking-wide">INGENIERÍA</span>
                <span className="text-[#d4631a] font-heading text-xs tracking-widest">CANTABRIA</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Ingeniería de confianza en Cantabria. Proyectos industriales, de edificación y agronómica con rigor técnico y compromiso.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-4">Servicios</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/servicios" className="hover:text-white transition-colors">Todos los servicios</Link></li>
              <li><Link href="/industrial" className="hover:text-white transition-colors">Ingeniería Industrial</Link></li>
              <li><Link href="/edificacion" className="hover:text-white transition-colors">Ingeniería de Edificación</Link></li>
              <li><Link href="/agronomica" className="hover:text-white transition-colors">Ingeniería Agronómica</Link></li>
              <li><Link href="/proyectos" className="hover:text-white transition-colors">Proyectos destacados</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-white transition-colors">Política de privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Política de cookies</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#d4631a] mt-0.5">📍</span>
                <span>Santander, Cantabria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4631a] mt-0.5">✉️</span>
                <a href="mailto:jesus@ingenieriacantabria.com" className="hover:text-white transition-colors">
                  jesus@ingenieriacantabria.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4631a] mt-0.5">📞</span>
                <a href="tel:+34623967087" className="hover:text-white transition-colors">
                  +34 623 96 70 87
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a3a5c] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ingeniería Cantabria. Todos los derechos reservados.</p>
          <p>Colegiados en el Colegio de Ingenieros de Cantabria</p>
        </div>
      </div>
    </footer>
  )
}
