'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, inr, usd } from './shared';

export default function GrantReconstruct() {
  const [events, setEvents] = useState([
    { id: 1, date: '2022-02-01', sharesVested: 25, fmvUsd: 95, fxRate: 74.5, withheldPct: 30 },
    { id: 2, date: '2022-08-01', sharesVested: 25, fmvUsd: 88, fxRate: 78.0, withheldPct: 30 },
    { id: 3, date: '2023-02-01', sharesVested: 25, fmvUsd: 110, fxRate: 82.3, withheldPct: 30 },
    { id: 4, date: '2023-08-01', sharesVested: 25, fmvUsd: 130, fxRate: 83.1, withheldPct: 30 },
  ]);
  const [nextId, setNextId] = useState(5);

  function addEvent() {
    setEvents([...events, { id: nextId, date: '', sharesVested: 0, fmvUsd: 0, fxRate: 84, withheldPct: 30 }]);
    setNextId(nextId + 1);
  }
  function removeEvent(id) { setEvents(events.filter(e => e.id !== id)); }
  function updateEvent(id, field, val) {
    setEvents(events.map(e => e.id === id ? { ...e, [field]: val } : e));
  }

  const totals = events.reduce((acc, e) => {
    const perqInr = e.sharesVested * e.fmvUsd * e.fxRate;
    const withheld = perqInr * (e.withheldPct / 100);
    return {
      shares: acc.shares + e.sharesVested,
      perquisiteInr: acc.perquisiteInr + perqInr,
      withheld: acc.withheld + withheld,
    };
  }, { shares: 0, perquisiteInr: 0, withheld: 0 });

  return (
    <div>
      <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px', lineHeight: 1.6 }}>
        Use this to reconstruct your vest history from partial records — useful when you're missing
        Form 16 data, inherited an old brokerage account, or Carta doesn't show INR values.
      </p>

      {/* Vest events */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
              {['Vest date', 'Shares', 'FMV (USD)', 'USD/INR', 'Withheld %', 'Perquisite (INR)', 'Withheld (INR)', ''].map(h => (
                <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontSize: '11px', color: '#475569', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {events.map(e => {
              const perqInr = e.sharesVested * e.fmvUsd * e.fxRate;
              const withheldInr = perqInr * (e.withheldPct / 100);
              return (
                <tr key={e.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  {['date', 'sharesVested', 'fmvUsd', 'fxRate', 'withheldPct'].map(field => (
                    <td key={field} style={{ padding: '6px 8px' }}>
                      <input
                        type={field === 'date' ? 'date' : 'number'}
                        step={['fmvUsd', 'fxRate'].includes(field) ? '0.01' : field === 'withheldPct' ? '0.5' : '1'}
                        value={e[field]}
                        onChange={ev => updateEvent(e.id, field, field === 'date' ? ev.target.value : Number(ev.target.value))}
                        style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '4px 8px', color: '#e2e8f0', fontSize: '12px', width: field === 'date' ? '120px' : '80px' }}
                      />
                    </td>
                  ))}
                  <td style={{ padding: '6px 8px', color: '#c9a96e', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>{inr(perqInr)}</td>
                  <td style={{ padding: '6px 8px', color: '#64748b', fontSize: '12px', whiteSpace: 'nowrap' }}>{inr(withheldInr)}</td>
                  <td style={{ padding: '6px 8px' }}>
                    <button onClick={() => removeEvent(e.id)} style={{ background: 'none', border: 'none', color: '#374151', cursor: 'pointer', fontSize: '16px' }}>×</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button onClick={addEvent} style={{
        width: '100%', background: 'rgba(255,255,255,0.02)',
        border: '1px dashed rgba(255,255,255,0.1)',
        borderRadius: '8px', color: '#475569', fontSize: '13px',
        fontWeight: '600', padding: '10px', cursor: 'pointer', marginTop: '8px',
      }}>
        + Add vest event
      </button>

      <ResultCard>
        <ResultRow label="Total shares vested" value={totals.shares} />
        <ResultRow label="Total perquisite income (INR)" value={inr(totals.perquisiteInr)} highlight />
        <ResultRow label="Total US withholding (INR)" value={inr(totals.withheld)} />
        <ResultRow label="Average cost basis per share" value={totals.shares > 0 ? inr(totals.perquisiteInr / totals.shares) + '/share' : '—'} />
      </ResultCard>

      <Disclaimer>
        The FX rate for each vest event should be the SBI TT buying rate on that specific date.
        Perquisite value = shares × FMV × FX rate. This is your India cost basis for capital gains.
      </Disclaimer>
    </div>
  );
}
