
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SaleBanner from '@/components/SaleBanner'
import CategorySection from '@/components/CategorySection'
import LatestArrivals from '@/components/LatestArrivals'
import Footer from '@/components/Footer'
import PromotionalSection from '@/components/PromotionalSection'


export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header floats above all content */}
      <Header />

      {/* Hero Container - extends behind header */}
      <div className="relative -mt-20 pt-20">
        {/* Hero Background - covers header area and hero section */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero_bg.jpg)',
          }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <HeroSection />
      </div>

      {/* Sale Banner */}
      <SaleBanner />

      {/* Category Section */}
      <CategorySection />

      {/* Latest Arrivals Section */}
      <LatestArrivals />

      {/* Promotional Section */}
      <PromotionalSection />

      {/* Footer */}
      <Footer />

    </div>
  )
}
