import CompanyGrid from '@/components/CompanyGrid';

export const metadata = {
  title: { absolute: 'Rovia — RSU Management for Indian Residents at US Companies' },
  description:
    'Indian residents at Google, Meta, Microsoft, Amazon, Apple, Netflix: manage US RSUs with Rovia. INR cost basis at every vest, 0 FX markup, Schedule FA auto-generated. 48 companies.',
  alternates: {
    canonical: 'https://rovia.money',
  },
  openGraph: {
    title: 'Rovia — RSU Management for Indian Residents at US Companies',
    description:
      'INR cost basis, 0 platform FX markup, Schedule FA auto-generated. For Indian residents at 48 US technology companies.',
    url: 'https://rovia.money',
    type: 'website',
  },
};

// Homepage FAQ for schema — answers top queries about Rovia
const homepageFAQ = [
  {
    q: 'What is Rovia and who is it for?',
    a: 'Rovia is an India-first investment platform for Indian residents who hold US RSUs (Restricted Stock Units) from US technology companies like Google, Meta, Microsoft, Amazon, Apple, and Netflix. It handles INR cost basis, LTCG tracking, Schedule FA, and repatriation without FX markup.',
  },
  {
    q: 'How does Rovia calculate INR cost basis for RSUs?',
    a: 'Rovia automatically records the INR cost basis for every RSU lot at the vest date using the SBI TT buying rate — the rate mandated by Indian tax law. This eliminates the need to manually track USD-to-INR conversion for each vest.',
  },
  {
    q: 'What is the LTCG holding period for US stocks held by Indian residents?',
    a: 'For Indian residents, the long-term capital gains (LTCG) holding period for foreign equity (including US RSUs) is 24 months, not the US 12-month threshold. Rovia shows a 24-month countdown per lot so you never misclassify gains.',
  },
  {
    q: 'Does transferring RSUs to Rovia trigger a capital gains tax event?',
    a: 'No. Transferring RSUs via ACATS (Automated Customer Account Transfer Service) is an in-kind share transfer. No shares are sold during the transfer. Your holding period and cost basis are preserved. There is no capital gains event.',
  },
  {
    q: 'What is Schedule FA and does Rovia help with it?',
    a: 'Schedule FA (Foreign Assets) is a mandatory disclosure in the Indian Income Tax Return for residents who hold foreign assets including US stocks. Rovia auto-generates Schedule FA disclosures using your holding data, including peak balance calculations.',
  },
  {
    q: 'Which US companies are supported on Rovia?',
    a: 'Rovia supports RSU transfers from employees at 48 US technology companies including Google (Alphabet), Meta, Microsoft, Amazon, Apple, Netflix, Salesforce, ServiceNow, PayPal, Uber, Adobe, Intel, AMD, NVIDIA, Qualcomm, and more.',
  },
];

const homePageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://rovia.money/#webpage',
      url: 'https://rovia.money',
      name: 'Rovia — RSU Management for Indian Residents at US Companies',
      description:
        'Manage US RSUs as an Indian resident. INR cost basis at every vest, 0 platform FX markup, Schedule FA auto-generated. 48 US companies supported.',
      isPartOf: { '@id': 'https://rovia.money/#website' },
      about: { '@id': 'https://rovia.money/#service' },
      inLanguage: 'en-IN',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://rovia.money',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://rovia.money/#faq',
      mainEntity: homepageFAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ],
};

