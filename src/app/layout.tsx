import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import SchemaOrg from "@/components/ui/SchemaOrg"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ingenieriacantabria.com"),
  title: {
    default: "Ingeniería Cantabria | Industrial · Edificación · Agronómica",
    template: "%s | Ingeniería Cantabria",
  },
  description:
    "Ingenieros colegiados en Cantabria: industrial, edificación y agronómica. Proyectos, legalizaciones y peritajes en Torrelavega.",
  keywords: [
    "ingeniería industrial Cantabria",
    "ingeniería edificación Cantabria",
    "ingeniería agronómica Cantabria",
    "ingeniero técnico Cantabria",
    "ITE Cantabria",
    "legalización maquinaria Cantabria",
    "certificado eficiencia energética Cantabria",
    "ingeniería Torrelavega",
  ],
  authors: [{ name: "Jesús Rosas", url: "https://www.ingenieriacantabria.com" }],
  creator: "Jesús Rosas — Ingeniería Cantabria",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.ingenieriacantabria.com",
    siteName: "Ingeniería Cantabria",
    title: "Ingeniería Cantabria | Ingenieros técnicos en Cantabria",
    description:
      "Especialistas en ingeniería industrial, edificación y agronómica en Torrelavega, Cantabria. Proyectos, legalizaciones y consultoría técnica.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingeniería Cantabria | Industrial · Edificación · Agronómica",
    description: "Ingenieros colegiados en Torrelavega, Cantabria. Proyectos, legalizaciones y peritajes.",
  },
  verification: {
    google: "TLlcJaz7lg60Kh7a2MAnpjt4l8G9ofM5a31ppfy-gtc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ingenieriacantabria.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <SchemaOrg />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HJ2P0S26RS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HJ2P0S26RS');
        `}</Script>
      </body>
    </html>
  )
}
