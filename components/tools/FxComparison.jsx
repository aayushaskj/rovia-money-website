'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, inr, usd } from './shared';

const BROKERS = [
  { name: 'Rovia', fxMarkup: 0, wireFee: 0, color: '#c9a96e', highlight: true },
  { name: 'Zerodha', fxMarkup: 1.0, wireFee: 1500, color: '#3b82f6' },
  { name: 'ICICI Direct', fxMarkup: 1.5, wireFee: 2500, color: '#8b5cf6' },
  { name: 'HDFC Securities', fxMarkup: 1.5, wireFee: 2200, color: '#06b6d4' },
  { name: 'SBI Remittance', fxMarkup: 2.0, wireFee: 500, color: '#f59e0b' },
  { name: 'Typical US bank', fxMarkup: 2.5, wireFee: 4000, color: '#64748b' },
];

export default function FxComparison() {
  const [amountUsd, setAmountUsd] = useState(10000);
  const [midRate, setMidRate] = useState(84);

  const midInr = amountUsd * midRate;

  return (
    <div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 200px' }}>
          <ToolInput label="Amount to remit (USD)" type="number" value={amountUsd} onChange={v => setAmountUsd(Number(v))} />
        </div>
        <div style={{ flex: '0 0 180px' }}>
          <ToolInput label="Mid-market rate (₹/$)" type="number" value={midRate} onChange={v => setMidRate(Number(v))} step="0.01" />
        </div>
      </div>

      <div style={{ marginBottom: '8px', fontSize: '11px', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>
        Mid-market value: {inr(midInr)}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {BROKERS.map((b) => {
          const fxLoss = midInr * (b.fxMarkup / 100);
          const total = fxLoss + b.wireFee;
          const netInr = midInr - total;
          const effectiveRate = midRate * (1 - b.fxMarkup / 100);
          const barWidth = total === 0 ? 0 : Math.min(100, (total / (midInr * 0.04)) * 100);

          return (
            <div key={b.name} style={{
              background: b.highlight ? 'rgba(201,169,110,0.08)' : '#0f1828',
              border: `1px solid ${b.highlight ? 'rgba(201,169,110,0.3)' : 'rgba(255,255,255,0.07)'}`,
              borderRadius: '12px',
              padding: '16px 20px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: b.color, display: 'inline-block', flexShrink: 0,
                  }} />
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#f1f5f9' }}>{b.name}</span>
                  {b.highlight && (
                    <span style={{ fontSize: '10px', background: 'rgba(201,169,110,0.2)', color: '#c9a96e', borderRadius: '999px', padding: '2px 8px', fontWeight: '700' }}>
                      BEST
                    </span>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: b.highlight ? '#c9a96e' : '#f1f5f9' }}>{inr(netInr)}</div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>₹{effectiveRate.toFixed(2)}/$</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b', marginBottom: '10px' }}>
                <span>FX markup: {b.fxMarkup}%</span>
                <span>Wire fee: {b.wireFee === 0 ? 'Free' : inr(b.wireFee)}</span>
                <span style={{ color: total === 0 ? '#34d399' : '#f87171', fontWeight: '600' }}>
                  Lost: {total === 0 ? 'Nothing' : inr(total)}
                </span>
              </div>

              {total > 0 && (
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${barWidth}%`, background: b.color, borderRadius: '999px', transition: 'width 0.3s' }} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Disclaimer>
        FX markup % is applied on the full transfer amount. Wire fees are approximate and may vary.
        Rates shown are illustrative — actual rates change daily. Rovia charges 0% platform FX markup.
      </Disclaimer>
    </div>
  );
}
