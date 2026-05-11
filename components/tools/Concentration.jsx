'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, inr } from './shared';

function scoreConcentration(singleStockPct, totalWealthRatio) {
  let score = 100;
  if (singleStockPct > 80) score -= 40;
  else if (singleStockPct > 60) score -= 30;
  else if (singleStockPct > 40) score -= 20;
  else if (singleStockPct > 25) score -= 10;

  if (totalWealthRatio > 80) score -= 30;
  else if (totalWealthRatio > 60) score -= 20;
  else if (totalWealthRatio > 40) score -= 10;

  return Math.max(0, Math.min(100, score));
}

function riskLabel(score) {
  if (score >= 80) return { label: 'Low risk', color: '#34d399' };
  if (score >= 60) return { label: 'Moderate risk', color: '#fbbf24' };
  if (score >= 40) return { label: 'High risk', color: '#f97316' };
  return { label: 'Extreme risk', color: '#f87171' };
}

export default function Concentration() {
  const [rsuValueInr, setRsuValueInr] = useState(5000000);
  const [totalWealthInr, setTotalWealthInr] = useState(10000000);
  const [unvestedInr, setUnvestedInr] = useState(3000000);
  const [employerSame, setEmployerSame] = useState(true);

  const stockPct = totalWealthInr > 0 ? (rsuValueInr / totalWealthInr) * 100 : 0;
  const totalExposure = rsuValueInr + unvestedInr + (employerSame ? 0 : 0);
  const totalExposurePct = totalWealthInr > 0 ? (totalExposure / totalWealthInr) * 100 : 0;

  const score = scoreConcentration(stockPct, totalExposurePct);
  const risk = riskLabel(score);

  const idealTarget = 20;
  const excessInr = Math.max(0, rsuValueInr - totalWealthInr * (idealTarget / 100));

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <ToolInput label="Vested RSU value (INR)" type="number" value={rsuValueInr} onChange={v => setRsuValueInr(Number(v))} />
        <ToolInput label="Total net worth (INR)" type="number" value={totalWealthInr} onChange={v => setTotalWealthInr(Number(v))} />
        <ToolInput label="Unvested RSU value (INR)" type="number" value={unvestedInr} onChange={v => setUnvestedInr(Number(v))} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Income also from same employer?</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[true, false].map(v => (
              <button
                key={String(v)}
                onClick={() => setEmployerSame(v)}
                style={{
                  flex: 1, padding: '9px', borderRadius: '8px',
                  background: employerSame === v ? 'rgba(201,169,110,0.15)' : '#0a1120',
                  border: `1px solid ${employerSame === v ? 'rgba(201,169,110,0.5)' : 'rgba(255,255,255,0.1)'}`,
                  color: employerSame === v ? '#c9a96e' : '#64748b',
                  fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                }}
              >
                {v ? 'Yes' : 'No'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Concentration meter */}
      <div style={{
        background: '#0a1120',
        border: `1px solid ${risk.color}33`,
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '16px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px', fontWeight: '600' }}>Concentration Risk Score</div>
        <div style={{ fontSize: '52px', fontWeight: '800', color: risk.color, letterSpacing: '-0.04em', lineHeight: 1 }}>{score}</div>
        <div style={{ fontSize: '15px', fontWeight: '700', color: risk.color, marginTop: '8px' }}>{risk.label}</div>
        <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', margin: '16px 0 4px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${score}%`, background: risk.color, borderRadius: '999px', transition: 'width 0.4s' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#334155' }}>
          <span>Extreme</span><span>High</span><span>Moderate</span><span>Low</span>
        </div>
      </div>

      <ResultCard>
        <ResultRow label="Single-stock weight" value={stockPct.toFixed(1) + '%'} highlight={stockPct > 40} />
        <ResultRow label="Total employer exposure (incl. unvested)" value={totalExposurePct.toFixed(1) + '%'} />
        <ResultRow label="Ideal single-stock ceiling" value="20%" />
        <ResultRow label="Excess above 20% target" value={excessInr > 0 ? inr(excessInr) : '—'} />
        <ResultRow
          label="Suggested diversification amount"
          value={excessInr > 0 ? inr(excessInr) : 'On track'}
          highlight={excessInr > 0}
        />
      </ResultCard>

      {score < 60 && (
        <div style={{
          background: 'rgba(248,113,113,0.07)',
          border: '1px solid rgba(248,113,113,0.2)',
          borderRadius: '10px',
          padding: '16px',
          marginBottom: '12px',
        }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#f87171', marginBottom: '6px' }}>⚠️ Action recommended</div>
          <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
            Your concentration is high. Your employer stock, salary, and unvested equity are all tied to one company.
            Diversifying {inr(excessInr)} into broad indices would reduce risk significantly.
          </div>
        </div>
      )}

      <Disclaimer>
        A widely cited rule of thumb: no single stock should exceed 10–20% of investable net worth.
        This is a simplified model — your risk tolerance and liquidity needs matter too.
      </Disclaimer>
    </div>
  );
}
