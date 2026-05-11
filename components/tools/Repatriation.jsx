'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, inr, usd } from './shared';

const LRS_LIMIT_USD = 250000;
const FEMA_LIMIT_USD = 1000000;

export default function Repatriation() {
  const [annualSaleUsd, setAnnualSaleUsd] = useState(25000);
  const [currentFyUsd, setCurrentFyUsd] = useState(0);
  const [fxRate, setFxRate] = useState(84);
  const [transfersPerYear, setTransfersPerYear] = useState(4);

  const fyEndMar = new Date(new Date().getFullYear(), 2, 31);
  const today = new Date();
  const daysLeftInFy = Math.max(0, Math.floor((fyEndMar - today) / 86400000));

  const totalIfSold = currentFyUsd + annualSaleUsd;
  const lrsHeadroom = Math.max(0, LRS_LIMIT_USD - currentFyUsd);
  const lrsExcess = Math.max(0, totalIfSold - LRS_LIMIT_USD);

  const repatriatePerTransfer = annualSaleUsd / transfersPerYear;
  const txc15cbNeeded = annualSaleUsd * fxRate > 10000000; // 1 crore INR threshold

  const quarters = ['Q1 (Apr-Jun)', 'Q2 (Jul-Sep)', 'Q3 (Oct-Dec)', 'Q4 (Jan-Mar)'];

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        <ToolInput label="RSU proceeds to repatriate this FY (USD)" type="number" value={annualSaleUsd} onChange={v => setAnnualSaleUsd(Number(v))} />
        <ToolInput label="Already repatriated this FY (USD)" type="number" value={currentFyUsd} onChange={v => setCurrentFyUsd(Number(v))} />
        <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
        <ToolInput label="Number of transfers planned" type="number" value={transfersPerYear} onChange={v => setTransfersPerYear(Number(v))} />
      </div>

      {/* Status banner */}
      <div style={{
        background: lrsExcess > 0 ? 'rgba(248,113,113,0.08)' : 'rgba(52,211,153,0.07)',
        border: `1px solid ${lrsExcess > 0 ? 'rgba(248,113,113,0.25)' : 'rgba(52,211,153,0.2)'}`,
        borderRadius: '10px',
        padding: '16px',
        marginBottom: '16px',
      }}>
        <div style={{ fontSize: '14px', fontWeight: '700', color: lrsExcess > 0 ? '#f87171' : '#34d399', marginBottom: '6px' }}>
          {lrsExcess > 0
            ? `⚠️ Exceeds LRS limit by $${Math.round(lrsExcess).toLocaleString()}`
            : '✓ Within LRS limit for this FY'}
        </div>
        <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>
          LRS allows up to $250,000 per FY. You have ${Math.round(lrsHeadroom).toLocaleString()} headroom remaining.
          {lrsExcess > 0 && ' Consider deferring some repatriation to next FY.'}
        </div>
      </div>

      <ResultCard>
        <ResultRow label="Total to repatriate this FY" value={usd(annualSaleUsd)} />
        <ResultRow label="LRS headroom remaining" value={usd(lrsHeadroom)} highlight={lrsHeadroom < 50000} />
        <ResultRow label="LRS excess (to defer/split)" value={lrsExcess > 0 ? usd(lrsExcess) : 'None'} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="Per-transfer amount" value={usd(repatriatePerTransfer)} />
        <ResultRow label="INR value of total" value={inr(annualSaleUsd * fxRate)} />
        <ResultRow label="Days left in current FY" value={`${daysLeftInFy} days`} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow
          label="Form 15CA/15CB required?"
          value={txc15cbNeeded ? 'Likely yes (> ₹10L)' : 'Likely no (< ₹10L)'}
          highlight={txc15cbNeeded}
        />
      </ResultCard>

      {/* Quarterly schedule */}
      <div style={{ marginTop: '16px' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#f1f5f9', marginBottom: '12px' }}>Suggested quarterly schedule</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {quarters.map((q, i) => (
            <div key={q} style={{
              background: '#0a1120', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '8px', padding: '12px 14px',
            }}>
              <div style={{ fontSize: '11px', color: '#475569', fontWeight: '700', marginBottom: '4px' }}>{q}</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#c9a96e' }}>
                {usd(annualSaleUsd / 4)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Disclaimer>
        LRS = Liberalised Remittance Scheme. The $250,000 annual limit includes all foreign remittances
        (investments, travel, maintenance). FEMA rules apply. Form 15CA/CB thresholds depend on the
        nature of remittance. Always check with your CA and bank's forex desk.
      </Disclaimer>
    </div>
  );
}
