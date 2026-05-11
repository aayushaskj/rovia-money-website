'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, TwoCol, inr } from './shared';

const INSTALMENTS = [
  { label: '15 Jun', pct: 15, deadline: 'Jun 15' },
  { label: '15 Sep', pct: 45, deadline: 'Sep 15' },
  { label: '15 Dec', pct: 75, deadline: 'Dec 15' },
  { label: '15 Mar', pct: 100, deadline: 'Mar 15' },
];

export default function AdvanceTax() {
  const [perquisiteInr, setPerquisiteInr] = useState(1400000);
  const [cgInr, setCgInr] = useState(500000);
  const [salaryInr, setSalaryInr] = useState(2000000);
  const [tdsDeducted, setTdsDeducted] = useState(600000);
  const [slabRate, setSlabRate] = useState(30);
  const [cgType, setCgType] = useState('stcg');
  const [surcharge, setSurcharge] = useState(15);

  const totalIncome = perquisiteInr + cgInr + salaryInr;
  const cgTax = cgInr > 0 ? cgInr * (cgType === 'ltcg' ? 0.20 : 0.30) : 0;
  const salaryPerqTax = (perquisiteInr + salaryInr) * (slabRate / 100);
  const surchargeAmt = (salaryPerqTax + cgTax) * (surcharge / 100);
  const cess = (salaryPerqTax + cgTax + surchargeAmt) * 0.04;
  const totalTaxLiability = salaryPerqTax + cgTax + surchargeAmt + cess;
  const netTax = Math.max(0, totalTaxLiability - tdsDeducted);

  return (
    <div>
      <TwoCol>
        <ToolInput label="Salary income (INR)" type="number" value={salaryInr} onChange={v => setSalaryInr(Number(v))} />
        <ToolInput label="RSU perquisite income (INR)" type="number" value={perquisiteInr} onChange={v => setPerquisiteInr(Number(v))} />
        <ToolInput label="Capital gain on sale (INR)" type="number" value={cgInr} onChange={v => setCgInr(Number(v))} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Gain type</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[['stcg', 'STCG 30%'], ['ltcg', 'LTCG 20%']].map(([v, l]) => (
              <button key={v} onClick={() => setCgType(v)} style={{
                flex: 1, padding: '9px', borderRadius: '8px',
                background: cgType === v ? 'rgba(201,169,110,0.15)' : '#0a1120',
                border: `1px solid ${cgType === v ? 'rgba(201,169,110,0.5)' : 'rgba(255,255,255,0.1)'}`,
                color: cgType === v ? '#c9a96e' : '#64748b',
                fontSize: '13px', fontWeight: '600', cursor: 'pointer',
              }}>{l}</button>
            ))}
          </div>
        </div>
        <ToolInput label="TDS already deducted (INR)" type="number" value={tdsDeducted} onChange={v => setTdsDeducted(Number(v))} hint="From salary, RSU withholding etc." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Slab rate / Surcharge</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select value={slabRate} onChange={e => setSlabRate(Number(e.target.value))} style={{ flex: 1, background: '#0a1120', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '9px', color: '#f1f5f9', fontSize: '13px' }}>
              <option value={30}>30%</option>
              <option value={25}>25%</option>
              <option value={20}>20%</option>
            </select>
            <select value={surcharge} onChange={e => setSurcharge(Number(e.target.value))} style={{ flex: 1, background: '#0a1120', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '9px', color: '#f1f5f9', fontSize: '13px' }}>
              <option value={25}>+25%</option>
              <option value={15}>+15%</option>
              <option value={10}>+10%</option>
              <option value={0}>+0%</option>
            </select>
          </div>
        </div>
      </TwoCol>

      <ResultCard>
        <ResultRow label="Total tax liability" value={inr(totalTaxLiability)} />
        <ResultRow label="Less: TDS deducted" value={`− ${inr(tdsDeducted)}`} />
        <ResultRow label="Net advance tax to pay" value={inr(netTax)} highlight />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '14px 0' }} />
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Quarterly instalments</div>
        {INSTALMENTS.map((inst, i) => {
          const cumulative = netTax * (inst.pct / 100);
          const prev = i > 0 ? netTax * (INSTALMENTS[i - 1].pct / 100) : 0;
          const due = cumulative - prev;
          return (
            <div key={inst.label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.03)',
            }}>
              <div>
                <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>{inst.label}</span>
                <span style={{ fontSize: '11px', color: '#334155', marginLeft: '8px' }}>{inst.pct}% cumulative</span>
              </div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#c9a96e' }}>{inr(due)}</span>
            </div>
          );
        })}
      </ResultCard>

      <Disclaimer>
        If advance tax paid is less than 90% of tax due, interest under Sections 234B and 234C applies.
        These are estimates only — your CA should prepare the final advance tax computation.
      </Disclaimer>
    </div>
  );
}
