import Link from 'next/link';

// ─────────────────────────────────────────────
// Broker Transfer #7 — Vested → Rovia
// ─────────────────────────────────────────────

export const meta = {
  slug: 'transfer-rsus-from-vested',
  title: 'How to Transfer RSUs from Vested to Rovia',
  dek: 'Vested was one of the first dedicated Indian US-equity platforms. Migrating your RSUs and US stock holdings to Rovia involves the standard partner-broker exit dance — done methodically, lot history is recoverable.',
  publishDate: '2026-06-05',
  updatedDate: '2026-06-05',
  author: 'Rovia Editorial',
  tags: ['vested', 'platform', 'transfer', 'rsu', 'rovia'],
  readingMinutes: 7,
  seoTitle: 'Transfer RSUs from Vested to Rovia: Migration Playbook (2026)',
  seoDescription:
    'How to migrate RSUs and US equity holdings from Vested to Rovia. Position transfer or liquidation, lot history reconstruction, INR cost basis, Schedule FA continuity.',
  seoKeywords:
    'transfer rsu vested to rovia, vested to rovia migration, vested us equity migration, vested account closure',
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
  { q: 'Why move from Vested if it works?', a: 'For self-directed US equity buying, Vested is reasonable. For RSU-specific workflows — INR cost basis at vest-day RBI TT rates from multiple US employer brokers, ESPP discount tracking, per-lot 24-month LTCG countdowns, surcharge-band planning — a dedicated RSU platform is a better fit. The decision is workflow-specific, not a value judgment on Vested.' },
  { q: 'Can I keep my Vested account open during the migration?', a: 'Yes. Most users run both for 1–3 months: Rovia takes over RSU workflows while Vested holds existing self-directed positions until they decide whether to consolidate.' },
  { q: 'Will my Vested transaction history transfer?', a: 'Yes — you export the transaction CSV from Vested and Rovia ingests it. The original purchase dates and prices are preserved. INR cost basis at original RBI TT rates is reconstructed in the Rovia layer.' },
  { q: 'What if Vested&apos;s partner broker has changed over time?', a: 'Multiple partner-broker eras in your history are not unusual for long-time Vested users. Each era&apos;s transaction records still export normally; Rovia stitches them into a single lot inventory regardless of which underlying custodian held them at which time.' },
  { q: 'Does this affect my Schedule FA continuity?', a: 'Schedule FA filings are made annually to the Income Tax Department. Past filings stand on their own. Future filings continue from Rovia&apos;s reconstructed inventory. Reconcile your final Vested-platform position list against your Rovia-imported list at the time of switchover — this is the audit trail.' },
  { q: 'What about my pending dividends or scheduled transactions on Vested?', a: 'Let pending transactions complete before initiating closure or full migration. Dividends in particular often have ex-date / pay-date gaps of 2–4 weeks; sitting through one cycle avoids reconciliation gaps.' },
];

