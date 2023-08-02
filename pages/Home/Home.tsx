import { ModalLayout, PrimaryLayout } from '@components/Layout'
import { Box } from '@chakra-ui/react'
import { Banner } from '@components/Banner'
import React from 'react'
import { SocialMedia } from '@components/SocialMedia'

const Home = () => {
  return (
    <PrimaryLayout>
      <Banner />
      {/* <ModalLayout />
      <Box position="absolute" top={240} right={2} zIndex={2}>
        <SocialMedia flexDirection="column" />
      </Box> */}
    </PrimaryLayout>
  )
}

export { Home }
