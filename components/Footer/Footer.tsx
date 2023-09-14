import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  GridItem,
  VStack,
} from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
import { SocialMedia } from '@components/SocialMedia'
import { CldImage } from 'next-cloudinary'

const Footer = () => {
  return (
    <Box
      justifyContent="center"
      padding={{ base: '30px', md: '40px', lg: '50px' }}
      bg=" #111215"
      width="100%"
    >
      <Flex
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
          <GridItem>
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
                  width={54}
                  height={54}
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
      </Flex>
      <BoxLine
        marginLeft="auto"
        marginRight="auto"
        bg="gray"
        height="1px"
        width="1000px"
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
