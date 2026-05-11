'use client';
import { useState } from 'react';
import { ToolInput, ToolSelect, ResultCard, ResultRow, Disclaimer, TwoCol, StatTile, inr, usd } from './shared';

export default function WireCost() {
  const [annualUsd, setAnnualUsd] = useState(20000);
  const [transfersPerYear, setTransfersPerYear] = useState(4);
  const [fxMarkup, setFxMarkup] = useState(1.5);
  const [wireFeeInr, setWireFeeInr] = useState(2000);
  const [fxRate, setFxRate] = useState(84);
  const [growthRate, setGrowthRate] = useState(10);

  const years = [1, 2, 3, 4, 5];
  const roviaFxMarkup = 0;
  const roviaWire = 0;

  function calcCost(yr) {
    let total = 0;
    let amount = annualUsd;
    for (let i = 0; i < yr; i++) {
      const inrVal = amount * fxRate;
      const fxLoss = inrVal * (fxMarkup / 100);
      const wireLoss = wireFeeInr * transfersPerYear;
      total += fxLoss + wireLoss;
      amount *= (1 + growthRate / 100);
    }
    return total;
  }

  const cost5 = calcCost(5);
  const cost1 = calcCost(1);

  return (
    <div>
      <TwoCol>
        <ToolInput label="Annual RSU value (USD)" type="number" value={annualUsd} onChange={v => setAnnualUsd(Number(v))} />
        <ToolInput label="Transfers per year" type="number" value={transfersPerYear} onChange={v => setTransfersPerYear(Number(v))} />
        <ToolInput label="FX markup (%)" type="number" value={fxMarkup} onChange={v => setFxMarkup(Number(v))} step="0.1" hint="Your current broker" />
        <ToolInput label="Wire fee per transfer (INR)" type="number" value={wireFeeInr} onChange={v => setWireFeeInr(Number(v))} />
        <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
        <ToolInput label="Annual RSU growth (%)" type="number" value={growthRate} onChange={v => setGrowthRate(Number(v))} step="0.5" />
      </TwoCol>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '16px' }}>
        {years.map(yr => (
          <div key={yr} style={{
            background: '#0a1120',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '10px',
            padding: '14px 10px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '11px', color: '#475569', fontWeight: '600', marginBottom: '6px' }}>Year {yr}</div>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#f87171' }}>{inr(calcCost(yr) - (yr > 1 ? calcCost(yr - 1) : 0))}</div>
            <div style={{ fontSize: '10px', color: '#334155', marginTop: '4px' }}>lost</div>
          </div>
        ))}
      </div>

      <ResultCard>
        <ResultRow label="Total lost over 5 years" value={inr(cost5)} highlight />
        <ResultRow label="With Rovia (0% markup, free wire)" value={inr(0)} highlight green />
        <ResultRow label="5-year saving with Rovia" value={`+ ${inr(cost5)}`} highlight green />
        <ResultRow label="Per year average" value={inr(cost5 / 5)} />
        <ResultRow label="Per transfer average" value={inr(cost5 / (5 * transfersPerYear))} />
      </ResultCard>

      <Disclaimer>
        Assumes RSU value grows at {growthRate}% per year. FX markup is applied on gross USD proceeds.
        Wire fees are per transfer. Numbers are illustrative and do not include income/capital gains taxes.
      </Disclaimer>
    </div>
  );
}
