'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CometCard } from '@/components/ui/comet-card'

const categoriesData = {
  women: [
    {
      id: 'tops',
      name: 'Tops',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&crop=center',
      href: '/category/women/tops',
      description: 'Discover our collection of stylish women\'s tops'
    },
    {
      id: 'bottoms',
      name: 'Bottoms',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&crop=center',
      href: '/category/women/bottoms',
      description: 'Find the perfect women\'s bottoms for any occasion'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop&crop=center',
      href: '/category/women/accessories',
      description: 'Complete your look with our women\'s accessories'
    }
  ],
  men: [
    {
      id: 'tops',
      name: 'Tops',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=center',
      href: '/category/men/tops',
      description: 'Discover our collection of stylish men\'s tops'
    },
    {
      id: 'bottoms',
      name: 'Bottoms',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=1000&fit=crop&crop=center',
      href: '/category/men/bottoms',
      description: 'Find the perfect men\'s bottoms for any occasion'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&h=1000&fit=crop&crop=center',
      href: '/category/men/accessories',
      description: 'Complete your look with our men\'s accessories'
    }
  ]
}

export default function CategorySection() {
  const [selectedGender, setSelectedGender] = useState<'women' | 'men'>('women')
  const categories = categoriesData[selectedGender]

  return (
    <section className="py-16 bg-white">
      <div className="sy-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-secondary-950">
            Shop by Category
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CometCard key={category.id} className="w-full">
              <Link
                href={category.href}
                className="group relative overflow-hidden rounded-2xl bg-neutral-100 block"
              >
                {/* Category Image */}
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${category.image})`
                    }}
                  />

                  {/* Category Label Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <Button
                      variant="secondary"
                      className="bg-accent-200 border-accent-300 text-secondary-950 hover:bg-accent-300 transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = category.href
                      }}
                    >
                      {category.name}
                    </Button>
                  </div>
                </div>
              </Link>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  )
}
