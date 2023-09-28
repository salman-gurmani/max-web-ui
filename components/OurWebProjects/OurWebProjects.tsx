import { Text, Heading, VStack, Grid, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import projectDetailsData from '@components/Data/websitesData'

import { Slider } from '../Slider/Slider'
import { Element } from 'react-scroll'
import { Fade, Slide } from 'react-awesome-reveal'

const OurWebProjects = () => {
  return (
    <Element name="web">
      <Flex
        bg="#111215"
        padding={{ base: '20px', md: '30px', lg: '30px' }}
        position="relative"
      >
        <Box padding="40px">
          <Grid
            templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr' }}
            gap={5}
          >
            <VStack spacing={7} align="flex-start">
              <Slide>
                <Heading
                  backgroundImage="var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))"
                  backgroundClip="text"
                  color="transparent"
                  fontFamily="roboto"
                  fontSize={{ base: '25px', md: '45px', lg: '55px' }}
                >
                  Our Web Projects
                </Heading>
              </Slide>
              <Fade cascade delay={200}>
                <Text
                  color="white"
                  fontFamily="roboto"
                  fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                >
                  Maxovation can be your trusted partner for top-notch web
                  development services. We take pride in being a leading
                  provider of innovative and bespoke web solutions that cater to
                  the ever-evolving needs of businesses across industries.
                </Text>
                <Text
                  color="white"
                  fontFamily="roboto"
                  fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                >
                  With a team of skilled and experienced web developers, we
                  offer comprehensive web development services designed to
                  propel your online presence to new heights. We understand that
                  your website serves as the digital face of your brand, and we
                  are committed to delivering cutting-edge designs and
                  functionalities that leave a lasting impression on your target
                  audience.
                </Text>
              </Fade>
            </VStack>

            <Slide direction="right" delay={300}>
              <Grid templateColumns="1fr">
                <Slider slides={projectDetailsData} />
              </Grid>
            </Slide>
          </Grid>
        </Box>
      </Flex>
    </Element>
  )
}
export { OurWebProjects }
