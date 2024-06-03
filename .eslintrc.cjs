module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@unocss'
  ],
  rules: {
    'vue/no-setup-props-destructure': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-reserved-component-names': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off',

    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/require-toggle-inside-transition': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'no-prototype-builtins': 0,
    'no-irregular-whitespace': 0,
    'no-empty': 0,
    'no-useless-escape': 0,
    'vue/multi-word-component-names': 'off',
    'no-self-assign': 'off',
    'no-debugger': 0,
    'no-redeclare': 0,
    'no-constant-condition': 0,
    'no-unsafe-optional-chaining': 0,
    'vue/no-v-html': 'off',
    '@unocss/order': 'off', // 芋艿：禁用 unocss 【css】顺序的提示，因为暂时不需要这么严格，警告也有点繁琐
    '@unocss/order-attributify': 'off', // 芋艿：禁用 unocss 【属性】顺序的提示，因为暂时不需要这么严格，警告也有点繁琐
    'vue/valid-v-for': 0,
    'no-case-declarations': 0,
    'vue/require-v-for-key': 0,
    'vue/no-mutating-props': 0,
    'vue/no-unused-vars': 0,
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': [2, 'last'],
    'vue/no-unused-components': 0,
    'no-undef': 'off'
  }
}
