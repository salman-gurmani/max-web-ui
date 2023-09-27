import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Roboto } from 'next/font/google'
import { createOvermind, createOvermindSSR, rehydrate } from 'overmind'
import { Provider } from 'overmind-react'
import App from 'next/app'
import React from 'react'
import { IAppContext, storeConfig } from '@store/index'
import NextNProgress from 'nextjs-progressbar'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const theme = extendTheme({
  fonts: {
    roboto: roboto.style.fontFamily,
  },
})
class MyApp extends App {
  private readonly overmind: IAppContext

  constructor(props: any) {
    super(props)

    const mutations = props.pageProps.mutations || []

    if (typeof window !== 'undefined') {
      this.overmind = createOvermind(storeConfig)
      this.overmind.actions.changePage(mutations)
    } else {
      this.overmind = createOvermindSSR(storeConfig)
      rehydrate(this.overmind.state, mutations)
    }
  }

  componentDidUpdate() {
    this.overmind.actions.changePage(this.props.pageProps.mutations || [])
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      //@ts-ignore
      <Provider value={this.overmind}>
        <ChakraProvider theme={theme}>
          <NextNProgress
            color="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    )
  }
}

export default MyApp
