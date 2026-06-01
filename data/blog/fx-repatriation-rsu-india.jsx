import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #5 — FX & Repatriation: Moving USD from RSUs to India
// ─────────────────────────────────────────────

export const meta = {
  slug: 'fx-repatriation-rsu-india',
  title: 'FX & Repatriation: Moving USD from RSUs to India (LRS, Costs, Options)',
  dek: 'The FX leg is a tax-in-disguise. On a ₹1Cr remit, 80 basis points of broker spread is ₹80,000 vanished into a rate you never saw. Here is the math, the channels, and how to route around it.',
  publishDate: '2026-06-04',
  updatedDate: '2026-06-04',
  author: 'Rovia Editorial',
  tags: ['fx', 'repatriation', 'lrs', 'rsu', 'pillar'],
  readingMinutes: 12,
  seoTitle: 'FX & Repatriation for US RSUs to India (2026): LRS, Costs, Channels',
  seoDescription:
    'How to repatriate USD from RSU sales to India: LRS is outward-only (inward has no cap), broker FX spreads compared (Schwab, MS, E*TRADE, Wise, IBKR), wire fees, AML scrutiny, and the rupee math on a ₹50L–₹1Cr remit.',
  seoKeywords:
    'lrs rsu, repatriate rsu india, fx spread schwab, wise india remit, interactive brokers india inward, inward remittance rsu, rsu sale fx cost, lrs vs inward remittance',
};

// ─── shared inline styles (kept local to file, matches codebase convention) ───
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
    q: 'Does the $250,000 LRS limit apply to my RSU sale proceeds coming to India?',
    a: 'No. LRS (Liberalised Remittance Scheme) is outward-only — it caps how much an Indian resident can send out of India in a financial year (currently $250,000). Money coming into India from a US brokerage sale is inward remittance, which has no LRS cap. This is the most common misconception we see. Inward wires above ~$10,000 may trigger a routine AML source-of-funds questionnaire from your Indian bank, but that is documentation, not a limit.',
  },
  {
    q: 'Is the remittance itself a taxable event in India?',
    a: 'No. Bringing your own post-tax USD into India in INR is not income. The taxable event is the underlying sale of the RSU (capital gains in India at STCG or LTCG rates) — covered in the RSU Taxation pillar. The wire is just the mechanical conveyance of after-tax money.',
  },
  {
    q: 'My broker shows a single USD-to-INR rate when I wire. How do I know what spread I am paying?',
    a: 'Compare the broker rate against the interbank mid (XE.com or Google "USD to INR" at the moment of wire). The difference in basis points is your spread. A broker showing ₹83.20 when the interbank mid is ₹83.78 is taking ~70 bps. On a $50,000 remit that is ~₹29,000 of friction that does not appear on any line item.',
  },
  {
    q: 'Can I just use Wise or Interactive Brokers for the FX leg?',
    a: 'You can route through Wise or IBKR by first transferring USD from your stock-plan broker to those platforms, then converting and remitting. Wise typically runs 30–50 bps over interbank on USD-INR with fast settlement; IBKR is around 20 bps but you need an IBKR account funded with USD. Both require an extra hop, so on small remits the friction of the hop can outweigh the spread savings. The break-even sits around $5,000–$10,000.',
  },
  {
    q: 'Do I need to declare the inward wire anywhere in my ITR?',
    a: 'The wire itself is not a separate line item, but everything downstream of it is. The capital gain from the underlying sale goes in Schedule CG. The sold RSU lot still appears in Schedule FA for the calendar year of sale with sale proceeds populated. The remitted USD landing in your Indian bank account becomes part of your bank balance, which is reportable in Schedule AL above ₹1Cr total assets.',
  },
  {
    q: 'My bank is asking for "purpose code" and source-of-funds documents on a $40,000 inward wire. Is that normal?',
    a: 'Completely normal. Inward wires above ~$10,000 routinely trigger AML and FEMA documentation requests — typically the broker statement showing the sale, your W-8BEN, and a purpose code (P0801 for personal remittance of income earned abroad, P0103 for remittance of salary or P1499 depending on classification). This is paperwork, not punishment. Provide the documents and the funds clear within 1–3 business days.',
  },
];

