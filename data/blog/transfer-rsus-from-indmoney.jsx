import Link from 'next/link';

// ─────────────────────────────────────────────
// Broker Transfer #6 — INDmoney → Rovia
// ─────────────────────────────────────────────

export const meta = {
  slug: 'transfer-rsus-from-indmoney',
  title: 'How to Transfer RSUs from INDmoney to Rovia',
  dek: 'INDmoney built an India-friendly US-equity gateway via partner-broker rails. Migrating your RSU and US stock holdings to Rovia involves account closure, position transfer or liquidation, and re-establishing lot-level INR cost basis.',
  publishDate: '2026-06-05',
  updatedDate: '2026-06-05',
  author: 'Rovia Editorial',
  tags: ['indmoney', 'platform', 'transfer', 'rsu', 'rovia'],
  readingMinutes: 7,
  seoTitle: 'Transfer RSUs from INDmoney to Rovia: Migration Playbook (2026)',
  seoDescription:
    'How to transfer RSUs and US equity holdings from INDmoney to Rovia. Account closure, position transfer or liquidation, lot history reconstruction, FX considerations.',
  seoKeywords:
    'transfer rsu indmoney to rovia, indmoney to rovia migration, indmoney us equity migration, indmoney account closure us stocks',
};

const ARTICLE_TEXT = '#cbd5e1';
const SOFT_TEXT = '#8892a4';
const HEAD_TEXT = '#f1f5f9';
const CARD_BG = '#0a1220';
const HAIR_LINE = 'rgba(255,255,255,0.07)';

const sH2 = { fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, color: HEAD_TEXT, letterSpacing: '-0.02em', lineHeight: 1.25, marginTop: '56px', marginBottom: '18px' };
const sH3 = { fontSize: '18px', fontWeight: 700, color: HEAD_TEXT, letterSpacing: '-0.01em', marginTop: '32px', marginBottom: '12px' };
const sP = { fontSize: '16px', lineHeight: 1.75, color: ARTICLE_TEXT, margin: '0 0 18px' };
const sStrong = { color: HEAD_TEXT, fontWeight: 700 };
const sTable = { width: '100%', borderCollapse: 'collapse', margin: '24px 0 32px', fontSize: '14px', background: CARD_BG, border: `1px solid ${HAIR_LINE}`, borderRadius: '12px', overflow: 'hidden' };
const sTh = { textAlign: 'left', padding: '12px 16px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold)', background: 'rgba(196,169,126,0.06)', borderBottom: `1px solid ${HAIR_LINE}` };
const sTd = { padding: '12px 16px', borderTop: `1px solid ${HAIR_LINE}`, color: ARTICLE_TEXT, verticalAlign: 'top' };
const sCallout = { background: 'linear-gradient(135deg, rgba(196,169,126,0.07), rgba(196,169,126,0.02))', border: '1px solid rgba(196,169,126,0.22)', borderRadius: '14px', padding: '20px 24px', margin: '28px 0', fontSize: '15px', lineHeight: 1.7, color: '#e2e8f0' };
const sWarning = { background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '14px', padding: '20px 24px', margin: '28px 0', fontSize: '15px', lineHeight: 1.7, color: '#e2e8f0' };
const sFaqQ = { fontSize: '16px', fontWeight: 700, color: HEAD_TEXT, marginBottom: '8px', marginTop: 0 };
const sFaqA = { fontSize: '15px', lineHeight: 1.7, color: SOFT_TEXT, margin: 0 };

