# RSU Taxation in India: The Complete Guide for FAANG Employees

**Dek:** From the perquisite tax at vest to the LTCG clock to Schedule FA — the entire India-side tax stack for someone holding US RSUs, with every example in rupees.

**Last updated:** June 1, 2026 · Reflects Finance Act 2024 rules effective from July 23, 2024.

**Reading time:** ~14 minutes.

---

## The 30-second version

If you work at Google, Meta, Microsoft, Amazon, Apple, or Netflix from India and you're paid in RSUs, you have **two separate tax events** on every grant — and one annual disclosure that most people don't know exists.

| Stage | When it happens | What you pay tax on | Indian tax rate |
|---|---|---|---|
| 1 — Perquisite | At vest | Vest-day INR value of shares | Your slab rate (up to ~39% all-in for senior ICs) |
| 2a — STCG | Selling within 24 months of vest | Gain over vest-day cost basis | Your slab rate (so up to ~39%) |
| 2b — LTCG | Selling after 24 months of vest | Gain over vest-day cost basis | **12.5% flat, no indexation** (post Finance Act 2024) |
| Annual disclosure | Every ITR filing | Foreign asset holdings | Schedule FA — no minimum threshold |

That's the whole structure. Everything below is mechanics, edge cases, and a worked example in rupees that follows one Bengaluru-based Google engineer's 250-share vest from grant to sale.

If you take only one thing away: **the 24-month clock is everything.** Selling in month 23 versus month 25 can change your tax bill on the same gain from ~39% to 12.5%. We'll get to the math.

---

## 1. The two-stage tax structure that nobody explains

When your US employer grants you RSUs, you pay tax in India twice — at two completely different events, at two completely different rates.

**Event 1 — Vest.** The day shares actually land in your US brokerage account (Schwab, Morgan Stanley StockPlan, E*TRADE, Fidelity), India treats the fair-market value of those shares as **perquisite income** — the same bucket as a company-paid health insurance premium or a car lease. It gets taxed at your slab rate, in the financial year of the vest, whether or not you ever sell.

**Event 2 — Sale.** Whenever you eventually sell those shares, the difference between the sale price and your vest-day cost basis is a **capital gain** (or loss). Short-term if you held under 24 months from vest; long-term after.

These are two different tax computations under two different sections of the Income Tax Act. The perquisite event is governed by Section 17(2)(vi). The capital gains event is governed by Sections 45 and 112. The mechanics, rates, and even the *exchange rate you use* are different at each event. We'll cover both.

**What about US tax?** Under the India-US Double Taxation Avoidance Agreement (DTAA), if you're a non-resident alien in the US (you've filed Form W-8BEN with your broker), the US does not withhold income tax on your RSU vest income. India has full taxing rights. The only US withholding you'll see is on **dividends**, which is a separate Form 67 question we'll come back to.

---

## 2. Stage 1: Perquisite tax at vest

This is where most engineers get the mechanics wrong and end up either underpaying (and triggering interest under Section 234B/C) or overpaying because their employer's TDS used the wrong rate.

### What counts as the vest-day value

For Indian tax purposes, the perquisite value equals:

> **Number of shares vesting × USD fair market value on vest day × RBI reference rate (TT buying) on vest day**

Two things to watch:

1. **FMV is the closing price on the vest day**, not the opening price, not the day-before price. Some US brokers report the prior-day close for vest-confirmation purposes — that's their convention, not the Indian tax rule.
2. **The conversion rate is the RBI reference rate (TT buying)** on the vest day. Not your broker's spot rate. Not the cash-counter rate at your bank. The TT buying rate is published daily by the RBI and is what the Income Tax Department uses to verify your computation.

### Worked example — Priya, Google Bengaluru

Meet our example employee. She is a Senior Software Engineer at Google Bengaluru, ₹85L base, 1,000 GOOGL RSUs granted over four years on a quarterly vest schedule. Her annual income from base + perquisites puts her in the highest slab bracket with the 15% surcharge band.

Her Q4 2025 vest: **250 GOOGL shares.** GOOGL closes at $185.40 on the vest day. The RBI TT buying rate that day is ₹83.52.

| Line | Calculation | Amount |
|---|---|---|
| Shares vesting | 250 | |
| USD value | 250 × $185.40 | $46,350 |
| INR perquisite (TT rate) | $46,350 × ₹83.52 | ₹38,71,152 |
| Effective tax rate¹ | 30% slab + 4% cess + 15% surcharge | 35.88% |
| **Perquisite tax due** | ₹38,71,152 × 35.88% | **₹13,88,809** |

