// Broker templates — shared pain points, migration steps, FAQ per broker type.
// Company data in companies.js references these by key.

export const brokerTemplates = {
  etrade: {
    brokerName: 'E*TRADE Stock Plan (Morgan Stanley)',
    brokerShortName: 'E*TRADE',
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-etrade-stock-plan-india',
    brokerGuideLabel: 'Read: Rovia vs E*TRADE Stock Plan — the full comparison →',
    painPoints: (co) => [
      {
        icon: '₹',
        title: '~₹5,000 lost per $10,000 wire',
        detail: `E*TRADE's $25 outbound wire fee plus your Indian bank's FX spread (30–60 paise/USD) adds ₹4,000–₹7,000 of friction every time you repatriate ${co.ticker} proceeds.`,
      },
      {
        icon: '📋',
        title: 'USD-only cost basis',
        detail: `E*TRADE reports every lot in USD. Your India ITR needs INR cost basis at the vest-day SBI TT rate, lot by lot — a manual rebuild at every filing season.`,
      },
      {
        icon: '🔢',
        title: 'FIFO default buries LTCG savings',
        detail: `E*TRADE defaults to FIFO lot selection. For Indian residents on the 24-month LTCG rule, picking the right lot can mean the difference between 20% tax and 30%.`,
      },
      {
        icon: '📄',
        title: 'No India compliance tooling',
        detail: `No Schedule FA. No Form 67 / FTC prep. No 24-month LTCG countdown per lot. All DIY or CA-managed from the USD 1099-B each filing season.`,
      },
    ],
    steps: (co) => [
      {
        n: '01',
        title: 'Download your E*TRADE holdings statement',
        detail: `Log into us.etrade.com/stockplans → Tax Center or Stock Plan Transactions → Download your positions and gains statement. Save this — you'll upload it to Rovia later so it can import your exact cost basis.`,
      },
      {
        n: '02',
        title: 'Open Rovia → tap Transfer In → select E*TRADE',
        detail: `Open Rovia and navigate to Transfer In. Select "E*Trade from Morgan Stanley" from the broker list. Enter your full name exactly as it appears on your E*TRADE account, and your E*TRADE brokerage account number.`,
      },
      {
        n: '03',
        title: 'Choose full or partial — then submit',
        detail: `Select Full Transfer to move all your ${co.ticker} holdings, or Partial to pick specific lots. Submit and you're done — the transfer is now in motion. No sale, no tax event. Shares move in-kind in 3–5 business days.`,
      },
      {
        n: '04',
        title: 'Upload your statement — Rovia imports your cost basis',
        detail: `Once shares arrive, upload the statement from Step 1. Rovia uses it to import your cost basis, compute INR amounts at the vest-day SBI TT rate for each lot, and start the 24-month LTCG countdown. Your India compliance stack is now on autopilot.`,
      },
    ],
    faq: (co) => [
      {
        q: 'Does E*TRADE charge a fee to transfer out? Is it a sale?',
        a: `ACATS is an in-kind share transfer — no shares are sold and no capital gains are triggered. Your shares move as-is to Rovia with vest dates and cost basis intact. E*TRADE may charge an outbound fee (typically $50–$75 one-time); check your account agreement. Rovia charges nothing to receive.`,
      },
      {
        q: 'Will my vesting schedule change?',
        a: `No. Future ${co.ticker} vests continue landing at E*TRADE. Don't close your account — only move already-vested shares to Rovia.`,
      },
      {
        q: 'Is the ACATS transfer a taxable event in India?',
        a: `No. Transferring shares between brokers via ACATS is not a sale — no capital gains event is triggered. Your holding period continues from the original vest date.`,
      },
    ],
  },

  morgan_stanley: {
    brokerName: 'Morgan Stanley at Work (Shareworks)',
    brokerShortName: 'Morgan Stanley',
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-morgan-stanley-shareworks-india',
    brokerGuideLabel: 'Read: Rovia vs Morgan Stanley at Work — the full comparison →',
    painPoints: (co) => [
      {
        icon: '₹',
        title: '~₹5,000 lost per $10,000 wire',
        detail: `Morgan Stanley's $25–$50 wire fee plus your Indian bank's FX spread adds ₹4,000–₹7,000 of friction every time you repatriate ${co.ticker} proceeds.`,
      },
      {
        icon: '📋',
        title: 'USD-only cost basis on Shareworks',
        detail: `Shareworks reports every lot in USD. India ITR needs INR cost basis at the vest-day SBI TT rate — a manual rebuild at every filing season.`,
      },
      {
        icon: '🔢',
        title: 'FIFO default + buried lot selection',
        detail: `Shareworks defaults to FIFO and buries specific-lot selection three clicks deep. For Indian residents with the 24-month LTCG rule, the right lot selection can save significant tax.`,
      },
      {
        icon: '📄',
        title: 'No India compliance tooling',
        detail: `No Schedule FA. No Form 67 / FTC prep. No 24-month LTCG countdown per lot. All DIY or CA-managed from the USD 1099-B.`,
      },
    ],
    steps: (co) => [
      {
        n: '01',
        title: 'Download your Shareworks holdings statement',
        detail: `Log into shareworks.morganstanley.com → Reports → Tax documents + Transaction history. Download your positions and gains statement. Save this — you'll upload it to Rovia to import your exact cost basis.`,
      },
      {
        n: '02',
        title: 'Open Rovia → tap Transfer In → select Morgan Stanley',
        detail: `Open Rovia and navigate to Transfer In. Select "Morgan Stanley StockPlan Connect · at Work" from the broker list. Enter your full name exactly as it appears on Shareworks, and your Shareworks account number.`,
      },
      {
        n: '03',
        title: 'Choose full or partial — then submit',
        detail: `Select Full Transfer to move all your ${co.ticker} holdings, or Partial to pick specific lots. Submit and you're done — the transfer is now in motion. No sale, no tax event. Shares move in-kind in 3–5 business days.`,
      },
      {
        n: '04',
        title: 'Upload your statement — Rovia imports your cost basis',
        detail: `Once shares arrive, upload the statement from Step 1. Rovia uses it to import your cost basis, compute INR amounts at the vest-day SBI TT rate for each lot, and start the 24-month LTCG countdown. Your India compliance stack is now on autopilot.`,
      },
    ],
    faq: (co) => [
      {
        q: 'Does Morgan Stanley charge a fee to transfer out? Is it a sale?',
        a: `ACATS is an in-kind share transfer — no shares are sold, no capital gains event triggered. Morgan Stanley may charge an outbound fee (typically $50–$75 one-time). Rovia charges nothing to receive. Fee varies by account type — check your Shareworks agreement.`,
      },
      {
        q: 'Will my vesting schedule change?',
        a: `No. Future ${co.ticker} vests continue at Morgan Stanley at Work. Don't close your Shareworks account — only move already-vested shares.`,
      },
      {
        q: 'Is the ACATS transfer a taxable event in India?',
        a: `No. An ACATS transfer is not a sale — no capital gains event is triggered. Your holding period continues from the original vest date.`,
      },
    ],
  },

  fidelity: {
    brokerName: 'Fidelity NetBenefits',
    brokerShortName: 'Fidelity',
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-fidelity-netbenefits-india',
    brokerGuideLabel: 'Read: Rovia vs Fidelity NetBenefits — the full comparison →',
    painPoints: (co) => [
      {
        icon: '₹',
        title: '~₹5,000 lost per $10,000 wire',
        detail: `Fidelity's wire fee plus your Indian bank's FX spread adds ₹4,000–₹7,000 of friction every time you repatriate ${co.ticker} proceeds.`,
      },
      {
        icon: '📋',
        title: 'USD-only cost basis',
        detail: `Fidelity NetBenefits reports in USD. India ITR needs INR cost basis at the vest-day SBI TT rate, lot by lot — manual rebuild every filing season.`,
      },
      {
        icon: '🔒',
        title: "Non-US residents can't open retail Fidelity accounts",
        detail: `As an Indian resident, the only Fidelity relationship you can have is the employer-tied NetBenefits account. There's no path to a regular Fidelity retail account or most other US retail brokers.`,
      },
      {
        icon: '📄',
        title: 'No India compliance tooling',
        detail: `No Schedule FA. No Form 67 / FTC prep. No 24-month LTCG countdown per lot. All DIY or CA-managed from the USD 1099-B each filing season.`,
      },
    ],
    steps: (co) => [
      {
        n: '01',
        title: 'Download your Fidelity NetBenefits holdings statement',
        detail: `Log into netbenefits.com → Stock Plan → Statements or History → Download your positions and gains statement. Save this — you'll upload it to Rovia to import your exact cost basis.`,
      },
      {
        n: '02',
        title: 'Open Rovia → tap Transfer In → select Fidelity',
        detail: `Open Rovia and navigate to Transfer In. Select "Fidelity · NetBenefits" from the broker list. Enter your full name exactly as it appears on your Fidelity account, and your Fidelity NetBenefits account number.`,
      },
      {
        n: '03',
        title: 'Choose full or partial — then submit',
        detail: `Select Full Transfer to move all your ${co.ticker} holdings, or Partial to pick specific lots. Submit and you're done — the transfer is now in motion. No sale, no tax event. Shares move in-kind in 3–5 business days.`,
      },
      {
        n: '04',
        title: 'Upload your statement — Rovia imports your cost basis',
        detail: `Once shares arrive, upload the statement from Step 1. Rovia uses it to import your cost basis, compute INR amounts at the vest-day SBI TT rate for each lot, and start the 24-month LTCG countdown. Your India compliance stack is now on autopilot.`,
      },
    ],
    faq: (co) => [
      {
        q: 'Does Fidelity charge a fee to transfer out? Is it a sale?',
        a: `ACATS is an in-kind transfer — no shares sold, no capital gains triggered. Fidelity may charge an outbound fee (typically $50 one-time). Rovia charges nothing to receive. Check your NetBenefits agreement for fee eligibility.`,
      },
      {
        q: 'Will my vesting schedule change?',
        a: `No. Future ${co.ticker} vests continue at Fidelity NetBenefits. Don't close the account — only move already-vested shares.`,
      },
      {
        q: 'Is the ACATS transfer a taxable event in India?',
        a: `No. An ACATS share transfer is not a sale and does not trigger capital gains. Your holding period continues from the original vest date.`,
      },
    ],
  },

  schwab: {
    brokerName: 'Charles Schwab Equity Awards',
    brokerShortName: 'Schwab',
    brokerGuideUrl: 'https://www.vested.blog/posts/rovia-vs-etrade-stock-plan-india',
    brokerGuideLabel: 'Read: Rovia vs Schwab — the full comparison →',
    painPoints: (co) => [
      {
        icon: '₹',
        title: '~₹5,000 lost per $10,000 wire',
        detail: `Schwab's $25 wire fee plus your Indian bank's FX spread adds ₹4,000–₹7,000 of friction every time you repatriate ${co.ticker} proceeds.`,
      },
      {
        icon: '📋',
        title: 'USD-only cost basis',
        detail: `Schwab reports every lot in USD. India ITR needs INR cost basis at the vest-day SBI TT rate — manual work every July.`,
      },
      {
        icon: '⏰',
        title: 'US Pacific hours support',
        detail: `Schwab's customer service operates in US Pacific time. If you have a problem at 10 AM IST, you're waiting 11+ hours.`,
      },
      {
        icon: '📄',
        title: 'No India-tax tooling',
        detail: `No Schedule FA. No Form 67 / FTC prep. No 24-month LTCG countdown. All manual or CA-managed from the 1099-B.`,
      },
    ],
    steps: (co) => [
      {
        n: '01',
        title: 'Download your Schwab Equity Award Center statement',
        detail: `Log into schwab.com → Equity Award Center → Accounts → Positions or History → Download your holdings and gains statement. Save this — you'll upload it to Rovia to import your exact cost basis.`,
      },
      {
        n: '02',
        title: 'Open Rovia → tap Transfer In → select Schwab',
        detail: `Open Rovia and navigate to Transfer In. Select "Charles Schwab · Equity Award Center" from the broker list. Enter your full name exactly as it appears on your Schwab account, and your Schwab account number.`,
      },
      {
        n: '03',
        title: 'Choose full or partial — then submit',
        detail: `Select Full Transfer to move all your ${co.ticker} holdings, or Partial to pick specific lots. Submit and you're done — the transfer is now in motion. No sale, no tax event. Shares move in-kind in 3–5 business days.`,
      },
      {
        n: '04',
        title: 'Upload your statement — Rovia imports your cost basis',
        detail: `Once shares arrive, upload the statement from Step 1. Rovia uses it to import your cost basis, compute INR amounts at the vest-day SBI TT rate for each lot, and start the 24-month LTCG countdown. Your India compliance stack is now on autopilot.`,
      },
    ],
    faq: (co) => [
      {
        q: 'Does Schwab charge a fee to transfer out? Is it a sale?',
        a: `ACATS is an in-kind transfer — no shares sold, no capital gains triggered. Schwab may charge an outbound fee (typically $50 one-time). Rovia charges nothing to receive. Check your Equity Award Center agreement for fee details.`,
      },
      {
        q: 'Will my vesting schedule change?',
        a: `No. Future ${co.ticker} vests continue at Schwab. Don't close the account — only move already-vested shares.`,
      },
      {
        q: 'Is the ACATS transfer a taxable event in India?',
        a: `No. ACATS transfer is not a sale. No capital gains event triggered. Holding period continues from original vest.`,
      },
    ],
  },
};
