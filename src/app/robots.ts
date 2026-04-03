import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        // Permitir rastreadores de IA (para citaciones y GEO SEO)
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Claude-Web",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.ingenieriacantabria.com/sitemap.xml",
  }
}
