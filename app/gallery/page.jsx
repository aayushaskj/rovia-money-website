import { readdirSync } from 'fs';
import { join } from 'path';
import Image from 'next/image';

export const metadata = {
  title: 'Rovia Creatives Gallery | rovia.money',
  description:
    'Visual assets and creatives from Rovia — the global investment platform for Indian residents with US RSUs. RSU guides, FAANG company resources, and India-tax explainers.',
  keywords:
    'Rovia creatives, RSU India infographics, FAANG RSU India, Rovia gallery, Indian RSU management visuals',
  openGraph: {
    title: 'Rovia Creatives Gallery',
    description:
      'Visual assets from Rovia — India-first RSU management for FAANG employees.',
    locale: 'en_IN',
    type: 'website',
  },
};

function getCreatives() {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
  try {
    const dir = join(process.cwd(), 'public', 'creatives');
    const files = readdirSync(dir);
    return files
      .filter((f) => validExtensions.some((ext) => f.toLowerCase().endsWith(ext)))
      .map((f) => ({
        src: `/creatives/${f}`,
        alt: f
          .replace(/\.[^.]+$/, '')
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        filename: f,
      }));
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const creatives = getCreatives();
  const isEmpty = creatives.length === 0;

  return (
    <div style={{ minHeight: '100vh', padding: '64px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px',
            }}
          >
            Rovia Creatives
          </div>
          <h1
            style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: '800',
              color: '#f1f5f9',
              letterSpacing: '-0.03em',
              marginBottom: '12px',
            }}
          >
            Gallery
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '480px', lineHeight: '1.6' }}>
            Visual assets, explainers, and creatives from Rovia — built for Indian residents
            managing US RSUs from FAANG companies.
          </p>
          {!isEmpty && (
            <p
              style={{
                fontSize: '13px',
                color: '#475569',
                marginTop: '8px',
              }}
            >
              {creatives.length} asset{creatives.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {isEmpty ? (
          /* Empty state */
          <div
            style={{
              border: '2px dashed rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '80px 40px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                marginBottom: '20px',
                opacity: 0.3,
              }}
            >
              🖼️
            </div>
            <h2
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#475569',
                marginBottom: '8px',
              }}
            >
              No creatives yet
            </h2>
            <p style={{ fontSize: '14px', color: '#334155' }}>
              Add images to{' '}
              <code
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  color: '#94a3b8',
                }}
              >
                public/creatives/
              </code>{' '}
              and they will appear here automatically.
            </p>
            <p
              style={{
                fontSize: '12px',
                color: '#1e293b',
                marginTop: '12px',
              }}
            >
              Supported formats: JPG, PNG, WebP, GIF, SVG
            </p>
          </div>
        ) : (
          /* Masonry grid */
          <div
            style={{
              columns: 'auto 280px',
              gap: '16px',
            }}
          >
            {creatives.map((c) => (
              <div
                key={c.filename}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '16px',
                  background: '#0f1828',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', width: '100%' }}>
                  <img
                    src={c.src}
                    alt={c.alt}
                    title={c.alt}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </div>
                <div style={{ padding: '10px 14px' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#64748b',
                      fontWeight: '500',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {c.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SEO text block */}
        <div
          style={{
            marginTop: '64px',
            padding: '32px',
            background: '#0f1828',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '14px',
          }}
        >
          <h2
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#e2e8f0',
              marginBottom: '12px',
            }}
          >
            About Rovia
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7', marginBottom: '12px' }}>
            Rovia is a global investment platform built for Indian residents who hold US equities —
            primarily RSUs from FAANG and other US multinationals. Unlike employer brokers (Fidelity,
            Schwab, Morgan Stanley at Work), Rovia is built from the ground up around Indian tax
            rules: INR cost basis at vest-day SBI TT rates, 24-month India LTCG tracking per lot,
            Schedule FA auto-generation, Form 67 / FTC prep, and 0 platform FX markup on
            repatriation.
          </p>
          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>
            Indian employees at Google, Meta, Microsoft, Amazon, Apple, Netflix, and other
            US-headquartered companies can transfer existing RSU shares from their employer broker
            to Rovia via ACATS — without selling, without triggering tax, and without interrupting
            their vesting schedule.
          </p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://rovia.one"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}
            >
              Open Rovia →
            </a>
            <a
              href="https://vested.blog"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}
            >
              Read vested.blog →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
