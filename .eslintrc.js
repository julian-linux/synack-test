module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len": 0,
    "camelcase": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": 0
  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ]
      }
    }
  }
};
