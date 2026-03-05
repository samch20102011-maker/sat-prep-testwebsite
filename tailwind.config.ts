import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef5ff",
          100: "#d9e6ff",
          200: "#b0c7ff",
          300: "#85a5ff",
          400: "#4b78ff",
          500: "#1f4fff",
          600: "#153ddb",
          700: "#1232b3",
          800: "#10298f",
          900: "#0f236f"
        },
        accent: {
          100: "#fff1e6",
          300: "#ffb88c",
          500: "#ff7a3c"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 35, 111, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
