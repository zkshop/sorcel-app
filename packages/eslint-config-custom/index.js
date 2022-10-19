module.exports = {
  extends: ['next', 'turbo', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': ['off'],
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
