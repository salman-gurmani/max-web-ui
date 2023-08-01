import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Kanit } from '@next/font/google'
import { extendTheme } from '@chakra-ui/react'
import { createOvermind, createOvermindSSR, rehydrate } from 'overmind'
import { Provider } from 'overmind-react'
import App from 'next/app'
import React from 'react'
import { IAppContext, storeConfig } from '@store/index'
import { appWithTranslation } from 'next-i18next'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const theme = extendTheme({
  fonts: {
    kanit: kanit.style.fontFamily,
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
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    )
  }
}

export default appWithTranslation(MyApp)
