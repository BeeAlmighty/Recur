import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { GoldButton } from '../ui/GoldButton';
import { pricingData } from '../../data/pricing';
import { formatNaira } from '../../utils/formatCurrency';
import { cn } from '../../utils/cn';

export default function Pricing() {
  const [activeCycle, setActiveCycle] = useState(pricingData.cycles[0]);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Transparent Pricing.<br />
            <span className="text-[var(--color-gold)] italic">Infinite ROI.</span>
          </h2>
          <p className="text-[#A09880] mb-2">
            One-time setup fee of {formatNaira(pricingData.setupFee)} across all plans.
          </p>
        </div>

        {/* Animated Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center p-1.5 backdrop-blur-md bg-white/5 border border-white/10 rounded-full">
            {pricingData.cycles.map((cycle) => {
              const isActive = activeCycle.id === cycle.id;
              return (
                <button
                  key={cycle.id}
                  onClick={() => setActiveCycle(cycle)}
                  className={cn(
                    "relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300",
                    isActive ? "text-black" : "text-[#A09880] hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full shadow-[0_0_15px_rgba(201,168,76,0.4)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{cycle.label}</span>
                  {cycle.badge && (
                    <span className="absolute -top-3 -right-2 px-2 py-0.5 text-[10px] font-bold bg-[#181818] text-[var(--color-gold)] border border-[var(--color-gold)]/30 rounded-full z-20 shadow-xl">
                      {cycle.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingData.tiers.map((tier, idx) => {
            // Calculate dynamic price based on selected cycle discount
            const monthlyPrice = tier.basePrice * (1 - activeCycle.discount);
            const displayPrice = formatNaira(monthlyPrice);

            return (
              <motion.div 
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn("relative h-full", tier.isPopular && "md:-mt-8")}
              >
                <GlassCard 
                  variant={tier.isPopular ? 'featured' : 'default'}
                  className="flex flex-col h-full p-8"
                >
                  {tier.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-[#A09880] mb-8 min-h-[40px]">{tier.desc}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-display font-bold text-white">
                      {displayPrice}
                    </span>
                    <span className="text-[#A09880]"> / mo</span>
                    
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeCycle.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-[var(--color-gold)] mt-2 font-medium"
                      >
                        {activeCycle.discount > 0 ? `Billed ${activeCycle.label.toLowerCase()}` : "Billed monthly"}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <ul className="flex-1 space-y-4 mb-8">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#F5F0E8]">
                        <Check className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <GoldButton variant={tier.isPopular ? 'primary' : 'outline'} className="w-full">
                    Get Started
                  </GoldButton>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}