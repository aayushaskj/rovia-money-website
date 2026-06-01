import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #1 — RSU Taxation in India
// ─────────────────────────────────────────────

export const meta = {
  slug: 'rsu-tax-india',
  title: 'RSU Taxation in India: The Complete Guide for FAANG Employees',
  dek: 'From the perquisite tax at vest to the LTCG clock to Schedule FA — the entire India-side tax stack for someone holding US RSUs, with every example in rupees.',
  publishDate: '2026-06-01',
  updatedDate: '2026-06-01',
  author: 'Rovia Editorial',
  tags: ['tax', 'rsu', 'india', 'pillar'],
  readingMinutes: 14,
  seoTitle: 'RSU Taxation in India 2026: Complete Guide for FAANG Employees',
  seoDescription:
    'How RSUs are taxed in India for FAANG employees: perquisite tax at vest, 24-month LTCG at 12.5% post Finance Act 2024, Schedule FA, Form 67. With INR worked examples.',
  seoKeywords:
    'rsu tax india, rsu india ltcg, rsu perquisite tax, schedule fa rsu, form 67 rsu, foreign equity ltcg india, finance act 2024 rsu',
};

// ─── shared inline styles (kept local to the file, matches codebase convention) ───
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

// ── FAQ data is exported separately so it can be used for JSON-LD schema in the page ──
export const faq = [
  {
    q: 'Do I also owe US tax on my RSU vest?',
    a: "Generally no, if you're a tax non-resident of the US and have filed Form W-8BEN with your broker. Under the India-US DTAA, India has full taxing rights on RSU vest income earned while you're an Indian resident. The US only withholds on dividends (25% under treaty).",
  },
  {
    q: 'What if I worked in the US and moved back to India mid-vest?',
    a: 'Allocation rules apply. The portion of the RSU that vested while you were a US tax resident is US-taxable; the portion vesting after you became an Indian resident is India-taxable. The split is typically pro-rated by days. This is a CA-required conversation — do not DIY.',
  },
  {
    q: 'Does ESPP work the same way?',
    a: 'No. ESPP has its own perquisite mechanics — the discount is a perquisite at purchase, and the holding period for LTCG runs from the purchase date (not the offering date). Microsoft, Apple, Cisco, Intel offer ESPPs; Google, Meta, Amazon, Netflix do not. Worth a separate pillar.',
  },
  {
    q: 'Can I gift my RSUs to a family member to reduce tax?',
    a: 'Gifting vested shares to a spouse is allowed, but clubbing provisions under Section 64 apply — the capital gain on subsequent sale is taxed in your hands, not theirs. Gifting to adult children or parents avoids clubbing but transfers the taxable event entirely; consult a CA before doing this with large positions.',
  },
  {
    q: "I haven't sold anything. Do I still owe tax?",
    a: 'Yes. The perquisite tax at vest is due regardless of sale. Many engineers are surprised that they owe tax on shares they have not liquidated. This is also why sell-to-cover exists — to ensure the tax can be paid.',
  },
  {
    q: "My employer's Form 16 shows a different RSU value than my own RBI-TT-rate computation. Which is right?",
    a: 'The IT Department uses the RBI TT buying rate. If your employer used a different rate (broker spot, monthly average, etc.), you should file based on the RBI rate and adjust. If your employer over-deducted, you are owed a refund; if under-deducted, you owe top-up tax — and ideally pay before March 31 to avoid Section 234B/C interest.',
  },
];

