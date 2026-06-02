// Rich guide content for each company page.
// Each company gets: sentiment, diversifyReason, stockContext, hasEspp
// Shared: India tax content (rendered from template in GuideContent component)

export const companyGuides = {

  google: {
    hasEspp: true,
    sentiment: `Alphabet (GOOGL) is Wall Street's go-to bet on AI monetisation. Google Search still commands 90%+ global share, and Cloud is accelerating past 30% revenue growth. Analysts broadly expect $2.4T+ market cap within 18 months as AI Overviews begin carrying advertising revenue. Short-term risk: DOJ antitrust proceedings on Search remedies (late 2025) and potential Chrome divestiture.`,
    stockContext: `GOOGL has compounded at ~17% annually over the last 5 years. The stock re-rated sharply through 2023–24 on Gemini model launches and Cloud momentum. At ~22× forward earnings, valuation is below historic median — a relative rarity for a mega-cap platform. For Indian employees: every $1 of GOOGL appreciation today costs you roughly ₹84 in FX conversion later, plus broker fees.`,
    diversifyReason: `GOOGL represents one of the most concentrated single-stock risks in tech. A DOJ-mandated Search remedy, an AI search disruption event (Perplexity, OpenAI), or a Cloud contract cancellation can move the stock 10–15% in a session. Indian Googlers who have been at the company 4+ years often have 70–90% of net worth in GOOGL — a correlation to one regulatory case.`,
    taxHighlights: `Google RSUs vest quarterly. Each vest is perquisite income — taxed in India at your slab rate (~35.88% all-in for senior Google ICs in the 15% surcharge band) at the vest-day market price using the RBI TT buying rate. When you sell: if held >24 months from vest date → LTCG at 12.5% flat (Finance Act 2024 removed indexation effective July 23, 2024). If <24 months → STCG at slab rate. Schedule FA disclosure is mandatory for ALL foreign holdings — no minimum threshold — using the calendar year (Jan–Dec) as the accounting period.`,
  },

  meta: {
    hasEspp: true,
    sentiment: `Meta's "Year of Efficiency" paid off spectacularly — operating margins expanded from 20% in 2022 to 38%+ by 2024. Reality Labs burns ~$5B/quarter but the core advertising business is a cash machine. Llama models are increasingly the open-weight AI of choice for enterprise, creating a flywheel that locks developers into Meta's ecosystem. Regulatory risk (EU DMA, FTC antitrust) is the main overhang.`,
    stockContext: `META tripled from its 2022 lows to $500+. The current consensus analyst target sits in the $680–$750 range, implying 30–40% upside from mid-2024 levels. The Reels advertising ramp and WhatsApp Business monetisation are two underappreciated revenue lines that analysts are increasingly modelling. For Indian employees vesting in 2024–26: the 24-month LTCG clock means careful lot selection matters.`,
    diversifyReason: `All of Meta's revenue flows through one mechanism — digital advertising. An advertiser pullback (2022 proved this), iOS privacy changes (ATT cost Meta ~$10B in one year), or a US social media regulation event can reset years of gains. Indian Meta employees typically vest large chunks — ₹50–100L per quarter at senior IC levels. Holding all of it in META is a single advertiser-concentration risk.`,
    taxHighlights: `Meta RSUs vest quarterly. Vest-day value is perquisite income, taxed at your slab (~35.88% all-in for senior ICs with surcharge) using the RBI TT buying rate. Shares held >24 months from vest qualify for LTCG at 12.5% flat (Finance Act 2024 removed indexation effective July 23, 2024). Shares sold within 24 months face STCG at slab rate. Meta initiated a small quarterly dividend in early 2024 — Form 67 may now apply if US withholding occurred. Schedule FA is required annually for ALL Indian residents holding foreign equity (no minimum threshold; calendar-year accounting period).`,
  },

  microsoft: {
    hasEspp: true,
    sentiment: `Microsoft's Copilot integration across M365, Azure, and GitHub is the most credible enterprise AI monetisation story in the market. Azure AI revenue is growing faster than the underlying cloud business. The Activision acquisition gives MSFT a gaming footprint that analysts haven't fully priced in. MSFT trades at a premium to peers but has historically earned it — 99%+ renewal rates on enterprise contracts are exceptional.`,
    stockContext: `MSFT has been range-bound ($380–$440) since late 2024 as markets digest the Activision integration and OpenAI relationship complexity. Consensus target: ~$510, implying 20–25% upside. The Azure growth re-acceleration in 2025 is the key catalyst to watch. For Indian employees: MSFT is one of the most liquid US stocks — block trades settle in T+2, making it easier to manage lot-level tax strategy.`,
    diversifyReason: `Microsoft's enterprise contracts mean revenue is unusually visible — but so are the risks. Azure losing share to AWS or GCP, a deterioration in the OpenAI relationship, or enterprise IT budget cuts all matter. Indian Microsoft employees in Hyderabad and Bengaluru tend to have been with the company 6–10 years, making MSFT potentially 80–90% of their US equity portfolio.`,
    taxHighlights: `Microsoft RSUs vest quarterly (Feb/May/Aug/Nov). Each vest tranche is taxable as perquisite at slab rate. ESPP discount at purchase is also a perquisite — taxed in the purchase year. For capital gains: >24 months = LTCG at 12.5% flat (Finance Act 2024 removed indexation effective July 23, 2024), <24 months = STCG at slab rate. MSFT pays a modest quarterly dividend — Form 67 filing recommended to claim FTC on the 25% US withholding under DTAA.`,
  },

  amazon: {
    hasEspp: false,
    sentiment: `Amazon's back-weighted vest schedule (5%/15%/40%/40%) means Indian Amazonian RSU exposure ramps dramatically in years 3–4. AWS continues to dominate at 31%+ cloud market share. The advertising business crossed $50B/year and is growing 20%+. Retail margin recovery is the main 2025 story — operating income from NA Retail has recovered to historic highs. Analyst targets: $230–$270.`,
    stockContext: `AMZN has retraced from 2021 highs but the business is fundamentally stronger. AWS margin expansion, Advertising mix shift, and Kuiper (satellite) are three growth vectors not present in 2021. The stock trades at ~35× forward earnings — high vs. traditional retail, but low vs. a cloud/ad compounder. For Indian employees: Amazon's back-weighted vesting creates a large Year 3–4 tax event — planning ahead is critical.`,
    diversifyReason: `Amazon's vest structure means many Indian employees suddenly receive 2–3× their usual RSU value in years 3–4. Holding this entirely in AMZN creates a sudden, large, highly correlated position. AWS revenue concentration (responsible for 60%+ of total operating income) means any hyperscaler slowdown hits AMZN disproportionately.`,
    taxHighlights: `Amazon RSUs follow a back-weighted schedule. Larger vests in years 3–4 mean significantly higher perquisite income in those years — tax planning with a CA in advance is highly recommended. Amazon does not offer ESPP. Selling within 24 months of vest: STCG at slab rate. Post-24 months: LTCG at 12.5% flat (Finance Act 2024 removed indexation effective July 23, 2024). Schedule FA is compulsory for all foreign holdings (no minimum threshold).`,
  },

  apple: {
    hasEspp: true,
    sentiment: `Apple's services business ($100B+ ARR) trades at a higher multiple than the hardware segment, and the market is still learning to value this correctly. iPhone 16 cycle underwhelmed but the installed base (2.2B devices) is stickier than ever. The India manufacturing ramp is a real strategic hedge against China concentration. Analyst consensus: $240–$260, implying 10–15% upside from current levels.`,
    stockContext: `AAPL is the world's largest company by market cap and has historically been one of the most tax-efficient holds — Warren Buffett's long hold thesis. For Indian residents, the math changes: every year you don't move AAPL to a tax-advantaged structure, you're rebuilding lot-level INR cost basis manually. The stock's low beta (0.95) means it's one of the calmer single-stock risks in this list.`,
    diversifyReason: `Despite the "quality" perception, AAPL is an 80%+ consumer hardware revenue business. A recession, a regulatory tariff on Chinese-made phones, or a generational shift away from iPhone can move the stock 20%+ in months. Indian Apple employees at Cupertino and Hyderabad offices have significant exposure.`,
    taxHighlights: `Apple RSUs vest quarterly. The ESPP has a 15% discount and 6-month offering period with lookback. Perquisite tax applies at vest and at ESPP purchase, at slab rate. Capital gains: >24 months = LTCG at 12.5% flat (Finance Act 2024 removed indexation); <24 months = STCG at slab rate. Apple pays a small quarterly dividend — Form 67 filing recommended to claim the foreign tax credit on the 25% US withholding under DTAA. Schedule FA is required for ALL foreign holdings (no minimum threshold).`,
  },

  netflix: {
    hasEspp: false,
    sentiment: `Netflix's ad-supported tier crossed 40M monthly active users by mid-2024, validating the pivot. Password sharing crackdown added 9M+ subscribers in a single quarter. The live events push (WWE Raw, NFL games) is a content moat that competitors can't replicate quickly. Analyst consensus target: $800–$900. Risk: content spend remains $17B+/yr and any subscriber plateau would hit sentiment hard.`,
    stockContext: `NFLX has been one of the best-performing FAANG stocks since the 2022 lows, up 3× from the $160 bottom. The shift to a more diversified revenue model (ads + live) reduces the subscriber-count obsession that used to drive extreme volatility. For Indian Netflix employees: the monthly vest cycle is unique — 12 vest events per year means 12 INR cost basis records to track annually.`,
    diversifyReason: `Netflix operates in a market where competitive intensity never decreases. Disney+, Max, Amazon Prime and Apple TV+ all compete for the same consumer hour. A content failure season, a macro consumer spending tightening, or a saturation in core markets can swing NFLX 30–40%. Indian employees on the monthly vest cycle accumulate a lot of small lots — Rovia's lot-level tracking is especially useful here.`,
    taxHighlights: `Netflix RSUs vest monthly — unique among FAANG. This means 12 separate cost basis records per year, each requiring INR conversion at the vest-day RBI TT buying rate. Netflix pays no dividend, so Form 67 is not relevant. LTCG at 12.5% flat (Finance Act 2024, no indexation) applies if each lot is held >24 months from the specific vest date. STCG at slab rate for lots sold earlier. Schedule FA is required for all foreign holdings (no minimum threshold).`,
  },

  salesforce: {
    hasEspp: true,
    sentiment: `Salesforce's Agentforce AI platform launch in 2024 reignited investor enthusiasm after two years of "activist pressure to cut costs" narrative. Operating margins expanded from 3% in FY21 to 30%+ in FY25. The company now generates $10B+ in free cash flow. Analyst consensus: $330–$360. Risk: AI-native CRM competitors (Hubspot AI, ServiceNow) eroding the SMB segment.`,
    stockContext: `CRM has been range-bound post the $300 level as the market debates whether Agentforce represents a genuine platform shift or a feature upgrade. The data cloud and customer 360 initiatives are underappreciated sources of switching cost moat. For Indian Salesforce employees: CRM's fiscal year ends January, creating unusual vest timing relative to India's April–March financial year.`,
    diversifyReason: `Salesforce is a single-product-category company — CRM and adjacent workflows. An enterprise software slowdown, Microsoft Dynamics gaining ground, or a major data breach could catalyse a 20–30% correction. Indian employees at the Hyderabad and Mumbai offices are an increasingly significant part of global headcount.`,
    taxHighlights: `Salesforce RSUs vest quarterly. ESPP discount applies at the end of each offering period. Perquisite tax on both at slab rate. Capital gains: >24 months LTCG at 12.5% flat (Finance Act 2024, no indexation), <24 months STCG at slab rate. Salesforce initiated a quarterly dividend in 2024 — Form 67 may now apply if US withholding occurred. Schedule FA required for all foreign holdings (no minimum threshold).`,
  },

  servicenow: {
    hasEspp: true,
    sentiment: `ServiceNow's Now Platform is the workflow layer for enterprise IT — and increasingly, enterprise AI. The company is growing revenue at 22%+ with 98%+ renewal rates. AI Pro SKUs are commanding 50% premium pricing over standard licences. Analyst consensus: $1,100+. Risk: federal government spending cuts hitting ITSM budgets (US gov is ServiceNow's largest vertical).`,
    stockContext: `NOW has been one of the most consistent compounders in enterprise SaaS — it has never missed a quarterly revenue guidance. For Indian employees: the stock's high absolute price (>$900/share) means fewer shares vest, but each share carries significant INR exposure. The 24-month LTCG clock is worth tracking carefully at this price level.`,
    diversifyReason: `ServiceNow's business model is sticky but concentrated in enterprise IT spend. Any prolonged IT budget freeze (as happened in 2023), a Microsoft Teams/Power Automate displacement in workflow, or a government customer loss can materially reset estimates. Concentration in one stock at $900+ per share magnifies per-share INR exposure.`,
    taxHighlights: `ServiceNow RSUs vest quarterly. No dividend currently — Form 67 not applicable. Standard India RSU tax treatment: vest = perquisite income at slab; sale <24 months = STCG at slab; sale >24 months = LTCG at 12.5% flat (Finance Act 2024, no indexation). Schedule FA mandatory for all foreign holdings (no minimum threshold).`,
  },

  paypal: {
    hasEspp: true,
    sentiment: `PayPal is in a turnaround mode under CEO Alex Chriss. Branded checkout conversion improvements and Fastlane (guest checkout) are showing early traction. Venmo monetisation remains an upside optionality. Analyst consensus: $80–$90. Risk: Apple Pay, Google Pay, and Shop Pay continue gaining share at checkout; crypto wallet competition from Coinbase/MetaMask.`,
    stockContext: `PYPL has significantly de-rated from its $300 peak — it now trades at 14× forward earnings, one of the cheapest large-cap fintech valuations. The risk/reward is increasingly asymmetric if the turnaround executes. For Indian employees: PayPal is headquartered in San Jose but has significant India headcount. Vest cycles are quarterly.`,
    diversifyReason: `PayPal operates in payments — one of the most competitive and commoditised segments in tech. Any acceleration by Apple, Google, or Amazon in checkout displacement, or a regulatory action on Venmo, can move the stock materially. A single-stock concentration in PYPL at current levels carries meaningful downside risk.`,
    taxHighlights: `PayPal RSUs vest quarterly. No dividend. Standard perquisite tax at vest (slab rate); LTCG at 12.5% flat post-24-months (Finance Act 2024); STCG at slab rate pre-24-months. Schedule FA required for all foreign holdings (no minimum threshold).`,
  },

  uber: {
    hasEspp: true,
    sentiment: `Uber's path to profitability completed in 2023 — the company now generates positive free cash flow and is returning capital through buybacks. Autonomous vehicle partnerships (Waymo, WeRide) are a strategic hedge rather than a near-term risk. The advertising and Uber One subscription businesses are underappreciated. Analyst consensus: $85–$100.`,
    stockContext: `UBER has re-rated from a "cash burning unicorn" to a profitable compounder narrative. International ride-hailing (Latin America, India) and Uber Eats continue to scale. For Indian employees: Uber has a large Bengaluru engineering hub and many employees received significant equity early in their careers — those lots are likely now highly appreciated.`,
    diversifyReason: `Ride-hailing is operationally intensive and geographically diverse — a single regulatory shock in a large market (e.g., EU driver reclassification) or a self-driving vehicle accident can reset narrative quickly. Early Uber employees with pre-IPO equity have already made multi-generational gains; protecting that through diversification is worth considering.`,
    taxHighlights: `Uber RSUs vest quarterly. ESPP available. Standard India tax: perquisite at vest (slab), LTCG at 12.5% flat post-24-months (Finance Act 2024, no indexation), STCG at slab rate. Schedule FA is required for all foreign holdings — there is no minimum threshold.`,
  },

  adobe: {
    hasEspp: true,
    sentiment: `Adobe's Firefly generative AI is the first enterprise creative AI to be commercially cleared (trained on licensed content only). The company blocked Figma acquisition under regulatory pressure but the core DTC + Creative Cloud business remains the design monopoly. Analyst consensus: $430–$480. Risk: Canva AI, Figma's own AI, and open-source generative tools commoditising design workflows.`,
    stockContext: `ADBE re-rated down after the Figma deal collapse but the core business is intact. Firefly integration into Creative Cloud is driving higher-tier plan upgrades. At 25× forward earnings, ADBE trades at a discount to its historical range — the AI products could re-rate the multiple back toward 35×. For Indian employees: Adobe has a large Noida office.`,
    diversifyReason: `Adobe's revenue depends on creative professionals not switching platforms. Canva's 200M user freemium model threatens the SMB and education segments; enterprise stickiness remains but requires continuous innovation to defend.`,
    taxHighlights: `Adobe RSUs vest quarterly. ESPP with 15% discount. Standard India tax: perquisite at vest (slab), LTCG at 12.5% flat post-24-months (Finance Act 2024), STCG at slab rate. Dividend-free — Form 67 not applicable. Schedule FA required for all foreign holdings (no minimum threshold).`,
  },

  oracle: {
    hasEspp: true,
    sentiment: `Oracle's cloud infrastructure (OCI) is gaining ground as the hyperscaler-agnostic option for regulated industries — healthcare, defence, finance. The Cerner acquisition is beginning to contribute meaningfully. AI training workloads are flowing to OCI because of pricing advantages vs AWS/Azure. Analyst consensus: $165–$185.`,
    stockContext: `ORCL has been one of the surprise performers of 2023–24, up 70%+ as the OCI narrative took hold. For Indian employees: Oracle has a large India headcount and vest cycles are quarterly. The stock's recent multiple expansion means new grants are at elevated strike prices.`,
    diversifyReason: `Oracle's legacy on-premise database business is structurally declining — growth depends entirely on Cloud migration success. Any slowdown in OCI wins or Cerner underperformance would reset the valuation narrative significantly.`,
    taxHighlights: `Oracle RSUs vest quarterly. ESPP available. Standard India tax: perquisite at vest (slab), LTCG at 12.5% flat post-24-months (Finance Act 2024), STCG at slab. Oracle pays a dividend — Form 67 recommended to claim FTC on the 25% US withholding under DTAA. Schedule FA required for all foreign holdings (no minimum threshold).`,
  },

  intuit: {
    hasEspp: true,
    sentiment: `Intuit's AI-powered TurboTax, QuickBooks, and Credit Karma platform has a 50M+ consumer and SMB customer base. The Done-For-You tax service and AI financial assistant are expanding ARPU. Analyst consensus: $640–$700. Risk: IRS Direct File program threatens TurboTax, and Microsoft/Google could build adjacent SMB accounting.`,
    stockContext: `INTU is a slow-but-steady compounder — it's never had a revenue contraction year in public market history. The combination of tax, accounting, and now consumer credit data creates a financial OS for small businesses. For Indian employees: Intuit has a significant Mountain View + Bengaluru presence.`,
    diversifyReason: `Intuit's TurboTax dominance faces a structural regulatory threat from IRS Direct File. Any acceleration of government-provided free tax filing would materially impair Intuit's largest revenue segment.`,
    taxHighlights: `Intuit RSUs vest quarterly. ESPP with lookback feature. Standard India tax: perquisite at vest (slab), LTCG at 12.5% flat post-24-months (Finance Act 2024), STCG at slab. Intuit pays a modest dividend — Form 67 applies for FTC on 25% US withholding. Schedule FA required for all foreign holdings (no minimum threshold).`,
  },

  intel: {
    hasEspp: true,
    sentiment: `Intel is in a multi-year turnaround under Pat Gelsinger's IDM 2.0 strategy. The 18A process node is seen as critical — if it succeeds, INTC regains domestic manufacturing leadership. CHIPS Act grants of $8.5B provide downside floor. Analyst consensus is cautiously optimistic at $22–$35. Risk: foundry customer wins remain thin; AMD and ARM continue taking server market share.`,
    stockContext: `INTC has underperformed dramatically vs. AMD and NVDA since 2018. The stock has been range-bound at $18–$25 for much of 2024. For Indian Intel employees: many long-tenured employees have significant unvested grants at higher grant prices — careful tax planning on below-grant-price vests is important.`,
    diversifyReason: `Intel faces existential threats from ARM (server CPUs), TSMC (foundry), AMD (PC/data centre), and NVIDIA (AI accelerators) simultaneously. A failed 18A node or a major foundry customer cancellation could trigger a significant re-rating.`,
    taxHighlights: `Intel RSUs vest quarterly. ESPP with 15% discount and lookback. Standard India tax: perquisite at vest (slab), LTCG at 12.5% flat post-24-months (Finance Act 2024), STCG at slab. Intel suspended its dividend in August 2024 — Form 67 is not currently applicable for new periods. Schedule FA required for all foreign holdings (no minimum threshold).`,
  },

  // ── Default for remaining 35 companies ────────────────────────────────────
};

