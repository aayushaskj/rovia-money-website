import Link from 'next/link';

// ─────────────────────────────────────────────
// Broker Transfer #1 — Schwab Equity Awards → India
// ─────────────────────────────────────────────

export const meta = {
  slug: 'transfer-rsus-from-schwab',
  title: 'How to Transfer RSUs from Schwab Equity Awards to Rovia',
  dek: 'Schwab Equity Awards is a stock-plan account, not a full Schwab brokerage — that single fact dictates every transfer mechanic. The step-by-step playbook to move your Google, Apple, Cisco, IBM RSUs to Rovia.',
  publishDate: '2026-06-05',
  updatedDate: '2026-06-05',
  author: 'Rovia Editorial',
  tags: ['schwab', 'broker', 'transfer', 'rsu', 'rovia'],
  readingMinutes: 9,
  seoTitle: 'Transfer RSUs from Schwab Equity Awards to Rovia (2026 Playbook)',
  seoDescription:
    'Step-by-step: how to move Google, Apple, Cisco, IBM RSUs from Schwab Equity Awards to Rovia. ACATS vs sell-remit, $25 wire fee, lot history preservation, INR cost basis.',
  seoKeywords:
    'transfer rsu schwab to rovia, schwab equity awards rovia, google rsu transfer, apple rsu transfer, schwab acats india, schwab to rovia migration',
};

// ── shared inline styles ──
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
  { q: 'Can I ACATS-transfer directly from Schwab Equity Awards?', a: 'No. Schwab Equity Awards is a stock-plan account, not a full brokerage. You must first move shares to a Schwab One brokerage account (an internal transfer, instant) and ACATS out from there.' },
  { q: 'Will my Schwab cost basis transfer with the shares?', a: 'Yes for in-kind ACATS to another US broker — cost basis and acquisition (vest) dates carry over. But the cost basis is in USD; for Indian capital-gains computation you still need INR basis at the vest-day RBI TT rate, which Schwab does not provide.' },
  { q: 'How long does the Schwab → Schwab One internal move take?', a: 'Same-day, sometimes instant. The ACATS leg from Schwab One to another broker takes 5–7 business days after that.' },
  { q: 'What is the wire fee for sending USD from Schwab to my Indian bank?', a: '$25 per wire. The FX rate Schwab applies is interbank + 70–100 bps. On a ₹50L equivalent remit, the FX friction alone is ₹35,000–₹50,000.' },
  { q: 'What if my W-8BEN expired?', a: 'Renew it before any transfer or large sale. Schwab will switch you to 30% backup withholding on dividends and possibly flag wire instructions if W-8BEN is invalid. The form is valid for 3 calendar years from signature.' },
  { q: 'Do I lose my 24-month LTCG clock if I move from Schwab Equity Awards to Schwab One?', a: 'No. The internal move preserves your acquisition (vest) date. The 24-month clock per lot continues uninterrupted.' },
];

