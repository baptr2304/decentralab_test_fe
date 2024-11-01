
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-sans': 'Anuphan, system-ui, sans-serif',
      },
      colors: {
        neutral: {
          1: "#FCFCFD",
          2: "#C0C0C9",
          3: "#777E90",
          4: "#313856",
          6: "#101423",
          7: "#0B0E18",
        },
        primary: {
          1: "#4EAEFD",
          2: "#97CFFD",
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, rgba(62, 162, 244, 0.00) 13.07%, rgba(66, 62, 244, 0.10) 103.18%)',
        'conic-gradient': 'conic-gradient(from 125deg at 49.86% 36.95%, #ABECA2 0.06deg, #2FB3FE 111.61deg, #6A8EEA 233.41deg, #A185F4 354.35deg)',
        'gradient-3': 'linear-gradient(90deg, #ABECA2 -1.42%, #2FB3FE 30.38%, #6A8EEA 65.09%, #A185F4 99.55%)',
      },
      backdropBlur: {
        custom: '14.164374351501465px',
      },
     

    },
  },
  plugins: [],
}