const roviaFeatures = [
  {
    icon: '₹',
    title: 'INR cost basis, automatically',
    detail: 'Every lot gets an INR cost basis computed at the vest-day SBI TT buying rate. No more July spreadsheet marathons.',
  },
  {
    icon: '📅',
    title: '24-month LTCG countdown per lot',
    detail: 'India taxes foreign shares at 24 months, not the US 12. Rovia shows a per-lot countdown so you never misclassify.',
  },
  {
    icon: '0%',
    title: '0 platform FX markup',
    detail: "When you repatriate, Rovia doesn't add an FX spread. You pay your bank's wire rate — nothing more.",
  },
  {
    icon: '📋',
    title: 'Schedule FA auto-generated',
    detail: 'Rovia produces Schedule FA disclosures automatically — no more pulling peak balances from statements.',
  },
  {
    icon: '📄',
    title: 'Form 67 / FTC prep',
    detail: 'Dividend tracking with Form 67 data ready at filing time. Recover the 25% US withholding as a foreign tax credit.',
  },
  {
    icon: '🕐',
    title: 'India-based support, IST hours',
    detail: 'India-tax-fluent support team in IST. When you have a problem at 10 AM, someone answers.',
  },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section style={{
        padding: '100px 28px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Radial glow */}
        <div style={{
          position: 'absolute', top: '-140px', left: '50%',
          transform: 'translateX(-50%)',
          width: '800px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>

          {/* Section label */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <span className="section-label">For non-US residents holding US stock compensation</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            fontWeight: '800',
            lineHeight: '1.08',
            letterSpacing: '-0.035em',
            color: '#f0f2f5',
            marginBottom: '8px',
          }}>
            Your RSUs vest in USD.
          </h1>
          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            marginBottom: '28px',
          }}>
            <span className="canela" style={{ fontSize: 'clamp(40px, 6vw, 70px)' }}>
              Manage them in India.
            </span>
          </h1>

          <p style={{
            fontSize: '17px', color: '#8892a4', lineHeight: '1.75',
            marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px',
          }}>
            You live in India. Your RSUs vest in the US. Rovia bridges the gap —
            INR cost basis at every vest, 0 platform FX markup on repatriation,
            and India-tax reporting built in. Available for employees at 48 US companies.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://rovia.onelink.me/xOtI/yjxw13ya" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Transfer to Rovia →
            </a>
            <a href="https://vested.blog" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Read vested.blog
            </a>
          </div>
        </div>
      </section>

      {/* ── Companies grid ────────────────────────────────────── */}
      <section style={{ padding: '40px 28px 72px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <span className="section-label">Select your company</span>
          </div>
          <CompanyGrid />
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section style={{
        padding: '80px 28px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.015)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <span className="section-label">What we offer</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.5vw, 42px)',
              fontWeight: '800',
              color: '#f0f2f5',
              letterSpacing: '-0.025em',
              marginBottom: '6px',
              lineHeight: '1.1',
            }}>
              Built for India.{' '}
              <span className="canela" style={{ fontSize: 'clamp(28px, 3.8vw, 46px)' }}>Not America.</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#8892a4', maxWidth: '420px', margin: '12px auto 0', lineHeight: '1.6' }}>
              Every feature exists because Indian tax law required it.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}>
            {roviaFeatures.map((f) => (
              <div key={f.title} className="card" style={{ padding: '28px' }}>
                <div style={{
                  fontSize: '20px', marginBottom: '16px',
                  width: '44px', height: '44px',
                  background: 'var(--gold-subtle)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#f0f2f5', marginBottom: '8px' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#8892a4', lineHeight: '1.7' }}>{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────── */}
      <section style={{ padding: '80px 28px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <span className="section-label">The difference</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: '800',
              color: '#f0f2f5',
              letterSpacing: '-0.025em',
              lineHeight: '1.1',
            }}>
              Employer broker{' '}
              <span className="canela" style={{ fontSize: 'clamp(26px, 3.3vw, 42px)' }}>vs Rovia</span>
            </h2>
          </div>

          {/* Column headers */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
            paddingBottom: '12px', marginBottom: '4px',
          }}>
            <div />
            <div style={{ padding: '0 20px', fontSize: '12px', fontWeight: '700', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Employer broker
            </div>
            <div style={{ padding: '0 20px', fontSize: '12px', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Rovia
            </div>
          </div>

          <div className="card" style={{ borderRadius: '16px', overflow: 'hidden', padding: 0 }}>
            {[
              ['Cost basis display',  'USD only',              'INR (SBI TT at vest date)'],
              ['Holding-period rule', 'US 12-month',           'India 24-month with countdown'],
              ['Schedule FA',        'None — DIY',             'Auto-generated'],
              ['Form 67 / FTC',      'None — DIY',             'Dividend tracking + FTC data'],
              ['Repatriation FX',    '$25 wire + bank spread', '0 platform markup'],
              ['Support timezone',   'US Pacific hours',       'India-based, IST hours'],
              ['Lot selection',      'FIFO default',           'Surfaced per lot'],
            ].map(([dim, employer, rovia], i) => (
              <div key={dim} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}>
                <div style={{ padding: '15px 20px', fontSize: '13px', fontWeight: '500', color: '#8892a4', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                  {dim}
                </div>
                <div style={{ padding: '15px 20px', fontSize: '13px', color: '#4a5568', borderRight: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.08)' }}>
                  {employer}
                </div>
                <div style={{ padding: '15px 20px', fontSize: '13px', color: '#34d399', fontWeight: '600' }}>
                  {rovia}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{
        padding: '80px 28px 100px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.015)',
      }}>
        <div style={{ maxWidth: '540px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: '800',
            color: '#f0f2f5',
            letterSpacing: '-0.025em',
            lineHeight: '1.1',
            marginBottom: '8px',
          }}>
            Stop rebuilding
          </h2>
          <h2 style={{
            fontSize: 'clamp(28px, 3.8vw, 46px)',
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}>
            <span className="canela">spreadsheets.</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#8892a4', marginBottom: '36px', lineHeight: '1.7' }}>
            Move your RSUs to Rovia. INR cost basis, 0 FX markup, India-first reporting — all automatic.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://rovia.onelink.me/xOtI/yjxw13ya" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Transfer to Rovia →
            </a>
            <a
              href="https://www.vested.blog/posts/complete-rsu-guide-indians-us-multinationals"
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost"
            >
              Read the RSU guide
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
