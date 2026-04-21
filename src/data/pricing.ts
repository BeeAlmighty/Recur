export const pricingData = {
  setupFee: 100000,
  cycles: [
    { id: 'monthly', label: 'Monthly', discount: 0 },
    { id: 'quarterly', label: 'Quarterly', discount: 0.1, badge: 'Save 10%' },
    { id: 'biannual', label: 'Biannual', discount: 0.15, badge: 'Save 15%' }, // 6 Months
    { id: 'annual', label: 'Yearly', discount: 0.25, badge: 'Save 25%' },
  ],
  tiers: [
    {
      id: 'starter',
      name: 'Starter',
      desc: 'Stop losing touch with your walk-ins. Build a digital asset you actually own.',
      basePrice: 30000,
      features: [
        'Automated Customer Capture',
        'Direct WhatsApp Broadcasts',
        'Self-Service Dashboard',
      ],
    },
    {
      id: 'growth',
      name: 'Growth',
      desc: 'Put your revenue on autopilot with smart sequences that bring customers back.',
      basePrice: 55000,
      features: [
        'Everything in Starter',
        '7-Day Birthday Celebration Sequences',
        '30-Day Automated "Win-Back" Campaigns',
        'Weekly Managed Promotions',
        'Google & Internal Review Booster',
        'Monthly Performance & ROI Tracking',
      ],
    },
    {
      id: 'elite',
      name: 'Elite',
      desc: 'The complete retention engine. Dedicated strategy meets high-level spend analytics.',
      basePrice: 75000,
      features: [
        'Everything in Growth',
        'Individual Customer Spend Tracking',
        'Custom Campaign Copywriting',
        'Multi-Location Centralized Support',
        'Quarterly Strategy Deep-Dives',
        'Priority VIP Support Line',
      ],
      isPopular: true,
    },
  ],
};
