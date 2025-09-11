import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-neutral-50">
			<Header />

			{/* Hero Section */}
			<section className="relative -mt-20 pt-32 pb-16 overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: 'url(/images/hero_bg.jpg)' }}
				/>
				<div className="absolute inset-0 bg-black/50" />

				<div className="relative sy-container text-white">
					<h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">About SY Store</h1>
					<p className="mt-4 max-w-2xl text-white/90">
						We are passionate about delivering high‑quality products with an experience that feels fast, friendly, and fair. Learn more about our mission and what drives us.
					</p>
				</div>
			</section>

			{/* Content Section */}
			<main className="sy-container py-12 space-y-12">
				<section className="grid md:grid-cols-3 gap-8">
					<div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
						<h2 className="text-2xl font-semibold text-secondary-950">Our Mission</h2>
						<p className="mt-3 text-secondary-700 leading-relaxed">
							We believe shopping should be delightful. From curated selections to responsive support, we focus on details that matter—so you can focus on what you love.
						</p>
					</div>
					<div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
						<h2 className="text-2xl font-semibold text-secondary-950">Our Vision</h2>
						<p className="mt-3 text-secondary-700 leading-relaxed">
							To be the most trusted destination for modern commerce—where performance, sustainability, and human-centered design meet to create effortless experiences.
						</p>
					</div>
					<div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
						<h2 className="text-2xl font-semibold text-secondary-950">What We Offer</h2>
						<ul className="mt-3 list-disc list-inside text-secondary-700 space-y-1">
							<li>Trending products sourced from trusted partners</li>
							<li>Fast shipping and easy returns</li>
							<li>Secure checkout and privacy-first policies</li>
							<li>Helpful support whenever you need it</li>
						</ul>
					</div>
				</section>

				<section className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
					<h2 className="text-2xl font-semibold text-secondary-950">Our Story</h2>
					<div className="mt-3 grid md:grid-cols-2 gap-8">
						<div>
							<p className="text-secondary-700 leading-relaxed">
								SY Store began as a weekend project among friends who loved great products and even better experiences. What started with a few curated items has grown into a modern marketplace shaped by community feedback and a relentless focus on quality.
							</p>
							<p className="mt-4 text-secondary-700 leading-relaxed">
								Today, we blend thoughtful curation with technology that keeps things fast, accessible, and secure—so every visit feels effortless from browse to checkout.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-secondary-900">Milestones</h3>
							<ul className="mt-3 space-y-3">
								<li className="flex items-start gap-3">
									<span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" aria-hidden="true" />
									<p className="text-secondary-700"><span className="font-medium text-secondary-900">2019:</span> Launched our first curated collection and same‑week shipping.</p>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" aria-hidden="true" />
									<p className="text-secondary-700"><span className="font-medium text-secondary-900">2021:</span> Expanded to trusted partners and introduced easy returns.</p>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" aria-hidden="true" />
									<p className="text-secondary-700"><span className="font-medium text-secondary-900">2024:</span> Rebuilt storefront for performance, accessibility, and global scale.</p>
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
						<div className="rounded-xl border border-neutral-200 p-4 text-center">
							<p className="text-3xl font-bold text-secondary-950">1M+</p>
							<p className="text-sm text-secondary-600">Products Shipped</p>
						</div>
						<div className="rounded-xl border border-neutral-200 p-4 text-center">
							<p className="text-3xl font-bold text-secondary-950">99.9%</p>
							<p className="text-sm text-secondary-600">Uptime</p>
						</div>
						<div className="rounded-xl border border-neutral-200 p-4 text-center">
							<p className="text-3xl font-bold text-secondary-950">4.8★</p>
							<p className="text-sm text-secondary-600">Customer Rating</p>
						</div>
						<div className="rounded-xl border border-neutral-200 p-4 text-center">
							<p className="text-3xl font-bold text-secondary-950">50+</p>
							<p className="text-sm text-secondary-600">Trusted Partners</p>
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
					<h2 className="text-2xl font-semibold text-secondary-950">Our Values</h2>
					<p className="mt-3 text-secondary-700 leading-relaxed max-w-3xl">
						These principles guide how we build, source, and support—so every decision reflects what matters to our customers and our team.
					</p>
					<div className="mt-6 grid md:grid-cols-2 gap-6">
						<div className="rounded-2xl border border-neutral-200 p-5">
							<h3 className="text-lg font-semibold text-secondary-900">Customer First</h3>
							<p className="mt-2 text-secondary-700">We listen closely, act quickly, and always optimize for your experience.</p>
						</div>
						<div className="rounded-2xl border border-neutral-200 p-5">
							<h3 className="text-lg font-semibold text-secondary-900">Integrity</h3>
							<p className="mt-2 text-secondary-700">We keep our promises and operate transparently across our marketplace.</p>
						</div>
						<div className="rounded-2xl border border-neutral-200 p-5">
							<h3 className="text-lg font-semibold text-secondary-900">Sustainability</h3>
							<p className="mt-2 text-secondary-700">We prefer responsible sourcing and packaging to reduce environmental impact.</p>
						</div>
						<div className="rounded-2xl border border-neutral-200 p-5">
							<h3 className="text-lg font-semibold text-secondary-900">Innovation</h3>
							<p className="mt-2 text-secondary-700">We iterate quickly and use technology to make shopping feel effortless.</p>
						</div>
					</div>
				</section>

				{/* What We Do Section */}
				<section className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
					<h2 className="text-2xl font-semibold text-secondary-950">What We Do</h2>
					<p className="mt-3 text-secondary-700 leading-relaxed max-w-3xl">
						We combine curation, technology, and trusted logistics to make online shopping simple and satisfying.
					</p>
					<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="rounded-2xl border border-neutral-200 p-5">
							<h3 className="text-lg font-semibold text-secondary-900">Curate Quality</h3>
							<p className="mt-2 text-secondary-700">We hand-pick products and vet partners for reliability and value.</p>
						</div>
						<div className="rounded-2xl border border-neutral-200 p-5">
							<h3 className="text-lg font-semibold text-secondary-900">Build Fast UX</h3>
							<p className="mt-2 text-secondary-700">We invest in performance and accessibility for a smooth experience.</p>
						</div>
						<div className="rounded-2xl border border-neutral-200 p-5">
							<h3 className="text-lg font-semibold text-secondary-900">Fulfill Quickly</h3>
							<p className="mt-2 text-secondary-700">We partner with efficient carriers for fast, trackable delivery.</p>
						</div>
						<div className="rounded-2xl border border-neutral-200 p-5">
							<h3 className="text-lg font-semibold text-secondary-900">Support Well</h3>
							<p className="mt-2 text-secondary-700">We offer clear policies and helpful support when you need assistance.</p>
						</div>
					</div>
				</section>

				{/* Social Proof Section */}
				<section className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
					<h2 className="text-2xl font-semibold text-secondary-950">Trusted by teams worldwide</h2>
					<p className="mt-3 text-secondary-700 leading-relaxed max-w-3xl">
						Brands and customers rely on SY Store for quality products and dependable service.
					</p>
					<div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
						<img src="/vercel.svg" alt="Vercel" className="h-8 mx-auto opacity-70" />
						<img src="/next.svg" alt="Next.js" className="h-8 mx-auto opacity-70" />
						<img src="/globe.svg" alt="Global" className="h-8 mx-auto opacity-70" />
						<img src="/window.svg" alt="Window" className="h-8 mx-auto opacity-70" />
						<img src="/file.svg" alt="File" className="h-8 mx-auto opacity-70" />
					</div>

					<div className="mt-8 grid md:grid-cols-3 gap-6">
						<blockquote className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
							<p className="text-secondary-900">“SY Store’s checkout and shipping are the smoothest we’ve used.”</p>
							<footer className="mt-3 text-sm text-secondary-600">Alex P. — Operations Lead</footer>
						</blockquote>
						<blockquote className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
							<p className="text-secondary-900">“Great products, fair prices, and support that actually helps.”</p>
							<footer className="mt-3 text-sm text-secondary-600">Jamie L. — Small Business Owner</footer>
						</blockquote>
						<blockquote className="rounded-2xl border border-neutral-200 p-5 bg-neutral-50">
							<p className="text-secondary-900">“Fast, accessible, and reliable—exactly what we look for.”</p>
							<footer className="mt-3 text-sm text-secondary-600">Priya S. — Product Designer</footer>
						</blockquote>
					</div>
				</section>

				{/* Shipping & Returns Section */}
				<section className="grid md:grid-cols-2 gap-6">
					<div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
						<h2 className="text-2xl font-semibold text-secondary-950">Shipping Information</h2>
						<p className="mt-3 text-secondary-700 leading-relaxed max-w-3xl">
							We ship quickly and keep you informed at every step—from processing to delivery.
						</p>
						<ul className="mt-4 space-y-2 text-secondary-700">
							<li><span className="font-medium text-secondary-900">Processing time:</span> Orders typically process within 1–2 business days.</li>
							<li><span className="font-medium text-secondary-900">Shipping options:</span> Standard (3–5 days) and Express (1–2 days) at checkout.</li>
							<li><span className="font-medium text-secondary-900">Tracking:</span> You'll receive a tracking link via email when your order ships.</li>
							<li><span className="font-medium text-secondary-900">International:</span> Duties/taxes may apply depending on your destination.</li>
							<li><span className="font-medium text-secondary-900">Free shipping:</span> Available on eligible orders over a set threshold.</li>
						</ul>
						<p className="mt-4 text-secondary-700">
							Questions? <Link href="/contact" className="text-primary-600 hover:underline">Reach out to our support team</Link>.
						</p>
					</div>
					<div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
						<h2 className="text-2xl font-semibold text-secondary-950">Return Policy</h2>
						<p className="mt-3 text-secondary-700 leading-relaxed max-w-3xl">
							We want you to love your purchase. If something isn’t right, we’ll make it right.
						</p>
						<ul className="mt-4 space-y-2 text-secondary-700">
							<li><span className="font-medium text-secondary-900">30-day returns:</span> Return most items within 30 days of delivery.</li>
							<li><span className="font-medium text-secondary-900">Condition:</span> Items must be unused and in original packaging.</li>
							<li><span className="font-medium text-secondary-900">Fast refunds:</span> Refunds are issued to your original payment method once inspected.</li>
							<li><span className="font-medium text-secondary-900">Easy labels:</span> Prepaid return labels available for eligible orders.</li>
						</ul>
						<p className="mt-4 text-secondary-700">
							Need help? <Link href="/contact" className="text-primary-600 hover:underline">Contact our support</Link> and we’ll assist you.
						</p>
					</div>
				</section>

				{/* Call to Action Section */}
				<section className="relative overflow-hidden rounded-2xl border border-neutral-200 p-6 shadow-sm bg-gradient-to-br from-primary-500 to-primary-600 text-white">
					<div className="relative">
						<h2 className="text-2xl md:text-3xl font-bold font-heading">Ready to discover your next favorite?</h2>
						<p className="mt-3 text-white/90 max-w-2xl">Explore our latest arrivals or get in touch—we're here to help.</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<Link href="/products" passHref>
								<Button className="bg-white text-primary-600 hover:bg-white/90">Shop Products</Button>
							</Link>
							<Link href="/contact" passHref>
								<Button variant="secondary" className="bg-primary-700 text-white hover:bg-primary-700/90 border-none">Contact Us</Button>
							</Link>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}
