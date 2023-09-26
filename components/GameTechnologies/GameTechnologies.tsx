import { Flex, Heading, VStack, HStack, Box } from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
import { CldImage } from 'next-cloudinary'
import { Zoom } from 'react-awesome-reveal'

const GameTechnologies = () => {
  return (
    <Flex bg="#18191D" padding={30} justifyContent="center">
      <VStack gap={5} paddingX={{ base: 0, md: 35 }}>
        <Zoom cascade>
          {' '}
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
        </Zoom>
        <HStack
          gap={{ base: 3, md: 7, lg: 10 }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Zoom cascade delay={500}>
            <Box>
              <CldImage
                src="v1694585521/Icons/gameTechnologies/unity_mjjvql.svg"
                alt=""
                width={110}
                height={110}
              />
            </Box>

            <Box>
              <CldImage
                src="v1694585521/Icons/gameTechnologies/unrealEngine_c53jnv.svg"
                alt=""
                width={110}
                height={110}
              />
            </Box>
          </Zoom>
        </HStack>
      </VStack>
    </Flex>
  )
}

export { GameTechnologies }
