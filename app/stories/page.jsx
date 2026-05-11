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
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '72px 28px 96px' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
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
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: '800',
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            marginBottom: '16px',
          }}>
            People, not pitches.
          </h1>
          <p style={{ fontSize: '17px', color: '#64748b', lineHeight: '1.7', maxWidth: '520px', margin: '0 auto' }}>
            20 engineers and managers at US tech companies — in their own words, on RSUs, repatriation, and the decisions they wish they'd made earlier.
          </p>
        </div>

        {/* Story grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px',
        }}>
          {stories.map((s) => (
            <Link key={s.slug} href={`/stories/${s.slug}`} className="story-person-card" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#0a1220',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Avatar area */}
                <div style={{
                  position: 'relative',
                  height: '200px',
                  background: `linear-gradient(160deg, ${s.avatarColor}18 0%, ${s.avatarColor}06 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  {/* Large initials circle */}
                  <div style={{
                    width: '88px', height: '88px', borderRadius: '50%',
                    background: s.avatarColor + '22',
                    border: `2px solid ${s.avatarColor}55`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '28px', fontWeight: '800', color: s.avatarColor,
                    letterSpacing: '0.02em',
                  }}>
                    {s.initials}
                  </div>

                  {/* Tag */}
                  <div style={{
                    fontSize: '10px', fontWeight: '700', color: s.tagColor,
                    background: s.tagColor + '18',
                    border: `1px solid ${s.tagColor}35`,
                    borderRadius: '999px', padding: '3px 10px',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>
                    {s.tag}
                  </div>

                  {/* Arrow button */}
                  <div style={{
                    position: 'absolute', bottom: '14px', right: '14px',
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'rgba(196,169,126,0.12)',
                    border: '1px solid rgba(196,169,126,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', color: 'var(--gold)',
                  }} className="story-arrow">
                    →
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '18px 20px 20px' }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#f1f5f9', marginBottom: '2px' }}>
                    {s.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#475569', marginBottom: '12px' }}>
                    {s.role} · {s.company}
                  </div>
                  <p style={{
                    fontSize: '13px', color: '#64748b', lineHeight: '1.55',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '12px', margin: 0,
                  }}>
                    {s.teaser}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '64px',
          padding: '36px',
          background: 'linear-gradient(135deg, rgba(196,169,126,0.08), rgba(196,169,126,0.03))',
          border: '1px solid rgba(196,169,126,0.2)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          textAlign: 'left',
        }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: '#f1f5f9', marginBottom: '6px' }}>
              Recognise yourself in any of these?
            </div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>
              These problems are solvable. Rovia is built for exactly this.
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
        .story-person-card > div {
          transition: border-color 0.18s, transform 0.18s;
        }
        .story-person-card:hover > div {
          border-color: rgba(196,169,126,0.3) !important;
          transform: translateY(-3px);
        }
        .story-person-card:hover .story-arrow {
          background: rgba(196,169,126,0.2) !important;
          border-color: rgba(196,169,126,0.5) !important;
        }
        @media (max-width: 520px) {
          div[style*="repeat(auto-fill"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
