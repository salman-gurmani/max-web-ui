import { PrimaryLayout } from '@components/Layout'
import { Banner } from '@components/Banner'
import React from 'react'
import { ContactUs } from '@components/ContactUs'

const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
      <ContactUs />
    </PrimaryLayout>
  )
}

export { Home }
