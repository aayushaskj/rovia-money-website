import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #3 — Transferring RSUs from US Broker to India
// ─────────────────────────────────────────────

export const meta = {
  slug: 'transfer-rsus-to-india',
  title: 'How to Transfer Your RSUs from Schwab, Morgan Stanley, or E*TRADE to India',
  dek: 'Two ways to move vested RSUs out of the US: sell-and-remit versus ACATS in-kind transfer. With broker-by-broker steps, the pre-transfer checklist, and the lot-history mistake that costs people lakhs.',
  publishDate: '2026-06-03',
  updatedDate: '2026-06-03',
  author: 'Rovia Editorial',
  tags: ['broker', 'repatriation', 'rsu', 'pillar'],
  readingMinutes: 12,
  seoTitle: 'Transfer RSUs from Schwab / Morgan Stanley / E*TRADE to India (2026)',
  seoDescription:
    'The complete broker-transfer playbook: ACATS vs sell-remit, pre-transfer checklist, Schwab / Morgan Stanley / E*TRADE / Fidelity step-by-step, FX & tax pitfalls.',
  seoKeywords:
    'transfer rsu to india, move rsu from schwab, morgan stanley stockplan transfer, etrade rsu transfer, acats india, repatriate rsu, sell rsu remit india',
};

// ─── shared inline styles ────────────────────────────
const ARTICLE_TEXT = '#cbd5e1';
const SOFT_TEXT = '#8892a4';
const HEAD_TEXT = '#f1f5f9';
const CARD_BG = '#0a1220';
const HAIR_LINE = 'rgba(255,255,255,0.07)';

const sH2 = {
  fontSize: 'clamp(22px, 3vw, 28px)',
  fontWeight: 800,
  color: HEAD_TEXT,
  letterSpacing: '-0.02em',
  lineHeight: 1.25,
  marginTop: '56px',
  marginBottom: '18px',
};

const sH3 = {
  fontSize: '18px',
  fontWeight: 700,
  color: HEAD_TEXT,
  letterSpacing: '-0.01em',
  marginTop: '32px',
  marginBottom: '12px',
};

const sP = {
  fontSize: '16px',
  lineHeight: 1.75,
  color: ARTICLE_TEXT,
  margin: '0 0 18px',
};

const sStrong = { color: HEAD_TEXT, fontWeight: 700 };

const sTable = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '24px 0 32px',
  fontSize: '14px',
  background: CARD_BG,
  border: `1px solid ${HAIR_LINE}`,
  borderRadius: '12px',
  overflow: 'hidden',
};

const sTh = {
  textAlign: 'left',
  padding: '12px 16px',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--gold)',
  background: 'rgba(196,169,126,0.06)',
  borderBottom: `1px solid ${HAIR_LINE}`,
};

const sTd = {
  padding: '12px 16px',
  borderTop: `1px solid ${HAIR_LINE}`,
  color: ARTICLE_TEXT,
  verticalAlign: 'top',
};

const sCallout = {
  background: 'linear-gradient(135deg, rgba(196,169,126,0.07), rgba(196,169,126,0.02))',
  border: '1px solid rgba(196,169,126,0.22)',
  borderRadius: '14px',
  padding: '20px 24px',
  margin: '28px 0',
  fontSize: '15px',
  lineHeight: 1.7,
  color: '#e2e8f0',
};

const sWarning = {
  background: 'rgba(239, 68, 68, 0.06)',
  border: '1px solid rgba(239, 68, 68, 0.25)',
  borderRadius: '14px',
  padding: '20px 24px',
  margin: '28px 0',
  fontSize: '15px',
  lineHeight: 1.7,
  color: '#e2e8f0',
};

const sFaqQ = {
  fontSize: '16px',
  fontWeight: 700,
  color: HEAD_TEXT,
  marginBottom: '8px',
  marginTop: 0,
};

const sFaqA = {
  fontSize: '15px',
  lineHeight: 1.7,
  color: SOFT_TEXT,
  margin: 0,
};

