import { FiBookOpen } from 'react-icons/fi'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Graphic */}
      <div className="relative flex items-center justify-center">
        {/* Graduation Cap */}
        <FiBookOpen className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-primary-600" size={28} />
        
        {/* Circle with C.I.P. text */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg className="absolute inset-0" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="30" stroke="#dc2626" strokeWidth="2" fill="none" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary-600 font-bold text-lg">C.I.P.</span>
          </div>
        </div>
        
        {/* Arc with airplanes - simplified as SVG */}
        <svg className="absolute inset-0 w-16 h-16" viewBox="0 0 64 64">
          <path 
            d="M 8 32 Q 32 20, 56 32" 
            stroke="#dc2626" 
            strokeWidth="2" 
            fill="none"
          />
          {/* Left airplane */}
          <path 
            d="M 10 28 L 14 32 L 10 36 L 12 32 Z" 
            fill="#dc2626"
          />
          {/* Right airplane */}
          <path 
            d="M 54 28 L 58 32 L 54 36 L 56 32 Z" 
            fill="#dc2626"
          />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-primary-600 font-bold text-xs tracking-tight" style={{ transform: 'rotate(-2deg)' }}>
          Study Abroad
        </span>
      </div>
    </div>
  )
}

