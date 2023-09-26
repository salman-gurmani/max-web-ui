import { Flex, IconButton, Link } from '@chakra-ui/react'
import { CldImage } from 'next-cloudinary'
import { Zoom } from 'react-awesome-reveal'

const SocialMedia = ({ ...rest }) => {
  return (
    <Flex
      {...rest}
      display="flex"
      width="15%"
      justifyContent="center"
      alignItems="center"
    >
      <Zoom cascade>
        <Link
          href="https://www.facebook.com/people/Maxovation/61550761393563/"
          target="_blank"
          maxWidth={60}
        >
          <IconButton
            aria-label="Facebook"
            icon={
              <CldImage
                src="v1694585527/Icons/SoicalMedia/facebook_ycwspr.svg"
                alt=""
                width={25}
                height={25}
              />
            }
            fill="white"
            height="45px"
            background="#1B1C1F"
            borderRadius="12px"
            border="1px solid #2A2C39"
            _hover={{ bg: 'facebook.600' }}
            marginX={{ base: '5px', md: '10px', lg: '15px' }}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/company/94824570/admin/feed/posts/"
          target="_blank"
          maxWidth={60}
        >
          <IconButton
            aria-label="LinkedIn"
            marginX={{ base: '5px', md: '10px', lg: '15px' }}
            icon={
              <CldImage
                src="v1694585528/Icons/SoicalMedia/linkedin_ykjurz.svg"
                alt=""
                width={25}
                height={25}
              />
            }
            color="white"
            height="45px"
            background="#1B1C1F"
            borderRadius="12px"
            border="1px solid #2A2C39"
            _hover={{
              bg: 'linkedin.600',
            }}
          />
        </Link>
        <Link
          href="https://github.com/orgs/Idee-games/dashboard"
          target="_blank"
          maxWidth={60}
        >
          <IconButton
            aria-label="GitHub"
            marginX={{ base: '5px', md: '10px', lg: '15px' }}
            icon={
              <CldImage
                src="v1694585527/Icons/SoicalMedia/github_frw4qd.svg"
                alt=""
                width={25}
                height={25}
              />
            }
            color="white"
            height="45px"
            background="#1B1C1F"
            borderRadius="12px"
            border="1px solid #2A2C39"
            _hover={{
              bg: 'black',
            }}
          />
        </Link>
      </Zoom>
    </Flex>
  )
}

export { SocialMedia }
