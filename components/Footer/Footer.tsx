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
import { SocialMedia } from '@components/SocialMedia'
import { BsTelephone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'

import logoImg from '../../public/images/logo/Logo.png'

const Footer = () => {
  return (
    <Box justifyContent="center" padding="50px" bg=" #111215" width="100%">
      <Flex>
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
          gap={20}
          justifyContent="space-between"
          alignItems="space-between"
          marginTop={{ base: '40px', lg: '0px' }}
        >
          <GridItem alignItems="flex-start">
            <HStack>
              <IconButton
                icon={<BsTelephone />}
                aria-label="phone"
                isRound
                background="#2A2C39"
                color="white"
              />

              <Box>
                <Heading
                  color="white"
                  fontFamily="roboto"
                  fontSize={['lg', 'lg', '22px']}
                  marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
                >
                  Phone Number{' '}
                </Heading>
                <Text
                  fontFamily="roboto"
                  marginLeft={{ base: '15px', md: '15px', lg: '30px' }}
                  width={{ base: '90%', md: '90%', lg: '350px' }}
                  marginTop="10px"
                  color="white"
                  fontSize={['sm', 'sm', '13px']}
                >
                  +4917634649431{' '}
                </Text>
              </Box>
            </HStack>
          </GridItem>

          <GridItem alignItems="flex-start">
            <HStack>
              <IconButton
                icon={<IoLocationOutline />}
                aria-label="location"
                isRound
                background="#2A2C39"
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

          <GridItem alignItems="flex-start">
            <HStack>
              <IconButton
                icon={<FiMail />}
                aria-label="Email"
                isRound
                background="#2A2C39"
                color="white"
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
      <Box
        marginLeft="auto"
        marginRight="auto"
        bg="gray"
        height="1px"
        width="1000px"
        marginTop="30px"
      ></Box>
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
          <Box alignItems="center" justifyContent="center" zIndex={2}>
            <SocialMedia />
          </Box>
          <Text fontSize={14} color="white" fontFamily="roboto">
            Maxovation © 2023 All Right Reserved
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export { Footer }
