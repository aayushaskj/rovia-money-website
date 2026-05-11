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
      <div style={{ maxWidth: '1060px', margin: '0 auto', padding: '72px 28px 96px' }}>

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
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: '800',
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: '1.15',
            marginBottom: '14px',
          }}>
            People, not pitches.
          </h1>
          <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', maxWidth: '520px' }}>
            20 engineers and managers at US tech companies — in their own words, on RSUs, repatriation, and the decisions they wish they'd made earlier.
          </p>
        </div>

        {/* Story grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px',
        }}>
          {stories.map((s) => (
            <Link key={s.slug} href={`/stories/${s.slug}`} className="story-person-card" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#0a1220',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>

                {/* Face area */}
                <div style={{
                  height: '170px',
                  background: `linear-gradient(180deg, ${s.avatarColor}12 0%, #0a1220 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `2px solid ${s.avatarColor}40`,
                    background: s.avatarColor + '15',
                    flexShrink: 0,
                  }}>
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(s.name)}&backgroundColor=transparent&radius=0&skinColor=ae5d29,d08b5b,614335&hairColor=2c1b18,4a312c,090806&facialHairColor=2c1b18,4a312c`}
                      alt={s.name}
                      width={96}
                      height={96}
                      style={{ display: 'block', width: '100%', height: '100%' }}
                    />
                  </div>

                  {/* Arrow */}
                  <div className="story-arrow" style={{
                    position: 'absolute', bottom: '12px', right: '12px',
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', color: '#475569',
                  }}>
                    →
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '14px 16px 18px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#f1f5f9', marginBottom: '2px' }}>
                    {s.name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#475569', marginBottom: '10px' }}>
                    {s.role.split(' ').slice(-1)[0] === s.role ? s.role : s.role} · {s.company}
                  </div>
                  <p style={{
                    fontSize: '12px', color: '#64748b', lineHeight: '1.55',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '10px', margin: 0,
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
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#f1f5f9', marginBottom: '5px' }}>
              Recognise yourself in any of these?
            </div>
            <div style={{ fontSize: '13px', color: '#64748b' }}>
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
          border-color: rgba(255,255,255,0.14) !important;
          transform: translateY(-2px);
        }
        .story-person-card:hover .story-arrow {
          background: rgba(196,169,126,0.12) !important;
          border-color: rgba(196,169,126,0.3) !important;
          color: var(--gold) !important;
        }
        @media (max-width: 480px) {
          div[style*="repeat(auto-fill, minmax(200px"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
