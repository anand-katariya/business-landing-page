import Navbar from "@/componets/Navbar";
import HeroSection from "@/componets/HeroSection";
import ServicesSection from "@/componets/ServicesSection";
import AboutSection from "@/componets/AboutSection";
import Testimonials from "@/componets/Testimonials";
import CTA from "@/componets/CTA";
import Footer from "@/componets/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Testimonials />  
      <CTA />
      <Footer />
    </div>
  )
}

export default Home