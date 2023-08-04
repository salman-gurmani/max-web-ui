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
} from '@chakra-ui/react'

import BGImg from '../../public/images/homepage/Header.png'
import { BoxLine } from '@components/BoxLine'

const OurWebProjects = () => {
  return (
    <Box bg="#111215">
      <Box padding="20px">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }} // Split into two columns on larger screens
          gap={4}
        >
          {/* Left side with text and heading */}
          <VStack spacing={4} align="flex-start">
            <Heading>Our Web Projects</Heading>
            <Text>
              Maxovation can be your trusted partner for top-notch web
              development services. We take pride in being a leading provider of
              innovative and bespoke web solutions that cater to the
              ever-evolving needs of businesses across industries.
            </Text>
            <Text>
              With a team of skilled and experienced web developers, we offer
              comprehensive web development services designed to propel your
              online presence to new heights. We understand that your website
              serves as the digital face of your brand, and we are committed to
              delivering cutting-edge designs and functionalities that leave a
              lasting impression on your target audience.
            </Text>
          </VStack>

          {/* Right side with scrollable cards */}
          <Flex overflowX="auto">
            <HStack spacing={4} align="flex-start">
              {/* Replace the Box components with your card components */}
              <Card width="200px" height="200px" bg="gray.300">
                Card 1
              </Card>
              <Box width="200px" height="200px" bg="gray.300">
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
              </Box>
              {/* Add more card components as needed */}
            </HStack>
          </Flex>
        </Grid>
      </Box>
    </Box>
  )
}
export { OurWebProjects }
