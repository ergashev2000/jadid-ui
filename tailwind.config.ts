import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        'primary-foreground': "var(--primary-foreground)"
      },
      fontFamily: {
        sans: ["var(--font-main)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
