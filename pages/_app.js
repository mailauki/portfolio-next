import '../styles/globals.css'
import { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function App({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            // main: "#20b2aa",
            main: prefersDarkMode ? "#ffc400": "#33ab9f",
            // main: prefersDarkMode ? "#ffc400": "#20b2aa",
            // light: "#ffcf33",
            // dark: "#b28900"
          }
        },
      }),
    [prefersDarkMode]
  )

  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
