import React from 'react'
import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

const VideoBanner = () => {
  return (
    <Box position="relative">
      <video autoPlay loop muted>
        <source
          src="https://res.cloudinary.com/dkorerd2g/video/upload/v1694697880/Icons/New_Video_Banner_ep90ov.mp4"
          type="video/mp4"
        />
      </video>
    </Box>
  )
}

export { VideoBanner }
