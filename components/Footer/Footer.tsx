import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  GridItem,
  VStack,
  IconButton,
} from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
import { SocialMedia } from '@components/SocialMedia'
import { CldImage } from 'next-cloudinary'

const Footer = () => {
  const gridTemplateColumns = {
    base: 'repeat(1, 1fr)',
    sm: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
  }

  const gridGap = {
    base: 0,
    md: 4,
    lg: 6,
  }
  return (
    <Box
      justifyContent="center"
      padding={{ base: '30px', md: '40px', lg: '50px' }}
      bg=" #111215"
      width="100%"
    >
      {/* <Flex
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Grid
          templateColumns={{
            base: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr',
          }}
          gap={{ base: 10, md: 10, lg: 35 }}
          justifyContent="space-between"
          alignItems="center"
          marginTop={{ base: '20px', md: '20px', lg: '0px' }}
          maxWidth="100%"
          padding="10px"
          marginLeft={10}
        >
          <GridItem width={'25% 75%'}>
            <HStack alignItems="flex-start">
              <Box boxSize="50px" backgroundColor="#1B1C1F" rounded="full">
                <CldImage
                  src="v1694585508/Icons/Footer/call_qwiqq2.svg"
                  alt=""
                  aria-label="phone"
                  color="white"
                  width={50}
                  height={50}
                />
              </Box>

              <Box>
                <Heading
                  color="white"
                  fontFamily="roboto"
                  fontSize={['lg', 'lg', '22px']}
                  marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
                >
                  Phone Number{' '}
                </Heading>
                <Text
                  fontFamily="roboto"
                  marginLeft={{ base: '15px', md: '15px', lg: '20px' }}
                  width="100%"
                  marginTop="10px"
                  color="white"
                  fontSize={['sm', 'sm', '13px']}
                >
                  +4917634649431{' '}
                </Text>
              </Box>
            </HStack>
          </GridItem>

          <GridItem>
            <HStack alignItems="center">
              <Box boxSize="50px" backgroundColor="#1B1C1F" rounded="full">
                <CldImage
                  src="v1694585508/Icons/Footer/location_slsznh.svg"
                  alt=""
                  aria-label="location"
                  color="white"
                  width={48}
                  height={48}
                />
              </Box>

              <Box>
                <Heading
                  color="white"
                  fontFamily="roboto"
                  fontSize={['lg', 'lg', '22px']}
                  marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
                >
                  Head Office Address{' '}
                </Heading>
                <Text
                  fontFamily="roboto"
                  marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
                  width={{ base: '90%', md: '90%', lg: '350px' }}
                  marginTop="10px"
                  color="white"
                  fontSize={['sm', 'sm', '12px']}
                >
                  Versailleslaan 12 5627LW Eindhoven The Netherlands, Eindhoven,
                  NL{' '}
                </Text>
              </Box>
            </HStack>
          </GridItem>

          <GridItem>
            <HStack alignItems="flex-start">
              <Box boxSize="50px" backgroundColor="#1B1C1F" rounded="full">
                <CldImage
                  src="v1694585507/Icons/Footer/email_vn9xjv.svg"
                  alt=""
                  aria-label="email"
                  color="white"
                  width={50}
                  height={50}
                />
              </Box>

              <Box>
                <Heading
                  color="white"
                  fontFamily="roboto"
                  fontSize={['lg', 'lg', '22px']}
                  marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
                >
                  Email Address{' '}
                </Heading>
                <Text
                  fontFamily="roboto"
                  marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
                  width={{ base: '90%', md: '90%', lg: '350px' }}
                  marginTop="10px"
                  color="white"
                  fontSize={['sm', 'sm', '13px']}
                >
                  maxovation@gmail.com{' '}
                </Text>
              </Box>
            </HStack>
          </GridItem>
        </Grid>
      </Flex> */}

      {/* <Flex
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }}
        flexWrap="wrap"
        justifyContent="center"
      > */}

      <Box width="auto" height="auto" margin={17}>
        <Grid templateColumns={gridTemplateColumns} gap={gridGap}>
          <Box
            justifySelf="center"
            height="auto"
            width="auto"
            marginTop={{ base: 10, md: 15, lg: 25 }}
            marginX={{ base: 2, md: 10, lg: 15 }}
            paddingY={{ base: 30, md: 35, lg: 45 }}
            paddingX={2}
          >
            <HStack
              alignItems="center"
              marginX={5}
              justifyContent="center"
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
                  width="90%" // Ensure the text takes full width
                  marginTop="10px"
                  color="white"
                  fontSize={['10px', '11px', '12px']}
                >
                  +4917634649431{' '}
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box
            justifySelf="center"
            height="auto"
            width="auto"
            marginTop={{ base: 10, md: 15, lg: 25 }}
            marginX={{ base: 2, md: 10, lg: 15 }}
            paddingY={{ base: 30, md: 35, lg: 45 }}
            paddingX={2}
          >
            <HStack
              alignItems="center"
              marginX={5}
              justifyContent="center"
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
                  Head Office{' '}
                </Heading>
                <Text
                  fontFamily="roboto"
                  marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
                  width="90%" // Ensure the text takes full width
                  marginTop="10px"
                  color="white"
                  fontSize={['10px', '11px', '12px']}
                >
                  Versailleslaan 12 5627LW Eindhoven The Netherlands, Eindhoven,
                  NL{' '}
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box
            justifySelf="center"
            height="auto"
            width="auto"
            marginTop={{ base: 10, md: 15, lg: 25 }}
            marginX={{ base: 2, md: 10, lg: 15 }}
            paddingY={{ base: 30, md: 35, lg: 45 }}
            paddingX={2}
          >
            <HStack
              alignItems="center"
              marginX={5}
              justifyContent="center"
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
                  width="90%" // Ensure the text takes full width
                  marginTop="10px"
                  color="white"
                  fontSize={['10px', '11px', '12px']}
                >
                  maxovation@gmail.com{' '}
                </Text>
              </Box>
            </HStack>
          </Box>
        </Grid>
      </Box>

      {/* <Grid
        templateColumns={{
          base: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr',
        }}
        gap={{ base: 10, md: 10, lg: 35 }}
        justifyContent="space-between"
        alignItems="center"
        marginTop={{ base: '20px', md: '20px', lg: '0px' }}
        maxWidth="100%"
        padding="10px"
        marginLeft={10}
      >
        <GridItem width={'25% 75%'}>
          <HStack alignItems="flex-start">
            <Box boxSize="50px" backgroundColor="#1B1C1F" rounded="full">
              <CldImage
                src="v1694585508/Icons/Footer/call_qwiqq2.svg"
                alt=""
                aria-label="phone"
                color="white"
                width={50}
                height={50}
              />
            </Box>

            <Box>
              <Heading
                color="white"
                fontFamily="roboto"
                fontSize={['lg', 'lg', '22px']}
                marginLeft={{ base: '20px', md: '15px', lg: '20px' }}
              >
                Phone Number{' '}
              </Heading>
              <Text
                fontFamily="roboto"
                marginLeft={{ base: '15px', md: '15px', lg: '20px' }}
                width="100%"
                marginTop="10px"
                color="white"
                fontSize={['sm', 'sm', '13px']}
              >
                +4917634649431{' '}
              </Text>
            </Box>
          </HStack>
        </GridItem>

        <GridItem>
          <HStack alignItems="center">
            <Box boxSize="50px" backgroundColor="#1B1C1F" rounded="full">
              <CldImage
                src="v1694585508/Icons/Footer/location_slsznh.svg"
                alt=""
                aria-label="location"
                color="white"
                width={48}
                height={48}
              />
            </Box>

            <Box>
              <Heading
                color="white"
                fontFamily="roboto"
                fontSize={['lg', 'lg', '22px']}
                marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
              >
                Head Office Address{' '}
              </Heading>
              <Text
                fontFamily="roboto"
                marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
                width={{ base: '90%', md: '90%', lg: '350px' }}
                marginTop="10px"
                color="white"
                fontSize={['sm', 'sm', '12px']}
              >
                Versailleslaan 12 5627LW Eindhoven The Netherlands, Eindhoven,
                NL{' '}
              </Text>
            </Box>
          </HStack>
        </GridItem>

        <GridItem>
          <HStack alignItems="flex-start">
            <Box boxSize="50px" backgroundColor="#1B1C1F" rounded="full">
              <CldImage
                src="v1694585507/Icons/Footer/email_vn9xjv.svg"
                alt=""
                aria-label="email"
                color="white"
                width={50}
                height={50}
              />
            </Box>

            <Box>
              <Heading
                color="white"
                fontFamily="roboto"
                fontSize={['lg', 'lg', '22px']}
                marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
              >
                Email Address{' '}
              </Heading>
              <Text
                fontFamily="roboto"
                marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
                width={{ base: '90%', md: '90%', lg: '350px' }}
                marginTop="10px"
                color="white"
                fontSize={['sm', 'sm', '13px']}
              >
                maxovation@gmail.com{' '}
              </Text>
            </Box>
          </HStack>
        </GridItem>
      </Grid> */}
      {/* </Flex> */}

      <BoxLine
        marginLeft="auto"
        marginRight="auto"
        bg="gray"
        height="1px"
        width={{ base: '300px', md: '700px', lg: '1000px' }}
        marginTop="30px"
      />
      <Flex alignItems="center" justify="center">
        {' '}
        <VStack alignItems="center" gap={5}>
          <CldImage
            src="v1694585522/Icons/Maxovation_Logo_V.2-ai_kfmabd.svg"
            width={60}
            height={60}
            style={{
              marginTop: '25px',
            }}
            alt="Logo"
          />

          <SocialMedia />

          <Text
            fontSize={{ base: '10px', md: '12px', lg: '15px' }}
            color="white"
            fontFamily="roboto"
          >
            Maxovation © 2023 All Right Reserved
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export { Footer }
