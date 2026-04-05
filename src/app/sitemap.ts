import { MetadataRoute } from "next"

const BASE_URL = "https://www.ingenieriacantabria.com"
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://jaehghuhrthrmjuzehiw.supabase.co"
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphZWhodWhocnRocm1qdXplaGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2OTMwNTIsImV4cCI6MjA1OTI2OTA1Mn0.eqK1P-fXTBq-bEJLT5ELHJnHJiU0kO4GXLAOWHBFx4c"

async function getBlogSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug&order=id.asc`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return []
    const posts: { slug: string }[] = await res.json()
    return posts.map((p) => p.slug).filter(Boolean)
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getBlogSlugs()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/servicios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/industrial`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/edificacion`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/agronomica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/proyectos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    // Landings SEO — prioridad alta
    { url: `${BASE_URL}/ingenieria-industrial-cantabria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ingeniero-tecnico-cantabria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ayudas-next-generation-cantabria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/legalizacion-nave-industrial-torrelavega`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/legalizacion-nave-industrial-santander`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/auditoria-energetica-empresas-cantabria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/legalizacion-actividades-cantabria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/licencia-actividad-industrial`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/peritaje-industrial-cantabria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/sobre-nosotros`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/aviso-legal`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
