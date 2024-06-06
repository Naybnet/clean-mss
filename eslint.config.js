import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
}, {
  rules: {
    'no-irregular-whitespace': 'warn',
    'vue/no-irregular-whitespace': 'warn',
    'style/space-before-function-paren': ['error', 'always'],
    'curly': ['error', 'all'],
    'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'style/spaced-comment': [
      'error',
      'always',
      {
        markers: [
          '#region',
          '#endregion',
          '/',
        ],
      },
    ],
  },
})
