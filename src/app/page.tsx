import Script from "next/script"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import WhyUs from "@/components/sections/WhyUs"
import Projects from "@/components/sections/Projects"
import CTA from "@/components/sections/CTA"
import UrgencyBanner from "@/components/sections/UrgencyBanner"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import Location from "@/components/sections/Location"
import ContactForm from "@/components/sections/ContactForm"
import { getLocalBusinessSchema } from "@/lib/schema/local-business"
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb"
import { getFAQSchema } from "@/lib/schema/faq"

export default function Home() {
  return (
    <>
      <Script id="schema-local-business" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
      <Script id="schema-breadcrumb" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: "Inicio", url: "https://www.ingenieriacantabria.com" }])) }} />
      <Script id="schema-faq" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }} />
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <CTA />
      <UrgencyBanner />
      <Testimonials />
      <FAQ />
      <Location />
      <ContactForm />
    </>
  )
}
