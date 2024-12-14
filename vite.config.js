import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, 
      filename: 'bundle-report.html', 
      gzipSize: true, 
      brotliSize: true, 
    }),
  ],
  build: {
    sourcemap: true, 
  },
})
