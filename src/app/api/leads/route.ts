import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().optional(),
  empresa: z.string().optional(),
  servicio: z.string().optional(),
  mensaje: z.string().min(10),
})

const SERVICIOS: Record<string, string> = {
  industrial: "Ingeniería Industrial",
  edificacion: "Ingeniería de Edificación",
  agronomica: "Ingeniería Agronómica",
  otro: "Otro / No sé",
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // 1. Guardar en Supabase
    const { error: dbError } = await supabase.from("leads").insert([data])
    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 })
    }

    // 2. Enviar email de notificación
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "Ingeniería Cantabria <leads@ingenieriacantabria.com>",
      to: "jesus@ingenieriacantabria.com",
      subject: `Nuevo lead: ${data.nombre}${data.empresa ? ` — ${data.empresa}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #1a3a5c; padding: 20px 24px; border-radius: 4px 4px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">Nuevo lead — Ingeniería Cantabria</h2>
          </div>
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 4px 4px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 110px;">Nombre</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${data.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #1a3a5c; font-size: 14px;">${data.email}</a></td>
              </tr>
              ${data.telefono ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Teléfono</td>
                <td style="padding: 8px 0;"><a href="tel:${data.telefono}" style="color: #1a3a5c; font-size: 14px;">${data.telefono}</a></td>
              </tr>` : ""}
              ${data.empresa ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Empresa</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${data.empresa}</td>
              </tr>` : ""}
              ${data.servicio ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Servicio</td>
                <td style="padding: 8px 0;">
                  <span style="background: #d4631a; color: white; padding: 2px 10px; border-radius: 99px; font-size: 12px;">${SERVICIOS[data.servicio] ?? data.servicio}</span>
                </td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Mensaje</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; line-height: 1.6;">${data.mensaje.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <a href="mailto:${data.email}?subject=Re: Su consulta en Ingeniería Cantabria"
                style="background: #1a3a5c; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-size: 14px; font-weight: 600; display: inline-block;">
                Responder a ${data.nombre} →
              </a>
            </div>
          </div>
          <p style="color: #9ca3af; font-size: 11px; text-align: center; margin-top: 16px;">
            Lead recibido desde ingenieriacantabria.com
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Datos inválidos", details: err.issues }, { status: 400 })
    }
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
