import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  IconButton,
  GridItem,
  VStack,
  Image,
} from '@chakra-ui/react'
import { BoxLine } from '@components/BoxLine'
import { SocialMedia } from '@components/SocialMedia'

import logoImg from '../../public/images/logo/Logo.png'

const Footer = () => {
  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 54 54"
      fill="none"
    >
      <path
        d="M49.4325 41.2425C49.4325 42.0525 49.2525 42.885 48.87 43.695C48.4875 44.505 47.9925 45.27 47.34 45.99C46.2375 47.205 45.0225 48.0825 43.65 48.645C42.3 49.2075 40.8375 49.5 39.2625 49.5C36.9675 49.5 34.515 48.96 31.9275 47.8575C29.34 46.755 26.7525 45.27 24.1875 43.4025C21.5732 41.4902 19.1063 39.3843 16.8075 37.1025C14.5322 34.812 12.4337 32.3525 10.53 29.745C8.685 27.18 7.2 24.615 6.12 22.0725C5.04 19.5075 4.5 17.055 4.5 14.715C4.5 13.185 4.77 11.7225 5.31 10.3725C5.85 9 6.705 7.74 7.8975 6.615C9.3375 5.1975 10.9125 4.5 12.5775 4.5C13.2075 4.5 13.8375 4.635 14.4 4.905C14.985 5.175 15.5025 5.58 15.9075 6.165L21.1275 13.5225C21.5325 14.085 21.825 14.6025 22.0275 15.0975C22.23 15.57 22.3425 16.0425 22.3425 16.47C22.3425 17.01 22.185 17.55 21.87 18.0675C21.5775 18.585 21.15 19.125 20.61 19.665L18.9 21.4425C18.6525 21.69 18.54 21.9825 18.54 22.3425C18.54 22.5225 18.5625 22.68 18.6075 22.86C18.675 23.04 18.7425 23.175 18.7875 23.31C19.1925 24.0525 19.89 25.02 20.88 26.19C21.8925 27.36 22.9725 28.5525 24.1425 29.745C25.3575 30.9375 26.5275 32.04 27.72 33.0525C28.89 34.0425 29.8575 34.7175 30.6225 35.1225C30.735 35.1675 30.87 35.235 31.0275 35.3025C31.2075 35.37 31.3875 35.3925 31.59 35.3925C31.9725 35.3925 32.265 35.2575 32.5125 35.01L34.2225 33.3225C34.785 32.76 35.325 32.3325 35.8425 32.0625C36.36 31.7475 36.8775 31.59 37.44 31.59C37.8675 31.59 38.3175 31.68 38.8125 31.8825C39.3075 32.085 39.825 32.3775 40.3875 32.76L47.835 38.0475C48.42 38.4525 48.825 38.925 49.0725 39.4875C49.2975 40.05 49.4325 40.6125 49.4325 41.2425Z"
        stroke="url(#paint0_linear_72_381)"
        stroke-width="3.375"
        stroke-miterlimit="10"
      />
      <defs>
        <linearGradient
          id="paint0_linear_72_381"
          x1="4.5"
          y1="4.5"
          x2="53.0542"
          y2="8.82301"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2FBBFB" />
          <stop offset="0.526042" stop-color="#D442E0" />
          <stop offset="1" stop-color="#F15D3C" />
        </linearGradient>
      </defs>
    </svg>
  )
  const locationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 54 54"
      fill="none"
    >
      <path
        d="M26.9995 30.2177C27.9214 30.2177 28.8342 30.0362 29.6859 29.6834C30.5376 29.3306 31.3115 28.8135 31.9634 28.1616C32.6152 27.5098 33.1323 26.7359 33.4851 25.8842C33.8379 25.0325 34.0195 24.1196 34.0195 23.1977C34.0195 22.2759 33.8379 21.363 33.4851 20.5113C33.1323 19.6596 32.6152 18.8857 31.9634 18.2338C31.3115 17.582 30.5376 17.0649 29.6859 16.7121C28.8342 16.3593 27.9214 16.1777 26.9995 16.1777C25.1377 16.1777 23.3521 16.9173 22.0356 18.2338C20.7191 19.5503 19.9795 21.3359 19.9795 23.1977C19.9795 25.0596 20.7191 26.8451 22.0356 28.1616C23.3521 29.4781 25.1377 30.2177 26.9995 30.2177Z"
        stroke="url(#paint0_linear_72_389)"
        stroke-width="3.375"
      />
      <path
        d="M8.14581 19.1025C12.5783 -0.382495 41.4458 -0.359994 45.8558 19.125C48.4433 30.555 41.3333 40.23 35.1008 46.215C32.923 48.3155 30.0153 49.4892 26.9896 49.4892C23.9639 49.4892 21.0561 48.3155 18.8783 46.215C12.6683 40.23 5.55831 30.5325 8.14581 19.1025Z"
        stroke="url(#paint1_linear_72_389)"
        stroke-width="3.375"
      />
      <defs>
        <linearGradient
          id="paint0_linear_72_389"
          x1="19.9795"
          y1="16.1777"
          x2="35.1508"
          y2="17.5305"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2FBBFB" />
          <stop offset="0.526042" stop-color="#D442E0" />
          <stop offset="1" stop-color="#F15D3C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_72_389"
          x1="7.59961"
          y1="4.5"
          x2="49.6134"
          y2="7.73112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2FBBFB" />
          <stop offset="0.526042" stop-color="#D442E0" />
          <stop offset="1" stop-color="#F15D3C" />
        </linearGradient>
      </defs>
    </svg>
  )
  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 74 74"
      fill="none"
    >
      <path
        d="M48.25 56.125H25.75C19 56.125 14.5 52.75 14.5 44.875V29.125C14.5 21.25 19 17.875 25.75 17.875H48.25C55 17.875 59.5 21.25 59.5 29.125V44.875C59.5 52.75 55 56.125 48.25 56.125Z"
        stroke="url(#paint0_linear_72_395)"
        stroke-width="3.375"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48.25 30.25L41.2075 35.875C38.89 37.72 35.0875 37.72 32.77 35.875L25.75 30.25"
        stroke="url(#paint1_linear_72_395)"
        stroke-width="3.375"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_72_395"
          x1="14.5"
          y1="17.875"
          x2="62.9791"
          y2="22.9607"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2FBBFB" />
          <stop offset="0.526042" stop-color="#D442E0" />
          <stop offset="1" stop-color="#F15D3C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_72_395"
          x1="25.75"
          y1="30.25"
          x2="48.4003"
          y2="36.7338"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2FBBFB" />
          <stop offset="0.526042" stop-color="#D442E0" />
          <stop offset="1" stop-color="#F15D3C" />
        </linearGradient>
      </defs>
    </svg>
  )

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
          gap={{ base: 10, md: 10, lg: 20 }}
          justifyContent="center"
          alignItems="center"
          marginTop={{ base: '20px', md: '20px', lg: '0px' }} // Adjusted margin for better alignment
          maxWidth="100%"
          padding="10px" // Add some padding to the Grid for better spacing
          marginLeft={20}
        >
          <GridItem>
            <HStack alignItems="flex-start">
              <IconButton
                icon={phoneIcon}
                aria-label="phone"
                isRound
                background="#2A2C39"
                color="white"
                size="lg"
              />
              <Box>
                <Heading
                  color="white"
                  fontFamily="roboto"
                  fontSize={['lg', 'lg', '22px']}
                  marginLeft={{ base: '20px', md: '15px', lg: '20px' }} // Adjusted margin for better alignment
                >
                  Phone Number{' '}
                </Heading>
                <Text
                  fontFamily="roboto"
                  marginLeft={{ base: '15px', md: '15px', lg: '20px' }}
                  width="100%" // Ensure the text takes full width
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
            <HStack alignItems="flex-start">
              <IconButton
                icon={locationIcon}
                aria-label="location"
                isRound
                background="#2A2C39"
                size="lg"
                color="white"
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
                  fontSize={['sm', 'sm', '13px']}
                >
                  Versailleslaan 12 5627LW Eindhoven The Netherlands, Eindhoven,
                  NL{' '}
                </Text>
              </Box>
            </HStack>
          </GridItem>

          <GridItem>
            <HStack alignItems="flex-start">
              <IconButton
                icon={emailIcon}
                aria-label="Email"
                isRound
                background="#2A2C39"
                color="white"
                size="lg"
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
