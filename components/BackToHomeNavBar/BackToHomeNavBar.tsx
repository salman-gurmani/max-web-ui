import { Box, Flex, Hide, Show, Link, Image } from '@chakra-ui/react'
import React from 'react'
import { css } from '@emotion/react'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import logo from '../../public/Icons/Logo.svg'

const BackToHomeNavBar = () => {
  const boxStyle = css`
    width: 100%;
    z-index: 6;
    padding: 0px 15px;
    height: 72px;
    align-items: center;
    display: inline-grid;
    box-shadow: 0 2px 4px -1px rgba(57, 76, 96, 0.15);
  `

  const gradientColor =
    'linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)'
  return (
    <Box css={boxStyle} backgroundColor="#111215" position="fixed">
      <Flex flex={{ base: 1 }} alignItems="center">
        <Hide below="md">
          <Image
            src={logo.src}
            width={271}
            height={54}
            style={{
              marginLeft: '50px',
              // marginTop: '5px',
            }}
            alt="Logo"
          />
        </Hide>
        <Show below="md">
          <Image src={logo.src} width={200} height={50} alt="Logo" />
        </Show>
        <Flex
          display={{ base: 'flex', md: 'flex' }}
          justify={'flex-start'}
          alignItems="center"
          mr={{ base: 0, md: 2, lg: 4 }}
          ml="auto"
        >
          <Box as="span" mx="2" color="#2FBBFB">
            <FaAngleDoubleLeft />
          </Box>
          <Link
            href="/"
            cursor="pointer"
            fontSize={{ base: 'xs', sm: 'xs', md: 'xs', xl: 'md' }}
            fontFamily="roboto"
            fontWeight={500}
            color="transparent"
            backgroundImage={gradientColor}
            backgroundClip="text"
            position="relative"
            transition="all 0.3s ease-in-out"
            transform="scale(1)"
            variant="ghost"
            _after={{
              bottom: '-2px',
              content: "''",
              height: '2px',
              left: 0,
              position: 'absolute',
              width: 0,
              backgroundColor: 'white',
              transition: 'width 0.3s ease-in-out',
            }}
            _hover={{
              textDecoration: 'none',
              transform: 'scale(0.95)',
              backgroundImage: gradientColor,
              backgroundClip: 'text',
              color: 'transparent',
              '&::after': {
                width: '100%',
              },
            }}
          >
            Back to Home
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export { BackToHomeNavBar }
