'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HelpCircle, Search, X } from 'lucide-react'
import { useState, useMemo } from 'react'

export default function FAQPage() {
	const [searchQuery, setSearchQuery] = useState('')
	const faqs = [
		{
			question: "How long does shipping take?",
			answer: "Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days."
		},
		{
			question: "What is your return policy?",
			answer: "We offer 30-day returns on most items. Items must be unused and in original packaging."
		},
		{
			question: "How can I track my order?",
			answer: "You'll receive a tracking link via email when your order ships."
		},
		{
			question: "Do you ship internationally?",
			answer: "Yes, we ship worldwide. Duties and taxes may apply depending on your destination."
		},
		{
			question: "What payment methods do you accept?",
			answer: "We accept all major credit cards, PayPal, and bank transfers."
		},
		{
			question: "How do I cancel my order?",
			answer: "You can cancel your order within 24 hours of placing it by contacting our customer service team."
		},
		{
			question: "Do you offer customer support?",
			answer: "Yes, our customer support team is available Monday through Friday, 9am to 6pm UTC."
		},
		{
			question: "Can I modify my order after placing it?",
			answer: "Order modifications are possible within 2 hours of placement. Contact us immediately for assistance."
		}
	]

	// Filter FAQs based on search query
	const filteredFAQs = useMemo(() => {
		if (!searchQuery.trim()) {
			return faqs
		}
		
		const query = searchQuery.toLowerCase()
		return faqs.filter(faq => 
			faq.question.toLowerCase().includes(query) || 
			faq.answer.toLowerCase().includes(query)
		)
	}, [searchQuery])

	const clearSearch = () => {
		setSearchQuery('')
	}

	return (
		<div className="min-h-screen bg-neutral-50">
			<Header />

			<section className="relative -mt-20 pt-32 pb-12 overflow-hidden">
				<div className="absolute inset-0 bg-neutral-100" />
				<div className="relative sy-container">
					<div className="flex items-center gap-3 mb-4">
						<HelpCircle className="h-8 w-8 text-cyan-600" />
						<h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-secondary-950">Frequently Asked Questions</h1>
					</div>
					<p className="max-w-2xl text-secondary-700">
						Find answers to common questions about our products, shipping, returns, and more.
					</p>
				</div>
			</section>

			<main className="sy-container pb-16">
				<div className="max-w-4xl mx-auto">
					{/* Search Bar */}
					<div className="mb-8">
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Search className="h-5 w-5 text-neutral-400" />
							</div>
							<input
								type="text"
								placeholder="Search FAQs..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-10 pr-10 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white shadow-sm"
							/>
							{searchQuery && (
								<button
									onClick={clearSearch}
									className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-neutral-100 rounded-r-lg transition-colors"
								>
									<X className="h-5 w-5 text-neutral-400 hover:text-neutral-600" />
								</button>
							)}
						</div>
						{searchQuery && (
							<p className="mt-2 text-sm text-neutral-600">
								{filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} found for "{searchQuery}"
							</p>
						)}
					</div>

					<div className="space-y-6">
						{filteredFAQs.length > 0 ? (
							filteredFAQs.map((faq, index) => (
								<div key={index} className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
									<h3 className="text-lg font-semibold text-secondary-900 mb-3">{faq.question}</h3>
									<p className="text-secondary-700 leading-relaxed">{faq.answer}</p>
								</div>
							))
						) : searchQuery ? (
							<div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm text-center">
								<Search className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-secondary-900 mb-2">No results found</h3>
								<p className="text-secondary-700 mb-4">
									We couldn't find any FAQs matching "{searchQuery}". Try different keywords or browse all questions.
								</p>
								<button
									onClick={clearSearch}
									className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
								>
									<X className="h-4 w-4" />
									Clear search
								</button>
							</div>
						) : null}
					</div>
					
					<div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200 p-8 text-center">
						<h2 className="text-2xl font-bold text-secondary-950 mb-3">Still have questions?</h2>
						<p className="text-secondary-700 mb-6">
							Can't find what you're looking for? Our support team is here to help.
						</p>
						<a 
							href="/contact" 
							className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
						>
							<HelpCircle className="h-5 w-5" />
							Contact Support
						</a>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
