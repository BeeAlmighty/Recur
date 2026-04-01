import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { useActiveSection } from '../../hooks/useActiveSection';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['how-it-works', 'features', 'pricing', 'faq']);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Ultra-smooth easing curve for premium feel
  const customEase = [0.16, 1, 0.3, 1] as const;

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.4, ease: customEase }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: customEase,
        staggerChildren: 0.08, 
        delayChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: customEase } }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "backdrop-blur-xl bg-[#0D0D0D]/70 border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Premium Logo with Gradient */}
<div 
  className="flex items-center gap-3 cursor-pointer group" 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <img 
    src="/logo.svg" 
    alt="RECUR Logo" 
    className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" 
  />
  {/* <div className="text-2xl font-display font-extrabold tracking-tight text-white">
    RE<span className="text-[var(--color-gold)]">CUR</span>
  </div> */}
</div>

        {/* Desktop Nav - Animated Underlines */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
  const isActive = activeSection === link.href.replace('#', '');
  
  return (
    <button
      key={link.name}
      onClick={() => scrollToSection(link.href)}
      className={cn(
        "group relative text-sm font-medium transition-colors duration-300",
        isActive ? "text-[var(--color-gold)]" : "text-[#A09880] hover:text-white"
      )}
    >
      {link.name}
      {/* Animated Bottom Border */}
      <span className={cn(
        "absolute -bottom-1.5 left-0 h-[2px] bg-[var(--color-gold)] transition-all duration-300 shadow-[0_0_8px_rgba(201,168,76,0.6)]",
        isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
      )} />
    </button>
  );
})}
          
          {/* Glowing CTA Button */}
          <button 
            onClick={() => scrollToSection('#pricing')}
            className="text-sm font-semibold text-black bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:scale-105 active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white relative z-50 p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className="text-[var(--color-gold)]" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-0 left-0 w-full h-screen backdrop-blur-2xl bg-[#0D0D0D]/95 border-b border-white/10 pt-28 px-8 flex flex-col gap-8 md:hidden origin-top"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                variants={linkVariants}
                onClick={() => scrollToSection(link.href)}
                className="group flex items-center text-3xl font-display font-semibold text-left text-white transition-all duration-300"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-3 group-hover:text-[var(--color-gold)]">
                  {link.name}
                </span>
              </motion.button>
            ))}
            
            <motion.button 
              variants={linkVariants}
              onClick={() => scrollToSection('#pricing')}
              className="mt-8 text-lg font-bold text-black bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] px-8 py-4 rounded-full shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-transform duration-300 active:scale-95"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}