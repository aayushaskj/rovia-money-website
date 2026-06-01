import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost, getPostMeta } from '@/data/blog';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const m = getPostMeta(params.slug);
  if (!m) return {};
  return {
    title: { absolute: m.seoTitle || `${m.title} | Rovia` },
    description: m.seoDescription || m.dek,
    keywords: m.seoKeywords,
    alternates: { canonical: `https://rovia.money/blog/${m.slug}` },
    openGraph: {
      title: m.title,
      description: m.dek,
      type: 'article',
      publishedTime: m.publishDate,
      modifiedTime: m.updatedDate || m.publishDate,
      authors: [m.author || 'Rovia Editorial'],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.dek,
    },
  };
}

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const { meta, Body, faq } = post;

  // ── JSON-LD: Article + FAQPage schema ──
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.dek,
    author: { '@type': 'Organization', name: meta.author || 'Rovia Editorial' },
    publisher: {
      '@type': 'Organization',
      name: 'Rovia',
      logo: { '@type': 'ImageObject', url: 'https://rovia.money/rovia-icon.svg' },
    },
    datePublished: meta.publishDate,
    dateModified: meta.updatedDate || meta.publishDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://rovia.money/blog/${meta.slug}` },
    keywords: meta.seoKeywords,
  };

  const faqSchema = faq && faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <div style={{ background: '#020917', minHeight: '100vh' }}>
      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 28px 96px' }}>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }} aria-label="Breadcrumb">
          <Link href="/blog" className="breadcrumb-link" style={{ fontSize: '13px', color: '#475569', textDecoration: 'none' }}>
            Blog
          </Link>
          <span style={{ color: '#334155', fontSize: '12px' }}>›</span>
          <span style={{ fontSize: '13px', color: '#334155' }}>{meta.title}</span>
        </nav>

        {/* Hero */}
        <header style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
            {(meta.tags || []).slice(0, 3).map((tag) => (
              <span key={tag} style={{
                fontSize: '10px', fontWeight: 700,
                color: 'var(--gold)',
                background: 'rgba(196,169,126,0.08)',
                border: '1px solid rgba(196,169,126,0.2)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                borderRadius: '999px', padding: '3px 10px',
              }}>{tag}</span>
            ))}
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4.5vw, 44px)',
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            margin: '0 0 16px',
          }}>
            {meta.title}
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: '#8892a4',
            lineHeight: 1.55,
            margin: '0 0 24px',
          }}>
            {meta.dek}
          </p>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', fontSize: '13px', color: '#475569', flexWrap: 'wrap' }}>
            <span>{meta.author || 'Rovia Editorial'}</span>
            <span style={{ color: '#334155' }}>·</span>
            <span>{formatDate(meta.publishDate)}</span>
            <span style={{ color: '#334155' }}>·</span>
            <span>{meta.readingMinutes} min read</span>
            {meta.updatedDate && meta.updatedDate !== meta.publishDate && (
              <>
                <span style={{ color: '#334155' }}>·</span>
                <span>Updated {formatDate(meta.updatedDate)}</span>
              </>
            )}
          </div>
        </header>

        {/* Body */}
        <div style={{ color: '#cbd5e1' }}>
          <Body />
        </div>

        {/* Back link */}
        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <Link href="/blog" className="back-link" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', color: '#475569', textDecoration: 'none',
          }}>
            ← All posts
          </Link>
        </div>

      </article>

      <style>{`
        .breadcrumb-link:hover { color: #94a3b8 !important; }
        .back-link:hover { color: #94a3b8 !important; }
      `}</style>
    </div>
  );
}
