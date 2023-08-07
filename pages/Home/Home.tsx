import { PrimaryLayout } from '@components/Layout'
import { Banner } from '@components/Banner'
import { Expertise } from '@components/Expertise'
import React from 'react'

const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
      <Expertise />
    </PrimaryLayout>
  )
}

export { Home }
