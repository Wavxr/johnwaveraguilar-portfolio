// eslint.config.mjs
import next from "eslint-config-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
  next(), // Next.js core rules (includes core-web-vitals)
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      // You can add your own overrides below
      "no-unused-vars": "warn"
    }
  },
  prettier // Make sure Prettier comes last
];
