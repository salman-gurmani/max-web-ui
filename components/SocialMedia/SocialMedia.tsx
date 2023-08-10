import { Flex, IconButton } from '@chakra-ui/react'
import {
  facebookIcon,
  twitterIcon,
  linkedinIcon,
  youtubeIcon,
  gitHubIcon,
} from './SocialMediaIconData'

const SocialMedia = ({ ...rest }) => {
  return (
    <Flex
      {...rest}
      display="flex"
      width="15%"
      justifyContent="center"
      alignItems="center"
    >
      <IconButton
        aria-label="Facebook"
        icon={facebookIcon}
        fill="white"
        height="45px"
        width={60}
        background="#1B1C1F"
        borderRadius="12px"
        border="1px solid #2A2C39"
        _hover={{ bg: 'facebook.600' }}
        marginX={{ base: '5px', md: '10px', lg: '15px' }}
      />

      <IconButton
        aria-label="YouTube"
        marginX={{ base: '5px', md: '10px', lg: '15px' }}
        icon={youtubeIcon}
        color="white"
        height="45px"
        width={60}
        background="#1B1C1F"
        borderRadius="12px"
        border="1px solid #2A2C39"
        _hover={{ bg: '#c30000' }}
      />

      <IconButton
        aria-label="LinkedIn"
        marginX={{ base: '5px', md: '10px', lg: '15px' }}
        icon={linkedinIcon}
        color="white"
        height="45px"
        width={60}
        background="#1B1C1F"
        borderRadius="12px"
        border="1px solid #2A2C39"
        _hover={{
          bg: 'linkedin.600',
        }}
      />
      <IconButton
        aria-label="GitHub"
        marginX={{ base: '5px', md: '10px', lg: '15px' }}
        icon={gitHubIcon}
        color="white"
        height="45px"
        width={60}
        background="#1B1C1F"
        borderRadius="12px"
        border="1px solid #2A2C39"
        _hover={{
          bg: 'black',
        }}
      />
      <IconButton
        aria-label="Twitter"
        marginX={{ base: '5px', md: '10px', lg: '15px' }}
        icon={twitterIcon}
        color="white"
        height="45px"
        width={60}
        background="#1B1C1F"
        borderRadius="12px"
        border="1px solid #2A2C39"
        _hover={{ bg: 'twitter.600' }}
      />
    </Flex>
  )
}

export { SocialMedia }
