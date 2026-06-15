import Link from 'next/link';

// ─────────────────────────────────────────────
// Broker Transfer #2 — Morgan Stanley StockPlan → India
// ─────────────────────────────────────────────

export const meta = {
  slug: 'transfer-rsus-from-morgan-stanley',
  title: 'How to Transfer RSUs from Morgan Stanley StockPlan to India',
  dek: 'Three Morgan Stanley product brands sit underneath your Meta / Microsoft / Netflix RSU account — Shareworks, StockPlan Connect, Smith Barney. Untangling them is the first step.',
  publishDate: '2026-06-05',
  updatedDate: '2026-06-05',
  author: 'Rovia Editorial',
  tags: ['morgan stanley', 'broker', 'transfer', 'rsu'],
  readingMinutes: 9,
  seoTitle: 'Transfer RSUs from Morgan Stanley StockPlan to India (2026)',
  seoDescription:
    'Step-by-step: how to move Meta, Microsoft, Netflix RSUs from Morgan Stanley StockPlan Connect / Shareworks to a Rovia-managed Indian setup. ACATS vs sell-remit, FX cost, lot history.',
  seoKeywords:
    'transfer rsu morgan stanley india, shareworks rsu transfer, stockplan connect india, meta rsu transfer, microsoft rsu transfer, netflix rsu transfer, morgan stanley to rovia',
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
  { q: 'Is Shareworks the same as StockPlan Connect?', a: 'Both are Morgan Stanley brands for the same underlying stock-plan service. Shareworks was the legacy brand (originally Solium); StockPlan Connect is the current Morgan Stanley brand after the 2019 Solium acquisition. Some employers still use the Shareworks-branded portal; others have migrated to StockPlan Connect. The mechanics are nearly identical.' },
  { q: 'Can I ACATS-transfer out of StockPlan Connect?', a: 'Yes — but the request goes through Morgan Stanley Smith Barney (the underlying broker), not the StockPlan Connect portal directly. You initiate via StockPlan Connect → Transfer Shares; behind the scenes, MS Smith Barney processes the ACATS.' },
  { q: 'How long does ACATS from Morgan Stanley take?', a: 'Standard 5–7 business days. Sometimes longer if the receiving broker requires additional documentation for foreign-resident accounts.' },
  { q: 'What is the wire fee?', a: '$35 for outbound international wires. The FX spread on USD → INR is typically ~100 bps over interbank, the wider end of major-broker FX.' },
  { q: 'For large remits, can I negotiate a better FX rate?', a: 'In principle yes, by speaking to a Morgan Stanley Wealth Management representative for amounts over $50K. This is on-request, not default. For smaller or routine remits, the standard spread applies.' },
  { q: 'I have both vested RSUs and unvested grants. Does the transfer affect unvested?', a: 'No. Only vested, settled shares can be transferred. Unvested RSUs stay in StockPlan Connect under the original grant schedule. Future vests will continue landing there even after you ACATS the vested shares out — you may end up running two accounts simultaneously.' },
];

