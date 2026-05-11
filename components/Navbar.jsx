'use client';

import { useState } from 'react';
import Link from 'next/link';
import { companyGroups, getCompany } from '@/data/companies';

const featuredSlugs = ['google', 'meta', 'microsoft', 'amazon', 'apple', 'netflix'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(6, 11, 24, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 28px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img
            src="/rovia-logo-dark.png"
            alt="Rovia"
            height={48}
            style={{ height: '48px', width: 'auto', display: 'block' }}
          />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden-mobile">

          {/* Companies dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setCompaniesOpen(!companiesOpen)}
              style={{
                background: 'none', border: 'none',
                color: '#8892a4', fontSize: '14px', fontWeight: '500',
                padding: '7px 14px', cursor: 'pointer', borderRadius: '999px',
                display: 'flex', alignItems: 'center', gap: '5px',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#f0f2f5'}
              onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
            >
              Companies
              <span style={{ fontSize: '9px', opacity: 0.5 }}>▾</span>
            </button>

            {companiesOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: 0,
                background: '#0c1526',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '14px',
                padding: '8px',
                minWidth: '230px',
                boxShadow: '0 24px 48px rgba(0,0,0,0.6)',
              }}>
                {featuredSlugs.map((slug) => {
                  const c = getCompany(slug);
                  if (!c) return null;
                  return (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      onClick={() => setCompaniesOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '8px 10px', borderRadius: '8px',
                        textDecoration: 'none', color: '#e2e8f0',
                        fontSize: '14px', fontWeight: '500',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{
                        width: '26px', height: '26px', borderRadius: '7px',
                        background: c.hasLogo ? '#ffffff' : 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden', flexShrink: 0,
                        padding: c.hasLogo ? '3px' : '0',
                      }}>
                        {c.hasLogo
                          ? <img src={`/logos/${c.slug}.png`} alt={c.name} width={18} height={18} style={{ objectFit: 'contain', display: 'block' }} />
                          : <span style={{ fontSize: '10px', fontWeight: '700', color: c.color }}>{c.name[0]}</span>
                        }
                      </div>
                      <span style={{ flex: 1 }}>{c.name}</span>
                      <span style={{ fontSize: '11px', color: '#4a5568', fontWeight: '400' }}>{c.ticker}</span>
                    </Link>
                  );
                })}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '6px', paddingTop: '6px' }}>
                  <Link
                    href="/"
                    onClick={() => setCompaniesOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      padding: '8px 10px', borderRadius: '8px',
                      textDecoration: 'none', color: '#c9a96e',
                      fontSize: '13px', fontWeight: '600',
                      transition: 'background 0.1s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,169,110,0.06)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    View all 48 companies →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/stories"
            style={{
              color: '#8892a4', fontSize: '14px', fontWeight: '500',
              padding: '7px 14px', textDecoration: 'none', borderRadius: '999px',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#f0f2f5'}
            onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
          >
            Stories
          </Link>

          <a
            href="https://vested.blog" target="_blank" rel="noopener noreferrer"
            style={{
              color: '#8892a4', fontSize: '14px', fontWeight: '500',
              padding: '7px 14px', textDecoration: 'none', borderRadius: '999px',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#f0f2f5'}
            onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
          >
            Blog
          </a>
        </div>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="https://rovia.one" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '13px', padding: '9px 20px' }}>
            Open Rovia ↗
          </a>

          <button
            onClick={() => setOpen(!open)}
            style={{
              display: 'none', background: 'none', border: 'none',
              color: '#8892a4', cursor: 'pointer', padding: '6px',
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <><line x1="4" y1="4" x2="16" y2="16" /><line x1="16" y1="4" x2="4" y2="16" /></>
              ) : (
                <><line x1="3" y1="6" x2="17" y2="6" /><line x1="3" y1="10" x2="17" y2="10" /><line x1="3" y1="14" x2="17" y2="14" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#0c1526',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '16px 28px 24px',
          maxHeight: '70vh',
          overflowY: 'auto',
        }}>
          {companyGroups.map((group) => (
            <div key={group.label} style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '10px', fontWeight: '700', color: '#4a5568',
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px',
              }}>
                {group.label}
              </div>
              {group.slugs.map((slug) => {
                const c = getCompany(slug);
                if (!c) return null;
                return (
                  <Link key={c.slug} href={`/${c.slug}`} onClick={() => setOpen(false)} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '9px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.03)',
                    textDecoration: 'none', color: '#e2e8f0',
                    fontSize: '14px', fontWeight: '500',
                  }}>
                    <div style={{
                      width: '24px', height: '24px', borderRadius: '6px',
                      background: c.hasLogo ? '#ffffff' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      overflow: 'hidden', flexShrink: 0,
                      padding: c.hasLogo ? '3px' : '0',
                    }}>
                      {c.hasLogo
                        ? <img src={`/logos/${c.slug}.png`} alt={c.name} width={16} height={16} style={{ objectFit: 'contain', display: 'block' }} />
                        : <span style={{ fontSize: '9px', fontWeight: '700', color: c.color }}>{c.name[0]}</span>
                      }
                    </div>
                    <span style={{ flex: 1 }}>{c.name}</span>
                    <span style={{ fontSize: '11px', color: '#4a5568' }}>{c.ticker}</span>
                  </Link>
                );
              })}
            </div>
          ))}
          <div style={{ marginTop: '12px', display: 'flex', gap: '16px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <a href="https://vested.blog" target="_blank" rel="noopener noreferrer" style={{ color: '#8892a4', textDecoration: 'none', fontSize: '14px' }}>Blog</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 681px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
