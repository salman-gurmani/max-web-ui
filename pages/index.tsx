import Home from './home'
import { GetStaticProps, NextPage } from 'next'
import { createOvermindSSR } from 'overmind'
import React from 'react'
import { storeConfig } from 'store/index'

import { Pages } from '@store/base/types'

export const getStaticProps: GetStaticProps = async () => {
  const overmind = createOvermindSSR(storeConfig)
  overmind.state.page = Pages.index
  return {
    props: {
      mutations: overmind.hydrate(),
    },
  }
}

const IndexPage: NextPage = () => {
  return <Home />
}

export default IndexPage
