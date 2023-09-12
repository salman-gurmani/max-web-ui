import Home from './Home/Home'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, NextPage } from 'next'
import { createOvermindSSR } from 'overmind'
import React from 'react'
import { storeConfig } from 'store/index'

import { Pages } from '@store/base/types'

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const overmind = createOvermindSSR(storeConfig)
  overmind.state.page = Pages.index
  return {
    props: {
      locale,
      mutations: overmind.hydrate(),
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const IndexPage: NextPage = () => {
  return <Home />
}

export default IndexPage
