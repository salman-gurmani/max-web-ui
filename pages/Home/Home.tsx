import { ModalLayout, PrimaryLayout } from '@components/Layout'
import { Box } from '@chakra-ui/react'
import { Banner } from '@components/Banner'
import React from 'react'
import { SocialMedia } from '@components/SocialMedia'

const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
    </PrimaryLayout>
  )
}

export { Home }
