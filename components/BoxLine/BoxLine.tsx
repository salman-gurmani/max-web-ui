import { Box } from '@chakra-ui/react'
import React from 'react'

const BoxLine = ({ width, height, marginLeft, marginRight, bg }) => {
  return (
    <Box
      marginLeft={marginLeft}
      marginRight={marginRight}
      bg={bg}
      height={height}
      width={width}
    ></Box>
  )
}

export { BoxLine }
