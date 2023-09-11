import { Flex, Heading, VStack, HStack, Box, Image } from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
import { gameTechnologiesImages } from '@components/Images'

const GameTechnologies = () => {
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
            height="1px"
            marginLeft="auto"
            marginRight="auto"
            bg="#FF0084"
            marginTop="2px"
          />
        </Heading>

        <HStack
          gap={{ base: 3, md: 7, lg: 10 }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box>
            <Image
              src={gameTechnologiesImages.unityIcon.src.src}
              alt={gameTechnologiesImages.unityIcon.alt}
            />
          </Box>
          <Box>
            <Image
              src={gameTechnologiesImages.unrealIcon.src.src}
              alt={gameTechnologiesImages.unrealIcon.alt}
            />
          </Box>
        </HStack>
      </VStack>
    </Flex>
  )
}

export { GameTechnologies }
