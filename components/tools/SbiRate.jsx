'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, inr } from './shared';

export default function SbiRate() {
  const [midRate, setMidRate] = useState(84.00);
  const [amountUsd, setAmountUsd] = useState(10000);
  const [txType, setTxType] = useState('tt-buying');

  // SBI typical spreads (illustrative, updated quarterly)
  const spreads = {
    'tt-buying':    { label: 'TT Buying (you sell USD)', spread: -0.35, useFor: 'Inward remittances to India (repatriation)' },
    'tt-selling':   { label: 'TT Selling (you buy USD)', spread: +0.50, useFor: 'Outward remittances from India' },
    'bc-buying':    { label: 'BC/DD Buying',             spread: -0.50, useFor: 'Demand drafts in USD' },
    'card-rate':    { label: 'Card rate (retail)',        spread: +1.00, useFor: 'Forex cards / retail purchases' },
  };

  const selected = spreads[txType];
  const sbiRate = midRate + selected.spread;
  const inrReceived = amountUsd * sbiRate;
  const inrAtMid = amountUsd * midRate;
  const loss = inrAtMid - inrReceived;
  const lossPct = (Math.abs(selected.spread) / midRate) * 100;

  const roviaRate = midRate;
  const roviaInr = amountUsd * roviaRate;
  const savingWithRovia = Math.abs(inrAtMid - inrReceived);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', marginBottom: '8px', display: 'block' }}>Transaction type</label>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {Object.entries(spreads).map(([key, val]) => (
            <button key={key} onClick={() => setTxType(key)} style={{
              padding: '8px 14px', borderRadius: '8px',
              background: txType === key ? 'rgba(201,169,110,0.15)' : '#0a1120',
              border: `1px solid ${txType === key ? 'rgba(201,169,110,0.5)' : 'rgba(255,255,255,0.1)'}`,
              color: txType === key ? '#c9a96e' : '#64748b',
              fontSize: '13px', fontWeight: '600', cursor: 'pointer',
            }}>{val.label}</button>
          ))}
        </div>
        <div style={{ fontSize: '12px', color: '#475569', marginTop: '8px' }}>{selected.useFor}</div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 200px' }}>
          <ToolInput label="Amount (USD)" type="number" value={amountUsd} onChange={v => setAmountUsd(Number(v))} />
        </div>
        <div style={{ flex: '0 0 200px' }}>
          <ToolInput label="Mid-market rate (₹/$)" type="number" value={midRate} onChange={v => setMidRate(Number(v))} step="0.01" hint="Check Google or XE for live rate" />
        </div>
      </div>

      <ResultCard>
        <ResultRow label="Mid-market rate" value={`₹${midRate.toFixed(2)}/$`} />
        <ResultRow label={`SBI ${selected.label} rate`} value={`₹${sbiRate.toFixed(2)}/$`} />
        <ResultRow label="Spread" value={`${selected.spread > 0 ? '+' : ''}₹${selected.spread.toFixed(2)} (${lossPct.toFixed(2)}%)`} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="INR at mid-market" value={inr(inrAtMid)} />
        <ResultRow label={`INR via SBI (${selected.label})`} value={inr(inrReceived)} />
        <ResultRow label="Lost to SBI spread" value={`− ${inr(Math.abs(loss))}`} highlight />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="Rovia rate (0% markup)" value={`₹${roviaRate.toFixed(2)}/$`} />
        <ResultRow label="INR via Rovia" value={inr(roviaInr)} highlight green />
        <ResultRow label="Saving with Rovia vs SBI" value={`+ ${inr(savingWithRovia)}`} highlight green />
      </ResultCard>

      <Disclaimer>
        SBI TT rates change daily. This is an illustration based on historical typical spreads.
        The SBI TT buying rate on the vest date is the CBDT-recommended FX rate for perquisite tax computation.
      </Disclaimer>
    </div>
  );
}
