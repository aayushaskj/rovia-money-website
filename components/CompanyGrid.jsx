'use client';

import Link from 'next/link';
import { companyGroups, getCompany } from '@/data/companies';

export default function CompanyGrid() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {companyGroups.map((group) => (
        <div key={group.label}>
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
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
                    borderRadius: '14px',
                    padding: '20px 16px 16px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '14px',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s, transform 0.15s, background 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = c.color + '55';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = '#111e32';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = '#0f1828';
                  }}
                >
                  {/* Logo — hero element */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '13px',
                      background: c.hasLogo ? '#ffffff' : 'rgba(255,255,255,0.07)',
                      border: c.hasLogo ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      flexShrink: 0,
                      padding: c.hasLogo ? '6px' : '0',
                    }}
                  >
                    {c.hasLogo ? (
                      <img
                        src={`/logos/${c.slug}.png`}
                        alt={c.name}
                        width={38}
                        height={38}
                        style={{ objectFit: 'contain', display: 'block' }}
                      />
                    ) : (
                      <span style={{ fontSize: '20px', fontWeight: '800', color: c.color }}>
                        {c.name[0]}
                      </span>
                    )}
                  </div>

                  <div style={{ width: '100%' }}>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#f1f5f9',
                        marginBottom: '4px',
                        lineHeight: '1.25',
                      }}
                    >
                      {c.name}
                    </div>
                    <div style={{ fontSize: '11px', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>{c.ticker}</span>
                      <span style={{ color: c.color + 'bb', fontSize: '11px' }}>→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
