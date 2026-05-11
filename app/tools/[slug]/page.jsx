import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getTool, tools } from '@/data/tools';

// Pre-generate all tool pages at build time
export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: tool.title,
    description: tool.tagline,
    alternates: { canonical: `https://rovia.money/tools/${slug}` },
  };
}

// Map slug → dynamic import
const componentMap = {
  'ltcg-vs-stcg':    dynamic(() => import('@/components/tools/LtcgVsStcg')),
  'net-take-home':   dynamic(() => import('@/components/tools/NetTakeHome')),
  'lot-tracker':     dynamic(() => import('@/components/tools/LotTracker')),
  'fx-comparison':   dynamic(() => import('@/components/tools/FxComparison')),
  'wire-cost':       dynamic(() => import('@/components/tools/WireCost')),
  'perquisite-tax':  dynamic(() => import('@/components/tools/PerquisiteTax')),
  'diversification': dynamic(() => import('@/components/tools/Diversification')),
  'form-67':         dynamic(() => import('@/components/tools/Form67')),
  'sell-now':        dynamic(() => import('@/components/tools/SellNow')),
  'concentration':   dynamic(() => import('@/components/tools/Concentration')),
  'tax-year':        dynamic(() => import('@/components/tools/TaxYear')),
  'grant-compare':   dynamic(() => import('@/components/tools/GrantCompare')),
  'cash-vs-rsu':     dynamic(() => import('@/components/tools/CashVsRsu')),
  'broker-audit':    dynamic(() => import('@/components/tools/BrokerAudit')),
  'sbi-rate':        dynamic(() => import('@/components/tools/SbiRate')),
  'schedule-fa':     dynamic(() => import('@/components/tools/ScheduleFa')),
  'advance-tax':     dynamic(() => import('@/components/tools/AdvanceTax')),
  'indexation':      dynamic(() => import('@/components/tools/Indexation')),
  'grant-reconstruct': dynamic(() => import('@/components/tools/GrantReconstruct')),
  'repatriation':    dynamic(() => import('@/components/tools/Repatriation')),
  'unvested-risk':   dynamic(() => import('@/components/tools/UnvestedRisk')),
  'esop-vs-rsu':     dynamic(() => import('@/components/tools/EsopVsRsu')),
};

export default async function ToolPage({ params }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const ToolComponent = componentMap[slug];
  if (!ToolComponent) notFound();

  return (
    <div style={{ minHeight: '100vh', background: '#060b18' }}>
      {/* Breadcrumb + header */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '28px 28px 0',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <Link
              href="/tools"
              style={{
                fontSize: '13px', color: '#475569', textDecoration: 'none', fontWeight: '500',
              }}
            >
              ← All tools
            </Link>
          </div>
          <div style={{ paddingBottom: '28px' }}>
            {tool.icon && (
              <div style={{ fontSize: '32px', marginBottom: '12px', lineHeight: 1 }}>{tool.icon}</div>
            )}
            <h1 style={{
              fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '800', color: '#f1f5f9',
              letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '10px',
            }}>
              {tool.title}
            </h1>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.55, maxWidth: '600px' }}>
              {tool.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Tool content */}
      <div style={{ padding: '40px 28px 80px', maxWidth: '860px', margin: '0 auto' }}>
        <ToolComponent />
      </div>

      {/* Footer CTA */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '40px 28px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', color: '#475569', marginBottom: '12px' }}>
          These are estimates only. Always verify with a CA for your exact tax liability.
        </p>
        <a
          href="https://rovia.one"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'inline-block', fontSize: '14px', padding: '11px 26px' }}
        >
          Automate this with Rovia ↗
        </a>
      </div>
    </div>
  );
}
