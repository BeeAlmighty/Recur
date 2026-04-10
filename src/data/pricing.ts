export const pricingData = {
  setupFee: 150000,
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
      desc: 'Essential automated retention to turn walk-ins into predictable regulars.',
      basePrice: 85000,
      features: [
        'Automated Database Building',
        'Multi-channel SMS & Email Outreach',
        'Weekly Promotional Campaigns',
        '7-Day Birthday Automation Sequences',
        '30-Day Automated Win-Backs',
        'Monthly ROI & Performance Report',
        'Google and Internal Review system',
      ],
    },
    {
      id: 'growth',
      name: 'Growth',
      desc: 'The ultimate VIP engine with spend tracking, custom strategy, and WhatsApp integration.',
      basePrice: 95000,
      features: [
        'Everything in Starter',
        'Customer Spend Tracking (ROI focus)',
        'Native WhatsApp Promotions',
        'Custom Campaign Copywriting',
        // 'Multi-Location Dashboard Support',
        'Quarterly Deep-Dive Reporting',
        'Priority WhatsApp Support',
      ],
      isPopular: true,
    },
  ],
};
