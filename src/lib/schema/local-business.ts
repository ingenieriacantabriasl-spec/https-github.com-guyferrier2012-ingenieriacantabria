export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.ingenieriacantabria.com/#organization",
    name: "Ingeniería Cantabria",
    description:
      "Empresa de ingeniería industrial, de edificación y agronómica en Torrelavega, Cantabria. Proyectos técnicos, peritajes, consultoría y dirección de obras.",
    url: "https://www.ingenieriacantabria.com",
    telephone: "+34623967087",
    email: "jesus@ingenieriacantabria.com",
    foundingDate: "2026",
    founder: {
      "@type": "Person",
      name: "Jesús Rosas",
    },
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
    areaServed: [
      { "@type": "AdministrativeArea", name: "Cantabria" },
      { "@type": "City", name: "Torrelavega" },
      { "@type": "City", name: "Santander" },
      { "@type": "City", name: "Castro-Urdiales" },
      { "@type": "City", name: "Laredo" },
      { "@type": "City", name: "Reinosa" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Ingeniería",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ingeniería Industrial" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ingeniería de Edificación" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ingeniería Agronómica" } },
      ],
    },
  }
}
