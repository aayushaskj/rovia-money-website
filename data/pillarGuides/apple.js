export const guide = {
  title: `Apple India RSU Guide: Tax, Annual Vesting & What To Do With Your AAPL Stock`,
  lastUpdated: `May 2026`,
  intro: `Apple has approximately 8,000 direct employees in India, primarily engineers working on Maps, Siri, and silicon validation in Hyderabad and Bengaluru. Apple's India presence is smaller than Google or Microsoft but growing rapidly as the company deepens its engineering investment in the region. For ICT2+ engineers at Apple India, RSUs are a meaningful part of total compensation — and AAPL's long-term performance record makes these grants particularly valuable. This guide covers Apple's annual vest cadence, the Indian tax treatment, and how to manage your AAPL position intelligently.`,
  keyStats: [
    { label: `India headcount`, value: `~8,000+ (direct employees)` },
    { label: `Primary cities`, value: `Hyderabad, Bengaluru` },
    { label: `RSU vest schedule`, value: `Annual, 4 tranches over 4 years` },
    { label: `Ticker / Exchange`, value: `AAPL / NASDAQ` },
    { label: `Vest cliff`, value: `1 year` },
  ],
  sections: [
    {
      heading: `Apple in India: Offices, Cities & Scale`,
      body: `Apple's India engineering presence is concentrated in two cities, with a very different character from the sprawling FAANG campuses nearby. The Hyderabad office, located in the HITEC City area, is Apple's largest India engineering hub with approximately 3,000 employees. This team is primarily working on Maps data quality and engineering — Apple Maps' global accuracy depends heavily on the Hyderabad team's work on place data, road networks, and local search quality. Siri natural language processing for Indian languages is also a significant function here.

The Bengaluru office has approximately 2,000 engineers working on Apple Silicon validation (testing and validation of the A-series and M-series chips for software compatibility), Services engineering (App Store India, Apple Pay, iCloud), and some hardware testing infrastructure. Apple's Bengaluru presence has grown consistently as silicon validation has become more important with the Apple Silicon transition.

Mumbai houses Apple's retail, commercial, and sales operations — managing Apple's India retail expansion (the BKC and Saket stores), carrier partnerships, and enterprise device sales. Mumbai is not an engineering office.

The Chennai region's Foxconn and Pegatron manufacturing operations are legally separate contract manufacturing entities — not Apple direct employees. Apple's direct India headcount of ~8,000 excludes this manufacturing workforce, which numbers in the hundreds of thousands.

Apple has actively expanded India hiring since 2022, including opening its first India retail stores in 2023 and announcing significant data centre investments. India is strategically important to Apple for both manufacturing diversification (away from China dependence) and as a product market.`,
      bullets: [
        `Hyderabad: ~3,000 — Maps data engineering, Siri NLP, search quality`,
        `Bengaluru: ~2,000 — Silicon validation, Services engineering (App Store, Apple Pay)`,
        `Mumbai: ~500-700 — retail operations, carrier partnerships, enterprise sales`,
        `Chennai (Foxconn/Pegatron): contract manufacturing, NOT Apple direct employees`,
        `Total Apple direct employees in India: ~8,000+; expanding with India retail and engineering investment`,
      ],
    },
    {
      heading: `Department Mix: Who Works at Apple India`,
      body: `Apple India is almost exclusively engineering. The Maps organisation in Hyderabad is Apple's largest India team and is a software-and-data engineering function — combining traditional software engineering with geospatial data science, annotation, and operations. Maps data quality work involves a mix of engineers (ICT2-ICT4) and data annotators/operations staff who are typically on different compensation structures.

Silicon validation in Bengaluru is hardware-software engineering — validating that iOS, macOS, watchOS run correctly on new Apple Silicon chips. This is highly specialised work with limited analogues at other companies, and Apple values it accordingly in compensation. ICT3+ silicon validation engineers at Bengaluru are well-compensated.

Siri NLP engineering for Indian languages is a growing function. As Apple pushes Indian language support across devices, the Hyderabad Siri team has expanded. This work intersects machine learning engineering with computational linguistics.

Apple does not have a significant product management function in India. All product decisions are centralised in Cupertino. India PMs, to the extent they exist, are working on Maps product features or India-specific services, not on core iOS or hardware product strategy.

Operations, legal, and finance in India support the Apple India entity (Apple India Pvt Ltd) and the retail operations. These are modest functions relative to the engineering teams. Retail employees (at BKC Mumbai and Saket Delhi stores) are direct Apple employees but on a different compensation structure — retail employees globally do not typically receive RSU grants.`,
      bullets: [
        `Maps engineering (SWE + data engineering): ~40% of India FTEs — Hyderabad dominant`,
        `Silicon Validation & Hardware-SW Integration: ~25% — Bengaluru`,
        `Siri NLP & ML Engineering: ~15% — Hyderabad`,
        `Services Engineering (App Store, Apple Pay): ~10% — Bengaluru`,
        `Retail, sales, and operations: ~10% — Mumbai/Delhi, limited equity compensation`,
      ],
    },
    {
      heading: `Who Gets RSUs at Apple India: Levels & Amounts`,
      body: `Apple uses an ICT (Individual Contributor Technical) level system for engineers: ICT1 through ICT6, with ICT2 being the standard entry level for experienced hires and ICT4 being senior/lead engineer level. RSU grants begin at ICT2, which is Apple's standard level for engineers with 3-5 years of industry experience.

At ICT2, initial RSU grants typically range from $40,000 to $80,000 over 4 years. ICT3 (senior engineer) initial grants range from $80,000 to $160,000. ICT4 (lead engineer/principal) sees $150,000 to $300,000 over 4 years. ICT5 and ICT6 (senior principal, distinguished engineer) grants are $300,000+.

Apple is known for being somewhat more conservative with RSU grants than Meta or Google at equivalent experience levels, but compensates with very strong base salaries relative to market. The total compensation is competitive; it's the equity-to-cash ratio that differs.

Apple also issues annual refresh grants. These are performance-linked but Apple is less transparent about the formula than Google or Microsoft. Strong performers at ICT3-ICT4 can receive annual refreshes of $30,000-$80,000. However, Apple's refresh grants are viewed as less predictable than at Google.

Retail employees, data annotators in the Maps operations function, and entry-level operations staff do not receive RSU grants. This is important context for the India headcount: a meaningful portion of Apple India employees in the Maps data quality function are in annotation/operations roles that don't qualify for equity.`,
      bullets: [
        `ICT1 (entry-level): minimal or no RSU grant`,
        `ICT2 (experienced engineer): $40,000-$80,000 initial grant over 4 years`,
        `ICT3 (senior engineer): $80,000-$160,000 initial grant`,
        `ICT4 (lead/principal): $150,000-$300,000 initial grant + annual refreshes`,
      ],
      callout: `Apple's total compensation is competitive but weighted more toward base salary than equity versus FAANG peers. At ICT3, an Apple engineer's base salary may be 15-20% higher than Google L5, but total RSU grant is lower. Know what you're trading off when evaluating offers.`,
    },
    {
      heading: `Understanding Your Vest Schedule`,
      body: `Apple's RSU vest schedule is annual, not quarterly — this is a key difference from Google, Meta, and Microsoft. Apple RSUs vest once per year on or around your anniversary date of the grant, over 4 years. A typical structure: 25% vests at month 12, 25% at month 24, 25% at month 36, 25% at month 48. The specific vest month depends on your hire date and grant date.

This annual schedule has important tax implications: instead of four smaller taxable events per year (as at Google), you have one large taxable event per year. An ICT3 engineer with a $120,000 grant has a single annual vest of $30,000 worth of stock — all in one month. This creates a larger advance tax requirement concentrated around one month per year.

Apple also issues refresh grants periodically, typically annually, but these may have different vest start dates than your initial grant. Over time, multiple grant tranches can create overlapping annual vest events, potentially in different months. Map out all your grant tranches and their vest dates when planning.

Apple does not use performance-vested RSUs for India engineers. All grants are time-based. The performance dimension is expressed through promotion pace and refresh grant size.

If you leave Apple before fully vesting, unvested shares are forfeited. Apple has not had India-specific layoffs comparable to the FAANG events of 2022-2023. The company's lean India headcount strategy means it doesn't rapidly scale up and then cut India roles.`,
      bullets: [
        `Annual vest: one vest event per year on grant anniversary — not quarterly`,
        `4-year vest: 25% per year, typically on or around grant anniversary date`,
        `All grants are time-based — performance affects refresh grant size only`,
        `Multiple grants from different years can overlap to create multiple annual vest months`,
      ],
      callout: `Apple's annual vest schedule concentrates all your equity income into one month per year. This means advance tax in one shot rather than spread across quarters. Plan your advance tax instalment for the quarter that includes your annual vest month — don't under-pay in the other three quarters.`,
    },
    {
      heading: `The Tax Reality: What Your Vest Actually Costs You`,
      body: `When AAPL RSUs vest annually, the full year's tranche is recognised as perquisite income in the month of vesting. For an ICT3 engineer with a $120,000 grant, this is $30,000 (~₹25.2 lakh) of perquisite income in a single month. At 30% slab + 10% surcharge (if total income exceeds ₹50 lakh) + 4% cess, the effective rate is approximately 34.32%, giving a tax liability of approximately ₹8.6 lakh on that single vest event.

Apple withholds US federal tax at 22% supplemental rate at vest. This appears on Form 1042-S from UBS Financial Services (Apple's stock plan administrator). File Form 67 in India before your ITR to claim this as FTC. The same rule applies: if you don't file Form 67, you lose the credit.

The FX conversion uses SBI TT buying rate on vest date. AAPL has been trading in the $200-$230 range recently — at $220 and ₹84/USD, a 100-share vest is worth $22,000 = ₹18.48 lakh in perquisite income.

Because Apple's vest is annual rather than quarterly, the advance tax planning is different. You'll pay most of your RSU-related advance tax in the quarter containing your vest month. Calculate the expected perquisite income for the year, multiply by your effective tax rate, and pay it in the advance tax instalment immediately before or in the vest month quarter.

For capital gains on sale: cost basis is the FMV at vest in INR. The 24-month LTCG clock starts from the annual vest date. Because Apple's vest is annual, you have exact clarity on when each tranche crosses the 24-month mark. This makes LTCG timing easier to track than at companies with multiple quarterly lots.`,
      bullets: [
        `Annual vest creates one large perquisite event per year — plan advance tax for that quarter`,
        `US withholding via UBS Financial Services: 22% — recover via Form 67 FTC`,
        `One vest tranche per year: easier LTCG tracking (one lot per year, not four)`,
        `Effective perquisite tax rate: 31.2% to 35.88% depending on total annual income`,
        `Schedule FA: mandatory disclosure of UBS account and AAPL holdings annually`,
      ],
      callout: `Apple's annual vest actually simplifies LTCG lot tracking — one vest event per year means one new tax lot per year. You know exactly when each annual lot crosses 24 months. This makes the hold-for-LTCG decision cleaner than at quarterly-vest companies with multiple overlapping lots.`,
    },
    {
      heading: `What Apple India Employees Typically Do With Their RSUs`,
      body: `Apple India engineers, particularly in the Maps and Silicon Validation teams, tend to be long-term AAPL holders more than their peers at Meta or Uber. This is partly cultural — Apple employees tend to have strong brand identification with the company — and partly because AAPL's long-term performance record (50x returns over 20 years) makes the case for holding intuitive.

The typical pattern at Apple India: sell enough at vest to cover taxes (35% or so), and hold the rest indefinitely with a vague intention to "sell when I need it." The annual vest schedule reinforces this — selling one annual tranche a year feels different from making quarterly sell/hold decisions.

The common mistake at Apple India is excessive holding beyond the 24-month LTCG threshold without a clear trigger to sell. Engineers hold AAPL lots that crossed LTCG qualification 2, 3, 4 years ago — the position grows through additional annual vests, and the concentration builds silently. An ICT3 engineer with 5 years at Apple might have 5 LTCG-qualified lots plus the current year's new lot, with total AAPL exposure of $150,000-$200,000, and no plan to diversify because "AAPL always goes up."

The bullish case for AAPL holds up over the long run, but the concentration risk is real. AAPL dropped 30%+ in 2022 like most tech stocks. An engineer with $200,000 in AAPL saw $60,000 evaporate. At ₹84/USD, that's ₹5 crore of nominal wealth dropping by ₹1.5 crore in a year.`,
    },
    {
      heading: `The Smart Approach: A Framework for Your AAPL Holdings`,
      body: `The core discipline for Apple India engineers is taking the annual vest event seriously as a decision point, rather than treating it as routine income to be held by default. Every year on your vest anniversary, you have a discrete opportunity to make a rational allocation decision.

At vest: sell enough to cover taxes (33-35% of shares). This is not optional. The perquisite tax is certain and comes due regardless of what AAPL does after vest. Sell-to-cover should be set up as an automatic instruction with UBS Financial Services if available.

For remaining shares: ask whether any of your existing AAPL lots are 20+ months old. If you're approaching 24 months, hold the lot for the remaining time — the LTCG saving is material. If your oldest lots have crossed 24 months and your total AAPL position exceeds 20% of net worth, it's time to systematically sell down older lots.

A useful rule of thumb: sell one older LTCG-qualified lot per year while holding newer lots toward 24-month qualification. This creates a natural rotation that prevents indefinite accumulation. If the annual vest adds one new lot and you sell one old lot, your AAPL position stays approximately constant while you extract value.

On concentration: Apple India engineers who've been at the company 4-6 years and held consistently can have ₹2-5 crore of AAPL exposure. At that point, the question isn't "should I sell?" but "how should I systematically diversify?" The answer: annual sell of the oldest LTCG-qualified lot, reinvest proceeds in diversified Indian and global assets.`,
      bullets: [
        `Sell to cover taxes at vest: 33-35% of annual tranche immediately`,
        `Track the 24-month LTCG threshold for each annual lot — annual vests make this clean`,
        `Hold lots within 20-24 months; sell lots that are past 24 months and breach concentration`,
        `Target: keep AAPL below 20% of net worth by systematically selling one old lot per year`,
        `Repatriate proceeds to India within 30 days of annual vest`,
        `File Form 67 from UBS Form 1042-S before ITR — same rule as all FAANG`,
      ],
    },
    {
      heading: `Concentration Risk: Why This Matters More Than You Think`,
      body: `AAPL is one of the most stable large-cap tech stocks — but "stable" and "safe as a concentrated position" are not the same thing. Apple faces legitimate structural risks: its Services revenue growth (the key driver of premium valuation) depends on maintaining App Store monopoly practices that are under sustained regulatory attack globally, including in India. A forced change to App Store policies (third-party payment systems, sideloading) would reduce Services margins significantly.

Apple's China manufacturing dependency, despite significant diversification efforts toward India, remains high. Any Taiwan Strait geopolitical escalation or major China-US trade conflict could disrupt Apple's supply chain and hurt near-term earnings dramatically. This is not a remote scenario — it's an actively discussed risk among institutional investors in AAPL.

The correlation issue for Apple India engineers in Maps and Silicon Validation: your specific work is important to Apple's product quality but is not directly tied to revenue. In a cost-cutting environment, Maps data teams and validation teams are not immune to restructuring. Your salary and unvested RSUs could both be at risk simultaneously with your vested AAPL position declining.

Quantify: an ICT3 engineer with $150,000 in vested AAPL (5 years of holding) and $80,000 unvested sees a 30% drawdown cause roughly $69,000 in wealth erosion (~₹5.8 lakh per ₹84/USD). AAPL dropped 32% in 2022. The belief that AAPL is "safe" because it's Apple doesn't hold under stress.`,
      callout: `Real scenario: AAPL fell 32% in 2022. An ICT3 with $150K vested + $80K unvested loses ~$74,000 (~₹6.2 crore at ₹84/USD). Apple's stability over the long run doesn't prevent significant intermediate drawdowns. The key protection is not holding AAPL indefinitely without diversification.`,
    },
    {
      heading: `Getting Money Home: FX & Repatriation`,
      body: `Apple India employees use UBS Financial Services as their stock plan administrator. UBS charges international wire fees in the $25-35 range. The same FX spread challenge applies with Indian receiving banks — 1.5-2% spread on incoming wires.

Because Apple's vest is annual, you have one major repatriation event per year rather than quarterly. This makes Form 15CA and Form 15CB documentation planning easier — you prepare the documents once per year for the annual repatriation. For transfers exceeding ₹10 lakh, CA certification via Form 15CB is required.

The LRS limit ($250,000 per FY) comfortably covers most Apple India engineers' annual proceeds. Even an ICT4 vesting $60,000-$80,000 per year is well within limits.

Rovia's 0% FX markup vs a bank spread of 1.5% saves approximately ₹1.05 lakh on a $50,000 repatriation — meaningful for an annual transfer of that size.

The recommended approach: within 30-45 days of your annual vest event, sell the tax-cover shares, let proceeds settle (typically T+2 in the US), then initiate the LRS transfer. Don't wait until year-end to repatriate — you lose the opportunity to deploy the INR into Indian investments for 6-11 months if you delay.`,
    },
    {
      heading: `Stock Sentiment Among Apple India Employees`,
      body: `Sentiment among Apple India engineers is strongly positive — bordering on the kind of brand affinity that comes from working at a company with the world's strongest consumer brand. Maps and Silicon validation engineers identify closely with Apple's products in a way that reinforces holding behaviour. There's a sense that owning AAPL is ownership of something tangible and enduring.

The golden handcuffs at Apple are effective but different in character than at Amazon. Apple's annual vest (rather than back-weighted) means unvested balances build up steadily. An ICT3 with 2.5 years at Apple has roughly 62.5% of their grant unvested — enough to think carefully about leaving.

On Blind, Apple India employees discuss RSUs less anxiously than Amazon employees and less tactically than Meta employees. The conversations are more long-term oriented: "I'll hold AAPL forever," "It's my retirement stock," or "I've held since ICT2 and never sold." This long-termism is understandable given AAPL's historical returns but creates concentration risk that accumulates silently.

The concerns that do appear in internal discourse: the pace of India headcount growth relative to the overall Apple India engineering ambition (some engineers feel the India teams are important but not fast-growing), the limited product management and strategic roles available in India versus Cupertino, and whether India engineering teams have genuine influence on product direction.

Typical tenure at Apple India is 5-8 years for the Maps and silicon teams, slightly longer than at other FAANG companies. Attrition from Apple to startups is lower than from Meta or Amazon, partly because Apple's culture of confidentiality creates a kind of insular loyalty, and partly because Apple's base salaries are strong enough to retain without requiring equity maximisation.`,
    },
  ],
};
