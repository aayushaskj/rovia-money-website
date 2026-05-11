import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCompany, companyList } from '@/data/companies';
import { earningsData } from '@/data/earnings';
import GuideContent from '@/components/GuideContent';
import dynamic from 'next/dynamic';

const StockChart    = dynamic(() => import('@/components/StockChart'),    { ssr: false });
const RsuCalculators = dynamic(() => import('@/components/RsuCalculators'), { ssr: false });

export async function generateStaticParams() {
  return companyList.map((slug) => ({ company: slug }));
}

export async function generateMetadata({ params }) {
  const co = getCompany(params.company);
  if (!co) return {};
  // Trim description to 155 chars max for Google
  const desc = co.seoDescription?.length > 155
    ? co.seoDescription.slice(0, 152) + '...'
    : co.seoDescription;
  return {
    title: { absolute: co.seoTitle },   // bypass template — titles already have "| Rovia" or brand
    description: desc,
    keywords: co.seoKeywords,
    alternates: {
      canonical: `https://rovia.money/${co.slug}`,
    },
    openGraph: {
      title: co.seoTitle,
      description: desc,
      url: `https://rovia.money/${co.slug}`,
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: `/og-default.png`,
          width: 1200,
          height: 630,
          alt: `${co.name} RSU management for Indian employees — Rovia`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: co.seoTitle,
      description: desc,
      images: ['/og-default.png'],
    },
  };
}

