import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// eslint-config-next를 Flat Config에서 쓰기 위한 호환 레이어
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next 권장 + core-web-vitals (가급적 유지)
  ...compat.extends("next/core-web-vitals"),

  // 공통 ignore
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

  // 엄격 규칙 (플러그인 추가 없이 가능한 최대치)
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      /* Determinism & safety */
      "no-debugger": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-alert": "error",

      /* Code quality */
      eqeqeq: ["error", "always", { null: "ignore" }],
      curly: ["error", "all"],
      "no-implicit-coercion": "error",
      "no-return-await": "error",
      "no-useless-catch": "error",
      "no-useless-concat": "error",
      "no-useless-rename": "error",
      "no-throw-literal": "error",

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