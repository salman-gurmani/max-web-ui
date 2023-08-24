import { PrimaryLayout } from '../../components/Layout'
import { Banner } from '../../components/Banner'
import React from 'react'
import { OurWebProjects } from '../../components/OurWebProjects'

const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
      <OurWebProjects />
    </PrimaryLayout>
  )
}

export { Home }
