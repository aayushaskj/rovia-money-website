import Link from 'next/link';

// ─────────────────────────────────────────────
// Broker Transfer #3 — Fidelity Stock Plan Services → India
// ─────────────────────────────────────────────

export const meta = {
  slug: 'transfer-rsus-from-fidelity',
  title: 'How to Transfer RSUs from Fidelity NetBenefits to Rovia',
  dek: 'Fidelity Stock Plan Services links to a full Fidelity brokerage, which makes ACATS to Rovia simpler than at Schwab — but the foreign-wire paper-form quirk catches every first-time filer.',
  publishDate: '2026-06-05',
  updatedDate: '2026-06-05',
  author: 'Rovia Editorial',
  tags: ['fidelity', 'broker', 'transfer', 'rsu', 'rovia'],
  readingMinutes: 8,
  seoTitle: 'Transfer RSUs from Fidelity NetBenefits to Rovia (2026 Guide)',
  seoDescription:
    'Step-by-step: move Microsoft, NVIDIA, Salesforce, Oracle RSUs from Fidelity Stock Plan Services / NetBenefits to Rovia. ACATS, wire form, FX cost, INR cost basis.',
  seoKeywords:
    'transfer rsu fidelity to rovia, netbenefits to rovia, fidelity stock plan services rovia, microsoft rsu transfer, nvidia rsu transfer, fidelity to rovia migration',
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
  { q: 'Is Fidelity NetBenefits the same as my Fidelity brokerage account?', a: 'No. NetBenefits is the employee-facing stock-plan portal; the underlying brokerage is Fidelity Brokerage Services. Most Indian employees see only NetBenefits because their employer set up the linked brokerage automatically when grants started landing.' },
  { q: 'Can I ACATS-transfer directly from NetBenefits?', a: 'Effectively yes — once shares have settled into the linked Fidelity Brokerage account (which happens automatically after RSU release), ACATS-out works normally via Fidelity.com → Transfer → External Account.' },
  { q: 'Why does Fidelity require a paper form for my first foreign wire?', a: 'Fidelity treats first-time international wire destinations as elevated-risk for AML purposes. The paper Wire Funds Authorization Form requires a notarized signature and a one-time medallion stamp for some account tiers. Subsequent wires to the same bank account can be initiated online.' },
  { q: 'What is the wire fee at Fidelity?', a: '$0–$25 depending on your account tier. Premium tier (>$250K balance) and Wealth Management clients often get free wires; standard brokerage tier pays $25 per outbound international wire.' },
  { q: 'Does Fidelity preserve specific lot identification on sales?', a: 'Yes, but you must select it explicitly on each trade ticket — the default is FIFO. Set Cost Basis Method on the trade preview screen: Specific Shares → identify lots.' },
  { q: 'I have ESPP shares from Microsoft. Are they in the same account?', a: 'Yes — Microsoft ESPP shares (purchase via Fidelity Stock Plan Services) land in the same NetBenefits account as your MSFT RSUs. Lots are tagged by source (RSU vs ESPP), which matters for tax classification but not for transfer mechanics.' },
];

