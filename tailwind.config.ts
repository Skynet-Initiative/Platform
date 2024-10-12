import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-1": "linear-gradient(113deg, #0A0F1C, #13203D)",
        "gradient-2":
          "linear-gradient(35deg, rgba(16, 20, 192, 0.1), rgba(39, 40, 85, 0.1))",
        "gradient-3":
          "linear-gradient(182deg, rgba(16, 20, 192, 0.2) 22%, rgba(39, 40, 85, 0.2) 99%)",
        "gradient-4":
          "linear-gradient(72deg,rgba(115, 103, 240, 0.3) 22.16%, rgba(115, 103, 240, 0.21) 76.47%)",
        "gradient-5": "linear-gradient(171deg, #0A0F1C 6.74%, #13203D 94.87%)",
      },
      fontFamily: {
        satoshi: "Satoshi, sans-serif",
        inter: "Inter, sans-serif",
        publicsans: "PublicSans, sans-serif",
      },
      colors: {
        grey: {
          100: "#9a9eac",
          200: "#7a8092",
          300: "#333844",
        },
        blue: {
          100: "#8692D0",
          200: "#3da2ff",
          300: "#0074e4",
          400: "#0d275a",
          500: "#0c113f",
        },
        transparent: {
          40: "rgba(255,255,255,0.4)",
          20: "rgba(255,255,255,0.2)",
          8: "rgba(255,255,255,0.08)",
          5: "rgba(255,255,255,0.05)",
          4: "rgba(255,255,255,0.04)",
          2: "rgba(255,255,255,0.02)",
        },
        red: {
          400: "#d67367",
        },
        green: {
          300: "#28C76F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
