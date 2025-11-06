import { FiCheckCircle } from 'react-icons/fi'

const benefits = [
  'Personalized attention to every case',
  'Bilingual support (English & French)',
  'Transparent pricing with no hidden fees',
  '24/7 case status updates',
]

export default function About() {
  return (
    <section id="about" className="pt-16 pb-[30px] bg-white">
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
            {/* Our Team Heading */}
            <div className="mb-6 text-center">
              <span className="inline-block bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Our Team
              </span>
            </div>
            
            {/* Image Grid - 6 images in 2 columns */}
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 1</span>
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 2</span>
                </div>
              </div>
              
              {/* Image 3 */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 3</span>
                </div>
              </div>
              
              {/* Image 4 */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 4</span>
                </div>
              </div>
              
              {/* Image 5 */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 5</span>
                </div>
              </div>
              
              {/* Image 6 */}
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Professional Image 6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
