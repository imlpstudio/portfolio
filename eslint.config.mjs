import next from "@next/eslint-plugin-next";

export default [
  {
    ignores: ["**/node_modules/**", "**/.next/**"],
  },
  {
    plugins: { "@next/next": next },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
