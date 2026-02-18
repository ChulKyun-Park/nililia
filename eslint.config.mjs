import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,

  {
    ignores: [
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      "node_modules/**",
      ".data/**",
      "coverage/**",
    ],
  },

  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": { typescript: true },
    },
    rules: {
      "no-debugger": "error",
      "no-alert": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],

      eqeqeq: ["error", "always", { null: "ignore" }],
      curly: ["error", "all"],
      "no-implicit-coercion": "error",
      "no-throw-literal": "error",
      "no-return-await": "error",
      "no-useless-catch": "error",
      "no-useless-concat": "error",
      "no-useless-rename": "error",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ],
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "all" }],

      "import/no-duplicates": "error",
      "import/newline-after-import": "error",

      "react/jsx-boolean-value": ["error", "never"],
      "react/self-closing-comp": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "jsx-a11y/alt-text": "error",

      "object-shorthand": ["error", "always"],
      "prefer-template": "error",
      "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    },
  },
];