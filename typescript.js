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
        '@typescript-eslint/no-shadow': ['error'],
        'import/extensions': 'off',
        'no-shadow': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
