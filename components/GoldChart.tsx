'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function GoldChart() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      if (container.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "XAUUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: container.current.id,
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return <div id="tradingview_gold_chart" ref={container} style={{ height: '100%', width: '100%' }} />
}
