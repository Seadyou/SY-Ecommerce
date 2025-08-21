'use client'

import Link from 'next/link'

export default function PromotionalSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
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
          <Link
            href="/sale"
            className="inline-block bg-white text-secondary-950 font-semibold px-8 py-4 rounded-lg hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Shop Sale
          </Link>
        </div>
      </div>
    </section>
  )
}
