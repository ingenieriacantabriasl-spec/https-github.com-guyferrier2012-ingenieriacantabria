import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import { getGoogleAuth } from '@/lib/google-auth'

const SITE_URL = 'https://www.ingenieriacantabria.com/'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '28')

    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(endDate.getDate() - days)

    const fmt = (d: Date) => d.toISOString().split('T')[0]

    const auth = getGoogleAuth()
    const sc = google.searchconsole({ version: 'v1', auth })

    const [resumen, keywords, paginas] = await Promise.all([
      // Totales
      sc.searchanalytics.query({
        siteUrl: SITE_URL,
        requestBody: {
          startDate: fmt(startDate),
          endDate: fmt(endDate),
          dimensions: [],
        },
      }),
      // Top keywords
      sc.searchanalytics.query({
        siteUrl: SITE_URL,
        requestBody: {
          startDate: fmt(startDate),
          endDate: fmt(endDate),
          dimensions: ['query'],
          rowLimit: 20,
        },
      }),
      // Top páginas
      sc.searchanalytics.query({
        siteUrl: SITE_URL,
        requestBody: {
          startDate: fmt(startDate),
          endDate: fmt(endDate),
          dimensions: ['page'],
          rowLimit: 10,
        },
      }),
    ])

    const totales = resumen.data.rows?.[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0 }

    return NextResponse.json({
      periodo: { inicio: fmt(startDate), fin: fmt(endDate), dias: days },
      totales: {
        clicks: totales.clicks ?? 0,
        impresiones: totales.impressions ?? 0,
        ctr: ((totales.ctr ?? 0) * 100).toFixed(1) + '%',
        posicion_media: (totales.position ?? 0).toFixed(1),
      },
      keywords: (keywords.data.rows ?? []).map(r => ({
        keyword: r.keys?.[0],
        clicks: r.clicks,
        impresiones: r.impressions,
        ctr: ((r.ctr ?? 0) * 100).toFixed(1) + '%',
        posicion: (r.position ?? 0).toFixed(1),
      })),
      paginas: (paginas.data.rows ?? []).map(r => ({
        url: r.keys?.[0]?.replace('https://www.ingenieriacantabria.com', '') || '/',
        clicks: r.clicks,
        impresiones: r.impressions,
        posicion: (r.position ?? 0).toFixed(1),
      })),
    })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error desconocido'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
