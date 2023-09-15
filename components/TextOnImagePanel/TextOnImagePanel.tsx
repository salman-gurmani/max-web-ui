import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { ContactUsModal } from '@components/ContactUsModal'
import { CldImage } from 'next-cloudinary'

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
      <Box position="relative" h={{ lg: '600px', md: '400px', base: '150px' }}>
        <CldImage
          src="v1694585507/Icons/BackgroundImage_ftauuq_hc2v5s.svg"
          width="1920"
          height="1080"
          alt="Background Image"
        />

        <Grid
          templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr' }}
          position="absolute"
          top={{ lg: '35%', md: '10%', base: '5%' }}
          alignItems="center"
          color="white"
          left="10%"
          right="10%"
          gap={{ base: 2, md: 4, lg: 5 }}
        >
          <Box
            width={{ lg: '60%', md: '100%', base: '100%' }}
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading
              fontSize={{ lg: '55', md: '30px', base: '16px' }}
              marginBottom="10px"
              textColor="white"
              textAlign={{ lg: 'left', md: 'center', base: 'center' }}
              fontFamily="roboto"
            >
              Hire Me As A Website Design Great Skills Elite.
            </Heading>
          </Box>

          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginLeft={{ lg: 5, md: 0, base: 0 }}
          >
            <VStack
              gap={1}
              alignItems={{ lg: 'left', md: 'center', base: 'center' }}
              justifyContent={{ lg: 'left', md: 'center', base: 'center' }}
            >
              <Text
                textAlign={{ lg: 'left', md: 'center', base: 'center' }}
                fontSize={{ lg: '32px', md: '19px', base: '12px' }}
                fontFamily="roboto"
              >
                I am a website designer, who is excited about unique ideas and
                help.
              </Text>
              <Button
                color="white"
                fontFamily="roboto"
                fontWeight="17px"
                w={{ base: '70px', md: '105px', lg: '145px' }}
                height={{ base: '10px', md: '35px', lg: '40px' }}
                flex-shrink="0"
                fontSize={{ base: '10px', md: '20px', lg: '20px' }}
                border-radius="6px"
                background="var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))"
                paddingX={{ base: '3', md: '5', lg: '9' }}
                paddingY={4}
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
          </Box>
        </Grid>
      </Box>
    </Flex>
  )
}

export { TextOnImagePanel }
