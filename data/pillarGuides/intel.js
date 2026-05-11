export const guide = {
  title: `Intel RSU Guide for India Employees`,
  lastUpdated: `May 2026`,
  intro: `Intel employs approximately 30,000 people in India, making its Bengaluru campus one of the largest Intel engineering centers in the world outside the United States. If you work at Intel India, you're managing RSUs in a company that has undergone one of the most significant restructurings in the semiconductor industry — 15% global workforce reductions in 2024–2025, a CEO transition, and strategic uncertainty about Intel's foundry ambitions. This guide covers Intel's India footprint, RSU program mechanics, the tax treatment under Indian law, and how to think about your equity in the current environment.`,
  keyStats: [
    { label: `India headcount`, value: `~30,000+` },
    { label: `Primary cities`, value: `Bengaluru, Hyderabad, Pune, Chennai` },
    [ { label: `RSU vest schedule`, value: `Quarterly, 4-year vest` } ][0],
    { label: `Ticker / Exchange`, value: `INTC / NASDAQ` },
    { label: `Vest cliff`, value: `1 year` },
  ],
  sections: [
    {
      heading: `Intel in India: Offices, Cities & Scale`,
      body: `Intel's Bengaluru campus — located in the Electronics City and Whitefield corridors — is the company's largest engineering center outside the US with approximately 16,000 employees. Intel India Bengaluru has chip architecture validation teams, software tools development, AI accelerator (Gaudi) engineering, and client computing platform engineering. The campus has been a critical contributor to Intel's CPU and chipset roadmap for over two decades.

Hyderabad is Intel's second India location with approximately 8,000 employees, focused on data center product validation, Mobileye automotive software, and Intel's networking and connectivity division. Pune has around 2,000 employees working on manufacturing process R&D, supply chain systems, and enterprise IT. Chennai has approximately 1,000 employees in verification and testing roles.

Intel's India presence predates most US tech companies' India operations — the Bengaluru office opened in 1988 and has grown through multiple technology cycles. However, the 2024–2025 restructuring reduced India headcount by an estimated 3,000–4,000 roles, particularly in the Hyderabad and Bengaluru offices. Teams that survived the cuts are leaner, and sentiment reflects both relief and uncertainty.`,
      bullets: [
        `Bengaluru: ~16,000 employees — chip architecture, AI accelerators (Gaudi), CPU validation`,
        `Hyderabad: ~8,000 employees — data center, Mobileye automotive software, networking`,
        `Pune: ~2,000 employees — manufacturing process R&D and supply chain systems`,
        `Chennai: ~1,000 employees — verification, testing, and validation roles`,
        `2024–2025 restructuring reduced India headcount by ~3,000–4,000 — significant operational context`,
      ],
    },
    {
      heading: `Department Mix: Who Works at Intel India`,
      body: `Intel India is almost entirely engineering and technical — unlike software companies that have significant sales and support presences in India, Intel India is a pure engineering operation. Chip design and verification accounts for roughly 40% of the workforce. Software engineering (drivers, firmware, platform software, compiler toolchains, AI tools) accounts for another 30–35%. Research and advanced development (process R&D, Mobileye, AI research) makes up 15–20%, with G&A accounting for the remainder.

Intel's internal level system uses a Job Code + Grade structure. Senior Engineer (Grade 7, Job Code SEN-NE or equivalent) is where RSU grants become meaningful. Junior engineers (Grades 4–6) may receive small grants or none, particularly after the 2024 restructuring, which reduced discretionary equity for lower grades.

Career progression at Intel India has historically been slower than at software-first companies — the chip design cycle is multi-year, and promotion criteria are rigorous. But the compensation at Senior Engineer and above has been competitive when stock was performing.`,
      bullets: [
        `Chip design/verification: ~40% of workforce; CPU architecture, GPU, and platform validation`,
        `Software engineering: ~30–35%; drivers, firmware, compiler tools, and AI accelerator software`,
        `Mobileye India (Hyderabad): autonomous driving software, separate product track`,
        `G&A roles: smaller, primarily Bengaluru; less likely to receive meaningful RSU grants`,
      ],
    },
    {
      heading: `Who Gets RSUs: Levels & Amounts`,
      body: `Intel India RSU grants are tied to grade and performance rating. At Grade 7 (Senior Engineer / equivalent), engineers typically receive initial RSU grants. At Grade 8 (Principal Engineer) and above, grants are more substantial and include performance-based refresh grants.

At Grade 7, initial grants historically ranged from $15,000–$30,000 USD over 4 years. Grade 8 (Principal Engineer) typically saw $35,000–$70,000 USD initial grants. Grade 9+ (Senior Principal, Fellow) received $80,000–$150,000+ USD initial grants. However, Intel's 2024–2025 restructuring included reductions in equity compensation at lower grades — current grant ranges may be 20–30% below pre-2024 benchmarks at the junior senior engineer level.

Annual refresh grants at Intel are performance-dependent and have been reduced in scope post-2024 restructuring. Employees who received a "top-2" performance rating in the annual review cycle (typically communicated in January–February) may receive refresh grants, while "mid" performers have seen reduced or eliminated refreshes.`,
      bullets: [
        `Grade 6 and below: typically small or no RSU grants post-2024 restructuring`,
        `Grade 7 (Senior Engineer): $15,000–$30,000 initial (potentially reduced post-2024)`,
        `Grade 8 (Principal Engineer): $35,000–$70,000 initial; refresh for top performers`,
        `Grade 9+ (Senior Principal): $80,000–$150,000+ initial; annual refresh meaningful`,
      ],
    },
    {
      heading: `Understanding Your Vest Schedule`,
      body: `Intel RSUs vest quarterly over 4 years with a 1-year cliff. After the 1-year cliff, 25% vests, then 6.25% per quarter. Intel's quarterly vest dates are typically in January, April, July, and October — corresponding to Intel's fiscal quarter ends (Intel's fiscal year follows the calendar year, ending December 31). This creates a straightforward alignment with the Indian FY: January and April vests fall in different Indian FYs (January in Q3, April in Q1), while July and October vests fall within the same Indian FY quarter (Q2 and Q2/Q3 respectively).

Intel uses E*TRADE (Morgan Stanley at Work) as the equity plan administrator. At each quarterly vest, Intel handles sell-to-cover withholding for Indian perquisite tax. Given Intel's calendar fiscal year, refresh grants are typically communicated in February (after the January earnings call and performance reviews), starting new 4-year quarterly vest schedules from April or May.

Critical for 2024–2025 hires: if you were hired during or after the restructuring period, your grant may be smaller than historical norms. Verify your specific grant terms in your offer letter and E*TRADE equity plan statement.`,
      bullets: [
        `Cliff: 25% at 12 months; then 6.25% quarterly in Jan, Apr, Jul, Oct`,
        `Calendar fiscal year: Jan and Apr vests fall in different Indian FYs — straightforward planning`,
        `Refresh grants communicated in February post-performance review; vest starts April–May`,
        `E*TRADE (Morgan Stanley at Work) equity portal — verify your specific grant terms`,
        `2024–2025 restructuring may have reduced or modified your grant — confirm in E*TRADE`,
      ],
      callout: `Intel's January vest falls in Q3 of the Indian FY (January–March). This is close to the March 15 advance tax deadline — if your January vest is large, confirm your advance tax installments for the year are sufficient before the March 15 deadline to avoid Section 234C interest.`,
    },
    {
      heading: `The Tax Reality`,
      body: `Intel India RSU taxation follows the standard two-stage Indian framework. At each quarterly vest, the FMV of INTC shares (NASDAQ closing price on vest date, converted at SBI TT buying rate) is a perquisite under Section 17(2), taxed at slab rate (30% + surcharge + cess for most Senior Engineers and above). Intel's payroll withholds this via sell-to-cover — typically 30–33% of vesting shares are sold to cover TDS.

Capital gains: cost basis is vest-date FMV. Sales within 24 months: STCG at 30% slab rate. Sales after 24 months: LTCG at 20% with CII indexation. INTC is listed on NASDAQ — the 10% Section 112A rate applies only to Indian-listed equity and does not apply here.

The complexity for Intel India employees in 2024–2025 is the stock price trajectory. INTC experienced significant price declines in 2024 — the stock fell from the mid-$30s to below $20 at points. Employees who vested at higher prices and held now have paper losses on those lots. Capital losses from selling held INTC shares can be set off against capital gains from other assets (same tax year, within 8 years for carry-forward). If you've held INTC that is now worth less than your vest-date FMV, selling to realize the loss may be tax-efficient — consult your CA.

Form 67 and Schedule FA requirements are the same as for all US-listed equity: file Form 67 if any US withholding occurred; maintain Schedule FA if INTC shares are held in E*TRADE at any point in the Indian FY.`,
      bullets: [
        `Perquisite at vest: 30%+ slab rate; Intel withholds via sell-to-cover quarterly`,
        `STCG within 24 months: 30% on gain from vest FMV`,
        `LTCG after 24 months: 20% with CII indexation; Section 112A 10% rate does NOT apply`,
        `Capital losses from INTC (if held below vest price) can offset other capital gains — consult CA`,
        `Schedule FA and Form 67: mandatory annual filings for employees holding INTC in E*TRADE`,
      ],
      callout: `Most-missed mistake at Intel India: employees who vested at $30–35 per share in 2022–23 and held through the 2024 decline now have unrealized losses. Many don't realize these losses can be harvested to offset STCG from other sales. Selling the losing lots and buying a diversified ETF preserves your economic exposure while locking in a tax benefit.`,
    },
    {
      heading: `What Intel India Employees Typically Do`,
      body: `Intel India employee RSU behavior has shifted significantly post-2024 restructuring. Prior to the cuts, the prevailing pattern was to hold INTC shares — the stock had been relatively stable and senior engineers who'd held for 4–8 years had seen reasonable appreciation. The 2024 stock decline changed this: many employees who held through the decline are now selling immediately at vest and not holding for LTCG.

At Grade 7–8, the most common current pattern is sell-at-vest with immediate repatriation. The combination of stock uncertainty, layoff anxiety, and reduced refresh grants has made the "hold for LTCG" thesis harder to justify. Senior engineers who are confident in Intel's long-term recovery thesis (IDM 2.0, Intel Foundry Services, Gaudi AI accelerators) are maintaining hold positions, but this is a minority view.

One specific behavioral pattern at Intel: employees who survived the restructuring may be holding concentrated INTC positions from pre-2024 vests that are now underwater. The psychology of holding underwater positions — hoping to "break even" — is a documented behavioral finance error. If the investment thesis for INTC has changed, the fact that you vested at a higher price is not a reason to hold.`,
      bullets: [
        `Post-2024: majority sell at vest; pre-2024 hold culture has eroded with stock decline`,
        `Employees holding pre-2024 vest lots at a loss should model tax-loss harvesting`,
        `Senior engineers with long-term Intel conviction still hold; minority view but active`,
        `Don't anchor to vest price for hold/sell decisions — current fair value is what matters`,
      ],
    },
    {
      heading: `The Smart Approach`,
      body: `Intel India employees in the current environment need a framework that accounts for elevated stock uncertainty without abandoning sound equity management principles.

Default sell-at-vest is defensible and perhaps optimal for most Grade 7–8 employees right now. The perquisite tax is paid via sell-to-cover; sell the net shares immediately. This eliminates concentration risk, provides quarterly liquidity, and avoids the psychological trap of holding an underperforming stock in hopes of a recovery that may be slow or uncertain.

For employees with pre-existing INTC holdings at a loss: model your tax-loss harvesting opportunity. If you hold 500 shares vested at $33 (now trading at $22), selling realizes a capital loss of ~$5,500 USD (₹4.5 lakh approximately). This loss can offset STCG from other asset sales in the same year. After the wash-sale waiting period (30 days), you can re-enter INTC or a semiconductor ETF if you want the recovery upside.

For employees who want to hold for recovery: set a hard maximum concentration limit (15% of financial assets in INTC total) and a time-bound hold horizon. If the recovery thesis is not materializing by a specific date, sell regardless of price.`,
      bullets: [
        `Default sell-at-vest is optimal for most Grade 7–8 employees given current INTC uncertainty`,
        `Tax-loss harvesting: model selling underwater INTC lots to offset STCG from other assets`,
        `Wash-sale: wait 30+ days after selling at a loss before repurchasing INTC or similar`,
        `If holding for recovery: hard cap at 15% of financial assets; set a time-bound review date`,
        `Repatriate quarterly regardless of INTC direction — don't conflate repatriation with sell/hold decision`,
        `File Form 67 and Schedule FA annually; consult CA on capital loss set-off strategy`,
      ],
    },
    {
      heading: `Concentration Risk`,
      body: `INTC has one of the more complex risk profiles of any US tech company's Indian employee equity. The stock declined approximately 55% from early 2024 peaks to late 2024 lows — a decline driven by competitive losses to AMD in the PC and server processor market, delays in Intel's foundry technology node roadmap, and uncertainty about whether Intel Foundry Services can compete with TSMC for external customers.

For Intel India employees, the concentration risk is particularly acute because the company-specific risks (layoffs, restructuring) and the stock-specific risks (competitive pressure, foundry uncertainty) are correlated. A bad quarter for Intel's foundry roadmap can produce both a stock decline and further headcount reductions — the worst possible combination for an employee with concentrated INTC exposure.

Intel's recovery thesis — the Intel 18A process node, AI chip (Gaudi 3) adoption, and US CHIPS Act foundry incentives — is real and actively being executed. But the timeline is 2025–2028, and execution risk is high.`,
      bullets: [
        `INTC declined ~55% in 2024 from peak to trough — single-company risk is not theoretical`,
        `Competitive risk: AMD gaining in PC/server; NVIDIA dominant in AI; Intel catching up takes years`,
        `Layoff risk and stock decline risk are correlated — the concentration danger is doubled`,
        `Intel 18A foundry node and CHIPS Act incentives are the recovery thesis; timeline is 3+ years`,
      ],
      callout: `Intel employees who survived the 2024–2025 restructuring should run a clear-eyed concentration audit: if more than 20% of your financial net worth is in INTC (held shares + unvested RSUs at current price), you are taking significant risk that your job and your wealth are simultaneously exposed to the same company-level events.`,
    },
    {
      heading: `Getting Money Home: FX & Repatriation`,
      body: `Intel's equity plan uses E*TRADE (Morgan Stanley at Work). Proceeds from INTC share sales are in USD in your E*TRADE account. Repatriation to India follows the standard process: wire transfer to your Indian resident savings account, 2–4 business days processing.

The FX spread on E*TRADE wires and Indian bank conversion can be 2–3% combined. For Intel India employees with quarterly vest cycles and immediate-sell strategies, this is a recurring cost on each repatriation. On a $10,000 quarterly wire, the FX cost is $200–300 or roughly ₹17,000–₹25,000 per quarter. Annually that's ₹68,000–₹100,000 in unnecessary FX costs.

Rovia's 0% FX markup saves this spread directly. Given the current INTC environment, where every dollar of vest proceeds matters more (smaller grants, lower stock price), eliminating FX friction is a practical priority.`,
      bullets: [
        `E*TRADE (Morgan Stanley at Work); wire to Indian resident savings account`,
        `FX spread 2–3% combined; ₹68,000–₹100,000 annual loss on quarterly repatriation`,
        `Rovia 0% FX markup eliminates spread; especially meaningful given reduced Intel grant values`,
        `Repatriate on each quarterly vest; don't accumulate USD in E*TRADE`,
      ],
    },
    {
      heading: `Stock Sentiment Among Intel India Employees`,
      body: `Intel India employee sentiment in 2025–26 is the most complex of any major US tech company's India workforce. There is a clear divide between employees who believe in the Intel recovery story and those who are actively positioning for an exit.

Engineers working on Intel's 18A process node, Gaudi AI accelerators, and the Intel Foundry Services technical team have high conviction — these are technically challenging, career-defining projects, and the US CHIPS Act provides real tailwind for Intel's domestic manufacturing ambitions. These employees are holding INTC and expecting a multi-year recovery.

Engineers in legacy product lines — older Xeon architecture, mature client platform software, back-office validation — report lower morale. The 2024 restructuring hit these teams harder, and the survivors are dealing with stretched bandwidth and the lingering anxiety of "who's next." Attrition in these groups to hyperscalers and Indian tech companies has been elevated.

Golden handcuffs are weaker than at most companies because (a) INTC grants have been reduced and (b) the stock is at lower absolute levels than 2022 peak grants. Some employees who received grants at $40–45/share are watching those unvested lots with diminishing psychological value. Expect elevated voluntary attrition if INTC doesn't show recovery in 2026.`,
      bullets: [
        `Intel 18A and Gaudi teams: high morale and conviction; willing to hold and wait for recovery`,
        `Legacy validation and platform teams: lower morale; elevated attrition risk to hyperscalers`,
        `Golden handcuff math is weaker: reduced grants + lower stock price = smaller unvested balances`,
        `2024 layoff survivors report anxiety and bandwidth stretch — team morale is a real headwind`,
        `Key watch in 2026: Intel 18A yield milestones and Gaudi 3 AI chip win rate`,
      ],
    },
  ],
};
