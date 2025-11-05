import { FiPhone, FiMail, FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'

// X (formerly Twitter) icon component
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

export default function TopBar() {
  return (
    <>
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-sm">
            {/* Left Section - Contact Information */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a 
                href="tel:+16478335257" 
                className="flex items-center gap-2 hover:text-primary-400 transition"
              >
                <FiPhone size={16} />
                <span>+1 (647) 833-5257</span>
              </a>
              <a 
                href="mailto:info@cipstudyabroad.com" 
                className="flex items-center gap-2 hover:text-primary-400 transition"
              >
                <FiMail size={16} />
                <span>info@cipstudyabroad.com</span>
              </a>
            </div>

            {/* Right Section - Social Media */}
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-primary-400">Connect With Us:</h3>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.facebook.com/CIP.StudyAbroad" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="Facebook"
                >
                  <FiFacebook size={18} className="text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/gautham.kolluri.cip/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="Instagram"
                >
                  <FiInstagram size={18} className="text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/cipstudyabroad/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} className="text-white" />
                </a>
                <a 
                  href="https://www.youtube.com/@cipstuydabroad" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="YouTube"
                >
                  <FiYoutube size={18} className="text-white" />
                </a>
                <a 
                  href="https://x.com/Gauthamckolluri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-700 bg-gray-800 flex items-center justify-center hover:border-primary-400 transition"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon size={18} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Red separator line */}
      <div className="h-0.5 bg-primary-600"></div>
    </>
  )
}
