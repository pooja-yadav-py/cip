import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiGlobe, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi'

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
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Your Pathway to Canada <span style={{ color: '#F8D7D7' }}>Starts Here</span>
                  </h1>

                  {/* Description */}
                  <p className="text-base md:text-lg mb-4 text-white/90 leading-relaxed">
                    Welcome to Canada's first true virtual immigration law platform, led by Dr. Gautham Kolluri, RCIC. We're available 24/7 to serve you from anywhere in the world with cutting-edge technology and personalized service.
                  </p>
                  <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed">
                    Expert guidance for Express Entry, Provincial Nominee Programs, study permits, work permits, and all Canadian immigration matters - all from the comfort of your home.
                  </p>

                   {/* Call-to-Action Buttons */}
                   <div>
                     <Link
                       href="#contact"
                       className="inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
                     >
                       Schedule Consultation <FiArrowRight className="text-gray-900" size={20} />
                     </Link>
                   </div>
                </div>
                
                {/* Statistics Cards Section */}
                <div className="flex flex-nowrap gap-3 mt-6 overflow-x-auto">
                  <div className="flex items-center gap-2 bg-primary-700/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-white/10 flex-shrink-0">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <FiGlobe className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">10+</div>
                      <div className="text-xs text-white/80">Countries</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-primary-700/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-white/10 flex-shrink-0">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <FiShield className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">20+</div>
                      <div className="text-xs text-white/80">Years Experience</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-primary-700/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-white/10 flex-shrink-0">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <FiTrendingUp className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-xs text-white/80">Success Rate</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-primary-700/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-white/10 flex-shrink-0">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <FiUsers className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">4000+</div>
                      <div className="text-xs text-white/80">Clients Served</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Area - Independent (empty div for grid spacing) */}
              <div className="hidden md:block"></div>
            </div>

            {/* Image positioned absolutely - Independent from left column */}
            <div className="absolute top-0 right-0 w-full md:w-[calc(40%-1rem)] md:pl-8">
              <div className="relative w-full h-[550px]">
                <Image 
                  src="/lady-justice.png" 
                  alt="Lady Justice - Canadian Immigration Law" 
                  width={600}
                  height={550}
                  className="w-full h-[550px] object-cover rounded-3xl border-2 border-primary-800"
                  priority
                />
                
                {/* RCIC Badge Overlay - Bottom Left */}
                <div className="absolute bottom-4 -left-6 shadow-lg z-10">
                  <div className="company-experience">
                    <Image 
                      src="/CICimage.png" 
                      alt="RCIC Registered - Licensed Immigration Consultant" 
                      width={200}
                      height={100}
                      className="h-auto object-contain"
                      priority
                    />
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
