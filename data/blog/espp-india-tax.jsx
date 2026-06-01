import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #6 — ESPP for Indian Employees
// ─────────────────────────────────────────────

export const meta = {
  slug: 'espp-india-tax',
  title: 'ESPP for Indian Employees: The Discount, the Tax Trap, and the Math',
  dek: 'The 15% discount is a perquisite at purchase, India ignores US qualified-disposition rules, and the 24-month LTCG clock runs from purchase day — the entire ESPP tax stack for Microsoft, Apple, Cisco, and Intel employees in India.',
  publishDate: '2026-06-04',
  updatedDate: '2026-06-04',
  author: 'Rovia Editorial',
  tags: ['espp', 'tax', 'india', 'pillar'],
  readingMinutes: 12,
  seoTitle: 'ESPP Tax in India 2026: The Complete Guide for Microsoft, Apple, Cisco, Intel Employees',
  seoDescription:
    'How ESPP is taxed in India: 15% discount as perquisite at purchase, 24-month LTCG clock from purchase date at 12.5% flat, why India ignores US qualified vs disqualified disposition rules. With INR worked examples.',
  seoKeywords:
    'espp india tax, espp tax india, microsoft espp india, apple espp india, cisco espp india, espp perquisite tax, espp ltcg india, espp purchase date, espp qualified disposition india',
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
    q: 'Do Google, Meta, Amazon, and Netflix have ESPPs?',
    a: 'No. None of the four offer an Employee Stock Purchase Plan as of 2026. Their employee equity comp is RSU-only. ESPP among the FAANG-adjacent universe is concentrated at Microsoft, Apple, Cisco, Intel, Adobe, Salesforce, Qualcomm, Oracle, and most of the older US tech employers. If you joined Meta or Amazon expecting an ESPP, you do not have one.',
  },
  {
    q: 'Does India honor the US qualified vs disqualified disposition distinction?',
    a: 'No. The US tax code gives preferential treatment when ESPP shares are held more than 2 years from offering start and 1 year from purchase (qualified disposition); selling earlier creates ordinary-income treatment on the discount in the US. India ignores this entirely. India treats the discount as perquisite at purchase, full stop — regardless of how long you eventually hold. The only Indian holding-period question is 24 months from purchase date for LTCG vs STCG classification.',
  },
  {
    q: 'When does the 24-month LTCG clock start for ESPP — at offering, at purchase, or at vest?',
    a: 'At the purchase date. The day the company actually used your accumulated payroll deductions to buy shares for you. The offering-period start date is irrelevant for Indian holding-period purposes — it determines the lookback price for the discount, nothing else. There is no vest event in ESPP; purchase is the acquisition.',
  },
  {
    q: 'My US W-2 shows the ESPP discount as ordinary income. Do I also pay India tax on it?',
    a: 'Yes, if you were an Indian tax resident on the purchase date. The discount is perquisite income in India under Section 17(2)(vi). If you were also a US tax resident in the same year (e.g., you moved back mid-year), the same income may be taxed in both — Foreign Tax Credit via Form 67 prevents double taxation. If you were purely an Indian resident on purchase day, the US W-2 box for ESPP discount is informational only and your Indian filing is the substantive one.',
  },
  {
    q: 'My employer deducted TDS on the ESPP discount through Indian payroll. Do I still need to do anything?',
    a: 'Yes — verify the numbers. Indian payroll TDS on ESPP perquisite often uses the broker FX rate or a monthly average rather than the RBI TT buying rate on the purchase day. Recompute the perquisite at the correct RBI rate, compare against your Form 16 employer figure, and either claim refund (over-deducted) or pay top-up tax with self-assessment (under-deducted) before March 31 to avoid Section 234B/C interest.',
  },
  {
    q: 'I sold my ESPP shares the same day I bought them. What do I owe in India?',
    a: 'Two things. First, the discount is perquisite income at purchase — taxed at slab even if you sell immediately. Second, the gain or loss between purchase-day FMV and sale price is STCG (held under 24 months by definition) — taxed at slab. If sale price equals purchase-day FMV, the STCG is zero and only the perquisite tax applies. If sale price is higher (intraday move), the extra is STCG. Same-day sale is the simplest ESPP path tax-wise; the trade-off is you forfeit any further upside and reset your 24-month LTCG clock to never.',
  },
];