export function Body() {
  return (
    <>
      <h2 style={{ ...sH2, marginTop: '8px' }}>The naming confusion</h2>
      <p style={sP}>
        Morgan Stanley&apos;s stock-plan business has accumulated three brand names that all refer to overlapping infrastructure. Untangling them is the first step:
      </p>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Brand</th><th style={sTh}>What it is</th><th style={sTh}>Where you see it</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>Shareworks</td><td style={sTd}>Legacy stock-plan portal (originally Solium, acquired by Morgan Stanley in 2019)</td><td style={sTd}>Some older employers still use this URL</td></tr>
          <tr><td style={sTd}>StockPlan Connect</td><td style={sTd}>Morgan Stanley&apos;s current stock-plan portal</td><td style={sTd}>Most current employer-branded URLs</td></tr>
          <tr><td style={sTd}>Morgan Stanley Smith Barney</td><td style={sTd}>The underlying broker-dealer that holds the shares</td><td style={sTd}>Account statements, ACATS paperwork</td></tr>
        </tbody>
      </table>
      <p style={sP}>
        Companies that put Indian residents on Morgan Stanley stock-plan rails include <Link href="/meta" style={{ color: 'var(--gold)' }}>Meta</Link>, <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link>, <Link href="/netflix" style={{ color: 'var(--gold)' }}>Netflix</Link>, and many others — Datadog, Cloudflare, Fortinet, Zscaler among them. The Shareworks-vs-StockPlanConnect distinction is mostly cosmetic; the mechanics below apply to either.
      </p>

      <h2 style={sH2}>1. Pre-transfer setup</h2>
      <p style={sP}>
        Before initiating anything, confirm three states:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}><span style={sStrong}>W-8BEN current.</span> Valid for 3 calendar years from signature. Expired W-8BEN triggers 30% withholding instead of the 25% DTAA rate on dividends, and may flag wire instructions.</li>
        <li style={{ marginBottom: '12px' }}><span style={sStrong}>Linked Morgan Stanley Wealth account?</span> If your employer offers it, your StockPlan Connect may already be linked to a full Morgan Stanley brokerage. If so, ACATS-out is cleaner because the underlying account already supports it natively. Check Account → Account Linking in StockPlan Connect.</li>
        <li><span style={sStrong}>Lot-level cost basis snapshot.</span> Export the Cost Basis & Gain/Loss report from StockPlan Connect before initiating. This is your source of truth for INR cost basis later.</li>
      </ol>

      <h2 style={sH2}>2. The transfer playbook</h2>

      <h3 style={sH3}>Step 1 — Log into StockPlan Connect</h3>
      <p style={sP}>
        Usually accessed via your employer&apos;s benefits portal (e.g., benefits.meta.com → Stock plan), or directly at <span style={sStrong}>stockplanconnect.com</span>. Some employers still use a Shareworks-branded URL; the underlying mechanics are identical.
      </p>

      <h3 style={sH3}>Step 2 — Decide: sell-and-remit or ACATS in-kind</h3>
      <p style={sP}>
        Same fork as in the <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>. ACATS preserves cost basis and lot history; sell-remit realizes gain and gives you INR.
      </p>

      <h3 style={sH3}>Step 3a — ACATS out</h3>
      <p style={sP}>
        StockPlan Connect → Account → Transfer Shares → External account. You need the receiving broker&apos;s DTC number and your destination account number. Morgan Stanley Smith Barney processes the request internally; ACATS settlement typically 5–7 business days. <span style={sStrong}>Cost basis and acquisition dates carry over.</span>
      </p>

      <h3 style={sH3}>Step 3b — Sell and wire</h3>
      <p style={sP}>
        On the trade ticket, set Cost Basis Method to <span style={sStrong}>&ldquo;Specific Identification&rdquo;</span> from the dropdown — Morgan Stanley defaults to FIFO if you don&apos;t. Identify which lots you want sold. After settlement (T+2 typically), Account → Funds Transfer → Wire to your Indian bank. Wire fee: $35.
      </p>

      <h2 style={sH2}>3. Costs at Morgan Stanley</h2>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Item</th><th style={sTh}>Cost</th><th style={sTh}>Notes</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>Outbound ACATS</td><td style={sTd}>$0 (Morgan Stanley does not charge to send)</td><td style={sTd}>Receiving broker may charge inbound</td></tr>
          <tr><td style={sTd}>International wire</td><td style={sTd}>$35</td><td style={sTd}>Plus your Indian bank&apos;s inward-wire fee</td></tr>
          <tr><td style={sTd}>FX spread on USD → INR</td><td style={sTd}>~80–100 basis points</td><td style={sTd}>Wider than Schwab or E*TRADE in our experience</td></tr>
          <tr><td style={sTd}>FX rate negotiation</td><td style={sTd}>Available on request for amounts &gt;$50K</td><td style={sTd}>Speak to MS Wealth Management directly</td></tr>
        </tbody>
      </table>

      <div style={sCallout}>
        Morgan Stanley&apos;s FX is the widest of the four major US employee brokers. On a ₹50L remit at 100 bps spread, that&apos;s ₹50,000 of cost — large enough that for substantial repatriations, routing the FX leg through a 0-markup channel (covered in the <Link href="/blog/fx-repatriation-rsu-india" style={{ color: 'var(--gold)' }}>FX & Repatriation pillar</Link>) is materially worth the operational steps.
      </div>

      <h2 style={sH2}>4. The Morgan Stanley-specific issues</h2>
      <p style={sP}>
        <span style={sStrong}>Issue 1 — The cost basis report timing.</span> StockPlan Connect&apos;s gains/losses report updates in batch overnight. If you sell in the morning and pull the report at 2 PM, your sale isn&apos;t reflected. Wait for the next-day refresh before downloading.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 2 — The customer support time difference.</span> Morgan Stanley Smith Barney is US-time. Confirmations on wire status, ACATS issues, or lot disputes are slow when you&apos;re on a 9.5-hour offset.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 3 — The default FIFO trap on Shareworks.</span> The legacy Shareworks portal does not always surface the &ldquo;Specific Identification&rdquo; choice prominently on the trade ticket — it&apos;s under a secondary menu. If you don&apos;t change it, you sell oldest-first regardless of tax intent.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 4 — Linked vs unlinked Wealth account.</span> If your StockPlan Connect is not linked to a Morgan Stanley brokerage, certain wire instructions require additional verification each time. Linking once at the start removes friction for subsequent remits.
      </p>

      <div style={sWarning}>
        For Netflix employees specifically: monthly vest cycle means ~12 separate cost basis records per year. The cost basis export is the single most critical artifact — get it before any transfer, store it, and treat it as authoritative.
      </div>

      <h2 style={sH2}>5. What Rovia does</h2>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Direct StockPlan Connect statement ingestion.</span> Both Shareworks and StockPlan Connect formats. Lot-by-lot vest date, share count, USD cost basis extracted.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>RBI TT rate applied per vest day.</span> INR cost basis computed at the actual reference rate on each vest day, lot by lot.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>0-markup FX channel</span> for repatriation — bypassing the ~100 bps Morgan Stanley spread.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schedule FA auto-generation</span> with calendar-year accounting period and peak-value per lot.</li>
        <li><span style={sStrong}>24-month LTCG countdown</span> per lot with month-23 alerts to avoid the STCG cliff.</li>
      </ul>
      <div style={sCallout}>
        Company-specific migration walkthroughs:&nbsp;
        <Link href="/meta" style={{ color: 'var(--gold)' }}>Meta</Link>,&nbsp;
        <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link>,&nbsp;
        <Link href="/netflix" style={{ color: 'var(--gold)' }}>Netflix</Link>. Other Morgan Stanley employers (Datadog, Cloudflare, Fortinet, Zscaler) use the same playbook.
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
        Last reviewed June 5, 2026. Morgan Stanley brands and procedures change — verify on stockplanconnect.com or your employer portal before initiating. Informational only, not personalised tax or financial advice.
      </p>
    </>
  );
}
