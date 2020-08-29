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
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0
  },
  ignorePatterns: [
    "src/setupTests.js",
    "src/serviceWorker.js",
    "node_modules"
  ],
  settings: {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ]
      }
    }
  },
  globals: {
    "describe": true,
    "mount": true,
    "it": true,
    "expect": true,
    "beforeEach": true,
    "afterEach": true,
    "jest": true,
    "beforeAll": true,
    "afterAll": true,
  }
};
