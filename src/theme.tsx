import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const fonts = {
  body: "'Merriweather', Garamond, 'Times New Roman', serif",
  heading: "'Oswald', 'Helvetica Neue', Helvetica, Arial, sans-serif",
}

const theme = extendTheme({ colors, fonts })

export default theme