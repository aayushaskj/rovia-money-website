'use client';

import Link from 'next/link';

export default function ToolHubCard({ tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      style={{
        background: '#0f1828',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '14px',
        padding: '22px 24px',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        transition: 'border-color 0.15s, transform 0.15s, background 0.15s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.background = '#111e32';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.background = '#0f1828';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {tool.icon && (
          <span style={{ fontSize: '24px', lineHeight: 1, flexShrink: 0 }}>{tool.icon}</span>
        )}
        <span style={{ fontSize: '15px', fontWeight: '700', color: '#f1f5f9', lineHeight: 1.3 }}>
          {tool.title}
        </span>
      </div>
      <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
        {tool.tagline}
      </p>
      <span style={{ fontSize: '12px', color: '#c9a96e', fontWeight: '600', marginTop: '2px' }}>
        Open tool →
      </span>
    </Link>
  );
}
