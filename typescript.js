module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
      rules: {
        'import/extensions': 'off',
        'react/prop-types': 'off',

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
      },
    },
  ],
};
