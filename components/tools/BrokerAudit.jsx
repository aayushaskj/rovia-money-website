'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, inr } from './shared';

const BROKERS = [
  {
    name: 'Rovia',
    fxMarkup: 0,
    withdrawalFeeInr: 0,
    custodyFeeAnnualPct: 0,
    perTradeInr: 0,
    color: '#c9a96e',
    highlight: true,
  },
  {
    name: 'Zerodha',
    fxMarkup: 1.0,
    withdrawalFeeInr: 1500,
    custodyFeeAnnualPct: 0,
    perTradeInr: 20,
    color: '#3b82f6',
  },
  {
    name: 'ICICI Direct',
    fxMarkup: 1.5,
    withdrawalFeeInr: 2500,
    custodyFeeAnnualPct: 0.05,
    perTradeInr: 0,
    color: '#8b5cf6',
  },
  {
    name: 'HDFC Securities',
    fxMarkup: 1.5,
    withdrawalFeeInr: 2200,
    custodyFeeAnnualPct: 0.05,
    perTradeInr: 0,
    color: '#06b6d4',
  },
  {
    name: 'US Broker (avg)',
    fxMarkup: 2.5,
    withdrawalFeeInr: 4000,
    custodyFeeAnnualPct: 0,
    perTradeInr: 100,
    color: '#64748b',
  },
];

export default function BrokerAudit() {
  const [portfolioUsd, setPortfolioUsd] = useState(50000);
  const [withdrawalsPerYear, setWithdrawalsPerYear] = useState(4);
  const [tradesPerYear, setTradesPerYear] = useState(8);
  const [fxRate, setFxRate] = useState(84);

  const portfolioInr = portfolioUsd * fxRate;
  const annualWithdrawInr = portfolioInr;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        <ToolInput label="Portfolio value (USD)" type="number" value={portfolioUsd} onChange={v => setPortfolioUsd(Number(v))} />
        <ToolInput label="USD/INR rate" type="number" value={fxRate} onChange={v => setFxRate(Number(v))} step="0.01" />
        <ToolInput label="Withdrawals/repatriations per year" type="number" value={withdrawalsPerYear} onChange={v => setWithdrawalsPerYear(Number(v))} />
        <ToolInput label="Trades per year" type="number" value={tradesPerYear} onChange={v => setTradesPerYear(Number(v))} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {BROKERS.map((b) => {
          const fxCost = annualWithdrawInr * (b.fxMarkup / 100);
          const withdrawalCost = b.withdrawalFeeInr * withdrawalsPerYear;
          const custodyCost = portfolioInr * (b.custodyFeeAnnualPct / 100);
          const tradeCost = b.perTradeInr * tradesPerYear;
          const totalCost = fxCost + withdrawalCost + custodyCost + tradeCost;
          const roviaTotal = 0; // Rovia is 0
          const saving = totalCost - roviaTotal;

          return (
            <div key={b.name} style={{
              background: b.highlight ? 'rgba(201,169,110,0.07)' : '#0f1828',
              border: `1px solid ${b.highlight ? 'rgba(201,169,110,0.3)' : 'rgba(255,255,255,0.07)'}`,
              borderRadius: '12px',
              padding: '16px 20px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: b.color, display: 'inline-block' }} />
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#f1f5f9' }}>{b.name}</span>
                  {b.highlight && (
                    <span style={{ fontSize: '10px', background: 'rgba(201,169,110,0.2)', color: '#c9a96e', borderRadius: '999px', padding: '2px 8px', fontWeight: '700' }}>BEST</span>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: totalCost === 0 ? '#34d399' : '#f87171' }}>
                    {totalCost === 0 ? '₹0' : `− ${inr(totalCost)}`}
                  </div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>per year</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '12px', color: '#475569' }}>
                {b.fxMarkup > 0 && <span>FX: {inr(fxCost)}</span>}
                {b.withdrawalFeeInr > 0 && <span>Wire: {inr(withdrawalCost)}</span>}
                {b.custodyFeeAnnualPct > 0 && <span>Custody: {inr(custodyCost)}</span>}
                {b.perTradeInr > 0 && <span>Trades: {inr(tradeCost)}</span>}
                {totalCost === 0 && <span style={{ color: '#34d399' }}>No fees</span>}
              </div>
            </div>
          );
        })}
      </div>

      <Disclaimer>
        Annual cost comparison based on your portfolio size and activity. FX cost applied on total portfolio value withdrawn per year. Actual fees vary — verify with your broker.
      </Disclaimer>
    </div>
  );
}