export function Body() {
  return (
    <>
      <h2 style={{ ...sH2, marginTop: '8px' }}>Who is on Fidelity Stock Plan Services</h2>
      <p style={sP}>
        Fidelity Stock Plan Services is the stock-plan platform for a long list of US tech employers — most relevant for Indian residents: <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link>, NVIDIA, Salesforce (some plans), Oracle, Synopsys, Cadence, Visa, Texas Instruments, Arm, Honeywell, NetApp.
      </p>
      <p style={sP}>
        The mechanical structure is cleaner than Schwab Equity Awards: <span style={sStrong}>Fidelity Stock Plan Services automatically links to a regular Fidelity Brokerage Account.</span> Once shares vest, they settle into the brokerage side and become fully tradable / transferable without an intermediate move. The friction lives elsewhere — primarily in the foreign-wire procedure.
      </p>

      <h2 style={sH2}>1. NetBenefits vs Fidelity Brokerage</h2>
      <p style={sP}>
        Two interfaces, one underlying account family:
      </p>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Portal</th><th style={sTh}>Purpose</th><th style={sTh}>Where the shares actually live</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>NetBenefits (netbenefits.fidelity.com)</td><td style={sTd}>Employee-facing stock-plan portal: see grants, vests, exercises, tax docs</td><td style={sTd}>Once settled, in the linked Fidelity Brokerage</td></tr>
          <tr><td style={sTd}>Fidelity.com</td><td style={sTd}>Full brokerage: trade, transfer, wire, taxes</td><td style={sTd}>Same underlying account as above</td></tr>
        </tbody>
      </table>
      <p style={sP}>
        You log into both with the same Fidelity credentials. For transfer operations, work primarily on the Fidelity.com side.
      </p>

      <h2 style={sH2}>2. The transfer playbook</h2>

      <h3 style={sH3}>Step 1 — Verify W-8BEN status</h3>
      <p style={sP}>
        On NetBenefits → Profile → Tax Documents → W-8BEN status. Valid for 3 calendar years from signature. Renew if expiring within 6 months.
      </p>

      <h3 style={sH3}>Step 2 — Confirm shares are in the linked brokerage</h3>
      <p style={sP}>
        On Fidelity.com → Accounts. You should see your brokerage account with the vested shares already populated. If shares show only in NetBenefits and not in the brokerage, contact Fidelity Stock Plan Services to confirm settlement.
      </p>

      <h3 style={sH3}>Step 3 — Choose your path</h3>
      <p style={sP}>
        ACATS-out or sell-and-remit, per the <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>.
      </p>

      <h3 style={sH3}>Step 4a — ACATS out</h3>
      <p style={sP}>
        Fidelity.com → Transfer → Transfer External Account → outgoing transfer. Provide receiving broker DTC number and account number. Fidelity processes ACATS-out at no charge from their side. Settlement: 5–7 business days.
      </p>

      <h3 style={sH3}>Step 4b — Sell, then wire to India</h3>
      <p style={sP}>
        Trade ticket: select cost basis method <span style={sStrong}>&ldquo;Specific Shares&rdquo;</span> (not FIFO default), identify lots. Settle T+2.
      </p>
      <p style={sP}>
        Then the wire — and this is where Fidelity differs from Schwab and Morgan Stanley:
      </p>

      <div style={sWarning}>
        <span style={sStrong}>First-time foreign wire: paper form required.</span> Fidelity&apos;s Wire Funds Authorization Form must be downloaded, completed with your Indian bank&apos;s SWIFT and account details, signed (notarization or medallion stamp may apply depending on tier), and mailed or faxed to Fidelity. Processing: 3–5 business days after receipt before the first wire can be initiated. Subsequent wires to the same destination bank can be done online.
      </div>

      <h2 style={sH2}>3. Costs at Fidelity</h2>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Item</th><th style={sTh}>Cost</th><th style={sTh}>Notes</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>Outbound ACATS</td><td style={sTd}>$0</td><td style={sTd}>Receiving broker may charge inbound</td></tr>
          <tr><td style={sTd}>International wire</td><td style={sTd}>$0–$25</td><td style={sTd}>Free at Premium/Wealth tiers; $25 standard</td></tr>
          <tr><td style={sTd}>FX spread on USD → INR</td><td style={sTd}>~60–80 basis points</td><td style={sTd}>Mid-pack vs other brokers</td></tr>
          <tr><td style={sTd}>First-foreign-wire paper form</td><td style={sTd}>$0 (Fidelity charges nothing) but takes 3–5 days</td><td style={sTd}>One-time setup cost in time, not money</td></tr>
        </tbody>
      </table>

      <h2 style={sH2}>4. The Fidelity-specific issues</h2>
      <p style={sP}>
        <span style={sStrong}>Issue 1 — The paper-wire form delay.</span> Plan ahead. If you intend to remit proceeds after a sale, submit the Wire Funds Authorization Form 1–2 weeks before the sale settles. Otherwise you sit on USD in your brokerage account waiting for wire-eligible status.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 2 — ESPP lots commingled with RSU lots.</span> Microsoft ESPP shares purchased via Fidelity sit in the same brokerage account as the RSU vests. Tax treatment differs (covered in the <Link href="/blog/espp-india-tax" style={{ color: 'var(--gold)' }}>ESPP pillar</Link>) but lot tagging matters for cost-basis accuracy — use the lot-level statement export to keep them separated in your records.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 3 — The 24-month clock on each lot type.</span> RSU lots use vest date; ESPP lots use purchase date. Both start their own 24-month LTCG clock. Mixing the two in a single sale order without specific-lot selection creates tax-classification headaches.
      </p>
      <p style={sP}>
        <span style={sStrong}>Issue 4 — Customer-support availability.</span> Fidelity offers 24/7 phone but the team that handles foreign-wire questions runs US business hours. For wire troubleshooting, plan calls in the morning IST window (evening US time).
      </p>

      <div style={sCallout}>
        For Microsoft employees with both quarterly RSU vests and semi-annual ESPP purchases, the Fidelity account can accumulate 12–20 distinct lots per year. Manual reconciliation to INR cost basis becomes increasingly painful by year 3. This is the use case Rovia&apos;s lot importer is built for.
      </div>

      <h2 style={sH2}>5. What Rovia does</h2>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>NetBenefits + Fidelity statement parsing.</span> Both the Year-End Tax Information PDF and the Gains/Losses statement. RSU and ESPP lots tagged separately.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Per-lot RBI TT rate.</span> INR cost basis at the actual vest-day (RSU) or purchase-day (ESPP) reference rate.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>0-markup FX channel.</span> Bypasses the 60–80 bps Fidelity spread.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schedule FA</span> with the calendar-year accounting period and peak-value per lot.</li>
        <li><span style={sStrong}>24-month LTCG clock</span> per lot, with separate counters for RSU vs ESPP lots.</li>
      </ul>
      <div style={sCallout}>
        Company-specific guides:&nbsp;
        <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link>. Other Fidelity Stock Plan Services employers (NVIDIA, Salesforce subset, Oracle, Synopsys, Cadence, Honeywell, Visa, Texas Instruments, Arm, NetApp) use the same mechanical playbook above.
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
        Last reviewed June 5, 2026. Fidelity procedures, fees, and tier-specific waivers change — verify on fidelity.com or netbenefits.fidelity.com before initiating. Informational only, not personalised tax or financial advice.
      </p>
    </>
  );
}
