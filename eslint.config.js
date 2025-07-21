import eslintPluginReact from "eslint-plugin-react";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: ["./tsconfig.json"], // enable type-aware linting
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: eslintPluginReact,
      "jsx-a11y": eslintPluginJsxA11y,
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      semi: ["error", "always"],
      "react/react-in-jsx-scope": "off",
      // Add any other React or accessibility rules you want here
    },
  },

  // JavaScript/JSX files
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: { jsx: true },
    },
    plugins: {
      react: eslintPluginReact,
      "jsx-a11y": eslintPluginJsxA11y,
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      semi: ["error", "always"],
      "react/react-in-jsx-scope": "off",
    },
  },
];
