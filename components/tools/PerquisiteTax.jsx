'use client';
import { useState } from 'react';
import { ToolInput, ToolSelect, ResultCard, ResultRow, Disclaimer, TwoCol, inr, usd } from './shared';

export default function PerquisiteTax() {
  const [shares, setShares] = useState(50);
  const [vestPrice, setVestPrice] = useState(160);
  const [fxRate, setFxRate] = useState(84);
  const [slabRate, setSlabRate] = useState(30);
  const [surcharge, setSurcharge] = useState(15);
  const [usWithheld, setUsWithheld] = useState(37);
  const [cess, setCess] = useState(4);

  const perquisiteValueUsd = shares * vestPrice;
  const perquisiteValueInr = perquisiteValueUsd * fxRate;

  // Tax calculation
  const baseTax = perquisiteValueInr * (slabRate / 100);
  const surchargeAmt = baseTax * (surcharge / 100);
  const grossTax = baseTax + surchargeAmt;
  const cessAmt = grossTax * (cess / 100);
  const totalTax = grossTax + cessAmt;
  const effectiveRate = (totalTax / perquisiteValueInr) * 100;

  // US withholding (FTC)
  const usWithheldInr = perquisiteValueInr * (usWithheld / 100);
  const ftcCredit = Math.min(usWithheldInr, totalTax);
  const netIndiaTax = Math.max(0, totalTax - ftcCredit);

  // Per-share breakdown
  const taxPerShare = totalTax / shares;
  const netPerShare = vestPrice * fxRate - taxPerShare;

  return (
    <div>
      <TwoCol>
        <ToolInput label="Shares vesting" type="number" value={shares} onChange={v => setShares(Number(v))} />
        <ToolInput label="Vest-day FMV (USD)" type="number" value={vestPrice} onChange={v => setVestPrice(Number(v))} step="0.01" hint="Fair market value on vest date" />
        <ToolInput label="USD/INR on vest date" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" hint="SBI TT buying rate recommended" />
        <ToolSelect
          label="India income slab rate"
          value={slabRate}
          onChange={v => setSlabRate(Number(v))}
          options={[
            { value: 30, label: '30% (income > ₹15L)' },
            { value: 25, label: '25% (₹12–15L)' },
            { value: 20, label: '20% (₹9–12L)' },
            { value: 15, label: '15% (₹6–9L)' },
          ]}
        />
        <ToolSelect
          label="Surcharge rate"
          value={surcharge}
          onChange={v => setSurcharge(Number(v))}
          options={[
            { value: 25, label: '25% (income > ₹5Cr)' },
            { value: 15, label: '15% (₹2–5Cr)' },
            { value: 10, label: '10% (₹1–2Cr)' },
            { value: 0,  label: '0% (< ₹50L)' },
          ]}
        />
        <ToolInput label="US withholding at vest (%)" type="number" value={usWithheld} onChange={v => setUsWithheld(Number(v))} step="0.5" hint="Typically 22–37%; see your pay stub" />
      </TwoCol>

      <ResultCard>
        <ResultRow label="Perquisite value (USD)" value={usd(perquisiteValueUsd)} />
        <ResultRow label="Perquisite value (INR)" value={inr(perquisiteValueInr)} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label={`Base tax (${slabRate}%)`} value={inr(baseTax)} />
        {surcharge > 0 && <ResultRow label={`Surcharge (${surcharge}%)`} value={inr(surchargeAmt)} />}
        <ResultRow label={`Health & education cess (${cess}%)`} value={inr(cessAmt)} />
        <ResultRow label="Gross India tax" value={inr(totalTax)} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="US withholding (FTC credit)" value={`− ${inr(ftcCredit)}`} />
        <ResultRow label="Net India tax payable" value={inr(netIndiaTax)} highlight />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="Effective perquisite tax rate" value={effectiveRate.toFixed(1) + '%'} />
        <ResultRow label="Tax per share" value={inr(taxPerShare)} />
        <ResultRow label="Net INR received per share (after perq tax)" value={inr(netPerShare)} />
      </ResultCard>

      <Disclaimer>
        Perquisite tax is added to your India salary income in the year of vest. The FX rate used should
        be the SBI TT buying rate on the vest date per CBDT rules. Form 67 must be filed to claim FTC.
      </Disclaimer>
    </div>
  );
}
