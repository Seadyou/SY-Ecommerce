'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Star, ShoppingCart, Heart, ChevronRight } from 'lucide-react'

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    category: "Electronics",
    brand: "AudioTech",
    description: "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for extended listening sessions.",
    stock: 15,
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    category: "Clothing",
    brand: "EcoWear",
    description: "Made from 100% organic cotton, this comfortable t-shirt is perfect for everyday wear. Soft, breathable, and environmentally friendly.",
    stock: 45,
    isNew: false,
    isSale: true,
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  const product = products.find(p => p.id === productId)
  
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <div className="sy-container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-secondary-950 mb-4">Product Not Found</h1>
            <p className="text-secondary-600 mb-6">The product you're looking for doesn't exist.</p>
            <Link href="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const isOnSale = product.originalPrice > product.price
  const discountPercentage = isOnSale ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200">
        <div className="sy-container py-4">
          <nav className="flex items-center space-x-2 text-sm text-secondary-600">
            <a href="/" className="hover:text-primary-600 transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/products" className="hover:text-primary-600 transition-colors">Products</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary-950">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="sy-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
            />
            
            {/* Sale Badge */}
            {isOnSale && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {discountPercentage}% OFF
              </div>
            )}
            
            {/* New Badge */}
            {product.isNew && (
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                NEW
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-secondary-600">{product.brand}</span>
                <span className="text-sm text-secondary-400">•</span>
                <span className="text-sm text-secondary-600">{product.category}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-secondary-950 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{product.rating}</span>
                  <span className="ml-1 text-secondary-600">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-secondary-950">${product.price}</span>
                {isOnSale && (
                  <span className="text-xl text-secondary-500 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <p className="text-secondary-700 leading-relaxed">{product.description}</p>

            {/* Quantity */}
            <div>
              <h3 className="font-medium text-secondary-950 mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-10 rounded-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                >
                  -
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-10 rounded-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                >
                  +
                </button>
                <span className="text-sm text-secondary-600">({product.stock} available)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
