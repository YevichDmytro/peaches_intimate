import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;

// import js from '@eslint/js';
// import next from 'eslint-plugin-next';
// import globals from 'globals';

// export default [
//   js.configs.recommended,
//   {
//     languageOptions: {
//       parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//       globals: {
//         ...globals.browser,
//         ...globals.node,
//       },
//     },
//     plugins: {
//       next,
//       simpleImportSort,
//     },
//     rules: {
//       // Next.js-specific rules
//       'next/no-img-element': 'warn',
//       'next/no-sync-scripts': 'error',
//       'next/no-document-import-in-page': 'error',

//       // General best practices
//       'no-console': 'warn',
//       'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
//       'no-undef': 'error',

//       // Sort imports
//       'simple-import-sort/imports': 'warn',
//       'simple-import-sort/exports': 'warn',
//     },
//     settings: {
//       next: {
//         rootDir: './',
//       },
//     },
//   },
// ];
