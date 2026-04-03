export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ingeniería Cantabria",
    url: "https://www.ingenieriacantabria.com",
    telephone: "+34623967087",
    email: "jesus@ingenieriacantabria.com",
    foundingDate: "2026",
    founder: { "@type": "Person", name: "Jesús Rosas" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle José María Pereda, 21",
      addressLocality: "Torrelavega",
      addressRegion: "Cantabria",
      postalCode: "39300",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.3536,
      longitude: -4.0499,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: { "@type": "AdministrativeArea", name: "Cantabria" },
    description:
      "Ingenieros colegiados en Torrelavega, Cantabria. Ingeniería industrial, edificación y agronómica. Proyectos, legalizaciones y peritajes.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de ingeniería",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ingeniería Industrial" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ingeniería de Edificación" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ingeniería Agronómica" } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
