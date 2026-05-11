'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, inr } from './shared';

function calcGrantValue(grantUsd, cliff, total, stockReturn, holdYears, fxRate) {
  let totalInr = 0;
  const perVest = grantUsd / total;
  for (let i = cliff; i <= total; i++) {
    const yearsFwd = (i / total) * holdYears;
    const vestedUsd = perVest;
    const priceMultiplier = Math.pow(1 + stockReturn / 100, yearsFwd);
    totalInr += vestedUsd * priceMultiplier * fxRate;
  }
  return totalInr;
}

export default function GrantCompare() {
  const [g1Value, setG1Value] = useState(200000);
  const [g1Vests, setG1Vests] = useState(16);
  const [g1Cliff, setG1Cliff] = useState(4);
  const [g2Value, setG2Value] = useState(160000);
  const [g2Vests, setG2Vests] = useState(12);
  const [g2Cliff, setG2Cliff] = useState(3);
  const [stockReturn, setStockReturn] = useState(10);
  const [fxRate, setFxRate] = useState(84);

  const holdYears = 4;

  const v1 = calcGrantValue(g1Value, g1Cliff, g1Vests, stockReturn, holdYears, fxRate);
  const v2 = calcGrantValue(g2Value, g2Cliff, g2Vests, stockReturn, holdYears, fxRate);

  const perUsdInr1 = v1 / g1Value;
  const perUsdInr2 = v2 / g2Value;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        {/* Grant 1 */}
        <div style={{ background: '#0a1120', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '12px', padding: '18px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#3b82f6', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Grant A</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ToolInput label="Grant value (USD)" type="number" value={g1Value} onChange={v => setG1Value(Number(v))} />
            <ToolInput label="Total vest tranches" type="number" value={g1Vests} onChange={v => setG1Vests(Number(v))} hint="e.g. 16 = quarterly over 4 years" />
            <ToolInput label="Cliff (tranches)" type="number" value={g1Cliff} onChange={v => setG1Cliff(Number(v))} hint="e.g. 4 = 1-year cliff" />
          </div>
        </div>

        {/* Grant 2 */}
        <div style={{ background: '#0a1120', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px', padding: '18px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#8b5cf6', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Grant B</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ToolInput label="Grant value (USD)" type="number" value={g2Value} onChange={v => setG2Value(Number(v))} />
            <ToolInput label="Total vest tranches" type="number" value={g2Vests} onChange={v => setG2Vests(Number(v))} />
            <ToolInput label="Cliff (tranches)" type="number" value={g2Cliff} onChange={v => setG2Cliff(Number(v))} />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 200px' }}>
          <ToolInput label="Expected stock return (% pa)" type="number" value={stockReturn} onChange={v => setStockReturn(Number(v))} step="0.5" />
        </div>
        <div style={{ flex: '0 0 180px' }}>
          <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
        </div>
      </div>

      <ResultCard>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#3b82f6', fontWeight: '700', marginBottom: '6px' }}>Grant A — 4yr value</div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: '#f1f5f9' }}>{inr(v1)}</div>
            <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>₹{perUsdInr1.toFixed(0)} per $1 granted</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#8b5cf6', fontWeight: '700', marginBottom: '6px' }}>Grant B — 4yr value</div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: '#f1f5f9' }}>{inr(v2)}</div>
            <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>₹{perUsdInr2.toFixed(0)} per $1 granted</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px' }}>
          <ResultRow
            label="Better grant (net INR over 4 years)"
            value={v1 >= v2 ? `Grant A by ${inr(v1 - v2)}` : `Grant B by ${inr(v2 - v1)}`}
            highlight
            green
          />
          <ResultRow label="Grant A ÷ Grant B (face value)" value={(g1Value / g2Value).toFixed(2) + 'x'} />
          <ResultRow label="Grant A ÷ Grant B (INR value)" value={(v1 / v2).toFixed(2) + 'x'} />
        </div>
      </ResultCard>

      <Disclaimer>
        Assumes uniform vesting; ignores perquisite tax at vest and capital gains on sale.
        Cliff means you receive nothing until the cliff tranches complete.
      </Disclaimer>
    </div>
  );
}
