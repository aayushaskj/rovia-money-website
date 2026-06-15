import Link from 'next/link';

// ─────────────────────────────────────────────
// Broker Transfer #8 — Paasa → Rovia
// ─────────────────────────────────────────────

export const meta = {
  slug: 'transfer-rsus-from-paasa',
  title: 'How to Transfer RSUs from Paasa to Rovia',
  dek: 'Paasa is one of the newer entrants in the India-side US equity space. The migration template to Rovia — data export, partner-broker exit, lot reconstruction — is the same shape; the platform-specific details are worth verifying.',
  publishDate: '2026-06-05',
  updatedDate: '2026-06-05',
  author: 'Rovia Editorial',
  tags: ['paasa', 'platform', 'transfer', 'rsu', 'rovia'],
  readingMinutes: 7,
  seoTitle: 'Transfer RSUs from Paasa to Rovia: Migration Playbook (2026)',
  seoDescription:
    'How to migrate RSUs and US equity holdings from Paasa to Rovia. Position transfer or liquidation, lot history reconstruction, INR cost basis, Schedule FA continuity.',
  seoKeywords:
    'transfer rsu paasa to rovia, paasa to rovia migration, paasa us equity migration, paasa account closure',
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
  { q: 'Why move from Paasa to Rovia?', a: 'Indian US-equity platforms vary in how deeply they support RSU-specific workflows — multi-broker statement ingestion (Schwab / Morgan Stanley / Fidelity / E*TRADE), per-lot INR cost basis at original vest-day RBI TT rates, ESPP discount handling, calendar-year Schedule FA with peak-value per lot, automatic Form 67. If your usage is RSU-heavy, a dedicated RSU platform tends to fit better. Self-directed users often have less reason to switch.' },
  { q: 'Can I transfer positions in-kind from Paasa?', a: 'Depends on Paasa&apos;s current partner-broker arrangement and external-transfer policy. Always verify in your live account; capabilities in the Indian fintech space evolve.' },
  { q: 'Will my Paasa transaction history transfer?', a: 'Export Paasa&apos;s transaction CSV before initiating closure. Rovia ingests the CSV and reconstructs lot-level INR cost basis using the original transaction dates and RBI TT rates. The original dates and prices are facts, preserved; the INR basis is reconstructed.' },
  { q: 'What about my Schedule FA filings from past years?', a: 'Past filings are between you and the IT Department, not platform-specific. Future filings continue from Rovia&apos;s reconstructed lot inventory. Reconcile your final Paasa position list against your Rovia-imported list before closing.' },
  { q: 'How long does the full migration take?', a: 'Most Indian-platform migrations complete in 2–4 weeks: 1–2 weeks for data export and Rovia-side onboarding (KYC, W-8BEN), 1–2 weeks for Paasa-side liquidation or transfer settlement.' },
  { q: 'Do I have to close my Paasa account?', a: 'Not necessarily. You can stop using the US equity module while keeping the account open if Paasa offers other features you use. Migration and account closure are separate decisions.' },
];

