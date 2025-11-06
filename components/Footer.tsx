import Link from 'next/link'
import { FiMail, FiPhone, FiFacebook, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'

// X (formerly Twitter) icon component
const XIcon = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <h3 className="text-white text-xl font-bold mb-2">CIP * Dr. Gautham Kolluri, RCIC</h3>
            <p className="text-white/80 text-sm mb-2">Canada's First Virtual Immigration Platform - 24/7</p>
            <p className="mb-4 text-white/70">
              Canada's first true virtual immigration law platform, led by Dr. Gautham Kolluri, RCIC. We're dedicated to helping individuals and families navigate the Canadian immigration system with expert guidance available 24/7 from anywhere in the world.
            </p>
            <div className="mb-4">
              <h4 className="text-primary-400 font-semibold mb-3">Connect With Us</h4>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.facebook.com/CIP.StudyAbroad" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="Facebook"
                >
                  <FiFacebook size={20} className="text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/gautham.kolluri.cip/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="Instagram"
                >
                  <FiInstagram size={20} className="text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/cipstudyabroad/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} className="text-white" />
                </a>
                <a 
                  href="https://www.youtube.com/@cipstuydabroad" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="YouTube"
                >
                  <FiYoutube size={20} className="text-white" />
                </a>
                <a 
                  href="https://x.com/Gauthamckolluri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-primary-400 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-primary-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-primary-400 transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-primary-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary-400 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary-400 font-semibold mb-4">Contact Information</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FiPhone size={18} />
                  <a href="tel:+16478335257" className="hover:text-primary-400 transition">
                    +1 (647) 833-5257
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FiMail size={18} />
                  <a href="mailto:info@cipstudyabroad.com" className="hover:text-primary-400 transition">
                    info@cipstudyabroad.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CIP * Dr. Gautham Kolluri, RCIC - Canada Immigration & Study Abroad Experts. All rights reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-primary-400 transition mr-4">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-400 transition">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

