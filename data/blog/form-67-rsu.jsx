import Link from 'next/link';

// ─────────────────────────────────────────────
// Pillar #8 — Form 67 for RSU Holders
// ─────────────────────────────────────────────

export const meta = {
  slug: 'form-67-rsu',
  title: 'Form 67 for RSU Holders: When You Need It and How to File',
  dek: 'Form 67 is the Foreign Tax Credit form Indian residents file to recover US withholding under the India-US DTAA — and for RSU holders it is almost entirely about dividends, not vests. Here is the actual mechanic.',
  publishDate: '2026-06-04',
  updatedDate: '2026-06-04',
  author: 'Rovia Editorial',
  tags: ['form 67', 'tax', 'rsu', 'pillar'],
  readingMinutes: 9,
  seoTitle: 'Form 67 for RSU Holders (India-US DTAA): When and How to File',
  seoDescription:
    'Form 67 explained for Indian residents holding US RSUs: India-US DTAA 25% dividend withholding, FTC claim mechanics, the pre-ITR deadline trap, and which FAANG stocks actually pay dividends.',
  seoKeywords:
    'form 67 rsu, foreign tax credit india, india us dtaa dividend, form 67 itr, ftc claim india, 1042-s india tax, dividend withholding rsu india',
};

// ─── shared inline styles (kept local to file, matches codebase convention) ───
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
    q: 'Do I need Form 67 for my RSU vest itself?',
    a: 'No. If you are an Indian resident with a current W-8BEN on file at your US broker, no US income tax is withheld on your RSU vest — India has full taxing rights under the DTAA. Form 67 is relevant only if US tax was actually withheld at source, which for most RSU holders means dividends and only dividends.',
  },
  {
    q: 'My company does not pay dividends. Do I ever need Form 67?',
    a: 'For most engineers at Amazon or Netflix (no dividend), no — there is nothing to credit. If you hold any US-source interest, mutual-fund distributions, or you received occasional special dividends, Form 67 may still apply. Check your year-end 1042-S from the broker: if it shows any US tax withheld, you have a Form 67 conversation.',
  },
  {
    q: 'What happens if I file Form 67 after my ITR?',
    a: 'Late Form 67 with an already-filed ITR makes the FTC claim defective. Rule 128 requires the form to be filed on or before the ITR due date. If you miss it, you have either filed without claiming credit (paying double) or you need to revise the ITR within the revised-return window. The cleanest practice: file Form 67 first, then ITR.',
  },
  {
    q: 'Can I claim more credit than the US actually withheld?',
    a: 'No. The FTC is capped at the lower of (a) the US tax actually withheld, or (b) the Indian tax otherwise payable on that same foreign income. If India would tax the dividend at 35.88% and the US withheld 25%, you claim 25%. You cannot claim a refund of the differential — you simply pay 10.88% net to India.',
  },
  {
    q: 'Where do I get the 1042-S from?',
    a: 'Your US broker issues Form 1042-S annually for non-resident accounts that received US-source income. Schwab, Morgan Stanley StockPlan, E*TRADE, Fidelity — all send it to your account portal by mid-March for the prior US tax year (Jan-Dec). It summarises total dividends, total tax withheld, and the treaty rate applied. Download and keep it; Form 67 references its figures.',
  },
  {
    q: 'Do I need a fresh Tax Residency Certificate every year?',
    a: 'Yes. The TRC is issued for a specific previous year and must be obtained from your Indian assessing officer via Form 10FA. Each year of FTC claim needs the TRC for that year. The form is short and processed via the income tax portal; most filers obtain it in May–June ahead of the July ITR deadline.',
  },
];

