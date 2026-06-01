import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #9 — Choosing an Indian Platform for Your US RSUs: The 7-Factor Framework
// ─────────────────────────────────────────────

export const meta = {
  slug: 'choosing-indian-us-equity-platform',
  title: 'Choosing an Indian Platform for Your US RSUs: The 7-Factor Framework',
  dek: 'A practical evaluation framework — seven factors, the questions to ask any vendor, and the failure modes that show up in your ITR season — for picking the platform that actually handles your US equity correctly from India.',
  publishDate: '2026-06-04',
  updatedDate: '2026-06-04',
  author: 'Rovia Editorial',
  tags: ['platform', 'evaluation', 'rsu', 'pillar'],
  readingMinutes: 12,
  seoTitle: 'Choosing an Indian Platform for US RSUs: 7-Factor Framework (2026)',
  seoDescription:
    'How to evaluate any Indian platform managing your US RSUs — INR cost basis methodology, Schedule FA automation, 24-month LTCG tracking, FX markup, broker coverage, Form 67, tax-aware sale recommendations. With diagnostic questions.',
  seoKeywords:
    'indian platform us rsu, rsu management india, schedule fa platform, rsu tax software india, foreign equity platform india, rsu broker integration india',
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
    q: 'Is this framework just a pitch for Rovia?',
    a: 'No. The seven factors come straight from the failure modes engineers actually hit during ITR season — wrong cost basis, missing Schedule FA rows, mistimed sales across the 24-month cliff, FX leak on remit. We do state where Rovia sits on each factor, because that is the honest place to make product claims. We deliberately do not make pricing or feature claims about Vested, INDmoney, or any other incumbent — their offerings change, our data would get stale, and the framework is more useful to you than a stale comparison would be.',
  },
  {
    q: 'I just want the cheapest option. Can I skip the framework?',
    a: 'Sticker price is the easiest thing to compare and the worst proxy for total cost. A platform with a low subscription that uses month-end average FX instead of the per-vest RBI TT rate can quietly under-report your cost basis by 1–2% and add ₹30K–₹2L of avoidable tax per vest. A platform with no Schedule FA automation costs you 4–6 hours of CA time every July. Look at all-in cost across the seven factors, not just the subscription line.',
  },
  {
    q: 'My CA already handles all of this. Do I still need a platform?',
    a: 'It depends on what your CA actually does versus what you assume they do. Many CAs handle the ITR filing but rely on you to provide INR cost basis per lot, Schedule FA rows, and Form 67 inputs. The platform is the layer between your broker statement and your CA — if you are giving your CA a clean ITR-ready file, they will charge less and file faster. If you are giving them a Schwab PDF and a calculator, the work — and the error rate — is theirs but the bill is yours.',
  },
  {
    q: 'How do I evaluate data accuracy before committing?',
    a: 'Use a single-vest pilot. Pick one historical vest where you already know the correct answers — the right RBI TT rate, the right INR cost basis, the right Schedule FA row. Import that one lot into any platform you are evaluating and see whether the numbers match yours to the rupee. Discrepancies of more than ₹100 on a single lot are a methodology problem, not a rounding problem, and they will compound across every other vest you own.',
  },
  {
    q: 'Does the framework apply to ESPP and stock options too, not just RSUs?',
    a: 'Mostly yes. INR cost basis methodology, Schedule FA generation, FX cost on repatriation, and broker coverage apply identically. The 24-month LTCG clock applies — but for ESPP, the clock starts at the purchase date, not the offering date (different from RSU vest mechanics). For ISOs and NSOs, the perquisite-vs-capital-gains split is different. A platform that handles RSUs well usually handles ESPP well; stock options are a smaller, more specialized cohort and worth confirming separately.',
  },
  {
    q: 'What about post-sale repatriation under LRS — does the platform handle that?',
    a: 'LRS (Liberalized Remittance Scheme) is an outbound rule for sending money out of India. RSU sale proceeds coming into India are inbound and outside LRS — they ride on RBI&apos;s inward remittance rules and your bank&apos;s source-of-funds questionnaire. A good platform will pre-populate the source-of-funds documentation (vest dates, INR cost basis, sale proceeds, capital gains computed) so your bank clears the wire without a 2-week hold. Ask specifically about source-of-funds packs before you commit.',
  },
];

