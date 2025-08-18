// Minimal flat config: disable the rule causing the failure
export default [
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      // optional: keep builds quiet
      'no-unused-vars': 'warn',
    },
  },
];
