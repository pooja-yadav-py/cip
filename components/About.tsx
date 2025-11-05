import { FiCheckCircle } from 'react-icons/fi'
import { FiGlobe, FiTrendingUp } from 'react-icons/fi'
import Image from 'next/image'

const benefits = [
  'Personalized attention to every case',
  'Bilingual support (English & French)',
  'Transparent pricing with no hidden fees',
  '24/7 case status updates',
]

export default function About() {
  return (
    <section id="about" className="pt-2 pb-[30px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            {/* Tagline Badge */}
            <div className="mb-4">
              <span className="bg-red-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                Canada's First True Virtual Immigration Platform
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Revolutionary 24/7 Virtual Immigration Services
            </h2>
            
            {/* Description Paragraph 1 */}
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              CIP is Canada's first true virtual immigration law platform, founded and led by Dr. Gautham Kolluri, RCIC. We've revolutionized immigration services by combining cutting-edge technology with expert legal guidance, making professional immigration services accessible 24/7 from anywhere in the world.
            </p>
            
            {/* Description Paragraph 2 */}
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              For over 20 years, Dr. Kolluri has been at the forefront of immigration innovation. Our virtual platform ensures you receive immediate support, secure document handling, and real-time case tracking - all without the need for in-person visits.
            </p>

            {/* Description Paragraph 3 */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With advanced degrees in immigration law and international education, Dr. Kolluri provides guidance from a highly qualified professional who understands both the legal complexities and the human side of immigration.
            </p>
            
            {/* Benefits List */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg font-bold">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Grid */}
          <div>
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Top Left Image */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 1</span>
                </div>
              </div>
              
              {/* Top Right Image */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 2</span>
                </div>
              </div>
              
              {/* Bottom Left Image */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 3</span>
                </div>
              </div>
              
              {/* Bottom Right Image */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 4</span>
                </div>
              </div>
            </div>

            {/* Statistics Cards Section */}
            <div className="grid grid-cols-3 gap-4">
              {/* Card 1: Countries Served */}
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-red-100 p-2 rounded-full">
                    <FiGlobe className="text-primary-600" size={20} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">80+</div>
                <div className="text-gray-600 text-xs">Countries Served</div>
              </div>

              {/* Card 2: Expert Consultants */}
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-red-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-gray-600 text-xs">Expert Consultants</div>
              </div>

              {/* Card 3: Success Rate */}
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FiTrendingUp className="text-green-600" size={20} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-gray-600 text-xs">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
