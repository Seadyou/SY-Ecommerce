
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SaleBanner from '@/components/SaleBanner'
import CategorySection from '@/components/CategorySection'
import LatestArrivals from '@/components/LatestArrivals'


export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Container - covers header + hero section */}
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
        <HeroSection />
      </div>

      {/* Sale Banner */}
      <SaleBanner />

      {/* Category Section */}
      <CategorySection />

      {/* Latest Arrivals Section */}
      <LatestArrivals />

    </div>
  )
}
