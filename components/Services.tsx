'use client'

import { FiBriefcase, FiUsers, FiFileText, FiHome, FiTrendingUp, FiHeart } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

const services = [
  {
    icon: FiBriefcase,
    iconBg: 'bg-red-500',
    title: 'Express Entry',
    description: 'Federal Skilled Worker, Canadian Experience Class, and Federal Skilled Trades programs for permanent residence.',
  },
  {
    icon: FiHome,
    iconBg: 'bg-blue-500',
    title: 'Provincial Nominee Programs',
    description: 'Navigate provincial immigration streams across all Canadian provinces and territories.',
  },
  {
    icon: FiBriefcase,
    iconBg: 'bg-purple-500',
    title: 'Work Permits',
    description: 'LMIA-based work permits, open work permits, and intra-company transfers to work in Canada.',
  },
  {
    icon: FaGraduationCap,
    iconBg: 'bg-orange-500',
    title: 'Study Permits',
    description: 'Study permit applications, extensions, and post-graduation work permits for international students.',
  },
  {
    icon: FiHeart,
    iconBg: 'bg-pink-500',
    title: 'Family Sponsorship',
    description: 'Sponsor your spouse, parents, grandparents, or dependent children to join you in Canada.',
  },
  {
    icon: FiFileText,
    iconBg: 'bg-green-500',
    title: 'Citizenship Applications',
    description: 'Complete support for Canadian citizenship applications and renunciation processes.',
  },
  {
    icon: FiUsers,
    iconBg: 'bg-indigo-500',
    title: 'Refugee & Asylum Claims',
    description: 'Compassionate representation for refugee claims and humanitarian applications.',
  },
  {
    icon: FiTrendingUp,
    iconBg: 'bg-teal-500',
    title: 'Business Immigration',
    description: 'Start-up visa, entrepreneur programs, and investor immigration pathways to Canada.',
  },
]

export default function Services() {
  return (
    <section id="services" className="pt-8 pb-[30px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Main heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 whitespace-nowrap">
            Comprehensive Canadian Immigration Solutions at your finger tips
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            From temporary visas to permanent residence and citizenship, we provide expert legal services for every stage of your Canadian immigration journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Colored icon square */}
                <div className={`${service.iconBg} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

