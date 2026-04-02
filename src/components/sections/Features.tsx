import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { featuresData } from '../../data/features';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } as const },
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[var(--color-gold)]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Everything you need to <br className="hidden md:block" />
            <span className="text-[var(--color-gold)] italic">dominate retention.</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuresData.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div key={idx} variants={cardVariants}>
                <GlassCard className="h-full p-8 transition-all duration-300 border-l-2 border-transparent hover:border-l-[var(--color-gold)] hover:bg-white/10 group">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-surface-2)] flex items-center justify-center mb-6 border border-white/5 transition-colors duration-300 group-hover:bg-[var(--color-gold)]/10 group-hover:border-[var(--color-gold)]/30">
                    <Icon className="w-6 h-6 text-[#A09880] group-hover:text-[var(--color-gold)] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-[#A09880] leading-relaxed text-sm">{feature.desc}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
