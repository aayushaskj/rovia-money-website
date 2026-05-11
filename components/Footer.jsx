import Link from 'next/link';
import { companyMeta } from '@/data/companies';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '48px 24px 32px',
        marginTop: '80px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '800',
                  color: 'white',
                }}
              >
                R
              </div>
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#f1f5f9',
                }}
              >
                Rovia
              </span>
            </div>
            <p
              style={{
                fontSize: '13px',
                color: '#64748b',
                lineHeight: '1.6',
                maxWidth: '200px',
              }}
            >
              Global investment platform for Indian residents with US RSUs.
            </p>
            <a
              href="https://rovia.one"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '12px',
                fontSize: '13px',
                color: '#3b82f6',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              rovia.one →
            </a>
          </div>

          {/* Companies */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#475569',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Companies
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {companyMeta.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  style={{
                    fontSize: '13px',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: c.color,
                      flexShrink: 0,
                    }}
                  />
                  {c.name} RSU
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#475569',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Gallery', href: '/gallery' },
                { label: 'vested.blog', href: 'https://vested.blog', ext: true },
                {
                  label: 'RSU guide for Indians',
                  href: 'https://www.vested.blog/posts/complete-rsu-guide-indians-us-multinationals',
                  ext: true,
                },
                {
                  label: 'RSU take-home calculator',
                  href: 'https://www.vested.blog/tools/rsu-calculator',
                  ext: true,
                },
                {
                  label: 'Share transfer guide',
                  href: 'https://www.vested.blog/posts/share-transfer-between-brokers-india',
                  ext: true,
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.ext ? '_blank' : undefined}
                  rel={item.ext ? 'noopener noreferrer' : undefined}
                  style={{
                    fontSize: '13px',
                    color: '#94a3b8',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Get started */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#475569',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Get started
            </div>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', marginBottom: '16px' }}>
              Move your FAANG RSUs to Rovia. INR cost basis, 0 FX markup, India-first support.
            </p>
            <a
              href="https://rovia.one"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#3b82f6',
                color: 'white',
                fontSize: '13px',
                fontWeight: '600',
                padding: '8px 16px',
                borderRadius: '7px',
                textDecoration: 'none',
              }}
            >
              Open Rovia →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '12px', color: '#475569' }}>
            © {new Date().getFullYear()} Rovia. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: '#475569', maxWidth: '500px', textAlign: 'right' }}>
            This site provides general educational information. It is not investment, tax, or legal
            advice. Consult a SEBI-registered advisor and a qualified CA for decisions specific to
            you.
          </p>
        </div>
      </div>
    </footer>
  );
}
