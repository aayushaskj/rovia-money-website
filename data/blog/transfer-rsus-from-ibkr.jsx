import Link from 'next/link';

// ─────────────────────────────────────────────
// Broker Transfer #5 — Interactive Brokers (IBKR) → India
// ─────────────────────────────────────────────

export const meta = {
  slug: 'transfer-rsus-from-ibkr',
  title: 'How to Transfer RSUs from Interactive Brokers (IBKR) to Rovia',
  dek: 'IBKR is the most common "intermediate" broker for Indian residents holding US stock — a parking spot between an employer plan and a fully India-compliant setup. This is the playbook to move from IBKR to Rovia.',
  publishDate: '2026-06-05',
  updatedDate: '2026-06-05',
  author: 'Rovia Editorial',
  tags: ['ibkr', 'interactive brokers', 'broker', 'transfer', 'rsu', 'rovia'],
  readingMinutes: 8,
  seoTitle: 'Transfer RSUs from Interactive Brokers (IBKR) to Rovia (2026)',
  seoDescription:
    'How to move US stock holdings from Interactive Brokers (IBKR LLC) to Rovia. Wire mechanics, FX spread, lot history, INR cost basis reconstruction, and IBKR-specific procedures.',
  seoKeywords:
    'transfer rsu ibkr to rovia, interactive brokers to rovia, ibkr to rovia migration, ibkr us stock india, ibkr wire india',
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
  { q: 'Can Indian residents open IBKR accounts directly?', a: 'Yes. IBKR LLC and IBKR International accept Indian residents with KYC documentation. The application is online, takes 1–3 weeks for approval depending on documentation completeness, and requires W-8BEN.' },
  { q: 'I moved my RSUs to IBKR as an intermediate step. Was that a mistake?', a: 'Not necessarily. IBKR is a defensible intermediate spot for tighter FX and lot-level control. But it does not solve the India-side problem: Schedule FA generation, INR cost basis at the original vest dates, Form 67, and the 24-month LTCG clock per lot still need separate management. Most users who park at IBKR eventually want a fuller India-facing setup.' },
  { q: 'What does IBKR charge for an outbound USD wire to India?', a: 'IBKR offers 1 free outbound wire per month and charges ~$10 for each subsequent wire that month. International destinations follow the same fee structure.' },
  { q: 'What is the FX spread at IBKR?', a: 'Approximately 20 basis points — the tightest of any retail-accessible broker. IBKR is widely considered the FX cost benchmark.' },
  { q: 'Will my IBKR lot history transfer if I ACATS to another broker?', a: 'Yes for in-kind ACATS to a broker that accepts foreign-equity transfers. Cost basis (in USD) and acquisition dates carry over. INR cost basis still has to be reconstructed at the original vest-day RBI TT rates separately.' },
  { q: 'Is there an inactivity fee?', a: 'Historically IBKR charged $10/month if account balance was under $100K — this was waived for many tiers in 2021 and further relaxed since. Verify current state in your account.' },
];

