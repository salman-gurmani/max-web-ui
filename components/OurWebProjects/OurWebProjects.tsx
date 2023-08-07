import {
  Box,
  Text,
  Heading,
  VStack,
  Grid,
  Image,
  Card,
  Flex,
  HStack,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Divider,
  Stack,
} from '@chakra-ui/react'

import ProjectImage from '../../public/images/ProjectImage.png'

const OurWebProjects = () => {
  return (
    <Box bg="#111215" padding="30px">
      <Box padding="20px">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }} // Split into two columns on larger screens
          gap={12}
        >
          {/* Left side with text and heading */}
          <VStack spacing={7} align="flex-start">
            <Heading
              backgroundImage="var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))"
              backgroundClip="text"
              color="transparent"
              fontFamily="roboto"
              fontSize={{ base: '20px', md: '40px', lg: '55px' }}
            >
              Our Web Projects
            </Heading>
            <Text color="white" fontFamily="roboto">
              Maxovation can be your trusted partner for top-notch web
              development services. We take pride in being a leading provider of
              innovative and bespoke web solutions that cater to the
              ever-evolving needs of businesses across industries.
            </Text>
            <Text color="white" fontFamily="roboto">
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
              fontSize={{ base: '10px', md: '12px', lg: '15px' }}
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

          {/* Right side with scrollable cards */}
          <Flex overflowX="auto">
            <HStack spacing={4} align="flex-start">
              {/* Replace the Box components with your card components */}
              <Box
                width="300px"
                height="350px"
                border-radius="10px"
                border="1px solid #2A2C39"
                background="#18191D"
              >
                {/* <CardBody> */}
                <Image src={ProjectImage.src} alt="" />
                <Stack mt="6" spacing="5">
                  <Text
                    color="white"
                    fontFamily="roboto"
                    fontWeight="400"
                    alignSelf="center"
                  >
                    22 Feb 2023
                  </Text>
                  <Heading
                    color="white"
                    fontFamily="roboto"
                    fontWeight="400"
                    alignSelf="center"
                    size="md"
                  >
                    Project One
                  </Heading>
                  <Button
                    color="white"
                    fontFamily="roboto"
                    fontWeight="400"
                    alignSelf="center"
                    backgroundColor="transparent"
                    size="sm"
                    zIndex="5"
                    variant="outline"
                    marginTop="20px"
                    fontSize={{ base: '10px', md: '12px', lg: '15px' }}
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
                    View Project
                  </Button>
                </Stack>
                {/* </CardBody> */}
              </Box>
              {/* <Box width="200px" height="200px" bg="gray.300">
                Card 2
              </Box>
              <Box width="200px" height="200px" bg="gray.300">
                Card 3
              </Box>
              <Box width="200px" height="200px" bg="gray.300">
                Card 4
              </Box>
              <Box width="200px" height="200px" bg="gray.300">
                Card 5
              </Box> */}
              {/* Add more card components as needed */}
            </HStack>
          </Flex>
        </Grid>
      </Box>
    </Box>
  )
}
export { OurWebProjects }
