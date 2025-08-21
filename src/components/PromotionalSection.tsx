'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PromotionalSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="w-full h-full object-cover"
          suppressHydrationWarning={true}
        >
          <source src="/videos/promotional-bg.mp4" type="video/mp4" />
          {/* Fallback background if video doesn't load */}
          <div className="w-full h-full bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 sy-container">
        <div className="text-center">
          {/* Main Promotional Text */}
          <h2 className="text-5xl md:text-7xl font-bold text-secondary-950 mb-8 leading-tight">
            30%-70% On Selected Styles
          </h2>



          {/* Call to Action Button */}
          <Button asChild size="lg" className="bg-white text-secondary-950 hover:bg-neutral-100 px-8 py-4 shadow-lg hover:scale-105 transition-all duration-300">
            <Link href="/sale">
              Shop Sale
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