export function Body() {
  return (
    <>
      <h2 style={{ ...sH2, marginTop: '8px' }}>Why IBKR is in the conversation</h2>
      <p style={sP}>
        Unlike Schwab, Morgan Stanley, Fidelity, and E*TRADE, IBKR is not where most US tech employers settle their RSU grants. So why does this guide exist?
      </p>
      <p style={sP}>
        Because <span style={sStrong}>IBKR is the most common &ldquo;intermediate broker&rdquo;</span> for Indian residents who already moved their US stock out of an employer plan. The pattern: an Indian engineer ACATS their RSUs out of Schwab / Morgan Stanley / Fidelity / E*TRADE to IBKR (because the FX spread is ~20 bps vs the employer broker&apos;s 50–100 bps), then later realizes the India-side compliance — Schedule FA, INR cost basis, Form 67, 24-month LTCG clocks — is still not handled.
      </p>
      <p style={sP}>
        If that&apos;s you, this is the playbook to move from IBKR to a fully India-aware setup.
      </p>

      <h2 style={sH2}>1. What IBKR does well, and what it doesn&apos;t</h2>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Capability</th><th style={sTh}>IBKR</th><th style={sTh}>What's still on you</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>FX spread on USD → INR</td><td style={sTd}>~20 bps — best in class</td><td style={sTd}>Wire fees still apply</td></tr>
          <tr><td style={sTd}>Lot selection on sales</td><td style={sTd}>Specific identification supported, well-exposed</td><td style={sTd}>You still pick which lots</td></tr>
          <tr><td style={sTd}>Cost basis tracking</td><td style={sTd}>USD only, vest dates preserved if ACATS&apos;d in</td><td style={sTd}>INR conversion at vest-day RBI rates not provided</td></tr>
          <tr><td style={sTd}>Schedule FA generation</td><td style={sTd}>Not provided</td><td style={sTd}>Entirely your problem (or your CA&apos;s)</td></tr>
          <tr><td style={sTd}>Form 67 for dividend FTC</td><td style={sTd}>Not provided</td><td style={sTd}>You file separately</td></tr>
          <tr><td style={sTd}>24-month LTCG clock</td><td style={sTd}>Not provided in India terms</td><td style={sTd}>Per-lot tracking is manual</td></tr>
          <tr><td style={sTd}>Customer support</td><td style={sTd}>India-friendly hours, good documentation</td><td style={sTd}>—</td></tr>
        </tbody>
      </table>

      <p style={sP}>
        IBKR solves the FX cost and lot selection layers cleanly. It does not solve any of the India-side reporting or compliance layers — which is what most Indian residents eventually need.
      </p>

      <h2 style={sH2}>2. The transfer playbook</h2>

      <h3 style={sH3}>Path A — Sell at IBKR, wire INR to your Indian bank</h3>
      <p style={sP}>
        Simplest, realizes capital gains:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Trader Workstation or Client Portal</span> → place sell orders with specific lot identification. Use the &ldquo;Tax optimizer&rdquo; tool to pre-classify the resulting STCG vs LTCG (in US terms — India terms are different, see <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>).</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Funds → Transfer</span> → outgoing wire → USD destination = your Indian bank in INR-equivalent. IBKR&apos;s FX spread is ~20 bps; the rate quoted is essentially interbank.</li>
        <li><span style={sStrong}>Wire fee</span> = $0 for the first outbound wire per calendar month, ~$10 for each subsequent wire that month.</li>
      </ol>

      <h3 style={sH3}>Path B — ACATS-out to a different broker</h3>
      <p style={sP}>
        Less common from IBKR (it&apos;s usually the destination, not the source for further transfers). But possible if you&apos;re consolidating elsewhere:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Client Portal → Settings → Transfer & Pay → Transfer positions out</span>. Provide receiving broker DTC and account number.</li>
        <li>ACATS settles in 5–7 business days. Cost basis (USD) and acquisition dates carry over.</li>
      </ol>

      <div style={sCallout}>
        Per the <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>: you cannot ACATS US shares directly into an Indian demat. Demats hold only Indian-listed securities. Whichever way you go, USD-to-INR conversion eventually happens via a sale + wire, OR you keep the shares in some US-domiciled brokerage indefinitely.
      </div>

      <h2 style={sH2}>3. Costs at IBKR</h2>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Item</th><th style={sTh}>Cost</th><th style={sTh}>Notes</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>Outbound wire (1st of month)</td><td style={sTd}>$0</td><td style={sTd}>Free per IBKR&apos;s standard policy</td></tr>
          <tr><td style={sTd}>Outbound wire (subsequent)</td><td style={sTd}>~$10 each</td><td style={sTd}>Far cheaper than other brokers</td></tr>
          <tr><td style={sTd}>FX spread on USD → INR</td><td style={sTd}>~20 basis points</td><td style={sTd}>Tightest retail spread available</td></tr>
          <tr><td style={sTd}>Outbound ACATS</td><td style={sTd}>$0</td><td style={sTd}>IBKR does not charge to send</td></tr>
          <tr><td style={sTd}>Inactivity fee</td><td style={sTd}>Historically $10/month under $100K</td><td style={sTd}>Largely waived since 2021 — verify current state</td></tr>
          <tr><td style={sTd}>Trade commissions</td><td style={sTd}>$0 on Lite tier, ~$0.005/share on Pro tier</td><td style={sTd}>For typical RSU sale sizes, immaterial</td></tr>
        </tbody>
      </table>

      <h2 style={sH2}>4. IBKR-specific issues for India</h2>
      <p style={sP}>
        <span style={sStrong}>Issue 1 — Tax statements are US-format.</span> The IBKR Year-End Tax Summary is built for US filers. It does not translate to Indian ITR Schedule FA columns. You (or your CA) reformats it manually.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 2 — No INR cost basis.</span> IBKR knows your USD cost basis (and preserves it across ACATS). It does not know — and cannot generate — your INR cost basis at the original vest-day RBI TT rates. For RSUs that were ACATS&apos;d in from an employer plan, this is the everything-data you need for Indian capital-gains computation.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 3 — LRS misconception.</span> Indian residents sometimes confuse LRS limits with IBKR funding rules. LRS ($250K/year/PAN) governs INR-to-USD outward remittance — relevant only if you&apos;re sending money FROM India TO your IBKR account, not when you&apos;re bringing money home. Covered in the <Link href="/blog/fx-repatriation-rsu-india" style={{ color: 'var(--gold)' }}>FX & Repatriation pillar</Link>.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 4 — Schedule FA disclosure of IBKR account.</span> Even though IBKR is not an employer broker, holding equity there triggers Schedule FA disclosure. The IBKR account itself goes in Table A2 (custodial); each US equity position goes in Table A3. Same calendar-year accounting period (Jan-Dec). Covered in the <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link>.
      </p>

      <div style={sWarning}>
        Common mistake: ACATS&apos;ing from an employer broker to IBKR <em>and forgetting</em> to recompute INR cost basis at the original vest-day RBI rates. The IBKR statement only shows USD basis; your CA then assumes the ACATS-day USD rate, which is wrong by the amount INR has moved since vest. On a 4-year-old lot, that error can be ₹50K-₹2L per lot.
      </div>

      <h2 style={sH2}>5. What Rovia does</h2>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>IBKR Activity Statement parsing</span> — including ACATS-in records that preserve the original vest dates from the source employer broker.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Original-vest-day INR cost basis</span> reconstruction from RBI historical TT rates, even when the lots have been at IBKR for years.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schedule FA generation</span> covering both the IBKR custodial account (Table A2) and each underlying equity position (Table A3), with calendar-year accounting period and peak-value computation.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>24-month LTCG clock</span> per lot, anchored to the original vest date — not the ACATS-in date.</li>
        <li><span style={sStrong}>0-markup FX channel</span> — even tighter than IBKR&apos;s 20 bps when available.</li>
      </ul>
      <p style={sP}>
        For most users, the combination is: <span style={sStrong}>keep shares at IBKR for the trading flexibility and FX, layer Rovia on top for the India compliance.</span> This is the pattern that works best.
      </p>

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
        Last reviewed June 5, 2026. IBKR fees and inactivity policies change frequently — verify current state in your account before initiating. Informational only, not personalised tax or financial advice.
      </p>
    </>
  );
}
