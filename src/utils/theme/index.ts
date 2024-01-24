import { textVariants } from './text-variants';
import {createBox, createText, createTheme} from '@shopify/restyle'
import { colors } from './colors'

const theme = createTheme({
    colors: colors,
    spacing: {
        "1": 4,
        "2": 8,
        "3": 12,
        "4": 16,
        "5": 20,
        "6": 24,
        "10": 40,
    },
    borderRadii: {
        none: 0,
        rounded: 4,
        "rounded-xl": 8,
        "rounded-2xl": 10,
        "rounded-3xl": 12,
    },
    textVariants,

})

export type Theme = typeof theme

export const Box = createBox<Theme>()
export const Text = createText<Theme>()

export default theme