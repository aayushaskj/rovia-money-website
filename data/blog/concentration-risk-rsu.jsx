import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #4 — Concentration Risk: When Your RSUs Become a Single-Stock Bet
// ─────────────────────────────────────────────

export const meta = {
  slug: 'concentration-risk-rsu',
  title: 'Concentration Risk: When Your RSUs Become a Single-Stock Bet',
  dek: 'Indian FAANG ICs routinely carry 70–90% of their net worth in employer stock. What three recent crashes did to portfolios that looked safe the year before — and how to diversify down without a tax bomb.',
  publishDate: '2026-06-04',
  updatedDate: '2026-06-04',
  author: 'Rovia Editorial',
  tags: ['concentration', 'risk', 'rsu', 'diversification', 'pillar'],
  readingMinutes: 12,
  seoTitle: 'RSU Concentration Risk: How to Diversify a Single-Stock FAANG Portfolio',
  seoDescription:
    'Three single-stock crashes (Meta -76%, Netflix -76%, Snap -89%), the math of position sizing for Indian FAANG ICs, and tax-aware diversification using the 12.5% LTCG regime.',
  seoKeywords:
    'rsu diversification, rsu concentration risk, single stock risk, faang stock crash, meta 2022 crash, netflix 2022 crash, ltcg rsu sell, sell down rsu india',
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
    q: 'Why is single-stock concentration considered such a problem when my company is doing well?',
    a: 'Because every collapsed FAANG-tier stock looked fine the year before it collapsed. Meta in late 2021 was a $1T company with record ad revenue. Netflix in Jan 2022 had just guided to strong subscriber growth. Snap shareholders in early 2022 had seen the stock 5x off COVID lows. None of those employees expected what came next. The point of diversification is not that you predict the crash — it is that you survive the one you did not predict.',
  },
  {
    q: 'What percentage of net worth in employer stock is actually "too much"?',
    a: 'The conventional rule of thumb is that any single position above 10–20% of liquid net worth is concentrated, and above 50% is severe. Most Indian FAANG ICs we see sit between 60% and 90% — past the point where a single-stock drawdown can do permanent damage to retirement, home-buying, or kids\' education plans.',
  },
  {
    q: 'If I sell my RSUs to diversify, won\'t I pay so much tax it defeats the purpose?',
    a: 'Tax-aware sequencing makes the cost manageable. Selling LTCG-eligible lots (held over 24 months from vest) attracts 12.5% under Finance Act 2024 versus ~35.88% for STCG. Staggering across financial years keeps you below the next surcharge band. Harvesting losses on red lots offsets gains on green ones. A planned three-year diversification typically costs 12–15% of the sold value in tax — versus a 60–80% drawdown if the concentrated position cracks.',
  },
  {
    q: 'Should I sell vested RSUs immediately on vest day to avoid concentration risk?',
    a: 'For most Indian ICs, yes — the day-of-vest sale is the tax-neutral exit (vest-day price equals cost basis, so no additional capital gain). The perquisite tax is already locked in by holding the share for one day. The only reason to hold is a genuine view that the stock will outperform a diversified index — which, statistically, single stocks underperform indices about 60% of the time over a decade.',
  },
  {
    q: 'I have unvested RSUs too. Do those count toward my concentration?',
    a: 'Economically yes, statistically no. Unvested RSUs are an unfunded promise from your employer that pays out only if you stay employed and the company performs. They have option-like asymmetry but no liquid value today. When sizing concentration, count only vested shares against your net worth — but recognise that the unvested overhang means future income is also single-stock-correlated. If your company\'s stock crashes 60%, the unvested portion of your comp probably halves too.',
  },
  {
    q: 'Will diversifying out of my employer stock affect my Schedule FA filing?',
    a: 'No — Schedule FA tracks foreign assets you hold during the calendar year. Selling out of GOOGL into a US-listed ETF still leaves you holding foreign equity in the same broker, so you still file. Selling out and remitting to India means you no longer hold the asset, but you must still report it for the year of sale because you held it for part of the year. The Schedule FA pillar covers sold-during-the-period mechanics in detail.',
  },
];

