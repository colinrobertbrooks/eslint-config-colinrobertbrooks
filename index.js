module.exports = {
  parser: 'babel-eslint',
  extends: [
    './airbnb/index',
    './airbnb/react-overrides',
    './airbnb/style-overrides',
  ].map(require.resolve),
};