export const faq = [
  {
    q: 'Do I have to sell everything before moving to India? Can I transfer shares in-kind?',
    a: 'You can transfer in-kind via ACATS to another US-domiciled brokerage that supports Indian residents (Interactive Brokers, for example). But you cannot ACATS-transfer US shares directly into an Indian demat account — Indian demat accounts only hold Indian-listed securities. To bring the value into India in INR, you must eventually sell and remit.',
  },
  {
    q: 'Will I lose my LTCG holding-period clock if I transfer?',
    a: 'In-kind ACATS transfer preserves the original acquisition (vest) date — your 24-month LTCG clock continues. Sell-and-rebuy at a new broker resets the clock; the new purchase has a new acquisition date. This is the single most expensive mistake in broker transfers.',
  },
  {
    q: 'How long does an ACATS transfer take?',
    a: 'Full ACATS transfer typically completes in 5–7 business days. Partial transfers (some lots) can be faster. Stock plan accounts (Schwab Equity Awards, Morgan Stanley StockPlan) sometimes need to be converted to a regular brokerage account first before ACATS is possible — that adds 3–10 business days.',
  },
  {
    q: 'What about RSUs that have not vested yet?',
    a: 'Unvested RSUs cannot be transferred. They remain in the employer-designated broker until vest, and only the vested shares can be moved. If you transfer existing vested holdings out, future vests will still land in your original Schwab/Morgan Stanley/E*TRADE account — you may end up running two accounts simultaneously.',
  },
  {
    q: 'Are there tax consequences to an ACATS in-kind transfer?',
    a: 'No, an in-kind transfer between brokers is not a taxable event in India or the US — you are still the owner, no sale has occurred. Cost basis and acquisition date are preserved. The taxable event happens only when you eventually sell.',
  },
  {
    q: 'What about FX? When I sell and remit, what rate do I get?',
    a: "Two rates matter. The broker's FX spread (Schwab applies ~70-100 bps over interbank; Morgan Stanley closer to 100 bps; E*TRADE around 50 bps) and the wire fee ($25-50). On a ₹50L remit, 75 bps of FX cost is ~₹37,500. Rovia routes around the broker FX leg by remitting through a 0-markup channel — material at scale.",
  },
];

