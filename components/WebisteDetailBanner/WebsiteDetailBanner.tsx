import { Flex, VStack, Heading, Box, Image, Text } from '@chakra-ui/react'
import BannerImg from '../../public/Icons/HeaderImg.png'
import { FaAngleRight } from 'react-icons/fa'
import { Bounce, Fade } from 'react-awesome-reveal'

interface WebsiteDetailBannerProps {
  title: string
}
const WebsiteDetailBanner = (prop: WebsiteDetailBannerProps) => {
  return (
    <Box overflow="hidden" position="relative">
      <Image
        src={BannerImg.src}
        alt=""
        height={{ base: '300px', md: '400px', lg: '500px' }}
        style={{
          zIndex: 0,
          width: 'auto',
          objectFit: 'fill',
        }}
      />
      <Flex
        position="absolute"
        top="3%"
        left="0"
        width="100%"
        height="100%"
        justifyContent="center"
      >
        <VStack
          w="100%"
          //  w={{ base: '80%', md: '80%', lg: '100%' }}
          position="relative"
          padding={{ base: '40px', md: '70px' }}
          gap={{ base: '1', md: '3', lg: '6' }}
          align="center"
          justify="center"
        >
          <Bounce>
            <Heading
              color="transparent"
              backgroundImage="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
              backgroundClip="text"
              fontSize={{ base: '20px', md: '35px', lg: '55px' }}
              zIndex={1}
              fontFamily="roboto"
              fontStyle="normal"
              fontWeight="600"
            >
              Portfolio Details{' '}
            </Heading>
          </Bounce>
          <Flex alignItems="center">
            <Fade cascade>
              <Text
                color="white"
                fontFamily="roboto"
                maxWidth="100%"
                fontSize={{ base: '14px', md: '18px', lg: '20px' }}
              >
                Home
              </Text>
              <Box as="span" mx="2" color="white">
                <FaAngleRight />
              </Box>
              <Text
                color="white"
                fontFamily="roboto"
                maxWidth="100%"
                fontSize={{ base: '14px', md: '18px', lg: '20px' }}
              >
                {prop.title}
              </Text>
            </Fade>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  )
}
export { WebsiteDetailBanner }
