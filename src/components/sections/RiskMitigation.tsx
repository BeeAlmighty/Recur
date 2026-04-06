import { ShieldCheck, Server, RefreshCcw, FileText } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionTag } from '../ui/SectionTag';

export default function RiskMitigation() {
  const protections = [
    {
      title: 'The 90-Day Pilot',
      desc: 'Experience the full Growth engine with a 10% discount for 3 months. No long-term commitment required during the proof-of-concept phase.',
      icon: <RefreshCcw className="text-[var(--color-gold)]" size={24} />,
    },
    {
      title: 'The Performance Refund',
      desc: 'Our results are backed by an SLA. If we miss our pre-agreed growth targets in the first 90 days, we refund 50% of your setup fee.',
      icon: <ShieldCheck className="text-[var(--color-gold)]" size={24} />,
    },
    {
      title: 'Zero Vendor Lock-in',
      desc: 'The entire engine is built on your own infrastructure. You maintain 100% ownership and control of your database from day one.',
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
              Built on Your Terms. <br />
              <span className="text-[var(--color-gold)] italic">Guaranteed ROI.</span>
            </h2>
            <p className="text-[#A09880] text-lg mb-8 leading-relaxed">
              We don't believe in "black box" software. We build your retention engine directly on
              your systems, ensuring you have total control over your most valuable asset: your
              customer data.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-[var(--color-gold)]/20">
                  <FileText className="text-[var(--color-gold)]" size={24} />
                </div>
                <h4 className="text-white font-bold">The RECUR Performance SLA</h4>
              </div>
              <p className="text-sm text-[#A09880] leading-relaxed">
                Before deployment, we sign a private <b>Service Level Agreement</b> defining the
                specific growth targets for your floor. If those targets aren't met, 50% of your
                setup fee is returned.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {protections.map((item, i) => (
              <GlassCard
                key={i}
                className="p-6 border-white/5 hover:border-[var(--color-gold)]/20 transition-all"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h5 className="text-white font-bold mb-1">{item.title}</h5>
                    <p className="text-sm text-[#A09880]">{item.desc}</p>
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