export function Body() {
  return (
    <>
      {/* ── TL;DR ──────────────────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>The 30-second version</h2>
      <p style={sP}>
        Employee Stock Purchase Plans (ESPPs) are a second equity-comp vehicle that sits alongside RSUs at a specific set of US tech employers — <span style={sStrong}>Microsoft, Apple, Cisco, Intel, Adobe, Salesforce, Qualcomm, Oracle</span>. Google, Meta, Amazon, and Netflix do not offer ESPPs. If you are at one of the ESPP-offering companies, you have a third tax event to track on top of the two from RSUs.
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Stage</th>
            <th style={sTh}>When it happens</th>
            <th style={sTh}>What you pay tax on</th>
            <th style={sTh}>Indian tax rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>1 — Perquisite</td>
            <td style={sTd}>At purchase</td>
            <td style={sTd}>Discount (FMV − purchase price) in INR</td>
            <td style={sTd}>Slab rate (up to ~39% all-in)</td>
          </tr>
          <tr>
            <td style={sTd}>2a — STCG</td>
            <td style={sTd}>Selling within 24 months of purchase</td>
            <td style={sTd}>Gain over purchase-day FMV cost basis</td>
            <td style={sTd}>Slab rate (up to ~39%)</td>
          </tr>
          <tr>
            <td style={sTd}>2b — LTCG</td>
            <td style={sTd}>Selling after 24 months of purchase</td>
            <td style={sTd}>Gain over purchase-day FMV cost basis</td>
            <td style={sTd}><span style={sStrong}>12.5% flat, no indexation</span></td>
          </tr>
          <tr>
            <td style={sTd}>Annual disclosure</td>
            <td style={sTd}>Every ITR filing</td>
            <td style={sTd}>Each ESPP lot as foreign equity</td>
            <td style={sTd}>Schedule FA — no minimum threshold</td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        The structure looks identical to RSUs, but four things differ in important ways: <span style={sStrong}>(a)</span> the perquisite event is purchase, not vest — there is no vest in ESPP; <span style={sStrong}>(b)</span> the discount, not the full FMV, is the perquisite; <span style={sStrong}>(c)</span> the cost basis for LTCG is the full purchase-day FMV, not what you paid; and <span style={sStrong}>(d)</span> the US qualified-disposition rules that drive most American ESPP advice are <em>irrelevant in India</em>.
      </p>

      <div style={sCallout}>
        If you take only one thing away: <span style={sStrong}>India does not care about the US 1-year-from-purchase / 2-year-from-offering rule.</span> Stop reading American ESPP advice. The only Indian holding-period question is 24 months from the purchase date — the same 24-month clock that governs your RSUs.
      </div>

      {/* ── Section 1 ─────────────────────────────────────────── */}
      <h2 style={sH2}>1. ESPP mechanics — what you are actually buying</h2>
      <p style={sP}>
        An ESPP lets you contribute up to a payroll-deduction limit during an <em>offering period</em>, and on the <em>purchase date</em> at the end of the period, the company uses your accumulated contributions to buy company stock for you at a discount. Two parameters define how generous the plan is: the discount percentage, and whether there is a lookback.
      </p>
      <p style={sP}>
        <span style={sStrong}>Discount.</span> Most US ESPPs offer 15% off — that is the maximum allowed by IRS Section 423 for a tax-qualified plan. Some employers (notably Microsoft) offer only 10%. A handful go higher than 15% but lose qualified status under US rules.
      </p>
      <p style={sP}>
        <span style={sStrong}>Lookback.</span> A &ldquo;lookback&rdquo; provision means the discount applies to the lower of (a) the price on the offering-period start date or (b) the price on the purchase date. Without lookback, the discount applies only to the purchase-day price. Lookback is enormously valuable in a rising market — your 15% discount can effectively become a 30–40% discount if the stock has run during the offering period.
      </p>
      <p style={sP}>
        <span style={sStrong}>Offering-period length.</span> 6 months is the most common (Apple, Cisco, Adobe). Microsoft is unusual at 3 months. Some plans run 12 or 24 months with multiple purchase dates within the offering. Longer offerings give the lookback more time to work in your favor.
      </p>
      <p style={sP}>
        <span style={sStrong}>Contribution limit.</span> The IRS caps qualified-ESPP purchases at $25,000 of FMV per calendar year, valued at offering-start price. Most employees use the maximum.
      </p>

      <h3 style={sH3}>How the major plans actually differ</h3>
      <p style={sP}>
        The headline structures at the major ESPP-offering employers, as of 2026:
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Employer</th>
            <th style={sTh}>Discount</th>
            <th style={sTh}>Offering length</th>
            <th style={sTh}>Lookback</th>
            <th style={sTh}>Broker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}><Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link></td>
            <td style={sTd}>10%</td>
            <td style={sTd}>3 months (quarterly)</td>
            <td style={sTd}>No</td>
            <td style={sTd}>Fidelity / Morgan Stanley</td>
          </tr>
          <tr>
            <td style={sTd}><Link href="/apple" style={{ color: 'var(--gold)' }}>Apple</Link></td>
            <td style={sTd}>15%</td>
            <td style={sTd}>6 months</td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>E*TRADE</td>
          </tr>
          <tr>
            <td style={sTd}>Cisco</td>
            <td style={sTd}>15%</td>
            <td style={sTd}>6 months (within 24-month offering)</td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>E*TRADE</td>
          </tr>
          <tr>
            <td style={sTd}>Intel</td>
            <td style={sTd}>15%</td>
            <td style={sTd}>6 months</td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>Fidelity</td>
          </tr>
          <tr>
            <td style={sTd}>Adobe</td>
            <td style={sTd}>15%</td>
            <td style={sTd}>6 months</td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>E*TRADE</td>
          </tr>
          <tr>
            <td style={sTd}>Salesforce</td>
            <td style={sTd}>15%</td>
            <td style={sTd}>6 months</td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>E*TRADE</td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        Microsoft is the outlier: smaller discount, shorter offering, no lookback. The trade-off is purchase-price certainty — Microsoft employees know within a 3-month window exactly what they will pay. Apple, Cisco, Intel, Adobe, and Salesforce all offer the generous 15%-with-lookback structure, where the lookback is frequently the single most valuable comp lever for an engineer.
      </p>

      {/* ── Section 2 ─────────────────────────────────────────── */}
      <h2 style={sH2}>2. Stage 1 — Perquisite tax at purchase</h2>
      <p style={sP}>
        On the purchase day, the difference between the purchase-day FMV and what you actually paid is <span style={sStrong}>perquisite income</span> in India — same Section 17(2)(vi) treatment as the RSU vest perquisite covered in the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>. It gets added to your salary income for the financial year and taxed at your slab rate.
      </p>

      <h3 style={sH3}>The perquisite is the discount, not the FMV</h3>
      <p style={sP}>
        This is the first place engineers get the mechanics wrong. The RSU perquisite is the full FMV at vest, because you paid nothing for the share. The ESPP perquisite is only the <em>discount</em> — because you did pay something for it.
      </p>
      <div style={sCallout}>
        <span style={sStrong}>ESPP perquisite value = Shares × (Purchase-day FMV − Purchase price) × RBI TT buying rate on purchase day</span>
      </div>
      <p style={sP}>
        The purchase price is what the broker actually charged your contributions — for a 15%-discount-with-lookback plan, it is 85% of the lower of the offering-start price or the purchase-day price. The FMV is the purchase-day closing price. The conversion rate is the RBI TT buying rate on the purchase day, not your broker&apos;s rate.
      </p>

      <h3 style={sH3}>The 24-month LTCG clock starts at purchase</h3>
      <p style={sP}>
        Unlike RSUs (where the clock starts at vest), the ESPP clock starts at the purchase date. There is no &ldquo;ESPP vest&rdquo; — the offering period is just an accumulation window for payroll deductions; the acquisition event is the purchase. From the purchase date, you count 24 months for LTCG eligibility. Sell before that and the gain over FMV is STCG at slab. Sell after and it is LTCG at 12.5% flat under Finance Act 2024.
      </p>

      <div style={sWarning}>
        <span style={sStrong}>The offering-period start date is irrelevant for Indian holding-period purposes.</span> US ESPP advice spends pages on the offering-start date because the US qualified-disposition test counts 2 years from there. India ignores this. The only date that matters for your Indian LTCG clock is the purchase date — the day shares hit your brokerage account.
      </div>

      {/* ── Section 3 ─────────────────────────────────────────── */}
      <h2 style={sH2}>3. Why India ignores US qualified vs disqualified rules</h2>
      <p style={sP}>
        In the US, ESPP shares can be sold under one of two regimes:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Qualifying disposition.</span> Held more than 2 years from offering-period start AND more than 1 year from purchase. Tax treatment: the lesser of (a) actual discount or (b) sale-price minus purchase-price is ordinary income; the remaining gain is long-term capital gain at preferential US rates.
        </li>
        <li>
          <span style={sStrong}>Disqualifying disposition.</span> Sold earlier. Tax treatment: the entire FMV-minus-purchase-price spread at purchase becomes ordinary income (which is what gets W-2 reported); the rest of the gain is short or long-term capital gain depending on holding from purchase.
        </li>
      </ul>
      <p style={sP}>
        Indian tax law has no such bifurcation. India does not look at &ldquo;qualifying&rdquo; or &ldquo;disqualifying&rdquo; — these are creatures of US Internal Revenue Code Section 423. India&apos;s position is simpler and harsher:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>The discount is perquisite at purchase</span> regardless of whether you ever sell, and regardless of how long you eventually hold.
        </li>
        <li>
          <span style={sStrong}>The gain above purchase-day FMV is a capital gain</span> classified STCG or LTCG based on the 24-month clock from purchase date.
        </li>
      </ol>
      <p style={sP}>
        Most American ESPP guides spend their column inches on the qualified vs disqualified distinction. For an Indian resident on the purchase date, none of that matters. The qualifying disposition only changes your <em>US</em> tax — and if you were never a US tax resident in that year, your US tax position is zero anyway under the India-US DTAA. The W-2 box for ESPP discount is a US informational artifact; your Indian filing is the substantive one.
      </p>

      {/* ── Section 4 — Worked example ────────────────────────── */}
      <h2 style={sH2}>4. Worked example — Vikram&apos;s Microsoft ESPP cycle</h2>
      <p style={sP}>
        Meet Vikram, a Senior Software Engineer at Microsoft India in Hyderabad, ₹78L base, in the highest slab bracket with 15% surcharge. He enrolled in Microsoft&apos;s ESPP at the maximum 10% (Microsoft caps payroll-deduction percentage at 15%, but the qualified-plan IRS limit of $25,000 of FMV per year typically binds first). Microsoft has <span style={sStrong}>10% discount, 3-month offerings, no lookback</span>.
      </p>
      <p style={sP}>
        Across one calendar year, Vikram has four 3-month offerings. We will walk through Q3 in detail.
      </p>

      <h3 style={sH3}>Step 1 — The purchase</h3>
      <p style={sP}>
        Microsoft&apos;s Q3 2025 offering ran July 1 to September 30. MSFT closed at $420 on July 1 (offering start, irrelevant in a no-lookback plan), $450 on September 30 (purchase day). Vikram contributed ~$6,250 (a quarter of the $25K annual cap). The purchase price was 90% of the purchase-day price = $405. Number of shares purchased: $6,250 / $405 ≈ <span style={sStrong}>15 shares</span>.
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Line</th>
            <th style={sTh}>Calculation</th>
            <th style={sTh}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Contributions</td>
            <td style={sTd}>Q3 payroll deductions</td>
            <td style={sTd}>$6,250.00</td>
          </tr>
          <tr>
            <td style={sTd}>Purchase price per share</td>
            <td style={sTd}>$450 × 90%</td>
            <td style={sTd}>$405.00</td>
          </tr>
          <tr>
            <td style={sTd}>Shares purchased</td>
            <td style={sTd}>$6,250 / $405</td>
            <td style={sTd}>15 shares (fractional rounded down)</td>
          </tr>
          <tr>
            <td style={sTd}>Purchase-day FMV</td>
            <td style={sTd}>15 × $450</td>
            <td style={sTd}>$6,750.00</td>
          </tr>
          <tr>
            <td style={sTd}>Amount actually paid</td>
            <td style={sTd}>15 × $405</td>
            <td style={sTd}>$6,075.00</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>USD discount (perquisite)</span></td>
            <td style={sTd}>$6,750 − $6,075</td>
            <td style={sTd}><span style={sStrong}>$675.00</span></td>
          </tr>
        </tbody>
      </table>

      <h3 style={sH3}>Step 2 — INR perquisite at the RBI TT rate</h3>
      <p style={sP}>
        Assume the RBI TT buying rate on Sep 30, 2025 (the purchase date) was ₹84.00. Convert the discount to INR using <em>that</em> rate — not the offering-start rate, not the broker&apos;s spot.
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Line</th>
            <th style={sTh}>Calculation</th>
            <th style={sTh}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>USD discount</td>
            <td style={sTd}>—</td>
            <td style={sTd}>$675.00</td>
          </tr>
          <tr>
            <td style={sTd}>RBI TT rate, Sep 30, 2025</td>
            <td style={sTd}>—</td>
            <td style={sTd}>₹84.00</td>
          </tr>
          <tr>
            <td style={sTd}>INR perquisite</td>
            <td style={sTd}>$675 × ₹84</td>
            <td style={sTd}>₹56,700</td>
          </tr>
          <tr>
            <td style={sTd}>Effective tax rate</td>
            <td style={sTd}>30% slab + 4% cess + 15% surcharge</td>
            <td style={sTd}>35.88%</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Perquisite tax due (Q3)</span></td>
            <td style={sTd}>₹56,700 × 35.88%</td>
            <td style={sTd}><span style={sStrong}>₹20,343</span></td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        That is one of four quarterly purchases. Across the full calendar year, with the $25K annual cap fully used and an average FX rate of ₹84, Vikram&apos;s total ESPP discount in INR is roughly:
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Line</th>
            <th style={sTh}>Calculation</th>
            <th style={sTh}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Annual USD contributions</td>
            <td style={sTd}>$25,000 (IRS cap)</td>
            <td style={sTd}>$25,000</td>
          </tr>
          <tr>
            <td style={sTd}>Effective discount % (Microsoft)</td>
            <td style={sTd}>10% / 90%</td>
            <td style={sTd}>~11.1%</td>
          </tr>
          <tr>
            <td style={sTd}>Approx USD discount</td>
            <td style={sTd}>$25,000 × 11.1%</td>
            <td style={sTd}>~$2,778</td>
          </tr>
          <tr>
            <td style={sTd}>Approx INR perquisite</td>
            <td style={sTd}>$2,778 × ₹84</td>
            <td style={sTd}>~₹2,33,352</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Approx annual perquisite tax</span></td>
            <td style={sTd}>₹2,33,352 × 35.88%</td>
            <td style={sTd}><span style={sStrong}>~₹83,727</span></td>
          </tr>
        </tbody>
      </table>

      <p style={{ ...sP, fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        For a 15%-with-lookback plan (Apple, Cisco, Intel) on a rising stock, the effective discount can easily be 30–40% — meaning the annual perquisite tax on the same $25K contribution might be ₹2.5L–₹3L instead of ₹84K. The Apple/Cisco/Intel structure is materially better than Microsoft&apos;s and the after-tax math reflects that.
      </p>

      <h3 style={sH3}>Step 3 — Vikram sells 30 months after purchase</h3>
      <p style={sP}>
        Fast-forward 30 months after the Q3 2025 purchase. The 15-share lot has been held more than 24 months — LTCG eligible. MSFT is now at $510. RBI rate has drifted to ₹85.50.
      </p>
      <p style={sP}>
        <span style={sStrong}>Critical:</span> the cost basis for capital-gains computation is the <em>full purchase-day FMV</em> in INR, not what Vikram paid. The discount has already been taxed as perquisite — adding it back into cost basis prevents double-taxation. Cost basis = 15 × $450 × ₹84.00 = ₹5,67,000.
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Line</th>
            <th style={sTh}>Calculation</th>
            <th style={sTh}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Sale proceeds</td>
            <td style={sTd}>15 × $510 × ₹85.50</td>
            <td style={sTd}>₹6,54,075</td>
          </tr>
          <tr>
            <td style={sTd}>Cost basis (purchase-day FMV)</td>
            <td style={sTd}>15 × $450 × ₹84.00</td>
            <td style={sTd}>₹5,67,000</td>
          </tr>
          <tr>
            <td style={sTd}>Long-term capital gain</td>
            <td style={sTd}>—</td>
            <td style={sTd}>₹87,075</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>LTCG tax @ 12.5%</span></td>
            <td style={sTd}>—</td>
            <td style={sTd}><span style={sStrong}>₹10,884</span></td>
          </tr>
        </tbody>
      </table>

      <div style={sCallout}>
        <span style={sStrong}>Total tax across both stages for this single 15-share Microsoft lot:</span> ₹20,343 (perquisite at purchase) + ₹10,884 (LTCG at sale 30 months later) = <span style={sStrong}>₹31,227</span>. Compare to a hypothetical sell-at-month-23 scenario where the entire ₹87,075 gain would be STCG at 35.88% = ₹31,242 of capital-gains tax instead of ₹10,884 — adding ~₹20,400 to the bill. The 24-month clock applies to ESPP the same way it applies to RSUs.
      </div>

      {/* ── Section 5 — Companies that do and don't ──────────── */}
      <h2 style={sH2}>5. Who actually offers ESPP among the big employers</h2>
      <p style={sP}>
        This is the question we get most often from candidates evaluating offers. The honest answer:
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Employer</th>
            <th style={sTh}>ESPP?</th>
            <th style={sTh}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}><Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link></td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>10%, 3-month, no lookback. Smaller benefit but simpler.</td>
          </tr>
          <tr>
            <td style={sTd}><Link href="/apple" style={{ color: 'var(--gold)' }}>Apple</Link></td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>15%, 6-month, with lookback. Generous on a rising stock.</td>
          </tr>
          <tr>
            <td style={sTd}>Cisco</td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>15%, multi-purchase within 24-month offering with lookback.</td>
          </tr>
          <tr>
            <td style={sTd}>Intel</td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>15%, 6-month, lookback.</td>
          </tr>
          <tr>
            <td style={sTd}>Adobe, Salesforce, Qualcomm, Oracle, NVIDIA</td>
            <td style={sTd}>Yes</td>
            <td style={sTd}>Generally 15%-with-lookback variants. Confirm against current plan documents.</td>
          </tr>
          <tr>
            <td style={sTd}>Google</td>
            <td style={sTd}><span style={sStrong}>No</span></td>
            <td style={sTd}>Equity comp is RSU-only. No ESPP, no employee discount program.</td>
          </tr>
          <tr>
            <td style={sTd}>Meta</td>
            <td style={sTd}><span style={sStrong}>No</span></td>
            <td style={sTd}>RSU-only.</td>
          </tr>
          <tr>
            <td style={sTd}>Amazon</td>
            <td style={sTd}><span style={sStrong}>No</span></td>
            <td style={sTd}>RSU-only. Has previously offered a non-discounted &ldquo;Direct Stock Purchase Plan&rdquo; — that is not an ESPP.</td>
          </tr>
          <tr>
            <td style={sTd}>Netflix</td>
            <td style={sTd}><span style={sStrong}>No</span></td>
            <td style={sTd}>No RSU vest schedule either — Netflix is cash-or-options. Different beast entirely.</td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        If you are reading this because you have an offer from one of the four no-ESPP companies and wondered if you are missing out — you are not missing an ESPP, you are getting a larger RSU grant instead. The total comp value is the same; the structure is just different. The <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link> is the relevant guide for those companies.
      </p>

      {/* ── Section 6 — Mistakes ──────────────────────────────── */}
      <h2 style={sH2}>6. The four most expensive ESPP mistakes</h2>

      <p style={sP}>
        <span style={sStrong}>Mistake 1 — Using zero or amount-paid as cost basis at sale.</span> The capital-gains cost basis is the purchase-day FMV, not what you paid. Some filers use the amount actually paid (purchase price × shares), which inflates the capital gain by the discount amount — and you have <em>already paid perquisite tax on that exact discount</em>. This is the double-taxation trap. On Vikram&apos;s 15-share Q3 lot, using $405 instead of $450 as cost basis would inflate the taxable gain by ₹56,700 and add ~₹7,000 of extra LTCG tax (or ~₹20,000 of extra STCG tax if sold pre-24-months). Multiply by 24 quarterly lots over six years and the overpayment becomes meaningful.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 2 — Treating the US W-2 ESPP-discount box as not also India-taxable income.</span> The W-2 reports the discount as ordinary income to the IRS. Indian residents see the W-2 line, assume it is &ldquo;US tax stuff, not my problem,&rdquo; and skip declaring it on the Indian side. Wrong. If you were an Indian tax resident on the purchase date, the discount is also Indian perquisite income. The W-2 line is informational from the IRS perspective; the Indian filing is the substantive one. Non-disclosure carries the same penalty risk as any other unreported foreign income.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 3 — Double-counting the discount at sale.</span> The inverse problem of Mistake 1: some filers include the perquisite-taxed discount in <em>both</em> their salary income (correct) and their capital-gains cost basis subtraction. This understates the capital gain. The discount appears in cost basis (because the purchase-day FMV is the cost basis), but you do not separately add it back anywhere else. One disclosure, one place — the salary line.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 4 — Forgetting Schedule FA for ESPP-purchased lots.</span> Each ESPP purchase is a separate foreign-equity acquisition. A 6-year tenure with quarterly Microsoft purchases produces 24 ESPP lots that each need a row in Schedule FA Table A3 — distinct from your RSU lots. The acquisition date is the purchase date, the initial value is purchase-day FMV in INR at the purchase-day RBI TT rate. Filers who only inventory RSUs and skip ESPP lots create a defective Schedule FA filing. The <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link> walks through Table A3 mechanics for both RSU and ESPP lots.
      </p>

      {/* ── Section 7 ─────────────────────────────────────────── */}
      <h2 style={sH2}>7. What Rovia does about it</h2>
      <p style={sP}>
        ESPP is a particular pain point because the broker statements blur the perquisite and the capital-gains side together — the year-end report tells you what you paid and what you sold for, but does not separate the purchase-day FMV that anchors the perquisite. Rovia separates them automatically:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>ESPP lot-level cost basis tracking.</span> Each purchase is stored as its own lot with purchase-day FMV (not purchase price) as the INR cost basis. Cost basis is locked at the purchase-day RBI TT rate and carried forward.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>INR perquisite computation at purchase-day RBI rate.</span> The discount is computed in INR at the correct RBI TT rate on the purchase day, reconciled against the Form 16 employer figure. Mismatches trigger an alert before you file.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>24-month LTCG clock per ESPP lot.</span> Calendar alerts at month 23 (warn before STCG cliff) and month 24 + 1 day (LTCG eligible). Same clock structure as the RSU module; ESPP lots are tagged separately so you can see purchase-by-purchase eligibility.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Automatic Schedule FA inclusion for ESPP lots.</span> Each ESPP purchase appears as its own row in Table A3 with the correct acquisition date (purchase date), initial value (purchase-day FMV in INR), and peak/closing values computed using daily RBI rates.
        </li>
        <li>
          <span style={sStrong}>Cross-vehicle reconciliation.</span> If you hold both RSUs and ESPP at the same employer (the common Microsoft and Apple case), the platform aggregates lot-level holdings across vehicles so your Schedule FA and capital-gains tax computation cover both without manual stitching.
        </li>
      </ul>
      <p style={sP}>
        The company pages walk through the broker mechanics specific to each ESPP-offering employer:&nbsp;
        <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link>,&nbsp;
        <Link href="/apple" style={{ color: 'var(--gold)' }}>Apple</Link>. RSU-only employers are covered separately:&nbsp;
        <Link href="/google" style={{ color: 'var(--gold)' }}>Google</Link>,&nbsp;
        <Link href="/meta" style={{ color: 'var(--gold)' }}>Meta</Link>,&nbsp;
        <Link href="/amazon" style={{ color: 'var(--gold)' }}>Amazon</Link>,&nbsp;
        <Link href="/netflix" style={{ color: 'var(--gold)' }}>Netflix</Link>.
      </p>

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
        Last reviewed June 4, 2026. Tax rules quoted reflect the Finance (No. 2) Act, 2024, as applicable for assessment year 2026-27 onwards. ESPP plan terms (discount, lookback, offering length) are based on publicly available plan documents as of 2026 and are subject to change — verify against your employer&apos;s current Stock Purchase Plan prospectus. This article is informational and not personalised tax advice — your specific position should be reviewed by a qualified chartered accountant.
      </p>
    </>
  );
}
