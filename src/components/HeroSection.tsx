
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <Button asChild variant="default" size="lg" className="bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
              <Link href="/products">
                Shop Collection
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-secondary-950 text-lg px-8 py-4">
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>


    </section>
  )
}

