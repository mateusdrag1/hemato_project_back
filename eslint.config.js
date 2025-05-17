import stylistic from '@stylistic/eslint-plugin';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import love from 'eslint-config-love';

export default [
  {
    ...love,
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/prisma/**'],
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
      '@stylistic': stylistic,
    },
    rules: {
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'space-before-function-paren': 'off',
      'no-return-await': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@stylistic/member-delimiter-style': 'off',
    },
  },
];
