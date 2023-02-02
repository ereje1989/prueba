//import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import React from 'react'
import { temaPrueba } from '../themes/temaPrueba'
import { lightTheme } from '../themes/lightTheme';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Component  {...pageProps}/>
    </ThemeProvider>
  )
}


