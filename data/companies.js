import { brokerTemplates } from './brokers.js';

// Helper — returns the complete company object with broker template merged in.
// Company-level painPoints / steps / faq override the template if present.
export function getCompany(slug) {
  const co = companiesRaw[slug];
  if (!co) return null;
  const t = brokerTemplates[co.broker];
  return {
    brokerName: t.brokerName,
    brokerShortName: t.brokerShortName,
    brokerGuideUrl: t.brokerGuideUrl,
    brokerGuideLabel: t.brokerGuideLabel,
    ...co,
    painPoints: co.painPoints ?? t.painPoints(co),
    steps: co.steps ?? t.steps(co),
    faq: co.faq ?? t.faq(co),
  };
}

// ─────────────────────────────────────────────
// Company registry
// broker: 'etrade' | 'morgan_stanley' | 'fidelity' | 'schwab'
// hasLogo: true if public/logos/{slug}.png exists
// ─────────────────────────────────────────────

const companiesRaw = {

  // ── FAANG + Netflix (detailed custom content) ──────────────────────────────

  google: {
    name: 'Google', parent: 'Alphabet Inc.', ticker: 'GOOGL', slug: 'google',
    color: '#4285F4', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$408', hasLogo: true,
    headline: `GOOGL in Morgan Stanley at Work.\nThe India-tax side is entirely on you.`,
    subheadline: `Quarterly vests add up fast. After a few years you have dozens of lots — each needing a specific SBI TT rate lookup for Schedule FA. Morgan Stanley's platform wasn't designed for that.`,
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-morgan-stanley-shareworks-india',
    brokerGuideLabel: 'Read: Rovia vs Morgan Stanley at Work — the full comparison →',
    painPoints: [
      { icon: '₹', title: '~₹5,000 lost per $10,000 wire', detail: "Morgan Stanley at Work's $25–$50 wire plus your Indian bank's FX spread (30–60 paise/USD) adds ₹4,000–₹7,000 every time you repatriate GOOGL proceeds." },
      { icon: '📋', title: 'USD-only cost basis', detail: 'Shareworks reports in USD. Your India ITR needs INR cost basis at the vest-day SBI TT rate — manual rebuild every July.' },
      { icon: '⏰', title: 'US Pacific hours support', detail: "Morgan Stanley at Work's customer service operates in US hours. A problem at 10 AM IST means waiting 11+ hours." },
      { icon: '📄', title: 'No India-tax tooling', detail: 'No Schedule FA. No Form 67 / FTC prep. No 24-month LTCG countdown. All manual or CA-managed.' },
    ],
    steps: [
      { n: '01', title: 'Download your Shareworks holdings statement', detail: 'Log into shareworks.morganstanley.com → Reports → Tax documents + Transaction history. Download your positions and gains statement. Save this — you\'ll upload it to Rovia to import your cost basis.' },
      { n: '02', title: 'Open Rovia → tap Transfer In → select Morgan Stanley', detail: 'Open Rovia and navigate to Transfer In. Select "Morgan Stanley StockPlan Connect · at Work" from the broker list. Enter your full name as it appears on Shareworks, and your Shareworks account number.' },
      { n: '03', title: 'Choose full or partial — then submit', detail: 'Select Full Transfer to move all your GOOGL holdings, or Partial to pick specific lots. Submit and you\'re done — shares move in-kind in 3–5 business days. No sale, no tax event.' },
      { n: '04', title: 'Upload your statement — Rovia imports your cost basis', detail: 'Once GOOGL shares arrive, upload the statement from Step 1. Rovia computes INR cost basis at the vest-day SBI TT rate for each lot and starts the 24-month LTCG countdown.' },
    ],
    faq: [
      { q: 'Does Morgan Stanley at Work charge a fee to transfer out?', a: 'Morgan Stanley may charge an outbound fee (typically $50–$75 one-time). Rovia charges nothing to receive. The ACATS is an in-kind transfer — no shares are sold.' },
      { q: "Will my Google vesting schedule change?", a: "No. Future GOOGL vests continue at Morgan Stanley at Work. Don't close your Shareworks account — only move already-vested shares to Rovia." },
      { q: 'Is the ACATS transfer a taxable event in India?', a: 'No. ACATS is not a sale — no capital gains triggered. Your holding period continues from the original vest date.' },
    ],
    seoTitle: 'Google RSU India — GOOGL via Morgan Stanley | Rovia',
    seoDescription: 'Indian Google employees: transfer GOOGL RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA auto-generated.',
    seoKeywords: 'Google RSU India, GOOGL RSU Indian employees, Morgan Stanley Google India, Shareworks Google India, move RSU to Rovia, GOOGL ACATS India',
  },

  meta: {
    name: 'Meta', parent: 'Meta Platforms Inc.', ticker: 'META', slug: 'meta',
    color: '#0866FF', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$839', hasLogo: true,
    headline: `META in Fidelity.\nQuarterly vests. No India-tax layer anywhere in the platform.`,
    subheadline: `FX costs on every repatriation, INR cost basis rebuilt manually, Schedule FA data that doesn't exist in your account. The gap between Fidelity's reporting and Indian tax requirements is real.`,
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-morgan-stanley-shareworks-india',
    brokerGuideLabel: 'Read: Rovia vs Morgan Stanley at Work — the full comparison →',
    painPoints: [
      { icon: '₹', title: '~₹5,000 lost per $10,000 wire', detail: "Morgan Stanley's $25–$50 wire fee plus Indian bank FX spread = ₹4,000–₹7,000 per repatriation. On $50,000/year in vests, that's ₹20,000–₹35,000 gone." },
      { icon: '📋', title: 'USD-only reporting on Shareworks', detail: 'Shareworks reports in USD. India ITR needs INR cost basis per lot at vest-day SBI TT rate — manual rebuild every filing season.' },
      { icon: '🔢', title: 'FIFO default buries LTCG savings', detail: "Shareworks defaults to FIFO. For Indian residents with the 24-month LTCG rule, picking the right lot can mean the difference between 12.5% LTCG and slab-rate STCG. The setting exists but isn't surfaced." },
      { icon: '📄', title: 'No India compliance tooling', detail: 'No Schedule FA. No Form 67 / FTC prep. No 24-month countdown per lot. You or your CA rebuilds all of this from the 1099-B every year.' },
    ],
    steps: [
      { n: '01', title: 'Download your Shareworks holdings statement', detail: 'Log into shareworks.morganstanley.com → Reports → Tax documents + Transaction history. Download your positions and gains statement. Save this — you\'ll upload it to Rovia to import your cost basis.' },
      { n: '02', title: 'Open Rovia → tap Transfer In → select Morgan Stanley', detail: 'Open Rovia and navigate to Transfer In. Select "Morgan Stanley StockPlan Connect · at Work" from the broker list. Enter your full name as it appears on Shareworks, and your Shareworks account number.' },
      { n: '03', title: 'Choose full or partial — then submit', detail: 'Select Full Transfer to move all your META holdings, or Partial to pick specific lots. Submit and you\'re done — shares move in-kind in 3–5 business days. No sale, no tax event.' },
      { n: '04', title: 'Upload your statement — Rovia imports your cost basis', detail: 'Once META shares arrive, upload the statement from Step 1. Rovia computes INR cost basis at the vest-day SBI TT rate for each lot and starts the 24-month LTCG countdown.' },
    ],
    faq: [
      { q: 'Can I transfer only some META lots?', a: 'Yes. Choose Partial Transfer in Rovia and select specific lots. Many people start with lots they planned to sell anyway, evaluate Rovia for a quarter, then move the rest.' },
      { q: 'Does the transfer affect my vesting schedule?', a: "No. Future META vests continue at Morgan Stanley at Work. Don't close Shareworks — only move already-held shares." },
      { q: 'Is the transfer a taxable event in India?', a: "No. ACATS is an in-kind share transfer — no shares are sold, no capital gains triggered. Your holding period continues from the original vest date." },
    ],
    seoTitle: 'Meta RSU India — META via Morgan Stanley | Rovia',
    seoDescription: 'Indian Meta employees: transfer META RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Meta RSU India, META RSU Indian employees, Morgan Stanley Shareworks India, move META Rovia',
  },

  microsoft: {
    name: 'Microsoft', parent: 'Microsoft Corporation', ticker: 'MSFT', slug: 'microsoft',
    color: '#00A4EF', broker: 'fidelity', vestCycle: 'Quarterly (Feb, May, Aug, Nov)', analystTarget: '$570', hasLogo: true,
    headline: `MSFT in Fidelity.\nEvery wire home carries a spread that doesn't appear on the receipt.`,
    subheadline: `Fidelity's FX spread and wire fee apply on every repatriation. After a few years of quarterly vests, the total is more than most Microsoft employees in India have ever calculated.`,
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-fidelity-netbenefits-india',
    brokerGuideLabel: 'Read: Rovia vs Fidelity NetBenefits — the full comparison →',
    painPoints: [
      { icon: '₹', title: '~₹5,000 friction per $10,000 sent home', detail: "Fidelity's $25 wire + Indian bank FX spread. On a $40,000 annual MSFT vest, that's ₹16,000–₹28,000 in avoidable repatriation costs." },
      { icon: '📋', title: 'USD-only cost basis, INR rebuild is manual', detail: 'Fidelity NetBenefits provides records in USD. For India filing, you need INR cost basis at vest-day SBI TT rate, lot by lot. Every Microsoft RSU holder in India does this manually.' },
      { icon: '📅', title: '24-month LTCG rule is invisible in Fidelity', detail: "India taxes foreign shares at a 24-month LTCG threshold. Fidelity shows US 12-month STCG/LTCG only. The 24-month countdown per lot is entirely your responsibility." },
      { icon: '📄', title: 'No India compliance support', detail: 'Schedule FA, Form 67, FTC — all DIY or CA-managed from Fidelity data. No automation, no India-format exports built in.' },
    ],
    steps: [
      { n: '01', title: 'Download your Fidelity NetBenefits holdings statement', detail: 'Log into netbenefits.com → Stock Plans → Statements → Download your positions and gains statement. Microsoft vests quarterly on Feb, May, Aug, Nov. Save this for Rovia cost basis import.' },
      { n: '02', title: 'Open Rovia → tap Transfer In → select Fidelity', detail: 'Open Rovia and navigate to Transfer In. Select "Fidelity · NetBenefits" from the broker list. Enter your full name as it appears on NetBenefits, and your Fidelity account number.' },
      { n: '03', title: 'Choose full or partial — then submit', detail: 'Select Full Transfer to move all your MSFT holdings, or Partial to pick specific lots. Submit and you\'re done — shares move in-kind in 3–5 business days. No sale, no tax event.' },
      { n: '04', title: 'Upload your statement — Rovia imports your cost basis', detail: 'Once MSFT shares arrive, upload the statement from Step 1. Rovia computes INR cost basis at the vest-day SBI TT rate per lot and starts the 24-month LTCG countdown.' },
    ],
    faq: [
      { q: 'Microsoft vests on specific quarterly dates — does Rovia track those?', a: 'Yes. Rovia records the exact vest date per lot. INR cost basis is computed using the SBI TT rate on that specific vest date.' },
      { q: 'I have both RSUs and ESPP from Microsoft. Can I transfer both?', a: 'Yes. Both RSU and ESPP shares can be ACATS-transferred. ESPP has different cost-basis treatment — Rovia handles both.' },
      { q: "What if I'm on a work visa and might return to India?", a: "The RNOR window when returning to India creates a one-time tax planning opportunity. Rovia's India-based support can walk you through the RSU-specific implications." },
    ],
    seoTitle: 'Microsoft RSU India — MSFT from Fidelity | Rovia',
    seoDescription: 'Indian Microsoft employees: transfer MSFT RSUs from Fidelity NetBenefits to Rovia. INR cost basis, Schedule FA, 0 FX markup. Full ACATS guide.',
    seoKeywords: 'Microsoft RSU India, MSFT RSU Indian employees, Fidelity NetBenefits MSFT India, move MSFT Rovia',
  },

  amazon: {
    name: 'Amazon', parent: 'Amazon.com Inc.', ticker: 'AMZN', slug: 'amazon',
    color: '#FF9900', broker: 'morgan_stanley', vestCycle: 'Back-weighted: 5%–15%–40%–40% over 4 years', analystTarget: '$312', hasLogo: true,
    headline: `AMZN back-weighted vesting.\n40% arrives in year 3. The LTCG window on that lot is easy to miss.`,
    subheadline: "Amazon's back-weighted vesting means Indian employees accumulate large AMZN positions in Morgan Stanley at Work for years — paying avoidable FX fees and managing lot-level tax records manually. Rovia changes that.",
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-morgan-stanley-shareworks-india',
    brokerGuideLabel: 'Read: Rovia vs Morgan Stanley at Work — the full comparison →',
    painPoints: [
      { icon: '⚠️', title: "Amazon's back-weighted vesting concentrates risk", detail: "The 5%–15%–40%–40% schedule means most of your AMZN value lands in years 3 and 4. Lot management, LTCG timing, and repatriation planning matter more at Amazon than most." },
      { icon: '₹', title: '~₹5,000 lost per $10,000 wire', detail: "Morgan Stanley at Work's $25–$50 wire + Indian bank FX spread. On a large year-4 AMZN vest, you may repatriate $60,000+ — that's ₹24,000–₹42,000 in FX friction in one year." },
      { icon: '🔢', title: 'FIFO default buries LTCG savings', detail: "Shareworks defaults to FIFO. For Indian residents with the 24-month LTCG rule, picking the right lot can mean the difference between 12.5% LTCG and slab-rate STCG." },
      { icon: '📄', title: 'USD-only reporting, no India-format export', detail: 'Morgan Stanley at Work issues a US 1099-B. India filing needs INR amounts, 24-month LTCG classification, and Schedule FA — none of which Shareworks generates.' },
    ],
    steps: [
      { n: '01', title: 'Download your Shareworks holdings statement', detail: "Log into shareworks.morganstanley.com → Reports → Tax documents + Transaction history. Download your positions and gains statement. Amazon's schedule creates many lots — save this for Rovia cost basis import." },
      { n: '02', title: 'Open Rovia → tap Transfer In → select Morgan Stanley', detail: 'Open Rovia and navigate to Transfer In. Select "Morgan Stanley StockPlan Connect · at Work" from the broker list. Enter your full name as it appears on Shareworks, and your account number.' },
      { n: '03', title: 'Choose full or partial — then submit', detail: 'Select Full Transfer to move all AMZN holdings, or Partial to pick specific lots (e.g. LTCG-eligible lots first). Submit and you\'re done — shares move in-kind in 3–5 business days. No sale, no tax event.' },
      { n: '04', title: 'Upload your statement — Rovia imports your cost basis', detail: "Once AMZN shares arrive, upload the statement from Step 1. Rovia computes INR cost basis per lot at the vest-day SBI TT rate. Amazon's back-weighted vesting means lots vary widely — Rovia tracks every one." },
    ],
    faq: [
      { q: 'Does Morgan Stanley at Work charge a fee to transfer out?', a: "Yes — typically $50–$75 one-time ACATS-out fee. Standard broker transfer fee, not specific to Rovia." },
      { q: "Amazon's Year 3 and Year 4 vests are large. Should I transfer everything at once?", a: "You can do a partial transfer — move Year 1 and Year 2 lots (already past 24-month threshold) first and move the rest when you're happy with Rovia." },
      { q: 'Does Amazon restrict RSU trading during blackouts? Does that affect ACATS?', a: "Amazon has trading windows. ACATS transfers are generally permitted during blackouts — you're moving shares, not selling them. Verify with your stock-plan administrator." },
    ],
    seoTitle: 'Amazon RSU India — AMZN LTCG & INR Cost Basis | Rovia',
    seoDescription: 'Indian Amazon employees: transfer AMZN RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 24-month LTCG tracking, 0 FX markup.',
    seoKeywords: 'Amazon RSU India, AMZN RSU Indian employees, Morgan Stanley Amazon India, Shareworks Amazon India, move AMZN Rovia',
  },

  apple: {
    name: 'Apple', parent: 'Apple Inc.', ticker: 'AAPL', slug: 'apple',
    color: '#555555', broker: 'schwab', vestCycle: 'Quarterly', analystTarget: '$380', hasLogo: true,
    headline: `AAPL in Schwab.\nFour years of quarterly repatriation — each one with a spread.`,
    subheadline: `Schwab's wire fee and FX spread apply on every transfer home. Most Apple employees don't calculate what that adds up to until they do — and then it's a significant number.`,
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-etrade-stock-plan-india',
    brokerGuideLabel: 'Read: Rovia vs Schwab — the full comparison →',
    painPoints: [
      { icon: '₹', title: '~₹5,000 friction per $10,000 repatriated', detail: "Schwab's $25 wire + Indian bank FX spread. Apple employees with large AAPL positions pay this multiple times per year." },
      { icon: '📋', title: 'USD cost basis — INR rebuild is annual manual work', detail: "Schwab reports every lot in USD. India filing needs INR cost basis at vest-day SBI TT rate. Apple's quarterly vesting = 4+ new lots per year to reconcile manually." },
      { icon: '🔒', title: "Schwab stock-plan accounts can't transfer to most US brokers", detail: "The only viable ACATS destination for Indian residents is a platform partnered with Alpaca Securities. Rovia is built around this." },
      { icon: '📄', title: 'No India-tax tools in Schwab', detail: 'No Schedule FA. No Form 67 / FTC prep. No 24-month LTCG countdown. All manual or CA-managed.' },
    ],
    steps: [
      { n: '01', title: 'Download your Schwab Equity Award Center statement', detail: 'Log into schwab.com → Equity Award Center → Accounts → Download your holdings and gains statement. Apple vests quarterly = 4 new lots per year. Save this for Rovia cost basis import.' },
      { n: '02', title: 'Open Rovia → tap Transfer In → select Schwab', detail: 'Open Rovia and navigate to Transfer In. Select "Charles Schwab · Equity Award Center" from the broker list. Enter your full name as it appears on your Schwab account, and your account number.' },
      { n: '03', title: 'Choose full or partial — then submit', detail: 'Select Full Transfer to move all AAPL holdings, or Partial to pick specific lots. Submit and you\'re done — shares move in-kind in 3–5 business days. No sale, no tax event.' },
      { n: '04', title: 'Upload your statement — Rovia imports your cost basis', detail: "Once AAPL shares arrive, upload the statement from Step 1. Rovia computes INR cost basis at the vest-day SBI TT rate per lot and starts the 24-month LTCG countdown for each." },
    ],
    faq: [
      { q: 'Apple has performance-condition RSUs. Does that affect the transfer?', a: "Once RSUs are vested and in your name at Schwab, they transfer like any other shares. Performance conditions only matter before vesting." },
      { q: 'Can I be selective about which lots to transfer?', a: "Yes. ACATS supports partial transfers. You can move only lots past the 24-month LTCG threshold and leave newer lots at Schwab." },
      { q: 'Does Apple restrict trading during blackouts? Does ACATS work during blackouts?', a: "ACATS transfers are generally permitted during trading blackouts — you're moving ownership, not executing a sale. Verify with your stock-plan administrator." },
    ],
    seoTitle: 'Apple RSU India — AAPL via Schwab, 0 FX Markup | Rovia',
    seoDescription: 'Indian Apple employees: transfer AAPL RSUs from Charles Schwab to Rovia. INR cost basis, 0 FX markup, India-tax reporting. Complete ACATS guide.',
    seoKeywords: 'Apple RSU India, AAPL RSU Indian employees, Schwab AAPL India, move AAPL Rovia',
  },

  netflix: {
    name: 'Netflix', parent: 'Netflix Inc.', ticker: 'NFLX', slug: 'netflix',
    color: '#E50914', broker: 'morgan_stanley', vestCycle: 'Monthly (unique to Netflix)', analystTarget: '$1,100', hasLogo: true,
    headline: `Netflix vests monthly.\n12 lots a year, each with its own INR cost basis.`,
    subheadline: "Netflix's monthly RSU vesting creates more lots per year than any other FAANG company. Indian Netflix employees managing NFLX RSUs in Shareworks track 12+ lots annually — Rovia automates the INR basis, LTCG countdown, and Schedule FA for every one.",
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-morgan-stanley-shareworks-india',
    brokerGuideLabel: 'Read: Rovia vs Morgan Stanley at Work — the full comparison →',
    painPoints: [
      { icon: '🗂️', title: '12+ lots per year — all manual to track for India', detail: "Netflix's monthly vesting = 12 new lots per year, each with a different vest date, USD price, and INR basis. By Year 3, you're tracking 36+ lots manually for your ITR." },
      { icon: '₹', title: '~₹5,000 lost per $10,000 wire', detail: "Morgan Stanley's $25–$50 wire + Indian bank FX spread. NFLX's high share price means even small lot repatriations involve large USD amounts." },
      { icon: '🔢', title: 'FIFO + monthly lots = frequent LTCG classification changes', detail: "With monthly vesting, each lot crosses the 24-month LTCG threshold on a different date. Shareworks shows US holding periods only." },
      { icon: '📄', title: 'USD-only reporting, India tools are DIY', detail: 'No Schedule FA. No Form 67 prep. No 24-month LTCG countdown per lot. 12 new lots × manual INR computation = heaviest tax workload in FAANG.' },
    ],
    steps: [
      { n: '01', title: 'Download your Shareworks holdings statement', detail: "Log into shareworks.morganstanley.com → Reports → Tax documents + Transaction history. Netflix's monthly vesting creates 12+ lots per year — download the full statement. Save this for Rovia cost basis import." },
      { n: '02', title: 'Open Rovia → tap Transfer In → select Morgan Stanley', detail: 'Open Rovia and navigate to Transfer In. Select "Morgan Stanley StockPlan Connect · at Work" from the broker list. Enter your full name as it appears on Shareworks, and your account number.' },
      { n: '03', title: 'Choose full or partial — then submit', detail: 'Select Full Transfer to move all NFLX holdings, or Partial to pick specific lots (e.g. those already past the 24-month threshold). Submit — shares move in-kind in 3–5 business days. No sale, no tax event.' },
      { n: '04', title: 'Upload your statement — Rovia imports every lot', detail: "Once shares arrive, upload the statement from Step 1. Rovia imports each lot with its vest date and computes INR cost basis at the SBI TT rate. With monthly vesting, per-lot 24-month LTCG countdowns vary — Rovia tracks every one." },
    ],
    faq: [
      { q: 'Netflix pays salary in RSUs. I have a huge number of lots. Can Rovia handle this?', a: "Yes — Netflix employees typically have the most lots of any FAANG. Rovia's lot tracker is built for this. Every lot gets a vest date, INR cost basis, and 24-month LTCG countdown." },
      { q: 'Netflix lets employees choose their RSU/salary split. Does that affect how shares are held?', a: "No — regardless of the split, all vested NFLX RSUs end up in Shareworks under your name. The ACATS transfer process is the same." },
      { q: "I've held some NFLX lots for over 24 months. Can I transfer just those?", a: "Yes. Partial ACATS transfers are supported. Move LTCG-eligible lots to Rovia first; defer the short-term lots." },
    ],
    seoTitle: 'Netflix RSU India — 12 NFLX Lots/Year, INR Tracked | Rovia',
    seoDescription: 'Indian Netflix employees: transfer NFLX RSUs from Morgan Stanley at Work to Rovia. 12+ lots/year tracked with INR cost basis and 24-month LTCG countdown.',
    seoKeywords: 'Netflix RSU India, NFLX RSU Indian employees, Shareworks NFLX India, Netflix monthly vest India, move NFLX Rovia',
  },

  // ── USER'S ADDITIONAL LIST ─────────────────────────────────────────────────

  salesforce: {
    name: 'Salesforce', parent: 'Salesforce Inc.', ticker: 'CRM', slug: 'salesforce',
    color: '#00A1E0', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$283', hasLogo: true,
    headline: `CRM in E*TRADE.\nQuarterly vests, USD-only reporting, Schedule FA on you.`,
    subheadline: `E*TRADE's equity plan was designed for US employees. The INR cost basis per lot, SBI TT rate records, and Schedule FA data are all work that happens outside the platform.`,
    seoTitle: 'Salesforce RSU India — CRM via E*Trade | Rovia',
    seoDescription: 'Indian Salesforce employees: transfer CRM RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Salesforce RSU India, CRM RSU India, E*TRADE Salesforce India, move CRM Rovia',
  },

  servicenow: {
    name: 'ServiceNow', parent: 'ServiceNow Inc.', ticker: 'NOW', slug: 'servicenow',
    color: '#62D84E', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$1,050', hasLogo: true,
    headline: `NOW in Fidelity.\nFast-growing stock. Standard US equity plan. No India-tax layer.`,
    subheadline: `Fidelity NetBenefits tracks your NOW RSUs in USD with no India-tax context. The FX on repatriation and Schedule FA data are both manual work you handle separately.`,
    seoTitle: 'ServiceNow RSU India — NOW via Fidelity | Rovia',
    seoDescription: 'Indian ServiceNow employees: transfer NOW RSUs from Fidelity NetBenefits to Rovia. INR cost basis, Schedule FA, 0 FX markup. Full ACATS guide.',
    seoKeywords: 'ServiceNow RSU India, NOW RSU India, Fidelity NetBenefits ServiceNow India, move NOW Rovia',
  },

  paypal: {
    name: 'PayPal', parent: 'PayPal Holdings Inc.', ticker: 'PYPL', slug: 'paypal',
    color: '#003087', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$47', hasLogo: true,
    headline: `PYPL in your equity plan.\nYears of share price movement. Your cost basis history needs to be accurate.`,
    subheadline: `PayPal's restructuring years meant significant price movement across multiple lots. Whatever you hold and whenever you decide to sell, the INR cost basis and Schedule FA records need to be right.`,
    seoTitle: 'PayPal RSU India — PYPL INR Cost Basis & LTCG | Rovia',
    seoDescription: 'Indian PayPal employees: transfer PYPL RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'PayPal RSU India, PYPL RSU India, E*TRADE PayPal India, move PYPL Rovia',
  },

  uber: {
    name: 'Uber', parent: 'Uber Technologies Inc.', ticker: 'UBER', slug: 'uber',
    color: '#000000', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$103', hasLogo: true,
    headline: `UBER in Schwab.\nVolatile stock. The India-tax records need to be clean regardless.`,
    subheadline: `Uber's share price has moved in both directions since the IPO. Whatever you hold and whenever you sell, Schwab's plan doesn't provide INR cost basis or Schedule FA data — that's entirely manual.`,
    seoTitle: 'Uber RSU India — UBER via E*Trade, INR Tracked | Rovia',
    seoDescription: 'Indian Uber employees: transfer UBER RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, India-tax reporting. Full ACATS migration guide.',
    seoKeywords: 'Uber RSU India, UBER RSU India, E*TRADE Uber India, move UBER Rovia',
  },

  adobe: {
    name: 'Adobe', parent: 'Adobe Inc.', ticker: 'ADBE', slug: 'adobe',
    color: '#FF0000', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$338', hasLogo: true,
    headline: `ADBE in E*TRADE.\nQuarterly vests. No India-tax data anywhere in your account.`,
    subheadline: "Indian Adobe employees with ADBE RSUs face USD-only reporting, wire fees, and no India-tax tooling at their employer broker. Rovia provides everything India-specific that E*TRADE doesn't.",
    seoTitle: 'Adobe RSU India — ADBE via E*Trade, 0 FX Markup | Rovia',
    seoDescription: 'Indian Adobe employees: transfer ADBE RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA auto-generated. Full ACATS guide.',
    seoKeywords: 'Adobe RSU India, ADBE RSU India, E*TRADE Adobe India, move ADBE Rovia',
  },

  oracle: {
    name: 'Oracle', parent: 'Oracle Corporation', ticker: 'ORCL', slug: 'oracle',
    color: '#C74634', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$261', hasLogo: true,
    headline: `Oracle has one of India's largest tech workforces.\nYour ORCL tax records get no special treatment.`,
    subheadline: `Fidelity NetBenefits works the same way for Oracle employees in Hyderabad as it does in Austin. The India-compliance side — INR cost basis, Schedule FA, FX repatriation — is entirely your responsibility.`,
    seoTitle: 'Oracle RSU India — ORCL via Fidelity | Rovia',
    seoDescription: 'Indian Oracle employees: transfer ORCL RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Oracle RSU India, ORCL RSU India, Fidelity NetBenefits Oracle India, move ORCL Rovia',
  },

  intuit: {
    name: 'Intuit', parent: 'Intuit Inc.', ticker: 'INTU', slug: 'intuit',
    color: '#236CFF', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$576', hasLogo: true,
    headline: `Intuit makes tax software.\nYour own Schedule FA probably isn't automated.`,
    subheadline: `E*TRADE's equity plan doesn't track INR cost basis or generate Schedule FA data. The same manual work Intuit's software tries to eliminate for US users is what Indian Intuit employees deal with every July.`,
    seoTitle: 'Intuit RSU India — INTU via E*Trade | Rovia',
    seoDescription: 'Indian Intuit employees: transfer INTU RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Intuit RSU India, INTU RSU India, E*TRADE Intuit India, move INTU Rovia',
  },

  intel: {
    name: 'Intel', parent: 'Intel Corporation', ticker: 'INTC', slug: 'intel',
    color: '#0071C5', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$66', hasLogo: true,
    headline: `INTC has had a difficult few years.\nYou still have compliance obligations on every vest.`,
    subheadline: `Regardless of where the stock has traded, every Intel RSU that vested created a Schedule FA requirement and an INR cost basis that needs to be accurate. That obligation doesn't pause.`,
    seoTitle: 'Intel RSU India — INTC via E*Trade, India Tax | Rovia',
    seoDescription: 'Indian Intel employees: transfer INTC RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Intel RSU India, INTC RSU India, Intel RSU Indian employees, move INTC Rovia',
  },

  // ── LOGO FOLDER 38 ─────────────────────────────────────────────────────────

  amdocs: {
    name: 'Amdocs', parent: 'Amdocs Limited', ticker: 'DOX', slug: 'amdocs',
    color: '#004B87', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$130', hasLogo: true,
    headline: `Amdocs runs one of India's largest tech operations.\nDOX RSU management still happens in USD.`,
    subheadline: `Large India headcount, standard US equity plan. The INR cost basis per lot and Schedule FA data are on you — the platform doesn't provide it and the headcount doesn't change that.`,
    seoTitle: 'Amdocs RSU India — DOX India Workforce RSUs | Rovia',
    seoDescription: 'Indian Amdocs employees: transfer DOX RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Amdocs RSU India, DOX RSU India, Amdocs RSU Indian employees, move DOX Rovia',
  },

  autodesk: {
    name: 'Autodesk', parent: 'Autodesk Inc.', ticker: 'ADSK', slug: 'autodesk',
    color: '#0696D7', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$310', hasLogo: true,
    headline: `ADSK in E*TRADE.\nDesign teams in India. Equity admin built for the US.`,
    subheadline: "Indian Autodesk employees with ADSK RSUs in E*TRADE face the same USD reporting, wire costs, and India-tax gaps as every other US employer plan. Rovia provides what E*TRADE doesn't.",
    seoTitle: 'Autodesk RSU India — ADSK via E*Trade | Rovia',
    seoDescription: 'Indian Autodesk employees: transfer ADSK RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Autodesk RSU India, ADSK RSU India, E*TRADE Autodesk India, move ADSK Rovia',
  },

  datadog: {
    name: 'Datadog', parent: 'Datadog Inc.', ticker: 'DDOG', slug: 'datadog',
    color: '#632CA6', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$177', hasLogo: true,
    headline: `DDOG in Shareworks.\nHigh-growth equity. No India-tax layer.`,
    subheadline: `Shareworks tracks your Datadog RSUs in USD. The INR cost basis at each vest and the Schedule FA records are manual work that builds with every quarter.`,
    seoTitle: 'Datadog RSU India — DDOG via Morgan Stanley | Rovia',
    seoDescription: 'Indian Datadog employees: transfer DDOG RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Datadog RSU India, DDOG RSU India, Morgan Stanley Datadog India, move DDOG Rovia',
  },

  fortinet: {
    name: 'Fortinet', parent: 'Fortinet Inc.', ticker: 'FTNT', slug: 'fortinet',
    color: '#EE3124', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$90', hasLogo: true,
    headline: `FTNT in your equity plan.\nNetwork security is your domain. India tax records are a side project.`,
    subheadline: `Your Fortinet equity plan handles the US side. The India-compliance side — INR cost basis, Schedule FA, FX repatriation — is not in the platform. It's yours to maintain separately.`,
    seoTitle: 'Fortinet RSU India — FTNT via Morgan Stanley | Rovia',
    seoDescription: 'Indian Fortinet employees: transfer FTNT RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Fortinet RSU India, FTNT RSU India, Morgan Stanley Fortinet India, move FTNT Rovia',
  },

  honeywell: {
    name: 'Honeywell', parent: 'Honeywell International Inc.', ticker: 'HON', slug: 'honeywell',
    color: '#D60029', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$220', hasLogo: true,
    headline: `HON in Fidelity.\nMassive India operations. Standard US plan with no local tax support.`,
    subheadline: `Honeywell's India headcount is among the largest of any US company. Fidelity NetBenefits' reporting was designed for US employees — the India-tax gap applies equally regardless of how many employees face it.`,
    seoTitle: 'Honeywell RSU India — HON via Fidelity | Rovia',
    seoDescription: 'Indian Honeywell employees: transfer HON RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Honeywell RSU India, HON RSU India, Fidelity Honeywell India, move HON Rovia',
  },

  hubspot: {
    name: 'HubSpot', parent: 'HubSpot Inc.', ticker: 'HUBS', slug: 'hubspot',
    color: '#FF7A59', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$700', hasLogo: true,
    headline: `HUBS in E*TRADE.\nGrowth marketing company. Same US-equity-plan gap as everyone else.`,
    subheadline: "Indian HubSpot employees with HUBS RSUs in E*TRADE face USD-only reporting, wire fees, and no India-tax tooling. Rovia provides what E*TRADE doesn't.",
    seoTitle: 'HubSpot RSU India — HUBS via E*Trade | Rovia',
    seoDescription: 'Indian HubSpot employees: transfer HUBS RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'HubSpot RSU India, HUBS RSU India, E*TRADE HubSpot India, move HUBS Rovia',
  },

  'juniper-networks': {
    name: 'Juniper Networks', parent: 'Juniper Networks Inc. (now HPE)', ticker: 'JNPR', slug: 'juniper-networks',
    color: '#009BDE', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: 'Acquired by HPE (2024)', hasLogo: true,
    headline: `Juniper was acquired by HPE.\nYour equity transition created a lot history worth tracking carefully.`,
    subheadline: `The JNPR-to-HPE conversion changed the cost basis and lot structure for unvested RSUs. Getting that history right in INR terms matters for the Schedule FA filings in the years ahead.`,
    seoTitle: 'Juniper RSU India — HPE Acquisition, India Tax | Rovia',
    seoDescription: 'Indian Juniper Networks employees: manage JNPR / HPE RSUs with Rovia. INR cost basis, 0 FX markup, India-tax reporting. Full guide.',
    seoKeywords: 'Juniper Networks RSU India, JNPR RSU India, Juniper HPE RSU India, move Rovia',
  },

  'lam-research': {
    name: 'Lam Research', parent: 'Lam Research Corporation', ticker: 'LRCX', slug: 'lam-research',
    color: '#CC0000', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$311', hasLogo: true,
    headline: `LRCX is a core semiconductor hold.\nEach lot's INR cost basis needs to be accurate.`,
    subheadline: "Indian Lam Research employees with LRCX RSUs face USD reporting gaps and FX friction at their employer broker. Rovia provides the India-specific tooling that E*TRADE doesn't.",
    seoTitle: 'Lam Research RSU India — LRCX via Schwab | Rovia',
    seoDescription: 'Indian Lam Research employees: transfer LRCX RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Lam Research RSU India, LRCX RSU India, E*TRADE Lam Research India, move LRCX Rovia',
  },

  'eli-lilly': {
    name: 'Eli Lilly', parent: 'Eli Lilly and Company', ticker: 'LLY', slug: 'eli-lilly',
    color: '#D52B1E', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$1,239', hasLogo: true,
    headline: `LLY has been among the market's best performers.\nYour INR tax records should be just as accurate.`,
    subheadline: `Significant appreciation across multiple lots means the tax picture is consequential. E*TRADE's plan provides USD records only — the INR cost basis and Schedule FA are manual work outside the platform.`,
    seoTitle: 'Eli Lilly RSU India — LLY via E*Trade | Rovia',
    seoDescription: 'Indian Eli Lilly employees: transfer LLY RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Eli Lilly RSU India, LLY RSU India, E*TRADE Eli Lilly India, move LLY Rovia',
  },

  marvell: {
    name: 'Marvell Technology', parent: 'Marvell Technology Inc.', ticker: 'MRVL', slug: 'marvell',
    color: '#006CB7', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$85', hasLogo: true,
    headline: `Marvell's India R&D is central to its roadmap.\nMRVL RSU compliance still happens in USD.`,
    subheadline: `Shareworks tracks your Marvell RSUs in USD with no India-tax context. The INR cost basis per lot and Schedule FA data are yours to maintain separately.`,
    seoTitle: 'Marvell RSU India — MRVL via Morgan Stanley | Rovia',
    seoDescription: 'Indian Marvell Technology employees: transfer MRVL RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup. Full guide.',
    seoKeywords: 'Marvell RSU India, MRVL RSU India, Shareworks Marvell India, move MRVL Rovia',
  },

  mongodb: {
    name: 'MongoDB', parent: 'MongoDB Inc.', ticker: 'MDB', slug: 'mongodb',
    color: '#00ED64', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$295', hasLogo: true,
    headline: `MDB in E*TRADE.\nDeveloper-first company. India-tax compliance is still manual.`,
    subheadline: `E*TRADE's plan doesn't track INR cost basis or generate Schedule FA data. The India-compliance side of your MongoDB RSUs is entirely outside the platform — which means a spreadsheet.`,
    seoTitle: 'MongoDB RSU India — MDB via E*Trade | Rovia',
    seoDescription: 'Indian MongoDB employees: transfer MDB RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'MongoDB RSU India, MDB RSU India, E*TRADE MongoDB India, move MDB Rovia',
  },

  'new-relic': {
    name: 'New Relic', parent: 'New Relic Inc. (private since 2024)', ticker: 'NEWR', slug: 'new-relic',
    color: '#008C99', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: 'Taken private (2024)', hasLogo: true,
    headline: `New Relic was taken private.\nIf you have equity from the transition, the compliance obligation remains.`,
    subheadline: `Francisco Partners' 2024 acquisition means New Relic equity works differently now. If you have RSUs converting to cash or rolled equity, the India-tax treatment and Schedule FA obligations still apply.`,
    seoTitle: 'New Relic RSU India — NEWR Equity with Rovia | Rovia',
    seoDescription: 'Indian New Relic employees: manage NEWR RSU proceeds and equity with Rovia. INR reporting, 0 FX markup, India-first compliance. Full guide.',
    seoKeywords: 'New Relic RSU India, NEWR RSU India, New Relic private equity India, Rovia',
  },

  okta: {
    name: 'Okta', parent: 'Okta Inc.', ticker: 'OKTA', slug: 'okta',
    color: '#007DC1', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$102', hasLogo: true,
    headline: `OKTA in E*TRADE.\nIdentity security is your job. India tax records are a side project.`,
    subheadline: `E*TRADE's equity plan is USD-only. The INR cost basis per vest, SBI TT rate records, and Schedule FA data are all maintained outside the platform — in practice, manually.`,
    seoTitle: 'Okta RSU India — OKTA via E*Trade | Rovia',
    seoDescription: 'Indian Okta employees: transfer OKTA RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Okta RSU India, OKTA RSU India, E*TRADE Okta India, move OKTA Rovia',
  },

  snowflake: {
    name: 'Snowflake', parent: 'Snowflake Inc.', ticker: 'SNOW', slug: 'snowflake',
    color: '#29B5E8', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$248', hasLogo: true,
    headline: `SNOW in E*TRADE.\nQuarterly vests. USD reporting. No India-tax layer.`,
    subheadline: `Snowflake's equity plan doesn't provide INR cost basis or Schedule FA data. Each vest adds another lot that needs to be tracked separately for Indian compliance.`,
    seoTitle: 'Snowflake RSU India — SNOW via E*Trade | Rovia',
    seoDescription: 'Indian Snowflake employees: transfer SNOW RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Snowflake RSU India, SNOW RSU India, E*TRADE Snowflake India, move SNOW Rovia',
  },

  splunk: {
    name: 'Splunk', parent: 'Splunk Inc. (acquired by Cisco 2024)', ticker: 'SPLK', slug: 'splunk',
    color: '#65A637', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: 'Acquired by Cisco (Mar 2024)', hasLogo: true,
    headline: `Splunk was acquired by Cisco.\nUnvested SPLK RSUs converted to CSCO — the cost basis picture changed.`,
    subheadline: `The March 2024 acquisition converted unvested Splunk RSUs to Cisco shares at a fixed ratio. Getting the INR cost basis right on those converted lots matters for Schedule FA filings ahead.`,
    seoTitle: 'Splunk RSU India — Now Cisco (CSCO), India Tax | Rovia',
    seoDescription: 'Indian Splunk employees: manage SPLK/Cisco RSUs and acquisition proceeds with Rovia. INR reporting, 0 FX markup, India-tax compliance. Full guide.',
    seoKeywords: 'Splunk RSU India, SPLK RSU India, Cisco Splunk RSU India, Rovia',
  },

  'texas-instruments': {
    name: 'Texas Instruments', parent: 'Texas Instruments Inc.', ticker: 'TXN', slug: 'texas-instruments',
    color: '#C8102E', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$226', hasLogo: true,
    headline: `TXN in Fidelity.\nSemiconductor cycles move. The Schedule FA obligation on every lot doesn't.`,
    subheadline: `Fidelity NetBenefits tracks your TI RSUs in USD. The India-compliance side — INR cost basis per lot, Schedule FA, FX repatriation — is outside the platform regardless of the cycle.`,
    seoTitle: 'Texas Instruments RSU India — TXN via Fidelity | Rovia',
    seoDescription: 'Indian Texas Instruments employees: transfer TXN RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Texas Instruments RSU India, TXN RSU India, Fidelity TI India, move TXN Rovia',
  },

  // ── LOGO FOLDER 39 ─────────────────────────────────────────────────────────

  amd: {
    name: 'AMD', parent: 'Advanced Micro Devices Inc.', ticker: 'AMD', slug: 'amd',
    color: '#ED1C24', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$135', hasLogo: true,
    headline: `AMD in E*TRADE.\nAI tailwinds have been strong. Your INR records need to keep up.`,
    subheadline: `Significant appreciation across multiple lots makes the INR cost basis and LTCG tracking more consequential. E*TRADE's plan provides USD records only — the India-tax side is manual work.`,
    seoTitle: 'AMD RSU India — AMD via E*Trade, INR Tracked | Rovia',
    seoDescription: 'Indian AMD employees: transfer AMD RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'AMD RSU India, AMD RSU Indian employees, E*TRADE AMD India, move AMD Rovia',
  },

  'arista-networks': {
    name: 'Arista Networks', parent: 'Arista Networks Inc.', ticker: 'ANET', slug: 'arista-networks',
    color: '#007DC3', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$183', hasLogo: true,
    headline: `ANET in E*TRADE.\nData center networking has had a strong run. The lot-level tax records matter.`,
    subheadline: `E*TRADE's equity plan doesn't provide INR cost basis or Schedule FA data. For a stock that has appreciated significantly, getting the cost basis right on each lot is increasingly important.`,
    seoTitle: 'Arista RSU India — ANET via Fidelity | Rovia',
    seoDescription: 'Indian Arista Networks employees: transfer ANET RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Arista Networks RSU India, ANET RSU India, E*TRADE Arista India, move ANET Rovia',
  },

  arm: {
    name: 'Arm', parent: 'Arm Holdings plc', ticker: 'ARM', slug: 'arm',
    color: '#009FE3', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$215', hasLogo: true,
    headline: `ARM went public in 2023.\nGet INR cost basis right from the earliest lots.`,
    subheadline: `Early employees have lots at pre-IPO prices that look very different from current levels. Getting those INR records accurate from the start matters — it's much harder to reconstruct them later.`,
    seoTitle: 'Arm Holdings RSU India — ARM via Fidelity | Rovia',
    seoDescription: 'Indian Arm employees: transfer ARM RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Arm Holdings RSU India, ARM RSU India, Fidelity Arm India, move ARM Rovia',
  },

  cadence: {
    name: 'Cadence', parent: 'Cadence Design Systems Inc.', ticker: 'CDNS', slug: 'cadence',
    color: '#FF6900', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$255', hasLogo: true,
    headline: `CDNS in E*TRADE.\nEDA design is your domain. India tax compliance is a manual side project.`,
    subheadline: `E*TRADE's plan tracks CDNS RSUs in USD. The INR cost basis per lot, SBI TT rate at vest, and Schedule FA data are all work that happens outside the platform.`,
    seoTitle: 'Cadence RSU India — CDNS via E*Trade | Rovia',
    seoDescription: 'Indian Cadence Design Systems employees: transfer CDNS RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Cadence RSU India, CDNS RSU India, E*TRADE Cadence India, move CDNS Rovia',
  },

  cloudflare: {
    name: 'Cloudflare', parent: 'Cloudflare Inc.', ticker: 'NET', slug: 'cloudflare',
    color: '#F48120', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$118', hasLogo: true,
    headline: `NET in Shareworks.\nGlobal infrastructure. India-tax compliance is entirely on you.`,
    subheadline: `Shareworks tracks your Cloudflare RSUs in USD. The INR cost basis, Schedule FA records, and FX on repatriation are all manual work outside the platform.`,
    seoTitle: 'Cloudflare RSU India — NET via Morgan Stanley | Rovia',
    seoDescription: 'Indian Cloudflare employees: transfer NET RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Cloudflare RSU India, NET RSU India, Shareworks Cloudflare India, move NET Rovia',
  },

  confluent: {
    name: 'Confluent', parent: 'Confluent Inc.', ticker: 'CFLT', slug: 'confluent',
    color: '#0068B1', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$32', hasLogo: true,
    headline: `CFLT in your equity plan.\nReal-time data infrastructure. Manual India tax records.`,
    subheadline: `Your Confluent equity plan is USD-only. The INR cost basis per vest and Schedule FA data are maintained entirely outside the platform — which in practice means a spreadsheet.`,
    seoTitle: 'Confluent RSU India — CFLT via E*Trade | Rovia',
    seoDescription: 'Indian Confluent employees: transfer CFLT RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Confluent RSU India, CFLT RSU India, E*TRADE Confluent India, move CFLT Rovia',
  },

  freshworks: {
    name: 'Freshworks', parent: 'Freshworks Inc.', ticker: 'FRSH', slug: 'freshworks',
    color: '#33C65E', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$14', hasLogo: true,
    headline: `Freshworks was founded in Chennai.\nThe India-tax side of FRSH RSUs still isn't automated.`,
    subheadline: `Despite being India-born, Freshworks' NASDAQ-listed equity plan works the same as any US company. The INR cost basis per lot and Schedule FA data are yours to maintain.`,
    seoTitle: 'Freshworks RSU India — FRSH India-Born Company | Rovia',
    seoDescription: 'Indian Freshworks employees: transfer FRSH RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide for Indian residents.',
    seoKeywords: 'Freshworks RSU India, FRSH RSU India, Freshworks Indian employees RSU, move FRSH Rovia',
  },

  netapp: {
    name: 'NetApp', parent: 'NetApp Inc.', ticker: 'NTAP', slug: 'netapp',
    color: '#0099CC', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$130', hasLogo: true,
    headline: `NTAP in Fidelity.\nData infrastructure expertise. India RSU compliance is manual.`,
    subheadline: `Fidelity NetBenefits tracks your NetApp RSUs in USD. The India-tax side — INR cost basis per lot, Schedule FA, FX repatriation — is outside the platform.`,
    seoTitle: 'NetApp RSU India — NTAP via Fidelity | Rovia',
    seoDescription: 'Indian NetApp employees: transfer NTAP RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'NetApp RSU India, NTAP RSU India, Fidelity NetApp India, move NTAP Rovia',
  },

  pegasystems: {
    name: 'Pegasystems', parent: 'Pegasystems Inc.', ticker: 'PEGA', slug: 'pegasystems',
    color: '#018202', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$75', hasLogo: true,
    headline: `PEGA in your equity plan.\nEnterprise automation is your product. India tax records are DIY.`,
    subheadline: `Your Pegasystems equity plan is USD-only. The India-compliance side — INR cost basis per lot, Schedule FA, repatriation FX — is entirely manual work outside the platform.`,
    seoTitle: 'Pega RSU India — PEGA via E*Trade | Rovia',
    seoDescription: 'Indian Pegasystems employees: transfer PEGA RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Pegasystems RSU India, PEGA RSU India, Pega RSU Indian employees, move PEGA Rovia',
  },

  'progress-software': {
    name: 'Progress Software', parent: 'Progress Software Corporation', ticker: 'PRGS', slug: 'progress-software',
    color: '#7C4FAC', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$55', hasLogo: true,
    headline: `PRGS in your equity plan.\nApplication development platform. Manual India RSU compliance.`,
    subheadline: `Your Progress Software equity plan provides USD records. The INR cost basis, Schedule FA, and repatriation FX are all work that sits outside the platform.`,
    seoTitle: 'Progress Software RSU India — PRGS on Rovia | Rovia',
    seoDescription: 'Indian Progress Software employees: transfer PRGS RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Progress Software RSU India, PRGS RSU India, Progress Software Indian employees, move PRGS Rovia',
  },

  rubrik: {
    name: 'Rubrik', parent: 'Rubrik Inc.', ticker: 'RBRK', slug: 'rubrik',
    color: '#0D6AFF', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$78', hasLogo: true,
    headline: `RBRK went public in 2024.\nFirst vest, first Schedule FA obligation — get it right from the start.`,
    subheadline: `Rubrik's IPO means early employees have lots at a pre-IPO basis. Getting the INR cost basis accurate from the earliest vests matters — it's much harder to reconstruct later.`,
    seoTitle: 'Rubrik RSU India — RBRK IPO, INR Cost Basis | Rovia',
    seoDescription: 'Indian Rubrik employees: transfer RBRK RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Rubrik RSU India, RBRK RSU India, Rubrik RSU Indian employees, move RBRK Rovia',
  },

  sentinelone: {
    name: 'SentinelOne', parent: 'SentinelOne Inc.', ticker: 'S', slug: 'sentinelone',
    color: '#473DCD', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$22', hasLogo: true,
    headline: `SentinelOne in your equity plan.\nAI-native security. Manual India tax compliance.`,
    subheadline: `Your SentinelOne RSU plan is USD-only. The INR cost basis per lot and Schedule FA data are work that happens entirely outside the platform.`,
    seoTitle: 'SentinelOne RSU India — S via E*Trade | Rovia',
    seoDescription: 'Indian SentinelOne employees: transfer S RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'SentinelOne RSU India, S RSU India, SentinelOne Indian employees RSU, move Rovia',
  },

  sprinklr: {
    name: 'Sprinklr', parent: 'Sprinklr Inc.', ticker: 'CXM', slug: 'sprinklr',
    color: '#0278DB', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$11', hasLogo: true,
    headline: `Sprinklr's India workforce is central to its business.\nCXM RSU compliance still happens in USD.`,
    subheadline: `Large India headcount, standard US equity plan. The INR cost basis per lot and Schedule FA records are your responsibility — the platform doesn't provide it.`,
    seoTitle: 'Sprinklr RSU India — CXM India Team RSUs | Rovia',
    seoDescription: 'Indian Sprinklr employees: transfer CXM RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Sprinklr RSU India, CXM RSU India, Sprinklr Indian employees RSU, move CXM Rovia',
  },

  synopsys: {
    name: 'Synopsys', parent: 'Synopsys Inc.', ticker: 'SNPS', slug: 'synopsys',
    color: '#005A9C', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$490', hasLogo: true,
    headline: `SNPS in Fidelity.\nChip design tools run on precision. Your INR cost basis should too.`,
    subheadline: `Fidelity NetBenefits tracks your Synopsys RSUs in USD. The India-tax side — INR cost basis per lot, Schedule FA, FX repatriation — is work you do outside the platform.`,
    seoTitle: 'Synopsys RSU India — SNPS via Fidelity | Rovia',
    seoDescription: 'Indian Synopsys employees: transfer SNPS RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Synopsys RSU India, SNPS RSU India, Fidelity Synopsys India, move SNPS Rovia',
  },

  target: {
    name: 'Target', parent: 'Target Corporation', ticker: 'TGT', slug: 'target',
    color: '#CC0000', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$145', hasLogo: true,
    headline: `TGT in Fidelity.\nRetail at scale. Your RSU tax records still need the same attention.`,
    subheadline: `Fidelity NetBenefits tracks your Target RSUs in USD. The India-compliance side — INR cost basis, Schedule FA, FX on repatriation — is entirely manual work.`,
    seoTitle: 'Target RSU India — TGT via Fidelity | Rovia',
    seoDescription: 'Indian Target Corporation employees: transfer TGT RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup. Full guide.',
    seoKeywords: 'Target RSU India, TGT RSU India, Fidelity Target India, move TGT Rovia',
  },

  twilio: {
    name: 'Twilio', parent: 'Twilio Inc.', ticker: 'TWLO', slug: 'twilio',
    color: '#F22F46', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$65', hasLogo: true,
    headline: `TWLO in your equity plan.\nCommunications infrastructure. India RSU compliance is still manual.`,
    subheadline: `Your Twilio equity plan is USD-only. The INR cost basis per vest, Schedule FA data, and repatriation FX are all work that happens outside the platform.`,
    seoTitle: 'Twilio RSU India — TWLO via E*Trade | Rovia',
    seoDescription: 'Indian Twilio employees: transfer TWLO RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Twilio RSU India, TWLO RSU India, E*TRADE Twilio India, move TWLO Rovia',
  },

  visa: {
    name: 'Visa', parent: 'Visa Inc.', ticker: 'V', slug: 'visa',
    color: '#1A1F71', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$295', hasLogo: true,
    headline: `V in Fidelity.\nPayments infrastructure at scale. Your LTCG lot tracking is another matter.`,
    subheadline: `Fidelity NetBenefits tracks your Visa RSUs in USD. The INR cost basis per lot, Schedule FA, and FX on repatriation are manual work outside the platform.`,
    seoTitle: 'Visa RSU India — V via Fidelity, INR Tracked | Rovia',
    seoDescription: 'Indian Visa employees: transfer V RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Visa RSU India, V RSU India, Fidelity Visa India, move Visa RSU Rovia',
  },

  zscaler: {
    name: 'Zscaler', parent: 'Zscaler Inc.', ticker: 'ZS', slug: 'zscaler',
    color: '#175FFF', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$261', hasLogo: true,
    headline: `ZS in Shareworks.\nCloud-native security. India-native RSU compliance is on you.`,
    subheadline: `Shareworks tracks your Zscaler RSUs in USD. The INR cost basis per vest, SBI TT rate records, and Schedule FA data are all work that happens outside the platform.`,
    seoTitle: 'Zscaler RSU India — ZS via Morgan Stanley | Rovia',
    seoDescription: 'Indian Zscaler employees: transfer ZS RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Zscaler RSU India, ZS RSU India, Shareworks Zscaler India, move ZS Rovia',
  },
};

