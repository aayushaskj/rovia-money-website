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
                    cursor: 'pointer',
                    transition: 'border-color 0.15s, transform 0.15s',
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
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
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
                      <span style={{ fontSize: '16px', fontWeight: '700', color: c.color }}>
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
  );
}
