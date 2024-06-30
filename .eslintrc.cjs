module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [
          ["@components", "./src/components"],
          ["@pages", "./src/pages"],
          ["@globalTypes", "./src/types"],
          ["@config", "./src/config"],
          ["@hooks", "./src/hooks"],
          ["@redux", "./src/redux"],
          ["@styles", "./src/styles"],
          ["@utils", "./src/utils"],
          ["@", "./src"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    // Можно добавить свои правила здесь
  },
};
