import { Flex, Heading, VStack, Text, HStack, Box } from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'

import { CldImage } from 'next-cloudinary'

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
            height="1px"
            marginLeft="auto"
            marginRight="auto"
            bg="#FF0084"
            marginTop="2px"
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
            <CldImage
              src="v1694585532/Icons/WebTechnologies/html_imdjdo.svg"
              alt=""
              height={110}
              width={110}
            />
          </Box>
          <Box>
            <CldImage
              src="v1694585532/Icons/WebTechnologies/css_vmeeuz.svg"
              alt=""
              height={110}
              width={110}
            />
          </Box>
          <Box>
            <CldImage
              src="v1694585532/Icons/WebTechnologies/js_bvjygm.svg"
              alt=""
              height={110}
              width={110}
            />
          </Box>
          <Box>
            <CldImage
              src="v1694585532/Icons/WebTechnologies/react_rmsuz2.svg"
              alt=""
              height={110}
              width={110}
            />
          </Box>
          <Box>
            <CldImage
              src="v1694585532/Icons/WebTechnologies/angular_tinvcf.svg"
              alt=""
              height={110}
              width={110}
            />
          </Box>
          <Box>
            <CldImage
              src="v1694585532/Icons/WebTechnologies/nodeJsIcon_ac573p.svg"
              alt=""
              height={110}
              width={110}
            />
          </Box>
          <Box>
            <CldImage
              src="v1694585532/Icons/WebTechnologies/php_joafrd.svg"
              alt=""
              height={110}
              width={110}
            />
          </Box>
          <Box>
            <CldImage
              src="v1694585532/Icons/WebTechnologies/rails_ezlu2r.svg"
              alt=""
              height={110}
              width={110}
            />
          </Box>
        </HStack>
      </VStack>
    </Flex>
  )
}

export { WebTechnologies }
