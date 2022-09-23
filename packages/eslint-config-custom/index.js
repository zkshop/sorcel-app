module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'linebreak-style': ['error', 'unix'],
  },
};
