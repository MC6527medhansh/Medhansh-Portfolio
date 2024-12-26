// module.exports = {
//   parser: '@typescript-eslint/parser',
//   extends: ['next/core-web-vitals'],
//   ignorePatterns: ['*.css'],
//   rules: {
//     '@typescript-eslint/no-unused-vars':'warn'
//   }
// } 


module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
    ],
    rules: {
      // Add custom ESLint rules here
    },
  };
  