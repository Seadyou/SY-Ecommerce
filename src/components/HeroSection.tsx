import Link from 'next/link'
import Header from './Header'

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Background - covers header and hero section */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero_bg.jpg)',
        }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-start justify-center overflow-hidden pt-32 md:pt-40">
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your
            <span className="block text-primary-300">Perfect Style</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Curated collection of premium products designed for modern living.
            Quality meets style in every piece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="sy-button-primary text-lg px-8 py-4 inline-block hover:scale-105 transition-transform duration-200"
            >
              Shop Collection
            </Link>

            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary-950 font-medium text-lg px-8 py-4 rounded-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}