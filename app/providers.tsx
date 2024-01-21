'use client'

import { ChakraProps, ChakraProvider, DarkMode, defineStyle, extendBaseTheme, extendTheme, propNames, ThemeComponentProps, ThemeConfig, ThemeProvider } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { theme } from '@chakra-ui/theme'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#000')(props),
      fontFamily: 'DM Sans',
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
      maxWidth: '80em',
      marginLeft: 'auto',
      marginRight: 'auto',
    })
  },
  Heading: {
    baseStyle: (props: ThemeComponentProps) => ({
      fontFamily: 'made_tommy',
    }),
  },
}

const _theme = extendBaseTheme({
  ...theme,
  config,
  components,
  styles,
})

export function Providers ({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={_theme}>
      {children}
    </ChakraProvider>
  )
}