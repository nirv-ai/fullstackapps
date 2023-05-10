export default {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    jsxPragma: "null",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    extraFileExtensions: [],
  },
  ignorePatterns: ["**/lib", "**/dist", "**/*.json"],
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier",
  ],
  // @see https://eslint.org/docs/latest/user-guide/configuring/rules
  // 0 off
  // 1 warn
  // 2 error
  rules: {
    // this is javascript, not java
    "@typescript-eslint/prefer-nullish-coalescing": 0,
    // fucks with bff asyncwrapper
    "@typescript-eslint/no-misused-promises": 0,
    // force error
    "@typescript-eslint/restrict-template-expressions": 2,
    // force error
    "@typescript-eslint/restrict-template-expressions": 2,
    // too many false positives
    // or TSC does it better
    "@typescript-eslint/await-thenable": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-argument": 1,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unnecessary-type-assertion": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unsafe-argument": 1,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unnecessary-type-assertion": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-unnecessary-condition": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-unnecessary-condition": 0,
    "@typescript-eslint/ban-ts-comment": 0,
  },
};
