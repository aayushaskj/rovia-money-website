# rovia.money — Next.js site

Company-specific RSU landing pages for Indian FAANG employees. Deploys to Vercel, served at rovia.money.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — overview + company grid |
| `/google` | Google RSU guide (Schwab → Rovia) |
| `/meta` | Meta RSU guide (Morgan Stanley → Rovia) |
| `/microsoft` | Microsoft RSU guide (Morgan Stanley → Rovia) |
| `/amazon` | Amazon RSU guide (E*TRADE → Rovia) |
| `/apple` | Apple RSU guide (Schwab → Rovia) |
| `/netflix` | Netflix RSU guide (Morgan Stanley → Rovia) |
| `/gallery` | Creatives gallery (auto-reads public/creatives/) |
| `/sitemap.xml` | Auto-generated sitemap with image entries |
| `/robots.txt` | Auto-generated robots file |

---

## Deploy to Vercel (5 minutes)

### 1. Push to GitHub

```bash
cd rovia-money-site
git init
git add .
git commit -m "Initial rovia.money site"
git remote add origin https://github.com/YOUR_ORG/rovia-money.git
git push -u origin main
```

### 2. Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done

### 3. Point rovia.money to Vercel

In GoDaddy DNS for rovia.money:

- Add `A` record: `@` → `76.76.21.21`
- Add `CNAME` record: `www` → `cns1.vercel-dns.com`

In Vercel project settings → Domains → add `rovia.money` and `www.rovia.money`.

---

## Add creatives for Google Images

1. Drop your image files into `public/creatives/`
2. Name them descriptively — the filename becomes the alt text (e.g. `rovia-google-rsu-india-guide.png`)
3. Push to GitHub → Vercel auto-deploys
4. The gallery at `/gallery` shows them automatically
5. The sitemap at `/sitemap.xml` includes all image URLs for Google Image indexing
6. Submit `https://rovia.money/sitemap.xml` to [Google Search Console](https://search.google.com/search-console)

**Supported formats:** JPG, JPEG, PNG, WebP, GIF, SVG

---

## Add a new company

Edit `data/companies.js` and add a new key following the existing structure:

```js
yourcompany: {
  name: 'Company Name',
  parent: 'Parent Corporation',
  ticker: 'TICK',
  slug: 'yourcompany',
  color: '#hex',
  brokerName: 'Broker Full Name',
  brokerShortName: 'Broker',
  vestCycle: 'Quarterly',
  analystTarget: '$XXX',
  headline: 'You work at Company.\nYour RSUs deserve India-first management.',
  subheadline: '...',
  brokerGuideUrl: 'https://vested.blog/posts/...',
  brokerGuideLabel: 'Read: Rovia vs Broker →',
  painPoints: [ /* 4 items */ ],
  steps: [ /* 6 steps */ ],
  faq: [ /* 3 items */ ],
  seoTitle: '...',
  seoDescription: '...',
  seoKeywords: '...',
}
```

The page at `/yourcompany` is created automatically — no other files to touch.

---

## Local dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Tech stack

- **Next.js 14** (App Router, static generation)
- **Tailwind CSS**
- **Vercel** (hosting)
- **GoDaddy** (DNS for rovia.money)

Built for [Rovia](https://rovia.one) · Editorial content at [vested.blog](https://vested.blog)
