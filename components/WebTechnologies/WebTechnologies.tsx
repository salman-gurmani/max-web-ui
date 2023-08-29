import {
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
  Box,
  Image,
} from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'

import { WebTechnologiesImages } from '@components/Images'

const WebTechnologies = () => {
  return (
    <Flex
      bg="#18191D"
      padding={{ base: '25px', md: '27px', lg: '30px' }}
      justifyContent="center"
    >
      <VStack gap={5} paddingX={{ base: 0, md: 35 }}>
        <Heading
          fontFamily="roboto"
          color="white"
          textAlign="center"
          fontSize={{ base: '24px', md: '27px', lg: '32px' }}
        >
          Technologies we work in
          <BoxLine
            width="50%"
            height={1}
            marginLeft="auto"
            marginRight="auto"
            bg="#FF0084"
            marginTop={2}
          />
        </Heading>
        <Text
          fontFamily="roboto"
          color="white"
          textAlign="center"
          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
        >
          Our expertise covers a wide spectrum of web development technologies
          and frameworks, ensuring that we can tackle projects of any
          complexity. From HTML, CSS, and JavaScript for front-end development,
          to PHP, Python, and Ruby on Rails for back-end development, we have
          the proficiency to handle diverse requirements and deliver seamless
          solutions.
        </Text>
        <Text
          fontFamily="roboto"
          color="white"
          textAlign="center"
          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
        >
          Partner with us to unlock the full potential of your online presence.
          Our web development services are geared towards enhancing your digital
          footprint, attracting customers, and driving business growth. Contact
          us today to embark on a successful web development journey together.
        </Text>
        <HStack
          gap={{ base: 3, md: 7, lg: 10 }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box>
            <Image
              src={WebTechnologiesImages.htmlIcon.src.src}
              alt={WebTechnologiesImages.htmlIcon.alt}
            />
          </Box>
          <Box>
            <Image
              src={WebTechnologiesImages.cssIcon.src.src}
              alt={WebTechnologiesImages.cssIcon.alt}
            />
          </Box>
          <Box>
            <Image
              src={WebTechnologiesImages.jsIcon.src.src}
              alt={WebTechnologiesImages.jsIcon.alt}
            />
          </Box>
          <Box>
            <Image
              src={WebTechnologiesImages.reactIcon.src.src}
              alt={WebTechnologiesImages.reactIcon.alt}
            />
          </Box>
          <Box>
            <Image
              src={WebTechnologiesImages.angularIcon.src.src}
              alt={WebTechnologiesImages.angularIcon.alt}
            />
          </Box>
          <Box>
            <Image
              src={WebTechnologiesImages.nodeIcon.src.src}
              alt={WebTechnologiesImages.nodeIcon.alt}
            />
          </Box>
          <Box>
            <Image
              src={WebTechnologiesImages.phpIcon.src.src}
              alt={WebTechnologiesImages.phpIcon.alt}
            />
          </Box>
          <Box>
            <Image
              src={WebTechnologiesImages.railIcon.src.src}
              alt={WebTechnologiesImages.railIcon.alt}
            />
          </Box>
        </HStack>
      </VStack>
    </Flex>
  )
}

export { WebTechnologies }
