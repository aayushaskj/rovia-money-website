# rovia.money — Blog Editorial Plan

**Last updated:** 2026-05-16
**Owner:** growth@rovia.one
**Status:** Draft v1 — pending review before drafting begins

---

## 1. Why a blog on rovia.money (and not just vested.blog)

`vested.blog` is editorial / brand. `rovia.money/blog` should be conversion-adjacent: the post a user lands on when they Google a high-intent RSU question, with internal links into the broker-switch funnel and a Rovia CTA at the bottom.

Three jobs every post must do at least two of:

1. **Rank** — earn organic traffic on a specific high-intent query
2. **Prove authority** — answer the India-side technical question that Schwab / Morgan Stanley / E*TRADE never explain well
3. **Funnel** — link into a Rovia conversion surface (broker switch, signup, Schedule FA auto-gen)

If a post can't do at least two, it doesn't get written.

---

## 2. Pillar pipeline (priority order)

Each post is long-form (2,500+ words), evergreen by default, refreshed annually for tax-law / budget changes.

### Tier 1 — Foundational SEO + funnel

| # | Working title | Primary keyword | Funnel pull |
|---|---|---|---|
| 1 | RSU Taxation in India: The Complete Guide for FAANG Employees | `rsu tax india` | Authority |
| 2 | Schedule FA Filing for US RSUs: Step-by-step with examples | `schedule fa rsu` | High — Rovia auto-generates this |
| 3 | How to Transfer RSUs from Schwab / Morgan Stanley / E*TRADE to India | `transfer rsu india` | Direct — this is the broker switch |

### Tier 2 — Strong SEO + authority

| # | Working title | Primary keyword | Funnel pull |
|---|---|---|---|
| 4 | Concentration Risk: When Your RSUs Become a Single-Stock Bet | `rsu diversification` | Alarm + authority |
| 5 | FX & Repatriation: Moving USD from RSUs to India (LRS, costs, options) | `lrs rsu` | High — Rovia's 0 FX markup |
| 6 | ESPP for Indian Employees: The Discount, the Tax Trap, the Math | `espp india tax` | Authority |

### Tier 3 — Long-tail authority

| # | Working title | Primary keyword | Funnel pull |
|---|---|---|---|
| 7 | Vest-Cycle Tax Strategy: Lot Selection and the 24-Month LTCG Clock | `rsu ltcg india` | Authority |
| 8 | Form 67 for RSU Holders: When You Need It and How to File | `form 67 rsu` | Funnel — Rovia auto-fills |

### Tier 4 — Conversion / competitive

| # | Working title | Primary keyword | Funnel pull |
|---|---|---|---|
| 9 | Rovia vs Vested vs INDmoney: Cost & Tax Comparison | branded competitive | Direct conversion |

### Tier 5 — News / refresh

| # | Working title | Primary keyword | Funnel pull |
|---|---|---|---|
| 10 | The Indian Budget for RSU Holders (annual refresh) | `budget rsu india` | Authority + news cycle |

---

## 3. Editorial standards per post

- **Headline:** specific, keyword-led, no clickbait. Use real numbers where possible ("how the 24-month LTCG clock can cost you ₹4L on a single vest").
- **Dek (subheadline):** one-sentence promise of what the reader leaves knowing.
- **Length:** 2,500+ words for pillars. Section-broken with H2s every 300–500 words.
- **Tables / examples:** every pillar gets at least one worked numerical example with INR figures and at least one comparison table.
- **Tone:** direct, technical, no marketing fluff. Assume the reader is a senior IC — pay them the respect of the actual numbers.
- **Internal linking:** every post links to at least two of (a) the relevant `/[company]` page, (b) another pillar post, (c) the Rovia signup / broker-switch CTA.
- **FAQs:** 4–6 schema-marked FAQs at the bottom — these are SEO gold and answer the "people also ask" queries Google surfaces.
- **Author byline + last-updated date.** Both are E-E-A-T signals Google now weights heavily.

---

## 4. Site infrastructure plan

Matches the existing codebase pattern (no new dependencies, mirrors `/stories` and `/[company]`):

```
app/blog/
  page.jsx              ← listing page (mirrors app/stories/page.jsx)
  [slug]/page.jsx       ← post detail with generateStaticParams + generateMetadata

data/blog/
  index.js              ← exports posts[] (metadata only, drives listing + sitemap)
  rsu-tax-india.jsx     ← one file per post: exports { meta, Body }
  schedule-fa-rsu.jsx
  ...

app/sitemap.js          ← add blog posts to the URL set
app/layout.jsx          ← add "Blog" link to global nav
```

Each post file:

```js
export const meta = {
  slug: 'rsu-tax-india',
  title: 'RSU Taxation in India: The Complete Guide for FAANG Employees',
  dek: 'Perquisite tax, capital gains, Schedule FA — everything an Indian RSU holder actually needs.',
  publishDate: '2026-05-20',
  updatedDate: '2026-05-20',
  author: 'Rovia Editorial',
  tags: ['tax', 'rsu', 'india'],
  readingMinutes: 14,
  seoTitle: '...',
  seoDescription: '...',
  seoKeywords: '...',
};

export function Body() {
  return ( /* JSX */ );
}
```

---

## 5. Cadence

- **Phase 1 (weeks 1–2):** Build infrastructure + draft post #1 (RSU Taxation pillar).
- **Phase 2 (weeks 3–6):** Ship posts #2, #3, #4 — one every ~1.5 weeks.
- **Phase 3 (ongoing):** One pillar per month + refresh existing posts after Budget / tax-rule changes.

Annual refresh: every post gets a date-stamped review every February after the Union Budget.

---

## 6. Open questions before drafting begins

- [ ] Author byline — "Rovia Editorial" or a named author (E-E-A-T weights named authors with bios more heavily)?
- [ ] Should pillar #9 (Rovia vs Vested vs INDmoney) wait until we have a stronger product story to defend?
- [ ] Do we want a `/blog/category/<tag>` taxonomy or single flat listing?
- [ ] Comments / engagement — Disqus, none, or external (X / LinkedIn)?
- [ ] Are images / hero illustrations needed per post, or text-first?

---

## 7. First post to draft

**Recommendation: Pillar #1 — RSU Taxation in India.**

Reasoning: it's the foundational page every other pillar will internal-link back to. Ships authority signal first, gives the rest of the pipeline an anchor.
