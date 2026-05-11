import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCompany, companyList } from '@/data/companies';
import { companyGuides } from '@/data/guides';
import GuideContent from '@/components/GuideContent';
import dynamic from 'next/dynamic';

// Client components — loaded dynamically to keep server bundle lean
const StockChart    = dynamic(() => import('@/components/StockChart'),    { ssr: false });
const RsuCalculators = dynamic(() => import('@/components/RsuCalculators'), { ssr: false });
const EsppCalculator = dynamic(() => import('@/components/EsppCalculator').then(m => ({ default: m.default })), { ssr: false });

export async function generateStaticParams() {
  return companyList.map((slug) => ({ company: slug }));
}

export async function generateMetadata({ params }) {
  const co = getCompany(params.company);
  if (!co) return {};
  return {
    title: co.seoTitle,
    description: co.seoDescription,
    keywords: co.seoKeywords,
    openGraph: {
      title: co.seoTitle,
      description: co.seoDescription,
      url: `https://rovia.money/${co.slug}`,
      locale: 'en_IN',
      type: 'website',
    },
  };
}

export default function CompanyPage({ params }) {
  const co = getCompany(params.company);
  if (!co) notFound();

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '64px 24px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '400px',
            background: `radial-gradient(ellipse, ${co.color}18 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
          {/* Company logo + badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            {/* Logo mark */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              {co.hasLogo ? (
                <img
                  src={`/logos/${co.slug}.png`}
                  alt={co.name}
                  width={36}
                  height={36}
                  style={{ objectFit: 'contain' }}
                />
              ) : (
                <span style={{ fontSize: '22px', fontWeight: '800', color: co.color }}>
                  {co.name[0]}
                </span>
              )}
            </div>

            {/* Pill badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: co.color + '18',
                border: `1px solid ${co.color}30`,
                borderRadius: '999px',
                padding: '5px 14px',
                fontSize: '12px',
                fontWeight: '600',
                color: co.color,
                letterSpacing: '0.02em',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: co.color,
                }}
              />
              {co.name} · {co.ticker} · {co.brokerShortName}
            </div>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(28px, 4.5vw, 50px)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              color: '#f1f5f9',
              marginBottom: '20px',
              whiteSpace: 'pre-line',
            }}
          >
            {co.headline}
          </h1>

          <p
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              lineHeight: '1.7',
              marginBottom: '32px',
              maxWidth: '620px',
            }}
          >
            {co.subheadline}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a
              href="https://rovia.one"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#3b82f6',
                color: 'white',
                fontSize: '15px',
                fontWeight: '600',
                padding: '12px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Move to Rovia →
            </a>
            <a
              href={co.brokerGuideUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#e2e8f0',
                fontSize: '14px',
                fontWeight: '500',
                padding: '12px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              {co.brokerGuideLabel}
            </a>
          </div>

          {/* Stat strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
            }}
          >
            {[
              { label: 'Ticker', value: co.ticker },
              { label: 'Current broker', value: co.brokerShortName },
              { label: 'Vest cycle', value: co.vestCycle },
              { label: 'Analyst target', value: co.analystTarget },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                }}
              >
                <div style={{ fontSize: '11px', color: '#475569', marginBottom: '4px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0' }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section
        style={{
          padding: '48px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.01)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '24px',
            }}
          >
            What {co.brokerShortName} costs you
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '12px',
            }}
          >
            {co.painPoints.map((p) => (
              <div
                key={p.title}
                style={{
                  background: '#0f1828',
                  border: '1px solid rgba(239, 68, 68, 0.15)',
                  borderRadius: '12px',
                  padding: '20px',
                }}
              >
                <div
                  style={{
                    fontSize: '20px',
                    marginBottom: '10px',
                    width: '36px',
                    height: '36px',
                    background: 'rgba(239,68,68,0.08)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {p.icon}
                </div>
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fca5a5',
                    marginBottom: '8px',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration guide */}
      <section style={{ padding: '56px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ marginBottom: '36px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: '700',
                color: '#f1f5f9',
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              How to move your {co.ticker} RSUs to Rovia
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b' }}>
              A step-by-step ACATS transfer from {co.brokerName}.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {co.steps.map((step, i) => (
              <div
                key={step.n}
                style={{
                  display: 'flex',
                  gap: '20px',
                  paddingBottom: i < co.steps.length - 1 ? '0' : '0',
                  position: 'relative',
                }}
              >
                {/* Connector line */}
                {i < co.steps.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '19px',
                      top: '40px',
                      bottom: '-4px',
                      width: '2px',
                      background: 'linear-gradient(180deg, rgba(59,130,246,0.3) 0%, transparent 100%)',
                    }}
                  />
                )}

                {/* Step number */}
                <div style={{ flexShrink: 0 }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(59,130,246,0.12)',
                      border: '1px solid rgba(59,130,246,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#60a5fa',
                    }}
                  >
                    {step.n}
                  </div>
                </div>

                {/* Content */}
                <div style={{ paddingBottom: '32px', flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#f1f5f9',
                      marginBottom: '6px',
                      paddingTop: '8px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(59,130,246,0.06)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: '10px',
              padding: '16px 20px',
              fontSize: '13px',
              color: '#93c5fd',
              lineHeight: '1.6',
              marginTop: '8px',
            }}
          >
            <strong style={{ color: '#60a5fa' }}>Keep your {co.brokerShortName} account open.</strong>{' '}
            Future {co.ticker} vests will continue landing there. Only move the shares you already
            hold to Rovia.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: '48px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.01)',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '24px',
            }}
          >
            Common questions — {co.name}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {co.faq.map((item) => (
              <div
                key={item.q}
                style={{
                  background: '#0f1828',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '10px',
                  padding: '20px',
                }}
              >
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#e2e8f0',
                    marginBottom: '10px',
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>{item.a}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px' }}>
            <a
              href={co.brokerGuideUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '13px',
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              {co.brokerGuideLabel}
            </a>
          </div>
        </div>
      </section>

      {/* Stock chart */}
      <section
        style={{
          padding: '48px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            {co.ticker} stock performance
          </p>
          <StockChart ticker={co.ticker} color={co.color} />
        </div>
      </section>

      {/* Calculators */}
      <section
        style={{
          padding: '48px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            RSU calculators
          </p>
          <RsuCalculators company={co} />
        </div>
      </section>

      {/* ESPP calculator — only for companies that offer it */}
      {companyGuides[co.slug]?.hasEspp && (
        <section
          style={{
            padding: '0 24px 48px',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#475569',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              ESPP calculator
            </p>
            <EsppCalculator company={co} />
          </div>
        </section>
      )}

      {/* 2000-word guide content */}
      <section
        style={{
          padding: '56px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.01)',
        }}
      >
        <GuideContent company={co} />
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: '60px 24px 80px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(20px, 3vw, 30px)',
              fontWeight: '700',
              color: '#f1f5f9',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            Ready to move your {co.name} RSUs?
          </h2>
          <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '28px', lineHeight: '1.6' }}>
            Open a Rovia account in 1–3 days. Then initiate the ACATS transfer and your{' '}
            {co.ticker} shares arrive with INR cost basis, lot-level 24-month LTCG countdown, and
            Schedule FA ready for filing.
          </p>
          <a
            href="https://rovia.one"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#3b82f6',
              color: 'white',
              fontSize: '15px',
              fontWeight: '600',
              padding: '14px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Open Rovia →
          </a>
        </div>
      </section>

      {/* Other companies */}
      <section
        style={{
          padding: '32px 24px 48px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            Also at Rovia
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {companyList
              .filter((slug) => slug !== co.slug)
              .map((slug) => {
                const c = getCompany(slug);
                if (!c) return null;
                return (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    style={{
                      background: '#0f1828',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#94a3b8',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    {c.hasLogo ? (
                      <img
                        src={`/logos/${c.slug}.png`}
                        alt={c.name}
                        width={14}
                        height={14}
                        style={{ objectFit: 'contain', opacity: 0.8 }}
                      />
                    ) : (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: c.color,
                        }}
                      />
                    )}
                    {c.name} RSU →
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
