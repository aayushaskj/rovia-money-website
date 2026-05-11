'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, inr } from './shared';

function fyLabel(year) {
  return `FY ${year}–${String(year + 1).slice(2)}`;
}

export default function TaxYear() {
  const [lots, setLots] = useState([
    { id: 1, vestDate: '2022-08-01', shares: 30, vestPrice: 95, currentPrice: 165 },
    { id: 2, vestDate: '2023-02-01', shares: 25, vestPrice: 110, currentPrice: 165 },
    { id: 3, vestDate: '2024-08-01', shares: 25, vestPrice: 148, currentPrice: 165 },
  ]);
  const [fxRate, setFxRate] = useState(84);
  const [nextId, setNextId] = useState(4);

  function calcDays(dateStr) {
    return dateStr ? Math.max(0, Math.floor((new Date() - new Date(dateStr)) / 86400000)) : 0;
  }

  function updateLot(id, field, val) {
    setLots(lots.map(l => l.id === id ? { ...l, [field]: val } : l));
  }

  function addLot() {
    setLots([...lots, { id: nextId, vestDate: '', shares: 25, vestPrice: 150, currentPrice: 165 }]);
    setNextId(nextId + 1);
  }

  const thisYearTax = lots.reduce((sum, l) => {
    const days = calcDays(l.vestDate);
    const isLtcg = days >= 730;
    const gain = (l.currentPrice - l.vestPrice) * l.shares * fxRate;
    return sum + (gain > 0 ? gain * (isLtcg ? 0.20 : 0.30) : 0);
  }, 0);

  const stcgLotsWithLtcgSoon = lots.filter(l => {
    const days = calcDays(l.vestDate);
    return days < 730 && (730 - days) <= 365;
  });

  const savingIfWait = stcgLotsWithLtcgSoon.reduce((sum, l) => {
    const gain = (l.currentPrice - l.vestPrice) * l.shares * fxRate;
    return sum + (gain > 0 ? gain * 0.10 : 0); // 30% STCG vs 20% LTCG = 10% delta
  }, 0);

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ flex: '0 0 180px', display: 'inline-block', marginBottom: '16px' }}>
          <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
        </div>
      </div>

      {lots.map(l => {
        const days = calcDays(l.vestDate);
        const daysToLtcg = Math.max(0, 730 - days);
        const isLtcg = days >= 730;
        const gain = (l.currentPrice - l.vestPrice) * l.shares * fxRate;
        const tax = gain > 0 ? gain * (isLtcg ? 0.20 : 0.30) : 0;
        const ltcgDate = l.vestDate ? new Date(new Date(l.vestDate).getTime() + 730 * 86400000) : null;

        return (
          <div key={l.id} style={{
            background: '#0a1120', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '10px', padding: '16px', marginBottom: '8px',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '10px' }}>
              <ToolInput label="Vest date" type="date" value={l.vestDate} onChange={v => updateLot(l.id, 'vestDate', v)} />
              <ToolInput label="Shares" type="number" value={l.shares} onChange={v => updateLot(l.id, 'shares', Number(v))} />
              <ToolInput label="Vest price (USD)" type="number" value={l.vestPrice} onChange={v => updateLot(l.id, 'vestPrice', Number(v))} step="0.01" />
              <ToolInput label="Current price (USD)" type="number" value={l.currentPrice} onChange={v => updateLot(l.id, 'currentPrice', Number(v))} step="0.01" />
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', alignItems: 'center' }}>
              <span style={{
                color: isLtcg ? '#34d399' : '#fbbf24', fontWeight: '700',
                background: isLtcg ? 'rgba(52,211,153,0.1)' : 'rgba(251,191,36,0.1)',
                borderRadius: '999px', padding: '2px 10px',
              }}>
                {isLtcg ? '✓ LTCG' : `STCG — ${daysToLtcg}d left`}
              </span>
              {!isLtcg && ltcgDate && (
                <span style={{ color: '#475569' }}>LTCG: {ltcgDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              )}
              <span style={{ color: '#64748b' }}>Gain: {inr(gain)}</span>
              <span style={{ color: '#f1f5f9', fontWeight: '600', marginLeft: 'auto' }}>Tax: {inr(tax)}</span>
            </div>
          </div>
        );
      })}

      <button onClick={addLot} style={{
        width: '100%', background: 'rgba(255,255,255,0.02)',
        border: '1px dashed rgba(255,255,255,0.1)',
        borderRadius: '8px', color: '#475569', fontSize: '13px',
        fontWeight: '600', padding: '10px', cursor: 'pointer', marginBottom: '16px',
      }}>
        + Add lot
      </button>

      <ResultCard>
        <ResultRow label="Total tax if all sold today" value={inr(thisYearTax)} highlight />
        {stcgLotsWithLtcgSoon.length > 0 && (
          <>
            <ResultRow
              label={`Lots within 12 months of LTCG (${stcgLotsWithLtcgSoon.length})`}
              value={inr(savingIfWait)}
              highlight
              green
            />
            <div style={{ marginTop: '10px', padding: '12px', background: 'rgba(52,211,153,0.07)', borderRadius: '8px', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div style={{ fontSize: '12px', color: '#34d399', fontWeight: '700', marginBottom: '4px' }}>
                💡 {inr(savingIfWait)} in tax saving available
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                {stcgLotsWithLtcgSoon.length} lot(s) flip to LTCG within the next 12 months — consider holding.
              </div>
            </div>
          </>
        )}
      </ResultCard>

      <Disclaimer>
        Selling in a different tax year only defers the liability — it doesn't reduce it unless
        the lot crosses the 24-month LTCG threshold. STCG income is added to your slab income.
      </Disclaimer>
    </div>
  );
}
