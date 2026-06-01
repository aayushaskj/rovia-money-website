import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #10 — The Indian Budget for RSU Holders (annual refresh)
// ─────────────────────────────────────────────

export const meta = {
  slug: 'budget-rsu-india',
  title: 'The Indian Budget for RSU Holders: What Has Changed and What to Watch',
  dek: 'Every February, the Union Budget either changes nothing for RSU holders or changes a lot — and recent history says the latter is more common. Anchored on the Finance Act 2024 rewrite, with the annual watchlist for any future Budget.',
  publishDate: '2026-06-04',
  updatedDate: '2026-06-04',
  author: 'Rovia Editorial',
  tags: ['budget', 'tax', 'rsu', 'pillar'],
  readingMinutes: 10,
  seoTitle: 'Indian Budget Impact on RSUs: Finance Act 2024 & What to Watch',
  seoDescription:
    'Annual refresh on Union Budget changes affecting Indian RSU holders. Finance Act 2024 reset capital gains to 12.5% flat; what to watch in every future Budget for tax-rate, holding-period, Schedule FA, and LRS changes.',
  seoKeywords:
    'budget rsu india, finance act 2024 rsu, ltcg foreign equity budget, schedule fa budget, lrs limit budget, rsu tax changes india, capital gains rate india foreign equity',
};

// ── shared inline styles ──
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

const sP = { fontSize: '16px', lineHeight: 1.75, color: ARTICLE_TEXT, margin: '0 0 18px' };
const sStrong = { color: HEAD_TEXT, fontWeight: 700 };
const sTable = {
  width: '100%', borderCollapse: 'collapse', margin: '24px 0 32px', fontSize: '14px',
  background: CARD_BG, border: `1px solid ${HAIR_LINE}`, borderRadius: '12px', overflow: 'hidden',
};
const sTh = {
  textAlign: 'left', padding: '12px 16px', fontSize: '11px', fontWeight: 700,
  textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold)',
  background: 'rgba(196,169,126,0.06)', borderBottom: `1px solid ${HAIR_LINE}`,
};
const sTd = { padding: '12px 16px', borderTop: `1px solid ${HAIR_LINE}`, color: ARTICLE_TEXT, verticalAlign: 'top' };
const sCallout = {
  background: 'linear-gradient(135deg, rgba(196,169,126,0.07), rgba(196,169,126,0.02))',
  border: '1px solid rgba(196,169,126,0.22)', borderRadius: '14px', padding: '20px 24px',
  margin: '28px 0', fontSize: '15px', lineHeight: 1.7, color: '#e2e8f0',
};
const sWarning = {
  background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.25)',
  borderRadius: '14px', padding: '20px 24px', margin: '28px 0',
  fontSize: '15px', lineHeight: 1.7, color: '#e2e8f0',
};
const sFaqQ = { fontSize: '16px', fontWeight: 700, color: HEAD_TEXT, marginBottom: '8px', marginTop: 0 };
const sFaqA = { fontSize: '15px', lineHeight: 1.7, color: SOFT_TEXT, margin: 0 };

export const faq = [
  {
    q: 'When is the Budget presented and when do changes take effect?',
    a: 'The Union Budget is presented around February 1 each year. Most income-tax provisions take effect from April 1 of that calendar year (start of the new FY). Some provisions have specific mid-year effective dates — for example, the Finance (No. 2) Act 2024 amendments to foreign-equity capital gains took effect from July 23, 2024, splitting that financial year into two rule regimes.',
  },
  {
    q: 'Did the Budget retroactively change rules on shares I had already bought?',
    a: "The Finance Act 2024 changed the rate and method for capital gains computation prospectively — but on the date of sale, not the date of acquisition. So if you bought RSU shares in 2022 and sold them in October 2024, the new 12.5% flat LTCG (with no indexation) applies, even though you acquired under the old 20%-with-indexation regime. This caught many filers off guard.",
  },
  {
    q: 'I sold shares in mid-2024 around the transition. How do I know which regime applies?',
    a: "The cutoff is the sale date. Sales executed on or before July 22, 2024 fall under the old regime (20% LTCG with indexation). Sales executed July 23, 2024 onwards fall under the new regime (12.5% flat, no indexation). The acquisition date determines holding period — STCG vs LTCG classification — but the sale date determines which rate regime applies.",
  },
  {
    q: 'Can the Budget change the 24-month holding period?',
    a: 'Yes, the holding-period threshold for unlisted / foreign equity has been changed by past Budgets — it was 36 months prior to a 2024 change to 24 months. A future Budget could move it to 12, 18, or 36. This is one of the highest-impact levers for RSU holders to watch, because it would either accelerate LTCG eligibility (positive) or delay it for in-progress lots (negative).',
  },
  {
    q: 'What about LRS — could the Budget change inward remittance rules?',
    a: 'LRS technically governs only outward remittance ($250K/year/PAN). Inward remittance is governed by FEMA and bank-level AML rules, not LRS. A future Budget could theoretically introduce inward limits or reporting thresholds — but this would be a more disruptive change and would likely be flagged well in advance. Worth watching, not actively planning around.',
  },
  {
    q: 'How does Rovia handle a Budget rule change?',
    a: 'Within 48 hours of a Budget passing into law, Rovia updates its tax-computation engine and applies the new rules to all relevant lots — including identifying lots affected by transition windows. Users get a "rules updated" notification with a summary of what changed and any sales that would be re-classified under the new rules.',
  },
];

