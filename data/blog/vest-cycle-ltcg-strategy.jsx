import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #7 — Vest-Cycle Tax Strategy
// ─────────────────────────────────────────────

export const meta = {
  slug: 'vest-cycle-ltcg-strategy',
  title: 'Vest-Cycle Tax Strategy: Lot Selection and the 24-Month LTCG Clock',
  dek: 'The 24-month clock is the single most important number in Indian RSU strategy — two days can move the same gain from 35.88% STCG to 12.5% LTCG. A deep look at lot selection, cross-FY harvesting, surcharge banding, and loss offsets.',
  publishDate: '2026-06-04',
  updatedDate: '2026-06-04',
  author: 'Rovia Editorial',
  tags: ['tax', 'rsu', 'strategy', 'pillar'],
  readingMinutes: 11,
  seoTitle: 'RSU LTCG Strategy India: Lot Selection & the 24-Month Clock (2026)',
  seoDescription:
    'Deep technical strategy for Indian RSU holders: specific lot identification at Schwab / Morgan Stanley / E*TRADE, the 24-month LTCG clock, cross-FY harvesting, loss offsets, surcharge-band planning. INR worked examples throughout.',
  seoKeywords:
    'rsu ltcg india, 24 month ltcg, specific lot identification rsu, fifo rsu tax, cross fy harvesting rsu, surcharge band rsu, loss harvesting foreign equity, rsu month 23',
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
    q: 'Is the 24-month LTCG clock inclusive or exclusive of the vest date?',
    a: 'Strictly, the holding period must exceed 24 months — the sale must occur after 24 months have elapsed since the vest date, not on the anniversary itself. The safe industry practice is to wait until day 24 months + 1, and for material positions to allow a full extra month of buffer. Day-of-anniversary sales are defensible but invite scrutiny; nobody wants to argue a ₹2L tax differential in front of an Assessing Officer.',
  },
  {
    q: 'If I tell my US broker to sell a specific lot, does the Indian IT Department honor that?',
    a: 'Yes, provided the broker confirmation shows the specific tax lot identifier. India does not mandate FIFO; specific lot identification is fully acceptable for Indian capital-gains computation. Keep the broker trade confirmation that names the lot — it is your audit defense.',
  },
  {
    q: 'Can I offset US RSU short-term losses against my Indian salary income?',
    a: 'No. Capital losses — short-term or long-term — cannot offset salary income in India. STCL can offset STCG and LTCG; LTCL can offset only LTCG. Both can be carried forward for 8 assessment years, but only against capital gains of the same character class.',
  },
  {
    q: 'Does the cross-FY split work if I sell on March 31?',
    a: 'The cut-off is end-of-day March 31 in your broker time zone. Indian capital gains attach to the trade date, not the settlement date. So a trade executed on March 31 (US market hours) falls in the current FY; a trade on April 1 falls in the next FY. Many engineers lose the split by mistiming a US-market trade — March 31 IST evening is often April 1 in some interpretations, so leaving a 24-48 hour buffer is safer.',
  },
  {
    q: 'What happens to the LTCG clock if I ACATS-transfer my shares to a new broker?',
    a: 'An in-kind ACATS transfer preserves your original acquisition (vest) date — the 24-month clock continues uninterrupted. A sell-and-rebuy at the new broker resets the clock, with the new purchase establishing a fresh 24-month window. The Broker Transfer pillar covers the mechanics.',
  },
  {
    q: 'I have a paper loss on NFLX that I have not sold. Can I claim it now?',
    a: 'No. Capital losses in India crystallize only on sale. An unrealized paper loss is not deductible. To use it, you must execute a sale before March 31 of the relevant FY, which crystallizes the STCL or LTCL — then it offsets eligible gains in that FY or carries forward 8 years.',
  },
];

