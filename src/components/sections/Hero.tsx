import Link from "next/link"
import { Phone, ShieldCheck, Clock, Users, CheckCircle } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 55%, #1e4d7a 100%)" }}
    >
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.5) 60px, rgba(255,255,255,0.5) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.5) 60px, rgba(255,255,255,0.5) 61px)"
      }} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #d4631a 0%, transparent 70%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-[#d4631a] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Izquierda */}
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-[#d4631a]/40 rounded-sm px-4 py-2 backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#d4631a] rounded-full pulse-glow flex-shrink-0" />
                <span className="text-gray-300 text-sm font-body tracking-wide">Ingenieros Colegiados · Cantabria</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2 backdrop-blur-sm">
                <span className="text-gray-400 text-sm font-body">+200 proyectos</span>
              </div>
            </div>

            <h1 className="hero-title text-white font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Ingeniería técnica<br />
              <span className="gradient-text">al servicio</span><br />
              de tu proyecto
            </h1>

            <p className="hero-subtitle text-gray-300 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Especialistas en ingeniería industrial, edificación y agronómica en Cantabria. Proyectos, legalizaciones, peritajes y consultoría técnica con rigor y experiencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#contacto" className="btn-primary text-base px-8 py-4 pulse-glow inline-flex items-center gap-2">
                <Phone size={16} />
                Solicitar presupuesto gratuito
              </Link>
              <Link href="#servicios" className="btn-secondary text-base px-8 py-4">
                Ver nuestros servicios
              </Link>
            </div>

            <div className="flex flex-wrap gap-10 pt-10 border-t border-white/10">
              {[
                { value: "+200", label: "Proyectos completados" },
                { value: "15+", label: "Años de experiencia" },
                { value: "3", label: "Especialidades" },
                { value: "100%", label: "Colegiados" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="gradient-text font-heading font-black text-3xl">{stat.value}</span>
                  <span className="text-gray-400 font-body text-sm mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha — card credenciales */}
          <div className="hidden lg:block">
            <div className="bg-white/5 border border-white/12 rounded-sm p-8 backdrop-blur-sm">
              <p className="text-white/50 font-body text-xs font-bold tracking-widest uppercase mb-6">
                Credenciales y garantías
              </p>

              {[
                {
                  icon: <CheckCircle size={18} className="text-[#d4631a]" />,
                  title: "Ingeniero Técnico Industrial Colegiado",
                  detail: "Jesús Rosas · Colegio de Cantabria",
                  badge: "Verificado",
                  badgeColor: "bg-green-500/15 border-green-500/30 text-green-300",
                },
                {
                  icon: <ShieldCheck size={18} className="text-[#d4631a]" />,
                  title: "Seguro de Responsabilidad Civil",
                  detail: "Cobertura profesional completa",
                  badge: "Activo",
                  badgeColor: "bg-green-500/15 border-green-500/30 text-green-300",
                },
                {
                  icon: <Clock size={18} className="text-[#d4631a]" />,
                  title: "Respuesta garantizada en 24h",
                  detail: "Lun–Vie 9:00–18:00 · Torrelavega",
                  badge: null,
                  badgeColor: "",
                },
                {
                  icon: <Users size={18} className="text-[#d4631a]" />,
                  title: "+200 clientes satisfechos",
                  detail: "15 años en Cantabria",
                  badge: null,
                  badgeColor: "",
                },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-3 py-4 ${i < 3 ? "border-b border-white/7" : ""}`}>
                  <div className="w-10 h-10 bg-[#d4631a]/15 border border-[#d4631a]/30 rounded-sm flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-body font-bold text-sm mb-0.5">{item.title}</p>
                    <p className="text-white/50 font-body text-xs">{item.detail}</p>
                    {item.badge && (
                      <span className={`inline-flex items-center gap-1 border rounded-full px-2 py-0.5 text-[10px] font-bold mt-1 ${item.badgeColor}`}>
                        <CheckCircle size={9} /> {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
