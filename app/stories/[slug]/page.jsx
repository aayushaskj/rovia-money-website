import Link from 'next/link';
import { stories, getStory } from '@/data/stories';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const s = getStory(params.slug);
  if (!s) return {};
  return {
    title: { absolute: `${s.name}, ${s.role} at ${s.company} — ${s.tag} | Rovia` },
    description: s.teaser,
    alternates: { canonical: `https://rovia.money/stories/${s.slug}` },
    openGraph: {
      title: `${s.name} on Rovia`,
      description: s.teaser,
      type: 'article',
    },
  };
}

export default function StoryPage({ params }) {
  const s = getStory(params.slug);
  if (!s) notFound();

  // no "more stories" — keep the page focused on this person

  return (
    <div style={{ background: '#020917', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 28px 96px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
          <Link href="/stories" className="breadcrumb-link" style={{ fontSize: '13px', color: '#475569', textDecoration: 'none' }}>
            Stories
          </Link>
          <span style={{ color: '#334155', fontSize: '12px' }}>›</span>
          <span style={{ fontSize: '13px', color: '#334155' }}>{s.name}</span>
        </div>

        {/* Main split layout */}
        <div className="story-layout" style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* ── LEFT COLUMN ── */}
          <div className="story-left" style={{ position: 'sticky', top: '88px' }}>

            {/* Avatar card */}
            <div style={{
              background: `linear-gradient(160deg, ${s.avatarColor}18 0%, ${s.avatarColor}06 100%)`,
              border: `1px solid ${s.avatarColor}30`,
              borderRadius: '24px',
              padding: '36px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
              <div style={{
                width: '100px', height: '100px', borderRadius: '50%',
                overflow: 'hidden',
                background: s.avatarColor + '22',
                border: `2px solid ${s.avatarColor}55`,
                flexShrink: 0,
              }}>
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(s.name)}&backgroundColor=transparent&radius=0&skinColor=ae5d29,d08b5b,614335&hairColor=2c1b18,4a312c,090806&facialHairColor=2c1b18,4a312c`}
                  alt={s.name}
                  width={100}
                  height={100}
                  style={{ display: 'block', width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <div style={{ fontSize: '17px', fontWeight: '700', color: '#f1f5f9' }}>{s.name}</div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '3px' }}>{s.role}</div>
                <div style={{ fontSize: '13px', color: '#475569' }}>{s.company} · {s.location}</div>
              </div>
              <div style={{
                fontSize: '10px', fontWeight: '700', color: s.tagColor,
                background: s.tagColor + '18',
                border: `1px solid ${s.tagColor}35`,
                borderRadius: '999px', padding: '4px 12px',
                textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>
                {s.tag}
              </div>
            </div>

            {/* Stats */}
            <div style={{
              background: '#0a1220',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              overflow: 'hidden',
            }}>
              {s.stats.map((stat, i) => (
                <div key={i} style={{
                  padding: '14px 20px',
                  borderBottom: i < s.stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px',
                }}>
                  <span style={{ fontSize: '12px', color: '#475569' }}>{stat.label}</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#e2e8f0', textAlign: 'right' }}>{stat.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginTop: '20px' }}>
              <a href="https://rovia.one" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
                display: 'block', textAlign: 'center', fontSize: '14px',
              }}>
                Open Rovia →
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="story-right">

            {/* Teaser */}
            <p style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: '600',
              color: '#cbd5e1',
              lineHeight: '1.5',
              letterSpacing: '-0.02em',
              marginBottom: '40px',
              paddingBottom: '32px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
              &ldquo;{s.teaser}&rdquo;
            </p>

            {/* Q&A */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {s.qa.map((item, i) => (
                <div key={i} style={{
                  paddingTop: i === 0 ? '0' : '32px',
                  paddingBottom: '32px',
                  borderBottom: i < s.qa.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{
                    fontSize: '12px', fontWeight: '700',
                    color: 'var(--gold)',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    marginBottom: '10px',
                    display: 'flex', alignItems: 'center', gap: '8px',
                  }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: 'rgba(196,169,126,0.12)',
                      border: '1px solid rgba(196,169,126,0.25)',
                      fontSize: '10px', fontWeight: '800', color: 'var(--gold)',
                      flexShrink: 0,
                    }}>Q</span>
                    {item.question}
                  </div>
                  <p style={{
                    fontSize: '15px', lineHeight: '1.75', color: '#8892a4',
                    margin: 0,
                    paddingLeft: '28px',
                  }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Back to all stories */}
            <div style={{ marginTop: '56px' }}>
              <Link href="/stories" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', color: '#475569', textDecoration: 'none',
              }} className="back-link">
                ← All stories
              </Link>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .breadcrumb-link:hover { color: #94a3b8 !important; }
        .back-link:hover { color: #94a3b8 !important; }

        @media (max-width: 760px) {
          .story-layout {
            grid-template-columns: 1fr !important;
          }
          .story-left {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}
