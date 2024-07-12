/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    // React hooks
    'react-hooks/exhaustive-deps': 'warn',

    // simple-import-sort
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],

          // Packages `next` related packages come second.
          ['^next', '^@?\\w'],

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
