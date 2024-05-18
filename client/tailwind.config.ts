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
        'secondary_text': "#686868",
        'pop_orange':'#FF5C00',
        'background':'#e8e8e8',
        'secondary_orange':'#FF8D4D'
        
      },
      fontSize:{
        'small':'0.75rem',
        'body':'0.875rem',
        'medium':'2rem',
        'large':'6rem',
        'mlarge':'7rem',
        'xlarge':'228px'
      },
      fontFamily:{
        'anton':['Anton','sans-serif'],
        'montserrat':['Montserrat','sans-serif'],
        'antonio':['Antonio','sans-serif'],
      },
      animation: {
        'spin-slow':'spin 10s linear infinite',
        'slide-in': 'slideIn 0.5s forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animationDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      screens:{
        'desktop':'1360px',
        'phone':'320px',
        'mphone':'375px',
        'lphone':'425px',
        'lg':'1075px',
        'xl':'2560px',
        'mxl':'1780px',
      },
    },
  },
  plugins: [],
};
export default config;
