'use client'
import { useEffect, useState } from 'react'

interface SearchData {
  totales: { clicks: number; impresiones: number; ctr: string; posicion_media: string }
  keywords: { keyword: string; clicks: number; impresiones: number; ctr: string; posicion: string }[]
  paginas: { url: string; clicks: number; impresiones: number; posicion: string }[]
  periodo: { inicio: string; fin: string; dias: number }
  error?: string
}

interface Lead {
  id: string
  nombre: string
  email: string
  telefono?: string
  servicio?: string
  mensaje: string
  created_at: string
}

export default function PanelUsuario() {
  const [sc, setSc] = useState<SearchData | null>(null)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loadingSc, setLoadingSc] = useState(true)
  const [loadingLeads, setLoadingLeads] = useState(true)
  const [dias, setDias] = useState(28)

  useEffect(() => {
    setLoadingSc(true)
    fetch(`/api/search-console?days=${dias}`)
      .then(r => r.json())
      .then(d => { setSc(d); setLoadingSc(false) })
      .catch(() => setLoadingSc(false))
  }, [dias])

  useEffect(() => {
    fetch('/api/admin-leads', {
      headers: { authorization: `Bearer ${document.cookie.match(/admin_token=([^;]+)/)?.[1] ?? ''}` },
    })
      .then(r => r.json())
      .then(d => { setLeads(d.leads ?? []); setLoadingLeads(false) })
      .catch(() => setLoadingLeads(false))
  }, [])

  const SERVICIOS: Record<string, string> = {
    industrial: 'Industrial',
    edificacion: 'Edificación',
    agronomica: 'Agronómica',
    otro: 'Otro',
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Panel de seguimiento</h1>
            <p className="text-gray-400 text-sm">Ingeniería Cantabria</p>
          </div>
          <div className="flex gap-2">
            {[7, 28, 90].map(d => (
              <button
                key={d}
                onClick={() => setDias(d)}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  dias === d ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {d}d
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* Totales Search Console */}
        <section>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Google Search — últimos {dias} días</h2>
          {loadingSc ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-900 rounded-xl border border-gray-800 p-4 animate-pulse h-20" />
              ))}
            </div>
          ) : sc?.error ? (
            <div className="bg-red-900/20 border border-red-800 rounded-xl p-4 text-red-400 text-sm">{sc.error as unknown as string}</div>
          ) : sc ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Clicks', value: sc.totales.clicks.toLocaleString('es'), color: 'text-blue-400' },
                { label: 'Impresiones', value: sc.totales.impresiones.toLocaleString('es'), color: 'text-purple-400' },
                { label: 'CTR', value: sc.totales.ctr, color: 'text-green-400' },
                { label: 'Posición media', value: sc.totales.posicion_media, color: 'text-yellow-400' },
              ].map(item => (
                <div key={item.label} className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                  <p className="text-gray-500 text-xs mb-1">{item.label}</p>
                  <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                </div>
              ))}
            </div>
          ) : null}
        </section>

        {/* Keywords */}
        {sc && !sc.error && (
          <section>
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Búsquedas principales</h2>
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">Keyword</th>
                    <th className="text-right px-4 py-3 text-gray-500 font-medium">Clicks</th>
                    <th className="text-right px-4 py-3 text-gray-500 font-medium hidden md:table-cell">Impr.</th>
                    <th className="text-right px-4 py-3 text-gray-500 font-medium">Posición</th>
                  </tr>
                </thead>
                <tbody>
                  {sc.keywords.slice(0, 10).map((k, i) => (
                    <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                      <td className="px-4 py-3 text-white">{k.keyword}</td>
                      <td className="px-4 py-3 text-right text-blue-400 font-medium">{k.clicks}</td>
                      <td className="px-4 py-3 text-right text-gray-500 hidden md:table-cell">{k.impresiones}</td>
                      <td className="px-4 py-3 text-right">
                        <span className={`font-medium ${parseFloat(k.posicion) <= 10 ? 'text-green-400' : 'text-yellow-400'}`}>
                          #{k.posicion}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Leads */}
        <section>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Contactos recibidos ({leads.length})
          </h2>
          {loadingLeads ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-900 rounded-xl border border-gray-800 p-4 animate-pulse h-16" />
              ))}
            </div>
          ) : leads.length === 0 ? (
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 text-center text-gray-500 text-sm">
              Aún no hay contactos registrados
            </div>
          ) : (
            <div className="space-y-3">
              {leads.map(lead => (
                <div key={lead.id} className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-white">{lead.nombre}</p>
                      <p className="text-gray-400 text-sm">{lead.email}{lead.telefono ? ` · ${lead.telefono}` : ''}</p>
                    </div>
                    <div className="text-right shrink-0">
                      {lead.servicio && (
                        <span className="inline-block bg-blue-900/40 text-blue-300 text-xs px-2 py-0.5 rounded-full mb-1">
                          {SERVICIOS[lead.servicio] ?? lead.servicio}
                        </span>
                      )}
                      <p className="text-gray-500 text-xs">
                        {new Date(lead.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">{lead.mensaje}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
