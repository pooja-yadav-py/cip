'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md border-b-2 border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[100px] items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/Ciplogo.png" 
                alt="CIP Logo" 
                width={150} 
                height={60}
                className="h-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link href="/" className="text-gray-700 hover:text-primary-700 px-4 py-2 rounded-md hover:bg-primary-50 font-medium transition relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-primary-700 px-4 py-2 rounded-md hover:bg-primary-50 font-medium transition relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary-700 px-4 py-2 rounded-md hover:bg-primary-50 font-medium transition relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary-700 px-4 py-2 rounded-md hover:bg-primary-50 font-medium transition relative group">
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="#contact" 
              className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 font-medium transition shadow-md hover:shadow-lg ml-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-700"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-primary-200">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#testimonials" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

