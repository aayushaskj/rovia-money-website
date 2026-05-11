// Registry of all tools available at /tools

export const toolCategories = [
  { id: 'tax',        label: 'Tax & Compliance' },
  { id: 'planning',   label: 'Planning & Decisions' },
  { id: 'fx',         label: 'FX & Repatriation' },
  { id: 'risk',       label: 'Risk & Portfolio' },
];

export const tools = [
  // ── Tax & Compliance ──────────────────────────────────────────────────────
  {
    slug: 'ltcg-vs-stcg',
    title: 'LTCG vs STCG Hold Calculator',
    tagline: 'See exactly how many days until 20% LTCG vs 30% STCG — and the rupee difference.',
    category: 'tax',
    icon: '📅',
  },
  {
    slug: 'perquisite-tax',
    title: 'RSU Perquisite Tax Estimator',
    tagline: 'Calculate the income-tax on vest-day perquisite value before you plan a sale.',
    category: 'tax',
    icon: '🧾',
  },
  {
    slug: 'form-67',
    title: 'Form 67 / FTC Calculator',
    tagline: 'Estimate the US tax withheld, Form 67 FTC you can claim, and net India tax owed.',
    category: 'tax',
  },
  {
    slug: 'advance-tax',
    title: 'Advance Tax Estimator',
    tagline: 'Calculate quarterly advance-tax instalments (15 Jun / 15 Sep / 15 Dec / 15 Mar) to avoid interest.',
    category: 'tax',
    icon: '📆',
  },
  {
    slug: 'indexation',
    title: 'Indexation Benefit Calculator',
    tagline: 'Check if indexation applies to your foreign equity holding and the indexed cost.',
    category: 'tax',
    icon: '📊',
  },
  {
    slug: 'schedule-fa',
    title: 'Schedule FA Checklist',
    tagline: 'Generate a pre-filled Schedule FA checklist for your ITR disclosure of foreign assets.',
    category: 'tax',
    icon: '✅',
  },
  {
    slug: 'lot-tracker',
    title: 'Lot-Level LTCG Tracker',
    tagline: 'Enter each vest lot and see the 24-month countdown, LTCG status, and tax per lot.',
    category: 'tax',
    icon: '🗂️',
  },
  // ── Planning & Decisions ──────────────────────────────────────────────────
  {
    slug: 'net-take-home',
    title: 'Net Take-Home Calculator',
    tagline: 'Full waterfall from RSU vest value → perquisite tax → LTCG/STCG → FX → INR in hand.',
    category: 'planning',
    icon: '💸',
  },
  {
    slug: 'sell-now',
    title: 'Should I Sell Now?',
    tagline: 'Compare sell-today vs hold-to-LTCG: tax delta, break-even price, and expected gain.',
    category: 'planning',
    icon: '⚖️',
  },
  {
    slug: 'grant-compare',
    title: 'Grant Offer Evaluator',
    tagline: 'Compare two RSU grant offers by vesting schedule, stock growth, and net INR value.',
    category: 'planning',
    icon: '📋',
  },
  {
    slug: 'cash-vs-rsu',
    title: 'Cash vs RSU Tradeoff',
    tagline: 'Model whether a cash bonus or RSU grant leaves more money after tax and FX.',
    category: 'planning',
    icon: '🔄',
  },
  {
    slug: 'tax-year',
    title: 'Tax Year Planning Tool',
    tagline: 'Plan which lots to sell in which Indian tax year to minimise total tax outflow.',
    category: 'planning',
    icon: '🗓️',
  },
  {
    slug: 'grant-reconstruct',
    title: 'RSU Grant Reconstruction',
    tagline: 'Reconstruct cost basis and perquisite records from partial data (Carta / E*TRADE exports).',
    category: 'planning',
    icon: '🔍',
  },
  {
    slug: 'unvested-risk',
    title: 'Unvested Value at Risk',
    tagline: `See how much unvested compensation you'd lose at various stock-price drop scenarios.`,
    category: 'planning',
    icon: '⚠️',
  },
  {
    slug: 'esop-vs-rsu',
    title: 'Pre-IPO ESOPs vs RSUs',
    tagline: 'Compare pre-IPO ESOP value against an RSU offer with strike price, dilution, and tax.',
    category: 'planning',
    icon: '🚀',
  },
  // ── FX & Repatriation ─────────────────────────────────────────────────────
  {
    slug: 'fx-comparison',
    title: 'FX Cost Comparison',
    tagline: 'Compare USD→INR conversion costs across brokers: Rovia 0%, Zerodha, ICICI, others.',
    category: 'fx',
    icon: '💱',
  },
  {
    slug: 'wire-cost',
    title: '5-Year Wire Cost Accumulator',
    tagline: `Project the cumulative FX and wire fees you'd pay over 5 years of regular repatriation.`,
    category: 'fx',
    icon: '🔌',
  },
  {
    slug: 'sbi-rate',
    title: 'SBI TT Rate Estimator',
    tagline: 'Estimate the SBI TT rate spread vs live mid-rate and what you lose on each transfer.',
    category: 'fx',
    icon: '🏦',
  },
  {
    slug: 'repatriation',
    title: 'Repatriation Scheduler',
    tagline: 'Plan repatriation timing across Indian tax years to stay below FEMA and LRS thresholds.',
    category: 'fx',
    icon: '📤',
  },
  // ── Risk & Portfolio ──────────────────────────────────────────────────────
  {
    slug: 'diversification',
    title: 'Diversification Risk Calculator',
    tagline: 'Model the impact of concentrating vs diversifying your RSU portfolio by company weight.',
    category: 'risk',
    icon: '📈',
  },
  {
    slug: 'concentration',
    title: 'Concentration Risk Scorer',
    tagline: 'Score your portfolio concentration and get a plain-English risk assessment.',
    category: 'risk',
    icon: '🎯',
  },
  {
    slug: 'broker-audit',
    title: 'Broker Cost Audit',
    tagline: 'Enter your annual RSU activity and see total fees across brokers side-by-side.',
    category: 'risk',
    icon: '🔎',
  },
];

export function getTool(slug) {
  return tools.find((t) => t.slug === slug) ?? null;
}

export function getToolsByCategory(categoryId) {
  return tools.filter((t) => t.category === categoryId);
}