export function Body() {
  return (
    <>
      {/* ── Opening ─────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>The two ways to leave</h2>
      <p style={sP}>
        Once your RSUs vest, the shares sit in a US brokerage account: Schwab Equity Awards (Google, Apple), Morgan Stanley StockPlan (Meta, Microsoft, Netflix), E*TRADE Stock Plans (Amazon, Adobe, others), or Fidelity Stock Plan Services. From there, getting the value into India in rupees has exactly two paths:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Sell at the US broker, wire the USD proceeds to your Indian bank, convert to INR.</span> Simplest path. One taxable event in India per sale. FX cost depends on which broker did the conversion.
        </li>
        <li>
          <span style={sStrong}>Transfer the shares in-kind to a different US broker that supports Indian residents (ACATS), then sell whenever you choose.</span> Preserves your cost basis and vest-date holding clock. Useful if you want to keep the position invested but escape the employer-broker UI and lot-history limitations.
        </li>
      </ol>
      <p style={sP}>
        Most engineers default to Path 1, often at the worst possible time — selling reactively when INR weakens or the market dips. Path 2 buys you flexibility. The trade-off is operational: you have to set up a new account, file ACATS paperwork, and reconcile cost basis on the new side. That is what most of this guide is about.
      </p>

      <div style={sWarning}>
        <span style={sStrong}>Lot history is the everything mistake.</span> When you transfer or rebuy, your INR cost basis must carry forward at the original vest-day RBI TT rate, lot by lot. Brokers will sometimes report a USD cost basis at the transfer-day rate (effectively zeroing out your historical lot data). If you accept that, your future India capital-gains tax computation breaks. Solve this <em>before</em> initiating any transfer.
      </div>

      {/* ── Section 1 ─────────────────────────────────── */}
      <h2 style={sH2}>1. Why people leave the employer broker</h2>
      <p style={sP}>
        Employer-designated brokers serve the employer&apos;s needs, not yours as an Indian resident. The structural friction:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>FX is a tax in disguise.</span> Schwab applies ~70–100 basis points spread over interbank. Morgan Stanley closer to 100 bps. E*TRADE 50 bps. On a ₹50L sale, 75 bps is ₹37,500 of friction, every time.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Lot-level reporting is poor.</span> Indian capital gains require INR cost basis per lot at vest-day RBI TT rate. US brokers report USD basis at vest-day USD price. Translating these correctly is a manual exercise; the brokers do not provide an INR-basis Schedule FA-ready output.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Schedule FA and Form 67 are entirely your problem.</span> The US broker has zero obligation under Indian tax law. The disclosure burden falls entirely on you.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Wire fees are real.</span> Schwab wire to India: $25. Morgan Stanley: $35. E*TRADE: $25. Per outbound wire.
        </li>
        <li>
          <span style={sStrong}>Customer support is US-time.</span> When you need to confirm a wire or fix a lot record, you are on a 9.5-hour time difference, on hold to a US call center.
        </li>
      </ul>

      {/* ── Section 2 ─────────────────────────────────── */}
      <h2 style={sH2}>2. The pre-transfer checklist</h2>
      <p style={sP}>
        Before initiating any transfer or large sale — whether sell-and-remit or ACATS — work through this list. Skipping any item creates downstream tax or operational mess.
      </p>

      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '14px' }}>
          <span style={sStrong}>W-8BEN is current.</span> Your W-8BEN must be on file and unexpired at the US broker. Expired W-8BEN triggers 30% backup withholding on dividends and may complicate wire instructions. Validity: 3 calendar years from signature. If you signed in 2022, it expires Dec 31, 2025.
        </li>
        <li style={{ marginBottom: '14px' }}>
          <span style={sStrong}>Pending vests calendar.</span> Avoid transferring during a vest window. If a vest hits during ACATS migration, the new shares land in the source broker — splitting your holding across two accounts and complicating future reconciliation.
        </li>
        <li style={{ marginBottom: '14px' }}>
          <span style={sStrong}>Cost basis snapshot.</span> Before transfer, export the full lot-by-lot cost basis report from the source broker (vest date, shares, USD cost basis, USD price at vest). This is the source of truth for INR cost basis computation. Store it; do not rely on the broker keeping it accessible later.
        </li>
        <li style={{ marginBottom: '14px' }}>
          <span style={sStrong}>Outstanding ESPP holding-period requirements.</span> If you participate in ESPP (Microsoft, Apple, Cisco, Intel), check the qualifying disposition holding period before selling. US disqualifying-disposition rules can change your US tax treatment — though India does not honor US qualified/disqualified treatment, your overall tax position can shift if you have any US tax residence year.
        </li>
        <li style={{ marginBottom: '14px' }}>
          <span style={sStrong}>Receiving Indian bank account.</span> For sell-and-remit, you need an NRO or resident savings account that accepts inward foreign wires in USD, with the bank&apos;s SWIFT code and intermediary bank routing. Confirm with your bank before initiating. Some banks charge ₹1,000–₹5,000 per inward wire.
        </li>
        <li>
          <span style={sStrong}>The 24-month LTCG clock per lot.</span> Run the holding-period calendar before selling. A lot at month 23 should not be sold; wait two more weeks and reclass STCG → LTCG. <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link> covers the math.
        </li>
      </ol>

      {/* ── Section 3 — broker-by-broker ─────────────────────── */}
      <h2 style={sH2}>3. The broker-by-broker mechanics</h2>

      <h3 style={sH3}>Schwab Equity Awards (Google, Apple)</h3>
      <p style={sP}>
        Schwab Equity Awards is technically a stock-plan account, not a full Schwab One brokerage. To ACATS-transfer shares out, you first need to <span style={sStrong}>open a regular Schwab One brokerage account</span> and move the shares from Equity Awards to One via internal transfer (Schwab tools → Move Money or call Schwab Equity Awards). Once in Schwab One, ACATS to your destination broker.
      </p>
      <p style={sP}>
        For sell-and-remit instead: Schwab&apos;s wire request form is in <em>Service → Funds Transfer → Wire</em>. Standard wire to a foreign bank: $25 fee, 1–2 business day settlement. Schwab uses its own FX rate (interbank + ~70–100 bps); you cannot specify an FX vendor.
      </p>

      <h3 style={sH3}>Morgan Stanley StockPlan (Meta, Microsoft, Netflix)</h3>
      <p style={sP}>
        StockPlan Connect is the employee-facing portal; the underlying brokerage is Morgan Stanley Smith Barney. To move shares out, log into StockPlan Connect → request transfer to either an external broker (ACATS) or your linked Morgan Stanley Wealth Management account. ACATS instructions need the receiving broker&apos;s DTC number and your account number there.
      </p>
      <p style={sP}>
        Morgan Stanley&apos;s outbound wire fee is $35. The FX spread historically runs closer to 100 bps. For larger remittances (&gt; $50K), you may negotiate a better rate by speaking with a Morgan Stanley Wealth Management representative — but this is on-request, not default.
      </p>

      <h3 style={sH3}>E*TRADE Stock Plans (Amazon, Adobe, Twilio, Cloudflare)</h3>
      <p style={sP}>
        E*TRADE (now part of Morgan Stanley but operationally separate) is the cleanest of the major stock-plan platforms for transfers. ACATS form is in <em>Customer Service → Transfer Money or Shares → Transfer an account to E*TRADE</em> (the reverse direction button is available). Standard ACATS completes in 5–7 business days.
      </p>
      <p style={sP}>
        E*TRADE&apos;s wire fee is $25 and FX is among the tighter of the major brokers (~50 bps). For ESPP holders, check qualifying-disposition flags before initiating any sale.
      </p>

      <h3 style={sH3}>Fidelity Stock Plan Services (Amazon, others)</h3>
      <p style={sP}>
        Fidelity Stock Plan Services accounts can be linked to a regular Fidelity brokerage, after which ACATS or wires work normally. For Indian-resident wires, Fidelity requires a paper form (Wire Funds Form, not online) for first-time foreign destinations; subsequent wires can be initiated online. Wire fee: $0–$25 depending on account tier.
      </p>

      <div style={sCallout}>
        Once any of these brokers approves the transfer or wire, the operational work shifts to the India side: lot-level cost basis reconciliation, Schedule FA disclosure of any sold-and-remitted lots, and Form 67 if dividend withholding applied. This is the part Rovia automates.
      </div>

      {/* ── Section 4 — After the transfer ───────────────────── */}
      <h2 style={sH2}>4. After the transfer — what changes</h2>

      <h3 style={sH3}>If you ACATS-transferred in-kind</h3>
      <p style={sP}>
        Nothing changes for tax purposes. You still own the shares, your acquisition date is preserved per lot, your 24-month LTCG clock continues uninterrupted. Schedule FA disclosure for the new accounting period uses the new broker&apos;s account in Table A2; the underlying equity in Table A3 retains the original vest dates.
      </p>
      <p style={sP}>
        Practical note: the receiving broker may import your cost basis automatically (Schwab and Fidelity are good at this), or it may show &ldquo;cost basis not provided&rdquo; (more common with employee-stock-plan accounts that ACATS to a different firm). If the latter, you must manually populate cost basis per lot in the new account using your pre-transfer snapshot. Do this in the first 30 days post-transfer.
      </p>

      <h3 style={sH3}>If you sold and remitted</h3>
      <p style={sP}>
        Three events now apply for tax purposes:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Capital gains in India</span> at STCG or LTCG rate per lot, depending on the holding period from vest date to sale date.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>The remittance itself is not taxable</span> — bringing your own post-tax money into India is not an income event. But large inward wires can trigger AML inquiries from your Indian bank; expect a source-of-funds questionnaire.
        </li>
        <li>
          <span style={sStrong}>Schedule FA still applies for the year of sale.</span> Even though you no longer hold the shares at year-end, you held them at some point during the calendar-year accounting period — so each sold lot still appears in Table A3 with sale proceeds populated.
        </li>
      </ol>
      <p style={sP}>
        The <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link> walks through how to populate sold-during-the-period lots line by line.
      </p>

      {/* ── Section 5 — Pitfalls ─────────────────────────────── */}
      <h2 style={sH2}>5. Five pitfalls that cost real money</h2>

      <p style={sP}>
        <span style={sStrong}>Pitfall 1 — Selling at the source broker without checking lot-level FIFO.</span> Most US brokers default to FIFO (first-in-first-out) when you place a sell order without specifying lots. This means your oldest lots get sold first — which is usually correct for LTCG eligibility, but disastrous if you intended to harvest losses from a recent lot or preserve a long-held position. Use the &ldquo;specific lot identification&rdquo; feature on every sale.
      </p>
      <p style={sP}>
        <span style={sStrong}>Pitfall 2 — Accepting the broker FX rate on a large remit.</span> A ₹1Cr remit at 90 bps spread = ₹90,000 of FX friction. Same remit through a 0-markup vendor at interbank = ₹0. Worth structuring a sale-and-rebuy at Interactive Brokers (or routing through Rovia&apos;s remittance) when the amounts get large.
      </p>
      <p style={sP}>
        <span style={sStrong}>Pitfall 3 — Selling in month 23.</span> Already covered in the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>. The two-month patience tax differential is severe — STCG at ~35.88% versus LTCG at ~14% all-in.
      </p>
      <p style={sP}>
        <span style={sStrong}>Pitfall 4 — Filing the wrong receiving account.</span> If you wire to an NRE account but you have been an Indian resident the whole time, the bank may reject or convert at penalty rate. Confirm with your bank: NRO for resident-period sales; NRE only if your residency status was non-resident for the entire period of accrual.
      </p>
      <p style={sP}>
        <span style={sStrong}>Pitfall 5 — Forgetting to declare in Schedule FA the year of transfer.</span> If you transferred in October, you still held those shares in the source broker between Jan 1 and Oct (in two different accounts during the year). Both accounts need disclosure in A2 for that accounting period; each lot moves between accounts but both account entries are required.
      </p>

      {/* ── Section 6 — How Rovia handles it ─────────────────── */}
      <h2 style={sH2}>6. What Rovia does</h2>
      <p style={sP}>
        The broker-transfer process for an Indian resident has three painful sub-problems: identifying which transfer mode (ACATS vs sell-remit) is correct given your holding-period and tax-bracket profile; preserving lot-level cost basis in INR through the move; and routing the FX leg without paying broker spread. Rovia automates each:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Transfer recommendation engine.</span> Given your lot inventory, holding-period clocks, and current FX/market state, the platform recommends per-lot sell-now / hold / ACATS-out actions.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Lot-history preservation.</span> Cost basis in INR is carried forward at original vest-day RBI TT rate, regardless of how many transfers a lot undergoes. Future Schedule FA and capital-gains computation continue uninterrupted.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Zero-markup FX leg.</span> Where Rovia handles the sale-and-remit, FX is routed through a 0-markup channel — interbank + wire fee only.
        </li>
        <li>
          <span style={sStrong}>Step-by-step broker scripts.</span> Per-broker (Schwab, Morgan Stanley, E*TRADE, Fidelity) flows with the exact forms, fields, and DTC numbers to fill in.
        </li>
      </ul>
      <div style={sCallout}>
        The per-broker walkthroughs live on the company pages:&nbsp;
        <Link href="/google" style={{ color: 'var(--gold)' }}>Google (Schwab)</Link>,&nbsp;
        <Link href="/meta" style={{ color: 'var(--gold)' }}>Meta (Morgan Stanley)</Link>,&nbsp;
        <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft (Morgan Stanley)</Link>,&nbsp;
        <Link href="/amazon" style={{ color: 'var(--gold)' }}>Amazon (E*TRADE)</Link>,&nbsp;
        <Link href="/apple" style={{ color: 'var(--gold)' }}>Apple (Schwab)</Link>,&nbsp;
        <Link href="/netflix" style={{ color: 'var(--gold)' }}>Netflix (Morgan Stanley)</Link>.
      </div>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <h2 style={sH2}>Frequently asked questions</h2>
      <div>
        {faq.map((item, i) => (
          <div key={i} style={{
            padding: '20px 0',
            borderBottom: i < faq.length - 1 ? `1px solid ${HAIR_LINE}` : 'none',
          }}>
            <p style={sFaqQ}>{item.q}</p>
            <p style={sFaqA}>{item.a}</p>
          </div>
        ))}
      </div>

      {/* ── Footer note ──────────────────────────────────────── */}
      <p style={{ ...sP, marginTop: '48px', fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Last reviewed June 1, 2026. Wire fees, FX spreads, and broker procedures change — verify on your broker&apos;s current site before initiating. This article is informational and not personalised tax or financial advice — your specific position should be reviewed by a qualified chartered accountant.
      </p>
    </>
  );
}
