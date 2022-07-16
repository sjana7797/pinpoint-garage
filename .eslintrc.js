module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["plugin:@next/next/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "@typescript-eslint/no-empty-interface": [
      "warn",
      {
        allowSingleExtends: true,
      },
    ],
    "no-empty-pattern": ["warn"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/ban-types": ["warn"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
