import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Footer Links Section */}
      <section className="bg-secondary-900 text-white">
        <div className="sy-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Contact Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact</h3>
              <div className="space-y-3 text-secondary-300">
                <p>0234 567 890</p>
                <p>info@sy-store.com</p>
              </div>
            </div>

            {/* Shop Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/category/tops" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Tops
                  </Link>
                </li>
                <li>
                  <Link href="/category/bottoms" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link href="/category/outerwear" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Outerwear
                  </Link>
                </li>
                <li>
                  <Link href="/new-arrivals" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    New In
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/cookies" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/payments" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-secondary-300 hover:text-white transition-colors duration-200">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
              <p className="text-secondary-300 mb-6">
                Be the first to hear about our latest offers
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="YOUR EMAIL ADDRESS"
                    className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-3 text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 hover:bg-primary-600"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Section - Social & Copyright */}
          <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              Copyright © 2024 SY Store Ltd
            </p>
            
            <div className="flex space-x-4">
              <Link 
                href="https://instagram.com" 
                className="text-secondary-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="https://facebook.com" 
                className="text-secondary-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="text-secondary-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}