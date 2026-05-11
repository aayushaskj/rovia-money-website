'use client';

import { useState } from 'react';
import { companyGroups, getCompany } from '@/data/companies';

// ─── helpers ────────────────────────────────────────────────────────────────

function inr(n) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}
function usd(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function parseTarget(t) {
  return parseFloat((t || '').replace(/[^0-9.]/g, '')) || null;
}

const ALL_COMPANIES = companyGroups
  .flatMap((g) => g.slugs)
  .map((s) => getCompany(s))
  .filter(Boolean);

// ─── Main export ─────────────────────────────────────────────────────────────

export default function RsuCalculators({ company }) {
  const [tab, setTab] = useState('advantage');

  const tabs = [
    { id: 'advantage', label: 'The Rovia Advantage' },
    { id: 'diversify', label: 'Diversification' },
  ];

  return (
    <div style={{ width: '100%' }}>
      {/* Tab bar */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        marginBottom: '32px',
        gap: '4px',
      }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: tab === t.id ? '2px solid var(--gold)' : '2px solid transparent',
              color: tab === t.id ? '#f1f5f9' : '#475569',
              fontSize: '14px',
              fontWeight: tab === t.id ? '700' : '500',
              padding: '10px 20px 12px',
              cursor: 'pointer',
              transition: 'all 0.15s',
              marginBottom: '-1px',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'advantage' && <AdvantageCalc company={company} />}
      {tab === 'diversify' && <DiversifyCalc company={company} />}
    </div>
  );
}

// ─── Calculator 1: The Rovia Advantage ───────────────────────────────────────

