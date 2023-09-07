import { Text, Heading, VStack, Grid, Button, Box } from '@chakra-ui/react'
import React from 'react'
import { WebData } from './WebProjectsData'

import { Slider } from '../Slider/Slider'

const OurWebProjects = () => {
  return (

    <Box
      bg="#111215"
      padding={{ base: '20px', md: '30px', lg: '35px' }}
      position="relative"
    >
      <Box padding="40px">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr' }}
          gap={12}

        >
          <VStack spacing={7} align="flex-start">
            <Heading
              backgroundImage="var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))"
              backgroundClip="text"
              color="transparent"
              fontFamily="roboto"
              fontSize={{ base: '25px', md: '45px', lg: '55px' }}
            >
              Our Web Projects
            </Heading>
            <Text
              color="white"
              fontFamily="roboto"
              fontSize={{ base: '13px', md: '15px', lg: '18px' }}
            >
              Maxovation can be your trusted partner for top-notch web
              development services. We take pride in being a leading provider of
              innovative and bespoke web solutions that cater to the
              ever-evolving needs of businesses across industries.
            </Text>
            <Text
              color="white"
              fontFamily="roboto"
              fontSize={{ base: '13px', md: '15px', lg: '18px' }}
            >
              With a team of skilled and experienced web developers, we offer
              comprehensive web development services designed to propel your
              online presence to new heights. We understand that your website
              serves as the digital face of your brand, and we are committed to
              delivering cutting-edge designs and functionalities that leave a
              lasting impression on your target audience.
            </Text>

            <Button
              color="white"
              fontFamily="roboto"
              fontWeight="400"
              alignSelf="flex-start"
              backgroundColor="transparent"
              size="md"
              zIndex="5"
              variant="outline"
              marginTop="20px"
              fontSize={{ base: '12px', md: '12px', lg: '15px' }}
              paddingX={{ base: '3', md: '8', lg: '10' }}
              backgroundImage="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
              backgroundClip="text"
              sx={{
                borderImage: `linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%) 1`,
                borderStyle: 'solid',
                borderWidth: '1px',
              }}
              _hover={{
                background:
                  'var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))',
                textColor: 'white',
              }}
            >
              View All
            </Button>
          </VStack>

          <Grid templateColumns="1fr">
            <Slider slides={WebData} />

          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
export { OurWebProjects }
