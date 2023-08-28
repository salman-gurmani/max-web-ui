import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  GridItem,
  VStack,
  Image,
} from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
import { SocialMedia } from '@components/SocialMedia'

import { FooterImages } from '@components/Images'
import logoImg from '../../public/images/logo/Logo.png'

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
              <Image
                src={FooterImages.phoneIcon.src.src}
                alt={FooterImages.phoneIcon.alt}
                aria-label="phone"
                boxSize="50px" // Adjust the size as needed
                objectFit="contain" // Adjust the object fit mode as needed
                backgroundColor="#1B1C1F"
                color="white"
                rounded="full"
              />

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
              <Image
                src={FooterImages.locationIcon.src.src}
                alt={FooterImages.locationIcon.alt}
                aria-label="location"
                boxSize="50px" // Adjust the size as needed
                objectFit="contain" // Adjust the object fit mode as needed
                backgroundColor="#1B1C1F"
                color="white"
                rounded="full"
              />

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
              <Image
                src={FooterImages.emailIcon.src.src}
                alt={FooterImages.emailIcon.alt}
                aria-label="email"
                boxSize="50px" // Adjust the size as needed
                objectFit="contain" // Adjust the object fit mode as needed
                backgroundColor="#1B1C1F"
                color="white"
                rounded="full"
              />

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
          <Image
            src={logoImg.src}
            style={{
              maxWidth: 60,
              maxHeight: 60,
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
