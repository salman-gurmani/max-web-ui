import { PrimaryLayout } from '@components/Layout'
import { Banner } from '@components/Banner'
import { OurGameProject } from '@components/OurGamesProject'
import React from 'react'

const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
      <OurGameProject />
    </PrimaryLayout>
  )
}

export { Home }
