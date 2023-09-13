import React from 'react'
import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`
const VideoBanner = () => {
  return (
    <Box position="relative">
      <Overlay />

      <video autoPlay loop muted>
        <source
          src="https://res.cloudinary.com/dkorerd2g/video/upload/v1694585673/Video/HyperCasual_wxpjdi.mp4"
          type="video/mp4"
        />
      </video>

      <Overlay />
    </Box>
  )
}

export { VideoBanner }
