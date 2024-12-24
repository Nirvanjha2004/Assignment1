import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@firebase/auth': '@firebase/auth/dist/esm/index.esm.js',
      '@firebase/firestore': '@firebase/firestore/dist/esm/index.esm.js',
    }
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/firestore', 'firebase/auth']
  },
})
