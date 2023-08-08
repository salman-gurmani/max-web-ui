import { PrimaryLayout } from '@components/Layout'
import { Banner } from '@components/Banner'
import { WebTechnologies } from '@components/WebTechnologies'
import React from 'react'

const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
      <WebTechnologies />
    </PrimaryLayout>
  )
}

export { Home }
