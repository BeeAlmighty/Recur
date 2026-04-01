export const pricingData = {
  setupFee: 200000,
  cycles: [
    { id: 'monthly', label: 'Monthly', discount: 0 },
    { id: 'quarterly', label: 'Quarterly', discount: 0.10, badge: 'Save 10%' },
    { id: 'biannual', label: 'Biannual', discount: 0.20, badge: 'Save 20%' }, // 6 Months
    { id: 'annual', label: 'Yearly', discount: 0.33, badge: 'Save 33%' }
  ],
  tiers: [
    {
      id: 'starter',
      name: 'Starter',
      desc: 'Basic database build and essential birthday automations.',
      basePrice: 100000,
      features: ['Database management', 'Birthday campaigns', '1 Promo campaign / month', 'Google review requests'],
    },
    {
      id: 'growth',
      name: 'Growth',
      desc: 'The complete automated retention engine for serious growth.',
      basePrice: 150000,
      features: ['Everything in Starter', 'Weekly promo campaigns', 'Custom Loyalty Tiers (Gold, Platinum)', '30-day win-back sequences', 'Monthly performance report', 'Priority support'],
      isPopular: true
    },
    {
      id: 'elite',
      name: 'Elite',
      desc: 'For multi-location restaurants needing custom strategy.',
      basePrice: 200000,
      features: ['Everything in Growth', 'Custom campaign copywriting', 'Bi-weekly strategy calls', 'Multi-location support', 'Quarterly deep-dive reporting', 'Monthly SMS/Email credits included', 'WhatsApp promotion'],
    }
  ]
};