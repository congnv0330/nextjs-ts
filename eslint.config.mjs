import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintPrettier from 'eslint-plugin-prettier/recommended';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintPrettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },

    rules: {
      'import/no-anonymous-default-export': 'off',

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
]);

export default eslintConfig;
