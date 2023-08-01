import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useActions, useAppState } from '../../store'

function ForgotPasswordModal(): JSX.Element {
  const actions = useActions()
  const state = useAppState()
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  })

  return (
    <Modal
      isCentered
      isOpen={state.isForgotModalOpen}
      onClose={() => actions.activeForgotModal(false)}
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
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
          >
            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                // handle form submission
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}
                  >
                    <Heading
                      lineHeight={1.1}
                      fontSize={{ base: '2xl', md: '3xl' }}
                    >
                      Forgot your password?
                    </Heading>
                    <Text
                      fontSize={{ base: 'sm', sm: 'md' }}
                      color={'gray.800'}
                    >
                      You&apos;ll get an email with a reset link
                    </Text>
                    <FormControl
                      id="email"
                      // @ts-ignore
                      isInvalid={errors.email && touched.email}
                    >
                      <Input
                        as={Field}
                        name="email"
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                      />
                      {errors.email && touched.email && (
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      )}
                    </FormControl>
                    <Stack spacing={6}>
                      <Button
                        type="submit"
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                          bg: 'blue.500',
                        }}
                      >
                        Request Reset
                      </Button>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export { ForgotPasswordModal }
