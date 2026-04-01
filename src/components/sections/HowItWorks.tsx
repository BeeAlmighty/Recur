import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "QR Data Capture",
      desc: "Customers scan a branded QR code at their table to join your VIP list, instantly building your secure database."
    },
    {
      number: "02",
      title: "Spend Tracking",
      desc: "Every time they visit, their bill is securely logged, automatically updating their lifetime spend profile in the Database."
    },
    {
      number: "03",
      title: "Tier Unlocks",
      desc: "As they spend more, the system automatically upgrades them to new Loyalty Tiers (e.g., Gold Status), triggering exclusive WhatsApp rewards."
    },
    {
      number: "04",
      title: "Automated Growth",
      desc: "Alongside loyalty, the system runs autopilot birthday campaigns, 30-day win-backs, and Google Review requests."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            From Walk-in to <span className="text-[var(--color-gold)] italic">Loyal Regular</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#A09880] max-w-2xl mx-auto"
          >
            A completely hands-off, 4-step retention engine working in the background while you focus on the food.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6"
        >
          {/* Horizontal connecting line for Desktop */}
          <div className="hidden md:block absolute top-[20%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />

          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative flex flex-col items-center md:items-start text-center md:text-left pt-8">
              {/* Massive Background Number */}
              <div className="absolute -top-6 md:-top-10 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 text-7xl md:text-8xl font-display font-bold text-[var(--color-gold)]/10 select-none pointer-events-none -z-10">
                {step.number}
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-4 mt-4 md:mt-0">
                {step.title}
              </h3>
              <p className="text-[#A09880] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}