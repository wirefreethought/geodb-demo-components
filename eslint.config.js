// eslint.config.js
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import vueStandard from '@vue/eslint-config-standard'
import globals from 'globals'

const isProd = process.env.NODE_ENV === 'production'

export default [
  // Vue SFCs: browser only
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'no-console': isProd ? 'warn' : 'off',
      'no-debugger': isProd ? 'warn' : 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off'
    }
  },

  // JS in browser (non‑SFC)
  {
    files: ['src/**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    }
  },

  // Node‑side files (config, scripts)
  {
    files: [
      'eslint.config.{js,cjs,mjs}',
      'vite.config.{js,cjs,mjs}',
      'vue.config.{js,cjs,mjs}',
      'scripts/**/*.{js,mjs,cjs}'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    }
  },

  // Vue + Standard base configs
  ...vue.configs['flat/recommended'],
  ...vueStandard
]
