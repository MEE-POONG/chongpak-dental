import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Booking from '@/components/sections/Booking';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Reviews from '@/components/sections/Reviews';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Booking />
        <CTA />
        <Contact />
        <BackToTop/>
      </main>
      <Footer />
    </div>
  );
}