// Build JSON-LD schema for a company page
function buildCompanySchema(co) {
  const pageUrl = `https://rovia.money/${co.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // WebPage
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: co.seoTitle,
        description: co.seoDescription,
        isPartOf: { '@id': 'https://rovia.money/#website' },
        inLanguage: 'en-IN',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rovia.money' },
            { '@type': 'ListItem', position: 2, name: `${co.name} RSU India`, item: pageUrl },
          ],
        },
      },
      // HowTo — the transfer steps
      {
        '@type': 'HowTo',
        '@id': `${pageUrl}#howto`,
        name: `How to transfer ${co.name} RSUs from ${co.brokerShortName} to Rovia`,
        description: `Step-by-step guide for Indian ${co.name} employees to transfer ${co.ticker} RSUs from ${co.brokerShortName} to Rovia for INR cost basis tracking and India-tax reporting.`,
        totalTime: 'PT5M',
        tool: [
          { '@type': 'HowToTool', name: co.brokerShortName },
          { '@type': 'HowToTool', name: 'Rovia App' },
        ],
        step: (co.steps || []).map((step, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: step.title,
          text: step.detail,
          url: `${pageUrl}#step-${i + 1}`,
        })),
      },
      // FAQPage
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: (co.faq || []).map((item) => ({
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
}

export default function CompanyPage({ params }) {
  const co = getCompany(params.company);
  if (!co) notFound();

  const schema = buildCompanySchema(co);

  return (
    <div style={{ minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ padding: '72px 28px 56px', position: 'relative', overflow: 'hidden' }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '-100px', left: '50%',
          transform: 'translateX(-50%)',
          width: '800px', height: '500px',
          background: `radial-gradient(ellipse, ${co.color}12 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>

          {/* Logo + badge row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '32px' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '18px',
              background: co.hasLogo ? '#ffffff' : 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', flexShrink: 0,
              padding: co.hasLogo ? '8px' : '0',
              boxShadow: `0 0 0 1px ${co.color}22, 0 8px 32px rgba(0,0,0,0.4)`,
            }}>
              {co.hasLogo
                ? <img src={`/logos/${co.slug}.png`} alt={co.name} width={52} height={52} style={{ objectFit: 'contain', display: 'block' }} />
                : <span style={{ fontSize: '28px', fontWeight: '800', color: co.color }}>{co.name[0]}</span>
              }
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: `${co.color}14`,
              border: `1px solid ${co.color}28`,
              borderRadius: '999px', padding: '5px 16px',
              fontSize: '12px', fontWeight: '600', color: co.color,
              letterSpacing: '0.02em',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: co.color }} />
              {co.name} · {co.ticker} · {co.brokerShortName}
            </div>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(30px, 5vw, 56px)',
            fontWeight: '800',
            lineHeight: '1.08',
            letterSpacing: '-0.03em',
            color: '#f0f2f5',
            marginBottom: '18px',
            whiteSpace: 'pre-line',
          }}>
            {co.headline}
          </h1>

          <p style={{
            fontSize: '16px', color: '#8892a4', lineHeight: '1.75',
            marginBottom: '36px', maxWidth: '640px',
          }}>
            {co.subheadline}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a href="https://rovia.onelink.me/xOtI/yjxw13ya" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Transfer to Rovia →
            </a>
            <a href={co.brokerGuideUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '13px' }}>
              {co.brokerGuideLabel}
            </a>
          </div>

          {/* Stat strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '12px',
          }}>
            {[
              { label: 'Ticker',          value: co.ticker },
              { label: 'Current broker',  value: co.brokerShortName },
              { label: 'Vest cycle',      value: co.vestCycle },
              { label: 'Analyst target',  value: co.analystTarget },
            ].map((s) => (
              <div key={s.label} style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px', padding: '14px 18px',
              }}>
                <div style={{ fontSize: '11px', color: '#4a5568', marginBottom: '5px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#f0f2f5' }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain points ─────────────────────────────────────── */}
      <section style={{ padding: '56px 28px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <span className="section-label">What {co.brokerShortName} costs you</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {co.painPoints.map((p) => (
              <div key={p.title} style={{
                background: 'var(--card)',
                border: '1px solid rgba(239,68,68,0.12)',
                borderRadius: '14px', padding: '22px',
              }}>
                <div style={{
                  fontSize: '18px', marginBottom: '12px',
                  width: '38px', height: '38px',
                  background: 'rgba(239,68,68,0.07)',
                  borderRadius: '9px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#fca5a5', marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: '#8892a4', lineHeight: '1.7' }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Migration guide ──────────────────────────────────── */}
      <section style={{ padding: '72px 28px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <span className="section-label">Step-by-step transfer</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 34px)',
              fontWeight: '800', color: '#f0f2f5',
              letterSpacing: '-0.02em', marginBottom: '8px', lineHeight: '1.1',
            }}>
              How to transfer your {co.ticker} RSUs{' '}
              <span className="canela" style={{ fontSize: 'clamp(24px, 3.2vw, 37px)' }}>to Rovia</span>
            </h2>
            <p style={{ fontSize: '14px', color: '#8892a4' }}>
              Everything is done inside Rovia — takes about 2 minutes.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {co.steps.map((step, i) => (
              <div key={step.n} style={{ display: 'flex', gap: '20px', position: 'relative' }}>
                {i < co.steps.length - 1 && (
                  <div style={{
                    position: 'absolute', left: '19px', top: '42px', bottom: '-4px',
                    width: '2px',
                    background: 'linear-gradient(180deg, var(--gold-border) 0%, transparent 100%)',
                  }} />
                )}
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'var(--gold-subtle)',
                    border: '1px solid var(--gold-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: '700', color: 'var(--gold)',
                  }}>
                    {step.n}
                  </div>
                </div>
                <div style={{ paddingBottom: '32px', flex: 1 }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#f0f2f5', marginBottom: '6px', paddingTop: '8px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#8892a4', lineHeight: '1.75' }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--gold-subtle)',
            border: '1px solid var(--gold-border)',
            borderRadius: '12px', padding: '16px 20px',
            fontSize: '13px', color: '#e2c896', lineHeight: '1.7', marginTop: '8px',
            display: 'flex', flexDirection: 'column', gap: '6px',
          }}>
            <div><strong style={{ color: 'var(--gold)' }}>No sale. No tax event.</strong>{' '}Shares transfer in-kind — your holding period and cost basis carry over intact.</div>
            <div><strong style={{ color: 'var(--gold)' }}>Keep your {co.brokerShortName} account open.</strong>{' '}Future {co.ticker} vests will continue landing there. Only move the shares you already hold.</div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ padding: '56px 28px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', marginBottom: '28px' }}>
            <span className="section-label">Common questions — {co.name}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {co.faq.map((item) => (
              <div key={item.q} className="card" style={{ padding: '22px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#f0f2f5', marginBottom: '10px' }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: '13px', color: '#8892a4', lineHeight: '1.75' }}>{item.a}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '24px' }}>
            <a href={co.brokerGuideUrl} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'var(--gold)', textDecoration: 'none', fontWeight: '600' }}>
              {co.brokerGuideLabel}
            </a>
          </div>
        </div>
      </section>

      {/* ── Stock chart ──────────────────────────────────────── */}
      <section style={{ padding: '56px 28px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <span className="section-label">{co.ticker} stock performance</span>
          </div>
          <StockChart ticker={co.ticker} color={co.color} analystTarget={co.analystTarget} />
        </div>
      </section>

      {/* ── Earnings & Blackout ─────────────────────────────────── */}
      {earningsData[co.slug] && (
        <section style={{ padding: '40px 28px 48px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <span className="section-label">{co.ticker} earnings & blackout</span>
            </div>
            {earningsData[co.slug].blackoutStart ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {[
                  {
                    label: 'Next earnings',
                    value: earningsData[co.slug].earningsDate,
                    sub: earningsData[co.slug].quarter,
                    icon: '📅',
                    accent: co.color,
                  },
                  {
                    label: 'Blackout starts',
                    value: earningsData[co.slug].blackoutStart + ', 2026',
                    sub: '~14 days before earnings',
                    icon: '🔒',
                    accent: '#ef4444',
                  },
                  {
                    label: 'Blackout ends',
                    value: earningsData[co.slug].blackoutEnd + ', 2026',
                    sub: '2 business days after earnings',
                    icon: '✅',
                    accent: '#34d399',
                  },
                  {
                    label: 'ACATS during blackout?',
                    value: 'Generally yes',
                    sub: 'Transfer ≠ sale — verify with your plan admin',
                    icon: '↔️',
                    accent: '#c4a97e',
                  },
                ].map((item) => (
                  <div key={item.label} style={{
                    background: 'var(--card)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px',
                    padding: '16px 18px',
                  }}>
                    <div style={{ fontSize: '11px', color: '#4a5568', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#f0f2f5', marginBottom: '4px' }}>
                      {item.value}
                    </div>
                    <div style={{ fontSize: '11px', color: '#475569' }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '18px 20px', fontSize: '14px', color: '#64748b' }}>
                {earningsData[co.slug].earningsDate}
              </div>
            )}
            <p style={{ fontSize: '11px', color: '#334155', marginTop: '12px', lineHeight: '1.6' }}>
              Earnings dates are estimates for {earningsData[co.slug]?.quarter ?? 'the upcoming quarter'}. Blackout windows are approximate — actual dates are set by {co.name} and communicated to employees separately. ACATS share transfers are generally permitted during blackout periods (they are not sales), but always verify with your stock plan administrator.
            </p>
          </div>
        </section>
      )}

      {/* ── Calculators ──────────────────────────────────────── */}
      <section style={{ padding: '56px 28px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <span className="section-label">RSU calculators</span>
          </div>
          <RsuCalculators company={co} />
        </div>
      </section>


      {/* ── Guide content ────────────────────────────────────── */}
      <section style={{
        padding: '64px 28px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.015)',
      }}>
        <GuideContent company={co} />
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section style={{ padding: '80px 28px 100px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 3vw, 38px)',
            fontWeight: '800', color: '#f0f2f5',
            letterSpacing: '-0.025em', marginBottom: '8px', lineHeight: '1.1',
          }}>
            Ready to move your
          </h2>
          <h2 style={{ fontSize: 'clamp(26px, 3.3vw, 42px)', letterSpacing: '-0.02em', marginBottom: '20px' }}>
            <span className="canela">{co.name} RSUs?</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#8892a4', marginBottom: '36px', lineHeight: '1.75' }}>
            Transfer in minutes inside Rovia. Your {co.ticker} shares arrive in 3–5 days
            with INR cost basis, lot-level 24-month LTCG countdown, and Schedule FA ready for filing.
          </p>
          <a href="https://rovia.onelink.me/xOtI/yjxw13ya" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '15px', padding: '13px 32px' }}>
            Transfer to Rovia →
          </a>
        </div>
      </section>

      {/* ── Other companies ──────────────────────────────────── */}
      <section style={{ padding: '40px 28px 56px', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#040810' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <span className="section-label">Also at Rovia</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {companyList
              .filter((slug) => slug !== co.slug)
              .map((slug) => {
                const c = getCompany(slug);
                if (!c) return null;
                return (
                  <Link key={c.slug} href={`/${c.slug}`} style={{
                    background: 'var(--card)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '999px',
                    padding: '7px 16px',
                    fontSize: '13px', fontWeight: '500', color: '#8892a4',
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '7px',
                    transition: 'border-color 0.15s, color 0.15s',
                  }}>
                    {c.hasLogo
                      ? <span style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                          <img src={`/logos/${c.slug}.png`} alt={c.name} width={13} height={13} style={{ objectFit: 'contain', display: 'block' }} />
                        </span>
                      : <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: c.color, flexShrink: 0 }} />
                    }
                    {c.name} →
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

    </div>
  );
}
