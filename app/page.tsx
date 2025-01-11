import React from 'react'
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { StatsSection } from "@/components/stats-section"
import { NewsSection } from "@/components/news-section"
import { CTASection } from "@/components/cta-section"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { FeaturedCaseStudy } from "@/components/featured-case-study"
import { TechnologyPartners } from "@/components/technology-partners"
import { UpcomingEvents } from "@/components/upcoming-events"

export default function Home() {
  return (
    <>
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <FeaturedCaseStudy />
        <StatsSection />
        <TestimonialsCarousel />
        <NewsSection />
        <TechnologyPartners />
        <UpcomingEvents />
        <div className="container py-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Stay Updated with BihiGroup</h2>
          <div className="flex justify-center">
            <NewsletterSubscription />
          </div>
        </div>
        <CTASection />
      </main>
    </div>
    </>
  )
}

