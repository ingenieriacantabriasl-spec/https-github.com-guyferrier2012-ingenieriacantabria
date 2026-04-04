import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getPostBySlugAsync, getAllSlugs, posts } from "@/lib/blog/posts"
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://www.ingenieriacantabria.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: ["Jesús Rosas"],
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.coverImageAlt }],
    },
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
}

// Convert markdown-ish content to JSX
function renderContent(content: string) {
  const lines = content.trim().split("\n")
  const elements: JSX.Element[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-[#1a3a5c] font-heading font-bold text-2xl mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      )
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-[#1a3a5c] font-heading font-semibold text-lg mt-7 mb-3">
          {line.replace("### ", "")}
        </h3>
      )
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="border-gray-200 my-8" />)
    } else if (line.startsWith("| ")) {
      // Table: collect rows
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i])
        i++
      }
      const rows = tableLines.filter((l) => !l.match(/^\|[-| ]+\|$/))
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm font-body border-collapse">
            {rows.map((row, ri) => {
              const cells = row.split("|").filter((c) => c.trim() !== "")
              const isHeader = ri === 0
              return (
                <tr key={ri} className={isHeader ? "bg-[#1a3a5c] text-white" : ri % 2 === 0 ? "bg-white" : "bg-[#f5f7fa]"}>
                  {cells.map((cell, ci) =>
                    isHeader ? (
                      <th key={ci} className="px-4 py-2 text-left font-semibold">
                        {cell.trim()}
                      </th>
                    ) : (
                      <td key={ci} className="px-4 py-2 text-[#4a6080]">
                        {cell.trim().replace(/\*\*(.+?)\*\*/g, "$1")}
                      </td>
                    )
                  )}
                </tr>
              )
            })}
          </table>
        </div>
      )
      continue
    } else if (line.startsWith("- ")) {
      // Collect list items
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""))
        i++
      }
      elements.push(
        <ul key={i} className="list-disc list-outside ml-5 my-4 space-y-2 text-[#4a6080] font-body">
          {items.map((item, ii) => (
            <li key={ii} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\. /.test(line)) {
      // Numbered list
      const items: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""))
        i++
      }
      elements.push(
        <ol key={i} className="list-decimal list-outside ml-5 my-4 space-y-2 text-[#4a6080] font-body">
          {items.map((item, ii) => (
            <li key={ii} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ol>
      )
      continue
    } else if (line.trim() !== "") {
      elements.push(
        <p
          key={i}
          className="text-[#4a6080] font-body text-base leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
        />
      )
    }
    i++
  }
  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlugAsync(params.slug)
  if (!post) notFound()

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", url: "https://www.ingenieriacantabria.com" },
    { name: "Blog", url: "https://www.ingenieriacantabria.com/blog" },
    { name: post.title, url: `https://www.ingenieriacantabria.com/blog/${post.slug}` },
  ])

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Jesús Rosas",
      url: "https://www.ingenieriacantabria.com/sobre-nosotros",
    },
    publisher: {
      "@type": "Organization",
      name: "Ingeniería Cantabria",
      url: "https://www.ingenieriacantabria.com",
    },
    mainEntityOfPage: `https://www.ingenieriacantabria.com/blog/${post.slug}`,
  }

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section
        className="pt-32 pb-16 relative"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4631a]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-body text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300 truncate max-w-xs">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-heading font-semibold px-3 py-1 rounded-sm"
              style={{ backgroundColor: `${post.categoryColor}30`, color: post.categoryColor }}
            >
              {post.category}
            </span>
            <span className="text-gray-400 font-body text-sm">{post.readingTime} min lectura</span>
          </div>

          <h1 className="text-white font-heading font-black text-3xl md:text-4xl leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[#d4631a] flex items-center justify-center">
              <span className="text-white font-bold text-sm">JR</span>
            </div>
            <div>
              <p className="text-white font-body text-sm font-semibold">Jesús Rosas</p>
              <p className="text-gray-400 font-body text-xs">
                Ingeniero Técnico · <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="relative w-full h-72 md:h-96 bg-[#1a3a5c]">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className="object-cover opacity-90"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
            {/* Article body */}
            <article>
              {renderContent(post.content)}

              {/* CTA within article */}
              <div className="mt-12 bg-[#1a3a5c] rounded-sm p-8 text-center">
                <p className="text-[#d4631a] font-heading font-semibold text-sm tracking-widest uppercase mb-2">
                  Ingeniería Cantabria
                </p>
                <h3 className="text-white font-heading font-black text-xl mb-3">
                  ¿Necesita este servicio en Cantabria?
                </h3>
                <p className="text-gray-300 font-body text-sm mb-6">
                  Consulta gratuita con Jesús Rosas, ingeniero técnico colegiado en Torrelavega.
                </p>
                <Link href="/#contacto" className="btn-primary">
                  Solicitar presupuesto gratuito →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Author card */}
                <div className="card p-6">
                  <p className="text-[#1a3a5c] font-heading font-bold text-sm mb-3">Autor</p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#d4631a] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">JR</span>
                    </div>
                    <div>
                      <p className="text-[#1a3a5c] font-body font-semibold text-sm">Jesús Rosas</p>
                      <p className="text-[#4a6080] font-body text-xs">Ingeniero Técnico Colegiado</p>
                    </div>
                  </div>
                  <p className="text-[#4a6080] font-body text-xs leading-relaxed">
                    Especialista en ingeniería industrial, edificación y agronómica con despacho en Torrelavega, Cantabria.
                  </p>
                </div>

                {/* Contact */}
                <div className="bg-[#d4631a]/10 border border-[#d4631a]/30 rounded-sm p-5">
                  <p className="text-[#d4631a] font-heading font-bold text-sm mb-2">¿Le ayudamos?</p>
                  <p className="text-[#4a6080] font-body text-xs mb-4 leading-relaxed">
                    Presupuesto gratuito en menos de 24 horas.
                  </p>
                  <Link href="/#contacto" className="btn-primary text-sm text-center block">
                    Contactar →
                  </Link>
                </div>

                {/* More articles */}
                <div className="card p-5">
                  <p className="text-[#1a3a5c] font-heading font-bold text-sm mb-4">Más artículos</p>
                  <div className="space-y-3">
                    {relatedPosts.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                        <p className="text-[#4a6080] font-body text-xs leading-snug group-hover:text-[#d4631a] transition-colors">
                          {rp.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
