import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   "gray-100": "#6F757C",
    //   "gray-200": "#1B1D1F",
    //   "gray-300": "#111315",
    //   "beige": "#FEF7EE",
    //   "green": "#BEE3CC",
    //   "yellow": "#F6C768",
    //   "red": "#ED735D"
    // },
    fontFamily: {
      "DM Sans": ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}

export default config;
