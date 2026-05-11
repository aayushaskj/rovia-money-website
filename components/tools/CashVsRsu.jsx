'use client';
import { useState } from 'react';
import { ToolInput, ToolSelect, ResultCard, ResultRow, Disclaimer, TwoCol, inr } from './shared';

export default function CashVsRsu() {
  const [cashBonus, setCashBonus] = useState(5000000);
  const [rsuValueInr, setRsuValueInr] = useState(5000000);
  const [slabRate, setSlabRate] = useState(30);
  const [surcharge, setSurcharge] = useState(15);
  const [stockReturn, setStockReturn] = useState(12);
  const [years, setYears] = useState(4);
  const [cashReturn, setCashReturn] = useState(7);

  const cess = 4;
  const baseTaxCash = cashBonus * (slabRate / 100);
  const surchargeAmtCash = baseTaxCash * (surcharge / 100);
  const cessCash = (baseTaxCash + surchargeAmtCash) * (cess / 100);
  const totalTaxCash = baseTaxCash + surchargeAmtCash + cessCash;
  const netCash = cashBonus - totalTaxCash;
  const cashFv = netCash * Math.pow(1 + cashReturn / 100, years);

  // RSU: perquisite tax at vest, then LTCG at sale
  const perqTax = rsuValueInr * (slabRate / 100) * (1 + surcharge / 100) * (1 + cess / 100);
  const afterPerqRsu = rsuValueInr - perqTax;
  const rsuFvGross = afterPerqRsu * Math.pow(1 + stockReturn / 100, years);
  const gain = rsuFvGross - afterPerqRsu;
  const cgTaxRsu = years >= 2 ? gain * 0.20 : gain * 0.30;
  const rsuFv = rsuFvGross - cgTaxRsu;

  return (
    <div>
      <TwoCol>
        <ToolInput label="Cash bonus (INR)" type="number" value={cashBonus} onChange={v => setCashBonus(Number(v))} />
        <ToolInput label="RSU grant value (INR)" type="number" value={rsuValueInr} onChange={v => setRsuValueInr(Number(v))} hint="Total vest-day value" />
        <ToolSelect
          label="India slab rate"
          value={slabRate}
          onChange={v => setSlabRate(Number(v))}
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
            { value: 0, label: '0%' },
          ]}
        />
        <ToolInput label="Cash invested return (% pa)" type="number" value={cashReturn} onChange={v => setCashReturn(Number(v))} step="0.5" hint="If you invest the net cash" />
        <ToolInput label="Stock expected return (% pa)" type="number" value={stockReturn} onChange={v => setStockReturn(Number(v))} step="0.5" />
        <ToolInput label="Horizon (years)" type="number" value={years} onChange={v => setYears(Number(v))} />
      </TwoCol>

      <ResultCard>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
          <div style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#3b82f6', fontWeight: '700', marginBottom: '8px' }}>Cash bonus in {years} yrs</div>
            <div style={{ fontSize: '26px', fontWeight: '800', color: '#f1f5f9' }}>{inr(cashFv)}</div>
            <div style={{ fontSize: '11px', color: '#475569', marginTop: '6px' }}>Net after tax: {inr(netCash)}</div>
            <div style={{ fontSize: '11px', color: '#475569' }}>Invested at {cashReturn}% pa</div>
          </div>
          <div style={{ background: 'rgba(201,169,110,0.07)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#c9a96e', fontWeight: '700', marginBottom: '8px' }}>RSU in {years} yrs</div>
            <div style={{ fontSize: '26px', fontWeight: '800', color: '#f1f5f9' }}>{inr(rsuFv)}</div>
            <div style={{ fontSize: '11px', color: '#475569', marginTop: '6px' }}>After perq tax: {inr(afterPerqRsu)}</div>
            <div style={{ fontSize: '11px', color: '#475569' }}>Stock at {stockReturn}% pa, {years >= 2 ? '20% LTCG' : '30% STCG'}</div>
          </div>
        </div>
        <ResultRow
          label={`${years}-year winner`}
          value={cashFv >= rsuFv ? `Cash by ${inr(cashFv - rsuFv)}` : `RSU by ${inr(rsuFv - cashFv)}`}
          highlight
          green
        />
        <ResultRow label="Tax on cash bonus" value={inr(totalTaxCash)} />
        <ResultRow label="Perquisite tax on RSU" value={inr(perqTax)} />
        <ResultRow label="Capital gains tax on RSU" value={inr(cgTaxRsu)} />
      </ResultCard>

      <Disclaimer>
        RSU value assumes full grant vests immediately (year 0). In practice vesting is over 4 years — adjust the horizon and grant value accordingly. FX rate change risk not modelled.
      </Disclaimer>
    </div>
  );
}
