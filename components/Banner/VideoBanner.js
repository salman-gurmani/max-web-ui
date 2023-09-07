import LoopVideo from './assets/HyperCasual.mp4'
import React from 'react'
import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

const VideoBanner = () => {
  {
    const VideoContainer = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
      position: relative;
      video {
        position: absolute;
      }
    `
  }

  return (
    <Box>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={LoopVideo} type="video/mp4" />
      </video>
    </Box>
  )
}

export { VideoBanner }