¹ *Surcharge applies because her total income for the year crosses ₹50L. The 15% band is for income between ₹1Cr and ₹2Cr; below ₹1Cr it would be 10%, above ₹2Cr it's 25%, and the 37% band has been capped at 25% under the new regime since FY 2023-24.*

### Sell-to-cover and why your employer's TDS may be wrong

Most US tech employers handle the tax in one of two ways:

**Option A — Indian payroll TDS.** Your Indian entity (Google India, Microsoft India, etc.) treats the vest as a salary component and withholds tax through payroll. Clean. Shows on your Form 16.

**Option B — Sell-to-cover via broker.** Schwab / Morgan Stanley / E*TRADE automatically sells a portion of the vesting shares (typically ~35–40%) at the open on vest day, remits USD to the employer, who then remits INR equivalent to the Indian tax authorities. Messier — the proceeds your broker reports are gross of tax, and the INR conversion may use the broker's rate rather than the RBI TT rate.

In Option B, three things commonly go wrong:

1. **The broker uses its own spot rate**, not the RBI TT rate. The Income Tax Department will recompute your perquisite using TT rate. If the broker rate was higher than TT rate, your employer over-deducted (you get a refund); if lower, you owe top-up tax — with interest if you didn't catch it.
2. **Sell-to-cover proceeds get treated as a sale, but they aren't.** The shares sold on vest day to cover tax have zero short-term capital gain because the vest-day cost basis equals the sale price. Don't double-count.
3. **The surcharge band gets applied as if RSU income is your only income.** It isn't. Your broker doesn't know your slab. The Indian employer should be the one tracking surcharge band — and may get it wrong if your base + RSU vests cross a bracket mid-year.

For Priya, the difference between an employer-applied 35.88% versus a broker-rate-based 33.20% would be ~₹1.04L of tax — paid later, with interest. Worth checking your Form 16 against your own RBI-rate computation.

---

## 3. Stage 2: Capital gains at sale

This is where Finance Act 2024 changed everything.

### The 24-month clock

Capital gains in India are classified by **holding period from the vest date** (not the grant date — the grant is unfunded promise, not the asset).

- **Less than 24 months from vest → Short-Term Capital Gain (STCG).** Taxed at your slab rate. For a senior IC in the 30% slab with 15% surcharge, that's ~35.88%, same as the perquisite rate.
- **24 months or more from vest → Long-Term Capital Gain (LTCG).** Taxed at a **flat 12.5%**. **No indexation.** Surcharge and cess still apply on top of the 12.5%, so the all-in effective rate for a senior IC in the highest surcharge band sits around 14–15%.

The 24-month rule applies because GOOGL, META, MSFT, AMZN, AAPL, NFLX are **unlisted securities for Indian capital gains purposes** — they don't trade on an Indian recognized exchange. The 12-month LTCG rule that applies to Indian-listed equity does not apply here.

### What Finance Act 2024 changed

Until July 22, 2024, foreign equity LTCG was taxed at 20% **with indexation benefit** (you could uplift your cost basis using the Cost Inflation Index and reduce taxable gain). Under the Finance (No. 2) Act, 2024, effective from July 23, 2024:

- LTCG rate: 20% → **12.5%**
- Indexation: removed
- Holding period for LTCG: unchanged at 24 months for unlisted/foreign equity

**This change is asymmetric.** Holders of high-appreciation stock (Google, Apple, etc., that ran 3–4× over five years) pay materially less under the new regime. Holders of slow-appreciation stock that barely outpaced inflation pay more because indexation used to nearly wipe their gains.

You can find sources still publishing the old "20% with indexation" rate — including parts of the Rovia site we're now correcting. For any vest after July 23, 2024, the new 12.5% flat rate applies.

### Worked example — Priya sells

Same 250 GOOGL shares as above. Cost basis: ₹38,71,152.

**Scenario A — Sells 18 months after vest (STCG).** Holding period: under 24 months.

GOOGL has run to $220, INR has held at ₹84.20.

| Line | Calculation | Amount |
|---|---|---|
| Sale proceeds | 250 × $220 × ₹84.20 | ₹46,31,000 |
| Cost basis | (from above) | ₹38,71,152 |
| Capital gain | | ₹7,59,848 |
| STCG tax @ 35.88% | | ₹2,72,633 |

