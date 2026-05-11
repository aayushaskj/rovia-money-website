'use client';
import { useState } from 'react';
import { ToolInput, ToolSelect, ResultCard, ResultRow, Disclaimer, TwoCol, inr } from './shared';

export default function SellNow() {
  const [vestDate, setVestDate] = useState('2024-03-01');
  const [vestPrice, setVestPrice] = useState(140);
  const [shares, setShares] = useState(100);
  const [currentPrice, setCurrentPrice] = useState(165);
  const [fxRate, setFxRate] = useState(84);
  const [expectedGrowthPct, setExpectedGrowthPct] = useState(8);

  const today = new Date();
  const vest = new Date(vestDate);
  const daysHeld = Math.max(0, Math.floor((today - vest) / 86400000));
  const daysToLtcg = Math.max(0, 730 - daysHeld);
  const isLtcg = daysHeld >= 730;

  // Sell now
  const gainUsd = Math.max(0, currentPrice - vestPrice) * shares;
  const gainInr = gainUsd * fxRate;
  const taxNow = gainInr * (isLtcg ? 0.20 : 0.30);
  const netNow = shares * currentPrice * fxRate - taxNow;

  // Hold to LTCG (if not already LTCG)
  const growthFactor = 1 + (expectedGrowthPct / 100) * (daysToLtcg / 365);
  const priceAtLtcg = isLtcg ? currentPrice : currentPrice * growthFactor;
  const gainAtLtcg = Math.max(0, priceAtLtcg - vestPrice) * shares;
  const gainInrAtLtcg = gainAtLtcg * fxRate;
  const taxAtLtcg = gainInrAtLtcg * 0.20;
  const netAtLtcg = shares * priceAtLtcg * fxRate - taxAtLtcg;

  const netDiff = netAtLtcg - netNow;
  const breakEvenDropPct = isLtcg ? 0 : ((taxNow - taxAtLtcg / growthFactor) / (shares * currentPrice * fxRate)) * 100;

  return (
    <div>
      <TwoCol>
        <ToolInput label="Vest date" type="date" value={vestDate} onChange={setVestDate} />
        <ToolInput label="Shares" type="number" value={shares} onChange={v => setShares(Number(v))} />
        <ToolInput label="Vest price (USD)" type="number" value={vestPrice} onChange={v => setVestPrice(Number(v))} step="0.01" />
        <ToolInput label="Current price (USD)" type="number" value={currentPrice} onChange={v => setCurrentPrice(Number(v))} step="0.01" />
        <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
        {!isLtcg && (
          <ToolInput label="Expected annual growth (%)" type="number" value={expectedGrowthPct} onChange={v => setExpectedGrowthPct(Number(v))} step="0.5" hint={`Price at LTCG: $${priceAtLtcg.toFixed(2)}`} />
        )}
      </TwoCol>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{
          background: '#0a1120', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px', padding: '20px',
        }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
            Sell today ({isLtcg ? 'LTCG' : 'STCG'})
          </div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#f1f5f9', marginBottom: '4px' }}>{inr(netNow)}</div>
          <div style={{ fontSize: '12px', color: '#475569' }}>after {isLtcg ? '20%' : '30%'} tax ({inr(taxNow)})</div>
        </div>
        <div style={{
          background: '#0a1120', border: '1px solid rgba(52,211,153,0.2)',
          borderRadius: '12px', padding: '20px',
        }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
            {isLtcg ? 'Already LTCG' : `Hold ${daysToLtcg} days → LTCG`}
          </div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#f1f5f9', marginBottom: '4px' }}>{inr(netAtLtcg)}</div>
          <div style={{ fontSize: '12px', color: '#475569' }}>after 20% tax ({inr(taxAtLtcg)})</div>
        </div>
      </div>

      <ResultCard>
        <ResultRow
          label={isLtcg ? 'Already LTCG — sell at your convenience' : `Extra net if you wait ${daysToLtcg} days`}
          value={isLtcg ? '—' : `+ ${inr(netDiff)}`}
          highlight
          green={netDiff > 0}
        />
        {!isLtcg && (
          <ResultRow
            label="Tax saving from holding"
            value={inr(taxNow - taxAtLtcg * (currentPrice / priceAtLtcg))}
          />
        )}
        {!isLtcg && (
          <ResultRow
            label="Stock must not fall below"
            value={`$${(currentPrice * (1 - (taxNow - taxAtLtcg) / (shares * currentPrice * fxRate))).toFixed(2)}`}
          />
        )}
      </ResultCard>

      <Disclaimer>
        This assumes no change in USD/INR rate. Capital gains tax only — does not include perquisite tax.
        The break-even price is the minimum sale price needed to be better off holding to LTCG.
      </Disclaimer>
    </div>
  );
}
