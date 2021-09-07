module.exports = {
  root: true,
  env: {
    es6: true,
    ecmaVersion: 6,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
  },
};
