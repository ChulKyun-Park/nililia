import nextPlugin from "@next/eslint-plugin-next";

export default [
  // Next native flat config (avoids FlatCompat circular refs)
  ...nextPlugin.flatConfig.coreWebVitals,

  // Ignores
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

  // Extra strict rules (no new deps)
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,tsx}"],
    rules: {
      /* Determinism & safety */
      "no-debugger": "error",
      "no-alert": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],

      /* Correctness */
      eqeqeq: ["error", "always", { null: "ignore" }],
      curly: ["error", "all"],
      "no-implicit-coercion": "error",
      "no-throw-literal": "error",
      "no-return-await": "error",
      "no-useless-catch": "error",
      "no-useless-concat": "error",
      "no-useless-rename": "error",

      /* Variables */
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "all" }],
      "no-unused-vars": [
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

      /* Style predictability */
      "object-shorthand": ["error", "always"],
      "prefer-template": "error",
      "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    },
  },
];