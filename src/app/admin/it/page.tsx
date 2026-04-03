'use client'
import { useEffect, useState } from 'react'

interface SearchData {
  totales: { clicks: number; impresiones: number; ctr: string; posicion_media: string }
  keywords: { keyword: string; clicks: number; impresiones: number; ctr: string; posicion: string }[]
  paginas: { url: string; clicks: number; impresiones: number; posicion: string }[]
  periodo: { inicio: string; fin: string; dias: number }
  error?: string
}

interface BusinessData {
  negocio: { nombre: string; telefono: string; web: string; perfil: string }
  location_id: string | null
  error?: string
}

interface ApiStatus {
  endpoint: string
  status: 'ok' | 'error' | 'loading'
  ms?: number
  error?: string
}

export default function PanelIT() {
  const [sc, setSc] = useState<SearchData | null>(null)
  const [business, setBusiness] = useState<BusinessData | null>(null)
  const [statuses, setStatuses] = useState<ApiStatus[]>([
    { endpoint: '/api/search-console', status: 'loading' },
    { endpoint: '/api/google-business', status: 'loading' },
    { endpoint: '/api/admin-leads', status: 'loading' },
  ])
  const [dias, setDias] = useState(28)

  const token = typeof document !== 'undefined'
    ? document.cookie.match(/admin_token=([^;]+)/)?.[1] ?? ''
    : ''

  async function checkEndpoint(endpoint: string, headers?: Record<string, string>): Promise<ApiStatus> {
    const start = Date.now()
    try {
      const res = await fetch(endpoint, headers ? { headers } : undefined)
      const ms = Date.now() - start
      if (res.ok) return { endpoint, status: 'ok', ms }
      const data = await res.json().catch(() => ({}))
      return { endpoint, status: 'error', ms, error: data.error ?? `HTTP ${res.status}` }
    } catch (e: unknown) {
      return { endpoint, status: 'error', ms: Date.now() - start, error: e instanceof Error ? e.message : 'Error desconocido' }
    }
  }

  useEffect(() => {
    Promise.all([
      checkEndpoint(`/api/search-console?days=${dias}`),
      checkEndpoint('/api/google-business'),
      checkEndpoint('/api/admin-leads', { authorization: `Bearer ${token}` }),
    ]).then(results => setStatuses(results))

    fetch(`/api/search-console?days=${dias}`).then(r => r.json()).then(setSc)
    fetch('/api/google-business').then(r => r.json()).then(setBusiness)
  }, [dias, token])

  const envVars = [
    'GOOGLE_CLIENT_EMAIL',
    'GOOGLE_PROJECT_ID',
    'GOOGLE_PRIVATE_KEY_ID',
    'ADMIN_TOKEN',
    'ADMIN_PASSWORD_USER',
    'ADMIN_PASSWORD_IT',
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold flex items-center gap-2">
              <span className="bg-purple-900 text-purple-300 text-xs px-2 py-0.5 rounded-full font-normal">IT</span>
              Panel técnico
            </h1>
            <p className="text-gray-400 text-sm">Ingeniería Cantabria</p>
          </div>
          <div className="flex gap-2">
            {[7, 28, 90].map(d => (
              <button
                key={d}
                onClick={() => setDias(d)}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  dias === d ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {d}d
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Estado APIs */}
        <section>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Estado de APIs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statuses.map(s => (
              <div key={s.endpoint} className={`bg-gray-900 rounded-xl border p-4 ${
                s.status === 'ok' ? 'border-green-800' : s.status === 'error' ? 'border-red-800' : 'border-gray-800'
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${
                    s.status === 'ok' ? 'bg-green-400' : s.status === 'error' ? 'bg-red-400' : 'bg-yellow-400 animate-pulse'
                  }`} />
                  <span className="text-xs font-mono text-gray-300">{s.endpoint}</span>
                </div>
                {s.ms !== undefined && (
                  <p className="text-gray-500 text-xs">{s.ms}ms</p>
                )}
                {s.error && (
                  <p className="text-red-400 text-xs mt-1 truncate" title={s.error}>{s.error}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Google Business */}
        <section>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Google Business Profile</h2>
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
            {!business ? (
              <div className="animate-pulse h-16" />
            ) : business.error ? (
              <div className="text-red-400 text-sm">{business.error}</div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 text-xs mb-1">Negocio</p>
                  <p className="text-white">{business.negocio.nombre}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Teléfono</p>
                  <p className="text-white">{business.negocio.telefono || '—'}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Web vinculada</p>
                  <p className="text-white truncate">{business.negocio.web || '—'}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Location ID</p>
                  <p className="text-purple-400 font-mono text-xs truncate">{business.location_id || '—'}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Search Console completo */}
        <section>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Search Console — {dias} días</h2>
          {sc?.error ? (
            <div className="bg-red-900/20 border border-red-800 rounded-xl p-4 text-red-400 text-sm">{sc.error}</div>
          ) : sc ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Keywords */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-800">
                  <h3 className="text-sm font-medium text-gray-300">Top 20 keywords</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left px-4 py-2 text-gray-500">Query</th>
                        <th className="text-right px-3 py-2 text-gray-500">Clicks</th>
                        <th className="text-right px-3 py-2 text-gray-500">Impr.</th>
                        <th className="text-right px-3 py-2 text-gray-500">CTR</th>
                        <th className="text-right px-3 py-2 text-gray-500">Pos.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sc.keywords.map((k, i) => (
                        <tr key={i} className="border-b border-gray-800/40 hover:bg-gray-800/20">
                          <td className="px-4 py-2 text-white max-w-[160px] truncate">{k.keyword}</td>
                          <td className="px-3 py-2 text-right text-blue-400">{k.clicks}</td>
                          <td className="px-3 py-2 text-right text-gray-400">{k.impresiones}</td>
                          <td className="px-3 py-2 text-right text-gray-400">{k.ctr}</td>
                          <td className="px-3 py-2 text-right">
                            <span className={parseFloat(k.posicion) <= 10 ? 'text-green-400' : 'text-yellow-400'}>
                              {k.posicion}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Páginas */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-800">
                  <h3 className="text-sm font-medium text-gray-300">Top páginas</h3>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left px-4 py-2 text-gray-500">URL</th>
                      <th className="text-right px-3 py-2 text-gray-500">Clicks</th>
                      <th className="text-right px-3 py-2 text-gray-500">Impr.</th>
                      <th className="text-right px-3 py-2 text-gray-500">Pos.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sc.paginas.map((p, i) => (
                      <tr key={i} className="border-b border-gray-800/40 hover:bg-gray-800/20">
                        <td className="px-4 py-2 text-purple-300 font-mono max-w-[200px] truncate">{p.url || '/'}</td>
                        <td className="px-3 py-2 text-right text-blue-400">{p.clicks}</td>
                        <td className="px-3 py-2 text-right text-gray-400">{p.impresiones}</td>
                        <td className="px-3 py-2 text-right">
                          <span className={parseFloat(p.posicion) <= 10 ? 'text-green-400' : 'text-yellow-400'}>
                            {p.posicion}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="animate-pulse bg-gray-900 rounded-xl border border-gray-800 h-40" />
          )}
        </section>

        {/* Variables de entorno (solo verifica presencia) */}
        <section>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Variables de entorno</h2>
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
            <p className="text-gray-500 text-xs mb-3">Verifica en Vercel → Settings → Environment Variables que estén configuradas:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {envVars.map(v => (
                <div key={v} className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                  <span className="text-xs font-mono text-gray-300 truncate">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
