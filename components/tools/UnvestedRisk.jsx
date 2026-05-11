'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, inr, usd } from './shared';

const SCENARIOS = [
  { label: '−10%', drop: 10 },
  { label: '−20%', drop: 20 },
  { label: '−30%', drop: 30 },
  { label: '−40%', drop: 40 },
  { label: '−50%', drop: 50 },
  { label: '−60%', drop: 60 },
];

export default function UnvestedRisk() {
  const [currentPrice, setCurrentPrice] = useState(160);
  const [unvestedShares, setUnvestedShares] = useState(200);
  const [vestSchedule, setVestSchedule] = useState([
    { tranche: 'Q3 2025', shares: 50 },
    { tranche: 'Q4 2025', shares: 50 },
    { tranche: 'Q1 2026', shares: 50 },
    { tranche: 'Q2 2026', shares: 50 },
  ]);
  const [fxRate, setFxRate] = useState(84);

  const unvestedValueUsd = unvestedShares * currentPrice;
  const unvestedValueInr = unvestedValueUsd * fxRate;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        <ToolInput label="Current stock price (USD)" type="number" value={currentPrice} onChange={v => setCurrentPrice(Number(v))} step="0.01" />
        <ToolInput label="Total unvested shares" type="number" value={unvestedShares} onChange={v => setUnvestedShares(Number(v))} />
        <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
      </div>

      <div style={{
        background: '#0a1120', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '10px', padding: '18px', marginBottom: '20px', textAlign: 'center',
      }}>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px', fontWeight: '600' }}>Unvested compensation at current price</div>
        <div style={{ fontSize: '36px', fontWeight: '800', color: '#c9a96e', letterSpacing: '-0.03em' }}>{inr(unvestedValueInr)}</div>
        <div style={{ fontSize: '14px', color: '#475569', marginTop: '4px' }}>{usd(unvestedValueUsd)}</div>
      </div>

      {/* Scenario table */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#f1f5f9', marginBottom: '10px' }}>Value at risk by scenario</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {SCENARIOS.map(s => {
            const newPrice = currentPrice * (1 - s.drop / 100);
            const newValueInr = unvestedShares * newPrice * fxRate;
            const lossInr = unvestedValueInr - newValueInr;

            return (
              <div key={s.drop} style={{
                background: `rgba(248,113,113,${(s.drop / 60) * 0.12})`,
                border: `1px solid rgba(248,113,113,${(s.drop / 60) * 0.3})`,
                borderRadius: '10px',
                padding: '14px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#f87171', marginBottom: '6px' }}>{s.label}</div>
                <div style={{ fontSize: '12px', color: '#475569', marginBottom: '4px' }}>${newPrice.toFixed(2)}/share</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#f1f5f9' }}>{inr(newValueInr)}</div>
                <div style={{ fontSize: '11px', color: '#f87171', marginTop: '4px' }}>−{inr(lossInr)} lost</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vest schedule */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#f1f5f9', marginBottom: '10px' }}>Vest schedule at current price</div>
        {vestSchedule.map((v, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '10px 14px', background: '#0a1120',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '8px', marginBottom: '6px',
          }}>
            <input
              type="text"
              value={v.tranche}
              onChange={e => setVestSchedule(vs => vs.map((x, j) => j === i ? { ...x, tranche: e.target.value } : x))}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '13px', width: '100px' }}
            />
            <input
              type="number"
              value={v.shares}
              onChange={e => setVestSchedule(vs => vs.map((x, j) => j === i ? { ...x, shares: Number(e.target.value) } : x))}
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '4px 8px', color: '#f1f5f9', fontSize: '13px', width: '70px' }}
            />
            <span style={{ fontSize: '12px', color: '#475569' }}>shares</span>
            <span style={{ marginLeft: 'auto', fontSize: '13px', fontWeight: '600', color: '#c9a96e' }}>
              {inr(v.shares * currentPrice * fxRate)}
            </span>
          </div>
        ))}
      </div>

      <Disclaimer>
        Unvested RSUs are a form of deferred compensation — they're not yours until they vest.
        A stock drop doesn't just reduce portfolio value; it reduces future guaranteed income.
        Consider this when deciding how much vested stock to hold.
      </Disclaimer>
    </div>
  );
}
