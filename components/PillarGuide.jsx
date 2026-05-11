// Pure server component — renders pillar guide content

export default function PillarGuide({ guide }) {
  if (!guide) return null;

  return (
    <article style={{ maxWidth: '860px', margin: '0 auto', padding: '0 28px 80px' }}>

      {/* Key stats bar */}
      {guide.keyStats && guide.keyStats.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '10px',
          padding: '28px 0 32px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '40px',
        }}>
          {guide.keyStats.map((stat) => (
            <div key={stat.label} style={{
              background: '#0f1828',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px',
              padding: '14px 16px',
            }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#c9a96e', letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Intro */}
      {guide.intro && (
        <p style={{
          fontSize: '17px', color: '#94a3b8', lineHeight: 1.7,
          marginBottom: '48px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          {guide.intro}
        </p>
      )}

      {/* Sections */}
      {guide.sections && guide.sections.map((section, i) => (
        <section key={i} style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            fontWeight: '800',
            color: '#f1f5f9',
            letterSpacing: '-0.025em',
            lineHeight: 1.3,
            marginBottom: '16px',
          }}>
            {section.heading}
          </h2>

          {/* Body paragraphs — split on double newline */}
          {section.body && section.body.split('\n\n').map((para, pi) => (
            para.trim() && (
              <p key={pi} style={{
                fontSize: '15px',
                color: '#94a3b8',
                lineHeight: 1.75,
                marginBottom: '18px',
              }}>
                {para.trim()}
              </p>
            )
          ))}

          {/* Callout box */}
          {section.callout && (
            <div style={{
              background: 'rgba(201,169,110,0.07)',
              border: '1px solid rgba(201,169,110,0.2)',
              borderRadius: '10px',
              padding: '16px 20px',
              margin: '20px 0',
            }}>
              <p style={{ fontSize: '14px', color: '#c9a96e', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                {section.callout}
              </p>
            </div>
          )}

          {/* Bullet list */}
          {section.bullets && section.bullets.length > 0 && (
            <ul style={{ paddingLeft: '0', margin: '16px 0', listStyle: 'none' }}>
              {section.bullets.map((bullet, bi) => (
                <li key={bi} style={{
                  display: 'flex', gap: '10px', alignItems: 'flex-start',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  fontSize: '14px', color: '#94a3b8', lineHeight: 1.6,
                }}>
                  <span style={{ color: '#c9a96e', fontSize: '16px', lineHeight: 1.4, flexShrink: 0 }}>→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* Bottom disclaimer */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '10px',
        padding: '16px 20px',
        marginTop: '24px',
      }}>
        <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, margin: 0 }}>
          This guide is for informational purposes only and does not constitute financial, tax, or investment advice.
          Figures are estimates based on publicly available information. Always verify with a SEBI-registered financial
          advisor and a CA familiar with foreign asset taxation.
        </p>
      </div>
    </article>
  );
}
