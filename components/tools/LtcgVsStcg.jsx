'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, TwoCol, inr, usd } from './shared';

export default function LtcgVsStcg() {
  const [vestDate, setVestDate] = useState('2024-01-15');
  const [shares, setShares] = useState(100);
  const [vestPrice, setVestPrice] = useState(140);
  const [currentPrice, setCurrentPrice] = useState(165);
  const [fxRate, setFxRate] = useState(84);

  const today = new Date();
  const vest = new Date(vestDate);
  const daysHeld = Math.max(0, Math.floor((today - vest) / 86400000));
  const daysToLtcg = Math.max(0, 730 - daysHeld);
  const ltcgDate = new Date(vest.getTime() + 730 * 86400000);

  const gainUsd = (currentPrice - vestPrice) * shares;
  const gainInr = gainUsd * fxRate;

  const stcgTax = gainInr > 0 ? gainInr * 0.30 : 0;
  const ltcgTax = gainInr > 0 ? gainInr * 0.20 : 0;
  const taxSaving = stcgTax - ltcgTax;

  const isLtcg = daysHeld >= 730;

  return (
    <div>
      <TwoCol>
        <ToolInput label="Vest date" type="date" value={vestDate} onChange={setVestDate} />
        <ToolInput label="Number of shares" type="number" value={shares} onChange={v => setShares(Number(v))} />
        <ToolInput label="Vest-day price (USD)" type="number" value={vestPrice} onChange={v => setVestPrice(Number(v))} step="0.01" />
        <ToolInput label="Current price (USD)" type="number" value={currentPrice} onChange={v => setCurrentPrice(Number(v))} step="0.01" />
        <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
      </TwoCol>

      <ResultCard>
        <div style={{
          display: 'inline-block',
          background: isLtcg ? 'rgba(52,211,153,0.12)' : 'rgba(251,191,36,0.12)',
          border: `1px solid ${isLtcg ? 'rgba(52,211,153,0.3)' : 'rgba(251,191,36,0.3)'}`,
          color: isLtcg ? '#34d399' : '#fbbf24',
          borderRadius: '999px',
          fontSize: '12px', fontWeight: '700',
          padding: '4px 14px', marginBottom: '20px',
        }}>
          {isLtcg ? '✓ LTCG eligible (held ≥ 24 months)' : `⏳ STCG — ${daysHeld} / 730 days held`}
        </div>

        <ResultRow label="Days held" value={`${daysHeld} days`} />
        {!isLtcg && (
          <ResultRow
            label="Days until LTCG"
            value={`${daysToLtcg} days  (${ltcgDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })})`}
            highlight
          />
        )}
        <ResultRow label="Gain (USD)" value={usd(gainUsd)} />
        <ResultRow label={`Gain (INR @ ₹${fxRate})`} value={inr(gainInr)} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '14px 0' }} />
        <ResultRow label="Tax if sold NOW (30% STCG)" value={inr(stcgTax)} dim={isLtcg} />
        <ResultRow label="Tax if held to LTCG (20%)" value={inr(ltcgTax)} />
        {!isLtcg && taxSaving > 0 && (
          <ResultRow
            label={`Saving by waiting ${daysToLtcg} days`}
            value={`+ ${inr(taxSaving)}`}
            highlight
            green
          />
        )}
      </ResultCard>

      <Disclaimer>
        LTCG on foreign equity = 20% (no indexation) after 24 months. STCG = 30% (applicable slab rate).
        Perquisite tax on vest-day income is separate and not included here.
      </Disclaimer>
    </div>
  );
}
