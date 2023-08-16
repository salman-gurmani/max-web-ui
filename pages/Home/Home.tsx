import { PrimaryLayout } from '@components/Layout'
import { Banner } from '@components/Banner'
import { CompanyStats } from '@components/CompanyStats'
import React from 'react'

const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
      <CompanyStats />
    </PrimaryLayout>
  )
}

export { Home }
