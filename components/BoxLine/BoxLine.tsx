import { Box } from '@chakra-ui/react'
import React from 'react'

interface BoxLineProps {
  width: string | object
  height: string
  marginLeft: string
  marginRight: string
  bg: string
  marginTop: string
  sx?: Record<string, any> // Allow additional custom styles
}

const BoxLine: React.FC<BoxLineProps> = ({
  width,
  height,
  marginLeft,
  marginRight,
  bg,
  marginTop,
}) => {
  return (
    <Box
      marginLeft={marginLeft}
      marginRight={marginRight}
      bg={bg}
      height={height}
      width={width}
      marginTop={marginTop}
    ></Box>
  )
}

export { BoxLine }
