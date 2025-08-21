'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(3) // Mock cart count
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky z-50 transition-all duration-300 ${
      isScrolled 
        ? 'top-4 mx-4 bg-white/95 backdrop-blur-md shadow-lg border border-neutral-200/50 py-2 header-floating rounded-2xl' 
        : 'top-0 bg-white/80 backdrop-blur-sm border-b border-transparent py-0'
    }`}>
      <div className="sy-container">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'
        }`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-secondary-950 font-heading">SY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/products" 
              className="text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              Products
            </Link>
            <Link 
              href="/categories" 
              className="text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              Categories
            </Link>
            <Link 
              href="/about" 
              className="text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-secondary-700 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Search Icon - Mobile */}
            <Button variant="ghost" size="icon" className="lg:hidden text-secondary-700 hover:text-primary-500">
              <Search className="w-5 h-5" />
            </Button>

            {/* User Account */}
            <Link 
              href="/account" 
              className="hidden sm:flex p-2 text-secondary-700 hover:text-primary-500 transition-colors duration-200"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Shopping Cart */}
            <Link href="/cart" className="relative p-2 text-secondary-700 hover:text-primary-500 transition-colors duration-200">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              className="lg:hidden text-secondary-700 hover:text-primary-500"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <nav className="sy-container py-4 space-y-4">
            <Link 
              href="/products" 
              className="block text-secondary-700 hover:text-primary-500 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/categories" 
              className="block text-secondary-700 hover:text-primary-500 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              href="/about" 
              className="block text-secondary-700 hover:text-primary-500 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-secondary-700 hover:text-primary-500 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <hr className="border-neutral-200" />
            <Link 
              href="/account" 
              className="block text-secondary-700 hover:text-primary-500 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              My Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}