import { GoldButton } from '../ui/GoldButton';

export default function Hero() {
  const scrollToPricing = () => {
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[var(--color-gold)]/20 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-[var(--color-gold-dark)]/20 blur-[100px] animate-pulse pointer-events-none delay-1000" />
      
      {/* Subtle grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
          The #1 Loyalty Engine for Nigerian Restaurants
        </div>

        {/* Headline strictly following the blueprint */}
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
          Turn Anonymous Diners Into<br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-light)] to-[var(--color-gold-dark)] font-medium">
            High-Spending VIPs.
          </span>
        </h1>

        {/* Subheadline updated for Spend Tracking */}
        <p className="text-lg md:text-xl text-[#A09880] max-w-2xl mb-10 leading-relaxed">
          The ultimate done-for-you retention engine. Capture diner data, track every Naira they spend, and automate tiered loyalty rewards that drive predictable repeat visits.
        </p>

        {/* CTA Area */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <GoldButton onClick={scrollToPricing}>
            View Pricing Plans
          </GoldButton>
          <GoldButton variant="outline" onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
            See How It Works
          </GoldButton>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm text-[#A09880]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Automated Spend Tracking
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Custom Reward Tiers
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            WhatsApp Native
          </div>
        </div>

      </div>
    </section>
  );
}