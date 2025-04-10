module.exports = {
  extends: [
    'eslint:recommended',

    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',

    'airbnb',
    'airbnb-typescript',

    'prettier',
    'plugin:prettier/recommended',

    'plugin:@next/next/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs,json}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    'dist',
    'node_modules',
    'postcss.config.js',
    'tailwind.config.ts',
    'next.config.ts',
    '**/*.js',
  ],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T', 'K', 'U', 'R'],
      },
      {
        selector: 'function',
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Possible errors
    'max-lines-per-function': [
      'error',
      { max: 200, skipBlankLines: true, skipComments: true },
    ],
    'max-lines': [
      'error',
      { max: 300, skipBlankLines: true, skipComments: true },
    ],
    'no-console': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // Best practices
    'dot-notation': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'no-sequences': 'error',
    // Stylistic
    'array-bracket-spacing': 'error',
    'computed-property-spacing': ['error', 'never'],
    curly: 'error',
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    'one-var-declaration-per-line': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],
    'comma-dangle': [0, 'always-multiline'],
    // ES6
    'array-callback-return': 'off',
    'prefer-const': 'error',
    // Imports
    'import/prefer-default-export': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/extensions': 'off',
    'no-unused-expressions': 'off',
    'no-prototype-builtins': 'off',
    // REACT
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/href-no-hash': [0],
    'react/display-name': 0,
    'react/no-deprecated': 'error',
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true,
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'react/require-default-props': 0,
    'no-underscore-dangle': 0,
    'react/prop-types': 'off',
    'import/no-cycle': 'off',
  },
};
