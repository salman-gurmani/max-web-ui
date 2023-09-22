import {
  Flex,
  Heading,
  Box,
  Grid,
  Button,
  FormControl,
  GridItem,
  Input,
  Textarea,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { BsSend } from 'react-icons/bs'
import * as Yup from 'yup'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Slide, Zoom } from 'react-awesome-reveal'

const ContactUsSchema = Yup.object({
  user_name: Yup.mixed().required(' * Name is required'),
  user_phone: Yup.string().required(' * Phone Number is required'),
  user_email: Yup.string().required(' * Email is required'),
  user_subject: Yup.string().required(' * Subject is required'),
  message: Yup.string().required(' * Message is required'),
})
interface ContactUsFormProps {
  onClose: () => void
}

const ContactUsForm: React.FC<ContactUsFormProps> = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_phone: '',
      user_email: '',
      user_subject: '',
      message: '',
    },
    validationSchema: ContactUsSchema,
    onSubmit: () => {
      console.log(values)
    },
  })

  const { handleChange, values, errors, touched } = formik
  const toast = useToast()

  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formElement = e.currentTarget
    emailjs
      .sendForm(
        'service_zi44le9',
        'template_lr39rqi',
        formElement,
        'ie2lCapw8rasPD3Wz'
      )
      .then(
        (result) => {
          console.log(result.text)
          formik.resetForm()

          // Show a success toast
          toast({
            title: 'Success',
            description: 'Email sent successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          onClose()
        },
        (error) => {
          console.log(error.text)

          // Show an error toast
          toast({
            title: 'Error',
            description: 'Error sending the email. Please try again.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
      )
  }
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
      <form ref={(el) => (form.current = el!)} onSubmit={sendEmail}>
        <Box bg="#0A0C19" padding={12} borderRadius="14px 0px 0px 14px">
          <Grid
            templateColumns={{
              base: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr',
            }}
            gap={5}
          >
            <Slide direction="down">
              <GridItem mb={5}>
                <FormControl
                  isRequired
                  isInvalid={!!(errors.user_name && touched.user_name)}
                >
                  <Input
                    placeholder="Enter your name"
                    backgroundColor="#171926"
                    type="text"
                    name="user_name"
                    height={50}
                    border="none"
                    color="white"
                    _placeholder={{ color: '#CFCFCF' }}
                    fontFamily="roboto"
                    size="sm"
                    onChange={handleChange}
                    value={values.user_name}
                  />
                  <Text fontFamily="roboto" color="red" fontSize="xs">
                    {errors.user_name}
                  </Text>
                </FormControl>
              </GridItem>

              <GridItem mb={5}>
                <FormControl
                  isInvalid={!!(errors.user_phone && touched.user_phone)}
                  isRequired
                >
                  <Input
                    placeholder="Enter your phone"
                    backgroundColor="#171926"
                    type="number"
                    name="user_phone"
                    height={50}
                    border="none"
                    color="white"
                    _placeholder={{ color: '#CFCFCF' }}
                    fontFamily="roboto"
                    size="sm"
                    onChange={handleChange}
                    value={values.user_phone}
                  />
                  <Text fontFamily="roboto" color="red" fontSize="xs">
                    {errors.user_phone}
                  </Text>
                </FormControl>
              </GridItem>
              <GridItem mb={5}>
                <FormControl
                  isInvalid={!!(errors.user_email && touched.user_email)}
                  isRequired
                >
                  <Input
                    placeholder="Enter your Email"
                    backgroundColor="#171926"
                    name="user_email"
                    type="email"
                    height={50}
                    border="none"
                    color="white"
                    _placeholder={{ color: '#CFCFCF' }}
                    fontFamily="roboto"
                    size="sm"
                    onChange={handleChange}
                    value={values.user_email}
                  />
                  <Text fontFamily="roboto" color="red" fontSize="xs">
                    {errors.user_email}
                  </Text>
                </FormControl>
              </GridItem>

              <GridItem mb={5}>
                <FormControl
                  isInvalid={!!(errors.user_subject && touched.user_subject)}
                  isRequired
                >
                  <Input
                    placeholder="Enter your subject"
                    backgroundColor="#171926"
                    type="text"
                    name="user_subject"
                    height={50}
                    border="none"
                    color="white"
                    _placeholder={{ color: '#CFCFCF' }}
                    fontFamily="roboto"
                    size="sm"
                    onChange={handleChange}
                    value={values.user_subject}
                  />
                  <Text fontFamily="roboto" color="red" fontSize="xs">
                    {errors.user_subject}
                  </Text>
                </FormControl>
              </GridItem>
            </Slide>
          </Grid>
          <Flex mt={5}>
            <FormControl
              isInvalid={!!(errors.message && touched.message)}
              isRequired
            >
              <Slide direction="down">
                <Textarea
                  name="message"
                  bg="#171926"
                  placeholder="Type your message here..."
                  border="none"
                  color="white"
                  _placeholder={{ color: '#CFCFCF', verticalAlign: 'top' }}
                  fontFamily="roboto"
                  size="sm"
                  minHeight={240}
                  maxHeight={300}
                  onChange={handleChange}
                  value={values.message}
                />
              </Slide>
              <Text fontFamily="roboto" color="red" fontSize="xs">
                {errors.message}
              </Text>
            </FormControl>
          </Flex>
          <Zoom>
            <Flex justifyContent="center" mt={5}>
              <Button
                color="white"
                type="submit"
                fontFamily="roboto"
                fontWeight="17px"
                w={{ base: '100px', md: '105px', lg: '330px' }}
                height={{ base: '30px', md: '35px', lg: '40px' }}
                flex-shrink="0"
                fontSize={{ base: '10px', md: '12px', lg: '16px' }}
                border-radius="8px"
                background="var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))"
                paddingX={{ base: '2', md: '5', lg: '5' }}
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
                Send Message{' '}
                <Box display="inline-block" marginLeft="8px">
                  {' '}
                  <BsSend />
                </Box>
              </Button>
            </Flex>
          </Zoom>
        </Box>
      </form>
    </Flex>
  )
}
export { ContactUsForm }
