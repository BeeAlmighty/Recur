import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { UserX, MessageSquareOff, TrendingDown, Clock } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <UserX className="w-8 h-8 text-[var(--color-gold)]" />,
      title: 'Anonymous Walk-ins',
      desc: 'Hundreds of people eat your food every week, but you have no way to contact them once they walk out the door.',
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-[var(--color-gold)]" />,
      title: 'Blind to Your Best Spenders',
      desc: "20% of your customers drive 80% of your revenue, but without a loyalty tracker, you can't identify or reward your true VIPs.",
    },
    {
      icon: <MessageSquareOff className="w-8 h-8 text-[var(--color-gold)]" />,
      title: 'Silent Churn',
      desc: 'Customers who had a minor bad experience simply never return, and you have no automated way to win them back.',
    },
    {
      icon: <Clock className="w-8 h-8 text-[var(--color-gold)]" />,
      title: 'Manual Bottlenecks',
      desc: 'Your staff is too busy running the floor to manually calculate loyalty points, send birthday texts, or ask for reviews.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="problem" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Great food isn't enough to <br className="hidden md:block" />
            <span className="text-[var(--color-gold)] italic">guarantee loyalty anymore.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#A09880]"
          >
            Most restaurants are losing thousands of Naira in lifetime value simply because they
            lack a systematic way to stay in touch with their diners.
          </motion.p>
        </div>

        {/* Problem Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {problems.map((prob, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <GlassCard className="p-8 h-full transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  {prob.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{prob.title}</h3>
                <p className="text-[#A09880] leading-relaxed">{prob.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
