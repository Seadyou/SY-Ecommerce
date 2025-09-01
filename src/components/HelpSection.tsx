import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HelpSection() {
  return (
    <section className="relative bg-primary-600 overflow-hidden">
      <div className="sy-container">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Text Content - Left Side */}
          <div className="flex-1 text-white lg:pr-12 self-center">
            <div className="max-w-lg py-8 lg:py-0">
              <p className="text-sm font-medium tracking-wider uppercase mb-4 text-primary-200">
                NEED HELP
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                We are here to help
              </h2>
              <p className="text-lg lg:text-xl mb-8 text-primary-100 leading-relaxed">
                Our team are here to make your shopping stress free.
              </p>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 uppercase tracking-wide">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Worker Portrait - Full height */}
          <div className="relative flex-1 w-full h-[600px] -mt-8">
            <div className="relative h-full w-full">
              <img 
                src="/images/Subject1.png" 
                alt="Worker Portrait" 
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

