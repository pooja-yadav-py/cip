export default function AreasOfExpertise() {
  const services = [
    'Express Entry & PNP Programs',
    'Family Sponsorship & Reunification',
    'Study Permits & PGWP Applications',
    'Business Immigration & Investor Programs'
  ]

  const statistics = [
    { number: '4000+', label: 'Clients Helped' },
    { number: '95%', label: 'Success Rate' },
    { number: '80+', label: 'Countries' }
  ]

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Icon */}
        <div className="flex items-center gap-4 mb-6">
          {/* Red Square Icon with Graduation Cap */}
          <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Areas of Expertise
          </h2>
        </div>

        {/* Services List - Two Columns */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-white text-lg">•</span>
              <span className="text-white text-lg">{service}</span>
            </div>
          ))}
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-white text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Quote Box */}
        <div className="bg-gray-800 rounded-lg p-8 md:p-10">
          <p className="text-white text-lg md:text-xl italic leading-relaxed mb-4">
            "I founded Canada's first true virtual immigration platform because I believe everyone deserves access to expert immigration services, regardless of where they are or what time it is. Technology has allowed us to serve clients 24/7 with the same quality and care as traditional services."
          </p>
          <p className="text-primary-600 text-lg font-semibold">
            - Dr. Gautham Kolluri, RCIC
          </p>
        </div>
      </div>
    </section>
  )
}
