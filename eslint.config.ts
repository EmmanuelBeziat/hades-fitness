import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginOxlint from 'eslint-plugin-oxlint'
import vueEslintParser from 'vue-eslint-parser'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx,js,mjs}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    files: ['**/*.vue', '**/*.js', '**/*.mjs'],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...pluginVue.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      'indent': ['error', 'tab', { SwitchCase: 1 }],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-return-assign': 'off',
      'no-tabs': 'off',
      'no-undef': 'off',
      'brace-style': ['error', 'stroustrup'],
      'comma-dangle': ['error', 'only-multiline'],
      'no-irregular-whitespace': 'off',
      'vue/no-v-html': 'off',
    },
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*', '**/*.spec.ts', '**/*.test.ts'],
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
)
