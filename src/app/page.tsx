
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SaleBanner from '@/components/SaleBanner'
import CategorySection from '@/components/CategorySection'
import LatestArrivals from '@/components/LatestArrivals'


export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">

      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Sale Banner */}
      <SaleBanner />

      {/* Category Section */}
      <CategorySection />

      {/* Latest Arrivals Section */}
      <LatestArrivals />

    </div>
  )
}
