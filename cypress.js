// https://github.com/cypress-io/eslint-plugin-cypress
module.exports = {
  extends: ['plugin:cypress/recommended'],
  plugins: ['cypress', 'chai-friendly'],
  rules: {
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'error',
    'valid-expect': 'off',
    'jest/valid-expect': 'off'
  },
  env: {
    'cypress/globals': true
  }
};
