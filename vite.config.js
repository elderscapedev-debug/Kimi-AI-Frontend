import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/kimi': {
        target: 'http://127.0.0.1:8787', // Your local Cloudflare Worker address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/kimi/, '/kimi'),
      },
    },
  },
})
