import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getTool, tools } from '@/data/tools';

// ISR — revalidate daily, don't block build on static generation
export const revalidate = 86400;

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

// All tool components are pure client components — no SSR needed for calculators
const componentMap = {
  'ltcg-vs-stcg':      dynamic(() => import('@/components/tools/LtcgVsStcg'),      { ssr: false }),
  'net-take-home':     dynamic(() => import('@/components/tools/NetTakeHome'),      { ssr: false }),
  'lot-tracker':       dynamic(() => import('@/components/tools/LotTracker'),       { ssr: false }),
  'fx-comparison':     dynamic(() => import('@/components/tools/FxComparison'),     { ssr: false }),
  'wire-cost':         dynamic(() => import('@/components/tools/WireCost'),         { ssr: false }),
  'perquisite-tax':    dynamic(() => import('@/components/tools/PerquisiteTax'),    { ssr: false }),
  'diversification':   dynamic(() => import('@/components/tools/Diversification'),  { ssr: false }),
  'form-67':           dynamic(() => import('@/components/tools/Form67'),           { ssr: false }),
  'sell-now':          dynamic(() => import('@/components/tools/SellNow'),          { ssr: false }),
  'concentration':     dynamic(() => import('@/components/tools/Concentration'),    { ssr: false }),
  'tax-year':          dynamic(() => import('@/components/tools/TaxYear'),          { ssr: false }),
  'grant-compare':     dynamic(() => import('@/components/tools/GrantCompare'),     { ssr: false }),
  'cash-vs-rsu':       dynamic(() => import('@/components/tools/CashVsRsu'),        { ssr: false }),
  'broker-audit':      dynamic(() => import('@/components/tools/BrokerAudit'),      { ssr: false }),
  'sbi-rate':          dynamic(() => import('@/components/tools/SbiRate'),          { ssr: false }),
  'schedule-fa':       dynamic(() => import('@/components/tools/ScheduleFa'),       { ssr: false }),
  'advance-tax':       dynamic(() => import('@/components/tools/AdvanceTax'),       { ssr: false }),
  'indexation':        dynamic(() => import('@/components/tools/Indexation'),       { ssr: false }),
  'grant-reconstruct': dynamic(() => import('@/components/tools/GrantReconstruct'), { ssr: false }),
  'repatriation':      dynamic(() => import('@/components/tools/Repatriation'),     { ssr: false }),
  'unvested-risk':     dynamic(() => import('@/components/tools/UnvestedRisk'),     { ssr: false }),
  'esop-vs-rsu':       dynamic(() => import('@/components/tools/EsopVsRsu'),        { ssr: false }),
};

// Loading shell shown while the client component hydrates
function ToolLoading() {
  return (
    <div style={{
      minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ fontSize: '13px', color: '#334155' }}>Loading calculator…</span>
    </div>
  );
}

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
              style={{ fontSize: '13px', color: '#475569', textDecoration: 'none', fontWeight: '500' }}
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
