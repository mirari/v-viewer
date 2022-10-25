import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: pkg.scope,
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
          viewerjs: 'Viewer',
        },
      },
      external: ['vue', 'viewerjs'],
    },
  },
})
