import { tools, toolCategories } from '@/data/tools';
import ToolHubCard from '@/components/ToolHubCard';

export const metadata = {
  title: 'Free RSU Tools for Indian Residents',
  description:
    'Free calculators and planners for Indian residents with US RSUs: LTCG vs STCG, net take-home, FX comparison, advance tax, Schedule FA checklist, and more.',
  alternates: { canonical: 'https://rovia.money/tools' },
};

export default function ToolsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#060b18' }}>

      {/* Hero */}
      <section style={{
        padding: '72px 28px 56px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{
            fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#c9a96e', marginBottom: '18px',
          }}>
            Free tools
          </p>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '800',
            color: '#f1f5f9', letterSpacing: '-0.04em', lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            Every RSU calculator<br />an Indian resident needs
          </h1>
          <p style={{
            fontSize: '18px', color: '#64748b', lineHeight: 1.6,
            maxWidth: '560px', margin: '0 auto',
          }}>
            22 tools covering tax, FX, risk, and planning — built specifically for Indian residents holding US company stock.
          </p>
        </div>
      </section>

      {/* Tool grid by category */}
      <section style={{ padding: '56px 28px 80px', maxWidth: '1100px', margin: '0 auto' }}>
        {toolCategories.map((cat) => {
          const catTools = tools.filter((t) => t.category === cat.id);
          return (
            <div key={cat.id} style={{ marginBottom: '60px' }}>
              <p style={{
                fontSize: '11px', fontWeight: '700', color: '#334155',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                marginBottom: '18px', paddingBottom: '10px',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}>
                {cat.label}
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px',
              }}>
                {catTools.map((tool) => (
                  <ToolHubCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section style={{
        padding: '56px 28px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', color: '#475569', marginBottom: '12px' }}>
          These tools give estimates only — always verify with a CA for your exact situation.
        </p>
        <a
          href="https://rovia.one"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'inline-block', fontSize: '14px', padding: '12px 28px' }}
        >
          Automate all of this with Rovia ↗
        </a>
      </section>
    </div>
  );
}
