
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './src',
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
      '@f': path.resolve(__dirname, './src/front'),
      '@b': path.resolve(__dirname, './src/back'),
      '@t': path.resolve(__dirname, './src/types'),
      '@u': path.resolve(__dirname, './src/utils'),
    }
  },
  publicDir:'public/frontend',
  build: {
    outDir: 'output/webroot',

    rollupOptions:{
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
      },
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8686',
      },
      '/media': {
        target: 'http://localhost:8686',
      }
    }
  },
})
