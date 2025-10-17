import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(js.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/*.{ts,tsx,js,jsx}'],
  ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    react,
    'react-hooks': reactHooks,
    import: importPlugin,
    prettier,
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    // Core hygiene
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',

    // TypeScript best practices
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    semi: ['error', 'always'],

    // React-specific
    'react/react-in-jsx-scope': 'off', // React 17+
    'react/prop-types': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'any', prev: 'return', next: '*' },
    ],

    // Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Import organization
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],

    // Prettier harmony
    'prettier/prettier': 'warn',
  },
});