export function Body() {
  return (
    <>
      <h2 style={{ ...sH2, marginTop: '8px' }}>The Vested context</h2>
      <p style={sP}>
        Vested was an early entrant in the Indian-resident-friendly US-equity space — focused initially on fractional access and INR-onboarding for Indian investors who wanted US stocks but didn&apos;t want to set up offshore brokerage themselves. The platform has matured significantly and is a reasonable home for self-directed US equity holdings.
      </p>
      <p style={sP}>
        For RSU-specific workflows — managing employer grants from Schwab / Morgan Stanley / Fidelity / E*TRADE, lot-level INR cost basis at original vest-day RBI rates, ESPP discount handling, per-lot 24-month LTCG countdowns, automated Schedule FA in calendar-year format — a dedicated RSU platform is a different fit. This guide is for that switching cohort.
      </p>

      <div style={sWarning}>
        Before initiating, verify in your live Vested account: which partner broker currently holds your positions, current FX rates on USD-to-INR withdrawal, in-kind transfer support if any, and any pending dividends or transactions. Indian-platform specifics shift; current state matters.
      </div>

      <h2 style={sH2}>1. The three migration paths</h2>
      <p style={sP}>
        Same shape as any Indian-platform exit:
      </p>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Path</th><th style={sTh}>How it works</th><th style={sTh}>When it applies</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>In-kind ACATS to external custodian</td><td style={sTd}>Vested partner broker ACATS positions to your destination (e.g., IBKR)</td><td style={sTd}>Depends on partner-broker policy; verify current</td></tr>
          <tr><td style={sTd}>Sell + remit + rebuy</td><td style={sTd}>Liquidate at Vested, withdraw INR to your bank, repurchase via Rovia&apos;s linked broker</td><td style={sTd}>Always available; creates tax event</td></tr>
          <tr><td style={sTd}>Partial dual-run</td><td style={sTd}>Leave existing positions at Vested; route future RSU vests through Rovia from grant onward</td><td style={sTd}>Good for transitioning users — no immediate liquidation</td></tr>
        </tbody>
      </table>

      <p style={sP}>
        Path 3 is underrated. If your existing Vested holdings are self-directed (NVDA, GOOGL, MSFT etc.) and your future inflows are employer RSUs landing in Schwab/MS/Fidelity/E*TRADE, Rovia can be plumbed into the RSU side without touching the Vested side at all. Two separate worlds, both supported.
      </p>

      <h2 style={sH2}>2. Data export from Vested</h2>
      <p style={sP}>
        Before any account closure or position move:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Transaction history CSV.</span> Every buy/sell/dividend with date and price. Download to local storage.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Cost basis report.</span> Per-lot acquisition date and USD price.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Year-end tax statements.</span> US 1099-equivalent and India-format tax summaries Vested has produced.</li>
        <li><span style={sStrong}>Schedule FA exports.</span> Any India-format disclosure documents Vested has generated for past ITR filings.</li>
      </ol>
      <p style={sP}>
        Treat these as permanent records. Even after migration, you may need them years later for ITR amendments or IT Department queries.
      </p>

      <h2 style={sH2}>3. Set up the Rovia side</h2>
      <p style={sP}>
        With Vested exports in hand:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>Open the Rovia account at rovia.one — KYC, W-8BEN, Indian bank linkage.</li>
        <li style={{ marginBottom: '10px' }}>Upload the Vested transaction history. Rovia reconstructs lot-level INR cost basis at the RBI TT rate on each original transaction date.</li>
        <li style={{ marginBottom: '10px' }}>If Path 1 (in-kind), receive the ACATS into Rovia&apos;s linked US custodian. If Path 2 (sell-rebuy), execute the rebuy on Rovia&apos;s side. If Path 3 (dual-run), no action — Vested side continues, Rovia takes new RSU vests.</li>
        <li>Reconcile final Rovia position list against final Vested position list. Investigate any discrepancies before proceeding.</li>
      </ol>

      <div style={sCallout}>
        For users with multi-year Vested histories spanning partner-broker era changes, the Vested transaction CSV is the authoritative record — not the current platform display. Some position fragments may not appear in the current account view if they correspond to old partner-broker arrangements that have since rolled forward. Trust the CSV.
      </div>

      <h2 style={sH2}>4. The dual-run pattern (recommended for most users)</h2>
      <p style={sP}>
        If your Vested positions are appreciated and selling would trigger a meaningful capital-gains event, the cleanest exit is often: <span style={sStrong}>don&apos;t exit.</span>
      </p>
      <p style={sP}>
        Run Vested for existing positions until they naturally rotate out (sales over time, LTCG-optimized timing per the <Link href="/blog/vest-cycle-ltcg-strategy" style={{ color: 'var(--gold)' }}>Vest-Cycle Strategy pillar</Link>). Run Rovia in parallel for new RSU vests landing from your employer broker. After 12–24 months, the Vested side has often drained naturally, and consolidation happens without a tax event.
      </p>
      <p style={sP}>
        Schedule FA in this transition period covers both platforms — Table A2 for each custodial account, Table A3 for the underlying equity. Rovia&apos;s Schedule FA generator handles multi-custodian inventories without issue.
      </p>

      <h2 style={sH2}>5. After migration — what becomes easier</h2>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>RSU-specific workflows</span> — direct ingestion from Schwab / Morgan Stanley / Fidelity / E*TRADE statements, ESPP discount handling.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Per-lot 24-month LTCG clock</span> — covered in <Link href="/blog/vest-cycle-ltcg-strategy" style={{ color: 'var(--gold)' }}>Vest-Cycle Strategy pillar</Link>.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schedule FA in calendar-year format</span> with peak-value per lot — <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link>.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Form 67 automation</span> for dividend-receiving employees — <Link href="/blog/form-67-rsu" style={{ color: 'var(--gold)' }}>Form 67 pillar</Link>.</li>
        <li><span style={sStrong}>0-markup FX</span> on repatriations — <Link href="/blog/fx-repatriation-rsu-india" style={{ color: 'var(--gold)' }}>FX & Repatriation pillar</Link>.</li>
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
        Last reviewed June 5, 2026. Vested&apos;s features, fees, and partner-broker arrangements change — verify in your current account before initiating a migration. Informational only, not personalised tax or financial advice. Vested is a registered trademark of its respective owner.
      </p>
    </>
  );
}
