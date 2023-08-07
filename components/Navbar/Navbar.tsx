import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Show,
  Hide,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

import { css } from '@emotion/react'
import Image from 'next/image'

import { useTranslation } from 'next-i18next'

import logoImg from '../../public/images/logo/Logo.png'

const NavigationBar = () => {
  const { isOpen, onToggle } = useDisclosure()

  const boxStyle = css`
    width: 100%;
    z-index: 2;
    padding: 0.5rem;
    background-color: black;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);

    @media screen and (min-width: 1248px) {
      position: absolute;

      width: 100%;
      top: 3%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `

  return (
    <Box css={boxStyle}>
      <Flex flex={{ base: 1 }} justify="space-between" alignItems="center">
        <Hide below="md">
          <Image
            src={logoImg}
            style={{
              maxWidth: 60,
              maxHeight: 60,
              marginLeft: '50px',
              marginTop: '5px',
            }}
            alt="Logo"
          />
        </Hide>
        <Show below="md">
          <Image
            src={logoImg}
            style={{ maxWidth: 40, maxHeight: 40, marginLeft: '0px' }}
            alt="Logo"
          />
          <IconButton
            onClick={onToggle}
            color="white"
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color="white" />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Show>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          justify={'flex-start'}
          alignItems="center"
          mr={4}
        >
          <DesktopNav />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const gradientColor =
    'linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)'

  const { t } = useTranslation()
  return (
    <Flex direction={'row'} justify={'flex-end'} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} mr={14}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                href={navItem.href ?? '#'}
                fontSize={{ base: 'xs', sm: 'xs', md: 'xs', xl: 'md' }}
                fontFamily="roboto"
                fontWeight={500}
                color={navItem.isSelected ? 'transparent' : 'white'}
                backgroundImage={navItem.isSelected ? gradientColor : 'none'}
                backgroundClip={navItem.isSelected ? 'text' : 'none'}
                textDecoration="none"
                outline="none"
                position="relative"
                transition="all 0.3s ease-in-out"
                transform="scale(1)"
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
                {t(navItem.label)}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={1}
                maxWidth={200}
                bg="#FAF9F6"
                p={2}
                rounded={'xl'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Flex>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const { t } = useTranslation()

  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{
        bg: useColorModeValue('white', 'gray.900'),
        textDecoration: 'none',
      }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'red.400' }}
            fontFamily="roboto"
            fontSize="xs"
            fontWeight={600}
          >
            {t(label)}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'red.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
          fontFamily="roboto"
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
  isSelected: boolean
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    isSelected: true,
  },
  {
    label: 'About',
    isSelected: false,
  },
  {
    label: 'Web',
    isSelected: false,
  },
  {
    label: 'Games',
    isSelected: false,
  },
  {
    label: 'Service',
    isSelected: false,
  },
  {
    label: 'Contact us',
    isSelected: false,
  },

  // {
  //   label: 'membership',
  //   children: [
  //     { label: 'groupMembership', href: '#' },
  //     { label: 'individualMembership', href: '#' },
  //     { label: 'danRecognisationForm', href: '#' },
  //     { label: 'umpireQuizes', href: '#' },
  //   ],
  // },
]

export { NavigationBar }