**Scenario B — Sells 30 months after vest (LTCG).** Holding period: over 24 months.

GOOGL has continued to $235, INR at ₹84.50.

| Line | Calculation | Amount |
|---|---|---|
| Sale proceeds | 250 × $235 × ₹84.50 | ₹49,64,375 |
| Cost basis | | ₹38,71,152 |
| Capital gain | | ₹10,93,223 |
| LTCG tax @ 12.5% | | ₹1,36,653 |

**The same Priya, on the same 250 shares, paid ₹2.72L of tax in Scenario A versus ₹1.37L in Scenario B — even though she made a larger absolute gain in Scenario B.** Six extra months of holding saved her ~₹1.36L. That's the LTCG clock in action.

This is the single most important number to internalize if you hold RSUs from India.

---

## 4. Schedule FA — the disclosure nobody mentions

Every Indian resident & ordinarily resident who holds any foreign asset must file **Schedule FA** as part of their annual ITR. This includes vested RSUs sitting in your Schwab / Morgan Stanley / E*TRADE / Fidelity account.

### Three things people get wrong

1. **There is no minimum threshold.** Some accountants — and, until this post, some sections of the Rovia site itself — say Schedule FA is only mandatory if your foreign holding exceeds ₹5L. That is incorrect. The ₹5L is from a different provision in the Black Money Act dealing with penalty *quantum*, not a filing threshold. If you hold any foreign asset at any time during the relevant accounting period, Schedule FA filing is mandatory.
2. **The reporting period is calendar year, not financial year.** Schedule FA tables A1 through F use Jan 1 to Dec 31 as the accounting period. So in your ITR for FY 2025-26 (filed by July 2026), you're reporting your foreign assets as they stood between Jan 1, 2025 and Dec 31, 2025. This trips up almost everyone the first time.
3. **You report peak value, not just closing value.** Several tables (A3, for foreign equity) require you to disclose the highest fair-market value the asset hit during the reporting period — not just what you held on Dec 31. Many filers report only closing value and create a defensible-but-imperfect filing.

### The penalty stack

Non-disclosure of foreign assets triggers penalty and prosecution under the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015:

- **₹10 lakh per year** of non-disclosure (Section 43)
- **Up to 7 years imprisonment** for willful failure (Section 50)
- **30% tax + 90% penalty + 30% interest** on undisclosed income, if traced back

In practice, the Income Tax Department now receives CRS (Common Reporting Standard) data from US financial institutions, including end-of-year balances at Schwab, Fidelity, etc. Non-filing is increasingly mechanically detectable. The pre-2018 era of "they won't find out" is over.

---

## 5. Form 67 — only if your RSU pays dividends

If your employer's stock pays dividends (Microsoft, Apple, Cisco, IBM, Intel, and as of mid-2024 Meta), the US broker withholds 25% from the gross dividend under the India-US DTAA (reduced from the default 30% by treaty). To avoid double-taxation, you can claim **Foreign Tax Credit (FTC)** in India by filing Form 67 along with your ITR.

Mechanics:

1. Form 67 must be filed **before or on the date of your ITR filing.** Late Form 67 with an already-filed ITR is a defective filing.
2. You need to attach a tax residency certificate (TRC) and either Form 16A equivalent from the US broker or the year-end 1042-S issued by the broker.
3. The FTC claim is limited to the lower of (a) the US tax actually withheld, or (b) the Indian tax otherwise payable on that income.

Google, Meta (until 2024), Amazon, Netflix do not pay dividends — so most engineers at those four companies will never need Form 67. Microsoft, Apple, Cisco, Intel employees do.

---

## 6. The four most expensive mistakes

**Mistake 1 — Treating sell-to-cover proceeds as fully taxed.** The shares your broker sells on vest day to cover Indian tax have ₹0 capital gain (sold at vest-day price = cost basis). You don't owe additional capital gains tax on those. Some filers double-count this in their ITR. Common cost: ~₹50K–₹2L of overpayment per vest.

**Mistake 2 — Forgetting Schedule FA.** ₹10L/year penalty, retroactive. If you've held foreign equity for five years and never filed Schedule FA, your exposure is ₹50L of penalty plus interest plus prosecution risk. Common cost: catastrophic.

**Mistake 3 — Selling in month 23.** The 24-month clock matters more than the price. Selling in month 23 at a 20% gain produces ~35.88% tax. Selling in month 25 at the same price produces 12.5% tax. On a ₹10L gain, that's a ₹2.34L difference for two months of patience. Common cost: ₹50K–₹5L per misplayed vest.

