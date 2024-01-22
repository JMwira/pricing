/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "one":"hsl(236, 72%, 79%)",
        "two":"hsl(237, 63%, 64%)",
        "three":"hsl(240, 78%, 98%)",
        "four":"hsl(234, 14%, 74%)",
        "five":"hsl(233, 13%, 49%)",
        "six":"hsl(232, 13%, 33%)"
      },
      backgroundImage:{
        'one':"url('../src/assets/bg-top.svg')",
        'two':"url('../src/assets/bg-bottom.svg')"
      }
    },
  },
  plugins: [],
}

