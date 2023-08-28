import { PrimaryLayout } from '@components/Layout'
import { Banner } from '@components/Banner'

import { WebTechnologies } from '@components/WebTechnologies'

import React from 'react'
import { OurGameProject } from '@components/OurGamesProject'
const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
      <OurGameProject />
      <WebTechnologies />
    </PrimaryLayout>
  )
}

export { Home }
