/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
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
};