export function Body() {
  return (
    <>
      {/* ── Opening ──────────────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>The single most important number in Indian RSU strategy</h2>
      <p style={sP}>
        Two days can change the tax on the same gain from <span style={sStrong}>35.88%</span> to <span style={sStrong}>12.5%</span>.
      </p>
      <p style={sP}>
        That is what the 24-month LTCG clock does, and it is the single most important number an Indian RSU holder needs to track. Most engineers we talk to know the rule exists. Almost none of them run a per-lot calendar. They watch the share price, the FX rate, the Form 16, the Schedule FA deadline — and they miss the one variable that, lot by lot, drives more of their final tax bill than any other decision they make.
      </p>
      <p style={sP}>
        The <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link> introduced the 24-month clock at a high level. This article lives inside it. We are going to look at lot selection, holding-period management, cross-FY harvesting, loss offsets, and surcharge-band positioning — the strategic layer that sits on top of the tax mechanics. Every figure is in rupees. Every example follows Priya, the Bengaluru-based Senior SWE at Google whose 1,000 GOOGL grant we have been tracking through the pillar series.
      </p>

      <div style={sCallout}>
        <span style={sStrong}>The premise of this article:</span> the 24-month clock is not a passive rule that happens to you. It is a calendar you actively manage — one row per lot, one date per row, with a sale plan attached. Get this wrong and you give back lakhs of rupees. Get it right and the same vest grant produces materially more after-tax INR.
      </div>

      {/* ── Section 1 ─────────────────────────────────────────── */}
      <h2 style={sH2}>1. FIFO is not your friend — specific lot identification is</h2>
      <p style={sP}>
        When you place a sell order at a US broker without specifying which lot you are selling, the broker defaults to <span style={sStrong}>FIFO</span> — first-in, first-out. Your oldest lots get sold first. For most engineers, FIFO accidentally produces the right answer (oldest lots are LTCG-eligible). For anyone running active strategy, FIFO produces the wrong answer often enough to matter.
      </p>
      <p style={sP}>
        Indian tax law does not mandate FIFO. <span style={sStrong}>Specific lot identification</span> — telling the broker exactly which tax lot to sell — is fully acceptable for computing Indian capital gains, provided the broker trade confirmation names the lot. The IT Department reads the lot identifier on the confirmation and applies the cost basis of that lot.
      </p>

      <h3 style={sH3}>Where specific lot identification lives in each broker UI</h3>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Broker</th>
            <th style={sTh}>How to specify a lot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Schwab Equity Awards</td>
            <td style={sTd}>Trade ticket &rarr; &ldquo;Lot Selection&rdquo; tab &rarr; pick &ldquo;Specified Lot&rdquo; instead of &ldquo;FIFO.&rdquo; You then choose lots by vest date and share count. Available on web and phone.</td>
          </tr>
          <tr>
            <td style={sTd}>Morgan Stanley StockPlan</td>
            <td style={sTd}>StockPlan Connect &rarr; Sell &rarr; &ldquo;Cost Basis Method&rdquo; defaults to FIFO; switch to &ldquo;Specific Lot&rdquo; and select by acquisition date. For larger sales, call the StockPlan desk to confirm the lot tag carries to the confirmation.</td>
          </tr>
          <tr>
            <td style={sTd}>E*TRADE Stock Plans</td>
            <td style={sTd}>Trade &rarr; Stock Plan &rarr; choose lots via the &ldquo;Lot Selector.&rdquo; E*TRADE allows partial-lot specification, so you can sell 40 of a 62-share lot.</td>
          </tr>
          <tr>
            <td style={sTd}>Fidelity Stock Plan Services</td>
            <td style={sTd}>Trade ticket &rarr; &ldquo;Specified Shares&rdquo; cost-basis method. Fidelity lets you set a default cost-basis method on the account; change to &ldquo;Specific Share Identification&rdquo; once and every future trade ticket honors it.</td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        Once you set the cost-basis method to specific lot identification, save the confirmation PDF for every sale. Indian audit defense requires the confirmation showing the lot identifier — not just &ldquo;sold 100 GOOGL.&rdquo; The broker statement at year-end may aggregate lots; the trade confirmation does not.
      </p>

      {/* ── Section 2 ─────────────────────────────────────────── */}
      <h2 style={sH2}>2. The month-23 mistake, in detail</h2>
      <p style={sP}>
        We covered the month-23 mistake briefly in the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>. It is worth coming back to with full numbers because it is the most expensive operational mistake an Indian RSU holder makes.
      </p>
      <p style={sP}>
        Priya has 100 GOOGL shares from a vest dated <span style={sStrong}>October 15, 2023</span>. Vest-day USD price was $138.50; RBI TT rate that day was ₹83.10. Her INR cost basis on this lot is locked at:
      </p>
      <div style={sCallout}>
        100 × $138.50 × ₹83.10 = <span style={sStrong}>₹11,50,935</span>
      </div>
      <p style={sP}>
        It is October 2025. GOOGL is trading at $185, INR is at ₹84.50. Her position is worth ₹15,63,250. The market has been jittery for two weeks and she wants to lock in the gain.
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Scenario</th>
            <th style={sTh}>Sale date</th>
            <th style={sTh}>Holding period</th>
            <th style={sTh}>Gain (₹)</th>
            <th style={sTh}>Tax rate</th>
            <th style={sTh}>Tax (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>A — &ldquo;Sell now&rdquo;</td>
            <td style={sTd}>Oct 14, 2025</td>
            <td style={sTd}>23m 30d (STCG)</td>
            <td style={sTd}>4,12,315</td>
            <td style={sTd}>35.88%</td>
            <td style={sTd}><span style={sStrong}>1,47,938</span></td>
          </tr>
          <tr>
            <td style={sTd}>B — &ldquo;Wait 2 days&rdquo;</td>
            <td style={sTd}>Oct 16, 2025</td>
            <td style={sTd}>24m 1d (LTCG)</td>
            <td style={sTd}>4,12,315</td>
            <td style={sTd}>12.5%</td>
            <td style={sTd}><span style={sStrong}>51,539</span></td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        Two days of patience saves Priya <span style={sStrong}>₹96,399</span> on this single lot, on essentially the same price. The market does not move materially in 48 hours, but the tax classification does.
      </p>
      <p style={sP}>
        The variant of this mistake we see most often is the <span style={sStrong}>panic sell five trading days before LTCG.</span> Engineers see a 4–6% market dip in October, watch a few headlines, and place a market-sell order on lots that vested in November or December the prior year. The dip turns a sale that would have been LTCG-eligible in two weeks into an STCG event. The behavioral pattern is consistent enough that we have an internal name for it on the Rovia engineering team: &ldquo;October dip, January regret.&rdquo;
      </p>

      <div style={sWarning}>
        <span style={sStrong}>The fix is a calendar, not willpower.</span> Every lot in your inventory has a vest date. Add 24 months + 1 day to that date and put it on your calendar. Any sale before that date triggers STCG; any sale on or after that date is LTCG. Do not rely on memory in a falling market.
      </div>

      {/* ── Section 3 ─────────────────────────────────────────── */}
      <h2 style={sH2}>3. The 24-month-1-day rule — why strict reading matters</h2>
      <p style={sP}>
        Section 2(42A) of the Income Tax Act defines a long-term capital asset as one held for <span style={sStrong}>more than 24 months</span> for unlisted/foreign equity. The word is &ldquo;more than,&rdquo; not &ldquo;at least.&rdquo; Strict interpretation: the holding period must strictly exceed 24 months.
      </p>
      <p style={sP}>
        Two practical readings:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Sale on the exact 24-month anniversary</span> (e.g., vest Oct 15, 2023; sale Oct 15, 2025) is ambiguous. Some Assessing Officers count it as LTCG; some count it as STCG. The Tribunal jurisprudence leans toward STCG on the anniversary itself, but it is not a defended-everywhere position.
        </li>
        <li>
          <span style={sStrong}>Sale on 24 months + 1 day</span> (e.g., vest Oct 15, 2023; sale Oct 16, 2025) is unambiguously LTCG.
        </li>
      </ul>
      <p style={sP}>
        Industry practice for material positions: wait <span style={sStrong}>25 months</span>, not 24 months + 1 day. The extra month is cheap insurance against an Assessing Officer reading the anniversary aggressively. On a ₹10L gain, the LTCG-vs-STCG differential is ~₹2.34L — worth paying a 30-day market-risk premium to remove all ambiguity.
      </p>

      {/* ── Section 4 ─────────────────────────────────────────── */}
      <h2 style={sH2}>4. Cross-FY harvesting — splitting gains across surcharge bands</h2>
      <p style={sP}>
        India&apos;s financial year ends <span style={sStrong}>March 31</span>. Capital gains are taxed in the FY in which the trade occurs. A sale on March 30 falls in FY 2025-26; a sale on April 2 falls in FY 2026-27. The choice of FY changes which annual-income bucket the gain stacks into — and that determines your surcharge band.
      </p>

      <h3 style={sH3}>The surcharge bands as of FY 2025-26</h3>
      <p style={sP}>
        Surcharge applies on top of base tax once total income crosses certain thresholds. Under the new tax regime — which most senior ICs default into — the bands are:
      </p>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Total income</th>
            <th style={sTh}>Surcharge</th>
            <th style={sTh}>Effective top-slab rate</th>
            <th style={sTh}>Effective LTCG rate (12.5% base)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Below ₹50L</td>
            <td style={sTd}>0%</td>
            <td style={sTd}>~31.2%</td>
            <td style={sTd}>~13.0%</td>
          </tr>
          <tr>
            <td style={sTd}>₹50L – ₹1Cr</td>
            <td style={sTd}>10%</td>
            <td style={sTd}>~34.3%</td>
            <td style={sTd}>~14.3%</td>
          </tr>
          <tr>
            <td style={sTd}>₹1Cr – ₹2Cr</td>
            <td style={sTd}>15%</td>
            <td style={sTd}>~35.9%</td>
            <td style={sTd}>~15.0%</td>
          </tr>
          <tr>
            <td style={sTd}>Above ₹2Cr</td>
            <td style={sTd}>25%</td>
            <td style={sTd}>~39.0%</td>
            <td style={sTd}>~16.3%</td>
          </tr>
        </tbody>
      </table>
      <p style={{ ...sP, fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        The new regime caps the top surcharge at 25%, removing the 37% band that exists under the old regime. For capital-gains income specifically, the surcharge on LTCG is also capped at 15% even when other income would attract 25%. The effective LTCG figures above reflect this cap plus 4% cess.
      </p>

      <h3 style={sH3}>Worked example — Priya splits a ₹50L gain</h3>
      <p style={sP}>
        Priya is sitting on a block of GOOGL she has been planning to liquidate to fund a Bengaluru property purchase. Her base salary and current vests put her at <span style={sStrong}>₹95L</span> of non-RSU annual income — already in the 10% surcharge band, but well below the ₹1Cr line.
      </p>
      <p style={sP}>
        She has a ₹50L LTCG sitting in her position. If she takes it all in FY 2025-26, her total income for the year becomes ₹95L base + ₹50L gain = <span style={sStrong}>₹1.45Cr</span> — pushing her over the ₹1Cr surcharge threshold into the 15% band. The LTCG portion gets the 15% surcharge cap (~15.0% effective on the gain). The salary portion crosses into ~35.9% effective.
      </p>
      <p style={sP}>
        Alternatively, she takes the ₹50L gain as ₹25L in FY 2025-26 (sale on March 30, 2026) and ₹25L in FY 2026-27 (sale on April 2, 2026). Now each year her total income is ₹95L + ₹25L = ₹1.20Cr — still in the 15% band, so the LTCG surcharge stays the same. The salary side, however, stays below the ₹2Cr line in both years, avoiding the 25% surcharge stack on her base.
      </p>
      <p style={sP}>
        The bigger split benefit arrives when income is closer to the ₹50L threshold. Consider a younger engineer at ₹40L base with a ₹40L gain available — the choice of taking the full gain in one FY (total ₹80L, 10% surcharge band) versus splitting (₹20L + ₹20L, each year ~₹60L, still 10% band) is neutral for LTCG. But adding deductions and other small income items, a real-world split can keep one of the two years below ₹50L entirely, saving ~3% of effective rate on every rupee of LTCG that year.
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Strategy</th>
            <th style={sTh}>FY 25-26 income</th>
            <th style={sTh}>FY 26-27 income</th>
            <th style={sTh}>Surcharge band on salary</th>
            <th style={sTh}>Approx total tax (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Single-year liquidation</td>
            <td style={sTd}>₹1.45Cr</td>
            <td style={sTd}>₹95L</td>
            <td style={sTd}>15% &rarr; 10%</td>
            <td style={sTd}>~37.8L</td>
          </tr>
          <tr>
            <td style={sTd}>Split across FYs</td>
            <td style={sTd}>₹1.20Cr</td>
            <td style={sTd}>₹1.20Cr</td>
            <td style={sTd}>15% &rarr; 15%</td>
            <td style={sTd}>~37.4L</td>
          </tr>
        </tbody>
      </table>
      <p style={{ ...sP, fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Numbers above are illustrative — they assume standard deductions and no other adjustments. Real-world savings on a ₹50L split are typically ₹2–5L when the split crosses a surcharge band on either the base or the gain side, especially for engineers near the ₹50L and ₹2Cr lines.
      </p>

      <div style={sCallout}>
        <span style={sStrong}>The structural insight:</span> surcharge is a step function, not a slope. A small movement of income across a band threshold changes the rate on <em>everything in that bucket</em>, not just the marginal rupee. Splits matter most when you are within ₹10L of a band boundary on either side.
      </div>

      {/* ── Section 5 ─────────────────────────────────────────── */}
      <h2 style={sH2}>5. Loss harvesting in foreign equity</h2>
      <p style={sP}>
        Indian tax law allows capital losses to offset capital gains under specific rules. For Indian RSU holders, the relevant section is 74(1):
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Short-Term Capital Loss (STCL)</span> can offset both STCG and LTCG of the same FY. Whatever does not get used in the current year carries forward for <span style={sStrong}>8 assessment years</span>, set off against future STCG or LTCG.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Long-Term Capital Loss (LTCL)</span> can offset <em>only</em> LTCG — never STCG. Same 8-year carry-forward.
        </li>
        <li>
          <span style={sStrong}>Capital losses cannot offset salary or perquisite income.</span> So the perquisite tax on your RSU vest is untouchable by capital losses — only the capital-gain portion of your tax bill is in scope.
        </li>
      </ul>
      <p style={sP}>
        For RSU holders at multi-stock companies (or anyone who has accumulated multiple grants), the STCL/STCG offset is the most useful planning lever — STCL is the more flexible loss class.
      </p>

      <h3 style={sH3}>Worked example — Priya offsets a NFLX loss against GOOGL gains</h3>
      <p style={sP}>
        Priya joined Google in 2022, but before that she had a one-year stint at Netflix, leaving with 100 vested NFLX shares from her final tranche. Her NFLX cost basis from that vest was <span style={sStrong}>₹19,00,000</span> (vest at ~$230, RBI rate ~₹82.60).
      </p>
      <p style={sP}>
        It is February 2026. NFLX is trading at $160, INR at ₹85.20. Her NFLX position is worth <span style={sStrong}>₹13,63,200</span>. She has a ₹5,36,800 unrealized loss. The lot is 17 months old — still STCG territory if sold.
      </p>
      <p style={sP}>
        Separately, she has a GOOGL lot she sold last quarter at a <span style={sStrong}>₹5L STCG</span> (also short-term). Without action, that ₹5L STCG attracts 35.88% tax = ₹1,79,400.
      </p>
      <p style={sP}>
        She sells the NFLX position on February 20, 2026 — crystallizing the ₹5,36,800 STCL. The mechanics:
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Line</th>
            <th style={sTh}>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>GOOGL STCG (Q3 FY 25-26)</td>
            <td style={sTd}>+5,00,000</td>
          </tr>
          <tr>
            <td style={sTd}>NFLX STCL (Feb 2026)</td>
            <td style={sTd}>−5,36,800</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Net STCG / STCL for the FY</span></td>
            <td style={sTd}><span style={sStrong}>−36,800 (carried forward)</span></td>
          </tr>
          <tr>
            <td style={sTd}>STCG tax @ 35.88% on net</td>
            <td style={sTd}>0</td>
          </tr>
          <tr>
            <td style={sTd}>Tax that would have been due without harvesting</td>
            <td style={sTd}>1,79,400</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Savings</span></td>
            <td style={sTd}><span style={sStrong}>1,79,400</span></td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        The ₹36,800 of unused STCL carries forward 8 years. Crucially, Priya can use that future STCL against either STCG <em>or</em> LTCG — STCL is the more flexible class.
      </p>
      <p style={sP}>
        A note on the &ldquo;wash sale&rdquo; question: India does <span style={sStrong}>not</span> have a US-style 30-day wash-sale rule for capital losses. You can sell a NFLX position to crystallize a loss and rebuy NFLX the same day or the next day, and the loss is still recognized. However, audit defense for an obviously round-tripped position is weaker; the prudent approach is at least a few days, ideally a different security, between the loss-realizing sale and any rebuy.
      </p>

      {/* ── Section 6 ─────────────────────────────────────────── */}
      <h2 style={sH2}>6. Surcharge banding as a multi-year game</h2>
      <p style={sP}>
        Senior ICs at <Link href="/google" style={{ color: 'var(--gold)' }}>Google</Link>, <Link href="/meta" style={{ color: 'var(--gold)' }}>Meta</Link>, <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link>, and <Link href="/amazon" style={{ color: 'var(--gold)' }}>Amazon</Link> often hover right around the ₹1Cr to ₹2Cr line — base salary, refresh grants, and accumulated vest stacks regularly push total income into the 15% band, and large sales can push it into the 25% band.
      </p>
      <p style={sP}>
        The strategic move is to treat surcharge band positioning as a multi-year game, not a per-vest decision. Three patterns work consistently:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Accelerate sales in a low-base year.</span> If you take a sabbatical, between jobs, or have an unpaid leave year, that is the cheapest time to liquidate a large RSU stack. Total income for the year drops below ₹50L, surcharge drops to zero, LTCG effective rate sits at ~13.0% all-in instead of ~15.0%.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Defer sales in a high-base year.</span> If you closed a record bonus or an unusual one-off (e.g., a vested signing payout) and you can hold the RSU position into the following FY, do so. Same gain, different bucket year, materially lower effective rate.
        </li>
        <li>
          <span style={sStrong}>Use the L1/L2 transition year.</span> Engineers moving between L5 and L6 (or L6 and L7) often see refresh stacking that puts them temporarily into the ₹2Cr+ bracket for one year. A planned hold-through-the-transition can keep that year clean of large discretionary sales.
        </li>
      </ul>

      <div style={sCallout}>
        The interaction with the 24-month clock is what makes this hard to plan manually. You are juggling: (a) per-lot LTCG eligibility dates, (b) annual income projections by FY, (c) surcharge band thresholds, (d) loss-harvesting opportunities, (e) FX outlook. The combinatorial space is exactly the kind of thing a calendar and a planner solve and a spreadsheet does not.
      </div>

      {/* ── Section 7 ─────────────────────────────────────────── */}
      <h2 style={sH2}>7. Putting it together — a yearly cadence</h2>
      <p style={sP}>
        A complete vest-cycle tax strategy operates on three time scales simultaneously:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '14px' }}>
          <span style={sStrong}>Per-lot (weekly review).</span> Track 24-month anniversaries. Flag lots crossing into LTCG in the next 30 days. Flag lots in month 22–24 as &ldquo;do not sell&rdquo; until the clock matures.
        </li>
        <li style={{ marginBottom: '14px' }}>
          <span style={sStrong}>Per-FY (quarterly review).</span> Estimate the year&apos;s total income — base + RSU perquisites already realized + capital gains realized + remaining vests through March. Project surcharge band. Identify whether a planned sale should be cross-FY split.
        </li>
        <li>
          <span style={sStrong}>Multi-year (annual review).</span> Map your next 24–36 months of vests against your career trajectory (promotions, sabbaticals, switches). Identify low-base years for accelerated liquidation; identify high-base years for deferral.
        </li>
      </ol>
      <p style={sP}>
        Most engineers operate on time scale 1 only — react to the vest, maybe glance at the calendar before selling. The lift from running all three scales together is what makes the difference between a 14% effective rate and a 16.5% effective rate on the same gain stack. Across a senior-IC career with ₹3–5Cr of total RSU income, that is ₹7–15L of unforced overpayment.
      </p>

      {/* ── Section 8 — How Rovia handles it ─────────────────────── */}
      <h2 style={sH2}>8. What Rovia does</h2>
      <p style={sP}>
        The vest-cycle planning layer is what Rovia was built to replace. Spreadsheets cannot do this; they go stale within a week of any vest or sale. The platform handles each of the levers above directly:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Per-lot 24-month countdown.</span> Every lot from every broker (Schwab, Morgan Stanley, E*TRADE, Fidelity) shows its current holding-month count and its LTCG-eligible date. The lot inventory view sorts by &ldquo;days until LTCG&rdquo; so the most strategically sensitive lots surface to the top.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>&ldquo;Do not sell before [date]&rdquo; alerts.</span> Every lot generates two alerts: a month-23 warning (you are approaching the STCG cliff — pause discretionary sales) and a month-24+1 confirmation (this lot is LTCG-eligible from this date). Both surface to email and the dashboard.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Surcharge-band sale recommender.</span> Given your year-to-date income and projected remaining vests, the platform estimates which surcharge band you will land in and recommends whether to take a planned sale in the current FY or defer to next FY. Recommendations are quantified in rupees of expected tax savings.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Loss-harvest opportunity scanner.</span> The platform continuously evaluates your full inventory for loss positions that, if realized, would offset realized or projected gains in the same FY. If you have a NFLX paper loss and an unhedged GOOGL STCG, the scanner surfaces the trade and the tax saving.
        </li>
        <li>
          <span style={sStrong}>Specific lot identification guidance.</span> When you initiate a sale, the platform proposes which specific lot to sell given your strategic goals — LTCG harvesting, loss harvesting, or surcharge-band positioning — and produces the broker-specific instructions to execute.
        </li>
      </ul>

      <div style={sCallout}>
        The mechanical pieces feed into the rest of the Rovia stack — INR cost basis is preserved at the original RBI TT rate (covered in the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>), Schedule FA reflects the post-sale state automatically (covered in the <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link>), and the actual sale-and-remit goes through a 0-markup FX channel (covered in the <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>). The strategy work above is what makes the rest of the stack profitable; the rest of the stack is what makes the strategy executable.
      </div>

      <p style={sP}>
        The per-company broker-switch walkthroughs cover the operational layer:&nbsp;
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
        Last reviewed June 4, 2026. Surcharge bands, loss carry-forward rules, and the 24-month holding period reflect the Income Tax Act and Finance (No. 2) Act, 2024, as applicable for assessment year 2026-27 onwards. This article is informational and not personalised tax advice — your specific position should be reviewed by a qualified chartered accountant.
      </p>
    </>
  );
}
