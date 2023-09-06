import {
  Box,
  Text,
  Heading,
  VStack,
  Grid,
  Image,
  Flex,
  HStack,
  Button,
  IconButton,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { WebData } from './WebProjectsData'
import { map } from 'lodash'
import ProjectImage from '../../public/images/ProjectImage.png'
import { v4 as uuidv4 } from 'uuid'

const OurWebProjects = () => {
  const overflowXValue = useBreakpointValue<string>({
    base: 'auto',
    lg: 'hidden',
  })
  const projectContainerRef = useRef<HTMLDivElement | null>(null) // Add type annotation

  const handleScroll = (direction: string) => {
    const projectContainer = projectContainerRef.current
    if (!projectContainer) return

    const cardWidth = projectContainer.offsetWidth / 2
    const scrollStep = direction === 'left' ? -cardWidth : cardWidth
    projectContainer.scrollLeft += scrollStep
  }
  return (
    <Box bg="#111215" padding="40px" position="relative">
      <IconButton
        className="scroll-button scroll-prev"
        onClick={() => handleScroll('left')}
        bg="#1F2024"
        color="white"
        borderRadius="12px"
        aria-label="Scroll Left"
        icon={<FaAngleLeft />}
        fontSize="26px"
        size="sm"
        position="absolute"
        left="0.5%"
        top="50%"
        transform="translateY(-50%)"
      />
      <Box padding="40px">
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12}>
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
          <Grid templateColumns="1fr" gap={0}>
            <Flex overflow={overflowXValue} ref={projectContainerRef}>
              <HStack margin={5} spacing={12} align="center">
                {map(WebData, (data) => {
                  return (
                    <Box
                      key={uuidv4()}
                      width={{ base: '250px', md: '275px', lg: '300px' }}
                      height="350px"
                      borderRadius="10px"
                      border="1px solid #2A2C39"
                      background="#18191D"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      overflow="hidden"
                    >
                      <Image
                        src={ProjectImage.src}
                        alt=""
                        borderRadius="10px 10px 0 0"
                        style={{ flex: '1', objectFit: 'cover' }}
                      />

                      <VStack
                        mt="4"
                        spacing="5"
                        style={{ flex: '1', width: '100%' }}
                      >
                        <Text
                          color="white"
                          fontFamily="roboto"
                          fontWeight="400"
                          alignSelf="center"
                        >
                          {data.date}
                        </Text>
                        <Text
                          color="white"
                          fontFamily="roboto"
                          fontWeight="400"
                          alignSelf="center"
                        >
                          {data.name}
                        </Text>
                        <Link
                          // href={`Websites/${data.id}`}
                          href={data.link}
                          color="white"
                          fontFamily="roboto"
                          fontWeight="400"
                          alignSelf="center"
                          backgroundColor="transparent"
                          width="124px"
                          height="40px"
                          zIndex="5"
                          variant="outline"
                          textAlign="center"
                          fontSize="12px"
                          paddingX={{ base: '1', md: '5', lg: '4' }}
                          paddingY={2}
                          target="_blank"
                          backgroundImage="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
                          backgroundClip="text"
                          sx={{
                            borderImage: `linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%) 1`,
                            borderStyle: 'solid',
                            borderWidth: '2px',
                          }}
                          _hover={{
                            background:
                              'var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))',
                            textColor: 'white',
                          }}
                        >
                          View Project
                        </Link>
                      </VStack>
                    </Box>
                  )
                })}
              </HStack>
            </Flex>
          </Grid>
        </Grid>
      </Box>
      <IconButton
        className="scroll-button scroll-next"
        onClick={() => handleScroll('right')}
        bg="#1F2024"
        color="white"
        borderRadius="12px"
        aria-label="Scroll Right"
        icon={<FaAngleRight />}
        fontSize="26px"
        size="sm"
        position="absolute"
        right="0.5%"
        top="50%"
        transform="translateY(-50%)"
      />
    </Box>
  )
}
export { OurWebProjects }
