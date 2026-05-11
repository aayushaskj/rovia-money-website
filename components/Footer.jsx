'use client';

import Link from 'next/link';
import { companyMeta } from '@/data/companies';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '64px 28px 36px',
      background: '#040810',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '48px',
          marginBottom: '56px',
        }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <img
              src="/rovia-logo-white.png"
              alt="Rovia"
              style={{ height: '20px', width: 'auto', marginBottom: '16px', display: 'block' }}
            />
            <p style={{ fontSize: '13px', color: '#4a5568', lineHeight: '1.7', maxWidth: '200px', marginBottom: '20px' }}>
              Global investment platform for Indian residents with US RSUs.
            </p>
            <a href="https://rovia.one" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '13px', padding: '9px 20px' }}>
              Open Rovia ↗
            </a>
          </div>

          {/* Companies */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: '700', color: '#4a5568',
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px',
            }}>
              Companies
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {companyMeta.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} style={{
                  fontSize: '13px', color: '#8892a4', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f0f2f5'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
                >
                  <span style={{
                    width: '5px', height: '5px', borderRadius: '50%',
                    background: c.color, flexShrink: 0,
                  }} />
                  {c.name} RSU
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: '700', color: '#4a5568',
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px',
            }}>
              Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Gallery', href: '/gallery' },
                { label: 'vested.blog', href: 'https://vested.blog', ext: true },
                { label: 'RSU guide for Indians', href: 'https://www.vested.blog/posts/complete-rsu-guide-indians-us-multinationals', ext: true },
                { label: 'RSU take-home calculator', href: 'https://www.vested.blog/tools/rsu-calculator', ext: true },
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

          {/* Get started */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: '700', color: '#4a5568',
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px',
            }}>
              Get started
            </div>
            <p style={{ fontSize: '13px', color: '#4a5568', lineHeight: '1.7', marginBottom: '20px' }}>
              Move your FAANG RSUs to Rovia. INR cost basis, 0 FX markup, India-first support.
            </p>
            <a
              href="https://vested.blog"
              target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'var(--gold)', textDecoration: 'none', fontWeight: '600' }}
            >
              Read vested.blog →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: '12px', color: '#2d3748' }}>
            © {new Date().getFullYear()} Rovia. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: '#2d3748', maxWidth: '480px', textAlign: 'right', lineHeight: '1.6' }}>
            General educational information only. Not investment, tax, or legal advice.
            Consult a SEBI-registered advisor and a qualified CA.
          </p>
        </div>
      </div>
    </footer>
  );
}
