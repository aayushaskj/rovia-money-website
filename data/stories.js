// ─────────────────────────────────────────────
// Human case studies — first-person narratives
// Each covers one core RSU pain point
// ─────────────────────────────────────────────

export const stories = [
  {
    slug: 'rahul-schedule-fa',
    name: 'Rahul Sharma',
    initials: 'RS',
    avatarColor: '#4285F4',
    role: 'Engineering Manager',
    company: 'Google',
    companySlug: 'google',
    ticker: 'GOOGL',
    broker: 'Morgan Stanley at Work',
    yearsVested: 6,
    tag: 'Schedule FA',
    tagColor: '#a78bfa',
    headline: 'I spent a full weekend every July rebuilding my own cost basis. Then I found Rovia.',
    subheadline: 'Six years of Google RSUs. 24 lots. One very long July.',
    keyMetric: { value: '47 min', label: 'to file Schedule FA (was a full weekend)' },
    pullquote: 'I used to dread July more than any quarterly review. Now Schedule FA is done before my CA even sends the reminder.',
    readTime: '5 min read',
    story: `I joined Google in 2018 as an L5 SWE and got promoted to EM in 2021. By the time I started thinking seriously about my RSUs, I had six years of quarterly vests — 24 lots of GOOGL sitting in Morgan Stanley at Work.

Every July, the same ritual. Download the Shareworks annual statement. Open a spreadsheet. For each lot: find the vest date, look up the SBI TT rate for that exact day on the RBI website, compute INR equivalent, record it. Twenty-four rows. Twenty-four manual calculations. Then cross-reference with my CA's Schedule FA template.

It took me a weekend the first time. By year four, I had it down to a Saturday — but it still dominated my calendar from the moment the financial year ended.

**The year it broke**

In 2023, my CA sent me a bill with a line item I hadn't seen before: "Complex foreign asset reconciliation — ₹15,000." I called him. He explained that my Schedule FA had errors — two of my SBI TT rates were from the wrong dates. I'd pulled rates for the date I *received* the vest notification, not the actual vest settlement date, which differed by a day or two. That's ₹15,000 to fix my own mistakes.

That's when I started looking.

I'd heard about Rovia from a colleague on my team. She had moved her GOOGL lots the previous quarter and mentioned it casually. I spent about an hour reading about it that week.

**What I expected vs. what happened**

I expected another brokerage account — something like IBKR or Vested, where you transfer shares in and then figure out the India tax side yourself. What Rovia actually does is different: it holds the INR cost basis *as data*, not just as shares.

When I transferred my lots from Morgan Stanley, Rovia matched each lot to its vest date and pulled the SBI TT rate for that specific day. Not an approximation. The actual rate, source-referenced. My first Schedule FA export took me 47 minutes — and most of that was me double-checking the output because I couldn't believe it was done.

**What I tell other Googlers**

The Morgan Stanley Shareworks interface isn't designed for Indian tax compliance. It was built for US employees. The USD reporting, the wire-heavy repatriation flow, the complete absence of anything India-tax-adjacent — it's not a flaw, it's just not built for us.

Rovia is.

I still have my Shareworks account for future vests. I just transfer to Rovia once they land, and I haven't opened a spreadsheet in July since.`,
  },

  {
    slug: 'priya-fx-markup',
    name: 'Priya Nair',
    initials: 'PN',
    avatarColor: '#00A4EF',
    role: 'Director of Engineering',
    company: 'Microsoft',
    companySlug: 'microsoft',
    ticker: 'MSFT',
    broker: 'Fidelity NetBenefits',
    yearsVested: 5,
    tag: 'FX Cost',
    tagColor: '#34d399',
    headline: 'I lost ₹2.2 lakh to FX markup over 5 years. The worst part — I never noticed.',
    subheadline: 'Five years of quiet erosion on every MSFT repatriation.',
    keyMetric: { value: '₹2.2L', label: 'in FX markup lost over 5 years' },
    pullquote: 'The worst part is I knew about FX markups — I negotiate exchange rates for international travel. I just never thought to apply the same lens to my own RSU repatriation.',
    readTime: '4 min read',
    story: `I've been at Microsoft since 2019, currently a Director leading the Azure infrastructure team in Hyderabad. My MSFT RSUs vest quarterly via Fidelity NetBenefits. For the first three years, my process was simple: sell, wire home via Fidelity's international wire, move on.

I wasn't careless about money. I negotiate hotel rates, use fee-free cards abroad, track SIPs to the rupee. But somehow the RSU repatriation process had a blind spot.

**The conversation that changed it**

In late 2023, a colleague mentioned, almost in passing, that he'd switched brokers because of the FX spread on repatriation. I asked what he meant. He walked me through it: Fidelity's wire fee (around $25 per transfer), plus the spread between the interbank rate and the rate Fidelity actually gives you — typically 40 to 60 paise per dollar.

I went home that night and pulled five years of wire receipts.

The math was straightforward and painful. I'd been repatriating roughly $100,000 per year. At 44 paise average spread plus the wire fee converted to INR, I was losing approximately ₹44,000 per year. Over five years: ₹2.2 lakh. Gone. I had the receipts for every single one.

It wasn't fraud. Fidelity was doing exactly what they disclosed. I just hadn't read the disclosure carefully enough — or compared it to anything else.

**Why I hadn't noticed**

The spread doesn't appear as a line item. You see the USD amount you sent and the INR amount that arrived. The gap feels like rounding. Unless you benchmark it against the actual interbank rate at that moment — which nobody does manually — you never see it.

**Moving to Rovia**

I transferred my remaining MSFT lots to Rovia the following month. The process took about a week for the ACATS to settle, which is standard. No shares were sold in transit — the transfer is in-kind.

First repatriation on Rovia: zero platform FX markup. The money arrived at the interbank rate. I did the same benchmark calculation I'd done after that conversation with my colleague. The difference was exactly what Rovia had promised: ₹0.

I still use Fidelity for my future vests — Rovia doesn't replace where the RSUs land, it's where they live after they vest. I transfer within a day or two of each vest now.

**What I'd tell my team**

At Director level, most people on my team have been vesting for 3–5 years. They're repatriating significant amounts. Almost none of them have done this calculation. The next time someone on your team talks about RSUs, ask them what FX rate they're getting on repatriation. The answer is usually "I don't know." The math from there is almost always surprising.`,
  },

  {
    slug: 'karthik-ltcg-timing',
    name: 'Karthik Menon',
    initials: 'KM',
    avatarColor: '#FF9900',
    role: 'Senior SDE-II',
    company: 'Amazon',
    companySlug: 'amazon',
    ticker: 'AMZN',
    broker: 'Morgan Stanley at Work',
    yearsVested: 3,
    tag: 'LTCG Timing',
    tagColor: '#f59e0b',
    headline: 'I almost sold a week early and would have paid ₹1.8L in extra tax. My CA caught it.',
    subheadline: 'Amazon\'s back-weighted vesting means year 3 is your biggest lot. The 24-month window isn\'t something you can afford to miss.',
    keyMetric: { value: '₹1.8L', label: 'in excess STCG tax avoided' },
    pullquote: "Amazon's back-weighted vesting means your biggest lots all arrive at once. Missing the 24-month window on those isn't a small mistake — it's the most expensive mistake you can make.",
    readTime: '5 min read',
    story: `I joined Amazon in 2021 as an SDE-II in the Bangalore office. If you're not familiar with how Amazon RSUs vest, the schedule is unusual: 5% in year one, 15% in year two, 40% in year three, 40% in year four. It's back-weighted deliberately — Amazon wants you to stay.

The implication is that your first two years, you're getting relatively small amounts. Year three is when it gets serious.

**What happened in year three**

My year-three lot vested in Q3 2024 — about $47,000 worth of AMZN, which was my largest single vest to date. Around the same time, I was planning some significant expenses: a home renovation and a portion of a property down payment. I decided to sell a chunk of the AMZN lot to fund these.

I had the lot in Morgan Stanley at Work. I knew I needed to hold for 24 months from vest date to qualify for LTCG treatment in India. I thought I was tracking this — I had a note in my phone with the vest date.

My CA, who handles my ITR, called me when I sent him the sale details. He asked when the lot had vested. I told him. He went quiet for a moment, then said: "Karthik, you sold 6 days before the 24-month mark."

**What 6 days cost**

On a $47,000 lot, selling 6 days early meant the entire gain was taxed as Short Term Capital Gain — at 30% plus applicable surcharge — instead of Long Term Capital Gain at 12.5%. The difference, on my specific gain, was approximately ₹1.8 lakh.

My CA filed correctly. I paid the STCG. The note in my phone had the vest date right, but I had miscounted — I had assumed 24 months meant 730 days, not accounting for the exact calendar logic.

This was not a grey area. This was a miscalculation that cost real money, and it was completely avoidable.

**Finding Rovia**

A few months after this I came across Rovia through a vested.blog post about LTCG tracking for US RSUs. The thing that stood out immediately was the per-lot countdown: each lot shows vest date, INR cost basis at vest, and the exact calendar date it qualifies as long-term.

I transferred my remaining lots. My year-four vest, which will be my second large lot, now has a countdown timer in my Rovia dashboard. I know the date. I have a calendar reminder. I will not miss it.

**The compounding nature of this mistake**

Back-weighted vesting means most Amazon employees face this problem in years three and four — exactly when their lots are largest. It's the worst possible time to be tracking this in a notes app.

The 24-month rule isn't complicated in theory. But when you're tracking 8–12 lots across different vest dates, all with different LTCG unlock windows, the probability of error compounds with every lot. A proper tracker isn't a luxury. For Amazon employees in year three, it's essentially mandatory.`,
  },

  {
    slug: 'neha-lot-complexity',
    name: 'Neha Desai',
    initials: 'ND',
    avatarColor: '#E50914',
    role: 'Staff Software Engineer',
    company: 'Netflix',
    companySlug: 'netflix',
    ticker: 'NFLX',
    broker: 'Morgan Stanley at Work',
    yearsVested: 4,
    tag: 'Lot Tracking',
    tagColor: '#60a5fa',
    headline: '48 lots. 48 INR cost bases. 48 LTCG countdowns. My spreadsheet was a liability.',
    subheadline: 'Netflix vests monthly. After 4 years, the complexity isn\'t a minor inconvenience — it\'s a compliance risk.',
    keyMetric: { value: '48 lots', label: 'tracked automatically — zero manual entries' },
    pullquote: "The CA notice wasn't the worst part. The worst part was knowing it was going to happen eventually. Nobody maintains 48 rows in a spreadsheet perfectly for four years.",
    readTime: '4 min read',
    story: `Netflix has one of the most unusual compensation structures in tech. There are no formal performance bonuses — instead, total compensation is delivered primarily as salary, and for engineers at certain levels, a significant RSU component. What makes it different from every other company I know: RSUs vest monthly. Every month, like clockwork.

I've been at Netflix for four years now as a Staff Engineer. That means 48 vests. 48 separate lots of NFLX, each with its own vest date, its own INR cost basis, and its own 24-month LTCG countdown.

**The spreadsheet phase**

I'm an engineer. My first instinct was to build a system for this. I set up a Google Sheet in 2021: vest date, number of shares, USD price at vest, SBI TT rate for that day, INR equivalent, LTCG unlock date. Twelve new rows per year. I updated it manually every month after each vest.

For the first year and a half, it worked. The sheet was accurate, I felt in control, and I could see my LTCG windows clearly.

Then I started missing months. A vest would land while I was in a design review week, and I'd tell myself I'd update the sheet over the weekend. Sometimes I did. Sometimes I didn't. By late 2023, I had a backlog of 6–7 lots with incomplete data.

**The CA notice**

In early 2024 I received a notice from my CA. One of my NFLX lots — lot 31, vested in March 2022 — had an incorrect INR cost basis on my ITR. I had used the SBI TT rate from March 15 when the actual vest settlement was March 14. The difference was small in absolute terms but enough to trigger a mismatch flag.

The correction was manageable. The embarrassment, less so. I'm a Staff Engineer. I build systems that process millions of events without errors. I couldn't maintain my own 48-row spreadsheet.

**What Rovia actually solved**

I moved to Rovia after the notice. The onboarding took about 20 minutes. I uploaded my Morgan Stanley transaction history, and Rovia imported all 48 lots — vest dates, share counts, USD prices, and the INR cost basis at each vest date, pulled from SBI TT rate records for each specific day.

The dashboard shows all 48 lots. Each one has a status: long-term eligible (green), approaching the window, or still short-term. When I need to decide which lots to sell, I can see at a glance which ones have the most favourable tax treatment.

My May 2025 vest arrived and was imported automatically. I didn't open a spreadsheet.

**The thing nobody tells you about Netflix comp**

Monthly vesting sounds like a benefit — and it is, financially. But the tax complexity scales linearly with tenure. A new joiner has 12 lots after year one, manageable. I have 48, which means 48 separate INR calculations that all need to be right.

The standard advice is "just track it in a spreadsheet." That advice is fine for quarterly vesting. For monthly vesting, it's advice that eventually produces a CA notice. I know this from experience.`,
  },
];

export function getStory(slug) {
  return stories.find((s) => s.slug === slug) || null;
}
