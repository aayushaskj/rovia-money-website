'use client';
import { useState } from 'react';
import { ToolInput, Disclaimer, TwoCol, inr, usd } from './shared';

const FIELDS = [
  { id: 'country', label: 'Country where asset is held', example: 'United States', type: 'text' },
  { id: 'nature', label: 'Nature of asset', example: 'Equity shares / RSU', type: 'text' },
  { id: 'entity', label: 'Name of entity / company', example: 'Google LLC / Meta Platforms Inc', type: 'text' },
  { id: 'accountNo', label: 'Account / folio number', example: 'E*TRADE account number', type: 'text' },
  { id: 'openingBal', label: 'Opening balance (shares or USD)', example: '100 shares or $12,000', type: 'text' },
  { id: 'acquisitions', label: 'Acquisitions during year', example: 'Vest events: 25 shares × 4 quarters', type: 'text' },
  { id: 'disposals', label: 'Disposals during year', example: 'Sold 50 shares on 15-Feb-2026', type: 'text' },
  { id: 'closingBal', label: 'Closing balance (31 March)', example: '75 shares or $13,500', type: 'text' },
  { id: 'peakValue', label: 'Peak value during year (INR)', example: '₹12,50,000', type: 'text' },
];

export default function ScheduleFa() {
  const [data, setData] = useState({});
  const [checked, setChecked] = useState({});

  const checklistItems = [
    'Identify ALL foreign accounts / brokerages (Schwab, E*TRADE, Fidelity, etc.)',
    'Note each vest event date and FMV in USD',
    'Convert USD values to INR using SBI TT buying rate on each transaction date',
    'Include both direct RSU accounts and any US bank accounts holding proceeds',
    'If you have options (ISO/ESOP), include the option account separately',
    'Note peak value during the Indian tax year (1 Apr – 31 Mar)',
    'Collect ISIN / security identifier for each holding',
    'Include unvested RSUs? (CBDT guidance: disclose if you have beneficial interest)',
    'Brokerage account statements for the full FY downloaded',
    'Form 67 filed BEFORE ITR (mandatory to claim FTC)',
    'Form 15CB + 15CA filed if repatriation > ₹10L in year',
  ];

  return (
    <div>
      <div style={{
        background: 'rgba(201,169,110,0.07)',
        border: '1px solid rgba(201,169,110,0.2)',
        borderRadius: '10px',
        padding: '16px',
        marginBottom: '20px',
        fontSize: '13px',
        color: '#94a3b8',
        lineHeight: 1.6,
      }}>
        <strong style={{ color: '#c9a96e' }}>Schedule FA</strong> is mandatory in your India ITR if you hold any
        foreign asset at any point during the Indian FY (1 April – 31 March). Non-disclosure can attract
        penalty of <strong style={{ color: '#f1f5f9' }}>₹10 lakh per year</strong> under the Black Money Act.
      </div>

      {/* Checklist */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#f1f5f9', marginBottom: '12px' }}>
          Pre-filing checklist
        </div>
        {checklistItems.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: '12px',
            padding: '10px 14px',
            background: checked[i] ? 'rgba(52,211,153,0.06)' : '#0a1120',
            border: `1px solid ${checked[i] ? 'rgba(52,211,153,0.2)' : 'rgba(255,255,255,0.06)'}`,
            borderRadius: '8px',
            marginBottom: '6px',
            cursor: 'pointer',
            transition: 'all 0.15s',
          }} onClick={() => setChecked(c => ({ ...c, [i]: !c[i] }))}>
            <div style={{
              width: '18px', height: '18px', borderRadius: '4px', flexShrink: 0,
              background: checked[i] ? '#34d399' : 'rgba(255,255,255,0.06)',
              border: `1px solid ${checked[i] ? '#34d399' : 'rgba(255,255,255,0.15)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginTop: '1px',
            }}>
              {checked[i] && <span style={{ fontSize: '11px', color: '#0a1120', fontWeight: '800' }}>✓</span>}
            </div>
            <span style={{ fontSize: '13px', color: checked[i] ? '#64748b' : '#94a3b8', lineHeight: 1.5, textDecoration: checked[i] ? 'line-through' : 'none' }}>
              {item}
            </span>
          </div>
        ))}
        <div style={{ fontSize: '12px', color: '#475569', marginTop: '8px', textAlign: 'right' }}>
          {Object.values(checked).filter(Boolean).length} / {checklistItems.length} completed
        </div>
      </div>

      {/* Data entry helper */}
      <div style={{ fontSize: '13px', fontWeight: '700', color: '#f1f5f9', marginBottom: '12px' }}>
        Schedule FA data helper
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {FIELDS.map((f) => (
          <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>{f.label}</label>
            <input
              type={f.type}
              placeholder={f.example}
              value={data[f.id] || ''}
              onChange={e => setData(d => ({ ...d, [f.id]: e.target.value }))}
              style={{
                background: '#0a1120', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px', padding: '9px 12px',
                color: '#f1f5f9', fontSize: '13px', width: '100%', boxSizing: 'border-box',
              }}
            />
          </div>
        ))}
      </div>

      <Disclaimer>
        This is a data-gathering helper only. The actual Schedule FA table in ITR-2/ITR-3 must be
        filled accurately. Consult a CA familiar with foreign asset disclosures.
      </Disclaimer>
    </div>
  );
}