export function Body() {
  return (
    <>
      {/* ── TL;DR ──────────────────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>The 30-second version</h2>
      <p style={sP}>
        If you work at Google, Meta, Microsoft, Amazon, Apple, or Netflix from India and you are paid in RSUs, you have <span style={sStrong}>two separate tax events</span> on every grant — and one annual disclosure that most people do not know exists.
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
            <td style={sTd}>At vest</td>
            <td style={sTd}>Vest-day INR value of shares</td>
            <td style={sTd}>Slab rate (up to ~39% all-in)</td>
          </tr>
          <tr>
            <td style={sTd}>2a — STCG</td>
            <td style={sTd}>Selling within 24 months of vest</td>
            <td style={sTd}>Gain over vest-day cost basis</td>
            <td style={sTd}>Slab rate (up to ~39%)</td>
          </tr>
          <tr>
            <td style={sTd}>2b — LTCG</td>
            <td style={sTd}>Selling after 24 months of vest</td>
            <td style={sTd}>Gain over vest-day cost basis</td>
            <td style={sTd}><span style={sStrong}>12.5% flat, no indexation</span></td>
          </tr>
          <tr>
            <td style={sTd}>Annual disclosure</td>
            <td style={sTd}>Every ITR filing</td>
            <td style={sTd}>Foreign asset holdings</td>
            <td style={sTd}>Schedule FA — no minimum threshold</td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        Everything below is mechanics, edge cases, and a worked example in rupees that follows one Bengaluru-based Google engineer&apos;s 250-share vest from grant to sale.
      </p>

      <div style={sCallout}>
        If you take only one thing away: <span style={sStrong}>the 24-month clock is everything.</span> Selling in month 23 versus month 25 can change your tax bill on the same gain from ~39% to 12.5%. The math is in Section 3.
      </div>

      {/* ── Section 1 ─────────────────────────────────────────── */}
      <h2 style={sH2}>1. The two-stage tax structure that nobody explains</h2>
      <p style={sP}>
        When your US employer grants you RSUs, you pay tax in India twice — at two completely different events, at two completely different rates.
      </p>
      <p style={sP}>
        <span style={sStrong}>Event 1 — Vest.</span> The day shares actually land in your US brokerage account (Schwab, Morgan Stanley StockPlan, E*TRADE, Fidelity), India treats the fair-market value of those shares as <span style={sStrong}>perquisite income</span> — the same bucket as a company-paid health insurance premium or a car lease. It gets taxed at your slab rate, in the financial year of the vest, whether or not you ever sell.
      </p>
      <p style={sP}>
        <span style={sStrong}>Event 2 — Sale.</span> Whenever you eventually sell those shares, the difference between the sale price and your vest-day cost basis is a <span style={sStrong}>capital gain</span> (or loss). Short-term if you held under 24 months from vest; long-term after.
      </p>
      <p style={sP}>
        These are two different tax computations under two different sections of the Income Tax Act. The perquisite event is governed by Section 17(2)(vi). The capital gains event is governed by Sections 45 and 112. The mechanics, rates, and even the <em>exchange rate you use</em> are different at each event.
      </p>
      <p style={sP}>
        <span style={sStrong}>What about US tax?</span> Under the India-US Double Taxation Avoidance Agreement (DTAA), if you are a non-resident alien in the US (you have filed Form W-8BEN with your broker), the US does not withhold income tax on your RSU vest income. India has full taxing rights. The only US withholding you will see is on <span style={sStrong}>dividends</span>, which is a separate Form 67 question we will come back to.
      </p>

      {/* ── Section 2 ─────────────────────────────────────────── */}
      <h2 style={sH2}>2. Stage 1 — Perquisite tax at vest</h2>
      <p style={sP}>
        This is where most engineers get the mechanics wrong and end up either underpaying (and triggering interest under Section 234B/C) or overpaying because their employer&apos;s TDS used the wrong rate.
      </p>

      <h3 style={sH3}>What counts as the vest-day value</h3>
      <p style={sP}>For Indian tax purposes, the perquisite value equals:</p>
      <div style={sCallout}>
        <span style={sStrong}>Number of shares vesting × USD fair market value on vest day × RBI reference rate (TT buying) on vest day</span>
      </div>
      <p style={sP}>Two things to watch:</p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>FMV is the closing price on the vest day</span>, not the opening price, not the day-before price. Some US brokers report the prior-day close for vest-confirmation purposes — that is their convention, not the Indian tax rule.
        </li>
        <li>
          <span style={sStrong}>The conversion rate is the RBI reference rate (TT buying)</span> on the vest day. Not your broker&apos;s spot rate. Not the cash-counter rate at your bank. The TT buying rate is published daily by the RBI and is what the Income Tax Department uses to verify your computation.
        </li>
      </ol>

      <h3 style={sH3}>Worked example — Priya, Google Bengaluru</h3>
      <p style={sP}>
        Meet our example employee. Priya is a Senior Software Engineer at Google Bengaluru, ₹85L base, 1,000 GOOGL RSUs granted over four years on a quarterly vest schedule. Her annual income from base plus perquisites puts her in the highest slab bracket with the 15% surcharge band.
      </p>
      <p style={sP}>
        Her Q4 2025 vest: <span style={sStrong}>250 GOOGL shares.</span> GOOGL closes at $185.40 on the vest day. The RBI TT buying rate that day is ₹83.52.
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
          <tr><td style={sTd}>Shares vesting</td><td style={sTd}>250</td><td style={sTd}>—</td></tr>
          <tr><td style={sTd}>USD value</td><td style={sTd}>250 × $185.40</td><td style={sTd}>$46,350</td></tr>
          <tr><td style={sTd}>INR perquisite (TT rate)</td><td style={sTd}>$46,350 × ₹83.52</td><td style={sTd}>₹38,71,152</td></tr>
          <tr><td style={sTd}>Effective tax rate</td><td style={sTd}>30% slab + 4% cess + 15% surcharge</td><td style={sTd}>35.88%</td></tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Perquisite tax due</span></td>
            <td style={sTd}>₹38,71,152 × 35.88%</td>
            <td style={sTd}><span style={sStrong}>₹13,88,809</span></td>
          </tr>
        </tbody>
      </table>
      <p style={{ ...sP, fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Surcharge applies because her total income for the year crosses ₹50L. The 15% band is for income between ₹1Cr and ₹2Cr; below ₹1Cr it would be 10%, above ₹2Cr it is 25% (the 37% band has been capped at 25% under the new regime since FY 2023-24).
      </p>

      <h3 style={sH3}>Sell-to-cover and why your employer&apos;s TDS may be wrong</h3>
      <p style={sP}>Most US tech employers handle the tax in one of two ways:</p>
      <p style={sP}>
        <span style={sStrong}>Option A — Indian payroll TDS.</span> Your Indian entity (Google India, Microsoft India, etc.) treats the vest as a salary component and withholds tax through payroll. Clean. Shows on your Form 16.
      </p>
      <p style={sP}>
        <span style={sStrong}>Option B — Sell-to-cover via broker.</span> Schwab / Morgan Stanley / E*TRADE automatically sells a portion of the vesting shares (typically ~35–40%) at the open on vest day, remits USD to the employer, who then remits INR equivalent to the Indian tax authorities. Messier — the proceeds your broker reports are gross of tax, and the INR conversion may use the broker&apos;s rate rather than the RBI TT rate.
      </p>
      <p style={sP}>In Option B, three things commonly go wrong:</p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>The broker uses its own spot rate</span>, not the RBI TT rate. The Income Tax Department will recompute your perquisite using TT rate. If the broker rate was higher than TT rate, your employer over-deducted (you get a refund); if lower, you owe top-up tax — with interest if you did not catch it.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Sell-to-cover proceeds get treated as a sale, but they are not.</span> The shares sold on vest day to cover tax have zero short-term capital gain because the vest-day cost basis equals the sale price. Do not double-count.</li>
        <li><span style={sStrong}>The surcharge band gets applied as if RSU income is your only income.</span> It is not. Your broker does not know your slab. The Indian employer should be the one tracking surcharge band — and may get it wrong if your base plus RSU vests cross a bracket mid-year.</li>
      </ol>
      <p style={sP}>
        For Priya, the difference between an employer-applied 35.88% versus a broker-rate-based 33.20% would be ~₹1.04L of tax — paid later, with interest. Worth checking your Form 16 against your own RBI-rate computation.
      </p>

      {/* ── Section 3 ─────────────────────────────────────────── */}
      <h2 style={sH2}>3. Stage 2 — Capital gains at sale</h2>
      <p style={sP}>This is where Finance Act 2024 changed everything.</p>

      <h3 style={sH3}>The 24-month clock</h3>
      <p style={sP}>
        Capital gains in India are classified by <span style={sStrong}>holding period from the vest date</span> (not the grant date — the grant is unfunded promise, not the asset).
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Less than 24 months from vest → Short-Term Capital Gain (STCG).</span> Taxed at your slab rate. For a senior IC in the 30% slab with 15% surcharge, that is ~35.88%, same as the perquisite rate.</li>
        <li><span style={sStrong}>24 months or more from vest → Long-Term Capital Gain (LTCG).</span> Taxed at a <span style={sStrong}>flat 12.5%</span>. <span style={sStrong}>No indexation.</span> Surcharge and cess still apply on top of the 12.5%, so the all-in effective rate for a senior IC in the highest surcharge band sits around 14–15%.</li>
      </ul>
      <p style={sP}>
        The 24-month rule applies because GOOGL, META, MSFT, AMZN, AAPL, NFLX are <span style={sStrong}>unlisted securities for Indian capital gains purposes</span> — they do not trade on an Indian recognized exchange. The 12-month LTCG rule that applies to Indian-listed equity does not apply here.
      </p>

      <h3 style={sH3}>What Finance Act 2024 changed</h3>
      <p style={sP}>
        Until July 22, 2024, foreign equity LTCG was taxed at 20% <span style={sStrong}>with indexation benefit</span> (you could uplift your cost basis using the Cost Inflation Index and reduce taxable gain). Under the Finance (No. 2) Act, 2024, effective from July 23, 2024:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li>LTCG rate: 20% → <span style={sStrong}>12.5%</span></li>
        <li>Indexation: removed</li>
        <li>Holding period for LTCG: unchanged at 24 months for unlisted/foreign equity</li>
      </ul>
      <p style={sP}>
        <span style={sStrong}>This change is asymmetric.</span> Holders of high-appreciation stock (Google, Apple, etc., that ran 3–4× over five years) pay materially less under the new regime. Holders of slow-appreciation stock that barely outpaced inflation pay more because indexation used to nearly wipe their gains.
      </p>
      <p style={sP}>
        You will find sources still publishing the old &ldquo;20% with indexation&rdquo; rate — including, until recently, parts of this very site we are now correcting. For any vest sold after July 23, 2024, the new 12.5% flat rate applies.
      </p>

      <h3 style={sH3}>Worked example — Priya sells</h3>
      <p style={sP}>Same 250 GOOGL shares as above. Cost basis: ₹38,71,152.</p>

      <p style={sP}>
        <span style={sStrong}>Scenario A — Sells 18 months after vest (STCG).</span> Holding period: under 24 months. GOOGL has run to $220, INR has held at ₹84.20.
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
          <tr><td style={sTd}>Sale proceeds</td><td style={sTd}>250 × $220 × ₹84.20</td><td style={sTd}>₹46,31,000</td></tr>
          <tr><td style={sTd}>Cost basis</td><td style={sTd}>(from above)</td><td style={sTd}>₹38,71,152</td></tr>
          <tr><td style={sTd}>Capital gain</td><td style={sTd}>—</td><td style={sTd}>₹7,59,848</td></tr>
          <tr><td style={sTd}><span style={sStrong}>STCG tax @ 35.88%</span></td><td style={sTd}>—</td><td style={sTd}><span style={sStrong}>₹2,72,633</span></td></tr>
        </tbody>
      </table>

      <p style={sP}>
        <span style={sStrong}>Scenario B — Sells 30 months after vest (LTCG).</span> Holding period: over 24 months. GOOGL has continued to $235, INR at ₹84.50.
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
          <tr><td style={sTd}>Sale proceeds</td><td style={sTd}>250 × $235 × ₹84.50</td><td style={sTd}>₹49,64,375</td></tr>
          <tr><td style={sTd}>Cost basis</td><td style={sTd}>—</td><td style={sTd}>₹38,71,152</td></tr>
          <tr><td style={sTd}>Capital gain</td><td style={sTd}>—</td><td style={sTd}>₹10,93,223</td></tr>
          <tr><td style={sTd}><span style={sStrong}>LTCG tax @ 12.5%</span></td><td style={sTd}>—</td><td style={sTd}><span style={sStrong}>₹1,36,653</span></td></tr>
        </tbody>
      </table>

      <div style={sCallout}>
        <span style={sStrong}>The same Priya, on the same 250 shares, paid ₹2.72L of tax in Scenario A versus ₹1.37L in Scenario B — even though she made a larger absolute gain in Scenario B.</span> Six extra months of holding saved her ~₹1.36L. That is the LTCG clock in action.
      </div>

      {/* ── Section 4 ─────────────────────────────────────────── */}
      <h2 style={sH2}>4. Schedule FA — the disclosure nobody mentions</h2>
      <p style={sP}>
        Every Indian resident & ordinarily resident who holds any foreign asset must file <span style={sStrong}>Schedule FA</span> as part of their annual ITR. This includes vested RSUs sitting in your Schwab / Morgan Stanley / E*TRADE / Fidelity account.
      </p>

      <h3 style={sH3}>Three things people get wrong</h3>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '14px' }}><span style={sStrong}>There is no minimum threshold.</span> Some accountants say Schedule FA is only mandatory if your foreign holding exceeds ₹5L. That is incorrect. The ₹5L is from a different provision in the Black Money Act dealing with penalty <em>quantum</em>, not a filing threshold. If you hold any foreign asset at any time during the relevant accounting period, Schedule FA filing is mandatory.</li>
        <li style={{ marginBottom: '14px' }}><span style={sStrong}>The reporting period is calendar year, not financial year.</span> Schedule FA tables A1 through F use Jan 1 to Dec 31 as the accounting period. So in your ITR for FY 2025-26 (filed by July 2026), you are reporting your foreign assets as they stood between Jan 1, 2025 and Dec 31, 2025. This trips up almost everyone the first time.</li>
        <li><span style={sStrong}>You report peak value, not just closing value.</span> Several tables (A3, for foreign equity) require you to disclose the highest fair-market value the asset hit during the reporting period — not just what you held on Dec 31. Many filers report only closing value and create a defensible-but-imperfect filing.</li>
      </ol>

      <h3 style={sH3}>The penalty stack</h3>
      <p style={sP}>
        Non-disclosure of foreign assets triggers penalty and prosecution under the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li><span style={sStrong}>₹10 lakh per year</span> of non-disclosure (Section 43)</li>
        <li><span style={sStrong}>Up to 7 years imprisonment</span> for willful failure (Section 50)</li>
        <li><span style={sStrong}>30% tax + 90% penalty + 30% interest</span> on undisclosed income, if traced back</li>
      </ul>
      <p style={sP}>
        In practice, the Income Tax Department now receives CRS (Common Reporting Standard) data from US financial institutions, including end-of-year balances at Schwab, Fidelity, etc. Non-filing is increasingly mechanically detectable. The pre-2018 era of &ldquo;they will not find out&rdquo; is over.
      </p>

      {/* ── Section 5 ─────────────────────────────────────────── */}
      <h2 style={sH2}>5. Form 67 — only if your RSU pays dividends</h2>
      <p style={sP}>
        If your employer&apos;s stock pays dividends (Microsoft, Apple, Cisco, IBM, Intel, and as of mid-2024 Meta), the US broker withholds 25% from the gross dividend under the India-US DTAA (reduced from the default 30% by treaty). To avoid double-taxation, you can claim <span style={sStrong}>Foreign Tax Credit (FTC)</span> in India by filing Form 67 along with your ITR.
      </p>
      <p style={sP}>Mechanics:</p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>Form 67 must be filed <span style={sStrong}>before or on the date of your ITR filing.</span> Late Form 67 with an already-filed ITR is a defective filing.</li>
        <li style={{ marginBottom: '10px' }}>You need to attach a tax residency certificate (TRC) and either Form 16A equivalent from the US broker or the year-end 1042-S issued by the broker.</li>
        <li>The FTC claim is limited to the lower of (a) the US tax actually withheld, or (b) the Indian tax otherwise payable on that income.</li>
      </ol>
      <p style={sP}>
        Google, Meta (until 2024), Amazon, Netflix do not pay dividends — so most engineers at those four companies will never need Form 67. Microsoft, Apple, Cisco, Intel employees do.
      </p>

      {/* ── Section 6 ─────────────────────────────────────────── */}
      <h2 style={sH2}>6. The four most expensive mistakes</h2>
      <p style={sP}>
        <span style={sStrong}>Mistake 1 — Treating sell-to-cover proceeds as fully taxed.</span> The shares your broker sells on vest day to cover Indian tax have ₹0 capital gain (sold at vest-day price = cost basis). You do not owe additional capital gains tax on those. Some filers double-count this in their ITR. Common cost: ~₹50K–₹2L of overpayment per vest.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 2 — Forgetting Schedule FA.</span> ₹10L/year penalty, retroactive. If you have held foreign equity for five years and never filed Schedule FA, your exposure is ₹50L of penalty plus interest plus prosecution risk. Common cost: catastrophic.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 3 — Selling in month 23.</span> The 24-month clock matters more than the price. Selling in month 23 at a 20% gain produces ~35.88% tax. Selling in month 25 at the same price produces 12.5% tax. On a ₹10L gain, that is a ₹2.34L difference for two months of patience. Common cost: ₹50K–₹5L per misplayed vest.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 4 — Using your broker&apos;s USD cost basis on your ITR.</span> Schwab and Morgan Stanley report cost basis in USD. Indian capital gains computation requires INR cost basis at the <span style={sStrong}>vest-day RBI TT rate</span>, not the rate at sale. Using sale-day rate inflates your cost basis (if INR has weakened) and understates your taxable gain — IT Department recomputation will then add tax plus interest. Common cost: ₹30K–₹2L per vest.
      </p>

      {/* ── Section 7 ─────────────────────────────────────────── */}
      <h2 style={sH2}>7. What Rovia does about it</h2>
      <p style={sP}>The mechanics above are why Rovia exists. Specifically:</p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>INR cost basis at RBI TT rate</span> computed and stored for every vest from every broker — Schwab, Morgan Stanley StockPlan, E*TRADE, Fidelity. No more manually reconciling broker statements against RBI daily reference rates.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Schedule FA auto-generation</span> in the exact ITR format, with calendar-year accounting period and peak-value reporting baked in.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Form 67 auto-fill</span> for dividend-paying stock holders, with TRC and 1042-S parsing.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>24-month clock tracking</span> with calendar alerts at month 23 (warn before STCG cliff) and month 24 + 1 day (LTCG eligible).</li>
        <li><span style={sStrong}>Zero FX markup</span> on actual sale-and-remit transactions — meaningful at scale, when a 50-basis-point broker FX spread on a ₹50L sale is ₹25,000.</li>
      </ul>
      <p style={sP}>
        The broker-switch pages on rovia.money — one per company — walk through the mechanical migration step by step:&nbsp;
        <Link href="/google" style={{ color: 'var(--gold)' }}>Google</Link>,&nbsp;
        <Link href="/meta" style={{ color: 'var(--gold)' }}>Meta</Link>,&nbsp;
        <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link>,&nbsp;
        <Link href="/amazon" style={{ color: 'var(--gold)' }}>Amazon</Link>,&nbsp;
        <Link href="/apple" style={{ color: 'var(--gold)' }}>Apple</Link>,&nbsp;
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
        Last reviewed June 1, 2026. Tax rules quoted reflect the Finance (No. 2) Act, 2024, as applicable for assessment year 2026-27 onwards. This article is informational and not personalised tax advice — your specific position should be reviewed by a qualified chartered accountant.
      </p>
    </>
  );
}
