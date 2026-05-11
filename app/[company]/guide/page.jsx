import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCompany, companyList } from '@/data/companies';
import PillarGuide from '@/components/PillarGuide';

export const revalidate = 86400;

export async function generateStaticParams() {
  return companyList.map((slug) => ({ company: slug }));
}

async function loadGuide(slug) {
  try {
    const mod = await import(`@/data/pillarGuides/${slug}.js`);
    return mod.guide ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { company } = await params;
  const co = getCompany(company);
  if (!co) return {};
  const guide = await loadGuide(company);
  return {
    title: guide?.title ?? `${co.name} India Employees: RSU & Wealth Guide`,
    description: guide?.intro?.slice(0, 160) ?? `Everything Indian ${co.name} employees need to know about RSUs, taxes, FX, and wealth strategy.`,
    alternates: { canonical: `https://rovia.money/${company}/guide` },
  };
}

export default async function GuidePage({ params }) {
  const { company } = await params;
  const co = getCompany(company);
  if (!co) notFound();

  const guide = await loadGuide(company);

  return (
    <div style={{ minHeight: '100vh', background: '#060b18' }}>

      {/* Header */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '32px 28px 0',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '13px', color: '#475569' }}>
            <Link href="/" style={{ color: '#475569', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href={`/${company}`} style={{ color: '#475569', textDecoration: 'none' }}>{co.name}</Link>
            <span>›</span>
            <span style={{ color: '#94a3b8' }}>India Employee Guide</span>
          </div>

          {/* Hero */}
          <div style={{ paddingBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              {co.hasLogo && (
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: '#fff', border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden', flexShrink: 0, padding: '6px',
                }}>
                  <img
                    src={`/logos/${co.slug}.png`}
                    alt={co.name}
                    width={34}
                    height={34}
                    style={{ objectFit: 'contain', display: 'block' }}
                  />
                </div>
              )}
              <div>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                  India Employee Guide
                </p>
                <h1 style={{
                  fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '800', color: '#f1f5f9',
                  letterSpacing: '-0.03em', lineHeight: 1.2,
                }}>
                  {guide?.title ?? `${co.name} India: RSU & Wealth Guide`}
                </h1>
              </div>
            </div>

            {guide?.lastUpdated && (
              <p style={{ fontSize: '12px', color: '#334155' }}>
                Last updated: {guide.lastUpdated}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Guide content */}
      {guide ? (
        <PillarGuide guide={guide} />
      ) : (
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 28px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#475569' }}>
            Guide coming soon. In the meantime, explore the{' '}
            <Link href={`/${company}`} style={{ color: '#c9a96e' }}>{co.name} RSU overview</Link>
            {' '}or{' '}
            <Link href="/tools" style={{ color: '#c9a96e' }}>our free tools</Link>.
          </p>
        </div>
      )}

      {/* CTA */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '48px 28px',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.2)',
      }}>
        <p style={{ fontSize: '13px', color: '#475569', marginBottom: '16px' }}>
          Stop leaving money on the table with FX markups and suboptimal tax planning.
        </p>
        <a
          href="https://rovia.one"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'inline-block', fontSize: '14px', padding: '12px 28px' }}
        >
          Manage your {co.ticker} RSUs with Rovia ↗
        </a>
      </div>
    </div>
  );
}
