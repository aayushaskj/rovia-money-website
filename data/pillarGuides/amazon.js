export const guide = {
  title: `Amazon India RSU Guide: Tax, Back-Weighted Vesting & What To Do With Your AMZN Stock`,
  lastUpdated: `May 2026`,
  intro: `Amazon is among the largest private employers in India with over 100,000 employees spread across Hyderabad, Bengaluru, Chennai, Pune, and Gurgaon. For SDE L4+ and L5+ engineers, RSUs are central to compensation — but Amazon's back-weighted vesting schedule creates a unique cash flow challenge that catches many new hires off guard. This guide explains exactly how Amazon's vest schedule works, the Indian tax implications, and how to manage your AMZN holdings without making the classic mistakes.`,
  keyStats: [
    { label: `India headcount`, value: `~100,000+` },
    { label: `Primary cities`, value: `Hyderabad, Bengaluru, Chennai` },
    { label: `RSU vest schedule`, value: `Back-weighted: 5/15/40/40` },
    { label: `Ticker / Exchange`, value: `AMZN / NASDAQ` },
    { label: `Vest cliff`, value: `1 year` },
  ],
  sections: [
    {
      heading: `Amazon in India: Offices, Cities & Scale`,
      body: `Amazon's India footprint is exceptional in scale, though the nature of headcount varies significantly by city. Hyderabad is Amazon's largest single India engineering hub, with approximately 40,000 employees working on AWS cloud services, Alexa devices and NLP, Prime Video India, and Amazon.in e-commerce platform. The Hyderabad Development Centre (HDC) in Hyderabad is one of Amazon's largest outside Seattle and was established over 20 years ago.

Bengaluru houses roughly 25,000 employees — a mix of AWS engineering, Amazon Pay, Amazon Fresh tech, and some Alexa India teams. The Bengaluru office is Amazon's most startup-proximate and has historically been the source of many Amazon India employees who moved to Bengaluru's broader tech ecosystem.

Chennai has approximately 15,000 employees, many in Amazon's finance and accounting operations (F&A), customer service operations, and some tech roles. Chennai is less engineering-dominated compared to Hyderabad or Bengaluru. Pune has around 8,000 employees across operations tech, HR systems, and some product teams.

Gurgaon and Mumbai house Amazon India's commercial operations — Amazon India marketplace, advertising, and enterprise business teams. These roles are less engineering-focused.

Amazon's India presence includes a large operations and logistics workforce that is not counted in the ~100,000 figure — the actual Amazon India footprint including warehouse operations, last-mile delivery, and operational staff is far larger. The ~100,000 quoted typically refers to white-collar office employees.`,
      bullets: [
        `Hyderabad: ~40,000 — AWS engineering, Alexa, Prime Video, Amazon.in platform`,
        `Bengaluru: ~25,000 — AWS, Amazon Pay, Amazon Fresh, Alexa India`,
        `Chennai: ~15,000 — Finance & Accounting ops, customer service, some tech`,
        `Pune: ~8,000 — operations tech, HR systems, some product`,
        `Gurgaon/Mumbai: ~5,000 — Amazon India marketplace, ads, enterprise sales`,
      ],
    },
    {
      heading: `Department Mix: Who Works at Amazon India`,
      body: `Amazon India's scale means an unusually diverse mix of roles. Software engineering (SDE and SDE-adjacent) accounts for roughly 45-55% of India FTEs — lower than at Google or Meta India because Amazon has significant F&A operations, customer service, HR shared services, and business operations teams that don't exist at the same scale at other FAANG companies.

AWS engineering is the highest-value organisation within Amazon India. AWS SDEs in India work on core AWS services (EC2, S3, Lambda, RDS), AWS AI/ML services, and Amazon Connect contact centre. These are globally competitive engineering roles with compensation to match.

Finance and accounting operations (F&A) in Chennai and Hyderabad are large functions — Amazon centralises global financial operations in India. These roles are typically in the L4-L5 band for senior individual contributors and L6+ for managers, but RSU grants in F&A are smaller than in SDE at equivalent bands.

Operations technology (building tech for Amazon warehouses and supply chain) is a growing team across multiple India offices. These are engineering roles but with a domain-specific focus. Alexa India teams (NLP, speech recognition for Indian languages) are in Hyderabad.

Amazon's leadership in India is well-established — many L6-L7 SDEs and senior PMs at Amazon India have 8-12 year tenures and have moved through the promotional ladder entirely within India, making Amazon India one of the few FAANG operations where a full engineering career is viable without a US stint.`,
      bullets: [
        `Software Engineering (SDE): ~45-55% of India FTEs — AWS is the largest single engineering org`,
        `Finance & Accounting Operations: ~15-20% — Chennai/Hyderabad heavy, strong but lower equity`,
        `Customer Service & Operations: ~10-15% — mostly Chennai, support function, limited RSUs`,
        `Product & Program Management: ~8-10% — Prime Video India, Amazon.in, AWS India`,
      ],
    },
    {
      heading: `Who Gets RSUs at Amazon India: Levels & Amounts`,
      body: `Amazon's levels are L4 (SDE I), L5 (SDE II), L6 (SDE III/Senior), L7 (Principal SDE). RSU grants begin at L4, though the amounts at L4 are modest. The meaningful RSU compensation at Amazon kicks in at L5, which is the level where the back-weighted vest schedule starts to matter significantly.

At L4 (SDE I), initial grants typically range from $25,000 to $60,000 over 4 years. The low end of L4 grants, combined with the back-weighted schedule (5% in year 1, 15% in year 2), means an L4 SDE receives very little equity in their first 24 months at Amazon. This is a deliberate compensation structure — Amazon front-loads signing bonuses relative to base salary to compensate.

At L5 (SDE II), initial grants range from $60,000 to $120,000. At L6, initial grants are typically $120,000 to $250,000 over 4 years. L7 (Principal) sees $250,000 to $500,000+. Annual refresh grants at Amazon are given during the annual review cycle and can be significant for sustained high performance, but Amazon is not as consistent with refreshes as Google or Microsoft.

F&A operations roles, customer service managers, and operations roles below L5 typically receive no RSUs or very small grants. Senior program managers and TPMs at L6+ do receive RSUs comparable to SDE at the same level.`,
      bullets: [
        `L4 (SDE I): $25,000-$60,000 initial grant — but only 5% vests in year 1`,
        `L5 (SDE II): $60,000-$120,000 initial grant — 20% vests in years 1-2 combined`,
        `L6 (SDE III/Senior SDE): $120,000-$250,000 initial grant`,
        `L7 (Principal SDE): $250,000-$500,000+ initial grant`,
      ],
      callout: `L4 and L5 Amazon hires are often surprised by how little equity they receive in their first two years — the 5/15/40/40 back-weighted schedule means 80% of your RSUs vest in years 3 and 4. This is why Amazon's base salary and signing bonuses are higher than FAANG peers — it's compensating for the front-loaded cash shortage.`,
    },
    {
      heading: `Understanding Your Vest Schedule`,
      body: `Amazon's vest schedule is unique among major FAANG companies: it is deliberately back-weighted. The 4-year schedule distributes vesting as follows: 5% of the total grant vests after Year 1, 15% vests after Year 2, 40% vests after Year 3, and 40% vests after Year 4.

Year 3 and Year 4 are each split into two semi-annual vests of 20% each, occurring in May and November (or February and August depending on your hire date). This means vesting is not strictly quarterly like at Google or Meta — the specific months depend on your anniversary date.

The practical consequence: an SDE II joining Amazon with a $100,000 RSU grant receives $5,000 worth of stock (at grant price) after Year 1, $15,000 after Year 2, $40,000 in Year 3 (two $20,000 tranches), and $40,000 in Year 4. The Year 1 vest is often experienced as a disappointment relative to the total grant advertised during offer negotiation.

Amazon issues refresh grants ("Amazon Restricted Stock Units top-up") in a less regular cadence than Google or Microsoft. Strong performers may receive annual refreshes, but the amounts are less predictable. Many Amazon India SDEs report that the refresh program is less robust than they expected, making the initial 4-year grant more critical.

If you leave Amazon before Year 3, you're forfeiting the majority of your grant — 80%. This is a stronger golden handcuff than at companies with even vesting. Many Amazon India employees reach Year 2 and feel trapped because "most of my grant hasn't vested yet."`,
      bullets: [
        `Year 1: 5% of grant vests (semi-annual, Month 12)`,
        `Year 2: 15% of grant vests (semi-annual, Month 24)`,
        `Year 3: 40% of grant vests in two 20% tranches`,
        `Year 4: 40% of grant vests in two 20% tranches`,
      ],
      callout: `Amazon's back-weighted schedule means your first two years deliver only 20% of your total grant. Before accepting an Amazon offer, model out your annual RSU income for all 4 years — year 1 and 2 RSU income is drastically lower than year 3 and 4.`,
    },
    {
      heading: `The Tax Reality: What Your Vest Actually Costs You`,
      body: `Amazon's back-weighted schedule means your perquisite tax burden is heavily concentrated in Years 3 and 4. In Year 1, your perquisite from RSUs is modest — 5% of a $100,000 grant at, say, $3,400 AMZN price = about $5,000 worth of stock = ~₹4.2 lakh in perquisite income. In Year 3, a 20% tranche of the same grant generates $20,000 = ~₹16.8 lakh in perquisite income in a single vest event.

The perquisite is taxed at your slab rate in the FY it vests. At 30% + surcharge + cess, a ₹16.8 lakh Year 3 vest event triggers roughly ₹5.3-5.7 lakh in tax. The advance tax implication is that Year 3 and Year 4 Amazonian employees need to be especially diligent about advance tax payments — the jump from Year 2 to Year 3 vest income is dramatic and many engineers are caught under-paying advance tax in Year 3.

Amazon withholds US federal tax (22% supplemental rate) at vest. Claim this via Form 67 before filing ITR. Amazon India employees use Merrill Lynch (Bank of America) as their stock plan administrator — the Form 1042-S comes from Merrill Lynch.

The FX rate for perquisite calculation is SBI TT buying rate on the vest date, as usual. AMZN has been trading in the $180-$240 range in recent years — a $240 price with a large Year 3/4 vest can create significant INR perquisite values.

Capital gains on sale: cost basis is FMV at vest in INR. 24-month LTCG threshold applies for each vest lot. The large Year 3/Year 4 lots, if held 24 months from their vest date, qualify for LTCG at 20%.`,
      bullets: [
        `Perquisite concentrated in Year 3 & 4: plan advance tax from Year 2 onwards for Year 3 jump`,
        `US withholding via Merrill Lynch (BofA): 22% — file Form 67 to claim FTC`,
        `Year 3 & 4 semi-annual vest events of 20% each create large single-event perquisite`,
        `LTCG: 24 months from each lot's specific vest date — especially valuable for large Year 3/4 lots`,
        `Schedule FA: mandatory annual disclosure even with no sales`,
      ],
      callout: `The most missed mistake for Amazon India employees: failing to increase advance tax payments when transitioning from Year 2 (15% vest) to Year 3 (40% vest). Update your advance tax estimate at the start of Year 3 in June — the tax jump is significant and Section 234C interest penalties add up.`,
    },
    {
      heading: `What Amazon India Employees Typically Do With Their RSUs`,
      body: `Amazon India employees, particularly SDEs at L5-L6, show more diversity in RSU behaviour than at other FAANG companies — primarily because of the back-weighted schedule creating very different vest profiles by tenure.

Early-tenure employees (Years 1-2) receive so little in RSUs quarterly that the decision is almost moot — they typically hold whatever vests since the amount is small. The real decision point arrives at Year 3 and Year 4, when the larger vest tranches land. At this point, many Amazon India employees sell immediately or close-to-immediately, because they've been equity-light for two years and want to lock in the liquidity.

A subset of L6+ engineers hold AMZN more aggressively, particularly those who believe AWS's cloud dominance (AWS holds ~32% global cloud market share, well ahead of Azure and GCP) makes AMZN a durable hold. AWS's operating margins (~35%) effectively subsidise Amazon's retail and advertising businesses, making the structural case for AMZN more straightforward than for some other tech stocks.

The common mistake is the same as at other companies but compounded by the back-loaded structure: treating unvested AMZN (especially the large Year 3/4 tranches) as guaranteed income without discounting it for departure risk or stock price risk. Engineers who leave at Year 2.5, forfeiting 80% of their grant, often say they didn't fully model the financial cost of leaving early.`,
    },
    {
      heading: `The Smart Approach: A Framework for Your AMZN Holdings`,
      body: `Amazon's back-weighted schedule requires a different planning framework than quarterly even-vest companies. You need a 4-year model, not just a quarterly discipline.

Build a vest projection: at your join date, calculate the INR value of each vest event under three scenarios — flat stock price, 20% appreciation, 20% depreciation. This gives you a range for your Year 3 and Year 4 tax bills so you can plan advance tax accurately from Year 2 onwards.

The cash flow challenge in Years 1-2 is real: Amazon's low early vesting means your effective total compensation in Year 1-2 is much lower than the offer headline suggests. Budget accordingly — don't plan large capital outlays (home purchases, etc.) assuming Year 3 RSU income will arrive on schedule.

At each vest event, the sell-to-cover-taxes discipline applies: sell enough shares to cover perquisite tax (33-36%). For Year 3 and Year 4's large tranches, this means selling a significant number of shares immediately. The remaining shares can be held toward LTCG if you're positive on AMZN.

On concentration: Amazon employees tend to under-estimate their AMZN concentration because the unvested Year 3/4 tranches feel "far away." Include them in your net worth calculation. An L5 with 18 months at Amazon may have only 20% of their grant vested, but the remaining 80% unvested is real future wealth at risk if Amazon's stock falls.

Repatriation: use LRS quarterly, align with your bi-annual vest events. The semi-annual vest schedule (rather than quarterly) means you have fewer natural repatriation moments — be disciplined about initiating transfers within 30 days of each vest.`,
      bullets: [
        `Build a 4-year vest model at hire — project perquisite tax for Years 3 & 4 specifically`,
        `Year 1-2 cash flow is lower than offer headline — budget conservatively`,
        `At Year 3+ vests: sell 33-36% immediately for taxes, hold remainder toward LTCG`,
        `Include unvested Year 3/4 grants in net worth concentration analysis — they're real`,
        `Repatriate within 30 days of each semi-annual vest via LRS`,
        `File Form 67 before ITR to claim Merrill Lynch US withholding as FTC`,
      ],
    },
    {
      heading: `Concentration Risk: Why This Matters More Than You Think`,
      body: `Amazon faces risks that are more diversified across businesses than most FAANG companies, but that diversification is a double-edged sword — the retail business can be loss-making or margin-negative for extended periods, subsidised by AWS. If AWS growth decelerates significantly, there is no safety net.

Specific risks for AMZN India employees: AWS faces intensifying competition from Azure (Microsoft has OpenAI exclusivity) and GCP (Google's AI credibility has improved). If AWS market share erodes from ~32% to ~25% over 5 years, the earnings impact is significant. Additionally, Amazon's retail business operates at very thin margins — any macro recession in the US or major regulatory action (FTC antitrust) could pressure the stock materially.

The unique concentration risk at Amazon India: the large Year 3 and Year 4 vest tranches mean that if AMZN falls 30% in Year 3, your RSU income falls by 30% in what should have been your best vest year. This is a compounding loss: your perquisite income is lower AND your held stock is worth less. Employees who needed the Year 3 RSU income for a specific financial goal (home purchase, business investment) are left short.

Quantify it: an L5 with a $100,000 grant in AMZN. In Year 3 you expect $40,000 in RSU income. If AMZN drops 30%, your Year 3 income becomes $28,000. The difference of $12,000 (₹1 crore) may be consequential if you've made commitments based on the higher number.`,
      callout: `Real scenario: if AMZN drops 30% heading into your Year 3, you lose 30% on your largest-ever vest event. The back-weighted schedule means concentration risk is highest precisely when your vest income is highest. Don't make financial commitments dependent on Year 3/4 RSU income without a downside buffer.`,
    },
    {
      heading: `Getting Money Home: FX & Repatriation`,
      body: `Amazon India employees use Merrill Lynch (Bank of America) as their stock plan administrator. International wire fees from Merrill Lynch run $35-45 per transfer — slightly higher than E*TRADE. The FX spread from your Indian receiving bank remains the larger cost at 1.5-2% on incoming wires.

Amazon's bi-annual vest schedule (Year 3 and Year 4 specifically) means you have two large vest events per year rather than four quarterly events. This makes it tempting to do large, infrequent repatriation transfers. For transfers over ₹10 lakh, Form 15CA and Form 15CB (CA certificate) are required — plan for this document requirement in advance of each transfer.

The LRS limit of $250,000 per FY comfortably covers most Amazon India employees' annual proceeds, but L6-L7 engineers with large Year 3/4 vests approaching or exceeding $200,000 annually should track their LRS utilisation through the FY.

Rovia's 0% FX markup saves approximately ₹1.25-1.5 lakh per $100,000 vs bank rates. For an L6 Amazon engineer repatriating $150,000 in Year 3, this is a ₹1.5-2 lakh saving in a single year.

The recommended cadence: initiate repatriation within 30 days of each vest event. Don't let dollar proceeds sit in the Merrill Lynch account — deploy the INR equivalent into Indian investments as soon as it arrives.`,
    },
    {
      heading: `Stock Sentiment Among Amazon India Employees`,
      body: `Sentiment among Amazon India employees is complex and more bifurcated than at Microsoft or Google. The engineering cohort (AWS SDEs in Hyderabad and Bengaluru) is relatively bullish on AMZN, confident in AWS's structural position and Amazon's ability to monetise AI workloads through AWS. The operations, F&A, and customer support cohorts are more neutral — AMZN is a component of their compensation but not a source of deep conviction.

The golden handcuffs at Amazon are particularly effective because of the back-weighted structure. An SDE II who is 18 months in has only received 5-15% of their grant. Leaving at Month 18 forfeits 85% of their equity — which makes even sub-optimal Amazon working conditions tolerable for many engineers trying to reach their Year 3 cliff.

On Blind, Amazon India employees discuss RSUs through the lens of "surviving to Year 3" — the vernacular reflects how the back-weighted structure changes incentives. Year 3 is seen as a milestone event, and many employees make financial plans (home purchase, investment lump sum) contingent on reaching Year 3.

The concerns expressed internally: Amazon's "Always Day 1" culture being perceived as a cover for cost-cutting and high operational pressure, the PIPs (Performance Improvement Plans) process being used aggressively, and the perception that Amazon's compensation has fallen behind META and Google at equivalent levels. There's moderate attrition pressure on L5-L6 SDEs as competing offers from Hyderabad startups and other FAANG companies become more compelling. Typical tenure for engineers who reach Year 3 is 3-5 years total; many leave after their Year 4 tranche has fully vested.`,
    },
  ],
};
