'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Filter, Grid, List, Star, ShoppingCart, Heart } from 'lucide-react'

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
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
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Clothing",
    isNew: false,
    isSale: true,
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Electronics",
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    category: "Accessories",
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug Set",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.5,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=400&fit=crop",
    category: "Home",
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: "Wireless Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "Electronics",
    isNew: false,
    isSale: true,
  },
  {
    id: 7,
    name: "Yoga Mat Premium",
    price: 49.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    category: "Sports",
    isNew: true,
    isSale: false,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    category: "Sports",
    isNew: false,
    isSale: true,
  },
]

const categories = ["All", "Electronics", "Clothing", "Accessories", "Home", "Sports"]
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Rating"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 500])

  // Handle URL parameters for category filtering
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const categoryParam = urlParams.get('category')
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam)
    }
  }, [])

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return a.price - b.price
      case "Price: High to Low":
        return b.price - a.price
      case "Newest":
        return b.isNew ? 1 : -1
      case "Rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Page Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="sy-container py-8">
          <h1 className="text-4xl font-bold text-secondary-950 font-heading mb-2">Our Products</h1>
          <p className="text-secondary-600">Discover our curated collection of premium products</p>
        </div>
      </div>

      <div className="sy-container py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Filters Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
              {/* Header with animated icon */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary-950 mb-2 flex items-center group">
                  <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Filter className="w-5 h-5 text-white" />
                  </div>
                  Filters
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold text-secondary-800 mb-4 text-lg">Categories</h4>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-lg shadow-primary-500/25'
                        : 'text-secondary-700 hover:bg-gradient-to-r hover:from-neutral-50 hover:to-neutral-100 hover:text-secondary-900 border border-transparent hover:border-neutral-200'
                        }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category}</span>
                        {selectedCategory === category && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-semibold text-secondary-800 mb-4 text-lg">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gradient-to-r from-neutral-50 to-neutral-100 p-3 rounded-xl">
                    <span className="text-sm font-medium text-secondary-700">${priceRange[0]}</span>
                    <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                    <span className="text-sm font-medium text-secondary-700">${priceRange[1]}</span>
                  </div>

                  <div className="px-2 price-range-slider">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={500}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full py-3 border-2 border-neutral-200 hover:border-primary-500 hover:bg-primary-50 text-secondary-700 hover:text-primary-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  setSelectedCategory("All")
                  setPriceRange([0, 500])
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                    <span className="text-secondary-700 font-medium">
                      <span className="text-primary-600 font-semibold">{sortedProducts.length}</span> products found
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white appearance-none cursor-pointer transition-all duration-200 hover:border-primary-300"
                    >
                      {sortOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center bg-neutral-50 rounded-xl p-1 border border-neutral-200">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid"
                        ? "bg-white text-primary-600 shadow-md transform scale-105"
                        : "text-secondary-600 hover:text-secondary-900 hover:bg-white/50"
                        }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "list"
                        ? "bg-white text-primary-600 shadow-md transform scale-105"
                        : "text-secondary-600 hover:text-secondary-900 hover:bg-white/50"
                        }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
              }`}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-secondary-600 text-lg">No products found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("All")
                    setPriceRange([0, 500])
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function ProductCard({ product, viewMode }: { product: any; viewMode: "grid" | "list" }) {
  const isOnSale = product.originalPrice > product.price
  const [isHovered, setIsHovered] = useState(false)



  if (viewMode === "list") {
    return (
      <div
        className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-6">
          <div className="relative w-32 h-32 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
            {product.isNew && (
              <motion.span
                className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                animate={{
                  opacity: isHovered ? 0 : 1,
                  scale: isHovered ? 0.8 : 1,
                  y: isHovered ? -8 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                New
              </motion.span>
            )}
            {isOnSale && (
              <motion.span
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                animate={{
                  opacity: isHovered ? 0 : 1,
                  scale: isHovered ? 0.8 : 1,
                  y: isHovered ? -8 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Sale
              </motion.span>
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-secondary-950 mb-2">{product.name}</h3>
            <p className="text-secondary-600 mb-3">{product.category}</p>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-secondary-600">{product.rating}</span>
              </div>
              <span className="text-sm text-secondary-500">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-secondary-950">${product.price}</span>
                {isOnSale && (
                  <span className="text-sm text-secondary-500 line-through">${product.originalPrice}</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200 hover:shadow-md transition-all duration-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
        />

        {product.isNew && (
          <motion.span
            className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
            animate={{
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0.8 : 1,
              y: isHovered ? -8 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            New
          </motion.span>
        )}

        {isOnSale && (
          <motion.span
            className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
            animate={{
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0.8 : 1,
              y: isHovered ? -8 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Sale
          </motion.span>
        )}

        {/* Wishlist Button - Top Right */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Heart className="w-4 h-4" />
        </Button>

        {/* Add to Cart Button - Centered on Image */}
        <Button
          size="sm"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-800/90 backdrop-blur-sm hover:bg-neutral-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 rounded-lg" />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-secondary-600">{product.category}</p>

        <h3 className="font-semibold text-secondary-950 group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-secondary-600">{product.rating}</span>
          </div>
          <span className="text-sm text-secondary-500">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-secondary-950">${product.price}</span>
          {isOnSale && (
            <span className="text-sm text-secondary-500 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}
