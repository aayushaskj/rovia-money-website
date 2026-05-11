'use client';

import Link from 'next/link';
import { companyMeta } from '@/data/companies';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 28px 28px',
      background: '#040810',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Main row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto auto',
          gap: '48px',
          alignItems: 'start',
          marginBottom: '32px',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <img
              src="/rovia-logo-dark.png"
              alt="Rovia"
              style={{ height: '40px', width: 'auto', marginBottom: '12px', display: 'block' }}
            />
            <p style={{ fontSize: '13px', color: '#4a5568', lineHeight: '1.6', maxWidth: '220px', marginBottom: '16px' }}>
              RSU management for Indian residents at US companies.
            </p>
            <a href="https://rovia.one" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '12px', padding: '8px 16px' }}>
              Open Rovia ↗
            </a>
          </div>

          {/* Companies */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: '700', color: '#4a5568',
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px',
            }}>
              Companies
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {companyMeta.slice(0, 8).map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} style={{
                  fontSize: '13px', color: '#8892a4', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '7px',
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f0f2f5'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
                >
                  <span style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    background: c.color, flexShrink: 0,
                  }} />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: '700', color: '#4a5568',
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px',
            }}>
              Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'vested.blog', href: 'https://vested.blog', ext: true },
                { label: 'RSU guide', href: 'https://www.vested.blog/posts/complete-rsu-guide-indians-us-multinationals', ext: true },
                { label: 'RSU calculator', href: 'https://www.vested.blog/tools/rsu-calculator', ext: true },
                { label: 'Share transfer guide', href: 'https://www.vested.blog/posts/share-transfer-between-brokers-india', ext: true },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.ext ? '_blank' : undefined}
                  rel={item.ext ? 'noopener noreferrer' : undefined}
                  style={{ fontSize: '13px', color: '#8892a4', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f0f2f5'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Blog CTA */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: '700', color: '#4a5568',
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px',
            }}>
              Learn
            </div>
            <p style={{ fontSize: '13px', color: '#4a5568', lineHeight: '1.6', marginBottom: '12px', maxWidth: '160px' }}>
              India-focused RSU and tax guides on vested.blog.
            </p>
            <a
              href="https://vested.blog"
              target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'var(--gold)', textDecoration: 'none', fontWeight: '600' }}
            >
              Read the blog →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: '12px', color: '#2d3748' }}>
            © {new Date().getFullYear()} Rovia. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: '#2d3748', maxWidth: '440px', textAlign: 'right', lineHeight: '1.5' }}>
            General educational information only. Not investment, tax, or legal advice. Consult a SEBI-registered advisor and a qualified CA.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
