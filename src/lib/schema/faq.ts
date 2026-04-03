// Nota: desde agosto 2023 Google no muestra rich results de FAQ para sitios comerciales.
// Se incluye igualmente para mejorar la citabilidad en IAs (ChatGPT, Perplexity, Gemini).

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué servicios de ingeniería industrial ofrece Ingeniería Cantabria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ofrecemos redacción de proyectos industriales, legalización de instalaciones eléctricas, mecánicas y de climatización, obtención de licencias de actividad y consultoría técnica industrial en toda Cantabria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Realizáis ITE (Inspección Técnica de Edificios) en Santander?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, realizamos Inspecciones Técnicas de Edificios (ITE) en Santander y en toda Cantabria. Nuestros ingenieros de edificación emiten el informe y tramitan el certificado ante el Gobierno de Cantabria.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué zonas de Cantabria trabajáis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trabajamos en toda la comunidad autónoma de Cantabria, con especial presencia en Santander, Torrelavega, Castro-Urdiales, Laredo, Reinosa y toda la comarca costera e interior.",
        },
      },
      {
        "@type": "Question",
        name: "¿Podéis tramitar la licencia de obras o actividad con el Ayuntamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, nos encargamos de toda la tramitación administrativa: redacción del proyecto técnico, visado colegial si es necesario, presentación ante el Ayuntamiento correspondiente y seguimiento hasta la obtención de la licencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo solicitar presupuesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede solicitar presupuesto sin compromiso a través del formulario de contacto de nuestra web, por email a jesus@ingenieriacantabria.com o llamando al +34 623 96 70 87. Le respondemos en menos de 24 horas.",
        },
      },
    ],
  }
}
