import { motion } from 'framer-motion';
import { GoldButton } from '../ui/GoldButton';

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Animated Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] rounded-full bg-[var(--color-gold)]/10 blur-[100px] pointer-events-none animate-pulse" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Stop losing past customers to <span className="text-[var(--color-gold)] italic">silence.</span>
          </h2>
          <p className="text-xl text-[#A09880] mb-10 max-w-2xl mx-auto">
            Join the top-tier Nigerian restaurants using RECUR to build an automated, profitable database. We build it, you profit.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GoldButton onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Your 7-Day Build
            </GoldButton>
            <GoldButton variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Top
            </GoldButton>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Border Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
    </section>
  );
}