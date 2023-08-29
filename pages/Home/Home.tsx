import { PrimaryLayout } from '@components/Layout'
import { Banner } from '@components/Banner'

import { Expertise } from '@components/Expertise'

import { GameTechnologies } from '@components/GameTechnologies'
import { WebTechnologies } from '@components/WebTechnologies'
import { OurWebProjects } from '@components/OurWebProjects'
import { OurServices } from '@components/OurServices'

import React from 'react'
import { OurGameProject } from '@components/OurGamesProject'
const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />

      <Expertise />

      <OurWebProjects />
      <WebTechnologies />
      <OurGameProject />
      <GameTechnologies />
      <OurServices />

    </PrimaryLayout>
  )
}

export { Home }
