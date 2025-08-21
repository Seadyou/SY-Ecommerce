'use client'

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

export default function SaleBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-amber-50 to-pink-50 opacity-80" />
      
      {/* Main Banner Content */}
      <div className="relative py-4">
        <div className="px-4">
          <div className="flex items-center justify-center">
            {/* Scroll-based Velocity Text */}
            <ScrollVelocityContainer className="text-2xl font-medium text-secondary-950">
                              <ScrollVelocityRow baseVelocity={8} direction={1}>
                  • Up to 70% off • Shop Sale • Up to 70% off • Shop Sale • Up to 70% off • Shop Sale
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200" />
    </section>
  )
}