export function Body() {
  return (
    <>
      <h2 style={{ ...sH2, marginTop: '8px' }}>The Paasa context</h2>
      <p style={sP}>
        Paasa is one of the more recent additions to the Indian-resident-facing US equity space. Like several others in the category, it operates on a partner-broker model — UI, INR onboarding, India-side compliance helpers wrapped around an underlying US custodian.
      </p>
      <p style={sP}>
        For self-directed US equity buying, that&apos;s reasonable. For users whose primary US equity inflow is employer RSUs from Schwab / Morgan Stanley / Fidelity / E*TRADE — with the associated need for vest-day INR cost basis, ESPP tracking, per-lot 24-month LTCG countdowns, and calendar-year Schedule FA in ITR-2 format — a dedicated RSU platform usually fits the workflow better. This guide is for that switching cohort.
      </p>

      <div style={sWarning}>
        Because the Indian fintech space evolves quickly, do not take any specific Paasa fee, FX rate, or feature claim in this guide as authoritative — always verify in your live account or with Paasa support. The mechanics below are the general pattern that applies to most Indian-platform-to-Rovia migrations; platform-specific specifics belong on the platform&apos;s own pages.
      </div>

      <h2 style={sH2}>1. The migration paths</h2>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Path</th><th style={sTh}>How it works</th><th style={sTh}>Trade-off</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>In-kind transfer</td><td style={sTd}>If Paasa&apos;s partner broker supports external ACATS, positions transfer with cost basis preserved</td><td style={sTd}>Preserves 24-month LTCG clock; depends on partner-broker policy</td></tr>
          <tr><td style={sTd}>Sell + remit + rebuy</td><td style={sTd}>Liquidate at Paasa, withdraw INR to Indian bank, rebuy through Rovia&apos;s linked US custodian</td><td style={sTd}>Always available; resets cost basis and 24-month clock</td></tr>
          <tr><td style={sTd}>Dual-run during transition</td><td style={sTd}>Keep Paasa positions in place, route future RSU vests through Rovia from grant day</td><td style={sTd}>No immediate tax event; two platforms to reconcile during overlap</td></tr>
        </tbody>
      </table>

      <p style={sP}>
        The decision logic is covered in depth in the <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>. The short version: if positions are appreciated and LTCG-eligible, in-kind or dual-run is materially better than sell-rebuy. If positions are small or below cost, sell-rebuy is operationally simpler with minimal tax impact.
      </p>

      <h2 style={sH2}>2. The data extraction step</h2>
      <p style={sP}>
        Regardless of path, the same four exports from Paasa before initiating:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Full transaction history</span> — every buy, sell, dividend, fee. Date and price per row.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Per-lot cost basis report</span> — acquisition date and USD price for each lot still held.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Year-end tax statements</span> — both US-format (1099-equivalent if produced) and India-format summaries.</li>
        <li><span style={sStrong}>Any Schedule FA exports</span> the platform has generated for past ITRs.</li>
      </ol>
      <p style={sP}>
        Keep these locally. They are the audit trail for any future ITR queries and the basis for reconciling your post-migration inventory.
      </p>

      <h2 style={sH2}>3. The Rovia-side setup</h2>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>Open the Rovia account: rovia.one → KYC and W-8BEN.</li>
        <li style={{ marginBottom: '10px' }}>Upload the Paasa transaction history. Rovia reconstructs per-lot INR cost basis at the actual RBI TT reference rate on each original transaction date.</li>
        <li style={{ marginBottom: '10px' }}>If Path 1 (in-kind): coordinate the ACATS with both platforms; settles in 5–7 business days at the US-custodian level. If Path 2 (sell-rebuy): execute the Rovia-side rebuy. If Path 3 (dual-run): no immediate action — future RSU vests flow into Rovia from your employer broker.</li>
        <li>Reconcile final inventory: Rovia-imported lots vs Paasa-side positions before closing or reducing the Paasa account.</li>
      </ol>

      <div style={sCallout}>
        For users who came to Paasa from an employer-broker plan with existing RSUs already moved over, the original vest dates are the meaningful anchor — not the Paasa-onboarding date. Rovia&apos;s lot importer preserves the original vest date for capital-gains purposes, so the 24-month LTCG clock continues from the original grant&apos;s vest day, not from a later platform-change date.
      </div>

      <h2 style={sH2}>4. After migration — what becomes easier</h2>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Per-lot INR cost basis</span> at the actual RBI TT rate on each original transaction date — not platform-internal rates.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Multi-employer-broker support</span> — direct ingestion from Schwab Equity Awards, Morgan Stanley StockPlan, E*TRADE Stock Plans, Fidelity Stock Plan Services.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schedule FA in ITR-2 calendar-year format</span> with peak-value computed per lot — covered in <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link>.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>24-month LTCG clock per lot</span> with month-23 alerts and the post-Finance-Act-2024 rate engine — see <Link href="/blog/vest-cycle-ltcg-strategy" style={{ color: 'var(--gold)' }}>Vest-Cycle Strategy</Link>.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Form 67 automation</span> for dividend-receiving employees — see <Link href="/blog/form-67-rsu" style={{ color: 'var(--gold)' }}>Form 67 pillar</Link>.</li>
        <li><span style={sStrong}>0-markup FX channel</span> on repatriations — see <Link href="/blog/fx-repatriation-rsu-india" style={{ color: 'var(--gold)' }}>FX & Repatriation pillar</Link>.</li>
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
        Last reviewed June 5, 2026. Paasa&apos;s features, fees, and partner-broker arrangements change frequently — verify in your current account before initiating a migration. Informational only, not personalised tax or financial advice. Paasa is a registered trademark of its respective owner.
      </p>
    </>
  );
}
