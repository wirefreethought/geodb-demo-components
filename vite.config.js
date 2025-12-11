import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import fg from 'fast-glob'

function buildComponentEntries () {
  const files = fg.sync(
    [
      'src/components/geo/**/*.ce.js',
      'src/components/locale/**/*.ce.js'
    ],
    { dot: false }
  )

  const entries = {}

  for (const file of files) {
    // Strip 'src/components/' prefix and '.ce.js' suffix
    const relative = file
      .replace(/^src\/components\//, '')
      .replace(/\.ce\.js$/, '')

    const parts = relative.split('/')
    const dir = parts.slice(0, -1).join('/')
    const base = parts[parts.length - 1]

    // PascalCase → kebab-case
    const kebab = base
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()

    const key = `${dir}/${kebab}`

    entries[key] = resolve(process.cwd(), file)
  }

  return entries
}

const componentEntries = buildComponentEntries()

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  define: {
    global: 'globalThis'
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...componentEntries
      },
      output: {
        entryFileNames (chunk) {
          if (
            chunk.name &&
            (chunk.name.startsWith('geo/') || chunk.name.startsWith('locale/'))
          ) {
            return `components/${chunk.name}.js`
          }

          return 'assets/[name].js'
        },
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
