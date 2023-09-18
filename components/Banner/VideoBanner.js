import React from 'react'
import { Box } from '@chakra-ui/react'

const VideoBanner = () => {
  return (
    <Box position="relative">
      <video autoPlay loop muted>
        <source
          src="https://res.cloudinary.com/dkorerd2g/video/upload/v1694697880/Icons/video_2160p_kyu4ac.mp4"
          type="video/mp4"
        />
      </video>
    </Box>
  )
}

export { VideoBanner }
