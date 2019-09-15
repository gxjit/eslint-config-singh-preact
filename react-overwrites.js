module.exports = {
  rules: {
    // Specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-single'],

    // Detect missing key prop (react/jsx-key)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Prevent direct mutation of this.state (react/no-direct-mutation-state)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    // this is necessary for server-rendering
    'react/no-did-mount-set-state': 'error'

    // developit/eslint-config-developit <- preact specific rules
  }
}
