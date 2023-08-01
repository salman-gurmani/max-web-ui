import { ModalLayout, PrimaryLayout } from '../../Components/Layout'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { SocialMedia } from '../../Components/SocialMedia'

const Home = () => {
  return (
    <PrimaryLayout>
      <ModalLayout />
      <Box position="absolute" top={240} right={2} zIndex={2}>
        <SocialMedia flexDirection="column" />
      </Box>
    </PrimaryLayout>
  )
}

export { Home }
