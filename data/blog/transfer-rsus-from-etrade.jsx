import Link from 'next/link';

// ─────────────────────────────────────────────
// Broker Transfer #4 — E*TRADE Stock Plans → India
// ─────────────────────────────────────────────

export const meta = {
  slug: 'transfer-rsus-from-etrade',
  title: 'How to Transfer RSUs from E*TRADE Stock Plans to Rovia',
  dek: 'E*TRADE Stock Plans has the cleanest ACATS process and tightest FX of the major US employer brokers — moving lots to Rovia is the path of least resistance among the four.',
  publishDate: '2026-06-05',
  updatedDate: '2026-06-05',
  author: 'Rovia Editorial',
  tags: ['etrade', 'broker', 'transfer', 'rsu', 'rovia'],
  readingMinutes: 8,
  seoTitle: 'Transfer RSUs from E*TRADE Stock Plans to Rovia (2026)',
  seoDescription:
    'Step-by-step: move Amazon, Adobe, Snowflake, AMD, Salesforce RSUs from E*TRADE Stock Plans to Rovia. ACATS, $25 wire, 50 bps FX, INR cost basis.',
  seoKeywords:
    'transfer rsu etrade to rovia, etrade stock plans rovia, amazon rsu transfer, adobe rsu transfer, etrade to rovia migration, snowflake rsu transfer',
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
  { q: 'Is E*TRADE still a separate broker after the Morgan Stanley acquisition?', a: 'Operationally, yes. Morgan Stanley acquired E*TRADE in 2020 but E*TRADE Stock Plans continues to run as a distinct platform with its own login, statements, and procedures. The corporate parent is the same as Morgan Stanley StockPlan Connect, but day-to-day flows are separate.' },
  { q: 'How is E*TRADE Stock Plans different from regular E*TRADE?', a: 'E*TRADE Stock Plans is the employer-grant side (your RSUs land there); the standard E*TRADE brokerage is the full self-directed trading account. They share login and many users have both linked, but they are distinct account numbers.' },
  { q: 'What is the wire fee?', a: '$25 for outbound international wires. The FX spread is ~50 bps — the tightest of the four major US employer brokers.' },
  { q: 'Can I select specific lots on the trade ticket?', a: 'Yes. On the trade preview screen, click "Choose lots" before confirming. Default is FIFO if you skip this step.' },
  { q: 'For Amazon employees on the 5/15/40/40 vest schedule — does that change anything?', a: 'Mechanically no. The back-weighted vest concentrates Year 3 and 4 perquisite income (covered in the RSU Taxation pillar), but the broker-side transfer playbook is unchanged. Plan ACATS/sale timing around the surcharge-band impact rather than the broker process.' },
  { q: 'Does E*TRADE handle ESPP qualifying-disposition tracking?', a: 'For US tax purposes, yes — it flags disqualifying vs qualifying lots in the cost basis report. For Indian tax purposes the US disposition status does not matter (India treats the discount as a perquisite at purchase regardless). But the qualifying-disposition status still affects any US filings if you have US tax-residence years.' },
];