// ─────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────

export { companiesRaw as companies };

export const companyList = Object.keys(companiesRaw);

export const companyMeta = Object.values(companiesRaw).map((c) => ({
  slug: c.slug,
  name: c.name,
  ticker: c.ticker,
  color: c.color,
  hasLogo: c.hasLogo ?? false,
  broker: c.broker,
}));

// Group companies for homepage display
export const companyGroups = [
  {
    label: 'FAANG + Big Tech',
    slugs: ['google', 'meta', 'microsoft', 'amazon', 'apple', 'netflix'],
  },
  {
    label: 'Enterprise Software',
    slugs: ['salesforce', 'servicenow', 'adobe', 'oracle', 'intuit', 'autodesk', 'hubspot', 'pegasystems', 'progress-software', 'splunk'],
  },
  {
    label: 'Fintech & Payments',
    slugs: ['paypal', 'visa', 'uber'],
  },
  {
    label: 'Cloud & Security',
    slugs: ['cloudflare', 'zscaler', 'okta', 'fortinet', 'sentinelone', 'datadog', 'rubrik', 'confluent'],
  },
  {
    label: 'Semiconductors & EDA',
    slugs: ['intel', 'amd', 'arm', 'marvell', 'texas-instruments', 'lam-research', 'cadence', 'synopsys'],
  },
  {
    label: 'Developer Tools & SaaS',
    slugs: ['mongodb', 'snowflake', 'twilio', 'freshworks', 'sprinklr', 'new-relic', 'arista-networks', 'juniper-networks'],
  },
  {
    label: 'Enterprise & Industrial',
    slugs: ['honeywell', 'target', 'netapp', 'amdocs', 'eli-lilly'],
  },
];
