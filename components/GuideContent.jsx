// Server component — renders the 2000-word guide for a company page.
// Combines: company sentiment + stock context + diversification reason + India tax guide.

import { companyGuides, indiaTaxGuide } from '@/data/guides';

export default function GuideContent({ company }) {
  const guide = companyGuides[company.slug] || null;

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>

      {/* ── Company-specific sentiment & stock context ────────────── */}
      {guide && (
        <section style={{ marginBottom: '48px' }}>
          <SectionLabel>{company.name} stock — context for Indian employees</SectionLabel>

          <ProseBlock>
            {guide.sentiment}
          </ProseBlock>

          <ProseBlock>
            {guide.stockContext}
          </ProseBlock>

          {guide.taxHighlights && (
            <Callout icon="₹" color="#3b82f6">
              <strong style={{ color: '#93c5fd' }}>India tax snapshot — {company.name}:</strong>{' '}
              {guide.taxHighlights}
            </Callout>
          )}
        </section>
      )}

      {/* ── Why diversify ─────────────────────────────────────────── */}
      {guide?.diversifyReason && (
        <section style={{ marginBottom: '48px' }}>
          <SectionLabel>Why diversification matters for {company.ticker} holders</SectionLabel>

          <ProseBlock>{guide.diversifyReason}</ProseBlock>

          <Callout icon="📊" color="#f59e0b">
            <strong style={{ color: '#fcd34d' }}>A note on concentration risk:</strong>{' '}
            Financial advisors generally recommend keeping any single stock below 10–15% of net worth. Most Indian FAANG employees who have been at their company 3+ years are well above this threshold. Rovia makes it easy to hold US equities from multiple companies in one account — you can diversify within the same platform.
          </Callout>
        </section>
      )}

      {/* ── India tax guide ───────────────────────────────────────── */}
      <section style={{ marginBottom: '48px' }}>
        <SectionLabel>{indiaTaxGuide.title}</SectionLabel>

        {indiaTaxGuide.sections.map((section) => (
          <div key={section.heading} style={{ marginBottom: '28px' }}>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#e2e8f0',
                marginBottom: '10px',
                letterSpacing: '-0.01em',
              }}
            >
              {section.heading}
            </h3>
            {section.body.split('\n\n').map((para, i) => (
              <ProseBlock key={i}>{para.trim()}</ProseBlock>
            ))}
          </div>
        ))}
      </section>

      {/* ── What changes at Rovia ─────────────────────────────────── */}
      <section style={{ marginBottom: '48px' }}>
        <SectionLabel>What Rovia automates for you</SectionLabel>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
          }}
        >
          {[
            {
              icon: '₹',
              title: 'INR cost basis — automatic',
              detail: `Every lot gets INR cost basis at the vest-day SBI TT buying rate. No manual conversion, no spreadsheet, no CA fee for pulling rates.`,
            },
            {
              icon: '📅',
              title: '24-month countdown per lot',
              detail: `Rovia shows a countdown to LTCG eligibility for each lot. You can see at a glance which ${company.ticker} lots are short-term vs. long-term before you sell.`,
            },
            {
              icon: '📋',
              title: 'Schedule FA ready to file',
              detail: `Rovia generates Schedule FA data (peak balance, acquisition cost in INR, country) for your CA or your own ITR — no manual reconstruction from statements.`,
            },
            {
              icon: '📄',
              title: 'Form 67 / FTC tracking',
              detail: `Dividend withholding tracked lot-by-lot. Form 67 data ready at filing. Claim back the US 25% withholding as a foreign tax credit in India.`,
            },
            {
              icon: '0%',
              title: '0 platform FX markup',
              detail: `When you repatriate ${company.ticker} sale proceeds, Rovia adds no FX spread. You pay your bank's wire rate — saving ₹4,000–₹7,000 per $10,000 repatriated vs. ${company.brokerShortName}.`,
            },
            {
              icon: '🕐',
              title: 'India-based support, IST hours',
              detail: `Rovia's support team is in India. If you have a tax or transfer question at 10 AM IST, someone answers — not an overnight ticket queue.`,
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: '#0f1828',
                border: '1px solid rgba(59,130,246,0.12)',
                borderRadius: '12px',
                padding: '18px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(59,130,246,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  marginBottom: '10px',
                }}
              >
                {item.icon}
              </div>
              <h4
                style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#e2e8f0',
                  marginBottom: '6px',
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6' }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Disclaimer ────────────────────────────────────────────── */}
      <div
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '10px',
          padding: '14px 18px',
          fontSize: '11px',
          color: '#334155',
          lineHeight: '1.7',
        }}
      >
        <strong style={{ color: '#475569' }}>Disclaimer:</strong> This guide is for educational purposes only and does not constitute financial, tax, or legal advice. ACATS transfer fees depend on your current broker — many charge $0, others up to $75. Always verify your broker's fee schedule. Tax treatment depends on your individual circumstances — consult a qualified CA before making decisions. Stock analyst targets are consensus estimates from third-party sources and are not guarantees of future performance. Rovia is not liable for any action taken on the basis of this content.
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontSize: '11px',
        fontWeight: '700',
        color: '#334155',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '18px',
      }}
    >
      {children}
    </p>
  );
}

function ProseBlock({ children }) {
  return (
    <p
      style={{
        fontSize: '14px',
        color: '#94a3b8',
        lineHeight: '1.8',
        marginBottom: '14px',
      }}
    >
      {children}
    </p>
  );
}

function Callout({ icon, color, children }) {
  return (
    <div
      style={{
        background: `${color}0a`,
        border: `1px solid ${color}20`,
        borderRadius: '10px',
        padding: '14px 18px',
        fontSize: '13px',
        color: '#94a3b8',
        lineHeight: '1.7',
        marginBottom: '14px',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
      }}
    >
      <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>{icon}</span>
      <span>{children}</span>
    </div>
  );
}
