module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    "import/no-cycle": "off",
    "no-console": "off",
    "linebreak-style": "off",
    "react/state-in-constructor": "off",
    "import/prefer-default-export": "off",
    "max-len": [2, 250],
    "object-curly-newline": "off",
    "react/jsx-filename-extension": 0,
    "react-no-deprecated": "off",
    "react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": "off",
  },
};
