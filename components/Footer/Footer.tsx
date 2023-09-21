import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
  IconButton,
} from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
import { SocialMedia } from '@components/SocialMedia'
import { CldImage } from 'next-cloudinary'
import { Zoom, AttentionSeeker, Fade } from 'react-awesome-reveal'

const Footer = () => {
  const gridTemplateColumns = {
    base: '1fr',
    md: '1fr 1fr',
    lg: '1fr 1fr 1fr',
  }

  const gridGap = {
    base: 0,
    md: 0,
    lg: 6,
  }
  const marginPx = {
    base: 0,
    md: 0,
    lg: 6,
  }
  return (
    <Box
      justifyContent="center"
      padding={{ base: '30px', md: '40px', lg: '50px' }}
      bg=" #111215"
      width="100%"
    >
      <Box width="100%" height="100%">
        <Grid templateColumns={gridTemplateColumns} gap={gridGap}>
          <Zoom delay={100}>
            <AttentionSeeker effect="heartBeat" delay={100}>
              <Box
                justifySelf="center"
                height="100%"
                width="80%"
                paddingY={{ base: 30, md: 35, lg: 45 }}
                paddingX={2}
                marginRight={marginPx}
              >
                <HStack
                  alignItems="center"
                  marginX={5}
                  justifyContent="flex-start"
                  height="100%"
                >
                  <IconButton
                    icon={
                      <CldImage
                        src="v1694585508/Icons/Footer/call_qwiqq2.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    }
                    aria-label="phone"
                    isRound
                    background="#1B1C1F"
                    color="white"
                    size="lg"
                    justifySelf="center"
                    pointerEvents="none"
                  />

                  <Box height="100%">
                    <Heading
                      color="white"
                      fontFamily="roboto"
                      fontSize={['lg', 'lg', '22px']}
                      marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
                      width="100%"
                    >
                      Phone Number{' '}
                    </Heading>
                    <Text
                      fontFamily="roboto"
                      marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
                      width="90%"
                      marginTop="10px"
                      color="white"
                      fontSize={['10px', '11px', '12px']}
                    >
                      +4917634649431{' '}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </AttentionSeeker>
          </Zoom>
          <Zoom delay={250}>
            <AttentionSeeker effect="heartBeat" delay={250}>
              <Box
                justifySelf="center"
                height="100%"
                width="80%"
                paddingY={{ base: 30, md: 35, lg: 45 }}
                paddingX={2}
              >
                <HStack
                  alignItems="center"
                  marginX={5}
                  justifyContent="flex-start"
                  height="100%"
                >
                  <IconButton
                    icon={
                      <CldImage
                        src="v1694585508/Icons/Footer/location_slsznh.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    }
                    aria-label="location"
                    isRound
                    background="#1B1C1F"
                    color="white"
                    size="lg"
                    justifySelf="center"
                    pointerEvents="none"
                  />

                  <Box height="100%">
                    <Heading
                      color="white"
                      fontFamily="roboto"
                      fontSize={['lg', 'lg', '22px']}
                      marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
                      width="100%"
                    >
                      Head Office Address{' '}
                    </Heading>
                    <Text
                      fontFamily="roboto"
                      marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
                      width="90%"
                      marginTop="10px"
                      color="white"
                      fontSize={['10px', '11px', '12px']}
                    >
                      Versailleslaan 12 5627LW Eindhoven The Netherlands,
                      Eindhoven, NL{' '}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </AttentionSeeker>
          </Zoom>
          <Zoom delay={350}>
            <AttentionSeeker effect="heartBeat" delay={350}>
              <Box
                justifySelf="center"
                height="100%"
                width="80%"
                paddingY={{ base: 30, md: 35, lg: 45 }}
                paddingX={2}
                marginLeft={marginPx}
              >
                <HStack
                  alignItems="center"
                  marginX={5}
                  justifyContent="flex-start"
                  height="100%"
                >
                  <IconButton
                    icon={
                      <CldImage
                        src="v1694585507/Icons/Footer/email_vn9xjv.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    }
                    aria-label="email"
                    isRound
                    background="#1B1C1F"
                    color="white"
                    size="lg"
                    justifySelf="center"
                    pointerEvents="none"
                  />

                  <Box height="100%">
                    <Heading
                      color="white"
                      fontFamily="roboto"
                      fontSize={['lg', 'lg', '22px']}
                      marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
                      width="100%"
                    >
                      Email Address{' '}
                    </Heading>
                    <Text
                      fontFamily="roboto"
                      marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
                      width="90%"
                      marginTop="10px"
                      color="white"
                      fontSize={['10px', '11px', '12px']}
                    >
                      maxovation@gmail.com{' '}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </AttentionSeeker>
          </Zoom>
        </Grid>
      </Box>

      <BoxLine
        marginLeft="auto"
        marginRight="auto"
        bg="gray"
        height="1px"
        width="70%"
        marginTop="10px"
      />
      <Flex alignItems="center" justify="center">
        {' '}
        <VStack alignItems="center" gap={5}>
          <AttentionSeeker effect="bounce" delay={100}>
            <CldImage
              src="v1694585522/Icons/Maxovation_Logo_V.2-ai_kfmabd.svg"
              width={60}
              height={60}
              style={{
                marginTop: '25px',
              }}
              alt="Logo"
            />
          </AttentionSeeker>
          <SocialMedia />
          <Fade delay={150}>
            <Text
              fontSize={{ base: '10px', md: '12px', lg: '15px' }}
              color="white"
              fontFamily="roboto"
            >
              Maxovation © 2023 All Right Reserved
            </Text>
          </Fade>
        </VStack>
      </Flex>
    </Box>
  )
}

export { Footer }
