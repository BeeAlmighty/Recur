import { pricingData } from '../../data/pricing';
import { PricingCard } from './PricingCard';
import { SectionTag } from '../ui/SectionTag';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <SectionTag className="mb-6">Investment Plans</SectionTag>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Transparent Pricing.<br />
            <span className="text-[var(--color-gold)] italic">Infinite ROI.</span>
          </h2>
          <p className="text-[#A09880] max-w-xl mx-auto">
            All plans include a one-time ₦200,000 setup fee. Choose the billing cycle that fits your cash flow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {pricingData.tiers.map((tier, idx) => (
            <PricingCard key={tier.id} tier={tier} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}