// Shared India tax education content (used across all company pages)
export const indiaTaxGuide = {
  title: 'India tax guide for US RSU holders',
  sections: [
    {
      heading: "RSU vesting: it's taxable income on Day 1",
      body: `When your RSUs vest, the fair market value of shares on the vest date is treated as a perquisite — a form of salary income under India's Income Tax Act. This means you owe tax in the year of vesting, regardless of whether you sell. The taxable amount is the number of shares vested × vest-day closing price, converted to INR using the SBI TT buying rate on that date.

Most Indian employees at US tech companies are in the 30% slab plus 4% health and education cess, bringing the effective perquisite tax rate to 31.2%. Your employer's US payroll typically withholds a portion via sell-to-cover, but you must self-assess any balance in your India ITR.`,
    },
    {
      heading: 'Capital gains: the 24-month rule that most employees miss',
      body: `India taxes capital gains on foreign shares differently from the US. In the US, long-term capital gains kick in at 12 months. In India, foreign shares must be held for 24 months to qualify as long-term capital assets.

Short-term capital gains (STCG) — shares held less than 24 months from the vest date — are taxed at your income tax slab rate. For a senior IC in the 30% slab with 15% surcharge, that's approximately 35.88% all-in. Long-term capital gains (LTCG) on foreign shares are taxed at a flat 12.5% under the Finance (No. 2) Act, 2024, effective July 23, 2024 — the prior 20%-with-indexation regime was replaced and indexation was removed entirely. With surcharge and cess on top, the all-in LTCG rate sits around 14–15% for high earners.

The 24-month clock starts from the vest date (not the grant date). Each lot vests separately, so careful lot tracking is essential.`,
    },
    {
      heading: 'Schedule FA: the foreign asset disclosure most people skip',
      body: `Schedule FA (Foreign Assets) in the ITR must be filed by every Indian resident & ordinarily resident who holds any foreign asset — including US stocks — at any time during the relevant accounting period. There is no minimum threshold for disclosure: even a single share triggers filing. The accounting period for Schedule FA is the calendar year (January 1 – December 31), not the Indian financial year — a quirk that catches almost every first-time filer.

Failure to disclose is treated as a violation under the Black Money (Undisclosed Foreign Income and Assets) Act, 2015, with penalties of ₹10 lakh per year under Section 43, prosecution risk under Section 50 (up to 7 years), and reassessment open for up to 10 years under Section 149(1)(c). The Income Tax Department now receives end-of-year balances directly from US financial institutions via the Common Reporting Standard, so non-filing is increasingly mechanically detectable.

Schedule FA requires per-lot disclosure: name of the foreign entity, country code, acquisition date, initial value (INR at vest-day RBI TT rate), peak value during the calendar year, closing value at Dec 31, and any sale proceeds during the period. Rovia auto-generates Schedule FA data at filing time.`,
    },
    {
      heading: 'Form 67 and the foreign tax credit',
      body: `If your US stocks pay dividends, the US withholds 30% (or 25% if you have filed a W-8BEN, as all Rovia account holders do). India also taxes dividend income at your slab rate. To avoid double taxation, you can claim a Foreign Tax Credit (FTC) by filing Form 67.

Form 67 must be filed before the ITR due date — not after. It requires the dividend amount, the US tax withheld, and the exchange rate on the dividend payment date. Rovia tracks dividends lot-by-lot to produce Form 67-ready data.`,
    },
    {
      heading: 'The INR cost basis problem: why it matters',
      body: `Your broker (Schwab, E*TRADE, Fidelity, Morgan Stanley) maintains your cost basis in USD. But India's capital gains calculation requires INR cost basis, converted using the SBI TT buying rate on the vest date of each lot.

For a 4-year employee with quarterly vesting, this means 16 individual lots, each with a different USD price, different exchange rate, and different 24-month clock. Getting this wrong — even by using the wrong exchange rate — constitutes an incorrect ITR filing.

Rovia applies SBI TT rates automatically at each vest date and maintains lot-level INR cost basis. Your CA gets a ready-to-file summary rather than a 1099-B in USD.`,
    },
  ],
};
