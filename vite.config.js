import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://rivferd.github.io/home-page/',
  plugins: [react()],
})
