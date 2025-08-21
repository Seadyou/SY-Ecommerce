'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const latestProducts = [
  {
    id: 1,
    name: "Women's Oversized Sweatshirt",
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center',
    originalPrice: 85.00,
    salePrice: 51.00,
    discount: 40,
    href: '/product/womens-oversized-sweatshirt'
  },
  {
    id: 2,
    name: "Drawstring Linen Pants",
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop&crop=center',
    originalPrice: 45.00,
    salePrice: 45.00,
    discount: 0,
    href: '/product/drawstring-linen-pants'
  },
  {
    id: 3,
    name: "Bucket Hat",
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=500&fit=crop&crop=center',
    originalPrice: 30.00,
    salePrice: 9.00,
    discount: 70,
    href: '/product/bucket-hat'
  },
  {
    id: 4,
    name: "Unisex Oversized T-Shirt",
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center',
    originalPrice: 40.00,
    salePrice: 28.00,
    discount: 30,
    href: '/product/unisex-oversized-tshirt'
  },
  // Additional products for the carousel
  {
    id: 5,
    name: "Men's Cotton Shorts",
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center',
    originalPrice: 80.00,
    salePrice: 80.00,
    discount: 0,
    href: '/product/mens-cotton-shorts'
  },
  {
    id: 6,
    name: "Ribbed Socks",
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=500&fit=crop&crop=center',
    originalPrice: 7.50,
    salePrice: 7.50,
    discount: 0,
    badge: "Best Seller",
    href: '/product/ribbed-socks'
  },
  {
    id: 7,
    name: "Women's Crewneck Sweater",
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center',
    originalPrice: 120.00,
    salePrice: 84.00,
    discount: 30,
    href: '/product/womens-crewneck-sweater'
  },
  {
    id: 8,
    name: "Classic Denim Jacket",
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop&crop=center',
    originalPrice: 95.00,
    salePrice: 95.00,
    discount: 0,
    href: '/product/classic-denim-jacket'
  }
]

export default function LatestArrivals() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.querySelector('.product-card')?.clientWidth || 0
      const gap = 24 // 6 * 4 (gap-6 = 1.5rem = 24px)
      const scrollAmount = cardWidth + gap
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
      
      setCurrentIndex(prev => Math.min(prev + 1, latestProducts.length - 4))
    }
  }

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.querySelector('.product-card')?.clientWidth || 0
      const gap = 24
      const scrollAmount = -(cardWidth + gap)
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
      
      setCurrentIndex(prev => Math.max(prev - 1, 0))
    }
  }

  return (
    <section className="py-16 bg-neutral-50">
      <div className="sy-container">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-secondary-950">
            Latest Arrivals
          </h2>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={scrollToPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-secondary-700" />
            </button>
          )}
          
          {currentIndex < latestProducts.length - 4 && (
            <button
              onClick={scrollToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 text-secondary-700" />
            </button>
          )}

          {/* Scrollable Product Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {latestProducts.map((product, index) => (
              <Link 
                key={product.id}
                href={product.href}
                className="group relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 product-card min-w-[280px]"
              >
                               {/* Product Image */}
               <div className="aspect-[4/5] relative overflow-hidden">
                 {/* Default Image */}
                 <div 
                   className="w-full h-full bg-cover bg-center transition-all duration-500 group-hover:opacity-0"
                   style={{
                     backgroundImage: `url(${product.image})`
                   }}
                 />
                 
                 {/* Hover Image */}
                 <div 
                   className="absolute inset-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                   style={{
                     backgroundImage: `url(${product.hoverImage})`
                   }}
                 />
                  
                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-secondary-950">
                      {product.discount}% OFF
                    </div>
                  )}

                  {/* Best Seller Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-secondary-950">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-medium text-secondary-950 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {product.discount > 0 ? (
                      <>
                        <span className="text-lg font-bold text-error-500">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-secondary-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-secondary-950">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
