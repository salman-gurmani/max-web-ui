import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useActions, useAppState } from '../../store'

function SignupModal() {
  const [showPassword, setShowPassword] = useState(false)
  const actions = useActions()
  const state = useAppState()
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string(),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  })

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <Modal
      isCentered
      isOpen={state.isSignUpModalOpen}
      onClose={() => actions.activeSignUpModal(false)}
      size="md"
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) drop-shadow(4px 4px 10px blue)"
      />
      <ModalContent
        bg={useColorModeValue('gray.50', 'gray.800')}
        overflowY="hidden"
      >
        <ModalCloseButton />
        <ModalBody>
          <Flex
            maxH={'90vh'}
            align={'center'}
            justify={'center'}
            overflowY="hidden"
            bg={useColorModeValue('gray.50', 'gray.800')}
          >
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Flex
                    maxH={'90vh'}
                    align={'center'}
                    justify={'center'}
                    bg="gray.50"
                  >
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                      <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                          Sign up
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                          to enjoy all of our cool features ✌️
                        </Text>
                      </Stack>
                      <Box rounded={'lg'} bg="white" boxShadow={'lg'} p={8}>
                        <Stack spacing={4}>
                          <HStack>
                            <Box>
                              <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Field
                                  type="text"
                                  name="firstName"
                                  as={Input}
                                />
                              </FormControl>
                            </Box>
                            <Box>
                              <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Field type="text" name="lastName" as={Input} />
                              </FormControl>
                            </Box>
                          </HStack>
                          <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Field type="email" name="email" as={Input} />
                          </FormControl>
                          <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                              <Field
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                as={Input}
                              />
                              <InputRightElement h={'full'}>
                                <Button
                                  variant={'ghost'}
                                  onClick={() =>
                                    setShowPassword(
                                      (showPassword) => !showPassword
                                    )
                                  }
                                >
                                  {showPassword ? (
                                    <ViewIcon />
                                  ) : (
                                    <ViewOffIcon />
                                  )}
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                          </FormControl>
                          <Stack spacing={10} pt={2}>
                            <Button
                              type="submit"
                              isLoading={isSubmitting}
                              loadingText="Submitting"
                              size="lg"
                              bg={'blue.400'}
                              color={'white'}
                              _hover={{
                                bg: 'blue.500',
                              }}
                            >
                              Sign up
                            </Button>
                          </Stack>
                          <Stack pt={6}>
                            <Text align={'center'}>
                              Already a user?{' '}
                              <Link
                                color={'blue.400'}
                                onClick={() => actions.activeSignInModal(true)}
                              >
                                Login
                              </Link>
                            </Text>
                          </Stack>
                        </Stack>
                      </Box>
                    </Stack>
                  </Flex>
                </Form>
              )}
            </Formik>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export { SignupModal }
