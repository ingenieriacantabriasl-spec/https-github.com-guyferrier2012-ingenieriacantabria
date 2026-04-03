import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a3a5c",
          dark: "#0d1e30",
          light: "#2a5080",
        },
        accent: {
          DEFAULT: "#d4631a",
          light: "#e8844a",
          dark: "#b04f12",
        },
        steel: "#4a6080",
        cream: "#f5f7fa",
        industrial: "#e07b39",
        edificacion: "#2d6a9f",
        agronomia: "#2d6a4f",
      },
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0d1e30 0%, #1a3a5c 60%, #2a5080 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
