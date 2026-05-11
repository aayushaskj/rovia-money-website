'use client';

import { useEffect, useRef, useState } from 'react';

const RANGES = [
  { label: '1M', value: '1mo' },
  { label: '3M', value: '3mo' },
  { label: '6M', value: '6mo' },
  { label: '1Y', value: '1y' },
  { label: '2Y', value: '2y' },
  { label: '5Y', value: '5y' },
];

function fmt(n) {
  if (n == null) return '—';
  return n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtPct(n) {
  if (n == null) return '—';
  const sign = n >= 0 ? '+' : '';
  return `${sign}${n.toFixed(2)}%`;
}

export default function StockChart({ ticker, color = '#3b82f6' }) {
  const chartContainerRef = useRef(null);
  const chartRef          = useRef(null);
  const seriesRef         = useRef(null);

  const [range, setRange]     = useState('1y');
  const [loading, setLoading] = useState(true);
  const [meta, setMeta]       = useState(null);
  const [error, setError]     = useState(null);
  const [hovered, setHovered] = useState(null);

  // Load Lightweight Charts from CDN once
  useEffect(() => {
    if (window.__LWC_LOADED__) return;
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lightweight-charts@4.1.3/dist/lightweight-charts.standalone.production.js';
    script.async = true;
    script.onload = () => { window.__LWC_LOADED__ = true; };
    document.head.appendChild(script);
  }, []);

  // Create chart instance once container is ready
  useEffect(() => {
    let attempts = 0;
    const init = () => {
      if (!chartContainerRef.current) return;
      if (!window.LightweightCharts) {
        if (attempts++ < 30) setTimeout(init, 300);
        return;
      }
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
      const chart = window.LightweightCharts.createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 240,
        layout: {
          background: { type: 'solid', color: 'transparent' },
          textColor: '#64748b',
        },
        grid: {
          vertLines: { color: 'rgba(255,255,255,0.03)' },
          horzLines: { color: 'rgba(255,255,255,0.05)' },
        },
        crosshair: {
          mode: window.LightweightCharts.CrosshairMode.Magnet,
        },
        rightPriceScale: {
          borderColor: 'rgba(255,255,255,0.06)',
          textColor: '#475569',
        },
        timeScale: {
          borderColor: 'rgba(255,255,255,0.06)',
          timeVisible: true,
        },
        handleScroll: false,
        handleScale: false,
      });

      const series = chart.addAreaSeries({
        lineColor: color,
        topColor: color + '28',
        bottomColor: color + '00',
        lineWidth: 2,
        priceLineVisible: false,
        lastValueVisible: false,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: color,
        crosshairMarkerBackgroundColor: color,
      });

      // Subscribe to crosshair for tooltip
      chart.subscribeCrosshairMove((param) => {
        if (!param.time || !param.seriesData) {
          setHovered(null);
          return;
        }
        const val = param.seriesData.get(series);
        if (val) setHovered({ time: param.time, price: val.value ?? val.close });
      });

      // Resize observer
      const ro = new ResizeObserver(() => {
        if (chartContainerRef.current) {
          chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        }
      });
      ro.observe(chartContainerRef.current);

      chartRef.current  = chart;
      seriesRef.current = series;
    };
    init();

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [color]);

  // Fetch data whenever ticker or range changes
  useEffect(() => {
    if (!ticker) return;
    setLoading(true);
    setError(null);

    fetch(`/api/stock/${ticker}?range=${range}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setMeta(data.meta);

        if (seriesRef.current && data.points?.length) {
          const chartData = data.points.map((p) => ({
            time:  p.time,
            value: p.close,
          }));
          seriesRef.current.setData(chartData);
          chartRef.current?.timeScale().fitContent();
        }
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [ticker, range]);

  // Price change vs first point
  const displayPrice = hovered?.price ?? meta?.regularMarketPrice;

  return (
    <div
      style={{
        background: '#0f1828',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '14px',
        padding: '20px 24px 16px',
        marginBottom: '4px',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <div style={{ fontSize: '12px', color: '#475569', fontWeight: '600', marginBottom: '4px' }}>
            {meta?.longName || ticker} · {meta?.exchangeName || 'NASDAQ/NYSE'} · {meta?.currency || 'USD'}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <span style={{ fontSize: '28px', fontWeight: '700', color: '#f1f5f9', letterSpacing: '-0.03em' }}>
              ${fmt(displayPrice)}
            </span>
            {meta?.regularMarketPrice && meta?.previousClose && (
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color:
                    meta.regularMarketPrice >= meta.previousClose ? '#34d399' : '#f87171',
                  background:
                    meta.regularMarketPrice >= meta.previousClose
                      ? 'rgba(52,211,153,0.1)'
                      : 'rgba(248,113,113,0.1)',
                  padding: '2px 8px',
                  borderRadius: '999px',
                }}
              >
                {fmtPct(((meta.regularMarketPrice - meta.previousClose) / meta.previousClose) * 100)}
              </span>
            )}
          </div>
          {meta?.fiftyTwoWeekLow && meta?.fiftyTwoWeekHigh && (
            <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>
              52W: ${fmt(meta.fiftyTwoWeekLow)} – ${fmt(meta.fiftyTwoWeekHigh)}
            </div>
          )}
        </div>

        {/* Range tabs */}
        <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '3px' }}>
          {RANGES.map((r) => (
            <button
              key={r.value}
              onClick={() => setRange(r.value)}
              style={{
                background: range === r.value ? 'rgba(255,255,255,0.1)' : 'transparent',
                border: 'none',
                color: range === r.value ? '#f1f5f9' : '#475569',
                fontSize: '12px',
                fontWeight: '600',
                padding: '4px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart area */}
      <div style={{ position: 'relative' }}>
        {loading && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(15,24,40,0.7)',
              zIndex: 10,
              borderRadius: '8px',
            }}
          >
            <span style={{ fontSize: '12px', color: '#475569' }}>Loading chart…</span>
          </div>
        )}
        {error && (
          <div
            style={{
              height: '240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#475569',
              fontSize: '13px',
            }}
          >
            Unable to load chart data
          </div>
        )}
        <div ref={chartContainerRef} style={{ width: '100%', height: '240px' }} />
      </div>

      <div style={{ fontSize: '11px', color: '#334155', marginTop: '8px', textAlign: 'right' }}>
        Data via Yahoo Finance · 15-min delayed
      </div>
    </div>
  );
}
