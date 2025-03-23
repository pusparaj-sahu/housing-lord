import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows accessing from other devices
    port: 3000, // You can change this port if needed
    open: true, // This will open the browser automatically
  }
}) 