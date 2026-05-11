import Link from 'next/link';
import { stories } from '@/data/stories';

export const metadata = {
  title: { absolute: 'Real RSU Stories — Indian Engineers on Rovia' },
  description: 'First-person accounts from Indian engineers and managers at Google, Microsoft, Amazon and Netflix on managing US RSUs with Rovia.',
  alternates: { canonical: 'https://rovia.money/stories' },
};

export default function StoriesPage() {
  return (
    <div style={{ background: '#020917', minHeight: '100vh' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 28px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '11px', fontWeight: '700', color: 'var(--gold)',
            textTransform: 'uppercase', letterSpacing: '0.12em',
            border: '1px solid rgba(196,169,126,0.3)',
            borderRadius: '999px', padding: '5px 14px', marginBottom: '20px',
          }}>
            Real stories
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: '800',
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: '1.15',
            marginBottom: '16px',
          }}>
            Indian engineers.<br />Real RSU problems.<br />What happened next.
          </h1>
          <p style={{ fontSize: '17px', color: '#64748b', lineHeight: '1.7', maxWidth: '560px' }}>
            First-person accounts from engineers and managers at US tech companies — on Schedule FA, FX costs, LTCG timing, and the spreadsheets they finally stopped using.
          </p>
        </div>

        {/* Story cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {stories.map((s) => (
            <Link key={s.slug} href={`/stories/${s.slug}`} className="story-card" style={{ textDecoration: 'none' }}>
              <article style={{
                background: '#0a1220',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                padding: '28px 32px',
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>

                  {/* Avatar */}
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: s.avatarColor + '22',
                    border: `1px solid ${s.avatarColor}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '14px', fontWeight: '700', color: s.avatarColor,
                    letterSpacing: '0.02em',
                  }}>
                    {s.initials}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Meta row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: '#e2e8f0' }}>{s.name}</span>
                      <span style={{ fontSize: '12px', color: '#475569' }}>·</span>
                      <span style={{ fontSize: '12px', color: '#475569' }}>{s.role}, {s.company}</span>
                      <span style={{ fontSize: '12px', color: '#475569' }}>·</span>
                      <span style={{
                        fontSize: '10px', fontWeight: '700', color: s.tagColor,
                        background: s.tagColor + '15',
                        border: `1px solid ${s.tagColor}30`,
                        borderRadius: '999px', padding: '2px 8px',
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                      }}>
                        {s.tag}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 style={{
                      fontSize: 'clamp(15px, 2vw, 17px)',
                      fontWeight: '700',
                      color: '#f1f5f9',
                      lineHeight: '1.4',
                      marginBottom: '10px',
                      letterSpacing: '-0.01em',
                    }}>
                      {s.headline}
                    </h2>

                    {/* Metric + read time */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{
                        background: 'rgba(196,169,126,0.08)',
                        border: '1px solid rgba(196,169,126,0.2)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        display: 'flex', alignItems: 'baseline', gap: '6px',
                      }}>
                        <span style={{ fontSize: '15px', fontWeight: '800', color: 'var(--gold)', letterSpacing: '-0.02em' }}>
                          {s.keyMetric.value}
                        </span>
                        <span style={{ fontSize: '11px', color: '#64748b' }}>
                          {s.keyMetric.label}
                        </span>
                      </div>
                      <span style={{ fontSize: '12px', color: '#334155' }}>{s.readTime}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{ color: '#334155', fontSize: '18px', flexShrink: 0, paddingTop: '4px' }}>→</div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '48px',
          padding: '32px',
          background: 'linear-gradient(135deg, rgba(196,169,126,0.08), rgba(196,169,126,0.03))',
          border: '1px solid rgba(196,169,126,0.2)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#f1f5f9', marginBottom: '4px' }}>
              Recognise your situation in any of these?
            </div>
            <div style={{ fontSize: '13px', color: '#64748b' }}>
              Rovia is built for exactly these problems.
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
        .story-card article {
          transition: border-color 0.15s, background 0.15s;
        }
        .story-card:hover article {
          border-color: rgba(196,169,126,0.25) !important;
          background: #0c1628 !important;
        }
      `}</style>
    </div>
  );
}
