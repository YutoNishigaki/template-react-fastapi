import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Env from '@/env/env.ts'
import { logger } from '@/utils'

// 環境変数からMSWを有効にするかどうかを判定
async function enableMocking() {
  if (Env.getValue('VITE_DISABLE_MSW')) {
    return
  }

  const { worker } = await import('./mocks/browser')
  return worker.start()
}

// 本番環境ではログを出力しない
if (import.meta.env.PROD) {
  console.log = console.info = console.debug = console.warn = console.error = () => {}
} else {
  logger.info('開発モードでログを出力します')
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