export function Body() {
  return (
    <>
      {/* ── Opening ─────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>The decision, not the brochure</h2>
      <p style={sP}>
        Most engineers evaluating an Indian platform for their US RSUs ask the wrong first question. They ask <em>what does it cost</em>, when the answer they actually need is <em>does it compute my INR cost basis correctly</em>. The first question is a sticker on a website. The second is a methodology decision that ripples through every line of your ITR for as long as you hold those shares.
      </p>
      <p style={sP}>
        This guide is the framework we wish someone had handed us five years ago. Seven factors, each with two or three diagnostic questions you can put to any platform — Rovia included — to decide whether it can actually carry the operational weight of managing a multi-broker, multi-year RSU position from India. Incumbents in this space include Vested, INDmoney and several others; verify the specifics on their current pricing and product pages, because that surface changes faster than any blog post can keep up with. The framework below is platform-agnostic by design.
      </p>
      <p style={sP}>
        For the underlying tax mechanics referenced throughout, the foundation is the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>. For the disclosure side, the <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link>. For the broker-mechanics side, the <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link>. This pillar is a layer above all of those — how to pick the tooling that gets each one right.
      </p>

      <div style={sCallout}>
        <span style={sStrong}>The shortcut version:</span> if a platform cannot answer Factor #1 (per-vest-day RBI TT rate, lot by lot) with a clean &ldquo;yes&rdquo;, the other six factors do not matter — the cost basis itself is wrong, and every downstream number is wrong too.
      </div>

      {/* ── Section 1 ─────────────────────────────────── */}
      <h2 style={sH2}>1. INR cost basis methodology</h2>
      <p style={sP}>
        Every Indian tax computation on your US RSUs depends on one number per vest: the INR cost basis at the moment those shares landed in your account. Get this wrong, and every capital-gains figure, every Schedule FA row, every Form 67 entry compounds the error for years.
      </p>
      <p style={sP}>
        The correct methodology is settled and unambiguous. Per the Income Tax Department&apos;s long-standing practice (and the convention applied in CBDT circulars and ITAT rulings on foreign-equity perquisites), the conversion rate is the <span style={sStrong}>RBI reference rate (TT buying)</span> on the date of each individual vest. Not a monthly average. Not your broker&apos;s spot rate. Not the rate on the date you are filing the return. The rate as published by the RBI on the specific calendar day each lot vested.
      </p>
      <p style={sP}>
        The failure modes are common. A platform that uses month-end averages will be off by 0.3–1.2% per lot depending on intra-month volatility. A platform that uses the broker&apos;s spot rate will be off by 30–100 bps in either direction. A platform that uses the current-day rate to back-fill historical vests will produce numbers that have no relationship to the underlying tax rule. Each of these errors is small per lot and large across twenty quarterly vests held for five years.
      </p>
      <p style={sP}>
        <span style={sStrong}>Rovia&apos;s position:</span> per-vest-day RBI TT buying rate, applied lot by lot, sourced from the RBI&apos;s historical reference rate database. Cost basis is computed once at vest, stored, and never overwritten by later FX moves.
      </p>

      <h3 style={sH3}>Questions to ask the platform</h3>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>What exchange rate do you use to convert USD vest value to INR — RBI TT buying, broker spot, monthly average, or something else? Show me the rate you used for any specific historical date.</li>
        <li style={{ marginBottom: '8px' }}>Is cost basis stored lot by lot at vest date, or is it recomputed every time I open the dashboard?</li>
        <li>Where do you source your historical RBI TT data, and how far back does the database go?</li>
      </ul>

      {/* ── Section 2 ─────────────────────────────────── */}
      <h2 style={sH2}>2. Schedule FA generation</h2>
      <p style={sP}>
        Schedule FA is the disclosure most engineers spend four to six hours on every July, and it is the disclosure most likely to be quietly wrong even when it looks complete. The <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link> walks through the table-by-table mechanics — A1, A2, A3, the calendar-year accounting period, the peak-value-per-lot computation. A platform either handles all of that or hands you back a half-built spreadsheet.
      </p>
      <p style={sP}>
        The non-negotiable outputs are: one row in A3 per held lot per accounting period (not one aggregated row per ticker), the calendar-year window (Jan 1–Dec 31, not Apr 1–Mar 31), peak value computed daily per lot using daily RBI rates, closing value on Dec 31, and sale proceeds populated for any lot sold during the period. A platform that ships an Excel template and asks you to fill it in is doing 20% of the work and charging for 100%.
      </p>
      <p style={sP}>
        The failure modes are predictable. Some platforms aggregate all lots of one ticker into a single A3 row — defensible-looking, mechanically incorrect, and the kind of filing that gets flagged on reassessment. Some use financial-year boundaries because that is how every other Indian tax form works — but Schedule FA is the exception, and the calendar-year quirk is the single most common error in first-year filings. Some report only closing value, skipping peak value entirely.
      </p>
      <p style={sP}>
        <span style={sStrong}>Rovia&apos;s position:</span> full Schedule FA automation in the exact ITR-2/3 column format. Tables A2 (account) and A3 (each lot, one row per vest) pre-filled. Calendar-year accounting period. Per-lot peak value computed daily across Jan 1–Dec 31 using daily RBI TT rates. Copy-paste-ready output for the ITR portal or your CA.
      </p>

      <h3 style={sH3}>Questions to ask the platform</h3>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Show me a sample Schedule FA output. Does it have one row per lot, or aggregated rows per ticker?</li>
        <li style={{ marginBottom: '8px' }}>Is the accounting period calendar year (Jan–Dec) or financial year (Apr–Mar)?</li>
        <li>How is peak value computed — daily, monthly, or year-end?</li>
      </ul>

      {/* ── Section 3 ─────────────────────────────────── */}
      <h2 style={sH2}>3. 24-month LTCG clock tracking</h2>
      <p style={sP}>
        Selling a foreign-equity lot at month 23 versus month 25 changes your tax rate from your slab (~35.88% all-in for a senior IC in the highest surcharge band) to the post-Finance Act 2024 LTCG rate of 12.5% flat. On a ₹10L gain, that is a ₹2.34L difference for two months of patience. The <Link href="/blog/vest-cycle-ltcg-strategy" style={{ color: 'var(--gold)' }}>Vest-Cycle Strategy pillar</Link> covers the math in depth.
      </p>
      <p style={sP}>
        A platform that surfaces a holdings dashboard but does not warn you about an approaching month-23 cliff is a passive viewer of your broker data, not a decision-support tool. The right behaviour is two-fold. First, every lot in inventory has a holding-period clock visible at all times: days held since vest, days remaining to LTCG, and a clear flag once the lot crosses the 24-month threshold. Second, when you initiate a sale, the platform identifies which lots are LTCG-eligible versus STCG-only and lets you specify lot selection — never a blind FIFO default.
      </p>
      <p style={sP}>
        The failure modes are: holding-period not tracked at lot level (only at ticker level, which is meaningless for tax purposes); no alerts before the cliff; no lot-selection support on sales. Each of these turns a tax-aware platform into a viewer of your broker statements with extra steps.
      </p>
      <p style={sP}>
        <span style={sStrong}>Rovia&apos;s position:</span> per-lot 24-month clock with calendar alerts at month 23 (warn before the STCG cliff) and at month 24 + 1 day (LTCG eligible). Sale flow surfaces LTCG-eligible versus STCG-only lots, with the all-in tax delta computed per lot at current price.
      </p>

      <h3 style={sH3}>Questions to ask the platform</h3>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Can you show me every lot I hold with its individual days-to-LTCG counter?</li>
        <li style={{ marginBottom: '8px' }}>Do you alert me before a lot crosses the 24-month mark, and how (email, SMS, in-app)?</li>
        <li>When I place a sale order, can I specify which lots to sell, and do you show me the tax delta between LTCG-eligible and STCG-only lots?</li>
      </ul>

      {/* ── Section 4 ─────────────────────────────────── */}
      <h2 style={sH2}>4. FX cost on repatriation</h2>
      <p style={sP}>
        Every rupee that comes into India from a US RSU sale passes through one FX conversion. The spread on that conversion is a hidden, often invisible cost — and at the scale of senior-IC sale events, it is a meaningful number. The <Link href="/blog/fx-repatriation-rsu-india" style={{ color: 'var(--gold)' }}>FX & Repatriation pillar</Link> covers the mechanics of LRS, inward remittance, and bank charges.
      </p>
      <p style={sP}>
        US brokers typically apply 50–100 bps of spread over interbank on USD-to-INR conversions, plus a wire fee of $25–$50. On a ₹50L remit, 75 bps is ₹37,500 of pure FX friction. On a ₹1Cr remit, 90 bps is ₹90,000. The relevant questions for a platform are: what spread do you apply on conversions you handle, do you let me use my own remittance channel if I prefer, and do you pass through interbank or take a markup?
      </p>
      <p style={sP}>
        The failure modes are usually two: the platform routes through the broker&apos;s default FX (giving you no FX advantage at all), or the platform charges a markup of its own on top of interbank. Both are common. The right answer is a 0-markup route — interbank rate plus the actual wire fee, nothing else.
      </p>
      <p style={sP}>
        <span style={sStrong}>Rovia&apos;s position:</span> 0 bps markup on FX. Conversions on Rovia-handled sale-and-remit transactions clear at interbank with only the actual wire fee passed through. On a ₹50L remit, that is ~₹37,500 of saved cost versus a 75-bps broker default.
      </p>

      <h3 style={sH3}>Questions to ask the platform</h3>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>What FX spread do you apply on USD-to-INR conversion — 0 bps, 30–50 bps, 100 bps?</li>
        <li style={{ marginBottom: '8px' }}>Is the markup on your side or pass-through from the broker?</li>
        <li>What wire fees and bank charges do I see end to end on a ₹50L test remit?</li>
      </ul>

      {/* ── Section 5 ─────────────────────────────────── */}
      <h2 style={sH2}>5. Broker coverage</h2>
      <p style={sP}>
        Every minute you spend hand-keying broker statements into a platform is a minute the platform owed you. The <Link href="/blog/transfer-rsus-to-india" style={{ color: 'var(--gold)' }}>Broker Transfer pillar</Link> covers the four brokers that handle 95% of Indian-resident RSU positions: Schwab Equity Awards (Google, Apple), Morgan Stanley StockPlan (Meta, Microsoft, Netflix), E*TRADE Stock Plans (Amazon, Adobe), and Fidelity Stock Plan Services. A platform either ingests each of those directly or asks you to do it.
      </p>
      <p style={sP}>
        Direct ingestion can mean several things — at the strongest end, a credentialed API or OFX feed that pulls lot-level data automatically; at the weakest, a parser that reads a downloaded PDF or CSV from the broker. Both are dramatically better than manual entry, but PDF parsing is fragile (brokers redesign their statement templates regularly) and you should ask which one your platform uses.
      </p>
      <p style={sP}>
        The failure modes are: broker not supported at all (forcing manual entry); broker supported only for the regular brokerage account, not the equity-awards account (which is where your RSUs actually live); broker supported for cost basis but not for sale history, leaving capital-gains computation broken on every sold lot.
      </p>
      <p style={sP}>
        <span style={sStrong}>Rovia&apos;s position:</span> direct ingestion of Schwab Equity Awards, Morgan Stanley StockPlan, E*TRADE Stock Plans, and Fidelity Stock Plan Services. Lot-level vest data and sale data both flow through automatically. No manual lot entry on standard onboarding.
      </p>

      <h3 style={sH3}>Questions to ask the platform</h3>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Do you ingest Schwab Equity Awards, Morgan Stanley StockPlan, E*TRADE Stock Plans, and Fidelity Stock Plan Services natively?</li>
        <li style={{ marginBottom: '8px' }}>For each, is it an API feed, OFX, or PDF parse — and how often do you re-test against the broker&apos;s current statement format?</li>
        <li>Do you cover the equity-awards account specifically, or only the standard brokerage account at that firm?</li>
      </ul>

      {/* ── Section 6 ─────────────────────────────────── */}
      <h2 style={sH2}>6. Form 67 (FTC) handling</h2>
      <p style={sP}>
        If your employer&apos;s stock pays dividends — Microsoft, Apple, Cisco, IBM, Salesforce, and as of mid-2024 Meta — your US broker withholds 25% on the gross dividend under the India-US DTAA. To avoid double taxation, you file Form 67 in India to claim Foreign Tax Credit against your Indian dividend tax liability. The <Link href="/blog/form-67-rsu" style={{ color: 'var(--gold)' }}>Form 67 pillar</Link> covers the mechanics.
      </p>
      <p style={sP}>
        Form 67 has two operational pieces. First, it must be filed <em>before or on</em> the date of ITR filing — a late Form 67 with an already-filed ITR is a defective filing. Second, you need a tax residency certificate (TRC) and either Form 16A-equivalent from the broker or the year-end 1042-S the broker issues for foreign-shareholder dividend withholding. The 1042-S parsing is where most platforms fall short — they ask you to enter the dividend figures manually, which defeats the purpose.
      </p>
      <p style={sP}>
        The failure modes are: no Form 67 support at all (Google/Amazon/Netflix employees may not care, but Microsoft/Apple/Cisco employees do); Form 67 support that requires you to manually transcribe 1042-S figures; no FTC-cap calculation (the FTC claim is limited to the lower of US tax withheld or Indian tax payable on that income).
      </p>
      <p style={sP}>
        <span style={sStrong}>Rovia&apos;s position:</span> Form 67 auto-fill for dividend-receiving employees, with 1042-S parsing and FTC-cap calculation. TRC upload is the only manual step.
      </p>

      <h3 style={sH3}>Questions to ask the platform</h3>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Do you auto-fill Form 67, or do I fill it manually?</li>
        <li style={{ marginBottom: '8px' }}>Do you parse 1042-S from my broker automatically, or do I transcribe dividend figures?</li>
        <li>Do you compute the FTC cap (lower of US tax withheld or Indian tax payable), or is that on me?</li>
      </ul>

      {/* ── Section 7 ─────────────────────────────────── */}
      <h2 style={sH2}>7. Tax-aware sale recommendation</h2>
      <p style={sP}>
        The seventh factor separates passive viewers from decision-support tools. A passive viewer shows you what you hold and what you owe. A decision-support tool tells you which lots to sell when, given your holding-period clocks, your current surcharge band, and the relative US-vs-India tax positions on each lot.
      </p>
      <p style={sP}>
        The fully-built version of this looks like: you indicate you want to remit ₹X to India over the next quarter; the platform proposes a sale plan that prioritises LTCG-eligible lots first, then near-LTCG lots that should be held two more weeks, then STCG lots only if necessary; for each proposed sale, it shows the all-in tax cost in INR; and it accounts for the surcharge band — selling more in one financial year may cross you into a higher surcharge bracket, while splitting the same volume across two financial years can save lakhs.
      </p>
      <p style={sP}>
        The failure modes are: no sale recommendation at all (the platform is a viewer); a recommendation engine that ignores holding-period (treats all lots interchangeably); a recommendation engine that ignores the surcharge band (treats every lot as if marginal tax is constant); or a recommendation engine that operates on aggregated ticker positions instead of per-lot inventory. Each of these strips away the part of the decision that actually moves money.
      </p>
      <p style={sP}>
        <span style={sStrong}>Rovia&apos;s position:</span> per-lot sale recommendation engine that accounts for the 24-month clock, the surcharge band, and the current price. Sale plans output the all-in INR tax cost per lot and the optimal sequencing given your target remit volume.
      </p>

      <h3 style={sH3}>Questions to ask the platform</h3>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>If I tell you I want to remit ₹X this quarter, can you propose which lots to sell and in what order?</li>
        <li style={{ marginBottom: '8px' }}>Does the recommendation account for the surcharge band and the financial-year boundary?</li>
        <li>Does it show me the all-in INR tax cost per proposed sale, including STCG-vs-LTCG and surcharge?</li>
      </ul>

      {/* ── Synthesis Section ─────────────────────────────────── */}
      <h2 style={sH2}>The 7-factor checklist — your take-home template</h2>
      <p style={sP}>
        Print this. Hand it to any platform you are evaluating. Mark each row with what they actually do, not what their landing page says.
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ ...sTable, fontSize: '13px', minWidth: '760px' }}>
          <thead>
            <tr>
              <th style={sTh}>Factor</th>
              <th style={sTh}>What good looks like</th>
              <th style={sTh}>Why it matters</th>
              <th style={sTh}>Cost of getting it wrong</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={sTd}><span style={sStrong}>1. INR cost basis</span></td>
              <td style={sTd}>RBI TT buying rate, per vest day, stored per lot</td>
              <td style={sTd}>Every capital gain &amp; Schedule FA row downstream depends on it</td>
              <td style={sTd}>₹30K–₹2L of avoidable tax per vest; cascading errors for years</td>
            </tr>
            <tr>
              <td style={sTd}><span style={sStrong}>2. Schedule FA</span></td>
              <td style={sTd}>One row per lot in A3, calendar year, daily peak value</td>
              <td style={sTd}>Mandatory disclosure under Black Money Act; CRS data-matched</td>
              <td style={sTd}>₹10L/year penalty per Section 43; reassessment up to 10 years</td>
            </tr>
            <tr>
              <td style={sTd}><span style={sStrong}>3. 24-month LTCG clock</span></td>
              <td style={sTd}>Per-lot countdown, month-23 alert, lot-selection on sale</td>
              <td style={sTd}>STCG ~35.88% vs LTCG 12.5% — a 2-month timing decision</td>
              <td style={sTd}>₹50K–₹5L per misplayed vest, depending on gain size</td>
            </tr>
            <tr>
              <td style={sTd}><span style={sStrong}>4. FX on repatriation</span></td>
              <td style={sTd}>0 bps markup, interbank rate, transparent wire fee</td>
              <td style={sTd}>Every sale-and-remit pays this; senior-IC remits are large</td>
              <td style={sTd}>₹37,500 on a ₹50L remit at 75 bps; scales linearly</td>
            </tr>
            <tr>
              <td style={sTd}><span style={sStrong}>5. Broker coverage</span></td>
              <td style={sTd}>Native ingestion of Schwab/MS/E*TRADE/Fidelity, equity-awards accounts included</td>
              <td style={sTd}>Manual entry is fragile and time-consuming at scale</td>
              <td style={sTd}>4–8 hours per year of reconciliation; lot-data errors that propagate</td>
            </tr>
            <tr>
              <td style={sTd}><span style={sStrong}>6. Form 67 (FTC)</span></td>
              <td style={sTd}>Auto-fill with 1042-S parsing, FTC cap computed</td>
              <td style={sTd}>Dividend-paying employer stocks (MSFT/AAPL/CSCO/CRM/IBM)</td>
              <td style={sTd}>15–25% double-taxation on dividends per year, until you fix it</td>
            </tr>
            <tr>
              <td style={sTd}><span style={sStrong}>7. Tax-aware sale recommendation</span></td>
              <td style={sTd}>Per-lot, accounts for clock + surcharge + FY boundary</td>
              <td style={sTd}>Sale sequencing is where the largest tax savings live</td>
              <td style={sTd}>₹1L–₹10L per major sale event from suboptimal lot/timing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={sCallout}>
        Score any platform out of 7. A score of 7/7 with honest answers is rare. A score of 4/7 or below means you are still doing the work yourself — the platform is a viewer, not an operator. The honest target is 6/7 or 7/7 for the factors that match your situation (Factor #6 may not apply if you hold non-dividend stock).
      </div>

      {/* ── Where Rovia sits ─────────────────────────────────── */}
      <h2 style={sH2}>Where Rovia sits on each factor</h2>
      <p style={sP}>
        We have stated Rovia&apos;s position factor by factor through the body of this guide. The consolidated view, written in the same diagnostic language you would use on any other platform:
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Factor</th>
            <th style={sTh}>Rovia&apos;s position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>1. INR cost basis</td>
            <td style={sTd}>Per-vest-day RBI TT buying rate, lot by lot, stored once and never overwritten</td>
          </tr>
          <tr>
            <td style={sTd}>2. Schedule FA</td>
            <td style={sTd}>Full automation in ITR-2/3 column format, calendar-year, daily per-lot peak value</td>
          </tr>
          <tr>
            <td style={sTd}>3. 24-month LTCG clock</td>
            <td style={sTd}>Per-lot countdown, month-23 alerts, sale-time lot selection with tax delta shown</td>
          </tr>
          <tr>
            <td style={sTd}>4. FX on repatriation</td>
            <td style={sTd}>0 bps markup, interbank rate, only the actual wire fee passed through</td>
          </tr>
          <tr>
            <td style={sTd}>5. Broker coverage</td>
            <td style={sTd}>Native ingestion of Schwab Equity Awards, Morgan Stanley StockPlan, E*TRADE Stock Plans, Fidelity Stock Plan Services</td>
          </tr>
          <tr>
            <td style={sTd}>6. Form 67 (FTC)</td>
            <td style={sTd}>Auto-fill with 1042-S parsing and FTC-cap computation; TRC is the only manual step</td>
          </tr>
          <tr>
            <td style={sTd}>7. Tax-aware sale recommendation</td>
            <td style={sTd}>Per-lot recommendation engine accounting for clock, surcharge, and FY boundary; outputs all-in INR tax cost per proposed sale</td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        These are the claims we will defend to your CA, your accountant, your auditor. If any of them are wrong on your specific account, that is a support ticket, not a methodology debate.
      </p>

      {/* ── Hardest-to-evaluate section ─────────────────────── */}
      <h2 style={sH2}>What the framework cannot tell you in advance</h2>
      <p style={sP}>
        Three things about any platform are nearly impossible to evaluate from a landing page or a sales call. They surface only once you are actually using the product, and they are the difference between a platform that works during the easy months and a platform that works during ITR season.
      </p>

      <h3 style={sH3}>Data accuracy under your specific edge cases</h3>
      <p style={sP}>
        Every senior-IC RSU position has edge cases. You changed brokers mid-year. You had a US tax residency split. You participated in an ESPP at one employer and pure RSUs at the next. You received a dividend distribution that was reinvested rather than paid out. A platform can score 7/7 on the framework and still be wrong on your specific situation, because your specific situation is the test case nobody wrote a unit test for.
      </p>
      <p style={sP}>
        The mitigation is a single-vest pilot. Pick one historical vest where you already know the right answer — the right RBI TT rate, the right INR cost basis, the right Schedule FA row. Import that one lot. See whether the platform agrees with you to the rupee. A discrepancy of more than ₹100 on a single vest is a methodology issue that will compound across your full position.
      </p>

      <h3 style={sH3}>Customer support latency during ITR season</h3>
      <p style={sP}>
        Every platform is responsive in June. The test is whether they are responsive on July 28th, when the ITR filing deadline is three days away, your Schedule FA has an anomaly in row 14, and you need a real human to confirm the correct interpretation before you click submit. Sales-call support and ITR-season support are different products, and one tells you nothing about the other.
      </p>
      <p style={sP}>
        Ask, before you commit: what is the average response time during July? Is there a dedicated ITR-season support escalation? Is there a CA actually in the loop, or only customer service? The honest answer matters more than the marketing answer.
      </p>

      <h3 style={sH3}>Audit-trail quality when the IT Department asks</h3>
      <p style={sP}>
        The thing you hope you never need is also the thing the platform exists to deliver. If you receive a Section 148 reassessment notice five years from now, can the platform produce — on demand — the audit trail for any specific vest: the broker statement it was ingested from, the RBI TT rate it applied, the methodology used to compute peak value, the timestamp on every reconciliation? Or is your only artefact the latest dashboard view, with no historical reconstruction?
      </p>
      <p style={sP}>
        This is the long-tail quality difference between platforms. A platform that treats every computation as a one-time output is fine in normal years and useless when you need to defend a five-year-old filing. A platform that stores the full lineage gives you defensible documentation. Ask explicitly: <em>can you reconstruct the exact Schedule FA submission I made in July 2024, in case the IT Department asks</em>?
      </p>

      <div style={sWarning}>
        <span style={sStrong}>The single best evaluation step:</span> a free trial or single-lot import. Every platform worth evaluating offers some form of pre-commitment trial — even if it is just an import of one historical lot. Spend an hour doing the import yourself, comparing the platform&apos;s output to your own hand-computed answer for that lot. The rupee-level agreement (or disagreement) tells you more than any product page or sales call.
      </div>

      {/* ── How to actually decide ───────────────────────── */}
      <h2 style={sH2}>How to actually decide</h2>
      <p style={sP}>
        The decision in practice usually comes down to three or four candidates: the incumbent platforms (Vested, INDmoney, others — verify the current state of their offerings on their own pages), one or two newer specialists like Rovia, and the always-available alternative of staying with your CA and a spreadsheet. The seven-factor framework above is how to compare apples to apples across all of them.
      </p>
      <p style={sP}>
        Three pragmatic shortcuts:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Score the four critical factors first.</span> Factors #1 (INR cost basis), #2 (Schedule FA), #3 (LTCG clock), and #4 (FX cost) are the ones with the largest rupee impact. If a platform scores poorly on any of these four, the other three rarely make up for it.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Run the single-lot pilot before any annual commitment.</span> The rupee-level agreement on one historical vest is worth more than any feature comparison.
        </li>
        <li>
          <span style={sStrong}>Treat the framework as a living checklist.</span> Re-score your current platform every February (post-Budget) and every July (post-ITR). Methodology and product change. Your switching decision is not a one-time choice — it is a recurring review.
        </li>
      </ol>

      <p style={sP}>
        The broker-switch and onboarding flows for Rovia, walked through company by company, live on the company pages:&nbsp;
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

      {/* ── Footer note ──────────────────────────────────────── */}
      <p style={{ ...sP, marginTop: '48px', fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Last reviewed June 1, 2026. Platform offerings, pricing, and methodology change — verify any specific claim on the vendor&apos;s current site before committing. This article is informational and not personalised tax or financial advice — your specific position should be reviewed by a qualified chartered accountant.
      </p>
    </>
  );
}
