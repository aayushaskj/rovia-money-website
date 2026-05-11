'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, Disclaimer, inr, usd } from './shared';

function calcDays(dateStr) {
  const vest = new Date(dateStr);
  const today = new Date();
  return Math.max(0, Math.floor((today - vest) / 86400000));
}

export default function LotTracker() {
  const [lots, setLots] = useState([
    { id: 1, vestDate: '2023-02-01', shares: 25, vestPrice: 95 },
    { id: 2, vestDate: '2023-08-01', shares: 25, vestPrice: 110 },
    { id: 3, vestDate: '2024-02-01', shares: 25, vestPrice: 130 },
    { id: 4, vestDate: '2024-08-01', shares: 25, vestPrice: 148 },
  ]);
  const [currentPrice, setCurrentPrice] = useState(165);
  const [fxRate, setFxRate] = useState(84);
  const [nextId, setNextId] = useState(5);

  function addLot() {
    setLots([...lots, { id: nextId, vestDate: '', shares: 0, vestPrice: 0 }]);
    setNextId(nextId + 1);
  }

  function removeLot(id) {
    setLots(lots.filter(l => l.id !== id));
  }

  function updateLot(id, field, val) {
    setLots(lots.map(l => l.id === id ? { ...l, [field]: val } : l));
  }

  const today = new Date();

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 160px' }}>
            <ToolInput label="Current price (USD)" type="number" value={currentPrice} onChange={v => setCurrentPrice(Number(v))} step="0.01" />
          </div>
          <div style={{ flex: '0 0 140px' }}>
            <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
          </div>
        </div>

        {/* Lot table header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '140px 80px 100px 80px 80px 80px 80px 32px',
          gap: '8px',
          padding: '8px 12px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '8px 8px 0 0',
          fontSize: '11px', fontWeight: '700', color: '#475569',
          textTransform: 'uppercase', letterSpacing: '0.08em',
        }}>
          <span>Vest date</span>
          <span>Shares</span>
          <span>Vest price</span>
          <span>Days held</span>
          <span>Status</span>
          <span>Gain (INR)</span>
          <span>Tax rate</span>
          <span></span>
        </div>

        {lots.map((lot) => {
          const days = lot.vestDate ? calcDays(lot.vestDate) : 0;
          const ltcgDate = lot.vestDate ? new Date(new Date(lot.vestDate).getTime() + 730 * 86400000) : null;
          const daysLeft = lot.vestDate ? Math.max(0, 730 - days) : 0;
          const isLtcg = days >= 730;
          const gainUsd = (currentPrice - lot.vestPrice) * lot.shares;
          const gainInr = gainUsd * fxRate;
          const taxRate = isLtcg ? '20%' : '30%';

          return (
            <div key={lot.id} style={{
              display: 'grid',
              gridTemplateColumns: '140px 80px 100px 80px 80px 80px 80px 32px',
              gap: '8px',
              padding: '8px 12px',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              alignItems: 'center',
              background: '#0a1120',
            }}>
              <input
                type="date"
                value={lot.vestDate}
                onChange={e => updateLot(lot.id, 'vestDate', e.target.value)}
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '5px 8px', color: '#e2e8f0', fontSize: '12px', width: '100%' }}
              />
              <input
                type="number"
                value={lot.shares}
                onChange={e => updateLot(lot.id, 'shares', Number(e.target.value))}
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '5px 8px', color: '#e2e8f0', fontSize: '12px', width: '100%' }}
              />
              <input
                type="number"
                step="0.01"
                value={lot.vestPrice}
                onChange={e => updateLot(lot.id, 'vestPrice', Number(e.target.value))}
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '5px 8px', color: '#e2e8f0', fontSize: '12px', width: '100%' }}
              />
              <span style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center' }}>{days}</span>
              <span style={{
                fontSize: '11px', fontWeight: '700',
                color: isLtcg ? '#34d399' : '#fbbf24',
                background: isLtcg ? 'rgba(52,211,153,0.1)' : 'rgba(251,191,36,0.1)',
                borderRadius: '999px', padding: '2px 8px', textAlign: 'center',
              }}>
                {isLtcg ? 'LTCG' : `${daysLeft}d`}
              </span>
              <span style={{ fontSize: '12px', color: gainInr >= 0 ? '#34d399' : '#f87171', textAlign: 'right' }}>
                {gainInr >= 0 ? '+' : ''}{inr(gainInr)}
              </span>
              <span style={{ fontSize: '12px', color: '#64748b', textAlign: 'center' }}>{lot.vestDate ? taxRate : '—'}</span>
              <button
                onClick={() => removeLot(lot.id)}
                style={{ background: 'none', border: 'none', color: '#374151', cursor: 'pointer', fontSize: '16px', padding: '2px' }}
              >×</button>
            </div>
          );
        })}

        <button
          onClick={addLot}
          style={{
            width: '100%', background: 'rgba(255,255,255,0.03)',
            border: '1px dashed rgba(255,255,255,0.1)',
            borderRadius: '0 0 8px 8px', borderTop: 'none',
            color: '#475569', fontSize: '13px', fontWeight: '600',
            padding: '10px', cursor: 'pointer',
          }}
        >
          + Add vest lot
        </button>
      </div>

      {/* Totals */}
      <ResultCard>
        {(() => {
          const totalShares = lots.reduce((s, l) => s + l.shares, 0);
          const ltcgLots = lots.filter(l => l.vestDate && calcDays(l.vestDate) >= 730);
          const stcgLots = lots.filter(l => l.vestDate && calcDays(l.vestDate) < 730);
          const totalGainInr = lots.reduce((s, l) => {
            const g = (currentPrice - l.vestPrice) * l.shares * fxRate;
            return s + g;
          }, 0);
          const ltcgGainInr = ltcgLots.reduce((s, l) => s + (currentPrice - l.vestPrice) * l.shares * fxRate, 0);
          const stcgGainInr = stcgLots.reduce((s, l) => s + (currentPrice - l.vestPrice) * l.shares * fxRate, 0);
          const ltcgTax = ltcgGainInr > 0 ? ltcgGainInr * 0.20 : 0;
          const stcgTax = stcgGainInr > 0 ? stcgGainInr * 0.30 : 0;

          return (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(52,211,153,0.07)', borderRadius: '8px', padding: '14px', border: '1px solid rgba(52,211,153,0.15)' }}>
                  <div style={{ fontSize: '11px', color: '#34d399', fontWeight: '700', marginBottom: '4px' }}>LTCG lots ({ltcgLots.length})</div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#f1f5f9' }}>{inr(ltcgGainInr)}</div>
                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>Tax: {inr(ltcgTax)} @ 20%</div>
                </div>
                <div style={{ background: 'rgba(251,191,36,0.07)', borderRadius: '8px', padding: '14px', border: '1px solid rgba(251,191,36,0.15)' }}>
                  <div style={{ fontSize: '11px', color: '#fbbf24', fontWeight: '700', marginBottom: '4px' }}>STCG lots ({stcgLots.length})</div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#f1f5f9' }}>{inr(stcgGainInr)}</div>
                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>Tax: {inr(stcgTax)} @ 30%</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>Total shares</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#f1f5f9' }}>{totalShares}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>Total gain (INR)</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: totalGainInr >= 0 ? '#34d399' : '#f87171' }}>{inr(totalGainInr)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>Total tax owed</span>
                <span style={{ fontSize: '16px', fontWeight: '800', color: '#c9a96e' }}>{inr(ltcgTax + stcgTax)}</span>
              </div>
            </>
          );
        })()}
      </ResultCard>

      <Disclaimer>
        "Days left" shows calendar days until the 24-month LTCG threshold from vest date.
        Lot-level tracking is critical — selling STCG lots early can cost 10 percentage points more tax.
      </Disclaimer>
    </div>
  );
}
