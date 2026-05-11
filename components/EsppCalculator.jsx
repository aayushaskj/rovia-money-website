'use client';

import { useState } from 'react';

// Companies with ESPP among our 48 (15% discount, 6-month offering is most common)
// Each entry: { offeringPeriod (months), discount (%), lookback: true/false, maxContrib (% of salary) }
export const ESPP_CONFIGS = {
  google:      { offeringPeriod: 6,  discount: 15, lookback: true,  maxContrib: 10 },
  meta:        { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
  microsoft:   { offeringPeriod: 6,  discount: 10, lookback: true,  maxContrib: 10 },
  apple:       { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
  salesforce:  { offeringPeriod: 6,  discount: 15, lookback: true,  maxContrib: 15 },
  adobe:       { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
  intel:       { offeringPeriod: 6,  discount: 15, lookback: true,  maxContrib: 10 },
  paypal:      { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
  uber:        { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
  servicenow:  { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 15 },
  intuit:      { offeringPeriod: 6,  discount: 15, lookback: true,  maxContrib: 10 },
  oracle:      { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
  autodesk:    { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
  hubspot:     { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
  datadog:     { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
  snowflake:   { offeringPeriod: 6,  discount: 15, lookback: false, maxContrib: 10 },
};

function inr(n) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

export default function EsppCalculator({ company }) {
  const config = ESPP_CONFIGS[company.slug];
  if (!config) return null;

  const USD_INR = 84;

  const [annualSalaryUSD, setAnnualSalaryUSD] = useState(150000);
  const [contribPct,      setContribPct]      = useState(Math.min(10, config.maxContrib));
  const [stockPrice,      setStockPrice]      = useState(200);
  const [stockChange,     setStockChange]     = useState(10);  // % appreciation in offering period

  // Contribution per offering period
  const periodsPerYear    = 12 / config.offeringPeriod;
  const contribPerPeriod  = (annualSalaryUSD * contribPct / 100) / periodsPerYear;

  // Purchase price — with lookback: min(begin, end) × (1 - discount%)
  const endPrice          = stockPrice * (1 + stockChange / 100);
  const purchaseBase      = config.lookback ? Math.min(stockPrice, endPrice) : endPrice;
  const purchasePrice     = purchaseBase * (1 - config.discount / 100);

  // Shares purchased
  const sharesBought      = contribPerPeriod / purchasePrice;

  // Immediate gain (sell at market = endPrice)
  const proceedsUSD       = sharesBought * endPrice;
  const immediateGainUSD  = proceedsUSD - contribPerPeriod;

  // India tax on ESPP gains
  // ESPP discount at purchase = perquisite income → taxed as salary (30% slab assumed)
  const perquisiteUSD     = sharesBought * (endPrice - purchasePrice);
  const perquisiteTaxUSD  = perquisiteUSD * 0.30;

  // If held > 24 months after purchase → LTCG at 20% (with indexation)
  // Capital gain portion = sale price - purchase price (already taxed as perquisite)
  const capitalGainShortUSD = 0; // if sold immediately, no further capital gain beyond perquisite
  const netGainUSD        = immediateGainUSD - perquisiteTaxUSD;

  // Annual figures
  const annualGainUSD     = immediateGainUSD * periodsPerYear;
  const annualNetUSD      = netGainUSD * periodsPerYear;

  return (
    <div
      style={{
        background: '#080d18',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: 'rgba(255,255,255,0.02)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span style={{ fontSize: '20px' }}>🏷️</span>
        <div>
          <div style={{ fontSize: '15px', fontWeight: '700', color: '#f1f5f9' }}>
            {company.name} ESPP Calculator
          </div>
          <div style={{ fontSize: '12px', color: '#475569' }}>
            {config.discount}% discount · {config.offeringPeriod}-month periods · {config.lookback ? 'lookback pricing' : 'end-of-period pricing'} · max {config.maxContrib}% salary
          </div>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Inputs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <SliderField
            label="Annual base salary (USD)"
            value={annualSalaryUSD} min={50000} max={500000} step={10000}
            onChange={setAnnualSalaryUSD}
            display={`$${annualSalaryUSD.toLocaleString('en-US')}`}
          />
          <SliderField
            label={`ESPP contribution (max ${config.maxContrib}%)`}
            value={contribPct} min={1} max={config.maxContrib} step={1}
            onChange={setContribPct}
            display={`${contribPct}%`}
          />
          <SliderField
            label={`${company.ticker} stock price (USD)`}
            value={stockPrice} min={10} max={2000} step={5}
            onChange={setStockPrice}
            display={`$${stockPrice}`}
          />
          <SliderField
            label={`Stock appreciation in ${config.offeringPeriod}-month period`}
            value={stockChange} min={-30} max={60} step={1}
            onChange={setStockChange}
            display={`${stockChange > 0 ? '+' : ''}${stockChange}%`}
          />
        </div>

        {/* Results grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '20px' }}>
          {[
            { label: 'Contribution per period', value: `$${Math.round(contribPerPeriod).toLocaleString()}`, sub: `${inr(contribPerPeriod * USD_INR)}` },
            { label: 'Purchase price', value: `$${purchasePrice.toFixed(2)}`, sub: `vs market $${endPrice.toFixed(2)}`, accent: '#34d399' },
            { label: 'Shares bought', value: sharesBought.toFixed(4), sub: `${config.offeringPeriod}-month period` },
            { label: 'Immediate gross gain', value: `$${Math.round(immediateGainUSD).toLocaleString()}`, sub: inr(immediateGainUSD * USD_INR), accent: '#34d399' },
            { label: 'India tax (perquisite ~30%)', value: `−$${Math.round(perquisiteTaxUSD).toLocaleString()}`, sub: inr(perquisiteTaxUSD * USD_INR), accent: '#f87171' },
            { label: 'Net gain per period', value: `$${Math.round(netGainUSD).toLocaleString()}`, sub: inr(netGainUSD * USD_INR), accent: '#60a5fa', bold: true },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: '#0f1828',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px',
                padding: '14px',
              }}
            >
              <div style={{ fontSize: '11px', color: '#475569', marginBottom: '6px', fontWeight: '600' }}>{item.label}</div>
              <div style={{ fontSize: item.bold ? '18px' : '16px', fontWeight: '700', color: item.accent || '#f1f5f9' }}>{item.value}</div>
              <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Annual summary */}
        <div
          style={{
            background: 'rgba(59,130,246,0.08)',
            border: '1px solid rgba(59,130,246,0.18)',
            borderRadius: '10px',
            padding: '16px 20px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#475569', marginBottom: '4px', fontWeight: '600' }}>Annual gross ESPP gain</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#34d399' }}>${Math.round(annualGainUSD).toLocaleString()}</div>
              <div style={{ fontSize: '11px', color: '#475569' }}>{inr(annualGainUSD * USD_INR)}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#475569', marginBottom: '4px', fontWeight: '600' }}>Annual net (after ~30% India tax)</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#60a5fa' }}>${Math.round(annualNetUSD).toLocaleString()}</div>
              <div style={{ fontSize: '11px', color: '#475569' }}>{inr(annualNetUSD * USD_INR)}</div>
            </div>
          </div>
        </div>

        {/* Tax note */}
        <div style={{ marginTop: '14px', fontSize: '12px', color: '#334155', lineHeight: '1.6' }}>
          <strong style={{ color: '#475569' }}>India tax note:</strong> ESPP discount is treated as a perquisite (salary income) at purchase — taxed at your slab rate. Any capital gain on subsequent sale is taxed separately: STCG at 30% (held &lt;24 months) or LTCG at 20% with indexation (held ≥24 months). Consult a CA for personalised advice.
        </div>
      </div>
    </div>
  );
}

function SliderField({ label, value, min, max, step, onChange, display }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '12px', color: '#475569', fontWeight: '600' }}>{label}</span>
        <span style={{ fontSize: '13px', color: '#f1f5f9', fontWeight: '700' }}>{display}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: '#3b82f6', cursor: 'pointer' }}
      />
    </div>
  );
}
