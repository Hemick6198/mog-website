import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "31px"],
      lg: ["18px", "31px"],
      xl: ["72px", "41px"],
      xxl: ["72px", "46px"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
