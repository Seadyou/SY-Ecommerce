'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
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
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-secondary-950 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-secondary-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-secondary-600 hover:bg-neutral-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-secondary-700 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary-600">${priceRange[0]}</span>
                    <span className="text-sm text-secondary-600">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSelectedCategory("All")
                  setPriceRange([0, 500])
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-secondary-600">
                  {sortedProducts.length} products found
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                {/* View Mode */}
                <div className="flex items-center border border-neutral-200 rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-colors duration-200 ${
                      viewMode === "grid"
                        ? "bg-primary-50 text-primary-700"
                        : "text-secondary-600 hover:bg-neutral-100"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-colors duration-200 ${
                      viewMode === "list"
                        ? "bg-primary-50 text-primary-700"
                        : "text-secondary-600 hover:bg-neutral-100"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
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

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow duration-200">
        <div className="flex gap-6">
          <div className="relative w-32 h-32 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            )}
            {isOnSale && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Sale
              </span>
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
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200 hover:shadow-md transition-all duration-200 group">
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
        />
        
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            New
          </span>
        )}
        
        {isOnSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Sale
          </span>
        )}
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 rounded-lg" />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-secondary-950 group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>
        
        <p className="text-sm text-secondary-600">{product.category}</p>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-secondary-600">{product.rating}</span>
          </div>
          <span className="text-sm text-secondary-500">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-secondary-950">${product.price}</span>
            {isOnSale && (
              <span className="text-sm text-secondary-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          
          <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
