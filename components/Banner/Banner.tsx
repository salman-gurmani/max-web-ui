import {
  Box,
  Text,
  Heading,
  Button,
  VStack,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react'
import { VideoBanner } from '@components/Banner/VideoBanner'
import React from 'react'
import { BoxLine } from '@components/BoxLine'
import { Element, Link as ScrollLink } from 'react-scroll'

const Banner = () => {
  return (
    <Element name="home">
      <Flex marginTop="72px">
        <Box overflow="hidden" position="relative">
          <VideoBanner />
          <Grid
            position="absolute"
            top={{ base: '2%', md: '5%', lg: '25%' }}
            left="0"
            width="100%"
            height="100%"
          >
            <GridItem
              gridTemplateColumns={{
                base: '1fr',
                md: '1fr 1fr',
                lg: '1fr 1fr 1fr',
              }}
            >
              <Box justifyContent="center" alignItems="center" height="100%">
                <VStack
                  w={{ base: '90%', md: '70%', lg: '50%' }}
                  position="relative"
                  padding={{ base: '15px', md: '40px' }}
                  gap={{ base: '1', md: '2', lg: '4' }}
                >
                  {/* <Button
                    color="white"
                    fontFamily="roboto"
                    fontWeight="17px"
                    w={{ base: '100px', md: '105px', lg: '145px' }}
                    height={{ base: '30px', md: '35px', lg: '40px' }}
                    flex-shrink="0"
                    fontSize={{ base: '16px', md: '20px' }}
                    border-radius="6px"
                    background="var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))"
                    paddingX={{ base: '3', md: '5', lg: '5' }}
                    zIndex="5"
                    alignSelf="flex-start"
                    pointerEvents="none"
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
                  </Button> */}
                  <Heading
                    color="white"
                    fontSize={{ base: '20px', md: '40px', lg: '55px' }}
                    zIndex={1}
                    fontFamily="roboto"
                    fontStyle="normal"
                    fontWeight="600"
                    alignSelf="flex-start"
                  >
                    WEB & MOBILE SOLUTIONS
                    <BoxLine
                      width={{ base: '70px', md: '100px', lg: '200px' }}
                      height="3px"
                      marginLeft="2px"
                      marginRight="auto"
                      bg="white"
                      marginTop="0px"
                    ></BoxLine>
                  </Heading>

                  <Text
                    color="white"
                    fontFamily="roboto"
                    maxWidth="100%"
                    fontSize={{ base: '14px', md: '18px', lg: '20px' }}
                    overflowWrap="break-word"
                    alignSelf="flex-start"
                  >
                    APP DEVELOPERS | WEB DESIGNERS | UX DESIGNERS
                  </Text>

                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={1500}
                    spy
                    style={{ alignSelf: 'flex-start' }}
                  >
                    <Button
                      color="white"
                      fontFamily="roboto"
                      fontWeight="400"
                      alignSelf="flex-start"
                      backgroundColor="transparent"
                      size="md"
                      zIndex="5"
                      variant="outline"
                      fontSize={{ base: '10px', md: '12px', lg: '15px' }}
                      paddingX={{ base: '3', md: '8', lg: '10' }}
                      backgroundImage="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
                      backgroundClip="text"
                      sx={{
                        borderImage: `linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%) 1`,
                        borderStyle: 'solid',
                        borderWidth: '1px',

                        '&:hover': {
                          background:
                            'var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))',
                          textColor: 'white',
                        },
                        '&:after': {
                          backgroundImage:
                            'linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)',
                          borderImage:
                            'linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%) 1',
                          borderWidth: '1px',
                        },
                      }}
                    >
                      Hire Me!
                    </Button>
                  </ScrollLink>
                </VStack>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Element>
  )
}

export { Banner }
