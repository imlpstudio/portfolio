/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: { brand: { DEFAULT: "#0E7C66" } },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,0.08)" },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" },
    },
  },
};
