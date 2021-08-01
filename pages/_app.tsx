import '../styles/globals.scss'
import '../styles/fonts/MADE Tommy/stylesheet.scss'
import type { AppProps } from 'next/app'

import { ChakraProps, ChakraProvider, DarkMode, extendTheme, propNames, ThemeComponentProps, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'



const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#000')(props),
    },
  }),
}

const components = {
  Drawer: {
    baseStyle: (props: ThemeComponentProps) => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
  Container: {
    baseStyle: (props: ThemeComponentProps) => ({
      maxWidth: '100em'
    })
  }
}

const fonts = {
  body: 'made_tommy',
  heading: 'DM Sans',
}

const theme = extendTheme({
  config,
  components,
  styles,
  fonts,
})







// // 2. Add your color mode config
// const config: ThemeConfig = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// }
// // 3. extend the theme
// const theme = extendTheme({ config })


function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <div>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}
export default MyApp
