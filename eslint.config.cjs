const react = require('eslint-plugin-react');
const typescript = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');

module.exports = [
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: react,
      '@typescript-eslint': typescript,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