**Mistake 4 — Using your broker's USD cost basis on your ITR.** Schwab and Morgan Stanley report cost basis in USD. Indian capital gains computation requires INR cost basis at the **vest-day RBI TT rate**, not the rate at sale. Using sale-day rate inflates your cost basis (if INR has weakened) and understates your taxable gain — IT Department recomputation will then add tax + interest. Common cost: ₹30K–₹2L per vest.

---

## 7. What Rovia does about it

The mechanics above are why Rovia exists. Specifically:

- **INR cost basis at RBI TT rate** computed and stored for every vest from every broker — Schwab, Morgan Stanley StockPlan, E*TRADE, Fidelity. No more manually reconciling broker statements against RBI daily reference rates.
- **Schedule FA auto-generation** in the exact ITR format, with calendar-year accounting period and peak-value reporting baked in.
- **Form 67 auto-fill** for dividend-paying stock holders, with TRC and 1042-S parsing.
- **24-month clock tracking** with calendar alerts at month 23 (warn before STCG cliff) and month 24+1 day (LTCG eligible).
- **Zero FX markup** on actual sale-and-remit transactions — meaningful at scale, when a 50-basis-point broker FX spread on a ₹50L sale is ₹25,000.

The broker-switch pages on rovia.money (one per company — [Google](/google), [Meta](/meta), [Microsoft](/microsoft), [Amazon](/amazon), [Apple](/apple), [Netflix](/netflix)) walk through the mechanical migration step by step.

---

## FAQ

**Q: Do I also owe US tax on my RSU vest?**
A: No, generally not, if you're a tax non-resident of the US and have filed Form W-8BEN with your broker. Under the India-US DTAA, India has full taxing rights on the employment-income portion of RSUs vested while you're an Indian resident. The US only withholds on dividends (25% under treaty).

**Q: What if I worked in the US and moved back to India mid-vest?**
A: Allocation rules apply. The portion of the RSU that vested while you were a US tax resident is US-taxable; the portion vesting after you became an Indian resident is India-taxable. The split is typically pro-rated by days. This is a CA-required conversation — don't DIY.

**Q: Does ESPP work the same way?**
A: No. ESPP has its own perquisite mechanics — the **discount** is a perquisite at purchase, and the holding period for LTCG runs from the purchase date (not the offering date). Microsoft, Apple, Cisco, Intel offer ESPPs; Google, Meta, Amazon, Netflix do not. Worth a separate pillar (Pillar #6 in our editorial pipeline).

**Q: Can I gift my RSUs to a family member to reduce tax?**
A: Gifting vested shares to a spouse is allowed, but clubbing provisions under Section 64 apply — the capital gain on subsequent sale is taxed in your hands, not theirs. Gifting to adult children or parents avoids clubbing but transfers the taxable event entirely; consult a CA before doing this with large positions.

**Q: I haven't sold anything. Do I still owe tax?**
A: Yes. The perquisite tax at vest is due regardless of sale. Many engineers are surprised that they owe tax on shares they haven't liquidated. This is also why sell-to-cover exists — to ensure the tax can be paid.

**Q: My employer's Form 16 shows a different RSU value than my own RBI-TT-rate computation. Which is right?**
A: The IT Department uses RBI TT buying rate. If your employer used a different rate (broker spot, monthly average, etc.), you should file based on the RBI rate and adjust. If your employer over-deducted, you're owed a refund; if under-deducted, you owe top-up tax — and ideally pay before March 31 to avoid Section 234B/C interest.

---

## Related reading

- [How to transfer RSUs from Schwab / Morgan Stanley / E*TRADE to a Rovia-managed account](/blog/transfer-rsus-to-india) *(coming next)*
- [Schedule FA step-by-step with screenshots](/blog/schedule-fa-rsu) *(coming next)*
- [Google RSU guide — Bengaluru and Hyderabad specifics](/google)
- [Meta RSU guide — Morgan Stanley StockPlan migration](/meta)
- [Microsoft RSU guide — ESPP + RSU stack](/microsoft)

---

*Last reviewed June 1, 2026. Tax rules quoted reflect the Finance (No. 2) Act, 2024, as applicable for assessment year 2026-27 onwards. This article is informational and not personalised tax advice — your specific position should be reviewed by a qualified chartered accountant.*
