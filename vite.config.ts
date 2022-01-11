import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
  ],
  build: {
    lib: {
      entry: 'src/index.js',
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
