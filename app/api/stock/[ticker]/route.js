// Server-side proxy to Yahoo Finance — avoids CORS, keeps API calls off the client.
// GET /api/stock/GOOGL?range=1y
// Supported ranges: 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y
// Returns: { meta: { currency, symbol, regularMarketPrice, ... }, timestamps: [], closes: [] }

const RANGE_TO_INTERVAL = {
  '1mo':  '1d',
  '3mo':  '1d',
  '6mo':  '1wk',
  '1y':   '1wk',
  '2y':   '1wk',
  '5y':   '1mo',
};

export async function GET(request, { params }) {
  const ticker = (params.ticker || '').toUpperCase();
  const { searchParams } = new URL(request.url);
  const range    = searchParams.get('range') || '1y';
  const interval = RANGE_TO_INTERVAL[range] || '1d';

  if (!ticker) {
    return Response.json({ error: 'Missing ticker' }, { status: 400 });
  }

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=${range}&interval=${interval}&includePrePost=false`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; rovia.money/1.0)',
        Accept: 'application/json',
      },
      next: { revalidate: 900 }, // cache 15 min
    });

    if (!res.ok) {
      return Response.json({ error: `Yahoo Finance returned ${res.status}` }, { status: 502 });
    }

    const data = await res.json();
    const result = data?.chart?.result?.[0];

    if (!result) {
      return Response.json({ error: 'No data from Yahoo Finance' }, { status: 404 });
    }

    const meta       = result.meta || {};
    const timestamps = result.timestamp || [];
    const closes     = result.indicators?.quote?.[0]?.close || [];
    const opens      = result.indicators?.quote?.[0]?.open  || [];
    const highs      = result.indicators?.quote?.[0]?.high  || [];
    const lows       = result.indicators?.quote?.[0]?.low   || [];

    // Filter nulls and align arrays
    const points = timestamps
      .map((t, i) => ({
        time:  t,
        open:  opens[i],
        high:  highs[i],
        low:   lows[i],
        close: closes[i],
      }))
      .filter((p) => p.close != null);

    return Response.json({
      meta: {
        symbol:              meta.symbol,
        currency:            meta.currency,
        regularMarketPrice:  meta.regularMarketPrice,
        previousClose:       meta.chartPreviousClose,
        fiftyTwoWeekHigh:    meta.fiftyTwoWeekHigh,
        fiftyTwoWeekLow:     meta.fiftyTwoWeekLow,
        longName:            meta.longName || meta.shortName,
        exchangeName:        meta.exchangeName,
      },
      points,
    });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
