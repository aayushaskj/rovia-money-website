'use client';
import { useState } from 'react';
import { ToolInput, ToolSelect, ResultCard, ResultRow, Disclaimer, TwoCol, inr } from './shared';

export default function Form67() {
  const [perquisiteInr, setPerquisiteInr] = useState(1400000);
  const [usWithheldPct, setUsWithheldPct] = useState(37);
  const [indiaSlabRate, setIndiaSlabRate] = useState(30);
  const [surcharge, setSurcharge] = useState(15);
  const [capitalGainInr, setCapitalGainInr] = useState(500000);
  const [cgType, setCgType] = useState('stcg');
  const [usCgWithheld, setUsCgWithheld] = useState(0);

  // Perquisite FTC
  const usWithheldInr = perquisiteInr * (usWithheldPct / 100);
  const baseTax = perquisiteInr * (indiaSlabRate / 100);
  const surchargeAmt = baseTax * (surcharge / 100);
  const cess = (baseTax + surchargeAmt) * 0.04;
  const indiaTaxOnPerquisite = baseTax + surchargeAmt + cess;
  const perqFtc = Math.min(usWithheldInr, indiaTaxOnPerquisite);
  const netPerqTax = Math.max(0, indiaTaxOnPerquisite - perqFtc);

  // Capital gains FTC
  const cgTaxRate = cgType === 'ltcg' ? 0.20 : 0.30;
  const indiaCgTax = capitalGainInr > 0 ? capitalGainInr * cgTaxRate : 0;
  const cgFtcEligible = Math.min(usCgWithheld, indiaCgTax);
  const netCgTax = Math.max(0, indiaCgTax - cgFtcEligible);

  const totalFtcClaimed = perqFtc + cgFtcEligible;
  const totalNetTax = netPerqTax + netCgTax;

  return (
    <div>
      <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px', lineHeight: 1.6 }}>
        Form 67 must be filed <strong style={{ color: '#f1f5f9' }}>before</strong> you file your ITR to claim Foreign Tax Credit.
        It allows you to offset US taxes withheld against India tax on the same income.
      </p>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Perquisite income (vest-day)</div>
        <TwoCol>
          <ToolInput label="Perquisite value (INR)" type="number" value={perquisiteInr} onChange={v => setPerquisiteInr(Number(v))} />
          <ToolInput label="US withholding at vest (%)" type="number" value={usWithheldPct} onChange={v => setUsWithheldPct(Number(v))} step="0.5" />
          <ToolSelect
            label="India slab rate"
            value={indiaSlabRate}
            onChange={v => setIndiaSlabRate(Number(v))}
            options={[
              { value: 30, label: '30%' },
              { value: 25, label: '25%' },
              { value: 20, label: '20%' },
            ]}
          />
          <ToolSelect
            label="Surcharge"
            value={surcharge}
            onChange={v => setSurcharge(Number(v))}
            options={[
              { value: 25, label: '25%' },
              { value: 15, label: '15%' },
              { value: 10, label: '10%' },
              { value: 0,  label: '0%' },
            ]}
          />
        </TwoCol>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Capital gains (sale)</div>
        <TwoCol>
          <ToolInput label="Capital gain (INR)" type="number" value={capitalGainInr} onChange={v => setCapitalGainInr(Number(v))} />
          <ToolSelect
            label="Gain type"
            value={cgType}
            onChange={setCgType}
            options={[
              { value: 'stcg', label: 'STCG (< 24 months) — 30%' },
              { value: 'ltcg', label: 'LTCG (≥ 24 months) — 20%' },
            ]}
          />
          <ToolInput label="US tax withheld on sale (%)" type="number" value={usCgWithheld} onChange={v => setUsCgWithheld(Number(v))} step="0.5" hint="Usually 0 for stock sales" />
        </TwoCol>
      </div>

      <ResultCard>
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>Form 67 FTC Summary</div>
        <ResultRow label="India tax on perquisite" value={inr(indiaTaxOnPerquisite)} />
        <ResultRow label="FTC claimed on perquisite" value={`− ${inr(perqFtc)}`} />
        <ResultRow label="Net India perquisite tax" value={inr(netPerqTax)} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label={`India tax on capital gain (${cgType.toUpperCase()})`} value={inr(indiaCgTax)} />
        <ResultRow label="FTC claimed on capital gain" value={`− ${inr(cgFtcEligible)}`} />
        <ResultRow label="Net India CG tax" value={inr(netCgTax)} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="Total FTC to claim in Form 67" value={inr(totalFtcClaimed)} highlight />
        <ResultRow label="Total net India tax after FTC" value={inr(totalNetTax)} highlight />
      </ResultCard>

      <Disclaimer>
        FTC is limited to the lower of: (a) Indian tax on that income or (b) foreign tax paid.
        File Form 67 before the ITR due date (typically 31 July or 31 Oct with audit). Consult a CA.
      </Disclaimer>
    </div>
  );
}
