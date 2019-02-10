module.exports = {
  extends: ['airbnb', 'standard', 'react-app'],
  rules: {
    'no-console': 'off', // temporary, until we define a logger
    'no-alert': 'off', // temporary, until we define a logger
    // 'import/prefer-default-export': 'off',
    // 'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off', // temporary, to be added in future commit
    'react/destructuring-assignment': 'off'
    // 'space-before-function-paren': [2, 'always']
  },
  globals: {
    describe: true,
    expect: true,
    it: true
  }
}
