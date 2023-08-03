import {
  Box,
  Text,
  Heading,
  Button,
  VStack,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react'

import BGImg from '../../public/images/homepage/Header.png'
import { BoxLine } from '@components/BoxLine'

const Banner = () => {
  return (
    <Box overflow="hidden" position="relative">
      <Image
        src={BGImg.src}
        alt=""
        height={{ base: '500px', lg: '700px' }}
        style={{
          zIndex: 0,
          width: '100%',
        }}
      />
      <Grid
        position="absolute"
        top={{ base: '2%', md: '20%', lg: '20%' }}
        left="0"
        width="100%"
        height="100%"
      >
        <GridItem gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}>
          <Box justifyContent="center" alignItems="center" height="100%">
            <VStack
              w={{ base: '80%', md: '70%', lg: '50%' }}
              position="relative"
              padding={{ base: '40px', md: '70px' }}
              gap={{ base: '1', md: '3', lg: '6' }}
            >
              <Button
                color="white"
                fontFamily="roboto"
                fontWeight="17px"
                fontSize={{ base: '16px', md: '20px' }}
                background="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
                paddingX={{ base: '3', md: '5', lg: '5' }}
                zIndex="5"
                alignSelf="flex-start"
                _hover={{
                  bgGradient:
                    'linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)',
                  backgroundClip: 'text',
                  borderColor: 'white',
                  borderStyle: 'solid',
                  borderWidth: '2px',
                }}
              >
                Visionize
              </Button>
              <Heading
                color="white"
                fontSize={{ base: '20px', md: '40px', lg: '55px' }}
                zIndex={1}
                fontFamily="roboto"
                alignSelf="flex-start"
              >
                WEB & MOBILE SOLUTIONS
                <BoxLine
                  width={{ base: '70px', md: '100px', lg: '200px' }}
                  height="3px"
                  marginLeft="2px"
                  marginRight="auto"
                  bg="white"
                ></BoxLine>
              </Heading>

              <Text
                color="white"
                fontFamily="roboto"
                maxWidth="100%"
                fontSize={{ base: '15px', md: '18px', lg: '20px' }}
                overflowWrap="break-word"
                alignSelf="flex-start"
              >
                APP DEVELOPER | WEB DESIGNERS | UX DESIGNERS
              </Text>

              <Button
                color="white"
                fontFamily="roboto"
                fontWeight="17px"
                alignSelf="flex-start"
                backgroundColor="transparent"
                size="md"
                zIndex="5"
                variant="outline"
                fontSize={{ base: '14px', md: '20px' }}
                paddingX={{ base: '5', md: '8', lg: '10' }}
                sx={{
                  borderImage: `linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%) 1`,
                  borderStyle: 'solid',
                  borderWidth: '1px',
                }}
                _hover={{
                  bgGradient:
                    'linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)',
                  textColor: 'white',
                }}
              >
                Hire Me!
              </Button>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export { Banner }
