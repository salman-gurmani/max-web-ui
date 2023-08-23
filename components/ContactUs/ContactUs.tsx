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
  Textarea,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: () => {},
  })

  const { handleChange, handleSubmit, values } = formik

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
            templateColumns={{ base: '1fr', md: '50% 50%', lg: '65% 35%' }}
            marginY={10}
            marginX={{ base: '5', md: '10', lg: '20' }}
            gap={{ base: 10, md: 10, lg: 1 }}
          >
            <Box bg="#0A0C19" padding={12} borderRadius="14px 0px 0px 14px">
              <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr' }}
                gap={5}
              >
                <GridItem mb={5}>
                  <FormControl id="name" isRequired>
                    <Input
                      placeholder="Enter your name"
                      backgroundColor="#171926"
                      type="text"
                      name="name"
                      as={Input}
                      height={50}
                      border="none"
                      color="white"
                      _placeholder={{ color: '#CFCFCF' }}
                      fontFamily="roboto"
                      size="sm"
                    />
                  </FormControl>
                </GridItem>
                <GridItem mb={5}>
                  <FormControl id="phoneNumber" isRequired>
                    <Input
                      placeholder="Enter your phone"
                      backgroundColor="#171926"
                      type="text"
                      name="phoneNumber"
                      as={Input}
                      height={50}
                      border="none"
                      color="white"
                      _placeholder={{ color: '#CFCFCF' }}
                      fontFamily="roboto"
                      size="sm"
                    />
                  </FormControl>
                </GridItem>
                <GridItem mb={5}>
                  <FormControl id="email" isRequired>
                    <Input
                      placeholder="Enter your Email"
                      backgroundColor="#171926"
                      type="email"
                      height={50}
                      border="none"
                      color="white"
                      _placeholder={{ color: '#CFCFCF' }}
                      fontFamily="roboto"
                      size="sm"
                    />
                  </FormControl>
                </GridItem>

                <GridItem mb={5}>
                  <FormControl id="subject" isRequired>
                    <Input
                      placeholder="Enter your subject"
                      backgroundColor="#171926"
                      type="text"
                      name="subject"
                      as={Input}
                      height={50}
                      border="none"
                      color="white"
                      _placeholder={{ color: '#CFCFCF' }}
                      fontFamily="roboto"
                      size="sm"
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <Flex mt={5}>
                <FormControl id="message" isRequired>
                  <Textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    bg="#171926"
                    placeholder="Type your message here..."
                    border="none"
                    color="white"
                    _placeholder={{ color: '#CFCFCF', verticalAlign: 'top' }}
                    fontFamily="roboto"
                    size="sm"
                    minHeight={340}
                    maxHeight={400}
                  />
                </FormControl>
              </Flex>
              <Flex justifyContent="center" mt={5}>
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
                  alignSelf="center"
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
              </Flex>
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
