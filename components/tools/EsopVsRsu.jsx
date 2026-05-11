'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, TwoCol, inr, usd } from './shared';

export default function EsopVsRsu() {
  const [esopShares, setEsopShares] = useState(10000);
  const [strikePrice, setStrikePrice] = useState(5);
  const [currentFmv, setCurrentFmv] = useState(50);
  const [exitMultiple, setExitMultiple] = useState(3);
  const [dilutionPct, setDilutionPct] = useState(20);
  const [rsuShares, setRsuShares] = useState(500);
  const [rsuCurrentPrice, setRsuCurrentPrice] = useState(160);
  const [fxRate, setFxRate] = useState(84);
  const [stockReturnPct, setStockReturnPct] = useState(10);
  const [holdYears, setHoldYears] = useState(4);

  // ESOP calculations
  const dilutedEsopShares = esopShares * (1 - dilutionPct / 100);
  const exitFmv = currentFmv * exitMultiple;
  const esopGrossUsd = Math.max(0, exitFmv - strikePrice) * dilutedEsopShares;
  const exerciseCostUsd = strikePrice * dilutedEsopShares;
  // ESOP tax in India: difference between FMV and strike = perquisite at exercise
  const esopPerquisiteInr = Math.max(0, exitFmv - strikePrice) * dilutedEsopShares * fxRate;
  const esopTax = esopPerquisiteInr * 0.30 * 1.04; // 30% + 4% cess, simplified
  const esopNet = esopGrossUsd * fxRate - esopTax;

  // RSU calculations (public company, grows at stockReturnPct)
  const futureRsuPrice = rsuCurrentPrice * Math.pow(1 + stockReturnPct / 100, holdYears);
  const rsuFutureValueUsd = rsuShares * futureRsuPrice;
  const rsuGain = (futureRsuPrice - rsuCurrentPrice) * rsuShares;
  const rsuCgTax = rsuGain > 0 ? (holdYears >= 2 ? rsuGain * 0.20 : rsuGain * 0.30) * fxRate : 0;
  const rsuNet = rsuFutureValueUsd * fxRate - rsuCgTax;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        {/* ESOP */}
        <div style={{ background: '#0a1120', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px', padding: '18px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#8b5cf6', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pre-IPO ESOPs</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ToolInput label="Option shares granted" type="number" value={esopShares} onChange={v => setEsopShares(Number(v))} />
            <ToolInput label="Strike price (USD)" type="number" value={strikePrice} onChange={v => setStrikePrice(Number(v))} step="0.01" />
            <ToolInput label="Current 409A / FMV (USD)" type="number" value={currentFmv} onChange={v => setCurrentFmv(Number(v))} step="0.01" />
            <ToolInput label="Exit multiple on FMV" type="number" value={exitMultiple} onChange={v => setExitMultiple(Number(v))} step="0.1" hint={`Exit price: $${(currentFmv * exitMultiple).toFixed(2)}`} />
            <ToolInput label="Expected dilution (%)" type="number" value={dilutionPct} onChange={v => setDilutionPct(Number(v))} step="1" hint="From future funding rounds" />
          </div>
        </div>

        {/* RSU */}
        <div style={{ background: '#0a1120', border: '1px solid rgba(201,169,110,0.3)', borderRadius: '12px', padding: '18px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#c9a96e', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Public Company RSUs</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ToolInput label="RSU shares" type="number" value={rsuShares} onChange={v => setRsuShares(Number(v))} />
            <ToolInput label="Current stock price (USD)" type="number" value={rsuCurrentPrice} onChange={v => setRsuCurrentPrice(Number(v))} step="0.01" />
            <ToolInput label="Expected annual return (%)" type="number" value={stockReturnPct} onChange={v => setStockReturnPct(Number(v))} step="0.5" />
            <ToolInput label="Hold years" type="number" value={holdYears} onChange={v => setHoldYears(Number(v))} />
            <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
          </div>
        </div>
      </div>

      <ResultCard>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#8b5cf6', fontWeight: '700', marginBottom: '6px' }}>ESOP net (at {exitMultiple}× exit)</div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: '#f1f5f9' }}>{inr(esopNet)}</div>
            <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>Exit price: ${(currentFmv * exitMultiple).toFixed(2)}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#c9a96e', fontWeight: '700', marginBottom: '6px' }}>RSU net (in {holdYears} yrs)</div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: '#f1f5f9' }}>{inr(rsuNet)}</div>
            <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>Price at exit: ${futureRsuPrice.toFixed(2)}</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px' }}>
          <ResultRow label="Better outcome" value={esopNet >= rsuNet ? `ESOP by ${inr(esopNet - rsuNet)}` : `RSU by ${inr(rsuNet - esopNet)}`} highlight green />
          <ResultRow label="ESOP gross (USD)" value={usd(esopGrossUsd)} />
          <ResultRow label="ESOP exercise cost (USD)" value={usd(exerciseCostUsd)} />
          <ResultRow label="ESOP perquisite tax (India)" value={inr(esopTax)} />
          <ResultRow label="ESOP dilution-adjusted shares" value={Math.round(dilutedEsopShares).toLocaleString()} />
          <ResultRow label="RSU capital gains tax" value={inr(rsuCgTax)} />
        </div>
      </ResultCard>

      <Disclaimer>
        Pre-IPO exits are uncertain — dilution, liquidation preferences, and secondary market access vary widely.
        ESOPs carry exercise risk: you pay cash to exercise, and the company may never exit. RSUs are simpler
        but tied to a single public stock. Tax treatment of ESOPs at exercise vs. sale is complex — consult a CA.
      </Disclaimer>
    </div>
  );
}
