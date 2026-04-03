import { MapPin, Phone, Clock } from "lucide-react"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function Location() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="section-line" />
            <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase mb-3">
              Dónde estamos
            </p>
            <h2 className="text-[#1a3a5c] font-heading font-black text-3xl md:text-4xl mb-4">
              Torrelavega, corazón de Cantabria
            </h2>
            <p className="text-[#4a6080] font-body text-lg leading-relaxed mb-8">
              Ubicados en el centro de Cantabria, a menos de 30 minutos de Santander, Reinosa y la costa. Atendemos proyectos en toda la región.
            </p>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Dirección", value: "C/ José María Pereda 21, 39300 Torrelavega" },
                { icon: Phone, label: "Teléfono", value: "+34 623 96 70 87", href: "tel:+34623967087" },
                { icon: Clock, label: "Horario", value: "Lunes a Viernes: 9:00 – 18:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f0f4f8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#1a3a5c]" />
                  </div>
                  <div>
                    <p className="text-[#1a3a5c] font-heading font-bold text-sm mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#d4631a] font-body text-sm hover:underline">{item.value}</a>
                    ) : (
                      <p className="text-[#4a6080] font-body text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-sm overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.5!2d-4.0499!3d43.3536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd497e3c4b1a5bcd%3A0x1!2sTorrelavega%2C%20Cantabria!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
