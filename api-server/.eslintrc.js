module.exports = {
  'root': true,
  'parserOptions': {
    'ecmaVersion': 2019,
    'sourceType': 'module',
    'ecmaFeatures': {
      'impliedStrict': true
    }
  },
  'env': {
      'node': true
  },
  'plugins': ['node'],
  'extends': ['eslint:recommended', 'plugin:node/recommended'],
  'globals': {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
      'ecmaVersion': 2018
  },
  'rules': {
      'indent': ['error', 2 ],
      'linebreak-style': ['error', 'windows' ],
      'quotes': ['error','single'],
      'semi': ['error','never'],
      'block-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'always'],
      'comma-spacing': ['error', { "before": false, "after": true }],
      'func-call-spacing': ['error','never']
  }
}