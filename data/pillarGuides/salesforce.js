export const guide = {
  title: `Salesforce India RSU Guide: Tax, Vesting & What To Do With Your CRM Stock`,
  lastUpdated: `May 2026`,
  intro: `Salesforce employs over 12,000 people across India, making it one of the larger enterprise software companies in the country. With offices in Hyderabad, Bengaluru, Mumbai, and Pune, Salesforce India covers engineering for its core CRM platform, Tableau, MuleSoft, Slack, and Heroku. For MTS 2+ engineers and senior roles, RSUs form a meaningful part of the compensation package — though Salesforce's CRM stock has been more volatile than the FAANG hardware-software giants, creating specific sell/hold considerations for India employees.`,
  keyStats: [
    { label: `India headcount`, value: `~12,000+` },
    { label: `Primary cities`, value: `Hyderabad, Bengaluru` },
    { label: `RSU vest schedule`, value: `Quarterly (Mar/Jun/Sep/Dec)` },
    { label: `Ticker / Exchange`, value: `CRM / NYSE` },
    { label: `Vest cliff`, value: `1 year` },
  ],
  sections: [
    {
      heading: `Salesforce in India: Offices, Cities & Scale`,
      body: `Salesforce's India footprint is substantial and growing, with the Hyderabad office being the largest. The Hyderabad development centre, established in Gachibowli, houses approximately 6,000 employees working on Salesforce's core CRM platform (Sales Cloud, Service Cloud), Einstein AI features, and some infrastructure engineering. Hyderabad was Salesforce's first major India engineering investment and remains the heart of its India engineering organisation.

Bengaluru has approximately 4,000 employees, with a mix of acquired-company engineering teams (Tableau India, MuleSoft India, Slack India) and some core Salesforce platform engineers. The Bengaluru office reflects Salesforce's acquisition-heavy growth strategy — many employees are former Tableau or MuleSoft staff who joined through acquisitions and maintained their Bengaluru presence.

Mumbai houses Salesforce's India commercial operations — enterprise sales to Indian companies (BFSI, retail, telecom), Salesforce Ventures investment activity, and some customer success teams. The Mumbai office is sales-and-GTM focused.

Pune has approximately 1,000 employees across Salesforce's managed services, implementation services, and some engineering roles. The Pune presence is more operations-oriented than the core engineering hubs.

Salesforce's fiscal year ends January 31 (not December 31), which is important for understanding when RSU refresh grants are issued and how performance reviews align with equity. The India headcount has been broadly stable since Salesforce's global restructuring in 2023 (around 8,000 global layoffs), which affected some India sales and duplicate engineering roles post the Slack acquisition.`,
      bullets: [
        `Hyderabad: ~6,000 — core CRM (Sales Cloud, Service Cloud), Einstein AI, infrastructure`,
        `Bengaluru: ~4,000 — Tableau India, MuleSoft, Slack engineering, some core platform`,
        `Mumbai: ~1,000 — enterprise sales (BFSI/retail/telecom), customer success, Salesforce Ventures`,
        `Pune: ~1,000 — managed services, implementation, operations`,
        `Fiscal year ends January 31 — RSU refresh cycle aligned to fiscal year not calendar year`,
      ],
    },
    {
      heading: `Department Mix: Who Works at Salesforce India`,
      body: `Salesforce India's department mix reflects its enterprise software nature. Software engineering (SWE, including application, infrastructure, and platform engineers) accounts for approximately 55-60% of India FTEs — lower than at hyperscalers like Google or AWS but consistent with enterprise software companies.

The acquired-company engineering teams are notable: Tableau India (data visualisation engineering), MuleSoft India (API and integration platform), and Slack India (team communication engineering) each have their own technical cultures that have partially merged with Salesforce's but retain distinct identities. These teams in Bengaluru work on separate product lines with their own engineering stacks.

Salesforce has a meaningful Professional Services and Customer Success function in India — these are Salesforce-certified technical consultants who implement Salesforce products for enterprise customers. These roles sit at the boundary between engineering and consulting and have their own compensation structures that may include smaller RSU grants at senior levels.

Sales and Account Executive roles in Mumbai and Hyderabad are OTE-structured with commission on top of base and equity. Salesforce's enterprise sales in India (targeting banks, insurance companies, and large retailers) is a significant business with a sizeable sales team.

Finance, Legal, and HR functions support both the India entity (Salesforce.com India Pvt Ltd) and regional shared services. These roles exist at multiple India cities and receive RSUs at senior levels comparable to engineering bands.`,
      bullets: [
        `Software Engineering (SWE + platform): ~55-60% of India FTEs`,
        `Professional Services & Customer Success: ~15-20% — technical consultants, implementation`,
        `Sales & Account Management: ~10-15% — Mumbai/Hyderabad, OTE structure`,
        `Acquired company teams (Tableau, MuleSoft, Slack): significant portion of Bengaluru headcount`,
      ],
    },
    {
      heading: `Who Gets RSUs at Salesforce India: Levels & Amounts`,
      body: `Salesforce uses a Member of Technical Staff (MTS) naming convention for engineers: MTS 1 (entry), MTS 2 (mid-level), MTS 3 (senior), MTS 4 (lead/principal), and MTS 5+ (senior principal). RSU grants begin at MTS 1, but meaningful amounts start at MTS 2.

At MTS 1 (Associate Software Engineer), initial grants are typically $20,000-$40,000 over 4 years — token grants that reflect entry-level status. At MTS 2 (Software Engineer), initial grants range from $50,000 to $90,000 over 4 years. MTS 3 (Senior Software Engineer) sees initial grants of $90,000 to $160,000. MTS 4 (Lead/Principal SWE) has grants of $160,000 to $280,000.

Salesforce's refresh grants (called "annual equity refresh") are issued during the performance review cycle aligned to the fiscal year (ending January 31). Strong performers at MTS 3+ can receive refreshes of $30,000-$80,000 per year. Salesforce's refresh program is viewed as less generous than Google's or Microsoft's but more consistent than Amazon's.

Professional services consultants at senior levels receive smaller RSU grants than engineers at equivalent compensation levels — a common pattern in enterprise software companies where billable consulting roles are compensated differently.

For acquired Tableau and MuleSoft employees: they were transitioned to Salesforce's RSU program upon acquisition, with the original company's unvested options or RSUs typically converted at acquisition price. Their ongoing compensation follows the standard Salesforce framework.`,
      bullets: [
        `MTS 1 (Associate SWE): $20,000-$40,000 initial grant — nominal`,
        `MTS 2 (SWE): $50,000-$90,000 initial grant over 4 years`,
        `MTS 3 (Senior SWE): $90,000-$160,000 initial + annual refresh`,
        `MTS 4 (Lead/Principal): $160,000-$280,000 initial grant`,
      ],
      callout: `Salesforce's fiscal year ending January 31 means refresh grants are issued in February-March. This aligns with the March quarterly vest, potentially making March the largest single vest event of the year for tenured Salesforce employees. Plan your advance tax to account for a larger-than-usual March vest.`,
    },
    {
      heading: `Understanding Your Vest Schedule`,
      body: `Salesforce's RSU schedule is quarterly, but the vest months are different from most other companies: March, June, September, December. This is offset from Google/Meta/Microsoft (which vest in Feb/May/Aug/Nov) by one month. For Indian tax purposes, the key difference is that the March vest falls in the last month of the Indian FY (April-March), which requires careful advance tax planning to include it in the correct FY.

The vesting structure follows the same 1-year cliff and even quarterly distribution: 25% at month 12, 6.25% per quarter thereafter for 3 years. Total vest period is 4 years.

Salesforce's fiscal year calendar (ending January 31) creates an interesting alignment: the performance reviews are completed in January, refresh grant awards are announced in February, and those grants begin their 4-year vest clock. The first vest on a February grant happens in March of the following year — meaning a February grant creates a March vest after year 1.

One nuance for India employees: the December quarterly vest falls in Q3 of the Indian FY (October-December). The March quarterly vest falls right at the end of Q4 (January-March). Both of these vest months are important for advance tax calculations — the December advance tax instalment (due December 15) should include the December vest, and the March vest should trigger any additional advance tax payment.

Salesforce does not offer performance-vested RSUs for standard employee levels in India. All grants are time-based.`,
      bullets: [
        `Vest months: March, June, September, December — one month offset from most FAANG`,
        `1-year cliff: 25% at month 12, then 6.25% per quarter`,
        `March vest falls at Indian FY year-end — include in advance tax by March 15 payment`,
        `Refresh grants issued ~February after fiscal year close — first vest one year later`,
      ],
      callout: `Salesforce's March vest is a critical tax planning date. It falls in the last month of the Indian FY. If you under-estimate your March vest perquisite income, your ITR will show under-paid advance tax for the full FY. Always estimate your March vest before filing the March 15 advance tax instalment.`,
    },
    {
      heading: `The Tax Reality: What Your Vest Actually Costs You`,
      body: `CRM RSU vests are treated as perquisite income under Section 17(2), taxed at your applicable slab rate. For most MTS 3+ Salesforce India engineers, total income including vest perquisite exceeds ₹50 lakh, putting them in the 10% surcharge bracket. Effective rate is approximately 34.32% at ₹50-100 lakh total income.

Salesforce withholds US federal tax at 22% supplemental rate at vest. Salesforce India employees use E*TRADE (Morgan Stanley at Work) for stock plan administration — the Form 1042-S comes from MSAW showing the aggregated US withholding for the year. File Form 67 before ITR to claim FTC.

The FX rate for perquisite calculation is SBI TT buying rate on the vest date. CRM has been trading in the $250-$320 range in recent years. At $280 and ₹84/USD, a 100-share vest is worth $28,000 = ₹23.52 lakh in perquisite income. Tax at 34.32% effective rate = approximately ₹8 lakh on that event.

CRM stock's volatility (discussed further below) makes the advance tax calculation somewhat uncertain quarter-to-quarter. Use a conservative estimate based on the current price 30 days before each vest date, and adjust upward in subsequent instalments if the stock has risen significantly.

Capital gains on sale: 24-month LTCG at 20% vs STCG at slab rate. CRM's significant swings (it's been anywhere from $120 to $370 in recent years) make the LTCG vs STCG timing decision more complex — a lot purchased at a high price that has since fallen may not have meaningful gains to worry about regardless of holding period.`,
      bullets: [
        `Perquisite at vest: ~34.32% effective rate (30% slab + 10% surcharge + cess) for most`,
        `US withholding via E*TRADE: 22% — file Form 67 to claim FTC`,
        `March vest is the most tax-sensitive — falls at FY year-end, must include in advance tax`,
        `LTCG: 24 months from each lot's vest date — check whether CRM lots have gains first`,
        `Schedule FA: mandatory annual disclosure`,
      ],
      callout: `Salesforce India employees most commonly fail to account for the March vest in their advance tax calculations. The March 15 advance tax instalment is the last chance before ITR to pay up — if your March vest is large, make a significant advance tax payment that week.`,
    },
    {
      heading: `What Salesforce India Employees Typically Do With Their RSUs`,
      body: `Salesforce India employees show a mix of sell-immediately and hold behaviour, heavily influenced by the company's stock volatility and its acquisition integration challenges. CRM dropped from $311 to $127 in 2022 — a 59% fall — which, unlike at Meta (where employees stayed bullish), genuinely shook confidence in the Salesforce hold narrative.

The typical pattern post-2022: most MTS 2 and MTS 3 employees sell a majority at vest — 60-80% — prioritising tax coverage and liquidity over long-term holding. MTS 4+ employees, with larger grants and longer investment horizons, are more likely to hold selectively, particularly for lots close to LTCG qualification.

Acquired-company employees (former Tableau, MuleSoft, Slack) tend to be less emotionally attached to CRM as a stock than "native" Salesforce employees. For them, the RSU is compensation income to diversify, not a stake in a company they feel personal loyalty to.

The common mistakes: first, not adjusting the LTCG calculus for lots purchased at high cost basis — if you received CRM at $300 and it's now at $280, there's no gain to defer; sell now and take the loss (which can offset other gains). Second, conflating the Salesforce "platform value" narrative (the company is genuinely important in enterprise software) with LTCG necessity — you can believe in the company and still sell for diversification.`,
    },
    {
      heading: `The Smart Approach: A Framework for Your CRM Holdings`,
      body: `CRM's volatility argues for a more active management approach than AAPL or MSFT. The stock's high-beta nature (tends to fall more than the market in downturns) means concentration in CRM carries more risk per rupee than equivalent concentration in more stable tech blue chips.

At every quarterly vest, establish the sell-to-cover discipline: sell 34-36% for taxes. For the remaining shares, evaluate each lot's cost basis relative to current price. For lots where CRM is trading at or below cost basis — a common scenario given the 2022 drawdown — there is no tax-deferral benefit to holding. Consider selling those lots and deploying the proceeds into diversified assets.

The LTCG calculus for CRM: at current prices ($280 range), lots purchased in the $300+ range during 2021-2022 may be at a loss or marginal gain. Holding 24 months to access LTCG on a loss position makes no sense. Apply LTCG logic only to lots with meaningful unrealised gains.

On concentration: keep CRM below 15% of net worth (a slightly tighter target than the 20% standard, given CRM's higher volatility). An MTS 3 with $150,000 in CRM (vested and unvested) should be more aggressive about diversification than an equivalent MSFT holder.

The repatriation discipline is the same: quarterly transfers via LRS, within 30 days of vest events. Given Salesforce's March/June/September/December schedule, the quarterly cadence is natural.`,
      bullets: [
        `Sell to cover taxes at vest: 34-36% of shares`,
        `Evaluate cost basis on each lot — don't hold loss lots 24 months for LTCG that doesn't exist`,
        `Cap CRM at 15% of net worth — higher volatility than FAANG blue chips warrants tighter limit`,
        `March vest: file advance tax immediately before vest settles — FY year-end timing`,
        `Repatriate quarterly: March/June/September/December aligned with vest schedule`,
        `Form 67 FTC: aggregate all four vest quarters from Form 1042-S`,
      ],
    },
    {
      heading: `Concentration Risk: Why This Matters More Than You Think`,
      body: `Salesforce faces more fundamental business risk than FAANG hardware-software companies. The CRM market is competitive — Microsoft Dynamics, HubSpot, SAP, and vertical SaaS companies are all taking share in specific segments. AI-native CRM startups (using LLMs to automate sales workflows) pose a genuine disruption threat to Salesforce's core value proposition of structured data management.

Salesforce's aggressive acquisition strategy (Tableau $15.7B, MuleSoft $6.5B, Slack $27.7B) has created significant goodwill on its balance sheet. If these acquisitions underperform or if AI reduces the value of integrated workflow tools, goodwill impairment could materially reduce reported earnings.

The specific risk for Salesforce India employees: Slack's growth has disappointed post-acquisition, and there have been restructuring efforts in the Slack organisation. MuleSoft faces competition from cheaper API management tools. If Salesforce restructures any of its India acquired-company teams, Bengaluru employees in Tableau/MuleSoft/Slack engineering are at higher risk than core CRM engineers in Hyderabad.

CRM dropped 59% in 2022 — from $311 to $127. An MTS 3 with $150,000 in vested CRM saw it become $61,500. The ₹7.4 crore to ₹3 crore wealth compression is real and has been experienced by long-tenure Salesforce India employees in living memory.`,
      callout: `Real scenario: CRM fell 59% in 2022. An MTS 3 with $150K vested lost ~$88,500 (~₹7.4 crore). This happened in one calendar year. CRM's enterprise software premium valuation makes it susceptible to earnings disappointments in ways that more diversified tech businesses are not. 15% concentration limit is appropriate.`,
    },
    {
      heading: `Getting Money Home: FX & Repatriation`,
      body: `Salesforce India employees use E*TRADE (Morgan Stanley at Work) for stock plan administration, with the standard $25-35 international wire fee. The FX spread from Indian banks adds 1.5-2% on incoming transfers.

The quarterly vest schedule (March/June/September/December) aligns naturally with a quarterly repatriation cadence. Process the repatriation within 30 days of each vest event — March vest proceeds arrive by late March/early April, June vest by late June/early July, and so on.

The March vest repatriation has a particular feature: it falls at or just after Indian FY year-end. Proceeds from the March vest, if repatriated in April, fall in the new FY for advance tax purposes (the RSU perquisite was in the old FY, but the repatriation itself is just moving cash). This is fine and normal — no confusion needed.

Form 15CA and Form 15CB are required for transactions exceeding ₹10 lakh. For most MTS 3+ Salesforce employees vesting quarterly, the quarterly transfer amount typically exceeds ₹10 lakh, so plan for CA documentation at each quarterly repatriation.

Rovia's 0% FX markup vs typical bank spread of 1.5% saves approximately ₹1.05 lakh per $100,000 transferred. For an MTS 3 repatriating $80,000 per year in quarterly tranches, this is approximately ₹84,000 in annual savings.`,
    },
    {
      heading: `Stock Sentiment Among Salesforce India Employees`,
      body: `Sentiment among Salesforce India employees is mixed — more cautiously optimistic than bullish. The 2022 crash and subsequent recovery have left a residue of caution. Most employees recognise Salesforce's core business (enterprise CRM) as durable, but the stock's premium valuation and the acquisitions' integration challenges create uncertainty about sustained growth.

The Slack acquisition remains a source of internal anxiety. Slack's integration into the Salesforce platform has been slow, and Slack employees globally (including Bengaluru) have experienced multiple rounds of restructuring. On Blind, Slack India employees express more job security concern than core Salesforce India employees.

The golden handcuffs at Salesforce work similarly to other FAANG companies — MTS 3+ employees with 3+ years of unvested refreshes find it financially costly to leave. However, Salesforce's compensation has fallen somewhat behind the top FAANG in India (Meta, Google) in recent cycles, which is driving some attrition from engineers who receive competitive counter-offers.

Marc Benioff's leadership and the "Ohana" (Hawaiian family) culture are either loved or seen as performative depending on the employee — it divides Salesforce India employees in a way not seen at Google or Microsoft. Those who identify with the culture tend to hold CRM long-term; those who find it performative treat RSUs purely as compensation to diversify.

Typical tenure at Salesforce India is 4-6 years. Many engineers who leave go to Bengaluru startups using Salesforce technology or to direct enterprise software competitors. CRM lots accumulated over those 4-6 years, if mostly held, create a significant position that often triggers a "what do I do with all this CRM" question at departure.`,
    },
  ],
};
