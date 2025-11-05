import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiShield, FiTrendingUp, FiUsers, FiCheckCircle } from 'react-icons/fi'

export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-[70px] md:pb-24 relative z-10">
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Content - Text and Statistics */}
              <div className="md:col-span-2 flex flex-col">
                {/* Text Content Section */}
                <div>
                  {/* Tagline Badge */}
                  <div className="mb-6">
                    <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                      First True Virtual Immigration Platform - Available 24/7
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Your Pathway to Canada <span style={{ color: '#F8D7D7' }}>Starts Here</span>
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl mb-4 text-white/90 leading-relaxed">
                    Welcome to Canada's first true virtual immigration law platform, led by Dr. Gautham Kolluri, RCIC. We're available 24/7 to serve you from anywhere in the world with cutting-edge technology and personalized service.
                  </p>
                  <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                    Expert guidance for Express Entry, Provincial Nominee Programs, study permits, work permits, and all Canadian immigration matters - all from the comfort of your home.
                  </p>

                   {/* Call-to-Action Buttons */}
                   <div className="flex flex-col sm:flex-row gap-4">
                     <Link
                       href="#contact"
                       className="bg-white text-primary-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
                     >
                       Schedule Consultation <FiArrowRight />
                     </Link>
                   </div>
                </div>
                
              {/* Statistics Cards Section */}
              <div className="flex gap-4 mt-6">
                  <div className="flex items-center gap-3 bg-primary-700/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/10">
                    <div className="bg-white/10 p-2.5 rounded-lg">
                      <FiShield className="text-white" size={28} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">20+</div>
                      <div className="text-sm text-white/80">Years Experience</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-primary-700/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/10">
                    <div className="bg-white/10 p-2.5 rounded-lg">
                      <FiTrendingUp className="text-white" size={28} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">95%</div>
                      <div className="text-sm text-white/80">Success Rate</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-primary-700/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/10">
                    <div className="bg-white/10 p-2.5 rounded-lg">
                      <FiUsers className="text-white" size={28} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">4000+</div>
                      <div className="text-sm text-white/80">Clients Served</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Area - Independent (empty div for grid spacing) */}
              <div className="hidden md:block"></div>
            </div>

            {/* Image positioned absolutely - Independent from left column */}
            <div className="absolute top-0 right-0 w-full md:w-[calc(33.33%-1rem)] md:pl-8">
              <div className="relative w-full h-[450px]">
                <Image 
                  src="/lady-justice.png" 
                  alt="Lady Justice - Canadian Immigration Law" 
                  width={560}
                  height={450}
                  className="w-full h-[450px] object-cover rounded-3xl border-2 border-primary-800"
                  priority
                />
                
                {/* RCIC Badge Overlay - Bottom Left */}
                <div className="absolute bottom-4 -left-6 bg-white rounded-lg px-4 py-3 flex items-center gap-3 shadow-lg z-10">
                  <div className="bg-green-600 rounded-full p-2">
                    <FiShield className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">RCIC Registered</div>
                    <div className="text-xs text-gray-700">Licensed Immigration Consultant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
