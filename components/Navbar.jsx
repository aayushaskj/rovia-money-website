'use client';

import { useState } from 'react';
import Link from 'next/link';
import { companyGroups, getCompany } from '@/data/companies';

// Featured companies shown in navbar dropdown (FAANG + a few others)
const featuredSlugs = ['google', 'meta', 'microsoft', 'amazon', 'apple', 'netflix'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(8, 13, 24, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '800',
              color: 'white',
            }}
          >
            R
          </div>
          <span
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#f1f5f9',
              letterSpacing: '-0.02em',
            }}
          >
            Rovia
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
          className="hidden-mobile"
        >
          {/* Companies dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setCompaniesOpen(!companiesOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                fontSize: '14px',
                fontWeight: '500',
                padding: '6px 12px',
                cursor: 'pointer',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.15s',
              }}
            >
              Companies
              <span style={{ fontSize: '10px', opacity: 0.6 }}>▾</span>
            </button>
            {companiesOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '8px',
                  background: '#0f1828',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '8px',
                  minWidth: '220px',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                }}
              >
                {featuredSlugs.map((slug) => {
                  const c = getCompany(slug);
                  if (!c) return null;
                  return (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      onClick={() => setCompaniesOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 10px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        color: '#e2e8f0',
                        fontSize: '14px',
                        fontWeight: '500',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = 'transparent')
                      }
                    >
                      {/* Logo */}
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '6px',
                          background: 'rgba(255,255,255,0.06)',
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
                            width={16}
                            height={16}
                            style={{ objectFit: 'contain' }}
                          />
                        ) : (
                          <span style={{ fontSize: '10px', fontWeight: '700', color: c.color }}>
                            {c.name[0]}
                          </span>
                        )}
                      </div>
                      {c.name}
                      <span
                        style={{
                          marginLeft: 'auto',
                          fontSize: '11px',
                          color: '#64748b',
                          fontWeight: '400',
                        }}
                      >
                        {c.ticker}
                      </span>
                    </Link>
                  );
                })}

                {/* View all */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '6px', paddingTop: '6px' }}>
                  <Link
                    href="/"
                    onClick={() => setCompaniesOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: '#60a5fa',
                      fontSize: '13px',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'transparent')
                    }
                  >
                    View all 48 companies →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            style={{
              color: '#94a3b8',
              fontSize: '14px',
              fontWeight: '500',
              padding: '6px 12px',
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            Gallery
          </Link>

          <a
            href="https://vested.blog"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#94a3b8',
              fontSize: '14px',
              fontWeight: '500',
              padding: '6px 12px',
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            Blog
          </a>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://rovia.one"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#3b82f6',
              color: 'white',
              fontSize: '13px',
              fontWeight: '600',
              padding: '7px 16px',
              borderRadius: '7px',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'opacity 0.15s',
            }}
          >
            Open Rovia →
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px',
            }}
            className="show-mobile"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {open ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — all companies grouped */}
      {open && (
        <div
          style={{
            background: '#0f1828',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '12px 24px 20px',
            maxHeight: '70vh',
            overflowY: 'auto',
          }}
        >
          {companyGroups.map((group) => (
            <div key={group.label} style={{ marginBottom: '16px' }}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: '700',
                  color: '#334155',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '6px',
                }}
              >
                {group.label}
              </div>
              {group.slugs.map((slug) => {
                const c = getCompany(slug);
                if (!c) return null;
                return (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.03)',
                      textDecoration: 'none',
                      color: '#e2e8f0',
                      fontSize: '14px',
                      fontWeight: '500',
                    }}
                  >
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '5px',
                        background: 'rgba(255,255,255,0.05)',
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
                          width={14}
                          height={14}
                          style={{ objectFit: 'contain' }}
                        />
                      ) : (
                        <span style={{ fontSize: '9px', fontWeight: '700', color: c.color }}>
                          {c.name[0]}
                        </span>
                      )}
                    </div>
                    {c.name}
                    <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#475569' }}>
                      {c.ticker}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
          <div style={{ marginTop: '8px', display: 'flex', gap: '12px' }}>
            <Link
              href="/gallery"
              onClick={() => setOpen(false)}
              style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}
            >
              Gallery
            </Link>
            <a
              href="https://vested.blog"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}
            >
              Blog
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 641px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
