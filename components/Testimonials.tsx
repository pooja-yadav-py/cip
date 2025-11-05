const testimonials = [
  {
    achievementColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    text: 'The team made our PR application process stress-free. They were professional, responsive, and kept us informed every step of the way. Highly recommend!',
    rating: 5,
  },
  {
    achievementColor: 'text-green-600',
    bgColor: 'bg-green-50',
    text: 'Excellent service! They helped us navigate the Express Entry system and we received our ITA much sooner than expected. Thank you for your expertise!',
    rating: 5,
  },
  {
    achievementColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    text: 'Outstanding support throughout our family sponsorship application. The team was patient, knowledgeable, and truly cared about our success.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-[30px] pb-[30px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Red Badge */}
          <div className="mb-4">
            <span className="inline-block bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Client Success Stories
            </span>
          </div>
          
          {/* Subheading */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who achieved their Canadian immigration goals with Dr. Kolluri's expert guidance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} p-6 rounded-xl shadow-md`}
            >
              {/* Quote */}
              <p className="text-gray-700 mb-4 text-center leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Star Rating */}
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
