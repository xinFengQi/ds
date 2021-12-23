// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: '@typescript-eslint/parser',
    "ecmaFeatures": {
      "legacyDecorators": true
    },
    "ecmaFeatures": {
      "jsx": true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "id-match": 1,
    '@typescript-eslint/no-non-null-assertion': 0,
  }
}