export const faq = [
  { q: 'Can I ACATS-transfer my INDmoney US stock positions directly to Rovia?', a: 'It depends on which partner broker holds your positions on INDmoney&apos;s side. Most Indian platforms use partner-broker models (commonly DriveWealth historically) where in-kind transfer to external custodians has restrictions. The realistic path is usually: sell on INDmoney, withdraw to your Indian bank, reload via Rovia&apos;s broker integration. Verify the current options in your INDmoney account settings.' },
  { q: 'Will I lose my historical cost basis?', a: 'You will not lose the dates and prices — those are facts of your purchase history. But the lot-level INR cost basis at the original vest-day RBI TT rate has to be reconstructed in the new platform. Rovia&apos;s import flow accepts INDmoney transaction history and rebuilds lot-level INR basis automatically.' },
  { q: 'What about Schedule FA filings I already did at INDmoney?', a: 'Past filings stand on their own — they are submitted to the IT Department, not the platform. What matters going forward is that your new platform (Rovia) has the correct lot inventory so future Schedule FA filings are consistent with past ones. Reconcile the lot list at the time of switchover.' },
  { q: 'Will I pay tax on the transition?', a: 'If you sell at INDmoney and re-buy via Rovia, yes — the sale is a taxable event in India (STCG or LTCG per the 24-month rule). If you transfer in-kind (if supported), no tax event is triggered. The decision depends on what INDmoney&apos;s partner broker supports for external transfers and on your tax position per lot.' },
  { q: 'How long does the full migration take?', a: 'Typically 2–4 weeks end to end. The bottleneck is usually waiting for INDmoney&apos;s sale settlement and INR remittance to your Indian bank, then setting up the Rovia-side broker linkage and importing transaction history.' },
  { q: 'Does my INDmoney account need to be closed?', a: 'Not necessarily. You can keep an INDmoney account open for other features (mutual funds, NPS, expense tracking) and just stop using the US stocks module. Many users do this for a transition period before deciding.' },
];

