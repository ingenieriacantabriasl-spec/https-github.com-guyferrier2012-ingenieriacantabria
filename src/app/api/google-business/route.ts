import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import { getGoogleAuth } from '@/lib/google-auth'

export async function GET() {
  try {
    const auth = getGoogleAuth()
    const mybusiness = google.mybusinessaccountmanagement({ version: 'v1', auth })

    const cuentas = await mybusiness.accounts.list()
    const cuenta = cuentas.data.accounts?.[0]

    if (!cuenta?.name) {
      return NextResponse.json({ error: 'No se encontró cuenta de Google Business' }, { status: 404 })
    }

    return NextResponse.json({
      cuenta: cuenta.name,
      negocio: {
        nombre: cuenta.accountName ?? 'Ingeniería Cantabria',
        tipo: cuenta.type ?? '',
        estado: cuenta.verificationState ?? '',
      },
      location_id: null,
    })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error desconocido'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
