import { IconButton } from '@chakra-ui/react'
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  //FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'
import { Box } from '@chakra-ui/react'

const SocialMedia = ({ ...rest }) => {
  return (
    <Box {...rest} display="flex" width="25px" justifyContent="center">
      <IconButton
        aria-label="Facebook"
        icon={<FaFacebookF color="white" />}
        fill="white"
        height="45px"
        width={60}
        background="#2A2C39"
        borderRadius="12px"
        borderWidth="1px"
        marginRight="10px"
        _hover={{ bg: 'facebook.600' }}
      />
      <IconButton
        aria-label="Twitter"
        icon={<FaTwitter />}
        color="white"
        height="45px"
        width={60}
        background="#2A2C39"
        borderRadius="12px"
        borderWidth="1px"
        _hover={{ bg: 'twitter.600' }}
        marginRight="10px"
      />
      <IconButton
        aria-label="YouTube"
        icon={<FaYoutube />}
        color="white"
        height="45px"
        width={60}
        background="#2A2C39"
        borderRadius="12px"
        borderWidth="1px"
        _hover={{ bg: '#c30000' }}
        marginRight="10px"
      />
      {/* <IconButton
        aria-label="Instagram"
        icon={<FaInstagram />}
        color="white"
        height="45px"
        width={60}
        background="#2A2C39"
        borderRadius="12px"
        borderWidth="1px"
        _hover={{
          bgGradient:
            'linear(to-br, #fa7e1e, #d62976, #962fbf, #4f5bd5, #feda75)',
        }}
        marginRight="10px"
      /> */}
      <IconButton
        aria-label="LinkedIn"
        icon={<FaLinkedinIn />}
        color="white"
        height="45px"
        width={60}
        background="#2A2C39"
        borderRadius="12px"
        borderWidth="1px"
        _hover={{
          bg: 'linkedin.600',
        }}
        marginRight="10px"
      />
      <IconButton
        aria-label="GitHub"
        icon={<FaGithub />}
        color="white"
        height="45px"
        width={60}
        background="#2A2C39"
        borderRadius="12px"
        borderWidth="1px"
        _hover={{
          bg: 'black',
        }}
        marginRight="10px"
      />
    </Box>
  )
}

export { SocialMedia }
