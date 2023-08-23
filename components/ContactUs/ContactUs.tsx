import {
  Flex,
  Heading,
  Box,
  Grid,
  Button,
  FormControl,
  GridItem,
  Input,
  AspectRatio,
} from '@chakra-ui/react'
import { useFormik } from 'formik'

const ContactUs = () => {
  const columns = { base: 1, md: 2, lg: 2 }

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: async () => {},
  })
  const { handleSubmit } = formik
  return (
    <Flex bg="#18191D" direction="column">
      <Flex alignContent="center" justifyContent="center">
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
          Contact Us
        </Heading>
      </Flex>
      <>
        <form onSubmit={handleSubmit}>
          <Grid
            templateColumns={{ base: '1fr', md: '50% 50%', lg: '70% 30%' }}
            marginY={10}
            marginX={{ base: '5', md: '10', lg: '20' }}
            gap={{ base: 10, md: 10, lg: 1 }}
          >
            <Box bg="#0A0C19" padding={7} borderRadius="14px 0px 0px 14px">
              <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={2} p={4}>
                <GridItem>
                  <FormControl id="name" isRequired>
                    <Input
                      placeholder="Enter your name"
                      textColor="white"
                      backgroundColor="#171926"
                      type="text"
                      name="name"
                      as={Input}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl id="phoneNumber" isRequired>
                    <Input
                      placeholder="Enter your phone number"
                      textColor="white"
                      backgroundColor="#171926"
                      type="text"
                      name="phoneNumber"
                      as={Input}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl pt={3} id="email" isRequired>
                    <Input
                      placeholder="Enter your Email"
                      textColor="white"
                      backgroundColor="#171926"
                      type="email"
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl id="subject" isRequired>
                    <Input
                      placeholder="Enter your subject"
                      textColor="white"
                      backgroundColor="#171926"
                      type="text"
                      name="subject"
                      as={Input}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl id="message" isRequired>
                    <Input
                      placeholder="Type your message here"
                      textColor="white"
                      backgroundColor="#171926"
                      type="text"
                      name="message"
                      as={Input}
                    />
                  </FormControl>
                </GridItem>
                <Button
                  color="white"
                  fontFamily="roboto"
                  fontWeight="17px"
                  w={{ base: '100px', md: '105px', lg: '330px' }}
                  height={{ base: '30px', md: '35px', lg: '40px' }}
                  flex-shrink="0"
                  fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                  border-radius="8px"
                  background="var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))"
                  paddingX={{ base: '3', md: '5', lg: '5' }}
                  zIndex="5"
                  alignSelf="flex-start"
                  _hover={{
                    bgGradient:
                      'linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)',
                    backgroundClip: 'text',
                    borderColor: 'white',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Box>

            <AspectRatio style={{ position: 'relative', background: 'black' }}>
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Versailleslaan%2012%205627LW%20Eindhoven%20The%20Netherlands,%20Eindhoven,%20NL+(Maxovation)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Google Maps"
              />
            </AspectRatio>
          </Grid>
        </form>
      </>
    </Flex>
  )
}
export { ContactUs }