export function Body() {
  return (
    <>
      <h2 style={{ ...sH2, marginTop: '8px' }}>Who is on E*TRADE Stock Plans</h2>
      <p style={sP}>
        E*TRADE Stock Plans is the stock-plan platform for a long list of US tech employers — particularly strong in mid-cap SaaS and semis. Indian-resident employees most likely to read this: <Link href="/amazon" style={{ color: 'var(--gold)' }}>Amazon</Link>, <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link> (some plans), Adobe, Snowflake, Salesforce (some plans), AMD, MongoDB, HubSpot, Confluent, Lam Research, Eli Lilly, Twilio, Arista Networks, Autodesk, Cloudflare (some), Okta.
      </p>
      <p style={sP}>
        The good news up front: <span style={sStrong}>E*TRADE has the cleanest ACATS process of the major employer brokers</span> and the tightest FX spread (~50 bps) on USD-to-INR conversion. The transfer mechanics are mostly straightforward. The friction lives in the lot-selection step on sales and in the dual-Morgan-Stanley branding confusion.
      </p>

      <h2 style={sH2}>1. The E*TRADE / Morgan Stanley branding</h2>
      <p style={sP}>
        Since the 2020 Morgan Stanley acquisition, E*TRADE Stock Plans technically sits inside the same corporate parent as <Link href="/blog/transfer-rsus-from-morgan-stanley" style={{ color: 'var(--gold)' }}>Morgan Stanley StockPlan Connect</Link>. But operationally they remain distinct platforms with separate logins and procedures. A user who has accounts at both will see &ldquo;Morgan Stanley | E*TRADE&rdquo; co-branding in some interfaces, which can confuse paperwork — but the URLs, account numbers, and customer-service phone lines are different.
      </p>

      <h2 style={sH2}>2. The transfer playbook</h2>

      <h3 style={sH3}>Step 1 — Log into E*TRADE Stock Plans</h3>
      <p style={sP}>
        Via your employer&apos;s benefits portal (e.g., amazon.com/myhr → Stock plan), or directly at <span style={sStrong}>us.etrade.com/stock-plans</span>. Confirm W-8BEN is current (3-year validity).
      </p>

      <h3 style={sH3}>Step 2 — Export your lot-level cost basis</h3>
      <p style={sP}>
        Customer Service → Tax Center → Cost Basis Detail Report. Download the most recent version. This is your INR-conversion source of truth.
      </p>

      <h3 style={sH3}>Step 3 — Choose your path</h3>
      <p style={sP}>
        ACATS-out preserves lot history and the 24-month LTCG clock. Sell-and-remit gives you INR immediately and crystallizes capital gains. Mechanics covered in the <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>.
      </p>

      <h3 style={sH3}>Step 4a — ACATS out</h3>
      <p style={sP}>
        Customer Service → Transfer Money or Shares → Transfer an account to E*TRADE → reverse direction (look for &ldquo;Transfer an account FROM E*TRADE&rdquo;). The form takes the receiving broker&apos;s DTC number and your destination account number. E*TRADE processes ACATS-out at no charge from their side. Settlement: typically 5–7 business days; some users report faster.
      </p>

      <h3 style={sH3}>Step 4b — Sell, then wire to India</h3>
      <p style={sP}>
        On the trade ticket, click <span style={sStrong}>&ldquo;Choose lots&rdquo;</span> before confirming. Identify the specific tax lots (LTCG-eligible first, lowest cost basis among them if minimizing gain). After T+2 settlement: Customer Service → Transfer Money → Wire (Outgoing). Wire fee: $25.
      </p>

      <h2 style={sH2}>3. Costs at E*TRADE</h2>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Item</th><th style={sTh}>Cost</th><th style={sTh}>Notes</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>Outbound ACATS</td><td style={sTd}>$75</td><td style={sTd}>Higher than Schwab/Fidelity ($0) — verify current</td></tr>
          <tr><td style={sTd}>International wire</td><td style={sTd}>$25</td><td style={sTd}>Plus Indian bank inward fee</td></tr>
          <tr><td style={sTd}>FX spread on USD → INR</td><td style={sTd}>~50 basis points</td><td style={sTd}>Tightest of the four employer brokers</td></tr>
          <tr><td style={sTd}>Partial ACATS</td><td style={sTd}>Same $75 fee structure</td><td style={sTd}>Per-transaction, not per-share</td></tr>
        </tbody>
      </table>

      <div style={sCallout}>
        E*TRADE charges a higher ACATS-out fee than Schwab or Fidelity, but its FX spread is materially tighter. The trade-off: for one-time in-kind transfers, paying ACATS-out fees once is cheaper than years of accumulated FX-spread costs on remits. For frequent small remits, the FX advantage compounds.
      </div>

      <h2 style={sH2}>4. The E*TRADE-specific issues</h2>
      <p style={sP}>
        <span style={sStrong}>Issue 1 — The &ldquo;Choose lots&rdquo; button is easy to miss.</span> On the trade preview screen, the lot selection appears below the order summary, not above. Users in a hurry to confirm a sale routinely skip past it and end up with FIFO execution. Set a checklist: always confirm specific-lot selection before clicking &ldquo;Place order.&rdquo;
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 2 — Amazon&apos;s back-weighted vest schedule + E*TRADE = large Year 3-4 reconciliation.</span> Amazon RSUs vest 5%/15%/40%/40%. By Year 4, an Amazon employee on E*TRADE typically has 12 vest events of wildly different sizes — and the cost basis report becomes long. Export it monthly during Year 4, not just annually, so you have multiple snapshots.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 3 — ESPP companies on E*TRADE need separate tax treatment.</span> Adobe, Salesforce, Intuit, and others put both RSUs and ESPP on E*TRADE. The ESPP discount is taxable as perquisite at purchase (covered in the <Link href="/blog/espp-india-tax" style={{ color: 'var(--gold)' }}>ESPP pillar</Link>) — ensure your lot inventory tags RSU vs ESPP source clearly.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 4 — ACATS-out fee.</span> The $75 fee is per ACATS request, not per lot. If you ACATS partially across multiple requests, fees stack. Better to batch all eligible lots into one ACATS-out request if possible.
      </p>

      <div style={sWarning}>
        For Adobe and Snowflake employees: both companies have heavy ESPP participation. Mixing ESPP purchase lots with RSU vest lots in a single sale order without explicit lot identification creates ambiguity in lot-level cost basis. Always specify lots.
      </div>

      <h2 style={sH2}>5. What Rovia does</h2>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>E*TRADE Cost Basis Detail Report parsing</span> — RSU vs ESPP lots tagged separately, vest dates and purchase dates preserved.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>RBI TT rate per lot</span> at vest day (RSU) or purchase day (ESPP).</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>0-markup FX channel</span> — even tighter than E*TRADE&apos;s already-competitive 50 bps spread.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schedule FA auto-generation</span> with peak-value computed per lot daily.</li>
        <li><span style={sStrong}>24-month LTCG clock</span> per lot with alerts for both RSU and ESPP holding periods.</li>
      </ul>
      <div style={sCallout}>
        Company-specific guides:&nbsp;
        <Link href="/amazon" style={{ color: 'var(--gold)' }}>Amazon</Link>. Other E*TRADE Stock Plans employers (Adobe, Snowflake, Salesforce subset, AMD, MongoDB, HubSpot, Confluent, Lam Research, Eli Lilly, Twilio, Arista, Autodesk, Okta) use the same mechanical playbook above.
      </div>

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
        Last reviewed June 5, 2026. E*TRADE Stock Plans procedures and fees change — verify on us.etrade.com/stock-plans before initiating. Informational only, not personalised tax or financial advice.
      </p>
    </>
  );
}
