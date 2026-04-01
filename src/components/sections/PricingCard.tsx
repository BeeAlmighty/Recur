import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { GoldButton } from '../ui/GoldButton';
import { Badge } from '../ui/Badge';
import { pricingData } from '../../data/pricing';
import { formatNaira } from '../../utils/formatCurrency';
import { cn } from '../../utils/cn';

interface PricingCardProps {
  tier: typeof pricingData.tiers[0];
  index: number;
}

export function PricingCard({ tier, index }: PricingCardProps) {
  const [activeCycle, setActiveCycle] = useState(pricingData.cycles[0]);
    const handleGetStarted = () => {
        const phoneNumber = "2348103157367";
    
    // Construct the dynamic message
    const message = `Hello Moses! I'm interested in the *${tier.name}* plan with *${activeCycle.label}* billing for my restaurant. Can we discuss the 5-day setup?`;
    
    // Encode the message for a URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    };
  const monthlyPrice = tier.basePrice * (1 - activeCycle.discount);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn("relative h-full", tier.isPopular && "lg:-mt-6")}
    >
      <GlassCard 
        variant={tier.isPopular ? 'featured' : 'default'}
        className="flex flex-col h-full p-6 md:p-8 relative"
      >
        {tier.isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-max">
                <Badge variant="gold">Most Popular</Badge>
            </div>
        )}

        <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-sm text-[#A09880] mb-6 min-h-[40px]">{tier.desc}</p>
        
        {/* Local Toggle for this specific card */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-white/5 border border-white/10 rounded-xl mb-8">
          {pricingData.cycles.map((cycle) => {
            const isActive = activeCycle.id === cycle.id;
            return (
              <button
                key={cycle.id}
                onClick={() => setActiveCycle(cycle)}
                className={cn(
                    "relative py-2 px-1 text-[9px] md:text-[10px] font-bold uppercase tracking-tighter z-20 rounded-lg transition-all",
                    isActive ? "text-black" : "text-[#A09880] hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId={`active-pill-${tier.id}`} // Unique ID per card
                    className="absolute inset-0 bg-[var(--color-gold)] rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cycle.label.substring(0, 3)}</span>
              </button>
            );
          })}
        </div>

        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCycle.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-baseline gap-1"
            >
              <span className="text-4xl font-display font-bold text-white">
                {formatNaira(monthlyPrice)}
              </span>
              <span className="text-[#A09880] text-sm">/mo</span>
            </motion.div>
          </AnimatePresence>
          {activeCycle.discount > 0 && (
            <div className="text-[10px] text-[var(--color-gold)] font-bold uppercase mt-1">
              Billed {activeCycle.label} (Save {activeCycle.discount * 100}%)
            </div>
          )}
        </div>

        <ul className="flex-1 space-y-3 mb-8">
          {tier.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#F5F0E8]">
              <Check className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <span className="leading-tight">{feat}</span>
            </li>
          ))}
        </ul>

        <GoldButton onClick={handleGetStarted} variant={tier.isPopular ? 'primary' : 'outline'} className="w-full">
          Get Started
        </GoldButton>
      </GlassCard>
    </motion.div>
  );
}