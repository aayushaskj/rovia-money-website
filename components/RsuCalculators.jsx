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
function pct(n) {
  const sign = n >= 0 ? '+' : '';
  return `${sign}${n.toFixed(1)}%`;
}

// Approximate analyst upside from current price → analyst target
// We store analystTarget as a string like "$210"; current price from the ticker
function parseTarget(t) {
  return parseFloat((t || '').replace(/[^0-9.]/g, '')) || null;
}

// All companies as a flat list for the diversification picker
const ALL_COMPANIES = companyGroups
  .flatMap((g) => g.slugs)
  .map((s) => getCompany(s))
  .filter(Boolean);

// ─── Tab wrapper ─────────────────────────────────────────────────────────────

export default function RsuCalculators({ company }) {
  const [tab, setTab] = useState('transfer');

  const tabs = [
    { id: 'transfer', label: '💸 Transfer cost' },
    { id: 'diversify', label: '📊 Diversification' },
  ];

  return (
    <div
      style={{
        background: '#080d18',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {/* Tab bar */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flex: 1,
              background: tab === t.id ? '#0f1828' : 'transparent',
              border: 'none',
              borderBottom: tab === t.id ? `2px solid #3b82f6` : '2px solid transparent',
              color: tab === t.id ? '#f1f5f9' : '#475569',
              fontSize: '13px',
              fontWeight: '600',
              padding: '14px 20px',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '24px' }}>
        {tab === 'transfer' && <TransferCostCalc company={company} />}
        {tab === 'diversify' && <DiversifyCalc company={company} />}
      </div>
    </div>
  );
}

// ─── Calculator 1: Transfer cost ─────────────────────────────────────────────

function TransferCostCalc({ company }) {
  const [holding, setHolding] = useState(50000);   // USD value
  const [wiresPerYear, setWiresPerYear] = useState(4);
  const [years, setYears] = useState(5);
  const [acatsFeeUSD, setAcatsFeeUSD] = useState(50); // varies by broker; many are $0

  const WIRE_FEE_USD   = 35;                    // avg broker wire fee
  const FX_SPREAD_PCT  = 0.004;                 // 40 paise per USD ≈ 0.4%
  const USD_TO_INR     = 84;                    // approximate

  const annualWireCost     = wiresPerYear * WIRE_FEE_USD * USD_TO_INR;
  const annualFxLoss       = holding * FX_SPREAD_PCT * USD_TO_INR;
  const totalAnnualFriction = annualWireCost + annualFxLoss;
  const totalOverYears     = totalAnnualFriction * years;
  const acatsCost          = acatsFeeUSD * USD_TO_INR;
  const netSaving          = totalOverYears - acatsCost;

  const rows = [
    { label: `Wire fees (${wiresPerYear}×/yr × ₹${Math.round(WIRE_FEE_USD * USD_TO_INR).toLocaleString('en-IN')})`, broker: inr(annualWireCost * years), rovia: '₹0' },
    { label: 'FX spread on repatriation (~0.4%)', broker: inr(annualFxLoss * years), rovia: '₹0' },
    { label: `ACATS outbound fee — ${company.brokerShortName} (one-time, set $0 if free)`, broker: '₹0', rovia: inr(acatsCost) },
    { label: `Total over ${years} year${years > 1 ? 's' : ''}`, broker: inr(totalOverYears), rovia: inr(acatsCost), highlight: true },
  ];

  return (
    <div>
      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#f1f5f9', marginBottom: '4px' }}>
        What staying on {company.brokerShortName} costs you
      </h3>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>
        Adjust your holding value and repatriation frequency to see the real cost of staying put.
      </p>

      {/* Inputs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '24px' }}>
        <InputSlider
          label={`${company.ticker} holding value`}
          prefix="$"
          value={holding}
          min={5000} max={500000} step={5000}
          onChange={setHolding}
          display={`$${holding.toLocaleString('en-US')}`}
        />
        <InputSlider
          label="Wires home per year"
          value={wiresPerYear}
          min={1} max={12} step={1}
          onChange={setWiresPerYear}
          display={`${wiresPerYear}×`}
        />
        <InputSlider
          label="Years to project"
          value={years}
          min={1} max={10} step={1}
          onChange={setYears}
          display={`${years}Y`}
        />
        <InputSlider
          label={`ACATS outbound fee — ${company.brokerShortName}`}
          prefix="$"
          value={acatsFeeUSD}
          min={0} max={150} step={5}
          onChange={setAcatsFeeUSD}
          display={acatsFeeUSD === 0 ? 'Free' : `$${acatsFeeUSD}`}
        />
      </div>

      {/* ACATS key fact */}
      <div
        style={{
          background: 'rgba(96,165,250,0.06)',
          border: '1px solid rgba(96,165,250,0.15)',
          borderRadius: '8px',
          padding: '10px 14px',
          fontSize: '12px',
          color: '#93c5fd',
          marginBottom: '16px',
          lineHeight: '1.6',
        }}
      >
        <strong>ACATS is an in-kind share transfer — no shares are sold.</strong> No capital gains event is triggered. Your shares arrive at Rovia with vest dates and cost basis preserved. The outbound fee (if any) is charged by your current broker, not Rovia. Many brokers charge $0.
      </div>

      {/* Comparison table */}
      <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.03)', padding: '10px 16px' }}>
          <div style={{ fontSize: '11px', color: '#475569', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Cost item</div>
          <div style={{ fontSize: '11px', color: '#ef4444', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{company.brokerShortName}</div>
          <div style={{ fontSize: '11px', color: '#34d399', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Rovia</div>
        </div>
        {rows.map((r) => (
          <div
            key={r.label}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              padding: '12px 16px',
              borderTop: '1px solid rgba(255,255,255,0.04)',
              background: r.highlight ? 'rgba(59,130,246,0.06)' : 'transparent',
            }}
          >
            <div style={{ fontSize: '13px', color: r.highlight ? '#94a3b8' : '#64748b', fontWeight: r.highlight ? '600' : '400' }}>{r.label}</div>
            <div style={{ fontSize: '13px', color: '#fca5a5', fontWeight: r.highlight ? '700' : '500' }}>{r.broker}</div>
            <div style={{ fontSize: '13px', color: '#86efac', fontWeight: r.highlight ? '700' : '500' }}>{r.rovia}</div>
          </div>
        ))}
      </div>

      {/* Net saving callout */}
      <div
        style={{
          marginTop: '16px',
          background: 'rgba(52,211,153,0.08)',
          border: '1px solid rgba(52,211,153,0.2)',
          borderRadius: '10px',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div style={{ fontSize: '24px' }}>💰</div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: '700', color: '#34d399' }}>
            You save {inr(netSaving)} over {years} year{years > 1 ? 's' : ''} by switching to Rovia
          </div>
          <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
            {acatsFeeUSD === 0
              ? 'No transfer fee — your broker charges $0 for ACATS out'
              : `After the one-time ${usd(acatsFeeUSD)} ACATS outbound fee`}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Calculator 2: Diversification ───────────────────────────────────────────

function DiversifyCalc({ company }) {
  const [portfolioUSD, setPortfolioUSD] = useState(100000);
  const [divPct, setDivPct] = useState(30);   // % to diversify out of this stock

  // Pre-select 3 companies as defaults (excluding current)
  const defaults = ALL_COMPANIES.filter((c) => c.slug !== company.slug).slice(0, 3);
  const [picks, setPicks] = useState(defaults.map((c) => c.slug));

  const divAmount     = portfolioUSD * (divPct / 100);
  const remainAmount  = portfolioUSD - divAmount;
  const perStock      = divAmount / picks.length;

  const currentTarget = parseTarget(company.analystTarget);
  const currentPrice  = portfolioUSD; // treat portfolio value as effective price base

  const results = picks.map((slug) => {
    const c = getCompany(slug);
    const target = parseTarget(c?.analystTarget);
    const upside = target && currentTarget ? ((target - 100) / 100) * 100 : null; // simplified
    // Use analyst target implied upside
    return { c, target, perStock };
  });

  const handlePick = (index, slug) => {
    const next = [...picks];
    next[index] = slug;
    setPicks(next);
  };

  return (
    <div>
      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#f1f5f9', marginBottom: '4px' }}>
        Diversify out of {company.ticker}
      </h3>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>
        RSU concentration risk is real. See what it looks like to move a slice into other holdings — all still US equities you can hold at Rovia.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '24px' }}>
        <InputSlider
          label="Total RSU portfolio"
          prefix="$"
          value={portfolioUSD}
          min={10000} max={1000000} step={10000}
          onChange={setPortfolioUSD}
          display={`$${portfolioUSD.toLocaleString('en-US')}`}
        />
        <InputSlider
          label={`% to move out of ${company.ticker}`}
          suffix="%"
          value={divPct}
          min={5} max={80} step={5}
          onChange={setDivPct}
          display={`${divPct}%`}
        />
      </div>

      {/* Allocation visual */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '0', borderRadius: '8px', overflow: 'hidden', height: '12px', marginBottom: '8px' }}>
          <div style={{ flex: 100 - divPct, background: company.color + '80' }} />
          {picks.map((slug, i) => {
            const c = getCompany(slug);
            return (
              <div
                key={slug + i}
                style={{ flex: divPct / picks.length, background: c?.color || '#3b82f6', opacity: 0.8 }}
              />
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: company.color, display: 'inline-block' }} />
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>{company.ticker} · {100 - divPct}% · ${Math.round(remainAmount).toLocaleString('en-US')}</span>
          </div>
          {picks.map((slug, i) => {
            const c = getCompany(slug);
            return (
              <div key={slug + i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: c?.color || '#3b82f6', display: 'inline-block' }} />
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>{c?.ticker} · {Math.round(divPct / picks.length)}% · ${Math.round(perStock).toLocaleString('en-US')}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pick stocks */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '20px' }}>
        {picks.map((slug, i) => {
          const c = getCompany(slug);
          const target = parseTarget(c?.analystTarget);
          const currentP = parseTarget(company.analystTarget);
          // Show analyst upside vs current stock's analyst target for comparison
          return (
            <div
              key={i}
              style={{
                background: '#0f1828',
                border: `1px solid ${c?.color || '#3b82f6'}28`,
                borderRadius: '10px',
                padding: '14px',
              }}
            >
              <select
                value={slug}
                onChange={(e) => handlePick(i, e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
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
                {ALL_COMPANIES.filter((ac) => ac.slug !== company.slug && (!picks.includes(ac.slug) || ac.slug === slug)).map((ac) => (
                  <option key={ac.slug} value={ac.slug} style={{ background: '#0f1828' }}>
                    {ac.name} ({ac.ticker})
                  </option>
                ))}
              </select>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                {c?.hasLogo && (
                  <img src={`/logos/${c.slug}.png`} alt={c?.name} width={20} height={20} style={{ objectFit: 'contain' }} />
                )}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#f1f5f9' }}>{c?.name}</div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>{c?.ticker} · {c?.vestCycle}</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '11px', color: '#475569' }}>Allocation</span>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>${Math.round(perStock).toLocaleString('en-US')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', color: '#475569' }}>Analyst target</span>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#34d399' }}>{c?.analystTarget || '—'}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          background: 'rgba(59,130,246,0.06)',
          border: '1px solid rgba(59,130,246,0.15)',
          borderRadius: '10px',
          padding: '14px 18px',
          fontSize: '13px',
          color: '#94a3b8',
          lineHeight: '1.6',
        }}
      >
        <strong style={{ color: '#60a5fa' }}>Analyst targets are consensus estimates, not guarantees.</strong>{' '}
        Diversification reduces single-stock risk but does not eliminate market risk. This calculator is for illustration only.
      </div>
    </div>
  );
}

// ─── Shared slider input ──────────────────────────────────────────────────────

function InputSlider({ label, value, min, max, step, onChange, display, prefix, suffix }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '12px', color: '#475569', fontWeight: '600' }}>{label}</span>
        <span style={{ fontSize: '13px', color: '#f1f5f9', fontWeight: '700' }}>{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: '100%',
          accentColor: '#3b82f6',
          cursor: 'pointer',
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2px' }}>
        <span style={{ fontSize: '10px', color: '#334155' }}>{prefix}{min.toLocaleString()}{suffix}</span>
        <span style={{ fontSize: '10px', color: '#334155' }}>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}
