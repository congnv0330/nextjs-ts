import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },

    rules: {
      // Import
      'import/no-anonymous-default-export': 'off',

      // React hooks
      'react-hooks/exhaustive-deps': 'warn',

      // simple-import-sort
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Packages `react`, `next`, related packages come first.
            ['^react', '^next', '^@?\\w'],

            // Internal packages.
            ['^(@|components)(/.*|$)'],

            // Side effect imports.
            ['^\\u0000'],

            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

            // Style imports.
            ['^.+\\.?(css)'],
          ],
        },
      ],
    },
  },
];
