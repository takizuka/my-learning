import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import globals from "globals";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier/flat";

export default defineConfig(
  globalIgnores([
    "**/build",
    "**/node_modules",
    ".docusaurus",
    "eslint.config.ts",
  ]),
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
      },
      ecmaVersion: "latest",
      parserOptions: {},
    },
    settings: {
      react: {
        version: "18",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
);
