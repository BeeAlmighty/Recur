import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Problem from './components/sections/Problem';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
// import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0D0D0D] text-[#F5F0E8] overflow-x-hidden selection:bg-gold/30 selection:text-white">
      <Navbar />
      
      {/* The flex-grow utility ensures the main content pushes the footer 
        to the bottom of the screen on very short pages (though a landing 
        page this long won't have that issue, it's a good layout habit). 
      */}
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Problem />
        <HowItWorks />
        <Features />
        <Pricing />
        {/* <Testimonials /> */}
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}