'use client';
import { useState } from 'react';
import { ToolInput, ResultCard, ResultRow, Disclaimer, TwoCol, inr } from './shared';

// Cost Inflation Index (CII) values — update as CBDT releases new values
const CII = {
  '2001-02': 100, '2002-03': 105, '2003-04': 109, '2004-05': 113, '2005-06': 117,
  '2006-07': 122, '2007-08': 129, '2008-09': 137, '2009-10': 148, '2010-11': 167,
  '2011-12': 184, '2012-13': 200, '2013-14': 220, '2014-15': 240, '2015-16': 254,
  '2016-17': 264, '2017-18': 272, '2018-19': 280, '2019-20': 289, '2020-21': 301,
  '2021-22': 317, '2022-23': 331, '2023-24': 348, '2024-25': 363, '2025-26': 380,
};

const FY_OPTIONS = Object.keys(CII).sort().reverse();

export default function Indexation() {
  const [assetType, setAssetType] = useState('foreign-equity');
  const [purchaseFy, setPurchaseFy] = useState('2022-23');
  const [saleFy, setSaleFy] = useState('2025-26');
  const [costInr, setCostInr] = useState(500000);
  const [saleInr, setSaleInr] = useState(800000);

  const isIndexationAllowed = assetType !== 'foreign-equity';

  const ciiBuy = CII[purchaseFy] || 100;
  const ciiSale = CII[saleFy] || 380;

  const indexedCost = isIndexationAllowed ? costInr * (ciiSale / ciiBuy) : costInr;
  const gainWithout = saleInr - costInr;
  const gainWith = saleInr - indexedCost;

  const taxWithout = gainWithout > 0 ? gainWithout * 0.20 : 0;
  const taxWith = isIndexationAllowed && gainWith > 0 ? gainWith * 0.20 : taxWithout;
  const taxSaving = taxWithout - taxWith;

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', marginBottom: '8px', display: 'block' }}>Asset type</label>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { v: 'foreign-equity', l: 'Foreign equity (RSU)' },
            { v: 'indian-debt', l: 'Indian debt fund' },
            { v: 'real-estate', l: 'Real estate' },
          ].map(({ v, l }) => (
            <button key={v} onClick={() => setAssetType(v)} style={{
              padding: '8px 16px', borderRadius: '8px',
              background: assetType === v ? 'rgba(201,169,110,0.15)' : '#0a1120',
              border: `1px solid ${assetType === v ? 'rgba(201,169,110,0.5)' : 'rgba(255,255,255,0.1)'}`,
              color: assetType === v ? '#c9a96e' : '#64748b',
              fontSize: '13px', fontWeight: '600', cursor: 'pointer',
            }}>{l}</button>
          ))}
        </div>
      </div>

      {assetType === 'foreign-equity' && (
        <div style={{
          background: 'rgba(248,113,113,0.08)',
          border: '1px solid rgba(248,113,113,0.2)',
          borderRadius: '10px',
          padding: '14px 16px',
          marginBottom: '16px',
          fontSize: '13px',
          color: '#f87171',
          lineHeight: 1.6,
        }}>
          ⚠️ <strong>Indexation does NOT apply to foreign equity (RSUs).</strong> Under the Finance Act 2023,
          foreign assets including US stocks are taxed at 20% LTCG with no indexation benefit.
        </div>
      )}

      <TwoCol>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Purchase FY</label>
          <select value={purchaseFy} onChange={e => setPurchaseFy(e.target.value)} style={{ background: '#0a1120', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '9px 12px', color: '#f1f5f9', fontSize: '14px' }}>
            {FY_OPTIONS.map(fy => <option key={fy} value={fy}>{fy} (CII: {CII[fy]})</option>)}
          </select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Sale FY</label>
          <select value={saleFy} onChange={e => setSaleFy(e.target.value)} style={{ background: '#0a1120', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '9px 12px', color: '#f1f5f9', fontSize: '14px' }}>
            {FY_OPTIONS.map(fy => <option key={fy} value={fy}>{fy} (CII: {CII[fy]})</option>)}
          </select>
        </div>
        <ToolInput label="Original cost (INR)" type="number" value={costInr} onChange={v => setCostInr(Number(v))} />
        <ToolInput label="Sale value (INR)" type="number" value={saleInr} onChange={v => setSaleInr(Number(v))} />
      </TwoCol>

      <ResultCard>
        <ResultRow label={`CII: Purchase FY ${purchaseFy}`} value={ciiBuy} />
        <ResultRow label={`CII: Sale FY ${saleFy}`} value={ciiSale} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="Original cost" value={inr(costInr)} />
        <ResultRow label="Indexed cost" value={isIndexationAllowed ? inr(indexedCost) : 'N/A (not applicable)'} />
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '12px 0' }} />
        <ResultRow label="Gain without indexation" value={inr(gainWithout)} />
        <ResultRow label="Gain with indexation" value={isIndexationAllowed ? inr(gainWith) : 'N/A'} />
        <ResultRow label="Tax without indexation (20%)" value={inr(taxWithout)} />
        {isIndexationAllowed && <ResultRow label="Tax with indexation (20%)" value={inr(taxWith)} />}
        {isIndexationAllowed && taxSaving > 0 && (
          <ResultRow label="Tax saving from indexation" value={`+ ${inr(taxSaving)}`} highlight green />
        )}
      </ResultCard>

      <Disclaimer>
        Indexation applies to Indian debt funds (pre-April 2023) and real estate, NOT foreign equity.
        CII values for future FYs are projected. CBDT releases official CII each year.
      </Disclaimer>
    </div>
  );
}
