'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, TwoCol, inr } from './shared';

export default function Diversification() {
  const [rsuValueUsd, setRsuValueUsd] = useState(50000);
  const [diversifyPct, setDiversifyPct] = useState(40);
  const [holdYears, setHoldYears] = useState(5);
  const [stockReturn, setStockReturn] = useState(12);
  const [indexReturn, setIndexReturn] = useState(10);
  const [fxRate, setFxRate] = useState(84);
  const [vestDate, setVestDate] = useState('2023-01-01');

  const daysHeld = Math.max(0, Math.floor((new Date() - new Date(vestDate)) / 86400000));
  const isLtcg = daysHeld >= 730;
  const taxRateOnSale = isLtcg ? 0.20 : 0.30;

  const diversifyUsd = rsuValueUsd * (diversifyPct / 100);
  const keepUsd = rsuValueUsd - diversifyUsd;

  const taxOnSale = diversifyUsd * fxRate * taxRateOnSale;
  const diversifyInr = diversifyUsd * fxRate - taxOnSale;

  const stockFv = rsuValueUsd * Math.pow(1 + stockReturn / 100, holdYears) * fxRate;
  const divFv = diversifyInr * Math.pow(1 + indexReturn / 100, holdYears) + keepUsd * Math.pow(1 + stockReturn / 100, holdYears) * fxRate;

  const undiversifiedFv = rsuValueUsd * Math.pow(1 + stockReturn / 100, holdYears) * fxRate;

  const risk60Pct = undiversifiedFv * 0.40;
  const diversifiedRisk60 = divFv * 0.60 * 0.2 + divFv * 0.40 * 0.2;

  return (
    <div>
      <TwoCol>
        <ToolInput label="Current RSU value (USD)" type="number" value={rsuValueUsd} onChange={v => setRsuValueUsd(Number(v))} />
        <ToolInput label="Vest date (for LTCG check)" type="date" value={vestDate} onChange={setVestDate} />
        <ToolInput label="% to diversify into index" type="number" value={diversifyPct} onChange={v => setDiversifyPct(Math.min(100, Number(v)))} min={0} max={100} />
        <ToolInput label="Years to simulate" type="number" value={holdYears} onChange={v => setHoldYears(Number(v))} />
        <ToolInput label="Expected stock return (% pa)" type="number" value={stockReturn} onChange={v => setStockReturn(Number(v))} step="0.5" />
        <ToolInput label="Expected index return (% pa)" type="number" value={indexReturn} onChange={v => setIndexReturn(Number(v))} step="0.5" />
        <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
      </TwoCol>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#0a1120', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#f87171', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Hold 100% stock
          </div>
          <div style={{ fontSize: '26px', fontWeight: '800', color: '#f1f5f9' }}>{inr(undiversifiedFv)}</div>
          <div style={{ fontSize: '12px', color: '#475569', marginTop: '6px' }}>in {holdYears} yrs @ {stockReturn}%</div>
          <div style={{ fontSize: '12px', color: '#f87171', marginTop: '8px' }}>Max downside: −{inr(risk60Pct)}</div>
        </div>
        <div style={{ background: '#0a1120', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '12px', padding: '20px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#34d399', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Diversify {diversifyPct}% to index
          </div>
          <div style={{ fontSize: '26px', fontWeight: '800', color: '#f1f5f9' }}>{inr(divFv)}</div>
          <div style={{ fontSize: '12px', color: '#475569', marginTop: '6px' }}>in {holdYears} yrs</div>
          <div style={{ fontSize: '12px', color: '#34d399', marginTop: '8px' }}>
            {divFv > undiversifiedFv ? `+ ${inr(divFv - undiversifiedFv)} more` : `− ${inr(undiversifiedFv - divFv)} less`}
          </div>
        </div>
      </div>

      <ResultCard>
        <ResultRow label={`Tax on diversifying ${diversifyPct}% today (${isLtcg ? 'LTCG 20%' : 'STCG 30%'})`} value={inr(taxOnSale)} />
        <ResultRow label="Net proceeds for reinvestment" value={inr(diversifyInr)} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="Future value (hold all)" value={inr(undiversifiedFv)} />
        <ResultRow label={`Future value (diversify ${diversifyPct}%)`} value={inr(divFv)} highlight />
        <ResultRow
          label="Difference at year 5"
          value={(divFv > undiversifiedFv ? '+' : '') + inr(divFv - undiversifiedFv)}
          green={divFv > undiversifiedFv}
        />
      </ResultCard>

      <Disclaimer>
        Returns are illustrative. Past performance of indices does not predict future returns.
        Diversification reduces concentration risk even if it slightly reduces expected return.
      </Disclaimer>
    </div>
  );
}