export function Body() {
  return (
    <>
      {/* ── Opening ──────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>Why this post exists</h2>
      <p style={sP}>
        Every February, the Union Budget either changes nothing for RSU holders or changes a lot. Recent history shows the latter is more common — the Finance (No. 2) Act, 2024 rewrote the foreign-equity capital gains regime entirely, moving holders from 20%-with-indexation to a 12.5%-flat-no-indexation rate, effective July 23, 2024. That single change shifted millions of rupees of tax burden across the FAANG-India population.
      </p>
      <p style={sP}>
        This pillar covers two things: (1) the rules that ARE settled as of mid-2026 — Finance Act 2024 changes anchored across this site — and (2) the structural levers a future Budget can pull, so you know what to watch for each February. The post is refreshed annually after each Budget cycle.
      </p>

      <div style={sCallout}>
        We do not pre-emptively summarize Budget 2026 specifics here. The most recent confirmed regime is the Finance Act 2024 rewrite. Once each new Budget passes and rules are notified, this post is updated with the specific changes and the transition guidance. If you are reading this between Feb and June of a Budget year, check the &ldquo;Updated&rdquo; date at the top.
      </div>

      {/* ── Section 1 — What Finance Act 2024 changed ────────── */}
      <h2 style={sH2}>1. What Finance Act 2024 actually changed for RSU holders</h2>
      <p style={sP}>
        Effective July 23, 2024, the Finance (No. 2) Act, 2024 modified Section 112 of the Income Tax Act for capital gains on unlisted / foreign equity (which includes all FAANG RSUs):
      </p>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Provision</th>
            <th style={sTh}>Before (until July 22, 2024)</th>
            <th style={sTh}>After (July 23, 2024 onwards)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>LTCG rate (foreign equity)</td>
            <td style={sTd}>20% with indexation</td>
            <td style={sTd}><span style={sStrong}>12.5% flat</span></td>
          </tr>
          <tr>
            <td style={sTd}>Indexation benefit</td>
            <td style={sTd}>Available (cost uplifted using CII)</td>
            <td style={sTd}><span style={sStrong}>Removed</span></td>
          </tr>
          <tr>
            <td style={sTd}>LTCG holding period</td>
            <td style={sTd}>24 months</td>
            <td style={sTd}>24 months (unchanged)</td>
          </tr>
          <tr>
            <td style={sTd}>STCG rate</td>
            <td style={sTd}>Slab rate</td>
            <td style={sTd}>Slab rate (unchanged)</td>
          </tr>
          <tr>
            <td style={sTd}>Surcharge + cess on top</td>
            <td style={sTd}>Applies</td>
            <td style={sTd}>Applies (unchanged)</td>
          </tr>
        </tbody>
      </table>

      <h3 style={sH3}>The asymmetric impact</h3>
      <p style={sP}>
        The change is not uniformly favorable. The 20% rate with indexation could effectively erase capital gains where the appreciation was close to or below inflation. The new 12.5% flat rate is materially lower as a headline number, but with no indexation, even small nominal gains are taxed.
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Winners.</span> Anyone holding stock that ran 3-5× over their holding period — Google, Apple, Meta post-2022, Microsoft. Most FAANG RSU holders fit this profile and pay less under the new regime.
        </li>
        <li>
          <span style={sStrong}>Losers.</span> Anyone holding stock that barely outpaced inflation — older lots of low-appreciation tickers, ESPP positions on cyclical tech that flatlined. Without indexation, the modest gain is now fully taxable.
        </li>
      </ul>
      <p style={sP}>
        For a deeper worked example of how the new regime plays out at sale, see the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>.
      </p>

      {/* ── Section 2 — What 2024 did NOT change ─────────────── */}
      <h2 style={sH2}>2. What 2024 did NOT change (but a future Budget could)</h2>
      <p style={sP}>
        The 2024 rewrite was targeted — it changed rates and indexation for unlisted/foreign equity, full stop. Several structural levers were left alone. Any of them is a candidate for a future Budget:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Schedule FA filing threshold.</span> Currently no minimum (any foreign asset triggers filing). A future Budget could introduce a de-minimis threshold for low-value holdings — or, in the opposite direction, tighten disclosure with peak-value certification requirements.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Surcharge bands and caps.</span> Currently 10% / 15% / 25% (under the new regime, capped at 25% from the earlier 37%). A future Budget could re-tier or re-cap. Mid-band income earners (₹50L-₹2Cr) are most exposed to changes here.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>LRS limits.</span> Currently $250K/year outward per PAN. Inward remittance is unrestricted. Both could be tightened — particularly inward AML reporting thresholds, which already exist but at relatively high levels.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>The 24-month holding-period threshold.</span> Historically this has been 36 months, then 24. A move to 12 (matching listed-equity LTCG) would be hugely favorable; a move back to 36 would penalize in-progress lots.
        </li>
        <li>
          <span style={sStrong}>DTAA withholding mechanics.</span> The 25% on US dividends is treaty-locked, harder to change unilaterally. But Form 67 mechanics — filing deadline, attachments, allowable credit calculation — are Budget-modifiable.
        </li>
      </ul>

      {/* ── Section 3 — Budget watchlist ─────────────────────── */}
      <h2 style={sH2}>3. The annual February watchlist</h2>
      <p style={sP}>
        When the Finance Minister presents the Budget around February 1 each year, scan the Finance Bill draft for the following triggers. The presence of any of these in the draft means RSU holders should re-plan within 30 days.
      </p>
      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Watch for</th>
            <th style={sTh}>What it means for you</th>
            <th style={sTh}>Action window</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>Any change to Section 112 / 112A rates</td>
            <td style={sTd}>Capital gains tax rate moved</td>
            <td style={sTd}>Accelerate/defer sales before effective date</td>
          </tr>
          <tr>
            <td style={sTd}>Holding-period threshold changes</td>
            <td style={sTd}>STCG/LTCG classification of in-progress lots may shift</td>
            <td style={sTd}>Recompute lot calendar; flag lots near new threshold</td>
          </tr>
          <tr>
            <td style={sTd}>Indexation rule changes</td>
            <td style={sTd}>Real-vs-nominal taxation balance shifts again</td>
            <td style={sTd}>Re-evaluate low-appreciation positions</td>
          </tr>
          <tr>
            <td style={sTd}>Schedule FA threshold or column additions</td>
            <td style={sTd}>Disclosure burden changes</td>
            <td style={sTd}>Update Schedule FA template for upcoming ITR</td>
          </tr>
          <tr>
            <td style={sTd}>Surcharge band re-tiering</td>
            <td style={sTd}>Effective marginal rate at your income changes</td>
            <td style={sTd}>Re-do cross-FY sale planning (covered in <Link href="/blog/vest-cycle-ltcg-strategy" style={{ color: 'var(--gold)' }}>Vest-Cycle Strategy</Link>)</td>
          </tr>
          <tr>
            <td style={sTd}>LRS or inward-remit reporting changes</td>
            <td style={sTd}>Repatriation friction increases</td>
            <td style={sTd}>See <Link href="/blog/fx-repatriation-rsu-india" style={{ color: 'var(--gold)' }}>FX & Repatriation pillar</Link></td>
          </tr>
        </tbody>
      </table>

      {/* ── Section 4 — Transition mechanics ─────────────────── */}
      <h2 style={sH2}>4. How transitions actually work</h2>
      <p style={sP}>
        Budget changes are not uniform in timing or in retroactivity. The Finance Act 2024 transition is instructive:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>The Budget speech (Feb 1, 2024).</span> Provisions were announced but not yet law.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Finance Bill draft (Feb 2024).</span> Specific provisions and effective dates published.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Parliamentary passage.</span> The bill became law in mid-July 2024.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Effective date: July 23, 2024.</span> Sales on or after this date use the new regime; sales before use the old one. The cutoff is sale date, not acquisition date — meaning a 2022 vest sold in August 2024 used the new rules even though the lot was acquired under the old regime.
        </li>
        <li>
          <span style={sStrong}>Operational implications.</span> Many CAs filed AY 2024-25 returns with mixed-regime computations — old rules for the April-July period, new rules for July-March. Software needed updates mid-year. ITR forms were updated to reflect both regimes.
        </li>
      </ol>
      <div style={sWarning}>
        The lesson: a Budget effective date is the action threshold. If a future Budget changes rates, identify whether the effective date is the start of next FY (typical) or a specific mid-year date (Finance Act 2024 pattern). Then plan sales around it.
      </div>

      {/* ── Section 5 — Post-Budget playbook ─────────────────── */}
      <h2 style={sH2}>5. The post-Budget playbook</h2>
      <p style={sP}>Within 30 days of any Budget that affects RSU holders:</p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Read the Finance Bill, not just headlines.</span> Press summaries often misstate the effective date or specific scope. The Bill itself is the source of truth.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Recompute the value of in-progress lots under both regimes.</span> For each lot you hold, what does the new rule do to your projected post-tax proceeds at exit? If the new rule is materially worse, accelerate sales before effective date. If better, defer.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Update Schedule FA and Form 67 templates.</span> Even small column-level changes in ITR forms invalidate copy-paste-able templates from prior years. Cite <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA pillar</Link>.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <span style={sStrong}>Re-do your surcharge-band projection.</span> If bands change or rates within bands change, the cross-FY harvesting math (<Link href="/blog/vest-cycle-ltcg-strategy" style={{ color: 'var(--gold)' }}>Vest-Cycle Strategy</Link>) shifts.
        </li>
        <li>
          <span style={sStrong}>Flag anything ambiguous to a CA.</span> Transition years (like FY 2024-25, with the July 2024 cutoff) generate the most disputed filings. Conservative filing with a CA review is cheap insurance.
        </li>
      </ol>

      {/* ── Section 6 — What Rovia does ──────────────────────── */}
      <h2 style={sH2}>6. What Rovia does</h2>
      <p style={sP}>
        Annual Budget updates are mechanical work that the platform handles automatically:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Rules engine updates within 48 hours of a Budget passing.</span> All in-progress lots re-evaluated against the new rules; transition-window sales flagged.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Effective-date awareness.</span> Sales executed before vs after the cutoff are computed under the correct regime — no manual splitting required.
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span style={sStrong}>Schedule FA and Form 67 template refresh.</span> Format changes in ITR-2/3 schedules are absorbed at platform level — your exports always match the current year&apos;s form.
        </li>
        <li>
          <span style={sStrong}>Annual Budget summary digest.</span> An email summarizing what changed for RSU holders, what you should do, and which lots are affected.
        </li>
      </ul>
      <div style={sCallout}>
        Related reading anchored to current rules:&nbsp;
        <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation</Link>,&nbsp;
        <Link href="/blog/schedule-fa-rsu" style={{ color: 'var(--gold)' }}>Schedule FA</Link>,&nbsp;
        <Link href="/blog/vest-cycle-ltcg-strategy" style={{ color: 'var(--gold)' }}>Vest-Cycle Strategy</Link>,&nbsp;
        <Link href="/blog/fx-repatriation-rsu-india" style={{ color: 'var(--gold)' }}>FX & Repatriation</Link>.
      </div>

      {/* ── FAQ ──────────────────────────────────────────────── */}
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

      <p style={{ ...sP, marginTop: '48px', fontSize: '13px', color: SOFT_TEXT, fontStyle: 'italic' }}>
        Last reviewed June 4, 2026. Rules quoted reflect the Finance (No. 2) Act, 2024 and subsequent CBDT notifications through May 2026. This post is updated each February after the Union Budget. Informational only, not personalised tax advice — your specific position should be reviewed by a qualified chartered accountant.
      </p>
    </>
  );
}
