'use client';
import { useState } from 'react';
import { ToolInput, ToolSelect, ResultCard, ResultRow, Disclaimer, TwoCol, inr, usd } from './shared';

export default function NetTakeHome() {
  const [shares, setShares] = useState(50);
  const [vestPrice, setVestPrice] = useState(160);
  const [salarySlabRate, setSalarySlabRate] = useState(30);
  const [holdMonths, setHoldMonths] = useState(0);
  const [salePrice, setSalePrice] = useState(160);
  const [fxRate, setFxRate] = useState(84);
  const [fxMarkup, setFxMarkup] = useState(1.5);
  const [withholding, setWithholding] = useState(37);

  const vestValueUsd = shares * vestPrice;
  const perquisiteInr = vestValueUsd * fxRate;

  // Perquisite tax
  const perqTax = perquisiteInr * (salarySlabRate / 100);
  const usWithholding = perquisiteInr * (withholding / 100);
  const ftcCredit = Math.min(usWithholding, perqTax);
  const netPerqTax = Math.max(0, perqTax - ftcCredit);

  // Capital gains
  const gainUsd = (salePrice - vestPrice) * shares;
  const gainInr = gainUsd * fxRate;
  const isLtcg = holdMonths >= 24;
  const cgTaxRate = gainInr > 0 ? (isLtcg ? 0.20 : 0.30) : 0;
  const cgTax = gainInr > 0 ? gainInr * cgTaxRate : 0;

  // FX
  const saleValueUsd = shares * salePrice;
  const fxCost = saleValueUsd * fxRate * (fxMarkup / 100);
  const netInr = saleValueUsd * fxRate - netPerqTax - cgTax - fxCost;

  const effectiveRate = (1 - netInr / (saleValueUsd * fxRate)) * 100;

  return (
    <div>
      <TwoCol>
        <ToolInput label="Shares vested" type="number" value={shares} onChange={v => setShares(Number(v))} />
        <ToolInput label="Vest-day price (USD)" type="number" value={vestPrice} onChange={v => setVestPrice(Number(v))} step="0.01" />
        <ToolInput label="Sale price (USD)" type="number" value={salePrice} onChange={v => setSalePrice(Number(v))} step="0.01" />
        <ToolInput label="Months held before sale" type="number" value={holdMonths} onChange={v => setHoldMonths(Number(v))} />
        <ToolSelect
          label="India income slab rate"
          value={salarySlabRate}
          onChange={v => setSalarySlabRate(Number(v))}
          options={[
            { value: 30, label: '30% (>₹15L)' },
            { value: 25, label: '25% (₹12–15L)' },
            { value: 20, label: '20% (₹9–12L)' },
          ]}
        />
        <ToolInput label="US withholding at vest (%)" type="number" value={withholding} onChange={v => setWithholding(Number(v))} step="0.1" hint="Shown on your broker statement" />
        <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
        <ToolInput label="FX markup (%)" type="number" value={fxMarkup} onChange={v => setFxMarkup(Number(v))} step="0.1" hint="0% with Rovia, ~1.5% typical bank" />
      </TwoCol>

      <ResultCard>
        <ResultRow label="Vest-day value (USD)" value={usd(vestValueUsd)} />
        <ResultRow label="Vest-day value (INR)" value={inr(perquisiteInr)} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label={`Perquisite tax (${salarySlabRate}% slab)`} value={inr(perqTax)} />
        <ResultRow label="US withholding (FTC credit)" value={`− ${inr(ftcCredit)}`} />
        <ResultRow label="Net perquisite tax owed" value={inr(netPerqTax)} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label={`Capital gain (${isLtcg ? 'LTCG 20%' : 'STCG 30%'})`} value={inr(cgTax)} />
        <ResultRow label={`FX cost (${fxMarkup}% markup)`} value={inr(fxCost)} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="Net INR in hand" value={inr(netInr)} highlight green={netInr > 0} />
        <ResultRow label="Effective leakage" value={effectiveRate.toFixed(1) + '%'} />
      </ResultCard>

      <Disclaimer>
        FTC (foreign tax credit) reduces India perquisite tax up to the India liability. Capital gains tax is
        on the gain above vest price only. FX cost shown is on the sale proceeds, not the gain.
      </Disclaimer>
    </div>
  );
}
