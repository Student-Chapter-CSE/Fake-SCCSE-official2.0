import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'primary_text':"#595959",
        'pop_orange':'#FF5C00',
        'background':'#e8e8e8',
        'secondary_orange':'#FF8D4D'
      },
      fontSize:{
        'small':'0.75rem',
        'body':'0.875rem',
        'large':'6rem',
        'xlarge':'228px'
      },
      fontFamily:{
        'anton':['Anton','sans-serif'],
        'montserrat':['Montserrat','sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;