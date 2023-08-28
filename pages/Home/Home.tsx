import { PrimaryLayout } from '@components/Layout'
import { Banner } from '@components/Banner'
import { GameTechnologies } from '@components/GameTechnologies'
import { WebTechnologies } from '@components/WebTechnologies'

import React from 'react'
import { OurGameProject } from '@components/OurGamesProject'
const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
      <OurGameProject />
      <GameTechnologies />
      <WebTechnologies />
    </PrimaryLayout>
  )
}

export { Home }
