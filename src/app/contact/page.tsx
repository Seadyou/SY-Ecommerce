'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Github, Twitter, Instagram, HelpCircle } from 'lucide-react'

export default function ContactPage() {

	return (
		<div className="min-h-screen bg-neutral-50">
			<Header />

			<section className="relative -mt-20 pt-32 pb-12 overflow-hidden">
				<div className="absolute inset-0 bg-neutral-100" />
				<div className="relative sy-container">
					<h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-secondary-950">Contact Us</h1>
					<p className="mt-3 max-w-2xl text-secondary-700">
						We’re here to help. Send us a message and our team will get back to you.
					</p>
				</div>
			</section>

			<main className="sy-container pb-16">
				<section className="grid md:grid-cols-5 gap-8">
					{/* Form */}
					<div className="md:col-span-3 bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
						<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-secondary-900">Name</label>
								<input id="name" name="name" type="text" className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Your name" required />
							</div>
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-secondary-900">Email</label>
									<input id="email" name="email" type="email" className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="you@example.com" required />
								</div>
								<div>
									<label htmlFor="subject" className="block text-sm font-medium text-secondary-900">Subject</label>
									<input id="subject" name="subject" type="text" className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="How can we help?" />
								</div>
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium text-secondary-900">Message</label>
								<textarea id="message" name="message" rows={6} className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Write your message..." required />
							</div>
							<div className="flex items-center justify-between">
								<label className="inline-flex items-center gap-2 text-sm text-secondary-700">
									<input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
									<span>Send me a copy</span>
								</label>
								<Button type="submit" className="bg-primary-600 text-white hover:bg-primary-600/90">Send Message</Button>
							</div>
						</form>
					</div>

					{/* Sidebar Info */}
					<aside className="md:col-span-2 space-y-6">
						<div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
							<h2 className="text-lg font-semibold text-secondary-950">Contact Information</h2>
							<ul className="mt-3 space-y-2 text-secondary-700">
								<li><span className="font-medium text-secondary-900">Email:</span> support@systore.com</li>
								<li><span className="font-medium text-secondary-900">Phone:</span> +1 (555) 555‑1234</li>
								<li><span className="font-medium text-secondary-900">Hours:</span> Mon–Fri, 9am–6pm (UTC)</li>
							</ul>
						</div>
						<div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
							<h2 className="text-lg font-semibold text-secondary-950">Helpful Links</h2>
							<ul className="mt-3 space-y-2 text-primary-700">
								<li><Link href="/products" className="hover:underline">Browse Products</Link></li>
								<li><Link href="/about" className="hover:underline">About Us</Link></li>
								<li><Link href="/faq" className="hover:underline">FAQ</Link></li>
								<li><Link href="/" className="hover:underline">Home</Link></li>
							</ul>
							<p className="mt-4 text-sm font-medium text-secondary-900">Follow us</p>
							<div className="mt-2 flex items-center gap-4">
								<a href="https://x.com" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary-950 text-white hover:bg-secondary-900 transition-colors">
									<Twitter className="h-5 w-5" />
								</a>
								<a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary-950 text-white hover:bg-secondary-900 transition-colors">
									<Github className="h-5 w-5" />
								</a>
								<a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary-950 text-white hover:bg-secondary-900 transition-colors">
									<Instagram className="h-5 w-5" />
								</a>
							</div>
						</div>
					</aside>
				</section>
			</main>

			{/* Floating Help Button */}
			<Link
				href="/faq"
				className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-lg hover:bg-neutral-50 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 border border-neutral-200 transition-colors"
			>
				<HelpCircle className="h-5 w-5 text-cyan-600" />
				<span className="font-semibold text-cyan-600">FAQ</span>
			</Link>

			<Footer />
		</div>
	)
}
