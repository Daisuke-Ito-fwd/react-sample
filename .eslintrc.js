module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", '@typescript-eslint'],
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  rules: {
    "react/prop-types": "off",
    // "semi": ["error", "never", {
    //   "beforeStatementContinuationChars": "never"
    // }],
    // "semi-spacing": ["error", {
    //   "after": false,
    //   "before": false
    // }],
    // "semi-style": ["error", "first"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off", // 暫定処置
    "no-constant-condition": ["error", { "checkLoops": false }],
    "react/display-name": "off",
  },
  overrides: [{
    'files': ["**/*.tsx"],
    'rules': {
      'react/prop-types': 'off'
    }
  }],
  settings: {
    react: {
      version: 'detect'
    }
  }
}