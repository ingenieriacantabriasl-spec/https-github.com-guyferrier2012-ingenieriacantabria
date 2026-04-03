"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

const schema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Email no válido"),
  telefono: z.string().optional(),
  empresa: z.string().optional(),
  servicio: z.string().optional(),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  const contactItems = [
    { icon: Phone, label: "Teléfono", value: "+34 623 96 70 87", href: "tel:+34623967087" },
    { icon: Mail, label: "Email", value: "jesus@ingenieriacantabria.com", href: "mailto:jesus@ingenieriacantabria.com" },
    { icon: MapPin, label: "Dirección", value: "Torrelavega, Cantabria", href: null },
    { icon: Clock, label: "Horario", value: "Lun–Vie: 9:00–18:00", href: null },
  ]

  return (
    <section id="contacto" className="section-padding bg-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase mb-3">
              Contacto
            </p>
            <h2 className="text-white font-heading font-black text-3xl md:text-4xl mb-6">
              Cuéntenos su proyecto
            </h2>
            <p className="text-gray-300 font-body text-lg leading-relaxed mb-10">
              Solicite presupuesto sin compromiso. Le responderemos en menos de 24 horas con una propuesta adaptada a sus necesidades.
            </p>

            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#d4631a]/15 border border-[#d4631a]/30 rounded-sm flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#d4631a]" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-body text-xs uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-body text-base hover:text-[#d4631a] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-body text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-sm p-8 shadow-xl">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-green-600" />
                </div>
                <h3 className="text-[#1a3a5c] font-heading font-bold text-2xl mb-3">¡Mensaje recibido!</h3>
                <p className="text-[#4a6080] font-body text-base">
                  Nos pondremos en contacto con usted en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body font-bold text-[#1a3a5c] text-sm mb-2">Nombre *</label>
                    <input {...register("nombre")} type="text" placeholder="Juan García" className="input-field" />
                    {errors.nombre && <p className="text-red-600 text-xs mt-1">{errors.nombre.message}</p>}
                  </div>
                  <div>
                    <label className="block font-body font-bold text-[#1a3a5c] text-sm mb-2">Email *</label>
                    <input {...register("email")} type="email" placeholder="juan@empresa.com" className="input-field" />
                    {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body font-bold text-[#1a3a5c] text-sm mb-2">Teléfono</label>
                    <input {...register("telefono")} type="tel" placeholder="+34 600 000 000" className="input-field" />
                  </div>
                  <div>
                    <label className="block font-body font-bold text-[#1a3a5c] text-sm mb-2">Empresa</label>
                    <input {...register("empresa")} type="text" placeholder="Nombre de empresa" className="input-field" />
                  </div>
                </div>

                <div>
                  <label className="block font-body font-bold text-[#1a3a5c] text-sm mb-2">Tipo de servicio</label>
                  <select {...register("servicio")} className="input-field">
                    <option value="">Seleccionar servicio...</option>
                    <option value="industrial">Ingeniería Industrial</option>
                    <option value="edificacion">Ingeniería de Edificación</option>
                    <option value="agronomica">Ingeniería Agronómica</option>
                    <option value="otro">Otro / No sé</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body font-bold text-[#1a3a5c] text-sm mb-2">Cuéntenos su proyecto *</label>
                  <textarea {...register("mensaje")} rows={4} placeholder="Describa brevemente qué necesita..." className="input-field resize-none" />
                  {errors.mensaje && <p className="text-red-600 text-xs mt-1">{errors.mensaje.message}</p>}
                </div>

                <p className="text-gray-400 font-body text-xs">
                  Al enviar acepta nuestra{" "}
                  <a href="/privacidad" className="underline hover:text-[#1a3a5c]">política de privacidad</a>.
                  Sus datos solo se usan para responder su consulta.
                </p>

                {status === "error" && (
                  <p className="text-red-600 text-sm">Hubo un error al enviar. Inténtelo de nuevo o contáctenos por teléfono.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {status === "loading" ? "Enviando..." : "Solicitar presupuesto gratuito"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
