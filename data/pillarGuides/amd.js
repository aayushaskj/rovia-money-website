export const guide = {
  title: `AMD RSUs in India: The Complete Tax & Wealth Guide`,
  lastUpdated: `May 2026`,
  intro: `AMD's India footprint is one of the largest in the semiconductor industry — approximately 15,000 employees across Bengaluru, Hyderabad, Pune, and Chennai, significantly expanded after the Xilinx acquisition in 2022. For Indian engineers designing EPYC server processors, RDNA GPUs, AI accelerator software, or Versal SoC logic, the AMD RSU question is particularly live: the stock has had extraordinary runs tied to data centre AI GPU demand, but equally sharp corrections. This guide covers the post-Xilinx compensation structure, quarterly vest mechanics, how the MI300 AI accelerator narrative affects MRVL's valuation risk, and the tax realities for one of India's largest semiconductor employer populations.`,
  keyStats: [
    { label: `India headcount`, value: `~15,000` },
    { label: `Primary cities`, value: `Bengaluru, Hyderabad, Pune, Chennai` },
    { label: `RSU vest schedule`, value: `Quarterly, 4-year vest` },
    { label: `Ticker / Exchange`, value: `AMD / NASDAQ` },
    { label: `Vest cliff`, value: `1 year` },
  ],
  sections: [
    {
      heading: `AMD in India: Offices, Cities & Scale`,
      body: `AMD's Bengaluru campus, with approximately 10,000 employees, is the company's largest India centre and one of its most significant globally. The scale reflects the 2022 Xilinx acquisition, which brought a substantial India engineering population (previously Xilinx India) into the AMD fold. AMD Bengaluru covers an enormous breadth of semiconductor work: EPYC CPU architecture, RDNA GPU design, AI accelerator chip software (the MI300 series), Radeon graphics engineering, and now the FPGA and adaptive computing work from Xilinx (rebranded AMD Adaptive Computing).

Hyderabad, with approximately 3,000 employees, is primarily the ex-Xilinx Hyderabad operation — a significant FPGA design and Versal SoC development centre. Hyderabad engineers work on Versal AI Core series devices, Alveo data centre accelerator cards, and the AI Engine architecture that distinguishes Xilinx's devices from conventional FPGAs. Pune adds 1,500 employees in software, applications engineering, and systems work. Chennai contributes approximately 500 employees.

India represents a huge share of AMD's global engineering investment. The post-Xilinx integration has created some organisational complexity — employees from the Xilinx tradition have a different cultural history (Xilinx was acquired for $35B, creating significant pre-acquisition equity wealth for tenured employees) from AMD-legacy employees. Navigating the integrated compensation structure requires understanding which grant you received under which programme.`,
      bullets: [
        `Bengaluru (~10,000): EPYC CPU, RDNA GPU, MI300 AI accelerator software, Radeon, AMD Adaptive Computing (Xilinx)`,
        `Hyderabad (~3,000): Xilinx FPGA legacy — Versal SoC, Alveo accelerators, AI Engine architecture`,
        `Pune (~1,500): Software, applications engineering, systems`,
        `Chennai (~500): Engineering support`,
        `Post-Xilinx integration created two cultural cohorts — Xilinx legacy and AMD legacy employees`,
      ],
    },
    {
      heading: `Department Mix`,
      body: `AMD India spans a wider range of semiconductor disciplines than most India chip design centres. The Bengaluru campus alone covers CPU architecture (RTL, physical design, verification for EPYC), GPU architecture (RTL, compute architecture, graphics pipeline), AI/ML accelerator software (HIP, ROCm, MI300 software stack), and the full FPGA design flow from Xilinx.

RTL design and verification engineers are the largest single cluster — this is the core of chip design and requires a combination of logic design expertise, verification methodology (UVM, formal verification), and deep understanding of the specific product architecture. Physical design (PnR, timing closure) is a related but distinct specialisation, and TI India has expertise in both.

Software engineering for heterogeneous compute is a fast-growing function. AMD's ROCm software stack (its open-source answer to NVIDIA's CUDA) is being actively developed to expand AMD's AI accelerator addressable market, and this requires software engineers who understand both GPU architecture and ML framework integration (PyTorch, TensorFlow). India has a strong pool of these engineers and AMD has been hiring aggressively.

On the Xilinx side, FPGA design tools (Vivado, Vitis), HLS (High Level Synthesis), and embedded software for Zynq/Versal devices are significant India-owned functions.`,
      bullets: [
        `RTL design and verification is the largest engineering cluster`,
        `ROCm/HIP software stack development is a fast-growing, strategically important function`,
        `Physical design (PnR, timing) is a specialised but significant cluster`,
        `FPGA design tools (Vivado, Vitis) and Xilinx ecosystem software are India-owned`,
      ],
    },
    {
      heading: `Who Gets RSUs: Levels & Amounts`,
      body: `AMD's RSU eligibility in India begins meaningfully at Level 5 (Senior Engineer equivalent — roughly 5-7 years experience). Below Level 5, some grants exist but are smaller. Level 5 is where equity becomes a real compensation component. Post-Xilinx acquisition, AMD stepped up equity grants for senior India employees to bring them closer to competitive market rates — Xilinx engineers were used to a more generous equity culture.

At Level 5 (Senior Engineer), new hire grants range from $35,000–$70,000 over four years. At Level 6 (Principal Engineer), grants are $70,000–$140,000. Level 7 (Staff Engineer) sees $140,000–$250,000. Distinguished Engineers and above receive $250,000+. Fellow-level engineers may have compensation structures with larger equity components and performance-based elements.

The post-Xilinx integration created a situation where AMD offered retention grants to key Xilinx engineers who joined through the acquisition. These retention grants had specific terms and vest schedules — if you received a retention grant, understand its specific conditions, which may differ from standard AMD RSU terms.

Annual refresh grants at AMD are performance-driven. Level 5 at "meets expectations": $15,000–$30,000. "Exceeds" at Level 5: $30,000–$50,000. At Level 6, the ranges step up proportionally. AMD has used equity competitively in recent years given the intense market for semiconductor talent, particularly after NVIDIA's success made GPU and AI accelerator engineers extremely sought-after.`,
      bullets: [
        `Level 5+ is meaningful RSU eligibility threshold`,
        `Level 5 new hire: $35,000–$70,000 over 4 years`,
        `Level 6 new hire: $70,000–$140,000 over 4 years`,
        `Level 7 (Staff) new hire: $140,000–$250,000 over 4 years`,
        `Xilinx retention grants had separate terms — verify specific conditions if applicable`,
      ],
    },
    {
      heading: `Understanding Your Vest Schedule`,
      body: `AMD uses quarterly vesting with a one-year cliff, the same structure as most US semiconductor companies. A grant from January 2025 has its cliff vest in January 2026 (25%), followed by 6.25% per quarter through January 2029. After 2-3 years at AMD, multiple overlapping grant tracks (new hire + annual refreshes) vest simultaneously each quarter.

AMD's calendar fiscal year (ending December 31) means annual refresh grants are typically issued in February-March following the December year-end and compensation review cycle. New hire grants are made at or shortly after your joining date. If you are a Xilinx legacy employee, your AMD grant dates reflect your AMD integration date, not your original Xilinx joining date.

AMD uses Fidelity NetBenefits as its equity plan administrator. On each quarterly vest date, TDS is withheld via sell-to-cover. The withheld amount is based on AMD's calculation of your Indian income tax liability on the vest-day perquisite income. For high earners in surcharge brackets, verify that the TDS calculation includes the correct surcharge rate — this is a common point of underpayment.

AMD's stock is volatile — it can move 10-20% on a single earnings release. NVIDIA's quarterly results also affect AMD's stock (as the closest GPU competitor), meaning AMD can be moved by events at a competitor. This volatility makes advance tax planning more complex, as actual quarterly vest values can deviate significantly from projections.`,
      bullets: [
        `Quarterly vest, 1-year cliff`,
        `Calendar fiscal year (Dec 31) — refresh grants February-March`,
        `Xilinx legacy: grant dates start from AMD integration date, not original Xilinx join date`,
        `Equity plan via Fidelity NetBenefits`,
        `AMD stock moves on both own earnings and NVIDIA results — high volatility`,
      ],
      callout: `AMD and NVIDIA are in direct competition in data centre AI accelerators. When NVIDIA reports strong MI300-competitive demand or when AMD reports weaker AI accelerator revenue, the stock can move 15%+ in either direction in a single day. If you have an AMD vest date within two weeks of NVIDIA or AMD earnings, your quarterly perquisite income could differ substantially from your estimate. Build 20% variance buffers into your advance tax projections.`,
    },
    {
      heading: `The Tax Reality`,
      body: `AMD India RSUs create perquisite tax on vest and capital gains on sale. AMD's stock has had extraordinary amplitude — rising from under $80 in 2022 to $200+ in 2024 on AI accelerator enthusiasm, and experiencing sharp corrections at other points. For employees at Level 6+ with significant grant values, quarterly vest income can be ₹25-50 lakh, pushing total income well into surcharge territory.

On each quarterly vest, the market value of vested AMD shares (units × AMD closing price on vest date × SBI TT rate) is treated as salary income under Section 17(2). For Level 6-7 engineers in Bengaluru, total income including RSU vests can push above ₹50 lakh (10% surcharge), ₹1 crore (15% surcharge), or ₹2 crore (25% surcharge) thresholds. Each surcharge tier change meaningfully affects the effective marginal rate. Verify your surcharge tier every year as your compensation changes.

Capital gains start from each quarterly vest date. Cost basis: vest-date AMD price × SBI TT rate. STCG within 24 months: slab rate. LTCG after 24 months: 12.5%. AMD's price volatility means the spread between cost basis and current price can be large — LTCG optimisation is very valuable for lots acquired during down cycles.

Xilinx legacy employees: if you had Xilinx RSUs that were converted to AMD shares at the acquisition, the perquisite tax event on those shares was the acquisition/conversion date, and the capital gains clock starts from then. Pre-conversion gains on Xilinx shares are complex — consult a CA experienced with acquisition-related equity.

File Form 67 before ITR; Schedule FA for Fidelity account; advance tax quarterly.`,
      bullets: [
        `Level 6-7 quarterly vest income: ₹25-50 lakh — may push into 15-25% surcharge bracket`,
        `Surcharge tier changes at ₹50L, ₹1Cr, ₹2Cr total income — verify tier each year`,
        `AMD price volatility makes LTCG optimisation highly valuable for down-cycle vests`,
        `Xilinx legacy: conversion date is the starting point for AMD capital gains clock`,
        `Form 67 before ITR; Schedule FA for Fidelity; advance tax quarterly`,
      ],
      callout: `Most-missed mistake for AMD India employees: not accounting for NVIDIA earnings dates in advance tax planning. AMD's stock often moves significantly when NVIDIA reports — sometimes in the same week as AMD's own vest dates. A NVIDIA earnings beat can push AMD up 10-15%, inflating your perquisite income on vest day relative to projections. Set your advance tax conservatively and adjust after each NVIDIA and AMD earnings event.`,
    },
    {
      heading: `What Employees Typically Do`,
      body: `AMD India's 15,000-employee population spans a wide range of equity sophistication. Xilinx legacy employees, many of whom experienced the Xilinx acquisition and had complex pre-acquisition equity, tend to be more financially engaged. AMD-native employees who joined post-acquisition have a more standard RSU employee profile.

The AI accelerator narrative — AMD's MI300 competing directly with NVIDIA's H100/H200 in the data centre AI training market — has created significant internal excitement and a buy-and-hold bias. Engineers working on ROCm and HIP (the software stack that enables AI training on AMD GPUs) see direct product-market validation when hyperscalers announce MI300 deployments. This emotional connection to the growth thesis can lead to over-concentrated positions.

GPU and AI-adjacent engineers — those who work on the software stack that interfaces with NVIDIA's competitive market — are the most aware of competitive dynamics and the most likely to have a nuanced view of AMD's AI GPU market share trajectory. These engineers understand that AMD's GPU software ecosystem (ROCm) is still less mature than CUDA, and factor this into their equity outlook.

Level 5-6 engineers with 3+ years at AMD can have ₹50-120 lakh in total RSU exposure. Engineers who joined during AMD's 2022 trough (stock was in the $60-80 range) have seen extraordinary appreciation on those specific lots — and the LTCG opportunity on those lots is particularly valuable.`,
      bullets: [
        `Xilinx legacy employees are more financially engaged; AMD-native hires have standard RSU profile`,
        `MI300 AI accelerator enthusiasm creates strong buy-and-hold bias in GPU/AI engineering teams`,
        `ROCm/GPU software engineers understand CUDA ecosystem maturity gap — more nuanced outlook`,
        `Engineers with 2022-vintage grants (AMD at $60-80) have extraordinary unrealised gains`,
      ],
    },
    {
      heading: `The Smart Approach`,
      body: `The lot-by-lot spreadsheet is essential given AMD's price volatility and the potential for very different cost bases across grants from different periods. AMD stock ranged from $60 to $200+ over 2022-2024 — an engineer who vested at $60 has a very different tax situation on those lots versus someone who vested at $180.

For lots from the 2022 AMD trough (roughly $60-80 range), these are now well past the 24-month LTCG threshold if received then. Selling these LTCG-qualified lots at 12.5% vs STCG at 30%+ represents extraordinary tax savings on large gains. Prioritise selling high-gain, LTCG-qualified lots first. Use Fidelity's specific lot selection feature to choose which lots to sell.

Advance tax for AMD employees at Level 6+ is complex due to surcharge sensitivity. Model three scenarios at the start of the FY: AMD at current price (base case), AMD +25% (bull case), AMD -25% (bear case). Calculate advance tax due under each scenario. Pay the base case each quarter, with the ability to top up if the bull case materialises. This avoids both underpayment and overpayment.

For Xilinx legacy employees with pre-acquisition equity history: work with a CA to reconstruct the full timeline. The Xilinx-to-AMD conversion may have created a perquisite tax event in FY2022 — verify this was correctly reported. AMD shares received through conversion have a cost basis starting from the conversion date.

Diversification: AMD is a high-beta semiconductor stock. Keep AMD below 15-20% of liquid net worth. Systematically redirect quarterly vest proceeds into diversified equity after LTCG analysis.`,
      bullets: [
        `2022-vintage vests ($60-80 AMD) are LTCG-qualified — prioritise selling these lots first`,
        `Use Fidelity specific lot selection — always sell highest-cost-basis LTCG lots when raising cash`,
        `Model AMD +25%/-25% scenarios for advance tax planning at Level 6+`,
        `Xilinx legacy: verify FY2022 conversion was correctly reported as perquisite in ITR`,
        `Keep AMD below 15-20% of net worth — high-beta stock warrants tighter concentration limit`,
        `File Form 67 before ITR; Schedule FA; advance tax quarterly`,
      ],
    },
    {
      heading: `Concentration Risk`,
      body: `AMD's risk profile is heavily influenced by its competitive position vis-à-vis NVIDIA in the AI accelerator market. AMD's MI300 GPU has gained meaningful traction with hyperscalers as a cost-effective alternative to NVIDIA's H100/H200, and AMD's AI accelerator revenue grew from near-zero to $3.5B+ in 2024. But NVIDIA's installed base advantage (the CUDA ecosystem, with over a decade of developer adoption) is a formidable competitive moat that AMD is trying to overcome with software investment.

If AMD's AI GPU market share growth disappoints relative to expectations — because ROCm adoption is slower than projected or because NVIDIA's B200 Blackwell chips extend NVIDIA's performance lead — the stock would reprice sharply. AMD is also exposed to the PC and consumer gaming GPU market (Radeon), which is more cyclical and less premium-valued than the data centre AI market.

The Xilinx FPGA business adds strategic diversification but also integration complexity. The FPGA market is facing competition from SmartNICs and custom ASICs from Marvell and Broadcom. Ensuring the Xilinx product lines remain competitive while integrating them into AMD's broader architecture is an ongoing execution challenge.`,
      bullets: [
        `AI GPU market share depends on ROCm software ecosystem closing the CUDA maturity gap`,
        `NVIDIA Blackwell performance leadership could limit AMD's data centre AI GPU upside`,
        `PC/gaming GPU market is cyclical and faces margin pressure from NVIDIA`,
        `Xilinx FPGA integration complexity is an ongoing execution risk`,
      ],
      callout: `AMD has moved from $60 to $200+ in two years on the AI accelerator narrative. That's a 3x return. But when the market decides AMD's AI GPU market share isn't growing fast enough, it can reprice by 30-40% in weeks. For engineers with ₹1 crore+ in AMD equity, that represents ₹30-40 lakh in potential losses from a single narrative shift. Concentration risk here is specifically about narrative repricing.`,
    },
    {
      heading: `Getting Money Home: FX & Repatriation`,
      body: `AMD sale proceeds from Fidelity NetBenefits are repatriated under LRS ($250,000 per financial year). AMD's large India population means there is a large annual flow of repatriation from India AMD employees collectively — but for each individual, the LRS limit applies per financial year. Level 6-7 engineers repatriating a full year's vest proceeds may approach or reach the $250,000 limit in strong AMD years.

Plan repatriation across the April-March Indian financial year. AMD's calendar fiscal year (December) and quarterly vest dates mean there are vest events in each quarter of the Indian FY. Repatriate quarterly to spread the LRS usage across the year and avoid hitting the annual limit late in the year when you still have Q4 vest proceeds to repatriate.

Bank FX spread: 1.5-2.5%. On $100,000 repatriation, $1,500-$2,500 in unnecessary cost. Rovia's 0% FX markup eliminates this. File 15CA/15CB for each remittance over $5,000. Keep Fidelity statements, vest records, and SBI TT rate history for ITR. CA experienced with foreign equity is essential at Level 6+ given the surcharge complexity and Xilinx legacy documentation requirements.`,
      bullets: [
        `LRS: $250,000/year — Level 6-7 may approach limit in strong AMD years`,
        `Quarterly repatriation spreads LRS usage across Indian FY`,
        `Bank FX spread: 1.5-2.5%; Rovia 0% markup saves $1,500-2,500 per $100K`,
        `15CA/15CB per remittance; Fidelity statements and SBI TT rate records for ITR`,
      ],
    },
    {
      heading: `Stock Sentiment`,
      body: `AMD India employee sentiment is strongly positive driven by the AI accelerator narrative, with Bengaluru and Hyderabad engineers feeling directly connected to the global AI infrastructure buildout. Teams working on ROCm, MI300 software, and AI inference pipelines are particularly motivated — the product-market alignment is tangible and the competitive battle with NVIDIA is genuinely exciting from an engineering perspective.

The Xilinx legacy cohort adds a layer of complexity. Some ex-Xilinx employees feel the AMD acquisition did not fully value Xilinx's technology or culture, and there is periodic tension between FPGA-trained engineers and the CPU/GPU-centric AMD culture. Retention in the Xilinx legacy cohort (particularly for senior FPGA architects) has been a challenge, with some departures to other FPGA design centres or to custom ASIC companies.

Internal forums (Workplace, Blind) actively discuss AMD vs NVIDIA competitive dynamics, ROCm ecosystem progress, and quarterly earnings expectations. Senior AMD India engineers track AMD's AI accelerator revenue guidance closely as a proxy for their own equity outlook.

Departure patterns show the classic 4-year grant cliff spike, amplified at AMD by the large post-Xilinx population that received retention grants maturing around the same time. NVIDIA is an obvious talent competitor — the salary differential and NVDA equity upside is a frequent comparison point in departure conversations. Pre-IPO AI startups in Bengaluru are also active AMD talent recruiters.`,
      bullets: [
        `AI accelerator team sentiment is very positive — product-market alignment is tangible`,
        `Xilinx legacy cohort retention is challenging — cultural integration tension persists`,
        `NVIDIA is the primary talent competitor — NVDA equity upside is a frequent comparison point`,
        `4-year grant cliff + Xilinx retention grant maturity creates a concentrated departure cohort`,
        `AMD vs NVIDIA competitive tracking is the primary equity-relevant internal narrative`,
      ],
    },
  ],
};
