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
        title: 'Export E*TRADE transaction history',
        detail: `Log into us.etrade.com/stockplans → Stock Plan Transactions or Tax Center → Export CSV of all vest, sell-to-cover, and sale events. Save this — it's your permanent lot ledger.`,
      },
      {
        n: '02',
        title: 'Open your Rovia account',
        detail: `PAN, Aadhaar, Indian bank account, video KYC. 1–3 business days end-to-end. W-8BEN is signed at onboarding, getting you the 25% US dividend withholding rate.`,
      },
      {
        n: '03',
        title: 'Initiate ACATS transfer from Rovia',
        detail: `Rovia → 'Transfer shares in' → Sending broker: E*TRADE Securities LLC → Enter your E*TRADE account number → Select ${co.ticker} lots (all or partial).`,
      },
      {
        n: '04',
        title: 'Confirm on E*TRADE',
        detail: `E*TRADE emails an authorization request within 1–3 business days. Confirm in your stock-plan account. ACATS is an in-kind share transfer — no shares are sold. Your broker may charge an outbound fee (E*TRADE: typically $50–$75 one-time). Rovia charges nothing to receive. Check your broker's fee schedule — some charge $0.`,
      },
      {
        n: '05',
        title: 'Wait 5–7 business days',
        detail: `${co.ticker} shares arrive at Rovia with vest dates and USD cost basis intact. Your India 24-month LTCG clock continues from the original vest date — the transfer is not a tax event.`,
      },
      {
        n: '06',
        title: 'Reconcile your lots',
        detail: `Cross-check Rovia's lot view against the Step 1 CSV. Verify INR cost basis (Rovia applies SBI TT rates at each vest date). Raise discrepancies with Rovia support promptly.`,
      },
    ],
    faq: (co) => [
      {
        q: 'Does E*TRADE charge a fee to transfer out? Is it a sale?',
        a: `ACATS is an in-kind share transfer — no shares are sold and no capital gains are triggered. Your shares move as-is to Rovia with vest dates and cost basis intact. E*TRADE may charge an outbound fee (typically $50–$75 one-time); check your account agreement. Rovia charges nothing to receive. Some brokers charge $0 — adjust the transfer cost calculator above accordingly.`,
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
        title: 'Export Shareworks transaction history',
        detail: `Log into shareworks.morganstanley.com → Reports → Transaction history + Tax documents. Export CSV of all vest, sell-to-cover, and sale events.`,
      },
      {
        n: '02',
        title: 'Open your Rovia account',
        detail: `PAN, Aadhaar, Indian bank account, video KYC. 1–3 business days. W-8BEN at onboarding for 25% US dividend withholding rate.`,
      },
      {
        n: '03',
        title: 'Initiate ACATS transfer from Rovia',
        detail: `Rovia → 'Transfer shares in' → Sending broker: Morgan Stanley Smith Barney LLC → Your Shareworks account number → Select ${co.ticker} lots.`,
      },
      {
        n: '04',
        title: 'Confirm on Morgan Stanley at Work',
        detail: `MSAW sends an authorization request within 1–3 days. Confirm in Shareworks. ACATS is an in-kind share transfer — no shares sold. Outbound fee: typically $50–$75 depending on your broker — some charge $0. Rovia charges nothing to receive.`,
      },
      {
        n: '05',
        title: 'Wait 5–7 business days',
        detail: `${co.ticker} shares arrive at Rovia with lot dates and cost basis preserved. India 24-month LTCG clock continues from each original vest date.`,
      },
      {
        n: '06',
        title: 'Reconcile lots',
        detail: `Cross-check Rovia lots against your Step 1 export. Verify INR cost basis (SBI TT at vest date). Raise any discrepancies with Rovia support promptly.`,
      },
    ],
    faq: (co) => [
      {
        q: 'Does Morgan Stanley charge a fee to transfer out? Is it a sale?',
        a: `ACATS is an in-kind share transfer — no shares are sold, no capital gains event triggered. Morgan Stanley may charge an outbound fee (typically $50–$75 one-time). Rovia charges nothing to receive. Fee varies by account type — check your Shareworks agreement. Some brokers charge $0.`,
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
        title: 'Export Fidelity NetBenefits history',
        detail: `Log into netbenefits.com → Stock Plan → History. Export CSV of all vest, sell-to-cover, and post-vest sale events. Save as your lot ledger.`,
      },
      {
        n: '02',
        title: 'Open your Rovia account',
        detail: `PAN, Aadhaar, Indian bank account, video KYC. 1–3 business days. W-8BEN at onboarding for 25% US dividend withholding rate.`,
      },
      {
        n: '03',
        title: 'Initiate ACATS transfer from Rovia',
        detail: `Rovia → 'Transfer shares in' → Sending broker: Fidelity Brokerage Services LLC → Your Fidelity NetBenefits account number → Select ${co.ticker} lots.`,
      },
      {
        n: '04',
        title: 'Confirm on Fidelity',
        detail: `Fidelity sends an authorization request within 1–3 business days. Confirm in NetBenefits. ACATS is an in-kind share transfer — no shares sold. Outbound fee: typically $50 depending on your broker — some charge $0. Rovia charges nothing to receive.`,
      },
      {
        n: '05',
        title: 'Wait 5–7 business days',
        detail: `${co.ticker} shares arrive at Rovia with vest dates and cost basis preserved. India 24-month LTCG clock unaffected — continues from original vest date.`,
      },
      {
        n: '06',
        title: 'Reconcile lots',
        detail: `Cross-check Rovia lots against Step 1 export. Verify INR cost basis (Rovia applies SBI TT at each vest date). Raise discrepancies promptly.`,
      },
    ],
    faq: (co) => [
      {
        q: 'Does Fidelity charge a fee to transfer out? Is it a sale?',
        a: `ACATS is an in-kind transfer — no shares sold, no capital gains triggered. Fidelity may charge an outbound fee (typically $50 one-time). Rovia charges nothing to receive. Check your NetBenefits agreement. Fee and waiver eligibility varies.`,
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
        title: 'Export Schwab Equity Award Center history',
        detail: `Log in → Equity Award Center → Transactions → Export CSV of all vest, sell-to-cover, and post-vest sales. Save as lot ledger.`,
      },
      {
        n: '02',
        title: 'Open your Rovia account',
        detail: `PAN, Aadhaar, Indian bank account, video KYC. 1–3 business days. W-8BEN at onboarding for 25% US dividend rate.`,
      },
      {
        n: '03',
        title: 'Initiate ACATS transfer from Rovia',
        detail: `Rovia → 'Transfer shares in' → Sending broker: Charles Schwab & Co. Inc. → Schwab account number → Select ${co.ticker} lots.`,
      },
      {
        n: '04',
        title: 'Confirm on Schwab',
        detail: `Schwab emails authorization within 1–3 days. Confirm in Equity Award Center. ACATS is an in-kind share transfer — no shares sold. Outbound fee: typically $50 depending on your broker — some charge $0. Rovia charges nothing to receive.`,
      },
      {
        n: '05',
        title: 'Wait 5–7 business days',
        detail: `${co.ticker} shares arrive at Rovia with vest dates and cost basis intact. India 24-month LTCG clock continues from original vest.`,
      },
      {
        n: '06',
        title: 'Reconcile lots',
        detail: `Cross-check Rovia lots against Step 1 export. Verify INR cost basis (SBI TT at each vest date).`,
      },
    ],
    faq: (co) => [
      {
        q: 'Does Schwab charge a fee to transfer out? Is it a sale?',
        a: `ACATS is an in-kind transfer — no shares sold, no capital gains triggered. Schwab may charge an outbound fee (typically $50 one-time). Rovia charges nothing to receive. Check your Equity Award Center agreement. Some account types may be eligible for a fee waiver.`,
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
