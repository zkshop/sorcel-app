module.exports = {
  extends: [
    'next',
    'turbo',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'react/jsx-key': 'off',
    'import/no-anonymous-default-export': 'off',
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