export function Body() {
  return (
    <>
      <h2 style={{ ...sH2, marginTop: '8px' }}>The INDmoney context</h2>
      <p style={sP}>
        INDmoney built one of the early India-friendly gateways to US equity. The model — used by several Indian fintechs in this space — is a partner-broker arrangement: positions are technically held by a US-domiciled custodian, with the Indian platform providing UI, INR onboarding, tax tooling, and customer support.
      </p>
      <p style={sP}>
        For someone whose US equity is mostly self-directed purchases of NVDA, GOOGL, MSFT etc., INDmoney can be a serviceable solution. For someone with employer RSUs, ESPPs, multi-broker history, or complex compliance needs (lot-level Schedule FA, Form 67, broker-statement reconciliation across years), a dedicated RSU platform is usually a better fit. This guide is for the second cohort.
      </p>

      <div style={sWarning}>
        Before reading the migration steps, run a fact-check against your current INDmoney account: confirm which partner broker holds your positions, whether they support in-kind external transfers, and what (if any) account-closure fees apply. The specifics shift as platforms evolve.
      </div>

      <h2 style={sH2}>1. The realistic migration path</h2>
      <p style={sP}>
        Three options exist in theory. In practice, most Indian-platform users end up on one of two:
      </p>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Path</th><th style={sTh}>How it works</th><th style={sTh}>Typical viability</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>In-kind ACATS to external custodian</td><td style={sTd}>Partner broker ACATS&apos;s positions to your destination US broker (e.g., IBKR)</td><td style={sTd}>Depends on partner broker policy; often restricted</td></tr>
          <tr><td style={sTd}>Sell + remit + rebuy</td><td style={sTd}>Liquidate at INDmoney, withdraw INR to your Indian bank, set up Rovia-side broker, rebuy positions</td><td style={sTd}>Always available; creates capital-gains event</td></tr>
          <tr><td style={sTd}>Sell + remit + stop</td><td style={sTd}>Liquidate, withdraw, no rebuy — exit US equity entirely</td><td style={sTd}>Available but rare for serious holders</td></tr>
        </tbody>
      </table>

      <p style={sP}>
        Per the <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>, in-kind transfers preserve your 24-month LTCG clock per lot. Sell-and-rebuy resets it (the new purchase starts a new 24-month clock). For appreciated, long-held positions, this can be the deciding factor.
      </p>

      <h2 style={sH2}>2. The data migration step (always required)</h2>
      <p style={sP}>
        Whichever path you take operationally, you must extract three things from INDmoney before the account is reduced or closed:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}><span style={sStrong}>Transaction history.</span> Every buy, sell, dividend, transfer with date and price. Export to CSV from Reports → Transactions (or equivalent menu).</li>
        <li style={{ marginBottom: '12px' }}><span style={sStrong}>Lot-level cost basis.</span> The Cost Basis / Tax report — purchase date and price per lot, in USD.</li>
        <li><span style={sStrong}>Schedule FA records.</span> Any Schedule FA exports INDmoney has generated for past ITR filings. These help reconcile your new-platform inventory against what you previously disclosed.</li>
      </ol>
      <p style={sP}>
        Save these locally. Once an Indian-platform account is closed, retrieving historical records later can be slow and incomplete.
      </p>

      <h2 style={sH2}>3. The Rovia-side setup</h2>
      <p style={sP}>
        With INDmoney exports in hand:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>Open a Rovia account at rovia.one. KYC and W-8BEN setup.</li>
        <li style={{ marginBottom: '10px' }}>Upload the INDmoney transaction history and cost-basis exports. Rovia reconstructs lot-level INR basis at the original purchase-day RBI TT rates.</li>
        <li style={{ marginBottom: '10px' }}>Reconcile the resulting position list against your current INDmoney holdings. Any discrepancies flagged.</li>
        <li>Link the Rovia-supported US broker (e.g., IBKR or partner) for ongoing position management. If you chose Path 2 (sell-rebuy), execute the rebuy here.</li>
      </ol>

      <div style={sCallout}>
        Rovia&apos;s lot-history reconstruction is the single biggest reason a sell-rebuy migration is more recoverable than it sounds. The capital-gains event at INDmoney is unavoidable if positions can&apos;t ACATS in-kind, but the post-rebuy lot history starts at Day 0 of the new position — and Rovia tracks the entire 24-month LTCG cycle from there, with peak-value Schedule FA, INR cost basis from the rebuy day, and Form 67 if dividends apply.
      </div>

      <h2 style={sH2}>4. Things to verify on the INDmoney side</h2>
      <p style={sP}>
        Before initiating, confirm in your INDmoney account:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Which partner broker holds your US equity (model and broker name)</li>
        <li style={{ marginBottom: '8px' }}>Whether in-kind external transfers are supported and what they cost</li>
        <li style={{ marginBottom: '8px' }}>FX rate quoted on USD-to-INR withdrawal — typically wider than 0-markup options</li>
        <li style={{ marginBottom: '8px' }}>Withdrawal timing (settlement period + bank wire processing)</li>
        <li>Any account-closure fees if you intend to close after migration</li>
      </ul>
      <p style={sP}>
        These specifics change — current fees and capabilities should always be checked in your live account or with INDmoney support.
      </p>

      <h2 style={sH2}>5. After migration — what becomes easier</h2>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>INR cost basis at RBI TT rate</span> per lot, not platform-internal rate.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schedule FA</span> in the exact ITR-2/3 column format, with calendar-year accounting period and peak-value per lot — see <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link>.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>24-month LTCG clock per lot</span> — countdown alerts, post-Finance-Act-2024 rate engine, see <Link href="/blog/vest-cycle-ltcg-strategy" style={{ color: 'var(--gold)' }}>Vest-Cycle Strategy pillar</Link>.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Form 67 automation</span> for dividend-receiving employees — <Link href="/blog/form-67-rsu" style={{ color: 'var(--gold)' }}>Form 67 pillar</Link>.</li>
        <li><span style={sStrong}>0-markup FX</span> on future repatriations — <Link href="/blog/fx-repatriation-rsu-india" style={{ color: 'var(--gold)' }}>FX & Repatriation pillar</Link>.</li>
      </ul>

      <h2 style={sH2}>Frequently asked questions</h2>
      <div>
        {faq.map((item, i) => (
          <div key={i} style={{ padding: '20px 0', borderBottom: i < faq.length - 1 ? `1px solid ${HAIR_LINE}` : 'none' }}>
            <p style={sFaqQ}>{item.q}</p>
            <p style={sFaqA}>{item.a}</p>
          </div>
        ))}
      </div>

      <p style={{ ...sP, marginTop: '48px', fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Last reviewed June 5, 2026. INDmoney&apos;s features, fees, and partner-broker arrangements change — always verify in your current account before initiating a migration. Informational only, not personalised tax or financial advice. INDmoney is a registered trademark of its respective owner.
      </p>
    </>
  );
}
