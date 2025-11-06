'use client'

export default function VideoSection() {
  // Replace this with your actual YouTube video ID
  // For example, if the URL is https://www.youtube.com/watch?v=VIDEO_ID, use VIDEO_ID
  const youtubeVideoId = '' // Add your YouTube video ID here

  const qualifications = [
    'Regulated Canadian Immigration Consultant (RCIC)',
    'PhD in International Education & Immigration Law',
    'Founder of Canada\'s First Virtual Immigration Platform',
    '20+ Years of Immigration Consulting Experience',
    'Member of College of Immigration and Citizenship Consultants'
  ]

  const services = [
    'Express Entry & PNP Programs',
    'Family Sponsorship & Reunification',
    'Study Permits & PGWP Applications',
    'Business Immigration & Investor Programs'
  ]

  return (
    <section className="bg-gray-900 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          {/* Red Badge */}
          <div className="mb-3 md:mb-4">
            <span className="inline-block bg-primary-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold uppercase">
              Meet Our Founder & Innovator
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
            Dr. Gautham Kolluri, RCIC
          </h2>
          
          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed px-2">
            Pioneering Canada's first 24/7 virtual immigration platform - bringing expert immigration services to your fingertips, anytime, anywhere
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left Column - Video + Welcome Message */}
          <div>
            {/* Video Player */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl mb-6">
              {youtubeVideoId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title="Welcome Message from Dr. Kolluri"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary-700 transition">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white/60 text-xs">
                      Add your YouTube video ID to VideoSection.tsx
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Welcome Message */}
            <div className="text-white">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3">
                Welcome Message from Dr. Kolluri
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-4 md:mb-6">
                Learn about our approach to Canadian immigration and how we can help you achieve your dreams
              </p>
            </div>
          </div>

          {/* Right Column - All Content Stacked */}
          <div className="text-white space-y-6 md:space-y-8">
            {/* Credentials & Qualifications */}
            <div>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                {/* Red Square Icon with Diploma */}
                <div className="bg-primary-600 w-10 h-10 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v9M12 14l-9-5M12 14l9-5" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Credentials & Qualifications
                </h3>
              </div>

              {/* Qualifications List */}
              <ul className="space-y-3 md:space-y-4">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    {/* Red Checkmark Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-primary-600 flex items-center justify-center bg-transparent">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm md:text-base text-white leading-relaxed">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas of Expertise */}
            <div>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                {/* Red Square Icon with Graduation Cap */}
                <div className="bg-primary-600 w-10 h-10 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Areas of Expertise
                </h3>
              </div>

              {/* Services List - 2 columns with bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-lg md:text-xl font-bold mt-0.5">•</span>
                    <span className="text-white text-sm md:text-base leading-relaxed">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section - Full Width */}
        <div className="mt-6 md:mt-8">
          <div className="bg-gray-800 rounded-lg p-4 md:p-6 lg:p-8 max-w-4xl mx-auto">
            <p className="text-white text-sm md:text-base lg:text-lg italic leading-relaxed mb-3 md:mb-4 text-center">
              "I founded Canada's first true virtual immigration platform because I believe everyone deserves access to expert immigration services, regardless of where they are or what time it is. Technology has allowed us to serve clients 24/7 with the same quality and care as traditional services."
            </p>
            <p className="text-primary-600 text-sm md:text-base lg:text-lg font-semibold text-center">
              - Dr. Gautham Kolluri, RCIC
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
