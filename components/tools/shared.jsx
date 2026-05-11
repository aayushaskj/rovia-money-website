'use client';

// ─── Shared UI primitives for all tool components ─────────────────────────────

export function ToolCard({ children }) {
  return (
    <div style={{
      background: '#0f1828',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '14px',
      padding: '24px',
      marginBottom: '16px',
    }}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: '11px', fontWeight: '700', color: '#475569',
      textTransform: 'uppercase', letterSpacing: '0.1em',
      marginBottom: '16px',
    }}>
      {children}
    </p>
  );
}

export function ToolInput({ label, type = 'text', value, onChange, step, min, max, hint }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>{label}</label>
      <input
        type={type}
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: '#0a1120',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          padding: '9px 12px',
          color: '#f1f5f9',
          fontSize: '14px',
          width: '100%',
          boxSizing: 'border-box',
          outline: 'none',
        }}
        onFocus={(e) => { e.target.style.borderColor = 'rgba(201,169,110,0.5)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
      />
      {hint && <span style={{ fontSize: '11px', color: '#334155' }}>{hint}</span>}
    </div>
  );
}

export function ToolSelect({ label, value, onChange, options }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: '#0a1120',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          padding: '9px 12px',
          color: '#f1f5f9',
          fontSize: '14px',
          width: '100%',
          boxSizing: 'border-box',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ background: '#0a1120' }}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

export function ResultCard({ children }) {
  return (
    <div style={{
      background: '#0a1120',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '12px',
      padding: '20px 24px',
      marginTop: '20px',
      marginBottom: '8px',
    }}>
      {children}
    </div>
  );
}

export function ResultRow({ label, value, highlight, green, dim }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '6px 0',
      borderBottom: '1px solid rgba(255,255,255,0.03)',
    }}>
      <span style={{ fontSize: '13px', color: dim ? '#2d3a4f' : '#64748b' }}>{label}</span>
      <span style={{
        fontSize: highlight ? '16px' : '14px',
        fontWeight: highlight ? '700' : '600',
        color: dim ? '#2d3a4f' : highlight ? (green ? '#34d399' : '#c9a96e') : '#f1f5f9',
      }}>
        {value}
      </span>
    </div>
  );
}

export function ResultBig({ label, value, sub, color = '#c9a96e' }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '24px 16px',
    }}>
      <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px', fontWeight: '600' }}>{label}</div>
      <div style={{ fontSize: '36px', fontWeight: '800', color, letterSpacing: '-0.03em', lineHeight: 1 }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: '12px', color: '#475569', marginTop: '8px' }}>{sub}</div>}
    </div>
  );
}

export function Disclaimer({ children }) {
  return (
    <p style={{
      fontSize: '11px', color: '#334155', lineHeight: 1.6,
      marginTop: '12px',
      padding: '12px 16px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '8px',
      border: '1px solid rgba(255,255,255,0.04)',
    }}>
      ⚠️ {children}
    </p>
  );
}

export function TwoCol({ children }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginBottom: '12px',
    }}>
      {children}
    </div>
  );
}

export function ThreeCol({ children }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      marginBottom: '12px',
    }}>
      {children}
    </div>
  );
}

// Mini stat tile
export function StatTile({ label, value, sub, color = '#c9a96e' }) {
  return (
    <div style={{
      background: '#0a1120',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '10px',
      padding: '16px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '11px', color: '#475569', fontWeight: '600', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
      <div style={{ fontSize: '22px', fontWeight: '800', color, letterSpacing: '-0.03em' }}>{value}</div>
      {sub && <div style={{ fontSize: '11px', color: '#334155', marginTop: '4px' }}>{sub}</div>}
    </div>
  );
}

// Formatters
export function inr(n) {
  if (n == null || isNaN(n)) return '—';
  return '₹' + Math.round(n).toLocaleString('en-IN');
}
export function usd(n) {
  if (n == null || isNaN(n)) return '—';
  return '$' + Math.round(n).toLocaleString('en-US');
}
export function pct(n, decimals = 1) {
  if (n == null || isNaN(n)) return '—';
  return n.toFixed(decimals) + '%';
}
