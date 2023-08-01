import { Button } from '@chakra-ui/react'

// Button component with shine effect on hover
const PrimaryButton = ({ children, ...rest }) => (
  <Button
    px={4}
    fontSize={'sm'}
    rounded="base"
    bg={'blue.400'}
    color={'white'}
    boxShadow={
      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
    }
    _hover={{
      bg: 'blue.500',
    }}
    _focus={{
      bg: 'blue.500',
    }}
    {...rest}
  >
    {children}
  </Button>
)

export { PrimaryButton }