export function Body() {
  return (
    <>
      {/* ── Opening ──────────────────────────────────────────── */}
      <h2 style={{ ...sH2, marginTop: '8px' }}>The misconception that costs people Form 67 effort</h2>
      <p style={sP}>
        Most engineers reading about Form 67 land here because of a misunderstanding: they think Form 67 is the form you file to claim credit for US tax withheld at their RSU vest. It is not. RSU vests for Indian residents <span style={sStrong}>do not trigger US ordinary-income withholding</span> in the first place — under the India-US DTAA, with a current W-8BEN on file at the broker, India has full taxing rights on RSU vest income earned while you are an Indian resident. There is no US tax to credit because there is no US tax in the first place.
      </p>
      <p style={sP}>
        Form 67 matters in exactly one scenario for the typical RSU holder: <span style={sStrong}>US dividend withholding</span>. If your employer&apos;s stock pays a dividend — Microsoft, Apple, Cisco, IBM, Salesforce — the US broker withholds 25% of every gross dividend payment under the treaty. To recover that 25% as a credit against your Indian tax on the same dividend, you file Form 67 along with your ITR.
      </p>
      <p style={sP}>
        At Amazon and Netflix, neither of which pays a dividend, Form 67 is a non-event for most years. At Google and Meta, both of which only started paying small dividends in mid-2024, Form 67 has begun to matter for the first time. The rest of this guide is the precise mechanics: when you actually need to file, what goes on the form, the worked example in rupees, and the four common mistakes that turn a routine FTC claim into a defective filing.
      </p>

      <div style={sCallout}>
        Short version: if your year-end 1042-S from Schwab / Morgan Stanley / E*TRADE / Fidelity shows any non-zero US tax withheld, you have a Form 67 conversation. If it shows zero (which is the case for almost every Indian-resident RSU holder at a non-dividend-paying company), you do not.
      </div>

      {/* ── Section 1 — DTAA mechanics ─────────────────────────── */}
      <h2 style={sH2}>1. The DTAA mechanic underneath all of this</h2>
      <p style={sP}>
        The India-US Double Taxation Avoidance Agreement (DTAA), signed in 1989 and in force since 1990, allocates taxing rights between the two countries for income earned by residents of one country from sources in the other. For RSU holders, two specific articles do most of the work:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Article 16 — Dependent Personal Services.</span> Salary and salary-like income (including RSU vest perquisite) is taxable in the country where the work is performed. For an Indian-resident employee working from Bengaluru or Hyderabad, that is India. The US gets no taxing right on the vest itself.</li>
        <li><span style={sStrong}>Article 10 — Dividends.</span> Dividends paid by a US company to an Indian resident are taxable in both countries — but the US withholding rate is capped at <span style={sStrong}>25%</span> (versus the default 30% NRA withholding) provided the recipient has filed Form W-8BEN. India then taxes the gross dividend at the recipient&apos;s slab rate, and the recipient claims a foreign tax credit for the 25% already paid in the US.</li>
      </ul>
      <p style={sP}>
        The W-8BEN is the gating document. It tells the US broker you are a non-US person and you are claiming the treaty rate under your country of residence. Without a current W-8BEN, the broker defaults to 30% backup withholding on dividends and starts withholding on other US-source income too. W-8BEN expires three calendar years after signature — most Indian-resident RSU holders should be re-signing it every two years on a calendar reminder.
      </p>
      <p style={sP}>
        Form 67 is the Indian-side counterpart: the form that converts that 25% US withholding into a credit against your Indian tax on the same income. Without Form 67, the 25% is gone and India still taxes the gross dividend at your slab — which means you have paid the US 25% and India ~36%, an effective double-tax of ~61% on the same dividend income.
      </p>

      {/* ── Section 2 — Which RSUs pay dividends ─────────────── */}
      <h2 style={sH2}>2. Which RSUs actually pay dividends</h2>
      <p style={sP}>
        Form 67 is a wasted exercise for engineers at companies that do not pay dividends. Before reading further, check whether yours does. As of the AY 2026-27 filing season:
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Company</th>
            <th style={sTh}>Dividend status</th>
            <th style={sTh}>Approx. annual yield</th>
            <th style={sTh}>Form 67 relevance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}><Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link></td>
            <td style={sTd}>Long-standing quarterly dividend</td>
            <td style={sTd}>~0.7%</td>
            <td style={sTd}><span style={sStrong}>Yes</span></td>
          </tr>
          <tr>
            <td style={sTd}><Link href="/apple" style={{ color: 'var(--gold)' }}>Apple</Link></td>
            <td style={sTd}>Quarterly dividend since 2012</td>
            <td style={sTd}>~0.5%</td>
            <td style={sTd}><span style={sStrong}>Yes</span></td>
          </tr>
          <tr>
            <td style={sTd}>Cisco</td>
            <td style={sTd}>Long-standing quarterly dividend</td>
            <td style={sTd}>~2.5%</td>
            <td style={sTd}><span style={sStrong}>Yes</span></td>
          </tr>
          <tr>
            <td style={sTd}>IBM</td>
            <td style={sTd}>Quarterly dividend — among the highest yields in big tech</td>
            <td style={sTd}>~3.5%</td>
            <td style={sTd}><span style={sStrong}>Yes</span></td>
          </tr>
          <tr>
            <td style={sTd}>Intel</td>
            <td style={sTd}>Dividend suspended August 2024 (after sharp 2023 cut)</td>
            <td style={sTd}>0%</td>
            <td style={sTd}>No (currently)</td>
          </tr>
          <tr>
            <td style={sTd}>Salesforce</td>
            <td style={sTd}>Quarterly dividend initiated in 2024</td>
            <td style={sTd}>~0.5%</td>
            <td style={sTd}><span style={sStrong}>Yes</span></td>
          </tr>
          <tr>
            <td style={sTd}>Google (Alphabet)</td>
            <td style={sTd}>Initiated quarterly dividend in mid-2024 — first ever</td>
            <td style={sTd}>~0.4%</td>
            <td style={sTd}>Yes, since 2024</td>
          </tr>
          <tr>
            <td style={sTd}>Meta</td>
            <td style={sTd}>Initiated small quarterly dividend in early 2024 — first ever</td>
            <td style={sTd}>~0.4%</td>
            <td style={sTd}>Yes, since 2024</td>
          </tr>
          <tr>
            <td style={sTd}>Amazon</td>
            <td style={sTd}>None historically</td>
            <td style={sTd}>0</td>
            <td style={sTd}>No</td>
          </tr>
          <tr>
            <td style={sTd}>Netflix</td>
            <td style={sTd}>None historically</td>
            <td style={sTd}>0</td>
            <td style={sTd}>No</td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        The 2024 inflection at Google and Meta matters: a cohort of engineers at those two companies — who have historically never had to think about Form 67 — now do, starting with the dividend cycle that landed in their Schwab and Morgan Stanley accounts during calendar year 2024. The amounts are small in percentage terms but absolute numbers add up: a Google L6 holding 300 GOOG worth ~$60K at a 0.4% yield collects ~$240/year of dividend, 25% of which (~₹5,000) is US-withheld and recoverable only via Form 67.
      </p>
      <p style={sP}>
        Yields shift year to year. Always check your actual 1042-S, not the table above, before filing.
      </p>

      {/* ── Section 3 — When do you actually need Form 67 ────── */}
      <h2 style={sH2}>3. When you actually need to file</h2>
      <p style={sP}>You need Form 67 if <span style={sStrong}>both</span> of these are true for the relevant financial year:</p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}>You received US-source income (dividends, in the RSU case) on which US tax was actually withheld at source; <span style={sStrong}>and</span></li>
        <li>You want to claim that withholding as a credit against your Indian tax otherwise payable on the same income.</li>
      </ol>
      <p style={sP}>
        If either is false, Form 67 is not needed. Practical examples:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Amazon engineer, no other US holdings.</span> AMZN pays no dividend; your 1042-S shows $0 withheld. No Form 67.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Microsoft engineer holding 600 MSFT.</span> MSFT pays ~$3/share annual dividend = ~$1,800/year gross, US withholds 25% = $450 at source. Yes Form 67.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Google engineer, dividend started Q3 2024.</span> ~$240 dividend, US withholds $60. Small but yes Form 67 if you want to recover the ₹5,000 credit.</li>
        <li><span style={sStrong}>Anyone whose 1042-S shows $0.</span> Whether because the stock does not pay or because the broker correctly applied a 0% treaty rate to a different income type — no withholding, no credit, no Form 67.</li>
      </ul>

      <div style={sWarning}>
        <span style={sStrong}>Without Form 67, you are double-taxed.</span> India will tax the gross dividend at your slab regardless of what was withheld in the US. If you do not claim the credit, the 25% sent to the US Treasury is gone and you still owe India full slab on top of it. For a senior IC in the 35.88% slab on a $1,800 MSFT dividend, that is ~₹54,000 to India PLUS ~₹38,000 already in the US = ~₹92,000 of total tax on ~₹1.5L of dividend income, an effective 61% rate.
      </div>

      {/* ── Section 4 — Mechanics ─────────────────────────────── */}
      <h2 style={sH2}>4. The mechanics — what Form 67 actually requires</h2>
      <p style={sP}>
        Form 67 is filed online through the income tax e-filing portal under <em>e-File &rarr; Income Tax Forms &rarr; File Income Tax Forms &rarr; Form 67</em>. Three operational rules govern it.
      </p>

      <h3 style={sH3}>The deadline rule</h3>
      <p style={sP}>
        Under Rule 128 of the Income Tax Rules, Form 67 must be filed <span style={sStrong}>on or before the due date of furnishing the ITR</span> (Section 139(1)). For a salaried filer without audit, that is July 31 of the assessment year — same as the ITR deadline. Form 67 filed <em>after</em> ITR submission, or after the due date, makes the FTC claim defective.
      </p>
      <p style={sP}>
        Practically, this means: file Form 67 first, then file the ITR. The ITR references the Form 67 acknowledgement number in the FTC schedule. Reversing the order is the most common error in this process.
      </p>

      <h3 style={sH3}>The documents you need</h3>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Tax Residency Certificate (TRC).</span> Issued by your Indian assessing officer in response to an application via Form 10FA. Confirms you are an Indian resident for the relevant year. Required to claim treaty benefits.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>Form 1042-S from your US broker.</span> The year-end summary of US-source income paid to your account and the US tax withheld. Each 1042-S line corresponds to an income type and a withholding rate. For RSU holders, the relevant line is dividend income (income code 06).</li>
        <li><span style={sStrong}>Form 10F.</span> A self-declaration submitted on the income tax portal that supplements the TRC with details required by Indian rules (status, PAN, address, period of residency). One Form 10F per assessment year.</li>
      </ul>

      <h3 style={sH3}>What goes on the form itself</h3>
      <p style={sP}>
        Form 67 collects, per source country:
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '6px' }}>The country code (United States = 2)</li>
        <li style={{ marginBottom: '6px' }}>The nature of income (dividend, interest, etc.)</li>
        <li style={{ marginBottom: '6px' }}>The gross income amount in INR</li>
        <li style={{ marginBottom: '6px' }}>The tax paid in the foreign country, in INR</li>
        <li style={{ marginBottom: '6px' }}>The DTAA article relied upon (Article 10 for dividends)</li>
        <li>The foreign tax credit being claimed</li>
      </ul>
      <p style={sP}>
        Conversion to INR uses the State Bank of India TT buying rate on the last day of the month immediately preceding the month in which the income was received, per Rule 26 — a different rate convention than the vest-day RBI TT rate used for capital gains. Most filers get this wrong on first attempt.
      </p>

      {/* ── Section 5 — FTC limit ─────────────────────────────── */}
      <h2 style={sH2}>5. The FTC limit — you do not always recover the full 25%</h2>
      <p style={sP}>
        The credit you can claim under Section 90 of the Income Tax Act is capped at the <span style={sStrong}>lower of</span>:
      </p>
      <ol style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>(a)</span> The foreign tax actually paid (25% of gross dividend in the US RSU case); or</li>
        <li><span style={sStrong}>(b)</span> The Indian tax otherwise payable on that same foreign income at your applicable rate (slab rate for dividends, since dividend income is taxed at slab under Section 115BBDA repealed and current regime).</li>
      </ol>
      <p style={sP}>
        For a senior IC in the 30% slab with 4% cess and 15% surcharge — total effective 35.88% — Indian tax on the dividend exceeds US withholding, so the cap is the US withholding (25%) and you recover the full 25%. Net India tax payable on the dividend = 35.88% − 25% = 10.88%.
      </p>
      <p style={sP}>
        For a filer in a lower slab — say, 20% slab with no surcharge, total effective 20.8% — Indian tax on the dividend is less than US withholding, so the cap is the Indian liability (20.8%) and you can only claim 20.8% credit. The 4.2% differential US withholding is lost; the US does not refund the excess via Indian processes. This is one structural inefficiency of the DTAA mechanism — a worker on a lower tax slab effectively loses the differential.
      </p>

      {/* ── Section 6 — Worked example ────────────────────────── */}
      <h2 style={sH2}>6. Worked example — Vikram at Microsoft Hyderabad</h2>
      <p style={sP}>
        Meet Vikram. Senior software engineer at Microsoft Hyderabad, ₹95L base, total income comfortably in the highest slab with the 15% surcharge band. He has accumulated 600 vested MSFT shares across multiple grants and is past the 24-month LTCG clock on most of them.
      </p>
      <p style={sP}>
        For FY 2025-26, MSFT pays ~$3.00/share in total annual dividend (four quarterly payments of $0.75 each). His broker (Morgan Stanley StockPlan) credits each quarterly dividend gross of US tax, then withholds 25% under the treaty rate from the credited amount.
      </p>

      <table style={sTable}>
        <thead>
          <tr>
            <th style={sTh}>Line</th>
            <th style={sTh}>Calculation</th>
            <th style={sTh}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={sTd}>MSFT shares held</td>
            <td style={sTd}>600</td>
            <td style={sTd}>—</td>
          </tr>
          <tr>
            <td style={sTd}>Annual dividend / share</td>
            <td style={sTd}>$3.00</td>
            <td style={sTd}>—</td>
          </tr>
          <tr>
            <td style={sTd}>Gross USD dividend</td>
            <td style={sTd}>600 &times; $3.00</td>
            <td style={sTd}>$1,800</td>
          </tr>
          <tr>
            <td style={sTd}>Gross INR dividend (avg rate ₹84)</td>
            <td style={sTd}>$1,800 &times; ₹84</td>
            <td style={sTd}>₹1,51,200</td>
          </tr>
          <tr>
            <td style={sTd}>US tax withheld @ 25%</td>
            <td style={sTd}>$1,800 &times; 25%</td>
            <td style={sTd}>$450 &asymp; ₹37,800</td>
          </tr>
          <tr>
            <td style={sTd}>Indian tax @ 35.88% slab</td>
            <td style={sTd}>₹1,51,200 &times; 35.88%</td>
            <td style={sTd}>₹54,250</td>
          </tr>
          <tr>
            <td style={sTd}>FTC claim (lower of US WHT, India tax)</td>
            <td style={sTd}>min(₹37,800, ₹54,250)</td>
            <td style={sTd}>₹37,800</td>
          </tr>
          <tr>
            <td style={sTd}><span style={sStrong}>Net Indian tax payable</span></td>
            <td style={sTd}>₹54,250 − ₹37,800</td>
            <td style={sTd}><span style={sStrong}>₹16,450</span></td>
          </tr>
        </tbody>
      </table>

      <p style={sP}>
        Vikram&apos;s total tax on this dividend, with Form 67 filed correctly: ₹37,800 (US) + ₹16,450 (India) = ₹54,250 total, equal to his Indian slab rate of 35.88% on the gross dividend. The DTAA mechanic has done its job — he is taxed once, at his higher of the two countries&apos; rates.
      </p>

      <div style={sCallout}>
        <span style={sStrong}>What happens if Vikram does not file Form 67?</span> India taxes the gross dividend at 35.88% = ₹54,250, payable in full. The US ₹37,800 stays in the US Treasury, gone. Total tax: ₹54,250 + ₹37,800 = <span style={sStrong}>₹92,050 on ₹1,51,200 of dividend income — an effective rate of 60.9%</span>. For one form he did not file, Vikram has lost ₹37,800. Across a five-year holding period at similar dividend yields, the cumulative loss compounds to ~₹2L+.
      </div>

      {/* ── Section 7 — Common mistakes ───────────────────────── */}
      <h2 style={sH2}>7. The four mistakes that defective-file Form 67</h2>
      <p style={sP}>
        <span style={sStrong}>Mistake 1 — Filing Form 67 after the ITR.</span> The most common error. Filers complete the ITR, realize they should also have claimed FTC, then go file Form 67 afterward. Under Rule 128, the FTC claim is then defective and the credit is disallowed. Always file Form 67 first, then the ITR — and reference the Form 67 acknowledgement number in the ITR&apos;s FTC schedule.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 2 — Not attaching the 1042-S.</span> Form 67 requires documentary evidence of the foreign tax paid. The 1042-S issued by the US broker is the canonical document. Filers sometimes attach only the broker monthly statement or a screenshot of the dividend transaction — both insufficient. The IT Department wants the 1042-S, in PDF, attached to the Form 67 e-filing.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 3 — Using the wrong INR conversion rate.</span> For Form 67, the INR conversion rate is the <span style={sStrong}>SBI TT buying rate on the last day of the month immediately preceding the month of receipt</span>, per Rule 26. This is a different convention than the vest-day RBI TT rate used for capital gains. Using the wrong rate triggers reconciliation errors against the 1042-S figures the department already has.
      </p>
      <p style={sP}>
        <span style={sStrong}>Mistake 4 — Over-claiming credit beyond Indian liability.</span> If you are in a lower slab where Indian tax on the dividend is less than the 25% US withholding, you cannot claim the full 25% — the credit is capped at the lower Indian liability. Claiming more triggers either an outright disallowance or a refund-mismatch notice. Always run the cap calculation before populating Form 67.
      </p>

      {/* ── Section 8 — How Rovia handles it ──────────────────── */}
      <h2 style={sH2}>8. What Rovia does</h2>
      <p style={sP}>
        Form 67 is one form per year, but the surrounding logistics — 1042-S parsing, TRC tracking, INR conversion at the correct preceding-month-end rate, FTC cap calculation, ordering against ITR submission — is exactly the kind of repetitive low-value paperwork that an automated platform should remove from your July.
      </p>
      <ul style={{ ...sP, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>1042-S ingestion.</span> Upload (or auto-pull, where the broker supports OAuth) your annual 1042-S. Each line is parsed into income type, gross amount, withholding rate.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>INR conversion at the right rate.</span> SBI TT buying rate on the preceding month-end, applied per dividend payment date — not the broker rate, not the vest-day rate, not the year-average rate.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>FTC cap calculation.</span> Your applicable Indian slab on the dividend income is computed and the credit is capped at the lower of US withholding and Indian liability — so you never over-claim.</li>
        <li style={{ marginBottom: '10px' }}><span style={sStrong}>TRC reminder and Form 10F prep.</span> Calendar reminders for TRC application in May/June; Form 10F draft generated for your portal submission.</li>
        <li><span style={sStrong}>ITR-portal-compatible output.</span> Form 67 fields are output in the exact format the e-filing portal accepts, with the acknowledgement number then carried into your ITR&apos;s FTC schedule.</li>
      </ul>
      <p style={sP}>
        For the broader RSU tax picture, see the <Link href="/blog/rsu-tax-india" style={{ color: 'var(--gold)' }}>RSU Taxation pillar</Link>. The per-company broker pages walk through which platform your dividends and 1042-S come from: <Link href="/microsoft" style={{ color: 'var(--gold)' }}>Microsoft</Link> (Morgan Stanley), <Link href="/apple" style={{ color: 'var(--gold)' }}>Apple</Link> (Schwab).
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
        Last reviewed June 1, 2026. DTAA rates and Form 67 procedure reflect Rule 128 of the Income Tax Rules as in force for AY 2026-27. Dividend yields are approximate and shift quarter to quarter — verify against your actual 1042-S before filing. This article is informational and not personalised tax advice — your specific position should be reviewed by a qualified chartered accountant.
      </p>
    </>
  );
}
