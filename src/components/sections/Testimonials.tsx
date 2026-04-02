import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { testimonialsData } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle testimonials every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Trusted by <span className="text-[var(--color-gold)] italic">Top Restaurants</span>
          </h2>
        </div>

        <GlassCard className="relative p-8 md:p-16 min-h-[350px] flex flex-col justify-center">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-[var(--color-gold)]/10 -rotate-12" />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-xl md:text-3xl font-display italic text-white leading-relaxed mb-10">
                  "{testimonialsData[currentIndex].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] font-bold text-lg shadow-[0_0_15px_rgba(201,168,76,0.2)]">
                    {testimonialsData[currentIndex].initials}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">
                      {testimonialsData[currentIndex].author}
                    </div>
                    <div className="text-sm text-[#A09880]">
                      {testimonialsData[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-[var(--color-gold)] w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
