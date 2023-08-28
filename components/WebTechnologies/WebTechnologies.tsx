import { Flex, Heading, VStack, Text, HStack, Box } from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  AngularIcon,
  PhpIcon,
  RailsIcon,
  NodeIcon,
} from './imagesData'

const WebTechnologies = () => {
  return (
    <Flex bg="#18191D" padding={30} justifyContent="center">
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
          <Box
            as="svg"
            width={{ base: '60px', md: '70px', lg: '90px' }}
            height={{ base: '60px', md: '70px', lg: '90px' }}
            viewBox="0 0 110 110"
            fill="none"
          >
            {HTMLIcon}
          </Box>
          <Box
            as="svg"
            width={{ base: '60px', md: '70px', lg: '90px' }}
            height={{ base: '60px', md: '70px', lg: '90px' }}
            viewBox="0 0 110 110"
            fill="none"
          >
            {CSSIcon}
          </Box>
          <Box
            as="svg"
            width={{ base: '60px', md: '70px', lg: '90px' }}
            height={{ base: '60px', md: '70px', lg: '90px' }}
            viewBox="0 0 110 110"
            fill="none"
          >
            {JSIcon}
          </Box>
          <Box
            as="svg"
            width={{ base: '60px', md: '70px', lg: '90px' }}
            height={{ base: '60px', md: '70px', lg: '90px' }}
            viewBox="0 0 110 110"
            fill="none"
          >
            {ReactIcon}
          </Box>
          <Box
            as="svg"
            width={{ base: '60px', md: '70px', lg: '90px' }}
            height={{ base: '60px', md: '70px', lg: '90px' }}
            viewBox="0 0 110 110"
            fill="none"
          >
            {AngularIcon}
          </Box>
          <Box
            as="svg"
            width={{ base: '60px', md: '70px', lg: '90px' }}
            height={{ base: '60px', md: '70px', lg: '90px' }}
            viewBox="0 0 110 110"
            fill="none"
          >
            {NodeIcon}
          </Box>
          <Box
            as="svg"
            width={{ base: '60px', md: '70px', lg: '90px' }}
            height={{ base: '60px', md: '70px', lg: '90px' }}
            viewBox="0 0 110 110"
            fill="none"
          >
            {PhpIcon}
          </Box>
          <Box
            as="svg"
            width={{ base: '60px', md: '70px', lg: '90px' }}
            height={{ base: '60px', md: '70px', lg: '90px' }}
            viewBox="0 0 110 110"
            fill="none"
          >
            {RailsIcon}
          </Box>
        </HStack>
      </VStack>
    </Flex>
  )
}

export { WebTechnologies }
