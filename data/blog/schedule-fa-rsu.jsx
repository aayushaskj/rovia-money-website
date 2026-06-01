import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #2 — Schedule FA Filing for US RSUs
// ─────────────────────────────────────────────

export const meta = {
  slug: 'schedule-fa-rsu',
  title: 'Schedule FA Filing for US RSUs: Step-by-Step (with Examples)',
  dek: 'The exact rows, the exact rupee figures, the exact dates — Schedule FA filling for Indian residents holding RSUs from US tech employers, walked through line by line.',
  publishDate: '2026-06-02',
  updatedDate: '2026-06-02',
  author: 'Rovia Editorial',
  tags: ['schedule fa', 'rsu', 'compliance', 'pillar'],
  readingMinutes: 13,
  seoTitle: 'Schedule FA Filing for US RSUs: Step-by-Step Guide (AY 2026-27)',
  seoDescription:
    'Schedule FA explained: Tables A1–G, calendar-year accounting period, peak value vs closing value, country codes, ZIP, FMV in INR — for Indian residents holding US RSUs.',
  seoKeywords:
    'schedule fa rsu, schedule fa filing, schedule fa a3, schedule fa peak value, schedule fa calendar year, foreign equity disclosure india, itr 2 schedule fa',
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

export const faq = [
  {
    q: 'I never sold anything. Do I still file Schedule FA?',
    a: 'Yes. Schedule FA is a holding disclosure, not an income disclosure. If you held any vested RSU shares at any point during the calendar-year accounting period (Jan 1 to Dec 31), you must report them — even if you never sold, never received a dividend, never moved a rupee.',
  },
  {
    q: 'I sold everything in December. Do I still file?',
    a: 'Yes. The filing requirement is based on whether you held the asset at any point during the accounting period, not on what you held at year-end. A position you held for one day in January and sold the same day must be disclosed.',
  },
  {
    q: 'My RSUs sit in Schwab. Do I file under Table A1 (Depository), A2 (Custodial), or A3 (Equity)?',
    a: 'For most US employers, the brokerage account is custodial — A2 covers the account itself, A3 covers each individual equity position inside it. Schwab Equity Awards, Morgan Stanley StockPlan, E*TRADE: all custodial. So you may end up filling both A2 (for the account) and A3 (for the underlying shares). Some accountants take a pragmatic view and only fill A3 for foreign equity; the strictly-correct read is to fill both.',
  },
  {
    q: 'What if I have 24 quarterly vest lots? Do I report 24 rows in A3?',
    a: 'Yes. Each "interest" — each acquisition of foreign equity — needs its own row. Twenty-four quarterly vests over six years means twenty-four rows in Table A3, each with its own acquisition date, initial value, peak value, and closing value. This is the part that takes Indian engineers 4–6 hours of manual reconciliation.',
  },
  {
    q: 'My RSUs vested in USD. How do I convert to INR for Schedule FA?',
    a: 'For acquisition value: USD price on vest day × RBI TT buying rate on vest day. For peak value: this is the hardest one — strictly, you compute INR value of your shareholding daily across Jan 1–Dec 31 (USD market price × RBI rate that day) and take the maximum. In practice many filers use month-end values and pick the peak month; this is defensible but imperfect. For closing value: USD price on Dec 31 × RBI rate on Dec 31.',
  },
  {
    q: 'What is the penalty if I miss Schedule FA?',
    a: '₹10 lakh per year of non-disclosure under Section 43 of the Black Money Act. Prosecution risk under Section 50. The penalty is per year, not per asset — so a five-year gap of non-filing carries ~₹50L of penalty exposure plus interest. The IT Department now receives end-of-year balances from US institutions via CRS, so non-filing is increasingly mechanically detectable.',
  },
];

export function Body() {
  return (
    <>
      {/* ── Opening ──────────────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>The disclosure, not the tax</h2>
      <p style={sP}>
        Schedule FA is the part of your Indian Income Tax Return where you disclose every foreign asset you hold — bank accounts, equity, debt, property, even foreign signing authority on someone else&apos;s account.
      </p>
      <p style={sP}>
        It is <span style={sStrong}>not a tax computation</span>. You do not pay Schedule FA tax. You disclose, and the IT Department reconciles your disclosure against the data they already receive from US financial institutions under the <span style={sStrong}>Common Reporting Standard (CRS)</span> — end-of-year balances at Schwab, Fidelity, Morgan Stanley, etc. all get fed to Indian tax authorities automatically. A mismatch between what you disclose and what they already know is the most common trigger for a Section 148 reassessment notice.
      </p>
      <p style={sP}>
        We covered <em>why</em> Schedule FA matters in the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>. This guide is the mechanical <em>how</em> — table by table, column by column, with worked rupee examples for one Bengaluru-based Google engineer carrying six years of vests.
      </p>

      <div style={sWarning}>
        <span style={sStrong}>Time-sensitive:</span> Schedule FA uses the <span style={sStrong}>calendar year</span> (Jan 1–Dec 31) as its accounting period, not the financial year. In your ITR for FY 2025-26 (filed by July 2026), you are reporting your foreign asset position between Jan 1, 2025 and Dec 31, 2025. The calendar-year quirk catches almost every first-time filer.
      </div>

      {/* ── Section 1 ─────────────────────────────────────────── */}
      <h2 style={sH2}>1. Where Schedule FA lives in your ITR</h2>
      <p style={sP}>
        Schedule FA appears in <span style={sStrong}>ITR-2 and ITR-3</span> — the forms used by salaried individuals with capital gains or business income. ITR-1 (Sahaj) does not contain Schedule FA, which means if you hold foreign assets, you cannot use ITR-1 even if your total income otherwise qualifies. Filing ITR-1 while holding foreign equity is itself a defective filing.
      </p>
      <p style={sP}>The schedule is divided into seven tables:</p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Table</th>
            <th style={sTh}>What it covers</th>
            <th style={sTh}>RSU relevance</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={sTd}>A1</td><td style={sTd}>Foreign Depository Account</td><td style={sTd}>Rare — typical RSU brokerage isn&apos;t a depository</td></tr>
          <tr><td style={sTd}>A2</td><td style={sTd}>Foreign Custodial Account</td><td style={sTd}><span style={sStrong}>Yes</span> — Schwab Equity Awards, Morgan Stanley StockPlan, E*TRADE, Fidelity are all custodial</td></tr>
          <tr><td style={sTd}>A3</td><td style={sTd}>Foreign Equity & Debt Interest</td><td style={sTd}><span style={sStrong}>Yes</span> — every RSU lot and ESPP purchase goes here</td></tr>
          <tr><td style={sTd}>A4</td><td style={sTd}>Foreign Cash Value Insurance Contract</td><td style={sTd}>Rare for RSU holders</td></tr>
          <tr><td style={sTd}>B</td><td style={sTd}>Financial Interest in any foreign entity</td><td style={sTd}>Only if you hold an LLC interest, partnership stake, etc.</td></tr>
          <tr><td style={sTd}>C</td><td style={sTd}>Immovable property outside India</td><td style={sTd}>Only if you bought US real estate</td></tr>
          <tr><td style={sTd}>D</td><td style={sTd}>Any other capital asset</td><td style={sTd}>Crypto held outside India, etc.</td></tr>
          <tr><td style={sTd}>E</td><td style={sTd}>Signing authority on foreign accounts</td><td style={sTd}>Rare — applies if you can sign on a parent&apos;s/relative&apos;s foreign account</td></tr>
          <tr><td style={sTd}>F</td><td style={sTd}>Trustee/Beneficiary of foreign trust</td><td style={sTd}>Rare</td></tr>
          <tr><td style={sTd}>G</td><td style={sTd}>Income from outside India not yet declared</td><td style={sTd}>Catch-all for missed income</td></tr>
        </tbody>
      </table>

      <p style={sP}>
        For a typical RSU holder at a US tech company, you will fill <span style={sStrong}>A2</span> (the brokerage account itself) and <span style={sStrong}>A3</span> (each equity position inside it). Everything else is usually blank.
      </p>

      {/* ── Section 2 ─────────────────────────────────────────── */}
      <h2 style={sH2}>2. Table A2 — your brokerage account</h2>
      <p style={sP}>
        Table A2 reports the <em>account</em> that holds your foreign equity, not the equity itself. Schwab Equity Awards, Morgan Stanley StockPlan, E*TRADE Stock Plans, Fidelity Stock Plan Services — all custodial accounts under SEC custody rules. One row per account.
      </p>

      <h3 style={sH3}>Columns in Table A2</h3>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Column</th>
            <th style={sTh}>What goes here (RSU case)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={sTd}>Country name & code</td><td style={sTd}>United States — <span style={sStrong}>2</span> (ISO numeric)</td></tr>
          <tr><td style={sTd}>Name of financial institution</td><td style={sTd}>e.g., &ldquo;Charles Schwab & Co., Inc.&rdquo; or &ldquo;Morgan Stanley Smith Barney LLC&rdquo;</td></tr>
          <tr><td style={sTd}>Address of institution</td><td style={sTd}>Registered address as it appears on your account statement</td></tr>
          <tr><td style={sTd}>ZIP code</td><td style={sTd}>5-digit US ZIP (e.g., 94104 for Schwab San Francisco)</td></tr>
          <tr><td style={sTd}>Account number</td><td style={sTd}>Your full brokerage account number</td></tr>
          <tr><td style={sTd}>Status</td><td style={sTd}>Owner (you are the beneficial owner)</td></tr>
          <tr><td style={sTd}>Date of opening account</td><td style={sTd}>Account-open date per your broker statement</td></tr>
          <tr><td style={sTd}>Peak balance during the period</td><td style={sTd}>Highest INR value of the account between Jan 1–Dec 31</td></tr>
          <tr><td style={sTd}>Closing balance</td><td style={sTd}>INR value as of Dec 31</td></tr>
          <tr><td style={sTd}>Gross interest paid/credited</td><td style={sTd}>Usually 0 for RSU brokerage accounts; non-zero only if cash sweep paid interest</td></tr>
        </tbody>
      </table>

      <p style={sP}>
        The peak balance is the trip-up. It is not your peak share <em>price</em> — it is the peak INR <em>account value</em>, which includes cash sweep and any uninvested proceeds from sales. If you sold a tranche in October and the cash sat in the account for two weeks before you remitted, that combined cash + remaining shares position can be your peak.
      </p>

      {/* ── Section 3 ─────────────────────────────────────────── */}
      <h2 style={sH2}>3. Table A3 — each RSU lot, individually</h2>
      <p style={sP}>
        This is where most engineers spend the most time, because <span style={sStrong}>each vest gets its own row.</span> Twenty-four quarterly vests over six years = twenty-four rows. ESPP semi-annual purchases over the same period = another twelve rows. It adds up fast.
      </p>

      <h3 style={sH3}>Columns in Table A3</h3>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Column</th>
            <th style={sTh}>What goes here</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={sTd}>Country name & code</td><td style={sTd}>United States — 2</td></tr>
          <tr><td style={sTd}>Name of entity</td><td style={sTd}>Issuer&apos;s legal name (e.g., &ldquo;Alphabet Inc.&rdquo;, &ldquo;Meta Platforms, Inc.&rdquo;)</td></tr>
          <tr><td style={sTd}>Address & ZIP of entity</td><td style={sTd}>Registered office. Alphabet: 1600 Amphitheatre Pkwy, Mountain View, CA 94043</td></tr>
          <tr><td style={sTd}>Nature of entity</td><td style={sTd}>&ldquo;Public listed company&rdquo;</td></tr>
          <tr><td style={sTd}>Date of acquiring the interest</td><td style={sTd}><span style={sStrong}>Vest date</span> for RSUs (not grant date). Purchase date for ESPP.</td></tr>
          <tr><td style={sTd}>Initial value of investment</td><td style={sTd}>INR cost basis: USD vest price × RBI TT rate on vest day × shares</td></tr>
          <tr><td style={sTd}>Peak value during the period</td><td style={sTd}>Maximum INR value of that lot between Jan 1–Dec 31</td></tr>
          <tr><td style={sTd}>Closing value</td><td style={sTd}>INR value on Dec 31</td></tr>
          <tr><td style={sTd}>Total gross amount paid/credited</td><td style={sTd}>Dividends received in INR during the period (0 for non-dividend stocks)</td></tr>
          <tr><td style={sTd}>Total gross proceeds from sale</td><td style={sTd}>INR proceeds from any sales of that lot during the period</td></tr>
        </tbody>
      </table>

      {/* ── Section 4 — Worked example ────────────────────────── */}
      <h2 style={sH2}>4. Worked example — Priya&apos;s Schedule FA for AY 2026-27</h2>
      <p style={sP}>
        Same Priya from the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>: Senior Software Engineer at Google Bengaluru, ₹85L base, 1,000 GOOGL granted in 2022 vesting quarterly over four years.
      </p>
      <p style={sP}>
        For her ITR for FY 2025-26 (filed July 2026), her Schedule FA accounting period is <span style={sStrong}>Jan 1, 2025 – Dec 31, 2025</span>. As of Dec 31, 2025 she held GOOGL from sixteen quarterly vests, having sold three small lots earlier in the year.
      </p>

      <h3 style={sH3}>Step 1 — Inventory the lots</h3>
      <p style={sP}>
        Pull the broker&apos;s end-of-year statement (Schwab Equity Awards Year-End Tax Information). For each lot held at any point during Jan 1–Dec 31, 2025:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '6px' }}>Vest date</li>
        <li style={{ marginBottom: '6px' }}>Number of shares</li>
        <li style={{ marginBottom: '6px' }}>USD price on vest day (closing price)</li>
        <li style={{ marginBottom: '6px' }}>RBI TT buying rate on vest day</li>
        <li>Whether the lot was sold during 2025 (and the sale price/date if so)</li>
      </ul>

      <h3 style={sH3}>Step 2 — Compute INR values per lot</h3>
      <p style={sP}>For each lot, four numbers:</p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Initial value</span> = shares × USD vest price × RBI TT rate on vest day</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Peak value</span> = highest (USD market price × RBI rate) × shares over Jan 1–Dec 31. Strictly, this is computed daily and the maximum is taken. Pragmatically: month-end values are often used as a defensible approximation.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Closing value</span> = shares × USD price on Dec 31, 2025 × RBI rate on Dec 31, 2025. (If the lot was sold before Dec 31, closing value is 0.)</li>
        <li><span style={sStrong}>Sale proceeds</span> = if sold during 2025, INR proceeds at sale-day rate</li>
      </ol>

      <h3 style={sH3}>Step 3 — One row in A3 per lot</h3>
      <p style={sP}>
        Below is what three of Priya&apos;s sixteen GOOGL lots look like — abridged from a real Schedule FA submission (USD figures rounded for clarity):
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ ...sTable, fontSize: '13px', minWidth: '760px' }}>
          <thead>
            <tr>
              <th style={sTh}>Vest date</th>
              <th style={sTh}>Shares</th>
              <th style={sTh}>Initial value (₹)</th>
              <th style={sTh}>Peak value (₹)</th>
              <th style={sTh}>Closing value (₹)</th>
              <th style={sTh}>Sale proceeds (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={sTd}>2022-11-25</td>
              <td style={sTd}>62</td>
              <td style={sTd}>5,82,420</td>
              <td style={sTd}>12,18,950</td>
              <td style={sTd}>11,87,460</td>
              <td style={sTd}>0</td>
            </tr>
            <tr>
              <td style={sTd}>2024-02-25</td>
              <td style={sTd}>62</td>
              <td style={sTd}>7,84,266</td>
              <td style={sTd}>12,18,950</td>
              <td style={sTd}>11,87,460</td>
              <td style={sTd}>0</td>
            </tr>
            <tr>
              <td style={sTd}>2025-05-25</td>
              <td style={sTd}>62</td>
              <td style={sTd}>9,68,114</td>
              <td style={sTd}>12,18,950</td>
              <td style={sTd}>11,87,460</td>
              <td style={sTd}>0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={sP}>
        Notice the peak and closing values are the same across all three rows — that is because peak and closing apply to the <em>position of that lot on those dates</em>, which depends only on the share count and the market price. The initial value differs across rows because the cost basis was locked at the vest day&apos;s INR rate.
      </p>
      <p style={sP}>
        Priya&apos;s full Schedule FA submission for AY 2026-27 contains <span style={sStrong}>sixteen rows in A3</span> (one per held lot), one row in A2 (her Schwab account), and nothing else. Total time, computed manually with the broker statement and RBI&apos;s historical TT rates page: ~5 hours her first year, ~3 hours each year after as her template stabilized.
      </p>

      <div style={sCallout}>
        This is what Rovia automates. The platform parses broker statements, applies the correct RBI TT rate per vest date, computes per-lot peak and closing values, and outputs Schedule FA-ready rows in the exact ITR-2/3 column format. The 5-hour July ritual becomes a 5-minute review.
      </div>

      {/* ── Section 5 — Common mistakes ───────────────────────── */}
      <h2 style={sH2}>5. Six mistakes that get filings flagged</h2>

      <p style={sP}>
        <span style={sStrong}>Mistake 1 — Using financial year instead of calendar year.</span> Filers populate A3 with assets held between April 1 and March 31. Wrong. Schedule FA uses Jan 1–Dec 31. Acquisition dates are calendar-real, but the &ldquo;during the accounting period&rdquo; window is calendar-year.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 2 — Reporting only Dec 31 holdings.</span> If you held a position from January 1 to October 1 and then sold, you must still report that lot — with peak value during your holding period and sale proceeds. Many filers omit sold-during-the-year lots; this is non-disclosure.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 3 — Using broker&apos;s USD figures directly.</span> Schedule FA requires INR. Filers paste USD amounts thinking the IT Department will figure it out — they will not, and the recomputation defaults to the broker&apos;s spot rate, which is rarely the RBI TT rate.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 4 — One row for all RSUs of one ticker.</span> A common shortcut: aggregating all 24 GOOGL vests into a single A3 row with summed values. This is technically a defective filing — each &ldquo;interest&rdquo; (each acquisition event) requires its own row. The aggregation makes peak/closing math impossible to audit.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 5 — Forgetting Table A2.</span> Filers fill A3 (equity) but skip A2 (the account). Strictly, the custodial account itself is a disclosable interest separate from the underlying equity. Conservative practice fills both.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 6 — Treating sold lots as &ldquo;gone.&rdquo;</span> If a lot was sold during 2025, you still report it in Schedule FA for AY 2026-27 — with sale proceeds populated. Schedule FA is about <em>any holding during the period</em>, not just year-end holdings.
      </p>

      {/* ── Section 6 — Penalty stack reminder ────────────────── */}
      <h2 style={sH2}>6. What missing Schedule FA actually costs</h2>
      <p style={sP}>
        The <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link> covered the penalty stack briefly. The full picture, specifically for Schedule FA non-disclosure under the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Section 43:</span> ₹10 lakh per year of non-disclosure. A five-year history of non-filing = ₹50L of accrued penalty exposure.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Section 41:</span> If undisclosed foreign income is traced (e.g., RSU vest perquisite not declared), 30% tax + 90% penalty + 30% interest from the year of accrual.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Section 50:</span> Willful failure to furnish required information about foreign assets — imprisonment from 6 months to 7 years, plus fine.</li>
        <li><span style={sStrong}>Reassessment without time limit:</span> Section 149(1)(c) of the Income Tax Act allows reopening of assessment up to 10 years for undisclosed foreign assets, versus the normal 4-year limit.</li>
      </ul>
      <p style={sP}>
        In practice, the IT Department now receives end-of-year balances at US financial institutions via the Common Reporting Standard. As of FY 2023-24, AIS (Annual Information Statement) shows pre-populated foreign asset data for many filers. The argument &ldquo;they will not find out&rdquo; is no longer operational.
      </p>

      {/* ── Section 7 — How Rovia handles it ─────────────────── */}
      <h2 style={sH2}>7. What Rovia does</h2>
      <p style={sP}>
        For most engineers, Schedule FA is a five-hour July ritual: rebuild a spreadsheet of every vest, look up the RBI rate on each vest day from the historical reference page, compute initial values, look up market closes and FX rates for peak and closing computation, transcribe into the ITR-2 form.
      </p>
      <p style={sP}>Rovia removes the spreadsheet:</p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Broker statement ingestion.</span> Schwab Equity Awards, Morgan Stanley StockPlan, E*TRADE, Fidelity — directly. Each lot is identified by vest date and share count.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>RBI TT rate per date.</span> The full RBI historical reference rate database is applied automatically. No copy-paste from rbi.org.in.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Per-lot peak computation.</span> Daily closing prices for each held position over Jan 1–Dec 31 are valued in INR using the daily TT rate, and the per-lot maximum is computed. Defensible to audit.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Output: ITR-2 Schedule FA in the exact column format.</span> Tables A2 and A3 pre-filled. Copy-paste into the ITR portal or hand to your CA.</li>
        <li><span style={sStrong}>Multi-year history.</span> If you have never filed Schedule FA, the platform can reconstruct prior-year disclosures so you can do a compounded-disclosure under Section 139(8A) updated-return route — the cleaner path than waiting for a notice.</li>
      </ul>

      <div style={sCallout}>
        The broker-switch pages on rovia.money walk through the mechanical migration company by company:&nbsp;
        <Link href="/google" style={{ color: 'var(--gold)' }}>Google</Link>,&nbsp;
        <Link href="/meta" style={{ color: 'var(--gold)' }}>Meta</Link>,&nbsp;
        <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link>,&nbsp;
        <Link href="/amazon" style={{ color: 'var(--gold)' }}>Amazon</Link>,&nbsp;
        <Link href="/apple" style={{ color: 'var(--gold)' }}>Apple</Link>,&nbsp;
        <Link href="/netflix" style={{ color: 'var(--gold)' }}>Netflix</Link>.
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

      {/* ── Footer note ───────────────────────────────────────── */}
      <p style={{ ...sP, marginTop: '48px', fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Last reviewed June 1, 2026. Rules quoted reflect ITR-2/3 Schedule FA structure for AY 2026-27 and the Black Money Act, 2015. This article is informational and not personalised tax advice — your specific position should be reviewed by a qualified chartered accountant.
      </p>
    </>
  );
}
