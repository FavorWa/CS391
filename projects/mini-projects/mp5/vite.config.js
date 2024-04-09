import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    setupFiles:['./src/components/NavBar/NavBar.test.jsx']
  },
  e2e: true,
  ui: true,
  coverage: true,
})
