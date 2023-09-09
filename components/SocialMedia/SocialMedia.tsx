import { Flex, IconButton, Image, Link } from '@chakra-ui/react'
import { SocialMediaImages } from '@components/Images'

const SocialMedia = ({ ...rest }) => {
  return (
    <Flex
      {...rest}
      display="flex"
      width="15%"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        href="https://www.facebook.com/people/Maxovation/61550761393563/"
        target="_blank"
        maxWidth={60}
      >
        <IconButton
          aria-label="Facebook"
          icon={
            <Image
              src={SocialMediaImages.facebookIcon.src.src}
              alt={SocialMediaImages.facebookIcon.alt}
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
            <Image
              src={SocialMediaImages.linkedin.src.src}
              alt={SocialMediaImages.linkedin.alt}
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
            <Image
              src={SocialMediaImages.githubIcon.src.src}
              alt={SocialMediaImages.githubIcon.alt}
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
    </Flex>
  )
}

export { SocialMedia }
