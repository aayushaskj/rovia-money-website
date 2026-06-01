import Link from 'next/link';
import { posts } from '@/data/blog';

export const metadata = {
  title: { absolute: 'Blog — RSU, Tax & Repatriation for Indian Residents | Rovia' },
  description:
    'Pillar guides on RSU taxation in India, Schedule FA, broker transfers, FX repatriation and concentration risk — written for Indian engineers at FAANG and US tech companies.',
  alternates: { canonical: 'https://rovia.money/blog' },
  openGraph: {
    title: 'Rovia Blog — RSU, Tax & Repatriation',
    description: 'In-depth pillar guides for Indian residents holding US RSUs.',
    type: 'website',
  },
};

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogIndexPage() {
  return (
    <div style={{ background: '#020917', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1060px', margin: '0 auto', padding: '72px 28px 96px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '11px', fontWeight: 700, color: 'var(--gold)',
            textTransform: 'uppercase', letterSpacing: '0.12em',
            border: '1px solid rgba(196,169,126,0.3)',
            borderRadius: '999px', padding: '5px 14px', marginBottom: '20px',
          }}>
            Pillar guides
          </div>
          <h1 style={{
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '14px',
          }}>
            The technical side of US RSUs from India.
          </h1>
          <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7, maxWidth: '560px' }}>
            Long-form guides on the India tax stack, Schedule FA mechanics, broker transfers and repatriation — for engineers who want the math, not the marketing.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p style={{ color: '#64748b' }}>No posts yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="blog-card"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <article style={{
                  background: '#0a1220',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '18px',
                  padding: '28px 32px',
                  transition: 'border-color 0.18s, transform 0.18s',
                }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
                    {(p.tags || []).slice(0, 3).map((tag) => (
                      <span key={tag} style={{
                        fontSize: '10px', fontWeight: 700,
                        color: 'var(--gold)',
                        background: 'rgba(196,169,126,0.08)',
                        border: '1px solid rgba(196,169,126,0.2)',
                        textTransform: 'uppercase', letterSpacing: '0.08em',
                        borderRadius: '999px', padding: '3px 10px',
                      }}>{tag}</span>
                    ))}
                    <span style={{ fontSize: '12px', color: '#475569', marginLeft: 'auto' }}>
                      {formatDate(p.publishDate)} · {p.readingMinutes} min read
                    </span>
                  </div>
                  <h2 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#f1f5f9',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.3,
                    margin: '0 0 10px',
                  }}>
                    {p.title}
                  </h2>
                  <p style={{
                    fontSize: '14px',
                    color: '#8892a4',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {p.dek}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{
          marginTop: '64px',
          padding: '32px 36px',
          background: 'linear-gradient(135deg, rgba(196,169,126,0.07), rgba(196,169,126,0.02))',
          border: '1px solid rgba(196,169,126,0.18)',
          borderRadius: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#f1f5f9', marginBottom: '5px' }}>
              Stop reconciling spreadsheets every July.
            </div>
            <div style={{ fontSize: '13px', color: '#64748b' }}>
              Rovia computes INR cost basis at RBI rate, auto-fills Schedule FA, tracks the 24-month clock.
            </div>
          </div>
          <a
            href="https://rovia.one"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '14px', whiteSpace: 'nowrap' }}
          >
            Open Rovia →
          </a>
        </div>

      </div>

      <style>{`
        .blog-card:hover article {
          border-color: rgba(196,169,126,0.3) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