export function Body() {
  return (
    <>
      {/* ── Opening ─────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>The portfolio that arrives by default</h2>
      <p style={sP}>
        Walk through the desks at any FAANG India office and ask senior engineers what their net worth looks like by asset class. The pattern is monotonous: employer stock, more employer stock, an EPF balance, a Bangalore or Hyderabad apartment, and a small mutual-fund SIP that was set up years ago and forgotten. The single-stock slice is usually the largest by a wide margin — often <span style={sStrong}>70 to 90 percent</span> of liquid net worth.
      </p>
      <p style={sP}>
        Nobody picked this allocation. It accreted, vest by vest, over four to eight years of continuous quarterly vesting, while market appreciation compounded on top. By the time anyone notices, the math has done its work: a portfolio that started as &ldquo;part of comp&rdquo; has quietly become a high-conviction, fully-leveraged bet on one ticker.
      </p>
      <p style={sP}>
        This pillar is about that bet — why it forms, what it costs when a single stock cracks, what position sizing actually says, and how to step down a concentrated position without handing the tax department a windfall.
      </p>

      <div style={sCallout}>
        If you take one thing away: <span style={sStrong}>the structural problem is not the stock — it is the position size.</span> Meta, Netflix, Google, Apple are all great companies and bad single-bet portfolios. The math of a 70 percent drawdown on 80 percent of your net worth is the same whether the ticker is META or BHEL.
      </div>

      {/* ── Section 1 — Why concentration accretes ─────────────────── */}
      <h2 style={sH2}>1. Why this happens — five structural forces</h2>
      <p style={sP}>
        Concentrated single-stock positions in Indian FAANG ICs are not a behavioural failure. They are the predictable output of five overlapping frictions, each of which on its own would be enough to produce drift.
      </p>

      <h3 style={sH3}>Continuous quarterly vesting</h3>
      <p style={sP}>
        US tech employers vest RSUs every quarter — sometimes every month — over a four-year horizon. A senior engineer with a ₹85L base and a ₹2.5Cr four-year grant is, in effect, automatically buying ~₹60L of employer stock every year, in 12 to 16 small tranches. There is no &ldquo;do you want to allocate?&rdquo; decision. The shares simply arrive.
      </p>

      <h3 style={sH3}>Broker friction on the outbound leg</h3>
      <p style={sP}>
        Selling at Schwab Equity Awards, Morgan Stanley StockPlan, or E*TRADE requires a few clicks, but moving USD proceeds out to India means a wire-form, a 70–100 bps FX spread, a $25–$35 wire fee, and a 2–5 day settlement window. Compared with the zero-friction of just letting shares sit, doing nothing wins by default. The <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link> walks through what the friction actually costs.
      </p>

      <h3 style={sH3}>The &ldquo;my company is different&rdquo; bias</h3>
      <p style={sP}>
        Engineers see the codebase, the roadmap, the leadership reviews. They have private information — or feel they do — that the market does not. They have also been right about the stock going up for the last several years. Survivor bias compounds the conviction: anyone working at a FAANG today is at a company that has, by definition, not failed yet. The peer set of failed FAANG-equivalents (Yahoo, Cisco at 2000 peak, Sun, Nokia, Blackberry, Intel through 2024) is invisible because those employees moved elsewhere.
      </p>

      <h3 style={sH3}>Sale windows locked around earnings</h3>
      <p style={sP}>
        Insider-trading policy at most FAANG employers restricts share sales to <span style={sStrong}>blackout-window-free periods</span> — typically a 2–4 week window after each quarterly earnings release. Outside those windows, sales need pre-clearance, and sales for some senior roles require a 10b5-1 plan. The practical effect: of the 52 weeks in a year, roughly 12–16 are clean sale windows. If the stock is at a low during a blackout, you cannot sell. If you are travelling during a window, you miss it. The path of least resistance is to hold.
      </p>

      <h3 style={sH3}>Tax friction — the wrong friction to optimise against</h3>
      <p style={sP}>
        Many engineers consciously hold beyond 24 months to convert STCG into LTCG. That is the right instinct in isolation. The wrong instinct is treating the 24-month clock as a reason to keep <span style={sStrong}>all</span> shares, including ones that have already aged into LTCG. The result: a portfolio where the oldest lots — which are also the most concentrated — never get touched, because &ldquo;why pay tax now?&rdquo; The <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link> shows why the 12.5% LTCG rate post Finance Act 2024 has changed this calculus.
      </p>

      {/* ── Section 2 — Three crashes ─────────────────── */}
      <h2 style={sH2}>2. Three crashes, three lessons — what concentration actually costs</h2>
      <p style={sP}>
        Abstract risk arguments do not land. Concrete losses do. The following three drawdowns happened to high-quality, high-conviction US tech stocks within the last four years. In each case, the employee base going into the drawdown believed — with good reason — that the company was structurally fine. In each case, an Indian IC holding ₹1Cr in that single stock lost an amount that would meaningfully reset their life plan.
      </p>

      <h3 style={sH3}>Meta — September 2021 to November 2022</h3>
      <p style={sP}>
        Meta peaked near <span style={sStrong}>$380</span> in September 2021. By early November 2022 it was below <span style={sStrong}>$90</span>. A peak-to-trough drawdown of roughly <span style={sStrong}>76 percent</span> over about 13 months, on a ~$1T-cap company. The catalyst was not one event — it was a stack of them: TikTok pulling engagement away, Apple&apos;s ATT prompt cratering ad targeting, the Reality Labs cash burn becoming visible in 10-Qs, and a broader 2022 rate-driven tech multiple compression.
      </p>
      <p style={sP}>
        Critically: in late 2021, no Meta employee we know of was saying &ldquo;the stock will halve and halve again.&rdquo; The internal narrative was a temporary headwind. The external narrative was a temporary headwind. Both were wrong.
      </p>

      <h3 style={sH3}>Netflix — April 2022, single quarter</h3>
      <p style={sP}>
        Netflix went into Q1 2022 earnings at roughly <span style={sStrong}>$350</span> (already down from its $700 peak in late 2021). The Q1 print on April 19, 2022 disclosed the first subscriber loss in 10 years — a net loss of 200K subscribers against guidance of +2.5M adds. The stock opened the next morning down 35%. Within six weeks it was near <span style={sStrong}>$170</span>. Peak-to-trough from the November 2021 high of ~$700 to the May 2022 low of ~$170 was roughly <span style={sStrong}>76 percent</span>.
      </p>
      <p style={sP}>
        This one is instructive because the drawdown was not a slow grind — it was a step-function. A Netflix engineer who held into earnings, intending to sell &ldquo;after the print&rdquo;, lost 35% in a single trading session. The blackout window before earnings means most employees were operationally unable to sell ahead of the print even if they wanted to.
      </p>

      <h3 style={sH3}>Snap — multi-year drawdown</h3>
      <p style={sP}>
        Snap is the longer, deeper version. The stock peaked at roughly <span style={sStrong}>$83</span> in September 2021. Over the following 12 months it lost approximately <span style={sStrong}>89 percent</span>, bottoming near $7.50 in late 2022. It then attempted a recovery, ran to $17 in early 2023, and re-broke down through 2024. Multi-year, an SNAP-concentrated employee who never sold has been holding through one of the worst risk-reward profiles in mid-cap US tech.
      </p>
      <p style={sP}>
        The Snap lesson is different from Meta or Netflix: not every &ldquo;great&rdquo; tech company recovers to prior highs. Some never do. Cisco peaked in March 2000 at $80 and, 25 years later, still has not regained that level on an inflation-adjusted basis. Intel — a recent example — was trading near $52 in early 2024 and fell to ~$19 by late 2024 after the foundry losses became visible. That is roughly a <span style={sStrong}>60+ percent</span> drawdown on a Dow component that nobody, three years prior, would have categorised as fragile.
      </p>

      <h3 style={sH3}>What ₹1Cr of single-stock exposure becomes</h3>
      <p style={sP}>
        Same starting position — ₹1Cr in employer stock at the peak — across each crash:
      </p>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Stock</th>
            <th style={sTh}>Peak window</th>
            <th style={sTh}>Trough window</th>
            <th style={sTh}>Drawdown</th>
            <th style={sTh}>Value at trough</th>
            <th style={sTh}>Absolute loss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Meta</td>
            <td style={sTd}>Sep 2021 (~$380)</td>
            <td style={sTd}>Nov 2022 (~$90)</td>
            <td style={sTd}>~76%</td>
            <td style={sTd}>~₹24L</td>
            <td style={sTd}>~₹76L</td>
          </tr>
          <tr>
            <td style={sTd}>Netflix</td>
            <td style={sTd}>Nov 2021 (~$700)</td>
            <td style={sTd}>May 2022 (~$170)</td>
            <td style={sTd}>~76%</td>
            <td style={sTd}>~₹24L</td>
            <td style={sTd}>~₹76L</td>
          </tr>
          <tr>
            <td style={sTd}>Snap</td>
            <td style={sTd}>Sep 2021 (~$83)</td>
            <td style={sTd}>Late 2022 (~$7.50)</td>
            <td style={sTd}>~89%</td>
            <td style={sTd}>~₹11L</td>
            <td style={sTd}>~₹89L</td>
          </tr>
          <tr>
            <td style={sTd}>Intel</td>
            <td style={sTd}>Early 2024 (~$52)</td>
            <td style={sTd}>Late 2024 (~$19)</td>
            <td style={sTd}>~60%</td>
            <td style={sTd}>~₹40L</td>
            <td style={sTd}>~₹60L</td>
          </tr>
        </tbody>
      </table>
      <p style={{ ...sP, fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Prices are approximate peak/trough levels in USD; INR figures assume the position was held in full through the drawdown without intermediate sales. Real outcomes depend on entry point, FX path, and sales done en route. The pattern, not the precise number, is the point.
      </p>

      <div style={sWarning}>
        These are not penny stocks, fraud cases, or speculative names. Meta, Netflix, Intel are S&P 500 components with multi-decade operating histories. Snap is a mid-cap with $5B+ revenue. The drawdowns happened anyway. <span style={sStrong}>Single-stock risk is not a function of company quality — it is a function of position size.</span>
      </div>

      {/* ── Section 3 — But my company is different ─────────────────── */}
      <h2 style={sH2}>3. &ldquo;But my company is different&rdquo; — the pre-mortem</h2>
      <p style={sP}>
        Every employee who held through a single-stock crash had a reason to hold. The reasons were not stupid. They were locally rational, technically informed, and built on direct observation of the business. They also turned out to be wrong, or at least insufficient.
      </p>
      <p style={sP}>
        A useful exercise: <span style={sStrong}>pre-mortem your own holding.</span> Assume, for the sake of argument, that your employer&apos;s stock is down 70 percent in 18 months. You are reading the post-mortem in 2028. What does the article say happened? You will find you can usually construct two or three plausible scenarios in under five minutes:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>A core revenue line gets disrupted by a new entrant (search by an LLM-native competitor, ride-hail by autonomous fleets, ads by privacy-default OS changes).</li>
        <li style={{ marginBottom: '10px' }}>A regulatory action breaks the moat (antitrust forced divestiture, EU DMA enforcement, India / EU / US data-localisation rules).</li>
        <li style={{ marginBottom: '10px' }}>A multi-billion strategic bet does not pay off in the window the market expects (Reality Labs for Meta, autonomous for Tesla, foundry for Intel, AI capex for whoever overshoots).</li>
        <li style={{ marginBottom: '10px' }}>A rate environment shift compresses the multiple (the 2022 episode that hit all unprofitable growth simultaneously).</li>
        <li>A geopolitical break — Taiwan, US-China, sanctions — that interrupts supply chains in a tail-risk way that is hard to model.</li>
      </ul>
      <p style={sP}>
        None of these need to be your &ldquo;view.&rdquo; You do not need to predict which one happens, or even believe any of them will. The point is that <span style={sStrong}>each is plausible enough that markets occasionally price them in, hard and fast</span>. Your position size should be set such that any one of them happening does not break your life plan. If a 70 percent drawdown on the position is something you cannot absorb, the position is too large — independent of how much you like the company.
      </p>

      {/* ── Section 4 — Position sizing math ─────────────────── */}
      <h2 style={sH2}>4. The math of position sizing</h2>
      <p style={sP}>
        Standard finance literature — from the CFA curriculum to bank private-client risk frameworks — converges on a rough taxonomy for single-stock exposure as a share of liquid net worth:
      </p>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Allocation to one ticker</th>
            <th style={sTh}>Risk label</th>
            <th style={sTh}>Practical read</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>&lt; 5%</td>
            <td style={sTd}>Diversified</td>
            <td style={sTd}>Idiosyncratic risk is statistically negligible at portfolio level</td>
          </tr>
          <tr>
            <td style={sTd}>5–10%</td>
            <td style={sTd}>Tilted</td>
            <td style={sTd}>Above index weight, still tolerable</td>
          </tr>
          <tr>
            <td style={sTd}>10–20%</td>
            <td style={sTd}>Concentrated</td>
            <td style={sTd}>Single-name drawdown becomes a portfolio-level event</td>
          </tr>
          <tr>
            <td style={sTd}>20–50%</td>
            <td style={sTd}>Heavily concentrated</td>
            <td style={sTd}>A bad year on this one stock visibly resets your trajectory</td>
          </tr>
          <tr>
            <td style={sTd}>&gt; 50%</td>
            <td style={sTd}>Severe</td>
            <td style={sTd}>The position is, effectively, your portfolio</td>
          </tr>
        </tbody>
      </table>
      <p style={sP}>
        Most Indian FAANG senior ICs land somewhere between heavily concentrated and severe. Worse, the concentration is on the asset that is also correlated with their primary income — if the employer&apos;s stock cracks, the unvested overhang shrinks, refresher grants get re-priced lower, and the layoff probability rises in the same window. Three exposures, one factor.
      </p>

      <h3 style={sH3}>Worked example — Priya&apos;s allocation today</h3>
      <p style={sP}>
        Back to Priya — the example employee from the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>. Senior SWE at Google Bengaluru, ₹85L base, 1,000 GOOGL granted in 2022 vesting quarterly. Three and a half years into the grant, she has vested approximately 875 shares. At a current GOOGL price of ~$190 and an INR rate of ~₹84, that position is worth roughly <span style={sStrong}>₹1.39 Cr</span>.
      </p>
      <p style={sP}>
        Her other liquid assets: ₹18L in an equity mutual-fund SIP started in 2020, ₹12L in EPF, ₹6L in a fixed deposit set aside as emergency cash. No real-estate equity yet — she rents in Indiranagar. Total liquid net worth: ~₹1.75 Cr.
      </p>
      <p style={sP}>
        GOOGL as a share of liquid net worth: <span style={sStrong}>~79 percent.</span> By any standard sizing rule, &ldquo;severe.&rdquo; And the unvested 125 shares plus her future Google-correlated comp means the exposure is actually higher in factor terms.
      </p>

      <h3 style={sH3}>What a 70% drawdown does to her</h3>
      <p style={sP}>
        Apply a Meta-style 76% drawdown to the GOOGL position alone:
      </p>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Position</th>
            <th style={sTh}>Pre-drawdown</th>
            <th style={sTh}>Post -76%</th>
            <th style={sTh}>Loss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>GOOGL vested</td>
            <td style={sTd}>₹1,39,00,000</td>
            <td style={sTd}>₹33,36,000</td>
            <td style={sTd}>₹1,05,64,000</td>
          </tr>
          <tr>
            <td style={sTd}>Equity MF (assume -25% in same correlated tech-led drawdown)</td>
            <td style={sTd}>₹18,00,000</td>
            <td style={sTd}>₹13,50,000</td>
            <td style={sTd}>₹4,50,000</td>
          </tr>
          <tr>
            <td style={sTd}>EPF</td>
            <td style={sTd}>₹12,00,000</td>
            <td style={sTd}>₹12,00,000</td>
            <td style={sTd}>₹0</td>
          </tr>
          <tr>
            <td style={sTd}>FD</td>
            <td style={sTd}>₹6,00,000</td>
            <td style={sTd}>₹6,00,000</td>
            <td style={sTd}>₹0</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Total liquid NW</span></td>
            <td style={sTd}><span style={sStrong}>₹1,75,00,000</span></td>
            <td style={sTd}><span style={sStrong}>₹64,86,000</span></td>
            <td style={sTd}><span style={sStrong}>₹1,10,14,000</span></td>
          </tr>
        </tbody>
      </table>
      <p style={sP}>
        A single-stock drawdown wipes out <span style={sStrong}>63 percent</span> of her liquid net worth. Five years of disciplined saving — gone in one bad cycle on one ticker. And the same event would likely coincide with Google freezing or trimming refresher grants, slowing comp growth in the recovery period, and increasing layoff risk. Her income side compresses while her asset side cracks.
      </p>
      <p style={sP}>
        Now run the same drawdown on the counterfactual portfolio where Priya had progressively diversified GOOGL down to 25 percent of net worth over the prior three years, with proceeds routed into a Nifty 50 index fund and a global equity ETF:
      </p>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Position</th>
            <th style={sTh}>Pre-drawdown</th>
            <th style={sTh}>Post stress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>GOOGL (25%)</td>
            <td style={sTd}>₹43,75,000</td>
            <td style={sTd}>₹10,50,000</td>
          </tr>
          <tr>
            <td style={sTd}>Nifty 50 index (35%)</td>
            <td style={sTd}>₹61,25,000</td>
            <td style={sTd}>₹49,00,000 (-20%)</td>
          </tr>
          <tr>
            <td style={sTd}>Global equity ETF (20%)</td>
            <td style={sTd}>₹35,00,000</td>
            <td style={sTd}>₹26,25,000 (-25%)</td>
          </tr>
          <tr>
            <td style={sTd}>EPF + FD (20%)</td>
            <td style={sTd}>₹35,00,000</td>
            <td style={sTd}>₹35,00,000</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Total</span></td>
            <td style={sTd}><span style={sStrong}>₹1,75,00,000</span></td>
            <td style={sTd}><span style={sStrong}>₹1,20,75,000</span></td>
          </tr>
        </tbody>
      </table>
      <p style={sP}>
        Same single-stock event, diversified portfolio: drawdown is <span style={sStrong}>~31 percent</span>, not 63 percent. Painful, but recoverable in 3–5 years. The undiversified version may take a decade.
      </p>

      {/* ── Section 5 — Tax-aware diversification ─────────────────── */}
      <h2 style={sH2}>5. Selling down without a tax bomb</h2>
      <p style={sP}>
        The most common reason engineers cite for not diversifying: &ldquo;the tax on selling would be massive.&rdquo; This is true in the wrong direction — selling reactively and all at once is expensive. Selling deliberately, lot-aware, and across multiple years is dramatically cheaper than the buy-and-pray alternative.
      </p>

      <h3 style={sH3}>Five levers worth knowing</h3>

      <p style={sP}>
        <span style={sStrong}>Lever 1 — Prioritise LTCG-eligible lots.</span> Any lot vested more than 24 months ago is taxed at the post Finance Act 2024 rate of <span style={sStrong}>12.5 percent flat</span>, plus surcharge and cess (~14% all-in for senior ICs in the 15% surcharge band). STCG-eligible lots — vested within the last 24 months — are taxed at slab rate, ~35.88% for the same earner. The differential is roughly a factor of 2.5x. Sell the LTCG lots first; leave the STCG lots to age. The <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link> has the rate mechanics.
      </p>

      <p style={sP}>
        <span style={sStrong}>Lever 2 — Stagger across financial years to manage the surcharge band.</span> Indian surcharge bands cut in at ₹50L (10%), ₹1Cr (15%), and ₹2Cr (25%, capped from the prior 37% by Finance Act 2023). Selling ₹2Cr of LTCG in a single financial year pushes you into the 25% surcharge band; splitting that into ₹1Cr across two financial years can keep you in the 15% band. The all-in LTCG rate differential between the 15% and 25% surcharge bands is roughly 13.6% versus 14.95% — meaningful on a multi-crore sell-down.
      </p>

      <p style={sP}>
        <span style={sStrong}>Lever 3 — Harvest losses on red lots.</span> If you have any lots whose vest-day price was higher than current market (this can happen on vests right at a local peak), selling those lots crystallises a capital loss. Short-term capital losses can be set off against both STCG and LTCG; long-term capital losses can only be set off against LTCG. Either way, the loss reduces your taxable gain for the year. Unutilised losses carry forward up to 8 assessment years. In practice this is most useful for someone with a mix of green and red lots, which is common after a partial drawdown when the loss tax shield is most valuable.
      </p>

      <p style={sP}>
        <span style={sStrong}>Lever 4 — Use the day-of-vest sale as your default.</span> The cleanest way to never become concentrated in the first place is to sell on vest day, at the vest-day price. Cost basis equals sale price, so the capital gains computation produces ~₹0 of taxable gain. Only the original perquisite tax (already paid) applies. The proceeds can then be redeployed into a diversified vehicle. This is the &ldquo;do not get concentrated&rdquo; strategy, distinct from the &ldquo;diversify down&rdquo; strategy needed once you already are.
      </p>

      <p style={sP}>
        <span style={sStrong}>Lever 5 — Sequence sales around blackout windows and dividend dates.</span> If your employer pays a dividend (Microsoft, Apple, Intel), selling ex-dividend after the record date but before the pay date avoids triggering US withholding tax on a dividend you would not have wanted anyway. Aligning sales to the post-earnings open trading window also protects against the Netflix-style step-down scenario where a print collapses the price before you have a chance to sell.
      </p>

      <h3 style={sH3}>Worked example — Priya&apos;s three-year diversification plan</h3>
      <p style={sP}>
        Suppose Priya commits to taking her GOOGL exposure from 79% of net worth down to 30% over three financial years. Approximately ₹85L of GOOGL needs to be sold over that window, redeployed into Nifty index, global equity ETF, and short-duration debt.
      </p>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Financial year</th>
            <th style={sTh}>GOOGL sold</th>
            <th style={sTh}>Cost basis (₹)</th>
            <th style={sTh}>LTCG (₹)</th>
            <th style={sTh}>Tax @ ~14%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>FY 2026-27</td>
            <td style={sTd}>₹28L</td>
            <td style={sTd}>₹19L</td>
            <td style={sTd}>₹9L</td>
            <td style={sTd}>~₹1.26L</td>
          </tr>
          <tr>
            <td style={sTd}>FY 2027-28</td>
            <td style={sTd}>₹28L</td>
            <td style={sTd}>₹19L</td>
            <td style={sTd}>₹9L</td>
            <td style={sTd}>~₹1.26L</td>
          </tr>
          <tr>
            <td style={sTd}>FY 2028-29</td>
            <td style={sTd}>₹29L</td>
            <td style={sTd}>₹20L</td>
            <td style={sTd}>₹9L</td>
            <td style={sTd}>~₹1.26L</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Total</span></td>
            <td style={sTd}><span style={sStrong}>₹85L</span></td>
            <td style={sTd}><span style={sStrong}>₹58L</span></td>
            <td style={sTd}><span style={sStrong}>₹27L</span></td>
            <td style={sTd}><span style={sStrong}>~₹3.78L</span></td>
          </tr>
        </tbody>
      </table>
      <p style={sP}>
        Total tax cost to step from 79% concentration to 30%: roughly <span style={sStrong}>₹3.78L</span>, or about 4.4% of the sold value. Compare against the ₹1.05Cr loss the concentrated portfolio took in the stress scenario above. The tax cost of diversifying is roughly one-thirtieth of the loss being avoided.
      </p>
      <div style={sCallout}>
        <span style={sStrong}>The tax-versus-risk math is not even close.</span> Paying ~14% LTCG to step down a position whose downside is a 60–80% drawdown is one of the most asymmetric trades available to an Indian FAANG IC. The hard part is not the calculation — it is the behavioural step of clicking &ldquo;sell&rdquo; on a stock you still believe in.
      </div>

      {/* ── Section 6 — What Rovia does ─────────────────── */}
      <h2 style={sH2}>6. What Rovia does about it</h2>
      <p style={sP}>
        Diversification is a planning problem, not a click. Doing it well requires a per-lot view of cost basis in INR, an LTCG-eligibility clock per lot, awareness of surcharge bands, blackout windows, and the FX cost of each remittance. None of this is in any single broker dashboard. Specifically Rovia handles:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Concentration analysis per user.</span> Employer stock as a share of US-equity holdings, of total liquid net worth, and drift tracking over time. The dashboard shows the metric that broker statements obscure.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>LTCG-eligible lot identification.</span> Each lot is tagged with its 24-month maturity date. Sell recommendations always prioritise mature LTCG lots before STCG ones, holding rate-band-aware constraints.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Sell-recommendation engine.</span> Given a target diversification glide-path, the platform proposes per-lot, per-financial-year sale schedules that minimise tax across the LTCG/STCG split and stay under the next surcharge band where feasible.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Loss-harvest detection.</span> Where any lot is currently under water relative to its INR cost basis, the platform flags the harvestable loss and the carry-forward implication.
        </li>
        <li>
          <span style={sStrong}>Zero-markup FX on the remittance leg.</span> The ₹37,500 of friction the broker would otherwise extract on a ₹50L remit goes back into the diversified portfolio. The <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link> has the FX mechanics.
        </li>
      </ul>
      <div style={sCallout}>
        The per-company broker-switch pages walk through how to set this up against your specific employer&apos;s plan administrator:&nbsp;
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

      {/* ── Footer note ──────────────────────────────────────── */}
      <p style={{ ...sP, marginTop: '48px', fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Last reviewed June 1, 2026. Historical drawdown figures are approximate peak-to-trough levels from publicly reported price data and may differ from intraday or split-adjusted figures depending on data source. This article is informational and not personalised investment or tax advice — diversification decisions should be reviewed against your specific holdings, holding-period clocks, and tax bracket with a qualified advisor.
      </p>
    </>
  );
}
