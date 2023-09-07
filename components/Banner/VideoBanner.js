import LoopVideo from './assets/HyperCasual.mp4'
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
        <source src={LoopVideo} type="video/mp4" />
      </video>
      <Overlay />
    </Box>
  )
}

export { VideoBanner }