export function Body() {
  return (
    <>
      <h2 style={{ ...sH2, marginTop: '8px' }}>Who is on Schwab Equity Awards</h2>
      <p style={sP}>
        Schwab Equity Awards is the stock-plan platform behind a tight cluster of US employers — most relevant for Indian residents: <Link href="/google" style={{ color: 'var(--gold)' }}>Google (Alphabet)</Link>, <Link href="/apple" style={{ color: 'var(--gold)' }}>Apple</Link>, Cisco, Eli Lilly, IBM, and a handful of others. If you are an Indian-resident IC at any of these companies, this guide is for you.
      </p>
      <p style={sP}>
        The single most important thing to understand about Schwab Equity Awards: <span style={sStrong}>it is not a full Schwab brokerage account.</span> It is a restricted stock-plan account that exists primarily to receive and hold your employer&apos;s grants. You cannot ACATS-transfer shares out of it directly. Every transfer mechanic flows from this constraint.
      </p>

      <h2 style={sH2}>1. The Schwab Equity Awards architecture</h2>
      <p style={sP}>
        There are actually two Schwab logins in play: <span style={sStrong}>schwab.com/equity-awards</span> (your stock-plan portal — restricted) and <span style={sStrong}>schwab.com</span> (your Schwab One brokerage, if you have opened one). They share single sign-on but have distinct account numbers and operational rules.
      </p>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Account type</th><th style={sTh}>What it does</th><th style={sTh}>ACATS out?</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>Schwab Equity Awards</td><td style={sTd}>Receives RSU vests, ESPP purchases, stock options. Limited trading.</td><td style={sTd}>No — must move to Schwab One first</td></tr>
          <tr><td style={sTd}>Schwab One brokerage</td><td style={sTd}>Full trading account; supports outbound ACATS, wires, margin (optional).</td><td style={sTd}>Yes</td></tr>
        </tbody>
      </table>
      <p style={sP}>
        For most Indian-resident employees, the Schwab One account was never opened — you only ever interacted with the Equity Awards portal. The fix is straightforward: open one before initiating any transfer.
      </p>

      <h2 style={sH2}>2. The transfer playbook</h2>

      <h3 style={sH3}>Step 1 — Open a Schwab One brokerage account (if you don&apos;t have one)</h3>
      <p style={sP}>
        On schwab.com → Accounts → Open new account → &ldquo;Schwab One Brokerage Account.&rdquo; The application asks for your W-8BEN (required for non-US-resident status) and an Indian residential address. Approval is typically 24–48 hours.
      </p>

      <h3 style={sH3}>Step 2 — Internal transfer from Equity Awards to Schwab One</h3>
      <p style={sP}>
        Once Schwab One is open: log into schwab.com → Service → Move Money → Internal Transfer. Select Equity Awards as source, Schwab One as destination, and the specific lots to move (or &ldquo;all eligible shares&rdquo;). This is same-day, sometimes instant. <span style={sStrong}>Cost basis and acquisition dates carry over.</span>
      </p>

      <h3 style={sH3}>Step 3 — Decide: sell-and-remit, or ACATS out</h3>
      <p style={sP}>
        Now the shares are in a full brokerage and both paths are open. The decision is covered in depth in the <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>. Short version: ACATS-out preserves your lot history and 24-month LTCG clock; sell-and-remit gives you INR immediately but realizes the gain.
      </p>

      <h3 style={sH3}>Step 4a — ACATS out (preserves clock)</h3>
      <p style={sP}>
        If transferring to another US broker that supports Indian residents (Interactive Brokers is the common choice): open the destination account first, get its DTC number and your account number, then on schwab.com → Service → Move Money → Transfer to External Account → ACATS. Standard ACATS completes in 5–7 business days.
      </p>

      <h3 style={sH3}>Step 4b — Sell and remit USD</h3>
      <p style={sP}>
        On schwab.com → Trade → Sell. <span style={sStrong}>Important:</span> change Cost Basis Method to &ldquo;Specific Identification&rdquo; in Account Settings BEFORE the sell ticket, otherwise Schwab defaults to FIFO. Identify the specific lots you want sold (LTCG-eligible lots first, usually). Then Service → Funds Transfer → Wire to your Indian bank.
      </p>

      <h2 style={sH2}>3. Fees and FX — what it actually costs</h2>
      <table style={sTable}>
        <thead><tr><th style={sTh}>Item</th><th style={sTh}>Cost</th><th style={sTh}>Notes</th></tr></thead>
        <tbody>
          <tr><td style={sTd}>Outbound ACATS</td><td style={sTd}>$0 from Schwab (destination broker may charge inbound fee)</td><td style={sTd}>IBKR has $0 inbound; some others charge $25–75</td></tr>
          <tr><td style={sTd}>International wire (USD → India)</td><td style={sTd}>$25</td><td style={sTd}>Plus your Indian bank&apos;s inward-wire fee (₹1,000–₹5,000)</td></tr>
          <tr><td style={sTd}>FX spread on USD → INR</td><td style={sTd}>~70–100 basis points</td><td style={sTd}>On ₹50L equivalent = ₹35,000–₹50,000 of friction</td></tr>
          <tr><td style={sTd}>Internal Equity Awards → Schwab One move</td><td style={sTd}>$0</td><td style={sTd}>Same-day, preserves cost basis</td></tr>
        </tbody>
      </table>

      <div style={sCallout}>
        On a ₹1 Cr lifetime cumulative remit through Schwab&apos;s FX leg at 85 bps average, the FX friction works out to ₹85,000 — paid silently into Schwab&apos;s spread, never line-itemed on a statement. Worth structuring around if you can.
      </div>

      <h2 style={sH2}>4. The four Schwab-specific mistakes</h2>
      <p style={sP}>
        <span style={sStrong}>Mistake 1 — Selling directly from Equity Awards without specific lot ID.</span> Equity Awards has limited cost-basis-method settings. If you sell from there, FIFO is essentially the only option. Move to Schwab One first; the &ldquo;Specific Identification&rdquo; method is only fully exposed in the brokerage account.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 2 — Skipping the W-8BEN check.</span> Schwab is strict about W-8BEN currency. If yours is within 6 months of expiry, renew before initiating any transfer or large sale. Expired W-8BEN triggers 30% backup withholding instead of the 25% DTAA rate.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 3 — Wire to the wrong receiving account.</span> If you have been an Indian resident throughout the holding period, the proceeds belong in your NRO/resident savings account, not an NRE account. Wiring to an NRE-restricted account can trigger a bank-level reject + conversion penalty.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 4 — Using Schwab&apos;s USD cost basis on your Indian ITR.</span> Schwab reports cost basis in USD. India needs INR basis at vest-day RBI TT rate. Schwab does not convert this for you; if you copy the USD figure into your ITR, the Income Tax Department recomputes at TT rate and you owe top-up tax with interest. Covered in the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>.
      </p>

      <div style={sWarning}>
        <span style={sStrong}>One more for Apple ESPP holders.</span> If you participate in Apple&apos;s 15% discount ESPP, check qualifying-disposition flags before initiating any sale or transfer. The US tax treatment differs by disposition type — India does not honor the qualified/disqualified distinction (covered in the <Link href="/blog/espp-india-tax" style={{ color: 'var(--gold)' }}>ESPP pillar</Link>), but if you have any US tax-residence years, the disposition status still affects your US filing.
      </div>

      <h2 style={sH2}>5. What Rovia does</h2>
      <p style={sP}>
        Once Schwab Equity Awards is behind you and your lots are with Rovia, the India-side operations are automated end-to-end:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schwab statement parsing.</span> Drop your Year-End Tax Information PDF or Gains/Losses statement, lots are extracted with vest dates, share counts, USD cost basis.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>RBI TT rate at each vest date.</span> INR cost basis per lot computed automatically using the actual RBI reference rate on each vest day.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schedule FA auto-generation</span> for AY 2026-27 and beyond, including peak-value computation per lot using daily USD prices and daily TT rates.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>24-month LTCG clock per lot</span> with alerts at month 23 and month 25 (the safe-LTCG threshold).</li>
        <li><span style={sStrong}>0-markup FX channel</span> for sale-and-remit transactions. Interbank rate, no broker spread.</li>
      </ul>
      <div style={sCallout}>
        Company-specific guides for the most common Schwab Equity Awards employers:&nbsp;
        <Link href="/google" style={{ color: 'var(--gold)' }}>Google</Link>,&nbsp;
        <Link href="/apple" style={{ color: 'var(--gold)' }}>Apple</Link>. Other Schwab-Equity-Awards employers (Cisco, Eli Lilly, IBM) use the same mechanical playbook above.
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
        Last reviewed June 5, 2026. Schwab procedures and fees change — verify on schwab.com before initiating. This article is informational and not personalised tax or financial advice — your specific position should be reviewed by a qualified chartered accountant.
      </p>
    </>
  );
}
