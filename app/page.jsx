import Link from 'next/link';
import { companyGroups, getCompany } from '@/data/companies';

export const metadata = {
  title: 'Rovia — RSU management for Indian FAANG employees',
  description:
    'Indian residents at Google, Meta, Microsoft, Amazon, Apple, Netflix: move your RSUs to Rovia. INR cost basis, 0 platform FX markup, India-tax reporting built-in.',
};

const roviaFeatures = [
  {
    icon: '₹',
    title: 'INR cost basis, automatically',
    detail:
      'Every lot gets an INR cost basis computed at the vest-day SBI TT buying rate. No more July spreadsheet marathons.',
  },
  {
    icon: '📅',
    title: '24-month LTCG countdown per lot',
    detail:
      'India taxes foreign shares at 24 months (not US 12). Rovia shows a countdown per lot so you never misclassify.',
  },
  {
    icon: '0%',
    title: '0 platform FX markup',
    detail:
      "When you repatriate, Rovia doesn't add an FX spread. You pay your bank's wire rate — nothing more.",
  },
  {
    icon: '📋',
    title: 'Schedule FA auto-generated',
    detail:
      'Rovia produces Schedule FA disclosures automatically — no more pulling peak balances from statements.',
  },
  {
    icon: '📄',
    title: 'Form 67 / FTC prep',
    detail:
      'Dividend tracking with Form 67 data ready at filing time. Recover the 25% US withholding as a foreign tax credit.',
  },
  {
    icon: '🕐',
    title: 'India-based support, IST hours',
    detail:
      "India-tax-fluent support team operating in IST. When you have a problem at 10 AM, someone answers.",
  },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 24px 60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            background:
              'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(59,130,246,0.25)',
              borderRadius: '999px',
              padding: '5px 14px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#60a5fa',
              marginBottom: '28px',
              letterSpacing: '0.02em',
            }}
          >
            <span>●</span> Built for Indian residents at 48 US tech companies
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              color: '#f1f5f9',
              marginBottom: '20px',
            }}
          >
            Your RSUs vest in USD.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Manage them in India.
            </span>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: '#94a3b8',
              lineHeight: '1.7',
              marginBottom: '36px',
              maxWidth: '540px',
              margin: '0 auto 36px',
            }}
          >
            Indian residents at Google, Meta, Microsoft, Amazon, and 44 more US tech companies:
            move your RSUs from Fidelity, Schwab, E*TRADE, or Morgan Stanley to Rovia. INR cost
            basis. 0 platform FX markup. India-tax reporting built-in.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              Open Rovia →
            </a>
            <a
              href="https://vested.blog"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#e2e8f0',
                fontSize: '15px',
                fontWeight: '500',
                padding: '12px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Read vested.blog
            </a>
          </div>
        </div>
      </section>

      {/* Companies grid — grouped */}
      <section style={{ padding: '40px 24px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '36px',
              textAlign: 'center',
            }}
          >
            Select your company
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {companyGroups.map((group) => (
              <div key={group.label}>
                {/* Group label */}
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#334155',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '14px',
                    paddingBottom: '8px',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  {group.label}
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gap: '10px',
                  }}
                >
                  {group.slugs.map((slug) => {
                    const c = getCompany(slug);
                    if (!c) return null;
                    return (
                      <Link
                        key={c.slug}
                        href={`/${c.slug}`}
                        style={{
                          background: '#0f1828',
                          border: '1px solid rgba(255,255,255,0.07)',
                          borderRadius: '12px',
                          padding: '16px',
                          textDecoration: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          transition: 'border-color 0.15s, transform 0.15s',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = c.color + '50';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        {/* Logo */}
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '10px',
                            background: 'rgba(255,255,255,0.05)',
                            border: `1px solid rgba(255,255,255,0.08)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            flexShrink: 0,
                          }}
                        >
                          {c.hasLogo ? (
                            <img
                              src={`/logos/${c.slug}.png`}
                              alt={c.name}
                              width={28}
                              height={28}
                              style={{ objectFit: 'contain' }}
                            />
                          ) : (
                            <span
                              style={{
                                fontSize: '16px',
                                fontWeight: '700',
                                color: c.color,
                              }}
                            >
                              {c.name[0]}
                            </span>
                          )}
                        </div>

                        <div>
                          <div
                            style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: '#f1f5f9',
                              marginBottom: '3px',
                              lineHeight: '1.3',
                            }}
                          >
                            {c.name}
                          </div>
                          <div style={{ fontSize: '11px', color: '#475569' }}>
                            {c.ticker} · RSU guide →
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section
        style={{
          padding: '60px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.01)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: '700',
                color: '#f1f5f9',
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}
            >
              What Rovia does differently
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '460px', margin: '0 auto' }}>
              Built around Indian tax rules, not American ones.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {roviaFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background: '#0f1828',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    marginBottom: '12px',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(59,130,246,0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#f1f5f9',
                    marginBottom: '8px',
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison strip */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: '700',
              color: '#f1f5f9',
              letterSpacing: '-0.02em',
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            Employer broker vs Rovia
          </h2>

          <div
            style={{
              background: '#0f1828',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '14px',
              overflow: 'hidden',
            }}
          >
            {[
              ['Cost basis display', 'USD only', 'INR (SBI TT at vest date)'],
              ['Holding-period rule', 'US 12-month', 'India 24-month with countdown per lot'],
              ['Schedule FA', 'None — DIY', 'Auto-generated'],
              ['Form 67 / FTC', 'None — DIY', 'Dividend tracking with FTC-ready data'],
              ['Repatriation FX cost', '$25 wire + bank spread', '0 platform markup'],
              ['Support timezone', 'US Pacific hours', 'India-based, IST hours'],
              ['Lot selection default', 'FIFO (often)', 'Surfaced as default workflow'],
            ].map(([dim, employer, rovia], i) => (
              <div
                key={dim}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <div
                  style={{
                    padding: '14px 20px',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#94a3b8',
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {dim}
                </div>
                <div
                  style={{
                    padding: '14px 20px',
                    fontSize: '13px',
                    color: '#64748b',
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(0,0,0,0.1)',
                  }}
                >
                  {employer}
                </div>
                <div
                  style={{
                    padding: '14px 20px',
                    fontSize: '13px',
                    color: '#34d399',
                    fontWeight: '500',
                  }}
                >
                  {rovia}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              padding: '0 0 12px',
              gap: '0',
            }}
          >
            <div />
            <div style={{ padding: '10px 20px', fontSize: '11px', color: '#475569', fontWeight: '600' }}>
              Employer broker
            </div>
            <div
              style={{
                padding: '10px 20px',
                fontSize: '11px',
                color: '#3b82f6',
                fontWeight: '600',
              }}
            >
              Rovia
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '60px 24px 80px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: '700',
              color: '#f1f5f9',
              letterSpacing: '-0.02em',
              marginBottom: '14px',
            }}
          >
            Stop rebuilding spreadsheets.
          </h2>
          <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '28px', lineHeight: '1.6' }}>
            Move your RSUs to Rovia. INR cost basis, 0 FX markup, India-first reporting — all
            automatic.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://rovia.one"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#3b82f6',
                color: 'white',
                fontSize: '15px',
                fontWeight: '600',
                padding: '13px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Open Rovia →
            </a>
            <a
              href="https://www.vested.blog/posts/complete-rsu-guide-indians-us-multinationals"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8',
                fontSize: '15px',
                fontWeight: '500',
                padding: '13px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Read the RSU guide
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
