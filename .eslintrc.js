module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    parser: "babel-eslint",
  },
  plugins: ["react"],
  rules: {},
};
