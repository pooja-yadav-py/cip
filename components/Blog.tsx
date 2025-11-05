import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'

const blogPosts = [
  {
    image: '/blog-1.jpg',
    label: 'Latest',
    labelColor: 'bg-red-500',
    date: 'March 15, 2025',
    category: 'Express Entry',
    title: 'Express Entry Draw: Canada Invites 4,500 Candidates',
    description: 'The latest Express Entry draw saw CRS scores drop to 486, welcoming skilled workers across all programs including FSW and CEC.',
  },
  {
    image: '/blog-2.jpg',
    label: 'Update',
    labelColor: 'bg-blue-500',
    date: 'March 12, 2025',
    category: 'Provincial Nominee',
    title: 'New PNP Streams Open in British Columbia',
    description: 'BC announces new tech worker and healthcare professional streams with lower requirements for international graduates.',
  },
  {
    image: '/blog-3.jpg',
    label: 'Important',
    labelColor: 'bg-yellow-400',
    labelTextColor: 'text-gray-900',
    date: 'March 10, 2025',
    category: 'Study Permits',
    title: 'PGWP Extension Rules: What Students Need to Know',
    description: 'Important updates on Post-Graduation Work Permit extension eligibility and application requirements for international students.',
  },
  {
    image: '/blog-4.jpg',
    label: 'Good News',
    labelColor: 'bg-green-500',
    date: 'March 8, 2025',
    category: 'Family Sponsorship',
    title: 'Family Sponsorship Processing Times Reduced',
    description: 'IRCC announces faster processing times for spousal and dependent child sponsorship applications.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="pt-[30px] pb-[30px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Red Badge */}
          <div className="mb-4">
            <span className="inline-block bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 mx-auto w-fit">
              Weekly Updates <span className="text-xs">↑</span>
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Immigration News
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest updates on Canadian immigration policies, programs, and opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image with Label */}
              <div className="relative h-48 bg-gray-200">
                <div className="absolute top-4 left-4 z-10">
                  <span className={`${post.labelColor} ${post.labelTextColor || 'text-white'} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {post.label}
                  </span>
                </div>
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Blog Image {index + 1}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Date & Category */}
                <div className="text-sm text-gray-500 mb-3">
                  {post.date} • {post.category}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                
                {/* Description */}
                {post.description && (
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                )}
                
                {/* Read More Link */}
                <Link 
                  href="#" 
                  className="text-primary-600 font-medium hover:text-primary-700 transition inline-flex items-center gap-2"
                >
                  Read More <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

