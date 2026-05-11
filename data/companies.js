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
    color: '#4285F4', broker: 'schwab', vestCycle: 'Quarterly', analystTarget: '$210', hasLogo: true,
    headline: 'You work at Google.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Googlers holding GOOGL RSUs in Charles Schwab pay ~₹5,000 per wire home, rebuild INR tax records manually every July, and call US support at midnight IST. Rovia was built to fix all three.',
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-etrade-stock-plan-india',
    brokerGuideLabel: 'Read: Rovia vs Schwab — the full comparison →',
    painPoints: [
      { icon: '₹', title: '~₹5,000 lost per $10,000 wire', detail: "Schwab's $25 outbound wire plus your Indian bank's FX spread (30–60 paise/USD) adds ₹4,000–₹7,000 every time you repatriate GOOGL proceeds." },
      { icon: '📋', title: 'USD-only cost basis', detail: 'Schwab reports in USD. Your India ITR needs INR cost basis at the vest-day SBI TT rate — manual rebuild every July.' },
      { icon: '⏰', title: 'US Pacific hours support', detail: "Schwab's customer service operates in US Pacific time. A problem at 10 AM IST means waiting 11+ hours." },
      { icon: '📄', title: 'No India-tax tooling', detail: 'No Schedule FA. No Form 67 / FTC prep. No 24-month LTCG countdown. All manual or CA-managed.' },
    ],
    steps: [
      { n: '01', title: 'Export your Schwab transaction history', detail: 'Log into Schwab Equity Award Center → Transactions → Export CSV of all vest, sell-to-cover, and post-vest sales. Save — this is your permanent lot ledger.' },
      { n: '02', title: 'Open your Rovia account', detail: 'PAN, Aadhaar, Indian bank account, video KYC. 1–3 business days. W-8BEN at onboarding for 25% US dividend rate.' },
      { n: '03', title: 'Initiate ACATS from Rovia', detail: "Rovia → 'Transfer shares in' → Sending broker: Charles Schwab & Co. Inc. → Schwab account number → Select GOOGL lots." },
      { n: '04', title: 'Confirm on Schwab', detail: 'Schwab emails authorization within 1–3 days. Confirm in Equity Award Center. One-time ACATS-out fee: ~$50.' },
      { n: '05', title: 'Wait 5–7 business days', detail: 'GOOGL shares arrive at Rovia with vest dates and cost basis intact. India 24-month LTCG clock continues from original vest.' },
      { n: '06', title: 'Reconcile lots', detail: 'Cross-check Rovia lots against the Step 1 CSV. Verify INR cost basis (Rovia applies SBI TT at each vest date).' },
    ],
    faq: [
      { q: 'Does Schwab charge a fee to transfer out?', a: 'Yes — typically $50 one-time ACATS-out fee. Standard broker transfer fee, not specific to Rovia.' },
      { q: "Will my Google vesting schedule change?", a: "No. Future GOOGL vests continue at Schwab. Don't close your account — only move already-vested shares to Rovia." },
      { q: 'Is the ACATS transfer a taxable event in India?', a: 'No. ACATS is not a sale — no capital gains triggered. Holding period continues from original vest.' },
    ],
    seoTitle: 'Google RSU India — Move GOOGL to Rovia | rovia.money',
    seoDescription: 'Indian Google employees: transfer GOOGL RSUs from Charles Schwab to Rovia. INR cost basis, 0 FX markup, Schedule FA auto-generated. Step-by-step ACATS guide.',
    seoKeywords: 'Google RSU India, GOOGL RSU Indian employees, Schwab RSU India, move RSU to Rovia, GOOGL ACATS India',
  },

  meta: {
    name: 'Meta', parent: 'Meta Platforms Inc.', ticker: 'META', slug: 'meta',
    color: '#0866FF', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$720', hasLogo: true,
    headline: 'You work at Meta.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Meta employees with META RSUs in Shareworks are losing thousands in FX fees per year and spending hours rebuilding INR tax records. Rovia automates both.',
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-morgan-stanley-shareworks-india',
    brokerGuideLabel: 'Read: Rovia vs Morgan Stanley at Work — the full comparison →',
    painPoints: [
      { icon: '₹', title: '~₹5,000 lost per $10,000 wire', detail: "Morgan Stanley's $25–$50 wire fee plus Indian bank FX spread = ₹4,000–₹7,000 per repatriation. On $50,000/year in vests, that's ₹20,000–₹35,000 gone." },
      { icon: '📋', title: 'USD-only reporting on Shareworks', detail: 'Shareworks reports in USD. India ITR needs INR cost basis per lot at vest-day SBI TT rate — manual rebuild every filing season.' },
      { icon: '🔢', title: 'FIFO default buries LTCG savings', detail: "Shareworks defaults to FIFO. For Indian residents with the 24-month LTCG rule, picking the right lot can mean the difference between 20% and 30% tax. The setting exists but isn't surfaced." },
      { icon: '📄', title: 'No India compliance tooling', detail: 'No Schedule FA. No Form 67 / FTC prep. No 24-month countdown per lot. You or your CA rebuilds all of this from the 1099-B every year.' },
    ],
    steps: [
      { n: '01', title: 'Export your Shareworks transaction history', detail: 'Log into shareworks.morganstanley.com → Reports → Tax documents + Transaction history. Export CSV of all vest, sell-to-cover, and sale events.' },
      { n: '02', title: 'Open your Rovia account', detail: 'PAN, Aadhaar, Indian bank account, video KYC. 1–3 business days. W-8BEN at onboarding for 25% US dividend withholding rate.' },
      { n: '03', title: 'Initiate ACATS from Rovia', detail: "Rovia → 'Transfer shares in' → Sending broker: Morgan Stanley Smith Barney LLC → Shareworks account number → Select META lots." },
      { n: '04', title: 'Confirm on Morgan Stanley at Work', detail: 'MSAW sends authorization request within 1–3 days. Confirm in Shareworks. Transfer-out fee: ~$50–$75.' },
      { n: '05', title: 'Wait 5–7 business days', detail: 'META shares arrive at Rovia. Lot dates and USD cost basis preserved. 24-month India LTCG clock continues from each original vest.' },
      { n: '06', title: 'Reconcile and verify INR basis', detail: 'Cross-check Rovia lots against Step 1 export. Verify INR cost basis (SBI TT at vest date). Raise discrepancies promptly.' },
    ],
    faq: [
      { q: "Morgan Stanley is transitioning plans — does that affect my transfer?", a: "If you transfer before the transition it's clean. After also works — the receiving side (Rovia/Alpaca) doesn't change. Either order is fine." },
      { q: 'Can I transfer only some META lots?', a: 'Yes. ACATS supports partial transfers. Many people start with lots they planned to sell anyway, evaluate Rovia for a quarter, then move the rest.' },
      { q: 'Does the transfer affect my vesting schedule?', a: "No. Future META vests continue at Morgan Stanley at Work. Don't close Shareworks — only move already-held shares." },
    ],
    seoTitle: 'Meta RSU India — Move META to Rovia | rovia.money',
    seoDescription: 'Indian Meta employees: transfer META RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Meta RSU India, META RSU Indian employees, Morgan Stanley Shareworks India, move META Rovia',
  },

  microsoft: {
    name: 'Microsoft', parent: 'Microsoft Corporation', ticker: 'MSFT', slug: 'microsoft',
    color: '#00A4EF', broker: 'morgan_stanley', vestCycle: 'Quarterly (Feb, May, Aug, Nov)', analystTarget: '$510', hasLogo: true,
    headline: 'You work at Microsoft.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Microsoft employees holding MSFT RSUs in Shareworks face the same repatriation costs and India-tax gaps as every other Morgan Stanley plan. Rovia is built around Indian rules.',
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-morgan-stanley-shareworks-india',
    brokerGuideLabel: 'Read: Rovia vs Morgan Stanley at Work — the full comparison →',
    painPoints: [
      { icon: '₹', title: '~₹5,000 friction per $10,000 sent home', detail: "Morgan Stanley's $25–$50 wire + Indian bank FX spread. On a $40,000 annual MSFT vest, that's ₹16,000–₹28,000 in avoidable repatriation costs." },
      { icon: '📋', title: 'USD-only cost basis, INR rebuild is manual', detail: 'Shareworks provides a 1099-B in USD. For India filing, you need INR cost basis at vest-day SBI TT rate, lot by lot. Every Microsoft RSU holder in India does this manually.' },
      { icon: '📅', title: '24-month LTCG rule is invisible in Shareworks', detail: "India taxes foreign shares at a 24-month LTCG threshold. Shareworks shows US 12-month STCG/LTCG only. The 24-month countdown per lot is entirely your responsibility." },
      { icon: '📄', title: 'No India compliance support', detail: 'Schedule FA, Form 67, FTC — all DIY or CA-managed from Shareworks data. No automation, no India-format exports built in.' },
    ],
    steps: [
      { n: '01', title: 'Export Microsoft Shareworks history', detail: 'Log into shareworks.morganstanley.com → Reports → download CSV of all vest, sell-to-cover, and sale transactions. Microsoft vests quarterly on 1st of Feb, May, Aug, Nov.' },
      { n: '02', title: 'Open your Rovia account', detail: 'PAN, Aadhaar, Indian bank account, video KYC. 1–3 business days. W-8BEN at onboarding — reduces US dividend withholding from 30% to 25%.' },
      { n: '03', title: 'Initiate ACATS from Rovia', detail: "Rovia → 'Transfer shares in' → Sending broker: Morgan Stanley Smith Barney LLC → MSFT Shareworks account number → Select lots." },
      { n: '04', title: 'Confirm on Morgan Stanley at Work', detail: 'MSAW authorization request arrives in 1–3 days. Confirm in Shareworks. Transfer-out fee: ~$50–$75.' },
      { n: '05', title: 'Wait 5–7 business days', detail: 'MSFT shares land in Rovia with lot history intact. India 24-month LTCG clock unaffected.' },
      { n: '06', title: 'Reconcile — especially if MSFT had splits', detail: "Verify each lot's vest date and INR basis. If Microsoft ran a stock split during your holding window, confirm Rovia's lot count is correct." },
    ],
    faq: [
      { q: 'Microsoft vests on specific quarterly dates — does Rovia track those?', a: 'Yes. Rovia records the exact vest date per lot. INR cost basis is computed using the SBI TT rate on that specific vest date.' },
      { q: 'I have both RSUs and ESPP from Microsoft. Can I transfer both?', a: 'Yes. Both RSU and ESPP shares can be ACATS-transferred. ESPP has different cost-basis treatment — Rovia handles both.' },
      { q: "What if I'm on a work visa and might return to India?", a: "The RNOR window when returning to India creates a one-time tax planning opportunity. Rovia's India-based support can walk you through the RSU-specific implications." },
    ],
    seoTitle: 'Microsoft RSU India — Move MSFT to Rovia | rovia.money',
    seoDescription: 'Indian Microsoft employees: transfer MSFT RSUs from Morgan Stanley at Work to Rovia. INR cost basis, Schedule FA, 0 FX markup. Full ACATS guide.',
    seoKeywords: 'Microsoft RSU India, MSFT RSU Indian employees, Shareworks MSFT India, move MSFT Rovia',
  },

  amazon: {
    name: 'Amazon', parent: 'Amazon.com Inc.', ticker: 'AMZN', slug: 'amazon',
    color: '#FF9900', broker: 'etrade', vestCycle: 'Back-weighted: 5%–15%–40%–40% over 4 years', analystTarget: '$250', hasLogo: true,
    headline: 'You work at Amazon.\nYour RSUs deserve India-first management.',
    subheadline: "Amazon's back-weighted vesting means Indian employees accumulate large AMZN positions in E*TRADE for years — paying avoidable FX fees and managing lot-level tax records manually. Rovia changes that.",
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-etrade-stock-plan-india',
    brokerGuideLabel: 'Read: Rovia vs E*TRADE Stock Plan — the full comparison →',
    painPoints: [
      { icon: '⚠️', title: "Amazon's back-weighted vesting concentrates risk", detail: "The 5%–15%–40%–40% schedule means most of your AMZN value lands in years 3 and 4. Lot management, LTCG timing, and repatriation planning matter more at Amazon than most." },
      { icon: '₹', title: '~₹5,000 lost per $10,000 wire', detail: "E*TRADE's $25 wire + Indian bank FX spread. On a large year-4 AMZN vest, you may repatriate $60,000+ — that's ₹24,000–₹42,000 in FX friction in one year." },
      { icon: '🔄', title: 'Platform transition: E*TRADE → Morgan Stanley', detail: "Morgan Stanley acquired E*TRADE in 2020. Many plans are migrating to Shareworks branding. Your interface, login URL, and 1099 issuer may change mid-holding." },
      { icon: '📄', title: 'USD-only 1099-B, no India-format export', detail: 'E*TRADE issues a US 1099-B. India filing needs INR amounts, 24-month LTCG classification, and Schedule FA — none of which E*TRADE generates.' },
    ],
    steps: [
      { n: '01', title: 'Export E*TRADE Stock Plan history', detail: "Log into us.etrade.com/stockplans → Stock Plan Transactions or Tax Center → Export CSV covering every vest, sell-to-cover, and sale. Amazon's cliff-then-monthly schedule means many lots." },
      { n: '02', title: 'Open your Rovia account', detail: 'PAN, Aadhaar, Indian bank account, video KYC. 1–3 business days. W-8BEN at onboarding for 25% US dividend rate.' },
      { n: '03', title: 'Initiate ACATS from Rovia', detail: "Rovia → 'Transfer shares in' → Sending broker: E*TRADE Securities LLC → Your E*TRADE account number → Select AMZN lots." },
      { n: '04', title: 'Confirm on E*TRADE', detail: "E*TRADE emails authorization within 1–3 days. Confirm in your stock-plan account. ACATS-out fee: ~$50–$75." },
      { n: '05', title: 'Wait 5–7 business days', detail: "AMZN shares arrive at Rovia. Vest dates and cost basis preserved. 24-month LTCG clock unaffected. If E*TRADE transitions to Morgan Stanley branding before your transfer, the ACATS-out still works." },
      { n: '06', title: 'Reconcile — attention to lot count', detail: "Amazon's vesting creates many small lots. Verify each lot date and INR basis. The 24-month LTCG cutoff will vary lot by lot — Rovia's countdown shows this per lot." },
    ],
    faq: [
      { q: 'My AMZN E*TRADE plan is mid-transition to Morgan Stanley. Can I still transfer?', a: "Yes. Transfer before or after the MSAW transition — both work. If it's already fully migrated to Shareworks, use the Morgan Stanley at Work flow." },
      { q: "Amazon's Year 3 and Year 4 vests are large. Should I transfer everything at once?", a: "You can do a partial transfer — move Year 1 and Year 2 lots (already past 24-month threshold) first and move the rest when you're happy with Rovia." },
      { q: 'Does Amazon restrict RSU trading during blackouts? Does that affect ACATS?', a: "Amazon has trading windows. ACATS transfers are generally permitted during blackouts — you're moving shares, not selling them. Verify with your stock-plan administrator." },
    ],
    seoTitle: 'Amazon RSU India — Move AMZN to Rovia | rovia.money',
    seoDescription: "Indian Amazon employees: transfer AMZN RSUs from E*TRADE to Rovia. INR cost basis, 24-month LTCG tracking, 0 FX markup. Handles Amazon's back-weighted vesting. Full guide.",
    seoKeywords: 'Amazon RSU India, AMZN RSU Indian employees, E*TRADE stock plan India, move AMZN Rovia',
  },

  apple: {
    name: 'Apple', parent: 'Apple Inc.', ticker: 'AAPL', slug: 'apple',
    color: '#555555', broker: 'schwab', vestCycle: 'Quarterly', analystTarget: '$250', hasLogo: true,
    headline: 'You work at Apple.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Apple employees holding AAPL RSUs in Charles Schwab face USD-only reporting, wire fees, and US-hours support. Rovia is built for India.',
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-etrade-stock-plan-india',
    brokerGuideLabel: 'Read: Rovia vs Schwab — the full comparison →',
    painPoints: [
      { icon: '₹', title: '~₹5,000 friction per $10,000 repatriated', detail: "Schwab's $25 wire + Indian bank FX spread. Apple employees with large AAPL positions pay this multiple times per year." },
      { icon: '📋', title: 'USD cost basis — INR rebuild is annual manual work', detail: "Schwab reports every lot in USD. India filing needs INR cost basis at vest-day SBI TT rate. Apple's quarterly vesting = 4+ new lots per year to reconcile manually." },
      { icon: '🔒', title: "Schwab stock-plan accounts can't transfer to most US brokers", detail: "The only viable ACATS destination for Indian residents is a platform partnered with Alpaca Securities. Rovia is built around this." },
      { icon: '📄', title: 'No India-tax tools in Schwab', detail: 'No Schedule FA. No Form 67 / FTC prep. No 24-month LTCG countdown. All manual or CA-managed.' },
    ],
    steps: [
      { n: '01', title: 'Export Schwab Equity Award Center history', detail: 'Log in → Equity Award Center → Transactions → Export CSV of all vest, sell-to-cover, and sale events. Apple quarterly vesting = 4 new lots per year.' },
      { n: '02', title: 'Open your Rovia account', detail: 'PAN, Aadhaar, Indian bank account, video KYC. 1–3 business days. W-8BEN at onboarding.' },
      { n: '03', title: 'Initiate ACATS from Rovia', detail: "Rovia → 'Transfer shares in' → Sending broker: Charles Schwab & Co. Inc. → Schwab account number → Select AAPL lots." },
      { n: '04', title: 'Confirm on Schwab', detail: 'Schwab emails authorization within 1–3 days. Confirm in Equity Award Center. Schwab ACATS-out fee: ~$50.' },
      { n: '05', title: 'Wait 5–7 business days', detail: 'AAPL shares arrive at Rovia with vest history and cost basis preserved. India LTCG clock continues from original vest.' },
      { n: '06', title: 'Reconcile lots', detail: "Cross-check Rovia's lot view. Verify INR cost basis. Apple's quarterly cadence creates regular small lots — confirm each one." },
    ],
    faq: [
      { q: 'Apple has performance-condition RSUs. Does that affect the transfer?', a: "Once RSUs are vested and in your name at Schwab, they transfer like any other shares. Performance conditions only matter before vesting." },
      { q: 'Can I be selective about which lots to transfer?', a: "Yes. ACATS supports partial transfers. You can move only lots past the 24-month LTCG threshold and leave newer lots at Schwab." },
      { q: 'Does Apple restrict trading during blackouts? Does ACATS work during blackouts?', a: "ACATS transfers are generally permitted during trading blackouts — you're moving ownership, not executing a sale. Verify with your stock-plan administrator." },
    ],
    seoTitle: 'Apple RSU India — Move AAPL to Rovia | rovia.money',
    seoDescription: 'Indian Apple employees: transfer AAPL RSUs from Charles Schwab to Rovia. INR cost basis, 0 FX markup, India-tax reporting. Complete ACATS guide.',
    seoKeywords: 'Apple RSU India, AAPL RSU Indian employees, Schwab AAPL India, move AAPL Rovia',
  },

  netflix: {
    name: 'Netflix', parent: 'Netflix Inc.', ticker: 'NFLX', slug: 'netflix',
    color: '#E50914', broker: 'morgan_stanley', vestCycle: 'Monthly (unique to Netflix)', analystTarget: '$850', hasLogo: true,
    headline: 'You work at Netflix.\nYour RSUs deserve India-first management.',
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
      { n: '01', title: 'Export Shareworks transaction history', detail: "Log into shareworks.morganstanley.com → Reports → Transaction history + Tax documents. Netflix's monthly grants will produce a long list — expected." },
      { n: '02', title: 'Open your Rovia account', detail: 'PAN, Aadhaar, Indian bank, video KYC. 1–3 days. W-8BEN at onboarding for 25% US dividend withholding rate.' },
      { n: '03', title: 'Initiate ACATS from Rovia', detail: "Rovia → 'Transfer shares in' → Sending broker: Morgan Stanley Smith Barney LLC → Shareworks account number → Select NFLX lots." },
      { n: '04', title: 'Confirm on Morgan Stanley at Work', detail: 'MSAW sends authorization request in 1–3 days. Approve in Shareworks. Transfer-out fee: ~$50–$75.' },
      { n: '05', title: 'Wait 5–7 business days', detail: "NFLX shares arrive at Rovia with all lot dates preserved. Each lot's 24-month India LTCG clock continues from its original vest date." },
      { n: '06', title: 'Reconcile — pay attention to lot count', detail: "Netflix's monthly vesting creates more lots than any other FAANG. Verify every lot date and INR basis. Rovia's tracker shows 24-month LTCG countdown per lot." },
    ],
    faq: [
      { q: 'Netflix pays salary in RSUs. I have a huge number of lots. Can Rovia handle this?', a: "Yes — Netflix employees typically have the most lots of any FAANG. Rovia's lot tracker is built for this. Every lot gets a vest date, INR cost basis, and 24-month LTCG countdown." },
      { q: 'Netflix lets employees choose their RSU/salary split. Does that affect how shares are held?', a: "No — regardless of the split, all vested NFLX RSUs end up in Shareworks under your name. The ACATS transfer process is the same." },
      { q: "I've held some NFLX lots for over 24 months. Can I transfer just those?", a: "Yes. Partial ACATS transfers are supported. Move LTCG-eligible lots to Rovia first; defer the short-term lots." },
    ],
    seoTitle: 'Netflix RSU India — Move NFLX to Rovia | rovia.money',
    seoDescription: 'Indian Netflix employees: transfer NFLX RSUs from Morgan Stanley at Work to Rovia. 12+ lots/year tracked with INR cost basis and 24-month LTCG countdown. Full guide.',
    seoKeywords: 'Netflix RSU India, NFLX RSU Indian employees, Shareworks NFLX India, Netflix monthly vest India, move NFLX Rovia',
  },

  // ── USER'S ADDITIONAL LIST ─────────────────────────────────────────────────

  salesforce: {
    name: 'Salesforce', parent: 'Salesforce Inc.', ticker: 'CRM', slug: 'salesforce',
    color: '#00A1E0', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$320', hasLogo: true,
    headline: 'You work at Salesforce.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Salesforce employees with CRM RSUs in E*TRADE face the same USD reporting, wire costs, and India-tax gaps as every other non-India-aware plan. Rovia is built around Indian rules, not American ones.',
    seoTitle: 'Salesforce RSU India — Move CRM to Rovia | rovia.money',
    seoDescription: 'Indian Salesforce employees: transfer CRM RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Salesforce RSU India, CRM RSU India, E*TRADE Salesforce India, move CRM Rovia',
  },

  servicenow: {
    name: 'ServiceNow', parent: 'ServiceNow Inc.', ticker: 'NOW', slug: 'servicenow',
    color: '#62D84E', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$1,050', hasLogo: true,
    headline: 'You work at ServiceNow.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian ServiceNow employees with NOW RSUs in Morgan Stanley at Work face the same USD-only reporting and repatriation friction as every Shareworks plan. Rovia automates the India-tax layer.',
    seoTitle: 'ServiceNow RSU India — Move NOW to Rovia | rovia.money',
    seoDescription: 'Indian ServiceNow employees: transfer NOW RSUs from Morgan Stanley at Work to Rovia. INR cost basis, Schedule FA, 0 FX markup. Full ACATS guide.',
    seoKeywords: 'ServiceNow RSU India, NOW RSU India, Morgan Stanley Shareworks India ServiceNow, move NOW Rovia',
  },

  paypal: {
    name: 'PayPal', parent: 'PayPal Holdings Inc.', ticker: 'PYPL', slug: 'paypal',
    color: '#003087', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$85', hasLogo: true,
    headline: 'You work at PayPal.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian PayPal employees with PYPL RSUs face the same USD reporting gaps and FX friction as every other US employer plan. Rovia provides INR cost basis, 0 FX markup, and India-first compliance tooling.',
    seoTitle: 'PayPal RSU India — Move PYPL to Rovia | rovia.money',
    seoDescription: 'Indian PayPal employees: transfer PYPL RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'PayPal RSU India, PYPL RSU India, E*TRADE PayPal India, move PYPL Rovia',
  },

  uber: {
    name: 'Uber', parent: 'Uber Technologies Inc.', ticker: 'UBER', slug: 'uber',
    color: '#000000', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$80', hasLogo: true,
    headline: 'You work at Uber.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Uber employees with UBER RSUs are stuck with the same USD-only reporting and wire friction as every other US employer plan. Rovia was built to fix this for Indian residents.',
    seoTitle: 'Uber RSU India — Move UBER to Rovia | rovia.money',
    seoDescription: 'Indian Uber employees: transfer UBER RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, India-tax reporting. Full ACATS migration guide.',
    seoKeywords: 'Uber RSU India, UBER RSU India, E*TRADE Uber India, move UBER Rovia',
  },

  adobe: {
    name: 'Adobe', parent: 'Adobe Inc.', ticker: 'ADBE', slug: 'adobe',
    color: '#FF0000', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$440', hasLogo: true,
    headline: 'You work at Adobe.\nYour RSUs deserve India-first management.',
    subheadline: "Indian Adobe employees with ADBE RSUs face USD-only reporting, wire fees, and no India-tax tooling at their employer broker. Rovia provides everything India-specific that E*TRADE doesn't.",
    seoTitle: 'Adobe RSU India — Move ADBE to Rovia | rovia.money',
    seoDescription: 'Indian Adobe employees: transfer ADBE RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA auto-generated. Full ACATS guide.',
    seoKeywords: 'Adobe RSU India, ADBE RSU India, E*TRADE Adobe India, move ADBE Rovia',
  },

  oracle: {
    name: 'Oracle', parent: 'Oracle Corporation', ticker: 'ORCL', slug: 'oracle',
    color: '#C74634', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$175', hasLogo: true,
    headline: 'You work at Oracle.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Oracle employees with ORCL RSUs in Fidelity NetBenefits face USD-only reporting and no India-tax tooling. Rovia is built around Indian rules — INR cost basis, 24-month LTCG tracking, Schedule FA.',
    seoTitle: 'Oracle RSU India — Move ORCL to Rovia | rovia.money',
    seoDescription: 'Indian Oracle employees: transfer ORCL RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Oracle RSU India, ORCL RSU India, Fidelity NetBenefits Oracle India, move ORCL Rovia',
  },

  intuit: {
    name: 'Intuit', parent: 'Intuit Inc.', ticker: 'INTU', slug: 'intuit',
    color: '#236CFF', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$620', hasLogo: true,
    headline: 'You work at Intuit.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Intuit employees with INTU RSUs in E*TRADE deal with the same USD reporting, FX friction, and India-tax gaps as every other non-India-aware plan. Rovia solves all three.',
    seoTitle: 'Intuit RSU India — Move INTU to Rovia | rovia.money',
    seoDescription: 'Indian Intuit employees: transfer INTU RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Intuit RSU India, INTU RSU India, E*TRADE Intuit India, move INTU Rovia',
  },

  intel: {
    name: 'Intel', parent: 'Intel Corporation', ticker: 'INTC', slug: 'intel',
    color: '#0071C5', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$22', hasLogo: true,
    headline: 'You work at Intel.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Intel employees with INTC RSUs face USD-only reporting and no India-tax tooling at their employer broker. Rovia provides INR cost basis, 24-month LTCG tracking, and 0 platform FX markup.',
    seoTitle: 'Intel RSU India — Move INTC to Rovia | rovia.money',
    seoDescription: 'Indian Intel employees: transfer INTC RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Intel RSU India, INTC RSU India, Intel RSU Indian employees, move INTC Rovia',
  },

  // ── LOGO FOLDER 38 ─────────────────────────────────────────────────────────

  amdocs: {
    name: 'Amdocs', parent: 'Amdocs Limited', ticker: 'DOX', slug: 'amdocs',
    color: '#004B87', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$85', hasLogo: true,
    headline: 'You work at Amdocs.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Amdocs employees with DOX RSUs deal with the same USD reporting gaps and FX friction at their employer broker. Rovia is built around Indian rules — INR cost basis, 0 FX markup, India-first support.',
    seoTitle: 'Amdocs RSU India — Move DOX to Rovia | rovia.money',
    seoDescription: 'Indian Amdocs employees: transfer DOX RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Amdocs RSU India, DOX RSU India, Amdocs RSU Indian employees, move DOX Rovia',
  },

  autodesk: {
    name: 'Autodesk', parent: 'Autodesk Inc.', ticker: 'ADSK', slug: 'autodesk',
    color: '#0696D7', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$270', hasLogo: true,
    headline: 'You work at Autodesk.\nYour RSUs deserve India-first management.',
    subheadline: "Indian Autodesk employees with ADSK RSUs in E*TRADE face the same USD reporting, wire costs, and India-tax gaps as every other US employer plan. Rovia provides what E*TRADE doesn't.",
    seoTitle: 'Autodesk RSU India — Move ADSK to Rovia | rovia.money',
    seoDescription: 'Indian Autodesk employees: transfer ADSK RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Autodesk RSU India, ADSK RSU India, E*TRADE Autodesk India, move ADSK Rovia',
  },

  datadog: {
    name: 'Datadog', parent: 'Datadog Inc.', ticker: 'DDOG', slug: 'datadog',
    color: '#632CA6', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$140', hasLogo: true,
    headline: 'You work at Datadog.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Datadog employees with DDOG RSUs in Shareworks face USD-only reporting, wire friction, and no India-tax tooling. Rovia automates the India compliance layer.',
    seoTitle: 'Datadog RSU India — Move DDOG to Rovia | rovia.money',
    seoDescription: 'Indian Datadog employees: transfer DDOG RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Datadog RSU India, DDOG RSU India, Morgan Stanley Datadog India, move DDOG Rovia',
  },

  fortinet: {
    name: 'Fortinet', parent: 'Fortinet Inc.', ticker: 'FTNT', slug: 'fortinet',
    color: '#EE3124', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$90', hasLogo: true,
    headline: 'You work at Fortinet.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Fortinet employees with FTNT RSUs face the same USD reporting gaps and FX friction at their employer broker. Rovia is built around Indian rules.',
    seoTitle: 'Fortinet RSU India — Move FTNT to Rovia | rovia.money',
    seoDescription: 'Indian Fortinet employees: transfer FTNT RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Fortinet RSU India, FTNT RSU India, E*TRADE Fortinet India, move FTNT Rovia',
  },

  honeywell: {
    name: 'Honeywell', parent: 'Honeywell International Inc.', ticker: 'HON', slug: 'honeywell',
    color: '#D60029', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$215', hasLogo: true,
    headline: 'You work at Honeywell.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Honeywell employees with HON RSUs in Fidelity NetBenefits face USD-only reporting and no India-tax tooling. Rovia provides INR cost basis, 24-month LTCG tracking, and Schedule FA.',
    seoTitle: 'Honeywell RSU India — Move HON to Rovia | rovia.money',
    seoDescription: 'Indian Honeywell employees: transfer HON RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Honeywell RSU India, HON RSU India, Fidelity Honeywell India, move HON Rovia',
  },

  hubspot: {
    name: 'HubSpot', parent: 'HubSpot Inc.', ticker: 'HUBS', slug: 'hubspot',
    color: '#FF7A59', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$670', hasLogo: true,
    headline: 'You work at HubSpot.\nYour RSUs deserve India-first management.',
    subheadline: "Indian HubSpot employees with HUBS RSUs in E*TRADE face USD-only reporting, wire fees, and no India-tax tooling. Rovia provides what E*TRADE doesn't.",
    seoTitle: 'HubSpot RSU India — Move HUBS to Rovia | rovia.money',
    seoDescription: 'Indian HubSpot employees: transfer HUBS RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'HubSpot RSU India, HUBS RSU India, E*TRADE HubSpot India, move HUBS Rovia',
  },

  'juniper-networks': {
    name: 'Juniper Networks', parent: 'Juniper Networks Inc. (now HPE)', ticker: 'JNPR', slug: 'juniper-networks',
    color: '#009BDE', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: 'Acquired by HPE (2024)', hasLogo: true,
    headline: 'You work at Juniper Networks.\nYour RSUs deserve India-first management.',
    subheadline: 'Juniper Networks was acquired by HPE in 2024. If you have unvested JNPR RSUs that converted to HPE equity or cash, Rovia can help you manage the India-side reporting and repatriation.',
    seoTitle: 'Juniper Networks RSU India — Move to Rovia | rovia.money',
    seoDescription: 'Indian Juniper Networks employees: manage JNPR / HPE RSUs with Rovia. INR cost basis, 0 FX markup, India-tax reporting. Full guide.',
    seoKeywords: 'Juniper Networks RSU India, JNPR RSU India, Juniper HPE RSU India, move Rovia',
  },

  'lam-research': {
    name: 'Lam Research', parent: 'Lam Research Corporation', ticker: 'LRCX', slug: 'lam-research',
    color: '#CC0000', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$950', hasLogo: true,
    headline: 'You work at Lam Research.\nYour RSUs deserve India-first management.',
    subheadline: "Indian Lam Research employees with LRCX RSUs face USD reporting gaps and FX friction at their employer broker. Rovia provides the India-specific tooling that E*TRADE doesn't.",
    seoTitle: 'Lam Research RSU India — Move LRCX to Rovia | rovia.money',
    seoDescription: 'Indian Lam Research employees: transfer LRCX RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Lam Research RSU India, LRCX RSU India, E*TRADE Lam Research India, move LRCX Rovia',
  },

  'eli-lilly': {
    name: 'Eli Lilly', parent: 'Eli Lilly and Company', ticker: 'LLY', slug: 'eli-lilly',
    color: '#D52B1E', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$950', hasLogo: true,
    headline: 'You work at Eli Lilly.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Eli Lilly employees with LLY RSUs in E*TRADE face USD-only reporting and no India-tax tooling. Rovia automates INR cost basis, Schedule FA, and repatriation for Indian residents.',
    seoTitle: 'Eli Lilly RSU India — Move LLY to Rovia | rovia.money',
    seoDescription: 'Indian Eli Lilly employees: transfer LLY RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'Eli Lilly RSU India, LLY RSU India, E*TRADE Eli Lilly India, move LLY Rovia',
  },

  marvell: {
    name: 'Marvell Technology', parent: 'Marvell Technology Inc.', ticker: 'MRVL', slug: 'marvell',
    color: '#006CB7', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$85', hasLogo: true,
    headline: 'You work at Marvell.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Marvell employees with MRVL RSUs in Shareworks face USD reporting, FX friction, and no India-tax tooling. Rovia provides what Morgan Stanley at Work doesn\'t.',
    seoTitle: 'Marvell Technology RSU India — Move MRVL to Rovia | rovia.money',
    seoDescription: 'Indian Marvell Technology employees: transfer MRVL RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup. Full guide.',
    seoKeywords: 'Marvell RSU India, MRVL RSU India, Shareworks Marvell India, move MRVL Rovia',
  },

  mongodb: {
    name: 'MongoDB', parent: 'MongoDB Inc.', ticker: 'MDB', slug: 'mongodb',
    color: '#00ED64', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$280', hasLogo: true,
    headline: 'You work at MongoDB.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian MongoDB employees with MDB RSUs in E*TRADE face USD-only reporting and FX friction. Rovia provides India-specific tooling — INR cost basis, Schedule FA, and 0 platform FX markup.',
    seoTitle: 'MongoDB RSU India — Move MDB to Rovia | rovia.money',
    seoDescription: 'Indian MongoDB employees: transfer MDB RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'MongoDB RSU India, MDB RSU India, E*TRADE MongoDB India, move MDB Rovia',
  },

  'new-relic': {
    name: 'New Relic', parent: 'New Relic Inc. (private since 2024)', ticker: 'NEWR', slug: 'new-relic',
    color: '#008C99', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: 'Taken private (2024)', hasLogo: true,
    headline: 'You work at New Relic.\nYour RSUs deserve India-first management.',
    subheadline: 'New Relic was taken private by Francisco Partners in 2024. If you have RSU-related proceeds or converted equity, Rovia can help you manage the India-side reporting, repatriation, and compliance.',
    seoTitle: 'New Relic RSU India — Manage with Rovia | rovia.money',
    seoDescription: 'Indian New Relic employees: manage NEWR RSU proceeds and equity with Rovia. INR reporting, 0 FX markup, India-first compliance. Full guide.',
    seoKeywords: 'New Relic RSU India, NEWR RSU India, New Relic private equity India, Rovia',
  },

  okta: {
    name: 'Okta', parent: 'Okta Inc.', ticker: 'OKTA', slug: 'okta',
    color: '#007DC1', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$115', hasLogo: true,
    headline: 'You work at Okta.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Okta employees with OKTA RSUs in E*TRADE face USD-only reporting and no India-tax tooling. Rovia automates INR cost basis, Schedule FA, and 0 platform FX markup on repatriation.',
    seoTitle: 'Okta RSU India — Move OKTA to Rovia | rovia.money',
    seoDescription: 'Indian Okta employees: transfer OKTA RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Okta RSU India, OKTA RSU India, E*TRADE Okta India, move OKTA Rovia',
  },

  snowflake: {
    name: 'Snowflake', parent: 'Snowflake Inc.', ticker: 'SNOW', slug: 'snowflake',
    color: '#29B5E8', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$190', hasLogo: true,
    headline: 'You work at Snowflake.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Snowflake employees with SNOW RSUs face USD-only reporting, FX friction, and no India-tax tooling at their employer broker. Rovia provides what E*TRADE doesn\'t.',
    seoTitle: 'Snowflake RSU India — Move SNOW to Rovia | rovia.money',
    seoDescription: 'Indian Snowflake employees: transfer SNOW RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Snowflake RSU India, SNOW RSU India, E*TRADE Snowflake India, move SNOW Rovia',
  },

  splunk: {
    name: 'Splunk', parent: 'Splunk Inc. (acquired by Cisco 2024)', ticker: 'SPLK', slug: 'splunk',
    color: '#65A637', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: 'Acquired by Cisco (Mar 2024)', hasLogo: true,
    headline: 'You work at Splunk / Cisco.\nYour RSUs deserve India-first management.',
    subheadline: 'Splunk was acquired by Cisco in March 2024. Unvested SPLK RSUs were converted to Cisco (CSCO) equity or cash. Rovia helps Indian employees manage the India-side reporting and repatriation on converted equity.',
    seoTitle: 'Splunk RSU India — Manage with Rovia | rovia.money',
    seoDescription: 'Indian Splunk employees: manage SPLK/Cisco RSUs and acquisition proceeds with Rovia. INR reporting, 0 FX markup, India-tax compliance. Full guide.',
    seoKeywords: 'Splunk RSU India, SPLK RSU India, Cisco Splunk RSU India, Rovia',
  },

  'texas-instruments': {
    name: 'Texas Instruments', parent: 'Texas Instruments Inc.', ticker: 'TXN', slug: 'texas-instruments',
    color: '#C8102E', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$185', hasLogo: true,
    headline: 'You work at Texas Instruments.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian TI employees with TXN RSUs in Fidelity NetBenefits face USD-only reporting and no India-tax tooling. Rovia provides INR cost basis, 24-month LTCG tracking, and Schedule FA — all automatic.',
    seoTitle: 'Texas Instruments RSU India — Move TXN to Rovia | rovia.money',
    seoDescription: 'Indian Texas Instruments employees: transfer TXN RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Texas Instruments RSU India, TXN RSU India, Fidelity TI India, move TXN Rovia',
  },

  // ── LOGO FOLDER 39 ─────────────────────────────────────────────────────────

  amd: {
    name: 'AMD', parent: 'Advanced Micro Devices Inc.', ticker: 'AMD', slug: 'amd',
    color: '#ED1C24', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$170', hasLogo: true,
    headline: 'You work at AMD.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian AMD employees with AMD RSUs in Shareworks face USD-only reporting and no India-tax tooling. Rovia automates INR cost basis, Schedule FA, and 0 FX markup on repatriation.',
    seoTitle: 'AMD RSU India — Move AMD to Rovia | rovia.money',
    seoDescription: 'Indian AMD employees: transfer AMD RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'AMD RSU India, AMD RSU Indian employees, Morgan Stanley AMD India, move AMD Rovia',
  },

  'arista-networks': {
    name: 'Arista Networks', parent: 'Arista Networks Inc.', ticker: 'ANET', slug: 'arista-networks',
    color: '#007DC3', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$330', hasLogo: true,
    headline: 'You work at Arista Networks.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Arista employees with ANET RSUs in E*TRADE face USD-only reporting and FX friction. Rovia provides India-specific tooling — INR cost basis, Schedule FA, and 0 platform FX markup.',
    seoTitle: 'Arista Networks RSU India — Move ANET to Rovia | rovia.money',
    seoDescription: 'Indian Arista Networks employees: transfer ANET RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Arista Networks RSU India, ANET RSU India, E*TRADE Arista India, move ANET Rovia',
  },

  arm: {
    name: 'Arm', parent: 'Arm Holdings plc', ticker: 'ARM', slug: 'arm',
    color: '#009FE3', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$120', hasLogo: true,
    headline: 'You work at Arm.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Arm employees with ARM RSUs in Morgan Stanley at Work face USD-only reporting and no India-tax tooling. Rovia automates the full India compliance stack — INR basis, Schedule FA, 0 FX markup.',
    seoTitle: 'Arm Holdings RSU India — Move ARM to Rovia | rovia.money',
    seoDescription: 'Indian Arm employees: transfer ARM RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Arm Holdings RSU India, ARM RSU India, Morgan Stanley Arm India, move ARM Rovia',
  },

  cadence: {
    name: 'Cadence', parent: 'Cadence Design Systems Inc.', ticker: 'CDNS', slug: 'cadence',
    color: '#FF6900', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$280', hasLogo: true,
    headline: 'You work at Cadence.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Cadence employees with CDNS RSUs in E*TRADE face USD-only reporting, wire fees, and no India-tax tooling. Rovia provides what the employer broker doesn\'t.',
    seoTitle: 'Cadence RSU India — Move CDNS to Rovia | rovia.money',
    seoDescription: 'Indian Cadence Design Systems employees: transfer CDNS RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Cadence RSU India, CDNS RSU India, E*TRADE Cadence India, move CDNS Rovia',
  },

  cloudflare: {
    name: 'Cloudflare', parent: 'Cloudflare Inc.', ticker: 'NET', slug: 'cloudflare',
    color: '#F48120', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$105', hasLogo: true,
    headline: 'You work at Cloudflare.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Cloudflare employees with NET RSUs in Shareworks face USD-only reporting, FX friction, and no India-tax tooling. Rovia automates the India compliance layer.',
    seoTitle: 'Cloudflare RSU India — Move NET to Rovia | rovia.money',
    seoDescription: 'Indian Cloudflare employees: transfer NET RSUs from Morgan Stanley at Work to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Cloudflare RSU India, NET RSU India, Shareworks Cloudflare India, move NET Rovia',
  },

  confluent: {
    name: 'Confluent', parent: 'Confluent Inc.', ticker: 'CFLT', slug: 'confluent',
    color: '#0068B1', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$32', hasLogo: true,
    headline: 'You work at Confluent.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Confluent employees with CFLT RSUs face USD-only reporting and FX friction at their employer broker. Rovia provides India-specific tooling — INR cost basis, Schedule FA, and 0 platform FX markup.',
    seoTitle: 'Confluent RSU India — Move CFLT to Rovia | rovia.money',
    seoDescription: 'Indian Confluent employees: transfer CFLT RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Confluent RSU India, CFLT RSU India, E*TRADE Confluent India, move CFLT Rovia',
  },

  freshworks: {
    name: 'Freshworks', parent: 'Freshworks Inc.', ticker: 'FRSH', slug: 'freshworks',
    color: '#33C65E', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$14', hasLogo: true,
    headline: 'You work at Freshworks.\nYour RSUs deserve India-first management.',
    subheadline: 'Freshworks is Indian-founded and NASDAQ-listed — but Indian employees still face the same USD reporting gaps and FX friction at their US employer broker. Rovia is built for exactly this situation.',
    seoTitle: 'Freshworks RSU India — Move FRSH to Rovia | rovia.money',
    seoDescription: 'Indian Freshworks employees: transfer FRSH RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide for Indian residents.',
    seoKeywords: 'Freshworks RSU India, FRSH RSU India, Freshworks Indian employees RSU, move FRSH Rovia',
  },

  netapp: {
    name: 'NetApp', parent: 'NetApp Inc.', ticker: 'NTAP', slug: 'netapp',
    color: '#0099CC', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$125', hasLogo: true,
    headline: 'You work at NetApp.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian NetApp employees with NTAP RSUs in Fidelity NetBenefits face USD-only reporting and no India-tax tooling. Rovia provides INR cost basis, 24-month LTCG tracking, and Schedule FA.',
    seoTitle: 'NetApp RSU India — Move NTAP to Rovia | rovia.money',
    seoDescription: 'Indian NetApp employees: transfer NTAP RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'NetApp RSU India, NTAP RSU India, Fidelity NetApp India, move NTAP Rovia',
  },

  pegasystems: {
    name: 'Pegasystems', parent: 'Pegasystems Inc.', ticker: 'PEGA', slug: 'pegasystems',
    color: '#018202', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$70', hasLogo: true,
    headline: 'You work at Pega.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Pegasystems employees with PEGA RSUs face USD-only reporting and FX friction at their employer broker. Rovia provides India-specific tooling that the employer broker doesn\'t.',
    seoTitle: 'Pegasystems RSU India — Move PEGA to Rovia | rovia.money',
    seoDescription: 'Indian Pegasystems employees: transfer PEGA RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Pegasystems RSU India, PEGA RSU India, Pega RSU Indian employees, move PEGA Rovia',
  },

  'progress-software': {
    name: 'Progress Software', parent: 'Progress Software Corporation', ticker: 'PRGS', slug: 'progress-software',
    color: '#7C4FAC', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$55', hasLogo: true,
    headline: 'You work at Progress Software.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Progress Software employees with PRGS RSUs face USD-only reporting and FX friction. Rovia provides INR cost basis, Schedule FA, and 0 platform FX markup on repatriation.',
    seoTitle: 'Progress Software RSU India — Move PRGS to Rovia | rovia.money',
    seoDescription: 'Indian Progress Software employees: transfer PRGS RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Progress Software RSU India, PRGS RSU India, Progress Software Indian employees, move PRGS Rovia',
  },

  rubrik: {
    name: 'Rubrik', parent: 'Rubrik Inc.', ticker: 'RBRK', slug: 'rubrik',
    color: '#0D6AFF', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$65', hasLogo: true,
    headline: 'You work at Rubrik.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Rubrik employees with RBRK RSUs face USD-only reporting and FX friction at their employer broker. Rovia is built around Indian rules — INR cost basis, 0 FX markup, India-first support.',
    seoTitle: 'Rubrik RSU India — Move RBRK to Rovia | rovia.money',
    seoDescription: 'Indian Rubrik employees: transfer RBRK RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Rubrik RSU India, RBRK RSU India, Rubrik RSU Indian employees, move RBRK Rovia',
  },

  sentinelone: {
    name: 'SentinelOne', parent: 'SentinelOne Inc.', ticker: 'S', slug: 'sentinelone',
    color: '#473DCD', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$25', hasLogo: true,
    headline: 'You work at SentinelOne.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian SentinelOne employees with S RSUs face USD-only reporting and FX friction at their employer broker. Rovia provides India-specific tooling — INR cost basis, Schedule FA, and 0 platform FX markup.',
    seoTitle: 'SentinelOne RSU India — Move to Rovia | rovia.money',
    seoDescription: 'Indian SentinelOne employees: transfer S RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full ACATS guide.',
    seoKeywords: 'SentinelOne RSU India, S RSU India, SentinelOne Indian employees RSU, move Rovia',
  },

  sprinklr: {
    name: 'Sprinklr', parent: 'Sprinklr Inc.', ticker: 'CXM', slug: 'sprinklr',
    color: '#0278DB', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$11', hasLogo: true,
    headline: 'You work at Sprinklr.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Sprinklr employees with CXM RSUs face the same USD reporting gaps and FX friction as every other US employer plan. Rovia is built for Indian residents — INR cost basis, 0 FX markup, Schedule FA.',
    seoTitle: 'Sprinklr RSU India — Move CXM to Rovia | rovia.money',
    seoDescription: 'Indian Sprinklr employees: transfer CXM RSUs to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Sprinklr RSU India, CXM RSU India, Sprinklr Indian employees RSU, move CXM Rovia',
  },

  synopsys: {
    name: 'Synopsys', parent: 'Synopsys Inc.', ticker: 'SNPS', slug: 'synopsys',
    color: '#005A9C', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$465', hasLogo: true,
    headline: 'You work at Synopsys.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Synopsys employees with SNPS RSUs in Fidelity NetBenefits face USD-only reporting and no India-tax tooling. Rovia provides INR cost basis, Schedule FA, and 0 platform FX markup.',
    seoTitle: 'Synopsys RSU India — Move SNPS to Rovia | rovia.money',
    seoDescription: 'Indian Synopsys employees: transfer SNPS RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Synopsys RSU India, SNPS RSU India, Fidelity Synopsys India, move SNPS Rovia',
  },

  target: {
    name: 'Target', parent: 'Target Corporation', ticker: 'TGT', slug: 'target',
    color: '#CC0000', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$145', hasLogo: true,
    headline: 'You work at Target.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Target employees with TGT RSUs in Fidelity NetBenefits face USD-only reporting and no India-tax tooling. Rovia automates INR cost basis, Schedule FA, and repatriation for Indian residents.',
    seoTitle: 'Target RSU India — Move TGT to Rovia | rovia.money',
    seoDescription: 'Indian Target Corporation employees: transfer TGT RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup. Full guide.',
    seoKeywords: 'Target RSU India, TGT RSU India, Fidelity Target India, move TGT Rovia',
  },

  twilio: {
    name: 'Twilio', parent: 'Twilio Inc.', ticker: 'TWLO', slug: 'twilio',
    color: '#F22F46', broker: 'etrade', vestCycle: 'Quarterly', analystTarget: '$65', hasLogo: true,
    headline: 'You work at Twilio.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Twilio employees with TWLO RSUs face USD-only reporting, wire fees, and no India-tax tooling at their employer broker. Rovia provides what E*TRADE doesn\'t.',
    seoTitle: 'Twilio RSU India — Move TWLO to Rovia | rovia.money',
    seoDescription: 'Indian Twilio employees: transfer TWLO RSUs from E*TRADE to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Twilio RSU India, TWLO RSU India, E*TRADE Twilio India, move TWLO Rovia',
  },

  visa: {
    name: 'Visa', parent: 'Visa Inc.', ticker: 'V', slug: 'visa',
    color: '#1A1F71', broker: 'fidelity', vestCycle: 'Quarterly', analystTarget: '$295', hasLogo: true,
    headline: 'You work at Visa.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Visa employees with V RSUs in Fidelity NetBenefits face USD-only reporting and no India-tax tooling. Rovia provides INR cost basis, 24-month LTCG tracking, and Schedule FA — all automatic.',
    seoTitle: 'Visa RSU India — Move V to Rovia | rovia.money',
    seoDescription: 'Indian Visa employees: transfer V RSUs from Fidelity NetBenefits to Rovia. INR cost basis, 0 FX markup, Schedule FA. Full guide.',
    seoKeywords: 'Visa RSU India, V RSU India, Fidelity Visa India, move Visa RSU Rovia',
  },

  zscaler: {
    name: 'Zscaler', parent: 'Zscaler Inc.', ticker: 'ZS', slug: 'zscaler',
    color: '#175FFF', broker: 'morgan_stanley', vestCycle: 'Quarterly', analystTarget: '$200', hasLogo: true,
    headline: 'You work at Zscaler.\nYour RSUs deserve India-first management.',
    subheadline: 'Indian Zscaler employees with ZS RSUs in Shareworks face USD-only reporting, FX friction, and no India-tax tooling. Rovia automates the India compliance layer.',
    seoTitle: 'Zscaler RSU India — Move ZS to Rovia | rovia.money',
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
