import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createBanner from 'create-banner'
import pkg from './package.json'

const banner = createBanner()

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
        banner,
        globals: {
          vue: 'vue',
          Viewer: 'viewerjs',
        },
      },
      external: ['vue', 'viewerjs'],
    },
  },
})