export function Body() {
  return (
    <>
      {/* ── Opening ──────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>The FX leg is a tax in disguise</h2>
      <p style={sP}>
        When you sell RSUs at Schwab, Morgan Stanley, E*TRADE, or Fidelity and wire the proceeds to your Indian bank account, two costs eat into the remit: a visible wire fee ($25–$35) that everyone sees, and an invisible FX spread (50–100 basis points) that almost no one notices. On large remittances, the invisible cost dominates by an order of magnitude.
      </p>
      <p style={sP}>
        A ₹1Cr remit at 80 bps of broker FX spread is <span style={sStrong}>₹80,000 of friction</span>. The same remit at the interbank rate is ₹0. There is no line item on your broker statement that says &ldquo;FX cost: ₹80,000&rdquo; — the spread is baked into the rate you accept when you submit the wire. It looks like exchange-rate noise. It is not. It is a structural tax.
      </p>
      <p style={sP}>
        Most engineers we work with had no idea this was happening until they ran the math themselves. This piece is the math: how much you are losing per remit, why, and the four operational paths to route around it. It is the technical companion to the&nbsp;
        <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>.
      </p>

      <div style={sCallout}>
        Two-sentence summary: <span style={sStrong}>LRS does not apply to inward remittance — your RSU proceeds coming into India face no statutory cap, only routine AML documentation above ~$10K.</span> The cost that matters is the FX spread your broker takes on the USD→INR conversion, and it is fully avoidable by choosing the right channel.
      </div>

      {/* ── Section 1 ─────────────────────────────────── */}
      <h2 style={sH2}>1. LRS, finally clarified</h2>
      <p style={sP}>
        The Liberalised Remittance Scheme (LRS), introduced by the RBI in 2004 and revised many times since, allows Indian residents to remit money <span style={sStrong}>out of India</span> for permitted purposes — investment, education, gifts, travel, medical treatment — up to <span style={sStrong}>$250,000 per financial year per individual</span>.
      </p>
      <p style={sP}>
        The word that almost everyone misses: <span style={sStrong}>outward</span>. LRS governs how much you can send <em>from India to abroad</em>. It does not govern how much you can bring <em>from abroad into India</em>.
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Direction</th>
            <th style={sTh}>What it is</th>
            <th style={sTh}>RBI cap</th>
            <th style={sTh}>Typical RSU scenario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>India → US (outward)</td>
            <td style={sTd}>LRS remittance</td>
            <td style={sTd}>$250,000 / FY / PAN</td>
            <td style={sTd}>Funding a US trading account, USD investments</td>
          </tr>
          <tr>
            <td style={sTd}>US → India (inward)</td>
            <td style={sTd}>Inward remittance under FEMA</td>
            <td style={sTd}><span style={sStrong}>No cap</span></td>
            <td style={sTd}>RSU sale proceeds, salary credits, gifts received</td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        So when your Schwab account sells 100 GOOGL at $230 = $23,000 and you wire that to HDFC Bank, you are not consuming any LRS quota. You can do this every month, every quarter, for the rest of your life, without ever bumping the $250K ceiling — because the ceiling is on the other direction entirely.
      </p>
      <p style={sP}>
        <span style={sStrong}>What does kick in on inward wires:</span> AML (anti-money-laundering) and FEMA (Foreign Exchange Management Act) source-of-funds checks. For wires above ~$10,000, your Indian bank will typically ask for:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '6px' }}>Broker statement showing the RSU sale (or salary credit, or whatever the source is)</li>
        <li style={{ marginBottom: '6px' }}>Copy of W-8BEN on file with the broker</li>
        <li style={{ marginBottom: '6px' }}>Purpose code — typically <span style={sStrong}>P0801</span> (personal remittance of income earned abroad), occasionally <span style={sStrong}>P0103</span> (salary) or <span style={sStrong}>P1499</span> (other private services) depending on classification</li>
        <li>FIRC (Foreign Inward Remittance Certificate) — issued by the bank after the wire clears; you should keep this with your tax records</li>
      </ul>
      <p style={sP}>
        This is documentation, not interrogation. The bank&apos;s compliance team needs the paperwork to log the wire correctly with the RBI&apos;s reporting system. Provide the documents and the funds clear in 1–3 business days. The lasting record — the FIRC — is what proves to the IT Department later that the wire was legitimate post-tax money, not unexplained income.
      </p>

      <div style={sWarning}>
        <span style={sStrong}>The misconception that costs people deals:</span> we have had engineers delay selling ₹80L of vested RSUs because they thought their $250K LRS limit was &ldquo;already used.&rdquo; It was not — they had been confusing inward and outward. The LRS clock only ticks when you send money from India to the US, not the other way around.
      </div>

      {/* ── Section 2 — The FX channels ───────────────── */}
      <h2 style={sH2}>2. The FX channels available, by realistic spread</h2>
      <p style={sP}>
        Once your RSUs are sold and the USD is sitting in your US brokerage account, you have five practical options to convert and move that money to India. They differ on three axes: FX spread (the big one), wire/transfer fee (small), and operational friction (medium).
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Channel</th>
            <th style={sTh}>FX spread vs interbank</th>
            <th style={sTh}>Wire / fee</th>
            <th style={sTh}>Operational notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Schwab direct wire</td>
            <td style={sTd}>~70–100 bps</td>
            <td style={sTd}>$25</td>
            <td style={sTd}>One-click in Schwab portal; FX vendor non-negotiable on standard accounts</td>
          </tr>
          <tr>
            <td style={sTd}>Morgan Stanley StockPlan</td>
            <td style={sTd}>~80–100 bps</td>
            <td style={sTd}>$35</td>
            <td style={sTd}>Wealth-tier clients can negotiate; default stock-plan accounts cannot</td>
          </tr>
          <tr>
            <td style={sTd}>E*TRADE direct wire</td>
            <td style={sTd}>~50–70 bps</td>
            <td style={sTd}>$25</td>
            <td style={sTd}>Among the tightest of the major employer brokers</td>
          </tr>
          <tr>
            <td style={sTd}>Fidelity direct wire</td>
            <td style={sTd}>~60–80 bps</td>
            <td style={sTd}>$0–$25</td>
            <td style={sTd}>Fee depends on account tier; first foreign wire often needs a paper form</td>
          </tr>
          <tr>
            <td style={sTd}>Wise (USD → INR)</td>
            <td style={sTd}>~30–50 bps</td>
            <td style={sTd}>~$5–$15 flat + small variable</td>
            <td style={sTd}>Requires sending USD from broker to Wise first (extra hop); 1–2 day settlement</td>
          </tr>
          <tr>
            <td style={sTd}>Interactive Brokers</td>
            <td style={sTd}>~20 bps + ~$2 commission</td>
            <td style={sTd}>$10 monthly inactivity (waived above $100K)</td>
            <td style={sTd}>Requires opening IBKR account; sell or ACATS-in shares first; then convert and wire</td>
          </tr>
          <tr>
            <td style={sTd}>Vested / INDmoney etc.</td>
            <td style={sTd}>Varies (often 30–70 bps)</td>
            <td style={sTd}>Varies</td>
            <td style={sTd}>India-side platforms; check the all-in rate, not the advertised one</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Rovia</span></td>
            <td style={sTd}><span style={sStrong}>0 bps (interbank)</span></td>
            <td style={sTd}>Wire fee only</td>
            <td style={sTd}>Smart-routed through institutional channels; lot history preserved</td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        The numbers above are typical ranges observed across recent customer remittances. They are not promises — broker FX spreads vary with market volatility, account tier, and remit size, and we have seen them widen during high-volatility days (e.g., FOMC announcement days, INR-stress days). On any single transaction, run the spread calculation yourself before initiating.
      </p>

      <h3 style={sH3}>How to actually measure your spread</h3>
      <p style={sP}>
        On the day you initiate the wire, note three numbers:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>The interbank USD/INR mid-rate at that moment (XE.com, Google, or Bloomberg)</li>
        <li style={{ marginBottom: '8px' }}>The rate your broker quoted when you confirmed the wire</li>
        <li>The amount in USD you remitted</li>
      </ol>
      <p style={sP}>
        Then: <span style={sStrong}>spread (bps) = (interbank − broker rate) ÷ interbank × 10,000</span>. Multiply spread × USD amount × interbank rate × 0.0001 for your INR cost. Do this once and you stop accepting bad rates by default.
      </p>

      {/* ── Section 3 — Worked example ────────────────── */}
      <h2 style={sH2}>3. The math — Priya&apos;s recurring remit</h2>
      <p style={sP}>
        Same Priya from the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link> and the <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link>: Senior Software Engineer at Google Bengaluru, GOOGL RSUs vesting quarterly through Schwab Equity Awards. She has decided to sell 100 GOOGL each quarter post-vest, once the lots cross 24 months from vest date and qualify for LTCG.
      </p>
      <p style={sP}>
        On her Q1 2026 sale: 100 GOOGL at $230 close = <span style={sStrong}>$23,000 gross proceeds</span>. Interbank USD/INR at the time of wire: ₹84.00. Hypothetical interbank-rate value of the remit: 100 × $230 × ₹84.00 = <span style={sStrong}>₹19,32,000</span>.
      </p>

      <h3 style={sH3}>Same remit, four channels</h3>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Channel</th>
            <th style={sTh}>FX rate received</th>
            <th style={sTh}>INR received (gross)</th>
            <th style={sTh}>Wire fee</th>
            <th style={sTh}>Net INR</th>
            <th style={sTh}>Friction vs interbank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Schwab @ 80 bps</td>
            <td style={sTd}>₹83.3280</td>
            <td style={sTd}>₹19,16,544</td>
            <td style={sTd}>₹2,100</td>
            <td style={sTd}>₹19,14,444</td>
            <td style={sTd}>₹17,556</td>
          </tr>
          <tr>
            <td style={sTd}>Wise @ 40 bps</td>
            <td style={sTd}>₹83.6640</td>
            <td style={sTd}>₹19,24,272</td>
            <td style={sTd}>₹1,000</td>
            <td style={sTd}>₹19,23,272</td>
            <td style={sTd}>₹8,728</td>
          </tr>
          <tr>
            <td style={sTd}>IBKR @ 20 bps</td>
            <td style={sTd}>₹83.8320</td>
            <td style={sTd}>₹19,28,136</td>
            <td style={sTd}>~₹500</td>
            <td style={sTd}>₹19,27,636</td>
            <td style={sTd}>₹4,364</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Rovia @ 0 bps</span></td>
            <td style={sTd}><span style={sStrong}>₹84.0000</span></td>
            <td style={sTd}><span style={sStrong}>₹19,32,000</span></td>
            <td style={sTd}>₹2,100</td>
            <td style={sTd}><span style={sStrong}>₹19,29,900</span></td>
            <td style={sTd}><span style={sStrong}>₹2,100</span></td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        On a single quarterly sale, the gap between Schwab&apos;s direct wire and a 0-markup channel is about <span style={sStrong}>₹15,456 of avoidable cost</span>. That is one number that disappears into nothing on a brokerage statement.
      </p>
      <p style={sP}>
        <span style={sStrong}>Now compound it.</span> Priya sells four times a year for five years — 20 remittances. The cumulative friction:
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Channel</th>
            <th style={sTh}>Per-remit cost</th>
            <th style={sTh}>20 remits over 5 years</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={sTd}>Schwab @ 80 bps</td><td style={sTd}>₹17,556</td><td style={sTd}><span style={sStrong}>₹3,51,120</span></td></tr>
          <tr><td style={sTd}>Wise @ 40 bps</td><td style={sTd}>₹8,728</td><td style={sTd}>₹1,74,560</td></tr>
          <tr><td style={sTd}>IBKR @ 20 bps</td><td style={sTd}>₹4,364</td><td style={sTd}>₹87,280</td></tr>
          <tr><td style={sTd}><span style={sStrong}>Rovia @ 0 bps</span></td><td style={sTd}>₹2,100</td><td style={sTd}><span style={sStrong}>₹42,000</span></td></tr>
        </tbody>
      </table>

      <p style={sP}>
        Over five years, Priya leaves <span style={sStrong}>₹3.1L on the table</span> by defaulting to her broker&apos;s FX. That is real money — equivalent to a Goa vacation, a year of premium term insurance, or about 1.5 grams of gold added to her portfolio every quarter. None of it shows up as a line item she could have refused.
      </p>

      <div style={sCallout}>
        Scale the same logic to a Staff engineer at Meta with $80K of vests selling annually: at 90 bps Morgan Stanley spread, that is ₹60K of friction per sale — ₹3L over five years on a single vest cohort. On a Director-level $300K vest at a 100 bps spread: ₹2.5L per remit. The bigger the remit, the more the spread dominates.
      </div>

      {/* ── Section 4 — Wire fees vs spread ───────────── */}
      <h2 style={sH2}>4. Wire fees versus spread — which dominates when</h2>
      <p style={sP}>
        On small remits, the flat wire fee is the bigger cost. On large remits, the FX spread crushes the fee. The crossover sits between $5,000 and $10,000.
      </p>

      <h3 style={sH3}>Wire fee landscape</h3>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Broker</th>
            <th style={sTh}>Outbound wire fee to India</th>
            <th style={sTh}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={sTd}>Schwab</td><td style={sTd}>$25</td><td style={sTd}>Same fee domestic or international</td></tr>
          <tr><td style={sTd}>Morgan Stanley StockPlan</td><td style={sTd}>$35</td><td style={sTd}>Higher than peers; sometimes waived for high-balance accounts</td></tr>
          <tr><td style={sTd}>E*TRADE</td><td style={sTd}>$25</td><td style={sTd}>—</td></tr>
          <tr><td style={sTd}>Fidelity</td><td style={sTd}>$0–$25</td><td style={sTd}>Free for Premium / Private Client tiers; first foreign wire often needs paper form</td></tr>
          <tr><td style={sTd}>Indian receiving bank</td><td style={sTd}>₹500–₹5,000</td><td style={sTd}>Varies by bank; HDFC/ICICI/Axis usually ₹500–₹1,500</td></tr>
        </tbody>
      </table>

      <h3 style={sH3}>Where the crossover lives</h3>
      <p style={sP}>
        Wire fee is fixed; FX spread cost is proportional. So:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>
          A <span style={sStrong}>$2,000 remit</span> at Schwab 80 bps spread: FX cost ~₹1,344, wire $25 (~₹2,100). <em>Fee dominates.</em>
        </li>
        <li style={{ marginBottom: '8px' }}>
          A <span style={sStrong}>$10,000 remit</span> at the same 80 bps: FX cost ~₹6,720, wire ₹2,100. <em>FX about 3× the fee.</em>
        </li>
        <li>
          A <span style={sStrong}>$50,000 remit</span> at the same spread: FX cost ~₹33,600, wire ₹2,100. <em>FX is 16× the fee.</em>
        </li>
      </ul>
      <p style={sP}>
        Practical consequence: <span style={sStrong}>do not split a large remit into many small ones</span> to &ldquo;manage&rdquo; FX. You will pay the wire fee N times and the same proportional spread. Consolidate into 1–2 large wires per quarter (or whenever you cross a 24-month LTCG threshold for a meaningful lot) instead.
      </p>

      {/* ── Section 5 — Timing strategies ─────────────── */}
      <h2 style={sH2}>5. Timing — what to actually optimize</h2>
      <p style={sP}>
        Engineers love to optimize. With RSU sales there are two timing variables — the share price and the FX rate — and they interact in ways that are easy to misread.
      </p>

      <h3 style={sH3}>The two-variable trap</h3>
      <p style={sP}>
        Your INR proceeds equal <em>shares × USD price × USD/INR rate</em>. A 2% rise in INR strength (rupee getting stronger, USD/INR falling) reduces your INR proceeds by ~2%, holding share price constant. A 2% rise in share price increases proceeds by ~2%, holding FX constant. The two move semi-independently.
      </p>
      <p style={sP}>
        Common mistakes:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Selling at INR weakness to maximize INR proceeds.</span> Sounds smart. But INR-weak periods often coincide with US dollar strength, which often coincides with US tech sell-offs. You may sell the same shares for fewer dollars at a better INR rate — net could be either direction.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Waiting for &ldquo;INR ₹86&rdquo; to convert.</span> The FX is the smaller variable for most US tech RSUs — share price moves of ±20% in a year dwarf FX moves of ±3–5%. Optimizing the smaller variable while the larger one drifts costs more than it saves.
        </li>
        <li>
          <span style={sStrong}>Selling at a market dip AND an INR-strong day.</span> The compounded cost is real. If GOOGL is down 5% and INR is up 2%, your INR proceeds are down ~7% on a position you would not have sold otherwise.
        </li>
      </ul>

      <h3 style={sH3}>The decisions that actually matter</h3>
      <p style={sP}>
        Rank-ordered by INR impact for a typical Indian-resident RSU holder:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>STCG vs LTCG (24-month clock).</span> ~21 percentage point tax differential. Single largest INR-mover. Covered in <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Diversification / concentration risk.</span> On a 50% market drawdown of a concentrated single-stock position, no amount of FX optimization recovers the loss.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>FX spread (0 vs 80 bps).</span> 80 bps on a ₹50L remit is ₹40,000 of avoidable cost per transaction. Compounding.
        </li>
        <li>
          <span style={sStrong}>FX rate timing.</span> Last in line. Try not to actively sell into both a market dip and an INR-strong week, but do not delay an otherwise-correct sell decision waiting for a 2% FX move.
        </li>
      </ol>

      {/* ── Section 6 — Tax & AML ─────────────────────── */}
      <h2 style={sH2}>6. Tax treatment of the wire itself</h2>
      <p style={sP}>
        Important: <span style={sStrong}>the inward remittance is not a taxable event.</span> Bringing your own post-tax USD into India in INR is not income. The taxable events are:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>
          The perquisite tax at vest (already paid via your Indian payroll TDS or sell-to-cover).
        </li>
        <li style={{ marginBottom: '8px' }}>
          The capital gain on the underlying sale (STCG or LTCG, computed in INR at the vest-day RBI TT rate as cost basis vs sale-day rate as proceeds).
        </li>
        <li>
          Any dividend that may have accrued (separate Form 67 question — covered briefly in <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>).
        </li>
      </ul>
      <p style={sP}>
        The wire is the mechanical conveyance after the taxable event has already occurred. The IT Department does not tax the same dollars twice — once as capital gain, once as inward remittance — but they do want to be able to reconcile the inward wire against a disclosed underlying sale. Keep the FIRC and the broker sale confirmation together.
      </p>

      <h3 style={sH3}>The AML conversation, demystified</h3>
      <p style={sP}>
        For inward wires above ~$10,000, your Indian bank will likely email or call within 24–48 hours asking for documentation. This is routine compliance triggered by RBI&apos;s reporting framework, not a flag on your account. The questionnaire typically asks:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '6px' }}>Source of funds (RSU sale at US employer broker)</li>
        <li style={{ marginBottom: '6px' }}>Relationship with the foreign remitter (the broker, on your behalf)</li>
        <li style={{ marginBottom: '6px' }}>Purpose code (P0801 for income earned abroad — RSU sale fits here)</li>
        <li>Supporting documents (broker statement, W-8BEN copy)</li>
      </ul>
      <p style={sP}>
        Respond promptly with the documents and the funds clear in 1–3 days. The bank then issues a <span style={sStrong}>FIRC (Foreign Inward Remittance Certificate)</span> — keep this. It is your defensible record that the inward wire was legitimate post-tax money, useful both during ITR filing and if a Section 148 notice ever queries the deposit.
      </p>

      {/* ── Section 7 — Schedule FA tie-in ────────────── */}
      <h2 style={sH2}>7. Schedule FA — sold-and-remitted lots still appear</h2>
      <p style={sP}>
        A common mental shortcut: <em>I sold my RSU, wired it to India, so the position is &ldquo;closed&rdquo; — nothing to disclose.</em> Wrong.
      </p>
      <p style={sP}>
        Schedule FA is a <span style={sStrong}>holding-during-the-period disclosure</span>, not a year-end snapshot. If you held the lot at any point between Jan 1 and Dec 31 of the relevant calendar year, it goes in Table A3 — even if you sold it on January 5 and wired the proceeds the same week. The row in A3 for that lot will show:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '6px' }}>Initial value: INR cost basis at vest-day RBI TT rate</li>
        <li style={{ marginBottom: '6px' }}>Peak value: peak INR value during the holding window (Jan 1 to sale date)</li>
        <li style={{ marginBottom: '6px' }}>Closing value: ₹0 (you no longer hold it on Dec 31)</li>
        <li>Gross sale proceeds: INR proceeds at sale-day rate</li>
      </ul>
      <p style={sP}>
        And the inward wire of the USD proceeds is reflected in your Indian bank balance — which feeds into Schedule AL if your total assets cross ₹1Cr. The remittance does not erase the underlying foreign-asset disclosure obligation. The <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link> covers the row-by-row mechanics.
      </p>

      {/* ── Section 8 — What Rovia does ───────────────── */}
      <h2 style={sH2}>8. What Rovia does about the FX leg</h2>
      <p style={sP}>
        The structural problem with broker FX is that the spread is built into the rate you accept; there is no &ldquo;decline FX, take wire only&rdquo; toggle in Schwab&apos;s portal. Rovia exists, in large part, to give Indian-resident RSU holders the option that should have existed by default.
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>0-markup FX channel.</span> Where Rovia handles the sale-and-remit, USD-to-INR conversion executes at the interbank mid-rate. You pay the wire fee, nothing else. No hidden spread.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Smart routing.</span> For each remit, the platform selects the cheapest end-to-end channel given the amount, urgency, and destination bank — institutional FX desks for large transactions, faster rails for small ones.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Lot-level cost basis preserved through repatriation.</span> Each sale is tagged back to its source vest lot at the vest-day RBI TT rate. INR cost basis carries through to your Schedule CG and Schedule FA outputs automatically — no manual reconciliation between broker statements and RBI&apos;s historical rates page.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>FIRC + tax-pack output.</span> After each remit, the platform aggregates the broker confirmation, the wire receipt, and the FIRC into a single bundle you can hand to your CA or upload to your ITR filing — including the purpose-code mapping for FEMA compliance.
        </li>
        <li>
          <span style={sStrong}>Spread visibility for non-Rovia channels.</span> Even when you wire directly from Schwab or Morgan Stanley, Rovia computes and shows what spread you actually paid versus interbank, so you can see the FX cost as a line item retroactively. Visibility alone changes behavior.
        </li>
      </ul>

      <div style={sCallout}>
        The broker-switch walkthroughs by company live at:&nbsp;
        <Link href="/google" style={{ color: 'var(--gold)' }}>Google (Schwab)</Link>,&nbsp;
        <Link href="/meta" style={{ color: 'var(--gold)' }}>Meta (Morgan Stanley)</Link>,&nbsp;
        <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft (Morgan Stanley)</Link>,&nbsp;
        <Link href="/amazon" style={{ color: 'var(--gold)' }}>Amazon (E*TRADE)</Link>,&nbsp;
        <Link href="/apple" style={{ color: 'var(--gold)' }}>Apple (Schwab)</Link>,&nbsp;
        <Link href="/netflix" style={{ color: 'var(--gold)' }}>Netflix (Morgan Stanley)</Link>.
      </div>

      {/* ── FAQ ───────────────────────────────────────── */}
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

      {/* ── Footer note ───────────────────────────────── */}
      <p style={{ ...sP, marginTop: '48px', fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Last reviewed June 1, 2026. FX spreads and wire fees change frequently — verify on your broker&apos;s current site before initiating any remittance. LRS limits and FEMA rules quoted reflect RBI guidance as applicable in mid-2026. This article is informational and not personalised tax or financial advice — your specific position should be reviewed by a qualified chartered accountant or FEMA-aware advisor.
      </p>
    </>
  );
}
