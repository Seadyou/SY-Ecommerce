import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Main content area - ready for homepage sections */}
      <main className="sy-container py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-950 mb-4">
            Welcome to SY
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products designed for modern living.
          </p>
        </div>
      </main>
    </div>
  )
}
