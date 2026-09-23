import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { registerSW } from 'virtual:pwa-register'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Service Worker: App läuft offline, neue Versionen werden im Hintergrund geladen
registerSW({ immediate: true })
