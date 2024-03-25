import { colors } from "./src/theme/colors"
import {fonts} from './src/theme/fonts'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fonts
    },
  },
  plugins: [],
}

