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
      <Box
        position="relative"
        w="100%"
        h={{ lg: '600px', md: '400px', base: '400px' }}
      >
        <CldImage
          src="v1694585507/Icons/BackgroundImage_ftauuq.png"
          width="1940"
          height="462"
          alt="Background Image"
        />

        <Grid
          templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr' }}
          position="absolute"
          top={{ lg: '30%', md: '20%', base: '15%' }}
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
            <Heading
              fontSize={{ lg: '45', md: '30px', base: '26px' }}
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
              gap={5}
              alignItems={{ lg: 'left', md: 'center', base: 'center' }}
              justifyContent={{ lg: 'left', md: 'center', base: 'center' }}
            >
              <Text
                textAlign={{ lg: 'left', md: 'center', base: 'center' }}
                fontSize={{ lg: '22px', md: '19px', base: '16px' }}
                fontFamily="roboto"
              >
                I am a website designer, who is excited about unique ideas and
                help.
              </Text>
              <Button
                color="white"
                fontFamily="roboto"
                fontWeight="17px"
                w={{ base: '100px', md: '105px', lg: '145px' }}
                height={{ base: '30px', md: '35px', lg: '40px' }}
                flex-shrink="0"
                fontSize={{ base: '16px', md: '20px', lg: '20px' }}
                border-radius="6px"
                background="var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))"
                paddingX={{ base: '3', md: '5', lg: '9' }}
                paddingY={6}
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
