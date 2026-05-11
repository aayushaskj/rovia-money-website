// ─────────────────────────────────────────────
// Human case studies — Q&A format
// 5 standard questions, authentic first-person answers
// ─────────────────────────────────────────────

export const stories = [
  {
    slug: 'rahul-sharma',
    name: 'Rahul Sharma',
    initials: 'RS',
    avatarColor: '#4285F4',
    role: 'Engineering Manager',
    company: 'Google',
    companySlug: 'google',
    ticker: 'GOOGL',
    location: 'Hyderabad',
    tag: 'Schedule FA',
    tagColor: '#a78bfa',
    teaser: 'I spent every July rebuilding cost basis from scratch. Not anymore.',
    stats: [
      { label: 'Rovia user since', value: 'Jan 2026' },
      { label: 'Lots transferred', value: '24 lots' },
      { label: 'Schedule FA time', value: '47 min' },
      { label: 'Broker', value: 'Morgan Stanley' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes — a few lots over the years, mostly for big expenses. A car, a family trip, one lot to help with a property down payment. Never a large chunk at once. My general approach has been to hold as long as I can and sell only when there\'s a specific reason.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Morgan Stanley at Work for the actual shares, and a spreadsheet I built myself for the India side. Every July I\'d manually look up the SBI TT rate for each of my 24 vest dates on the RBI website — 24 rows, 24 calculations. By year four I\'d gotten it down to one Saturday. It still felt like a second job.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'My CA sent a bill with a ₹15,000 line item — "complex foreign asset reconciliation." Two of my SBI TT rates were from the wrong dates. I\'d used the notification date, not the actual settlement date. That\'s ₹15,000 to fix my own clerical errors. That was enough.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Hold most of it. I believe in the company, I\'m still growing at Google, and the lots I have are accumulating LTCG eligibility. I\'ll probably sell selectively when something specific comes up — real estate eventually. I\'m not in a hurry.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate, honestly. I\'m comfortable being concentrated in GOOGL because I understand the business — I work there. But I know that\'s not a great reason to hold 100% in one stock. I\'ve been slowly thinking about diversifying after the LTCG window opens on older lots. I just haven\'t gotten there yet.',
      },
    ],
  },

  {
    slug: 'priya-nair',
    name: 'Priya Nair',
    initials: 'PN',
    avatarColor: '#00A4EF',
    role: 'Director of Engineering',
    company: 'Microsoft',
    companySlug: 'microsoft',
    ticker: 'MSFT',
    location: 'Hyderabad',
    tag: 'FX Cost',
    tagColor: '#34d399',
    teaser: '₹2.2 lakh lost to FX markup over 5 years. I never noticed until I looked.',
    stats: [
      { label: 'Rovia user since', value: 'Jan 2026' },
      { label: 'FX markup on repatriation', value: '₹0' },
      { label: 'Years vested', value: '5 years' },
      { label: 'Broker', value: 'Fidelity' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes, regularly. My process for five years was: vest, sell, wire home via Fidelity. I wasn\'t holding long-term — I was treating each vest like a paycheck and repatriating it. Looking back, that was probably not optimal from a tax standpoint either, but the FX cost was the part that surprised me most.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Fidelity NetBenefits for the shares. Sell on vest day or shortly after, international wire to my Indian account. I thought I had it under control. I track all my other finances carefully — SIPs, hotel rates, foreign card fees. The RSU repatriation had a blind spot I didn\'t know about.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'A colleague mentioned the FX spread almost in passing. I went home that night and pulled five years of wire receipts. I\'d been repatriating $100,000 a year and losing about ₹44,000 annually to Fidelity\'s spread plus wire fees. Over five years: ₹2.2 lakh. The receipts were all right there. I transferred the following month.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'I\'m starting to think about partial diversification. I\'ve been 100% MSFT for five years. The position has done well but it\'s a meaningful chunk of my net worth now. I want to start moving some of the older lots into a more balanced portfolio — probably index-heavy, some fixed income. Haven\'t decided the exact split yet.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate to aggressive. I\'m at Director level, income is stable, I have a long horizon. I\'m comfortable with equity concentration in the short term. But I\'m also pragmatic — having 60% of my investable assets in a single stock is a risk I\'m increasingly aware of, especially as the position grows.',
      },
    ],
  },

  {
    slug: 'karthik-menon',
    name: 'Karthik Menon',
    initials: 'KM',
    avatarColor: '#FF9900',
    role: 'Senior SDE-II',
    company: 'Amazon',
    companySlug: 'amazon',
    ticker: 'AMZN',
    location: 'Bangalore',
    tag: 'LTCG Timing',
    tagColor: '#f59e0b',
    teaser: 'Sold 6 days too early. ₹1.8L in extra tax. A calendar note wasn\'t enough.',
    stats: [
      { label: 'Rovia user since', value: 'Feb 2026' },
      { label: 'STCG avoided (next lot)', value: '₹1.8L+' },
      { label: 'Years at Amazon', value: '3 years' },
      { label: 'Broker', value: 'Morgan Stanley' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes — once, and it cost me ₹1.8 lakh in extra tax. My year-three lot vested at about $47,000 worth of AMZN. I needed money for a home renovation and sold a chunk. My CA called after I sent the details. "Karthik, you sold 6 days before the 24-month mark." The entire gain was taxed as STCG at 30% instead of LTCG at 12.5%. Six days.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Morgan Stanley at Work for the shares. A note in my phone with each vest date, and a mental model of when each lot would hit 24 months. It worked for the first two years when the lots were small. Amazon\'s vesting is back-weighted — 5% year one, 15% year two, 40% year three. So year three is when it actually matters, and that\'s exactly when my system failed.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'The ₹1.8L mistake made it obvious I couldn\'t keep tracking LTCG windows manually. I came across Rovia through a blog post about LTCG tracking for US RSUs. The dashboard shows each lot with the exact calendar date it becomes long-term. That\'s the thing I needed and didn\'t have.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Hold until LTCG, then sell for a property down payment. That\'s the plan. My year-four lot is my second large Amazon vest — I know the exact date it qualifies. I\'ll sell after that and use it toward real estate. No more selling early.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate. I have a specific goal — property — and I don\'t want to take more risk than needed to get there. I\'m not trying to maximise returns, I\'m trying not to lose money to bad timing or taxes. The ₹1.8L experience made me a lot more deliberate about that.',
      },
    ],
  },

  {
    slug: 'neha-desai',
    name: 'Neha Desai',
    initials: 'ND',
    avatarColor: '#E50914',
    role: 'Staff Software Engineer',
    company: 'Netflix',
    companySlug: 'netflix',
    ticker: 'NFLX',
    location: 'Mumbai',
    tag: 'Lot Tracking',
    tagColor: '#60a5fa',
    teaser: '48 lots. 48 INR cost bases. My spreadsheet eventually broke — as expected.',
    stats: [
      { label: 'Rovia user since', value: 'Feb 2026' },
      { label: 'Lots imported', value: '48 lots' },
      { label: 'Manual entries', value: '0' },
      { label: 'Broker', value: 'Morgan Stanley' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Selectively, yes. I try to sell from lots where the LTCG window has already opened and the cost basis is most favourable. The problem is knowing which lot is which when you have 48 of them. Netflix vests monthly — after four years that\'s 48 separate positions, all with different vest dates and LTCG eligibility. Before Rovia, I was guessing.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'I built a Google Sheet. Vest date, share count, USD price, SBI TT rate for that exact day, INR equivalent, LTCG unlock date. Twelve new rows a year. For the first year and a half it was accurate. Then I started missing months — a vest would arrive mid-design-review week, I\'d tell myself I\'d update the sheet over the weekend. By late 2023 I had a backlog of 6–7 lots with incomplete data.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'A CA notice. Lot 31 — vested March 2022 — had an incorrect INR cost basis on my ITR. I\'d used the SBI TT rate from March 15 when the settlement was March 14. Small error, enough for a mismatch flag. The correction was manageable. What wasn\'t manageable was the realisation: I build systems that process millions of events without errors. I couldn\'t maintain my own 48-row spreadsheet.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'I want to start diversifying — not panic-sell, but consciously shift some of the older lots into other things over the next two or three years. I\'m too concentrated in Netflix. I love the company but 80% of my investable assets in one stock isn\'t a strategy, it\'s an accident of tenure.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate-aggressive. I have a long time horizon, stable income, no dependents yet. I\'m comfortable with equity risk. But I\'ve become much more deliberate about the difference between risk I\'m choosing and risk I\'m taking by default. Being concentrated in NFLX because I haven\'t gotten around to diversifying is the second kind. I\'m working on it.',
      },
    ],
  },

  {
    slug: 'arjun-krishnamurthy',
    name: 'Arjun Krishnamurthy',
    initials: 'AK',
    avatarColor: '#0866FF',
    role: 'Software Engineer L5',
    company: 'Meta',
    companySlug: 'meta',
    ticker: 'META',
    location: 'Bangalore',
    tag: 'Concentration Risk',
    tagColor: '#f43f5e',
    teaser: '₹58L in META, zero in anything else. I knew it was a problem. Kept deferring.',
    stats: [
      { label: 'Rovia user since', value: 'Mar 2026' },
      { label: 'Years vested', value: '3 years' },
      { label: 'Lots held', value: '12 lots' },
      { label: 'Broker', value: 'Morgan Stanley' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Once, in year two. I sold one lot and paid STCG because I hadn\'t tracked the 24-month window properly. I ended up paying more tax than I expected, decided to just hold everything after that and figure it out later. "Later" became three years.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Fidelity for the shares, a spreadsheet I updated inconsistently. Mostly I was just watching the META price and not doing much. When META went from $90 to $600, I told myself I\'d diversify "when it made sense." It kept going up. That was the wrong logic.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'Honestly, a single conversation with a friend who\'d gone through a similar situation at a different company. He asked me what my plan was if META dropped 40%. I didn\'t have a real answer. Rovia helped me see the actual LTCG windows on each lot so I could make a proper exit plan instead of just hoping.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Systematically sell the oldest LTCG-eligible lots and move the proceeds into Nifty index funds and some US total market exposure. Not all at once — maybe 20-25% per year. I still believe in Meta but I don\'t need to be 100% in it.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'I thought I was aggressive. Turns out I was just concentrated and lucky. There\'s a difference between taking calculated risk and just not getting around to selling. My actual plan going forward is moderate — diversified, some growth exposure, but not one company eating all of it.',
      },
    ],
  },

  {
    slug: 'deepika-reddy',
    name: 'Deepika Reddy',
    initials: 'DR',
    avatarColor: '#A2AAAD',
    role: 'ASIC Design Engineer',
    company: 'Apple',
    companySlug: 'apple',
    ticker: 'AAPL',
    location: 'Hyderabad',
    tag: 'FX Cost',
    tagColor: '#34d399',
    teaser: 'Apple vests quarterly. I was repatriating every time. The cost was invisible.',
    stats: [
      { label: 'Rovia user since', value: 'Feb 2026' },
      { label: 'Years vested', value: '4 years' },
      { label: 'FX cost saved (annual)', value: '~₹38K' },
      { label: 'Broker', value: 'Fidelity' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'About half. I sell roughly 50% of each vest shortly after it lands and repatriate the proceeds. The rest I hold. My thinking is that the sell-half covers the lifestyle and the hold-half builds the portfolio. It\'s worked okay.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Fidelity, sell within a week of vest, international wire to my Indian account. It felt clean and simple. I wasn\'t tracking the FX rate in detail — I\'d see the USD I sent and the INR that arrived and assume rounding explained the gap.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'A colleague who had done the math. He showed me that Fidelity\'s wire spread was about 45–50 paise per dollar. On my amounts, that was roughly ₹38,000 a year. He\'d switched to Rovia six months earlier. I switched the following quarter.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Continue the sell-half approach but more deliberately. I want to start holding Apple shares past the 24-month mark before selling the hold half — I\'ve been lazy about LTCG optimisation. The repatriation efficiency from Rovia frees up enough bandwidth to actually think about this properly.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Conservative-moderate. My salary is already in tech — I\'m inherently exposed to the sector\'s cycles. I want my investment portfolio to be a bit more balanced. AAPL is a reasonable anchor but I don\'t want to keep adding to it indefinitely.',
      },
    ],
  },

  {
    slug: 'siddharth-rao',
    name: 'Siddharth Rao',
    initials: 'SR',
    avatarColor: '#76B900',
    role: 'Staff Software Engineer',
    company: 'Nvidia',
    companySlug: 'nvidia',
    ticker: 'NVDA',
    location: 'Pune',
    tag: 'LTCG Timing',
    tagColor: '#f59e0b',
    teaser: 'NVDA went up 5x while I was figuring out what to do with it.',
    stats: [
      { label: 'Rovia user since', value: 'Mar 2026' },
      { label: 'Years vested', value: '5 years' },
      { label: 'Unrealised gain (INR)', value: '₹1.2Cr+' },
      { label: 'Broker', value: 'Morgan Stanley' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'I sold about 10% total across five years, and even that smaller amount generated a large tax bill because of how much NVDA appreciated. Each time I thought about selling more, the price kept going up and I\'d defer. The problem with a position that\'s done well is that selling feels like a mistake even when holding everything is the actual mistake.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Morgan Stanley, a spreadsheet, and a lot of watching the price. Honestly I wasn\'t managing them — I was observing them. Five years of quarterly vests with no real exit framework. My CA kept asking for the Schedule FA data and I kept building it manually. For a stock with this much appreciation, the INR cost basis calculations are significant.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'I finally got serious about building an exit plan and I needed to understand exactly which lots had the lowest INR cost basis and which had the best LTCG profile. I couldn\'t do that cleanly in a spreadsheet with 20 lots at different prices. Rovia gave me the lot-level view I needed to actually make decisions.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Sell gradually over three to four years to spread the tax impact. I don\'t want to dump everything in one year and pay a massive LTCG bill. The plan is 25% a year, rotating proceeds into diversified index funds. I\'ve already started — first tranche is done.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'I was aggressively concentrated in NVDA by accident, not design. My actual risk tolerance is moderate. I want to build a portfolio I don\'t have to watch every day. The last five years taught me that a stock can go up a lot and you can still make poor decisions because you never had a plan.',
      },
    ],
  },

  {
    slug: 'ananya-iyer',
    name: 'Ananya Iyer',
    initials: 'AI',
    avatarColor: '#00A1E0',
    role: 'Senior Product Manager',
    company: 'Salesforce',
    companySlug: 'salesforce',
    ticker: 'CRM',
    location: 'Bangalore',
    tag: 'First RSU',
    tagColor: '#c084fc',
    teaser: 'First vest landed. Nobody told me what Schedule FA was.',
    stats: [
      { label: 'Rovia user since', value: 'Apr 2026' },
      { label: 'Lots tracked', value: '8 lots' },
      { label: 'Years vested', value: '2 years' },
      { label: 'Broker', value: 'E*TRADE' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'No, not yet. Both my lots are still under 24 months. I\'m trying to be patient and wait for the LTCG window before I do anything. That\'s the one thing I did learn early — don\'t sell before 24 months if you can avoid it.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'E*TRADE for the shares. I was downloading the annual statement and handing it to my CA without really understanding what he needed. He kept asking for something called "INR cost basis at vest" and I didn\'t know what that meant or how to produce it. I Googled for two hours and found conflicting information.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'My CA flagged that he couldn\'t complete Schedule FA without the SBI TT rate for each vest date. I had no idea what that was. A colleague who\'d been in the same situation a year earlier pointed me to Rovia. The onboarding explained what Schedule FA was, why it applied to me, and then handled the data automatically. That was the first time the whole picture made sense.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Hold for now, then probably sell 50% when they hit two years and keep the rest. I\'m still figuring out what I want — a house eventually, maybe build a separate index fund portfolio. I don\'t want to make big decisions while I\'m still learning.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate, I think. RSUs are my first real equity exposure beyond a couple of mutual funds. I don\'t want to be too aggressive while I\'m still building my understanding. Ask me again in two years — I\'ll have a more informed answer.',
      },
    ],
  },

  {
    slug: 'vikram-nambiar',
    name: 'Vikram Nambiar',
    initials: 'VN',
    avatarColor: '#FF6B35',
    role: 'Senior SDE L6',
    company: 'Amazon',
    companySlug: 'amazon',
    ticker: 'AMZN',
    location: 'Chennai',
    tag: 'Switching Jobs',
    tagColor: '#fb923c',
    teaser: 'Left Amazon after 4 years. Needed my RSU records clean before day one at the startup.',
    stats: [
      { label: 'Rovia user since', value: 'Jan 2026' },
      { label: 'Lots transferred', value: '18 lots' },
      { label: 'Years vested at Amazon', value: '4 years' },
      { label: 'Broker', value: 'Morgan Stanley' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes. I sold about 30% of my Amazon position before leaving — I was taking a significant salary cut to join a 40-person startup and needed the liquidity buffer. The rest I transferred to Rovia and kept holding. AMZN has done well enough that I don\'t regret keeping the bulk of it.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Morgan Stanley for the shares, a spreadsheet for the India compliance side. It worked well enough while I was at Amazon with a steady income and no reason to look at the position carefully. When I decided to leave, I realised I had 18 lots with varying cost bases and LTCG windows and no clean picture of any of it.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'Leaving Amazon focuses your mind. I had 90 days from my last day to move vested shares out of the corporate plan or they\'d eventually be liquidated. I needed everything in one place, clearly documented, before I started the new job. Rovia was the cleanest solution — transfer in, full lot history tracked, Schedule FA ready for next year.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Hold most of it for now. My startup comp is lower, so having the AMZN position as a backstop matters. Once I see how the startup trajectory looks in 12–18 months, I\'ll decide whether to sell some AMZN to invest in the startup or keep it as a separate long-term position.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Aggressive. I took a 40% salary cut to join a 40-person company. I\'m clearly comfortable with risk. But I also want the AMZN holding to be the boring, stable part of my portfolio while the startup bet plays out. Even aggressive investors need some ballast.',
      },
    ],
  },

  {
    slug: 'shreya-patel',
    name: 'Shreya Patel',
    initials: 'SP',
    avatarColor: '#FF0000',
    role: 'Senior UX Designer',
    company: 'Adobe',
    companySlug: 'adobe',
    ticker: 'ADBE',
    location: 'Mumbai',
    tag: 'Lot Tracking',
    tagColor: '#60a5fa',
    teaser: 'I\'m a designer. I shouldn\'t need to understand SBI TT rates to file my taxes.',
    stats: [
      { label: 'Rovia user since', value: 'Mar 2026' },
      { label: 'Years vested', value: '3 years' },
      { label: 'Lots imported', value: '12 lots' },
      { label: 'Broker', value: 'E*TRADE' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes, when my CA told me to. I signed the paperwork, the shares sold, the money moved. I didn\'t really understand the decision — I just trusted him. Looking back, I wish I\'d understood what I was agreeing to. Now I at least understand the LTCG vs STCG distinction.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'My CA handled everything. I\'d get the E*TRADE annual statement, forward it to him, and hope he could figure it out. He\'d ask me for things like "the SBI TT rate on February 14th" and I\'d spend an hour on the RBI website before giving up and calling him back to say I couldn\'t find it.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'I received a compliance notice about an incorrect cost basis on my ITR. My CA explained that the number I\'d given him was wrong — I\'d pulled the SBI rate for the wrong date. I couldn\'t verify it or fix it because I didn\'t have the underlying data. A colleague suggested Rovia. Now I can actually see what I own and show my CA the right numbers.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Keep holding for now, sell when I need something specific. Eventually a flat in Mumbai. Adobe\'s been good to me. I don\'t feel the need to trade it — I just want to make sure my compliance is clean while I hold.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Honestly I don\'t know. I\'m not a finance person. I have mutual funds my dad set up years ago, a few SIPs I started two years ago, and these RSUs. I trust Rovia to handle the compliance. I\'d describe myself as conservative — I don\'t want surprises.',
      },
    ],
  },

  {
    slug: 'mohit-sharma',
    name: 'Mohit Sharma',
    initials: 'MS',
    avatarColor: '#34A853',
    role: 'Software Engineer L5',
    company: 'Google',
    companySlug: 'google',
    ticker: 'GOOGL',
    location: 'Hyderabad',
    tag: 'FX Cost',
    tagColor: '#34d399',
    teaser: 'I send money to parents every quarter. FX was hitting me on both legs of the transfer.',
    stats: [
      { label: 'Rovia user since', value: 'Jan 2026' },
      { label: 'Years vested', value: '5 years' },
      { label: 'FX saved (annual est.)', value: '~₹52K' },
      { label: 'Broker', value: 'Morgan Stanley' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes, every quarter. My parents are in Kerala and I send them money regularly — they depend on it. I sell a portion of each vest and repatriate it. It\'s not an investment decision, it\'s a commitment. The question has always been how to make the transfer as efficient as possible.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Morgan Stanley at Work, sell, wire to my Indian account, then UPI to my parents. Two steps, two FX conversions eating into the amount. The first one — the wire — I never questioned because I thought that\'s just how it works. The second one I\'d optimized to some extent. But the first was the bigger leak.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'My brother works in banking and explained the wire spread to me. I calculated what I\'d lost over five years on the Morgan Stanley side alone — it was significant. Then I added the Schedule FA complexity on top. Rovia addressed both: zero FX markup on repatriation and automatic INR cost basis for the annual filing.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Continue the quarterly sell-for-family-support pattern, but smarter. I\'m starting to hold some lots past the 24-month mark before selling, which I wasn\'t doing before. The family support amount is fixed; what I keep for myself can be optimised for tax efficiency.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Conservative-moderate. I have responsibilities that come before my investment preferences. I can\'t afford a scenario where a stock drops 40% right when I need to liquidate for my parents. So I keep the sell-and-repatriate discipline and hold only what I can genuinely afford to wait on.',
      },
    ],
  },

  {
    slug: 'lakshmi-venkataraman',
    name: 'Lakshmi Venkataraman',
    initials: 'LV',
    avatarColor: '#0071C5',
    role: 'Principal Engineer',
    company: 'Intel',
    companySlug: 'intel',
    ticker: 'INTC',
    location: 'Bangalore',
    tag: 'Lot Tracking',
    tagColor: '#60a5fa',
    teaser: 'Seven years of Intel RSUs held through a decade of flat performance. Finally building an exit plan.',
    stats: [
      { label: 'Rovia user since', value: 'Feb 2026' },
      { label: 'Years vested', value: '7 years' },
      { label: 'Lots imported', value: '28 lots' },
      { label: 'Broker', value: 'E*TRADE' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Barely. I sold a couple of lots in years two and three for specific expenses. After that I just... kept holding. Intel\'s stock has been difficult. I kept telling myself it would recover. Seven years later I have a large position at a variety of cost bases and no clear strategy.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'E*TRADE for the shares, a spreadsheet that I built well but updated inconsistently. My CA and I had a system that worked, but the Schedule FA was always the painful part. With 28 lots, the manual SBI TT rate lookup was at least half a day every year.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'When I finally decided to start planning a real exit from INTC and rotating into other assets, I needed to see exactly which lots made the most sense to sell first — lowest cost basis, longest held, best LTCG profile. My spreadsheet wasn\'t built for that kind of analysis. Rovia showed me the lot-level tax picture clearly.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Rotate out of Intel slowly and deliberately over the next three years. I\'m not panic-selling — I\'m accepting the reality of the position and moving toward a diversified portfolio. Some into Indian index funds, some into US total market. Intel might recover; I just don\'t want my retirement to depend on it.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'I thought I was patient. I think patience and strategy are different things. I was patient with Intel but I didn\'t have a strategy. Going forward I\'d say moderate — I want diversified growth without the company-specific concentration risk I\'ve been living with.',
      },
    ],
  },

  {
    slug: 'rohan-gupta',
    name: 'Rohan Gupta',
    initials: 'RG',
    avatarColor: '#000000',
    role: 'Staff Software Engineer',
    company: 'Uber',
    companySlug: 'uber',
    ticker: 'UBER',
    location: 'Bangalore',
    tag: 'Schedule FA',
    tagColor: '#a78bfa',
    teaser: 'Uber\'s stock is volatile. My Schedule FA situation was more volatile.',
    stats: [
      { label: 'Rovia user since', value: 'Mar 2026' },
      { label: 'Years post-IPO', value: '4 years' },
      { label: 'Lots tracked', value: '16 lots' },
      { label: 'Broker', value: 'Schwab' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes, regularly. Uber\'s been volatile — there\'ve been windows where it was up 30% and I\'ve taken profits. I don\'t have strong conviction to hold forever. I sell opportunistically, move to index funds, and don\'t look back.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Schwab equity plan for the shares. The Schwab interface is fine for US employees but has no India-tax awareness at all. I was exporting statements, looking up SBI TT rates manually, building Schedule FA data from scratch every year. My CA called it "the painful client" because my file always came in late.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'My CA told me directly: "Rohan, you need a better system." That was the gentle version. I\'d been late on Schedule FA two years running because I couldn\'t produce the data in time. Rovia connected to my Schwab history, imported all 16 lots, and had the FA data ready. My CA got my file two weeks early for the first time.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Continue the opportunistic sell strategy. I don\'t want to accumulate Uber beyond a certain point — I work there, I understand the business, and I think it\'s a good company, but I don\'t want my financial future tied to one company\'s stock. The index fund rotation is the plan.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate. I\'ve seen Uber\'s volatility from inside the company — quarterly earnings, competitive pressure, regulatory changes. That internal view makes you less sentimental about the stock. I want growth but not concentration. Moderate is the right word.',
      },
    ],
  },

  {
    slug: 'pooja-mehta',
    name: 'Pooja Mehta',
    initials: 'PM',
    avatarColor: '#00A4EF',
    role: 'Senior Program Manager',
    company: 'Microsoft',
    companySlug: 'microsoft',
    ticker: 'MSFT',
    location: 'Pune',
    tag: 'Lot Tracking',
    tagColor: '#60a5fa',
    teaser: 'Six months of maternity leave. Two vests happened. Nobody told me what to do next.',
    stats: [
      { label: 'Rovia user since', value: 'Feb 2026' },
      { label: 'Missed lots imported', value: '2 lots' },
      { label: 'Years vested', value: '3 years' },
      { label: 'Broker', value: 'Fidelity' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'I sold one lot during maternity leave — I needed the liquidity that month. That\'s the only sale I\'ve made in three years. Everything else has been accumulating. I\'m starting to think about what to do with the position now that I\'m back.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Fidelity, a quarterly reminder to update my spreadsheet, and a system that worked until I went on leave. When I came back six months later, I had two vests with no data recorded anywhere. My CA was asking for Schedule FA information I didn\'t have. I was trying to reconstruct it from memory and Fidelity statements, which took weeks.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'The reconstruction exercise after maternity leave made it clear that my system depended on me actively maintaining it. The moment I stopped — even for a legitimate reason — it broke. Rovia imports data automatically. It doesn\'t need me to remember to update a spreadsheet. That\'s what I needed.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Hold for now, probably sell when we\'re ready to buy a house in two or three years. I have a newborn, I\'m back at work, and I don\'t have the bandwidth to actively manage this. I want a system I can largely set and come back to. That\'s what I have now.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate, and honestly lower than before I had a child. My risk tolerance has shifted in a way that surprised me. Providing stability matters more to me now than maximising returns. I don\'t think that\'s a bad thing.',
      },
    ],
  },

  {
    slug: 'aditya-kumar',
    name: 'Aditya Kumar',
    initials: 'AK',
    avatarColor: '#3253DC',
    role: 'Senior Engineer',
    company: 'Qualcomm',
    companySlug: 'qualcomm',
    ticker: 'QCOM',
    location: 'Hyderabad',
    tag: 'Schedule FA',
    tagColor: '#a78bfa',
    teaser: 'Qualcomm isn\'t in the FAANG conversation. My compliance obligations were identical.',
    stats: [
      { label: 'Rovia user since', value: 'Apr 2026' },
      { label: 'Years vested', value: '6 years' },
      { label: 'Lots transferred', value: '24 lots' },
      { label: 'Broker', value: 'E*TRADE' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes, a few times. QCOM has had some good years. I sold about 30% of my total position across two tranches when the stock ran up. Used it for a car and to top up my emergency fund. The rest is still sitting in E*TRADE — or was, until I moved it.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'E*TRADE for shares, a spreadsheet I built in 2019 and stopped updating consistently by 2021. My CA asked for Schedule FA data every year and I\'d scramble to produce it. When I got a compliance notice after six years of this, I couldn\'t even verify whether my CA\'s reconstruction was accurate — I didn\'t have the source data anymore.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'The compliance notice. For a six-year position that\'s not enormous in absolute terms, the CA bill for fixing the ITR was genuinely painful. I\'d been thinking of Rovia as something for FAANG employees with large grants. When I ran the numbers, the compliance cost of not having a proper system was higher than I\'d assumed regardless of grant size.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Sell methodically as each lot hits LTCG eligibility and deploy into a mix of Nifty 50 index funds and US total market funds. Qualcomm\'s been fine but I don\'t need to hold it indefinitely. I\'d rather have a diversified passive portfolio than concentrated QCOM.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate. Stable income, no loans, some clear near-term goals. I\'m not trying to swing for the fences. I want steady long-term compounding in assets I don\'t have to watch. That\'s the direction I\'m moving.',
      },
    ],
  },

  {
    slug: 'preethi-subramaniam',
    name: 'Preethi Subramaniam',
    initials: 'PS',
    avatarColor: '#F80000',
    role: 'Staff Engineer',
    company: 'Oracle',
    companySlug: 'oracle',
    ticker: 'ORCL',
    location: 'Bangalore',
    tag: 'Lot Tracking',
    tagColor: '#60a5fa',
    teaser: 'Eight years of Oracle RSUs, three brokers, four spreadsheets. Called Rovia on a Saturday.',
    stats: [
      { label: 'Rovia user since', value: 'Mar 2026' },
      { label: 'Years vested', value: '8 years' },
      { label: 'Historical lots imported', value: '32 lots' },
      { label: 'Brokers consolidated', value: '3' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'About 40% across eight years. Paid off my home loan with one large sale, some smaller ones for expenses. Oracle\'s stock has done reasonably well. I have no regrets about what I sold, but the record-keeping around it became genuinely unmanageable.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Oracle has used different equity platforms over the years — I have grants tracked across E*TRADE, Fidelity, and a third platform from early days that I won\'t name. Three different export formats, four spreadsheets I\'d built at different points. My CA eventually told me he needed a clean data package before he could file. I spent three weekends trying to build one.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'My CA\'s ultimatum, effectively. He said he couldn\'t keep reconstructing my Schedule FA history every year from incomplete records. I called Rovia on a Saturday, explained the situation — eight years, three brokers, partial data. They walked me through uploading the transaction histories from each platform. Everything imported and reconciled.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Keep vesting, keep diversifying slowly. Oracle isn\'t going anywhere and neither am I, for now. I sell about 20% of each vest and move it to index funds. The rest accumulates until I have a reason to sell. I\'m not in a rush.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Conservative-moderate. Eight years at one company means I\'m already highly correlated with Oracle\'s trajectory. I want my other investments to be uncorrelated — diversified, passive, boring. The RSUs give me enough tech exposure. Everything else should be steadier.',
      },
    ],
  },

  {
    slug: 'nikhil-joshi',
    name: 'Nikhil Joshi',
    initials: 'NJ',
    avatarColor: '#049FD9',
    role: 'Principal Network Engineer',
    company: 'Cisco',
    companySlug: 'cisco',
    ticker: 'CSCO',
    location: 'Mumbai',
    tag: 'Long-term Hold',
    tagColor: '#a3e635',
    teaser: 'Twelve years at Cisco. Starting to think about what all this actually converts into.',
    stats: [
      { label: 'Rovia user since', value: 'Jan 2026' },
      { label: 'Years vested', value: '12 years' },
      { label: 'Lots managed', value: '48+ lots' },
      { label: 'Broker', value: 'Schwab' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Steadily over twelve years. Used it to pay off my home loan, fund my kids\' education accounts, and build a separate equity portfolio in India. I\'ve sold probably 60% of what I\'ve vested across the years. The remaining 40% is a large Cisco position that I\'m now planning how to unwind sensibly.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Schwab for the shares — Cisco uses Schwab. I had a system that worked for years: spreadsheet, CA does Schedule FA, repeat. But by year 10, the volume of historical data made the annual exercise genuinely heavy. My CA was spending two to three days just on my file.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'At twelve years, the Schedule FA had become a multi-day annual exercise and I wanted one clean place to see my full US equity picture. Rovia imported the historical Schwab data, reconciled the lot history, and cut my Schedule FA prep from two days to about an hour. That was worth it by itself.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Gradually unwind the Cisco concentration and convert it to reliable income-generating assets — some dividend-paying funds, some debt instruments. I\'ve accumulated enough. The priority now is converting that accumulation into something that generates steady cash flow rather than just appreciating in an account.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Low now. Ten years ago, moderate. When you\'re close to where you want to be financially, protecting what you have matters more than growing it. I\'ve had the growth phase. I\'m in the preservation phase. I\'m comfortable with that.',
      },
    ],
  },

  {
    slug: 'tanvi-agarwal',
    name: 'Tanvi Agarwal',
    initials: 'TA',
    avatarColor: '#635BFF',
    role: 'Staff Software Engineer',
    company: 'Stripe',
    companySlug: 'stripe',
    ticker: 'STRIPE',
    location: 'Bangalore',
    tag: 'First RSU',
    tagColor: '#c084fc',
    teaser: 'Joined Stripe when it was private. The equity situation when it listed was not simple.',
    stats: [
      { label: 'Rovia user since', value: 'Apr 2026' },
      { label: 'Years vested', value: '4 years' },
      { label: 'Lots imported', value: '16 lots' },
      { label: 'Broker', value: 'Carta / Morgan Stanley' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'I did a secondary sale when Stripe offered a tender opportunity before the listing. It was my first experience selling equity and the tax treatment was different from what I expected — the timeline and cost basis were not straightforward for that kind of transaction. I\'ve held everything since.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'The first two years the equity was on Carta — private company share tracking. When the listing happened, everything moved to Morgan Stanley. The transition created a lot history with two different platforms, different cost basis calculations, and a Schedule FA that my CA said was one of the most complex he\'d seen that year.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'My CA\'s honest assessment after the first post-listing ITR: "You need a proper system for this." He walked me through what Rovia does and why it would solve the specific problems in my situation — the multi-platform history, the INR cost basis at pre-listing grant prices, the LTCG window tracking on lots with unusual acquisition dates.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Hold for now. I joined Stripe because I believe in where it\'s going. I\'m not selling to diversify yet — I want to see how the next two to three years play out. When I do start selling, I want to do it systematically with full visibility on the tax implications of each lot.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Aggressive. I joined a pre-IPO company and concentrated my compensation in it for four years. That tells you something about my risk tolerance. I\'m comfortable with uncertainty. What I\'m not comfortable with is administrative chaos — I want the compliance side handled precisely even when the investment side involves real risk.',
      },
    ],
  },

  {
    slug: 'manish-choudhary',
    name: 'Manish Choudhary',
    initials: 'MC',
    avatarColor: '#00B388',
    role: 'Senior Software Engineer',
    company: 'ServiceNow',
    companySlug: 'servicenow',
    ticker: 'NOW',
    location: 'Hyderabad',
    tag: 'FX Cost',
    tagColor: '#34d399',
    teaser: 'ServiceNow isn\'t FAANG but the FX markup on repatriation was exactly the same.',
    stats: [
      { label: 'Rovia user since', value: 'Apr 2026' },
      { label: 'Years vested', value: '3 years' },
      { label: 'FX saved (est. annual)', value: '~₹29K' },
      { label: 'Broker', value: 'Fidelity' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes, I sell about half of each vest. ServiceNow\'s stock has performed well and I don\'t want to be overly concentrated in it. The proceeds go partly into Indian mutual funds and partly into my home savings account.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Fidelity NetBenefits, sell within a week of vest, wire home. My process was identical to a lot of Microsoft and Apple employees I know — the same broker, the same repatriation flow, the same hidden FX costs I wasn\'t aware of.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'I came across a thread on a finance forum where someone had calculated the FX spread on Fidelity wires and it got shared widely. I did the same calculation for my situation and found I was losing about ₹29,000 a year. That\'s a decent SIP amount. Switching took less than a week.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Keep the sell-half strategy but start holding the kept half past the 24-month LTCG window before I sell. I was selling too early before — I wasn\'t tracking the dates carefully enough. Now I can actually see the countdown per lot and plan around it.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate. I have a home purchase goal in two years and an education fund I\'m building for my daughter. Those are specific, time-bound goals that require some capital preservation. I can take risk with what\'s beyond those — but not with the baseline.',
      },
    ],
  },

  {
    slug: 'kavitha-rajan',
    name: 'Kavitha Rajan',
    initials: 'KR',
    avatarColor: '#0071CE',
    role: 'Senior Product Manager',
    company: 'Walmart Global Tech',
    companySlug: 'walmart',
    ticker: 'WMT',
    location: 'Bangalore',
    tag: 'Schedule FA',
    tagColor: '#a78bfa',
    teaser: 'Walmart Global Tech is 5,000 engineers in Bangalore. The RSU compliance conversation never comes up.',
    stats: [
      { label: 'Rovia user since', value: 'May 2026' },
      { label: 'Years vested', value: '4 years' },
      { label: 'Lots tracked', value: '16 lots' },
      { label: 'Broker', value: 'Merrill Lynch' },
    ],
    qa: [
      {
        question: 'Have you ever sold RSUs?',
        answer: 'Yes, two lots so far. WMT has been stable but not exciting — it\'s a defensive stock, not a high-growth one. I sold when I needed to, not because of any strategy. Now I\'m starting to think more deliberately about what to do with the accumulating position.',
      },
      {
        question: 'How were you managing your RSUs before using Rovia?',
        answer: 'Merrill Lynch equity plan. I\'d never even heard of Schedule FA until a friend at Google mentioned it casually two years after my first vest. I went to my CA and he said yes, I should have been filing it — and that he would need the INR cost basis data for the previous two years. That was a difficult conversation.',
      },
      {
        question: 'What made you transfer your RSUs to Rovia?',
        answer: 'The catch-up exercise. Reconstructing two years of SBI TT rates manually was painful. I found Rovia while looking for a better way to handle the ongoing filing. It also turned out that several colleagues at Walmart Global Tech were in the same situation — we\'d all been under-informed about the India compliance side of US RSUs.',
      },
      {
        question: 'What do you want to do with your RSUs?',
        answer: 'Hold WMT as a stable anchor in my portfolio and slowly add to it. It\'s not a high-excitement position but it\'s steady. I want the rest of my portfolio to be more growth-oriented — Indian mid-caps, some US tech exposure through funds. The RSU position is the defensive layer.',
      },
      {
        question: 'What do you think is your risk score as an investor? Why?',
        answer: 'Moderate. I came to RSUs late compared to my FAANG peers and I\'m still building my financial literacy around them. I\'m not going to swing aggressively until I understand the full picture better. What I do know is that compliance needs to be clean, and now it is.',
      },
    ],
  },
];

export function getStory(slug) {
  return stories.find((s) => s.slug === slug) || null;
}
