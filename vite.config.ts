import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'expand-element',
      fileName: 'expand-element'
    }
  },
  plugins: [
    dts({
      outDir: 'types',
      include: './lib/**'
    })
  ],
})
