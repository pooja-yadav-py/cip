import Link from 'next/link'
import { FiTrendingUp } from 'react-icons/fi'

export default function CTASection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Start Your Canadian<br />
          Immigration Journey?
        </h2>
        
        {/* Body Text */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Schedule your free consultation today. Let's discuss your case and create a personalized strategy for your success in Canada.
        </p>
        
        {/* CTA Button */}
        <div className="mb-8">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
          >
            Get Started
            <FiTrendingUp className="text-gray-900" size={20} />
          </Link>
        </div>
        
        {/* Disclaimer Text */}
        <p className="text-sm md:text-base text-white/80">
          No obligation. Completely confidential. Available in English and French.
        </p>
      </div>
    </section>
  )
}

