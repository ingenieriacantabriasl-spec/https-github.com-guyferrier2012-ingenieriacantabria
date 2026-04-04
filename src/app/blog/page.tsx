import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog/posts"

export const metadata: Metadata = {
  title: "Blog de Ingeniería — Guías y recursos técnicos en Cantabria",
  description:
    "Artículos y guías técnicas sobre ingeniería industrial, edificación y agronómica en Cantabria. ITE, legalización de maquinaria, certificados energéticos y más.",
  alternates: { canonical: "https://www.ingenieriacantabria.com/blog" },
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <>
      <section
        className="pt-32 pb-20 relative"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4d7a 100%)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4631a]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Blog
          </p>
          <h1 className="text-white font-heading font-black text-4xl md:text-5xl mb-6">
            Guías técnicas de ingeniería
          </h1>
          <p className="text-gray-300 font-body text-xl max-w-2xl leading-relaxed">
            Recursos prácticos sobre ITE, legalizaciones, certificados energéticos y normativa técnica en Cantabria.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="card p-0 overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  {/* Cover image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-xs font-heading font-semibold px-2 py-1 rounded-sm"
                        style={{ backgroundColor: post.categoryColor, color: "#fff" }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#8a9ab0] font-body text-xs">
                        {post.readingTime} min lectura
                      </span>
                    </div>
                    <h2 className="text-[#1a3a5c] font-heading font-bold text-lg leading-snug mb-3 group-hover:text-[#d4631a] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#4a6080] font-body text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <time className="text-[#8a9ab0] font-body text-xs" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <span className="text-[#d4631a] font-body text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                        Leer →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a3a5c]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-white font-heading font-black text-2xl md:text-3xl mb-4">
            ¿Necesita asesoramiento técnico?
          </h2>
          <p className="text-gray-300 font-body mb-8">
            Consulta gratuita y sin compromiso. Jesús Rosas responde en menos de 24 horas.
          </p>
          <Link href="/#contacto" className="btn-primary">
            Solicitar presupuesto →
          </Link>
        </div>
      </section>
    </>
  )
}
