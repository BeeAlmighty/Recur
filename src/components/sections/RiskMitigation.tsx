import { ShieldCheck, Server, RefreshCcw, Zap } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionTag } from '../ui/SectionTag';

export default function RiskMitigation() {
  const protections = [
    {
      title: '30-Day Free Trial',
      desc: 'Experience the full Growth engine completely free for 30 days. Deploy on your systems and see the impact on your retention metrics before committing.',
      icon: <RefreshCcw className="text-[var(--color-gold)]" size={24} />,
    },
    {
      title: 'Zero Vendor Lock-in',
      desc: 'The entire engine is built on your own infrastructure. You maintain 100% ownership and control of your database and logic from day one.',
      icon: <Server className="text-[var(--color-gold)]" size={24} />,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTag className="mb-6">Risk Mitigation</SectionTag>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              Try it. Proof it. <br />
              <span className="text-[var(--color-gold)] italic">Then Scale it.</span>
            </h2>
            <p className="text-[#A09880] text-lg mb-8 leading-relaxed">
              We eliminated the risk by moving the "Proof of Concept" to our dime. Build your
              retention engine on your own systems with zero upfront software costs for the first
              month.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-[var(--color-gold)]/20">
                  <Zap className="text-[var(--color-gold)]" size={24} />
                </div>
                <h4 className="text-white font-bold">Instant Deployment</h4>
              </div>
              <p className="text-sm text-[#A09880] leading-relaxed">
                Your 30 day trial begins as soon as we connect to your system. If you do not see a
                clear increase in customer value during the first month, you can cancel at any time
                and keep all of your data.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {protections.map((item, i) => (
              <GlassCard
                key={i}
                className="p-8 border-white/5 hover:border-[var(--color-gold)]/20 transition-all"
              >
                <div className="flex gap-6">
                  <div className="shrink-0 p-3 rounded-xl bg-white/5">{item.icon}</div>
                  <div>
                    <h5 className="text-white text-xl font-bold mb-2">{item.title}</h5>
                    <p className="text-[#A09880] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
