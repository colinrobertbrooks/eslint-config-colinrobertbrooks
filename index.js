module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
  },
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
  },
  plugins: ['@babel'],
  extends: [
    './airbnb/index',
    './airbnb/react-overrides',
    './airbnb/style-overrides',
  ].map(require.resolve),
};
