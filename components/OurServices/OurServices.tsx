import {
  Flex,
  Heading,
  VStack,
  Text,
  Box,
  Grid,
  HStack,
  IconButton,
  Image,
} from '@chakra-ui/react'
import { ServiceData } from './ServiceData'
import { map } from 'lodash'
import { Element } from 'react-scroll'
const OurServices = () => {
  const gridTemplateColumns = {
    base: 'repeat(1, 1fr)',
    sm: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(2, 1fr)',
    xl: 'repeat(2, 1fr)',
  }

  const gridGap = {
    base: 0,
    md: 4,
    lg: 6,
  }
  return (
    <Element name="service">
      <Flex
        bg="#111215"
        px={{ base: 4, md: 45 }}
        py={35}
        justifyContent="center"
        direction="column"
      >
        <VStack gap={5} paddingX={{ base: 0, md: 35, lg: 45 }}>
          <Heading
            backgroundImage="linear-gradient(135deg, #2FBBFB 20%, #D442E0 51.56%, #F15D3C 100%)"
            backgroundClip="text"
            fontStyle="normal"
            color="transparent"
            fontFamily="roboto"
            fontSize={{ base: '30px', md: '35px', lg: '46px' }}
            paddingTop={{ base: 0, md: 3, lg: 5 }}
            textAlign="center"
          >
            Our Services
          </Heading>
          <Text
            fontFamily="roboto"
            color="white"
            textAlign="center"
            fontSize={{ base: '12px', md: '14px', lg: '16px' }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight="22px"
          >
            Maxovation Gaming Department, your gateway to captivating gaming
            experiences across mobile, web, and PC platforms. We are passionate
            about crafting immersive games that keep you entertained wherever
            you play. With our expert team of developers, designers, and
            artists, we create innovative and visually stunning games that push
            the boundaries of gameplay. Whether you're seeking thrilling
            adventures on your mobile device, engaging web-based games, or
            immersive PC gaming experiences, we have you covered. Our dedication
            to excellence and commitment to delivering top-quality games ensures
            that you'll be hooked from the first play. Get ready to dive into a
            world of excitement and join us on this exhilarating gaming journey
            with Maxovation.
          </Text>
        </VStack>
        <Box width="auto" height="auto" margin={17}>
          <Grid templateColumns={gridTemplateColumns} gap={gridGap}>
            {map(ServiceData, (data) => {
              return (
                <Box
                  justifySelf="center"
                  height="auto"
                  width="auto"
                  borderRadius="10px"
                  border="1px solid #2A2C39"
                  background="#17181B"
                  marginTop={{ base: 10, md: 15, lg: 25 }}
                  marginX={{ base: 2, md: 10, lg: 15 }}
                  paddingY={{ base: 30, md: 35, lg: 45 }}
                  paddingX={2}
                >
                  <HStack
                    alignItems="center"
                    marginX={5}
                    justifyContent="center"
                  >
                    <IconButton
                      icon={<Image src={data.icon} alt="" />}
                      aria-label={data.title}
                      isRound
                      background="#2A2C39"
                      color="white"
                      size="lg"
                      justifySelf="center"
                      pointerEvents="none"
                    />

                    <Box>
                      <Heading
                        color="white"
                        fontFamily="roboto"
                        fontSize={['lg', 'lg', '22px']}
                        marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
                        width="100%"
                      >
                        {data.title}
                      </Heading>
                      <Text
                        fontFamily="roboto"
                        marginLeft={{ base: '15px', md: '15px', lg: '20px' }}
                        width="100%" // Ensure the text takes full width
                        marginTop="10px"
                        color="white"
                        fontSize={['10px', '11px', '13px']}
                      >
                        {data.desc}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              )
            })}
          </Grid>
        </Box>
      </Flex>
    </Element>
  )
}
export { OurServices }
