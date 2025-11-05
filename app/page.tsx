import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import VideoSection from '@/components/VideoSection'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <VideoSection />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  )
}

