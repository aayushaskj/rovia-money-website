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
    description: s.subheadline,
    alternates: { canonical: `https://rovia.money/stories/${s.slug}` },
    openGraph: {
      title: s.headline,
      description: s.subheadline,
      type: 'article',
    },
  };
}

// Render story text: **bold** sections, double newlines → paragraphs
function renderStory(text) {
  return text.split('\n\n').map((block, i) => {
    if (block.startsWith('**') && block.endsWith('**')) {
      return (
        <h3 key={i} style={{
          fontSize: '16px', fontWeight: '700', color: '#e2e8f0',
          marginTop: '32px', marginBottom: '12px', letterSpacing: '-0.01em',
        }}>
          {block.slice(2, -2)}
        </h3>
      );
    }
    const parts = block.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j} style={{ color: '#f1f5f9', fontWeight: '700' }}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    return (
      <p key={i} style={{ fontSize: '16px', lineHeight: '1.8', color: '#8892a4', marginBottom: '20px' }}>
        {parts}
      </p>
    );
  });
}

export default function StoryPage({ params }) {
  const s = getStory(params.slug);
  if (!s) notFound();

  const others = stories.filter((x) => x.slug !== s.slug).slice(0, 2);

  return (
    <div style={{ background: '#020917', minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '56px 28px 80px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
          <Link href="/stories" className="breadcrumb-link" style={{ fontSize: '13px', color: '#475569', textDecoration: 'none' }}>
            Stories
          </Link>
          <span style={{ color: '#334155', fontSize: '12px' }}>›</span>
          <span style={{ fontSize: '13px', color: '#334155' }}>{s.name}</span>
        </div>

        {/* Tag */}
        <div style={{
          display: 'inline-block',
          fontSize: '10px', fontWeight: '700', color: s.tagColor,
          background: s.tagColor + '15',
          border: `1px solid ${s.tagColor}30`,
          borderRadius: '999px', padding: '4px 12px',
          textTransform: 'uppercase', letterSpacing: '0.08em',
          marginBottom: '20px',
        }}>
          {s.tag}
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(22px, 4vw, 34px)',
          fontWeight: '800',
          color: '#f1f5f9',
          lineHeight: '1.2',
          letterSpacing: '-0.03em',
          marginBottom: '16px',
        }}>
          {s.headline}
        </h1>

        {/* Subheadline */}
        <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', marginBottom: '32px' }}>
          {s.subheadline}
        </p>

        {/* Author + meta row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          paddingBottom: '28px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '36px',
          flexWrap: 'wrap',
        }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            background: s.avatarColor + '22',
            border: `1px solid ${s.avatarColor}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', fontWeight: '700', color: s.avatarColor,
            flexShrink: 0,
          }}>
            {s.initials}
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0' }}>{s.name}</div>
            <div style={{ fontSize: '12px', color: '#475569' }}>
              {s.role} · {s.company} · {s.yearsVested} years vested · {s.broker}
            </div>
          </div>
          <div style={{ marginLeft: 'auto', fontSize: '12px', color: '#334155' }}>{s.readTime}</div>
        </div>

        {/* Key metric callout */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(196,169,126,0.1), rgba(196,169,126,0.04))',
          border: '1px solid rgba(196,169,126,0.25)',
          borderRadius: '12px',
          padding: '20px 24px',
          marginBottom: '36px',
          display: 'flex', alignItems: 'center', gap: '16px',
        }}>
          <div style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: '800', color: 'var(--gold)',
            letterSpacing: '-0.03em', lineHeight: 1, flexShrink: 0,
          }}>
            {s.keyMetric.value}
          </div>
          <div style={{ fontSize: '14px', color: '#8892a4', lineHeight: '1.5' }}>
            {s.keyMetric.label}
          </div>
        </div>

        {/* Story body */}
        <div style={{ marginBottom: '40px' }}>
          {renderStory(s.story)}
        </div>

        {/* Pullquote */}
        <blockquote style={{
          borderLeft: '3px solid var(--gold)',
          paddingLeft: '24px',
          margin: '40px 0',
        }}>
          <p style={{
            fontSize: '18px', fontWeight: '600', color: '#cbd5e1',
            lineHeight: '1.6', fontStyle: 'italic', letterSpacing: '-0.01em',
          }}>
            &ldquo;{s.pullquote}&rdquo;
          </p>
          <footer style={{ fontSize: '13px', color: '#475569', marginTop: '8px' }}>
            — {s.name}, {s.role} at {s.company}
          </footer>
        </blockquote>

        {/* CTA */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '14px',
          padding: '28px',
          marginTop: '48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#f1f5f9', marginBottom: '4px' }}>
              {s.company} employee? This is your situation too.
            </div>
            <div style={{ fontSize: '13px', color: '#475569' }}>
              Transfer your {s.ticker} lots to Rovia in about a week. No tax event.
            </div>
          </div>
          <a href="https://rovia.one" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>
            Open Rovia →
          </a>
        </div>

        {/* More stories */}
        {others.length > 0 && (
          <div style={{ marginTop: '56px' }}>
            <div style={{
              fontSize: '11px', fontWeight: '700', color: '#334155',
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px',
            }}>
              More stories
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {others.map((o) => (
                <Link key={o.slug} href={`/stories/${o.slug}`} className="more-story-card" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '16px 20px',
                    background: '#0a1220',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', gap: '14px',
                  }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      background: o.avatarColor + '22', border: `1px solid ${o.avatarColor}44`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: '700', color: o.avatarColor, flexShrink: 0,
                    }}>
                      {o.initials}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#e2e8f0', marginBottom: '2px' }}>
                        {o.name} · {o.company}
                      </div>
                      <div style={{ fontSize: '12px', color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {o.headline}
                      </div>
                    </div>
                    <span style={{ color: '#334155', fontSize: '14px', flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      <style>{`
        .breadcrumb-link:hover { color: #94a3b8 !important; }
        .more-story-card div { transition: border-color 0.15s; }
        .more-story-card:hover div { border-color: rgba(255,255,255,0.12) !important; }
      `}</style>
    </div>
  );
}
