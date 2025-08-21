import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <HeroSection />

      {/* Additional content sections can go here */}
      <main className="sy-container py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-950 mb-4">
            Featured Categories
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Explore our carefully selected product categories
          </p>
        </div>
      </main>
    </div>
  )
}
