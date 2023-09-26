import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  Button,
  VStack,
} from '@chakra-ui/react'

import React from 'react'

import BGImage from '../../public/Icons/BackgroundImage.png'
import { ContactUsModal } from '../ContactUsModal'
import { Zoom } from 'react-awesome-reveal'

function TextOnImagePanel() {
  const [isModalOpen, setModalOpen] = React.useState(false)

  const openModal = () => {
    setModalOpen(true)
    console.log('clicking to open')
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <Flex>
      <Box
        position="relative"
        w="100%"
        h={{ lg: '600px', md: '400px', base: '400px' }}
      >
        <Image
          src={BGImage.src}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Background Image"
        />

        <Grid
          templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr' }}
          position="absolute"
          top={{ lg: '20%', md: '15%', base: '15%' }}
          alignItems="center"
          color="white"
          left="10%"
          right="10%"
          gap={10}
        >
          <Box
            width={{ lg: '60%', md: '100%', base: '100%' }}
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Zoom cascade>
              <Heading
                fontSize={{ lg: '40', md: '30px', base: '24px' }}
                marginBottom="10px"
                textColor="white"
                textAlign={{ lg: 'left', md: 'center', base: 'center' }}
                fontFamily="roboto"
              >
                Hire me as an elite website design professional with exceptional
                skills.
              </Heading>
            </Zoom>
          </Box>

          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginLeft={{ lg: 5, md: 0, base: 0 }}
          >
            <Zoom>
              <VStack
                gap={2}
                alignItems={{ lg: 'left', md: 'center', base: 'center' }}
                justifyContent={{ lg: 'left', md: 'center', base: 'center' }}
              >
                <Text
                  textAlign={{ lg: 'left', md: 'center', base: 'center' }}
                  fontSize={{ lg: '22px', md: '19px', base: '16px' }}
                  fontFamily="roboto"
                >
                  I am an enthusiastic website designer passionate about
                  creating unique and innovative designs, always ready to
                  assist.
                </Text>
                <Button
                  color="white"
                  fontFamily="roboto"
                  fontWeight="17px"
                  w={{ base: '100px', md: '105px', lg: '145px' }}
                  height={{ base: '30px', md: '35px', lg: '40px' }}
                  flex-shrink="0"
                  fontSize={{ base: '12px', md: '20px', lg: '20px' }}
                  border-radius="6px"
                  background="var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))"
                  paddingX={{ base: '1', md: '5', lg: '9' }}
                  paddingY={{ base: '2', md: '4', lg: '6' }}
                  zIndex="5"
                  alignSelf={{ lg: 'flex-start', md: 'center', base: 'center' }}
                  _hover={{
                    bgGradient:
                      'linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)',
                    backgroundClip: 'text',
                    borderColor: 'white',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                  }}
                  onClick={openModal}
                >
                  Hire Me!
                </Button>

                <ContactUsModal isOpen={isModalOpen} onClose={closeModal} />
              </VStack>
            </Zoom>
          </Box>
        </Grid>
      </Box>
    </Flex>
  )
}

export { TextOnImagePanel }