function AdvantageCalc({ company }) {
  const [rsuValue, setRsuValue] = useState(100000);      // USD
  const [diversifyPct, setDiversifyPct] = useState(30);  // % repatriated per year

  const USD_TO_INR   = 84;
  const repatriateUSD = rsuValue * (diversifyPct / 100);

  // Platform cost models (annual)
  const platforms = [
    {
      id: 'rovia',
      name: 'ROVIA',
      color: 'var(--gold)',
      fxMarkup: 0,
      wireFee: 0,
      costBasisAuto: true,
      scheduleFa: true,
      inrCostBasis: true,
      supportIST: true,
    },
    {
      id: 'ibkr',
      name: 'IBKR',
      color: '#60a5fa',
      fxMarkup: 0.002,   // ~0.2% FX markup
      wireFee: 10,        // $10 per withdrawal
      costBasisAuto: false,
      scheduleFa: false,
      inrCostBasis: false,
      supportIST: false,
    },
    {
      id: 'indmoney',
      name: 'INDMONEY',
      color: '#a78bfa',
      fxMarkup: 0.005,   // ~0.5% FX markup
      wireFee: 0,
      costBasisAuto: false,
      scheduleFa: false,
      inrCostBasis: false,
      supportIST: true,
    },
    {
      id: 'vested',
      name: 'VESTED',
      color: '#34d399',
      fxMarkup: 0.004,   // ~0.4% FX markup
      wireFee: 0,
      costBasisAuto: false,
      scheduleFa: false,
      inrCostBasis: false,
      supportIST: true,
    },
  ];

  // Annual cost for each platform
  const costs = platforms.map((p) => {
    const fxCost   = repatriateUSD * p.fxMarkup * USD_TO_INR;
    const wireCost = repatriateUSD > 0 ? p.wireFee * USD_TO_INR * 4 : 0; // ~4 wires/year
    return { ...p, annualCost: fxCost + wireCost };
    });

  const roviaCost    = costs.find((c) => c.id === 'rovia').annualCost;
  const maxCost      = Math.max(...costs.map((c) => c.annualCost));
  const bestSaving   = maxCost - roviaCost; // vs most expensive alternative

  const featureRows = [
    { label: 'INR cost basis at vest', key: 'inrCostBasis' },
    { label: 'Schedule FA auto-generated', key: 'scheduleFa' },
    { label: 'Cost basis tracking', key: 'costBasisAuto' },
    { label: '0 platform FX markup', key: 'fxMarkup', invert: true },
    { label: 'India-based support (IST)', key: 'supportIST' },
  ];

  return (
    <div>
      {/* Sliders row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        marginBottom: '36px',
      }} className="calc-sliders">
        <PremiumSlider
          label="How much are your RSUs worth?"
          display={`$${rsuValue.toLocaleString('en-US')}`}
          value={rsuValue}
          min={10000} max={1000000} step={10000}
          onChange={setRsuValue}
          minLabel="$10K"
          maxLabel="$1M"
        />
        <PremiumSlider
          label="How much do you want to repatriate per year?"
          display={`${diversifyPct}%`}
          value={diversifyPct}
          min={5} max={100} step={5}
          onChange={setDiversifyPct}
          minLabel="5%"
          maxLabel="100%"
        />
      </div>

      {/* Savings callout */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(196,169,126,0.1) 0%, rgba(196,169,126,0.04) 100%)',
        border: '1px solid rgba(196,169,126,0.25)',
        borderRadius: '14px',
        padding: '20px 24px',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div>
          <div style={{ fontSize: '13px', color: '#8892a4', marginBottom: '4px' }}>
            Your annual savings with Rovia vs. typical alternatives
          </div>
          <div style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '800',
            color: 'var(--gold)',
            letterSpacing: '-0.03em',
            lineHeight: '1',
          }}>
            {inr(bestSaving)}
          </div>
          <div style={{ fontSize: '12px', color: '#4a5568', marginTop: '4px' }}>
            in FX markup savings alone · on {usd(repatriateUSD)} repatriated/yr
          </div>
        </div>
        <a href="https://rovia.onelink.me/xOtI/yjxw13ya" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>
          Transfer to Rovia →
        </a>
      </div>

      {/* Comparison table */}
      <div style={{
        background: '#080d18',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '14px',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `2fr repeat(${platforms.length}, 1fr)`,
          background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{ padding: '14px 20px', fontSize: '11px', color: '#4a5568', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Feature
          </div>
          {costs.map((p) => (
            <div key={p.id} style={{
              padding: '14px 12px',
              fontSize: '11px',
              fontWeight: '800',
              color: p.color,
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              textAlign: 'center',
              borderLeft: '1px solid rgba(255,255,255,0.04)',
            }}>
              {p.name}
            </div>
          ))}
        </div>

        {/* Annual cost row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `2fr repeat(${platforms.length}, 1fr)`,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(196,169,126,0.03)',
        }}>
          <div style={{ padding: '14px 20px', fontSize: '13px', fontWeight: '600', color: '#94a3b8' }}>
            Annual FX cost
          </div>
          {costs.map((p) => (
            <div key={p.id} style={{
              padding: '14px 12px',
              fontSize: '13px',
              fontWeight: '700',
              color: p.id === 'rovia' ? '#34d399' : '#fca5a5',
              textAlign: 'center',
              borderLeft: '1px solid rgba(255,255,255,0.04)',
            }}>
              {p.annualCost === 0 ? '₹0' : inr(p.annualCost)}
            </div>
          ))}
        </div>

        {/* Feature rows */}
        {featureRows.map((row, i) => (
          <div key={row.label} style={{
            display: 'grid',
            gridTemplateColumns: `2fr repeat(${platforms.length}, 1fr)`,
            borderBottom: i < featureRows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
          }}>
            <div style={{ padding: '12px 20px', fontSize: '13px', color: '#64748b' }}>
              {row.label}
            </div>
            {platforms.map((p) => {
              const val = row.invert
                ? p[row.key] === 0
                : p[row.key];
              return (
                <div key={p.id} style={{
                  padding: '12px',
                  textAlign: 'center',
                  borderLeft: '1px solid rgba(255,255,255,0.04)',
                  fontSize: '14px',
                }}>
                  {val
                    ? <span style={{ color: '#34d399' }}>✓</span>
                    : <span style={{ color: '#334155' }}>–</span>
                  }
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <p style={{ fontSize: '11px', color: '#2d3748', marginTop: '12px', lineHeight: '1.5' }}>
        FX markup estimates are approximate and based on publicly available rate information. Actual costs vary by provider and transaction size. This is illustrative only.
      </p>
    </div>
  );
}

// ─── Calculator 2: Diversification ───────────────────────────────────────────

function DiversifyCalc({ company }) {
  const [portfolioUSD, setPortfolioUSD] = useState(100000);
  const [divPct, setDivPct] = useState(30);

  const defaults = ALL_COMPANIES.filter((c) => c.slug !== company.slug).slice(0, 3);
  const [picks, setPicks] = useState(defaults.map((c) => c.slug));

  const divAmount    = portfolioUSD * (divPct / 100);
  const remainAmount = portfolioUSD - divAmount;
  const perStock     = divAmount / picks.length;

  const handlePick = (index, slug) => {
    const next = [...picks];
    next[index] = slug;
    setPicks(next);
  };

  return (
    <div>
      <p style={{ fontSize: '14px', color: '#8892a4', marginBottom: '24px', lineHeight: '1.6' }}>
        RSU concentration risk is real. See what it looks like to move a slice of your {company.ticker} holdings into other US stocks — all manageable inside Rovia.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }} className="calc-sliders">
        <PremiumSlider
          label="Total RSU portfolio"
          display={`$${portfolioUSD.toLocaleString('en-US')}`}
          value={portfolioUSD}
          min={10000} max={1000000} step={10000}
          onChange={setPortfolioUSD}
          minLabel="$10K"
          maxLabel="$1M"
        />
        <PremiumSlider
          label={`% to move out of ${company.ticker}`}
          display={`${divPct}%`}
          value={divPct}
          min={5} max={80} step={5}
          onChange={setDivPct}
          minLabel="5%"
          maxLabel="80%"
        />
      </div>

      {/* Allocation bar */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '2px', borderRadius: '8px', overflow: 'hidden', height: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 100 - divPct, background: company.color + '90', transition: 'flex 0.2s' }} />
          {picks.map((slug, i) => {
            const c = getCompany(slug);
            return (
              <div key={slug + i} style={{ flex: divPct / picks.length, background: (c?.color || '#3b82f6') + 'cc', transition: 'flex 0.2s' }} />
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: company.color, display: 'inline-block' }} />
            {company.ticker} · {100 - divPct}% · ${Math.round(remainAmount).toLocaleString('en-US')}
          </span>
          {picks.map((slug, i) => {
            const c = getCompany(slug);
            return (
              <span key={slug + i} style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: c?.color || '#3b82f6', display: 'inline-block' }} />
                {c?.ticker} · {Math.round(divPct / picks.length)}% · ${Math.round(perStock).toLocaleString('en-US')}
              </span>
            );
          })}
        </div>
      </div>

      {/* Pick cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '20px' }}>
        {picks.map((slug, i) => {
          const c = getCompany(slug);
          return (
            <div key={i} style={{
              background: '#080d18',
              border: `1px solid ${c?.color || '#3b82f6'}28`,
              borderRadius: '12px',
              padding: '14px',
            }}>
              <select
                value={slug}
                onChange={(e) => handlePick(i, e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  color: '#f1f5f9',
                  fontSize: '12px',
                  padding: '6px 8px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                {ALL_COMPANIES
                  .filter((ac) => ac.slug !== company.slug && (!picks.includes(ac.slug) || ac.slug === slug))
                  .map((ac) => (
                    <option key={ac.slug} value={ac.slug} style={{ background: '#0f1828' }}>
                      {ac.name} ({ac.ticker})
                    </option>
                  ))}
              </select>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#f1f5f9', marginBottom: '2px' }}>{c?.name}</div>
              <div style={{ fontSize: '11px', color: '#475569', marginBottom: '10px' }}>{c?.ticker}</div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', color: '#475569' }}>Allocation</span>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--gold)' }}>${Math.round(perStock).toLocaleString('en-US')}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '10px',
        padding: '12px 16px',
        fontSize: '12px',
        color: '#4a5568',
        lineHeight: '1.6',
      }}>
        Analyst targets are consensus estimates, not guarantees. Diversification reduces single-stock risk but does not eliminate market risk. Illustrative only.
      </div>
    </div>
  );
}

// ─── Premium slider input ──────────────────────────────────────────────────────

function PremiumSlider({ label, value, min, max, step, onChange, display, minLabel, maxLabel }) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
        <span style={{ fontSize: '13px', color: '#8892a4', fontWeight: '500', lineHeight: '1.4', maxWidth: '65%' }}>{label}</span>
        <span style={{ fontSize: '20px', color: 'var(--gold)', fontWeight: '800', letterSpacing: '-0.02em' }}>{display}</span>
      </div>
      <div style={{ position: 'relative' }}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            width: '100%',
            accentColor: 'var(--gold)',
            cursor: 'pointer',
            height: '4px',
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
        <span style={{ fontSize: '11px', color: '#334155' }}>{minLabel}</span>
        <span style={{ fontSize: '11px', color: '#334155' }}>{maxLabel}</span>
      </div>
    </div>
  );
}
