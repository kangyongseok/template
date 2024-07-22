import type { Config } from "tailwindcss"

const createColorPalette = (baseColor: string[]) => ({
  50: baseColor[0],
  100: baseColor[1],
  200: baseColor[2],
  300: baseColor[3],
  400: baseColor[4],
  500: baseColor[5],
  600: baseColor[6],
  700: baseColor[7],
  800: baseColor[8],
  900: baseColor[9],
});


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-Pretendard)', 'sans-serif']
      },
      colors: {
        black: '#141414',
        yellow: createColorPalette([
          '#FFFDE6', '#FFF9C2', '#FFF59A', '#FFF070',
          '#FDEB4E', '#FFEA2E', '#FDD738', '#FCBF20',
          '#FBA617', '#F87C06'
        ]),
        blue: createColorPalette([
          '#DAF4FC', '#9FE1F8', '#4FCEF4', '#00B9EF',
          '#00ABED', '#009CEB', '#008FDD', '#007CCB',
          '#006BB8', '#004C97'
        ]),
        red: createColorPalette([
          '#FFEBEE', '#FECCD1', '#EE9898', '#E37171', 
          '#ED504D', '#F14033', '#E23632', '#D02B2C', 
          '#C32425', '#B41719'
        ]),
        green: createColorPalette([
          '#E3F7ED', '#BCECD3', '#8FDFB7', '#56D399', 
          '#00C983', '#00BE6C', '#00AF61', '#009C54', 
          '#008B47', '#006A31'
        ]),
        brown: createColorPalette([
          '#F6E9CD', '#F6E9CD', '#BCA482', '#9A825A', 
          '#81683C', '#684F1F', '#5F4619', '#513A11', 
          '#452D08', '#452D08'
        ]),
        gray: createColorPalette([
          '#F7F7F7', '#EFEFEF', '#E3E3E3', '#D2D2D2', 
          '#ADADAD', '#8C8C8C', '#656565', '#525252', 
          '#343434', '#141414'
        ]),
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config