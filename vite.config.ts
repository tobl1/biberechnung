import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // Manifest liegt als eigene Datei in public/ — das Plugin kümmert sich nur um den Cache
      manifest: false,
      includeAssets: ['favicon.png', 'apple-touch-icon.png', 'manifest.webmanifest'],
      workbox: {
        // alles Gebaute plus Schriften, Icons und die Faraway-Bilder offline vorhalten
        globPatterns: ['**/*.{js,css,html,png,woff2,webmanifest}'],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        cleanupOutdatedCaches: true,
      },
      devOptions: { enabled: false },
    }),
  ],
})
