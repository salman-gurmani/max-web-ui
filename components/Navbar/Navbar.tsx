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
  Image,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  VStack,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { v4 as uuidv4 } from 'uuid'
import { css } from '@emotion/react'
import { useTranslation } from 'next-i18next'
import { logoImage } from '@components/Images'
import React from 'react'

const NavigationBar = () => {
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure()

  const boxStyle = css`
    width: 100%;
    z-index: 2;
    padding: 0px 15px;
    height: 72px;
    align-items: center;
    display: inline-grid;
    box-shadow: 0 2px 4px -1px rgba(57, 76, 96, 0.15);
  `

  return (
    <Box css={boxStyle} backgroundColor="black">
      <Flex flex={{ base: 1 }} justify="space-between" alignItems="center">
        <Hide below="md">
          <Image
            src={logoImage.logo.src.src}
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
            src={logoImage.logo.src.src}
            style={{ maxWidth: 40, maxHeight: 40, marginLeft: '0px' }}
            alt="Logo"
          />
          <Flex mr={{ base: -4 }} justifyContent="flex-end">
            <IconButton
              onClick={onOpenDrawer}
              icon={
                <HamburgerIcon color="white" w={5} h={5} marginRight="20px" />
              }
              variant="ghost"
              aria-label="Toggle Navigation"
              size="sm"
            />
          </Flex>
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

      <Collapse animateOpacity>
        <MobileNav onClose={onCloseDrawer} isOpen={isOpenDrawer} />
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

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      size="full"
      onClose={onClose}
      colorScheme="gray"
    >
      <DrawerOverlay />
      <DrawerContent>
        <Box backgroundColor="black">
          <DrawerHeader>
            <Grid templateColumns={'1fr 1fr 1fr'} gap={10} paddingY="10px">
              <Image
                src={logoImage.logo.src.src}
                style={{ maxWidth: 50, maxHeight: 70 }}
                alt="Logo"
              />
              <Text color="white" textAlign="center">
                Menu
              </Text>
              <DrawerCloseButton marginTop="15px" color="white" size="lg" />
            </Grid>
          </DrawerHeader>
        </Box>

        <DrawerBody backgroundColor="black">
          <Flex justify="center" align="center" minHeight="65vh">
            <VStack alignItems="start" spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={uuidv4()} {...navItem} />
              ))}
            </VStack>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as={Link}
        href={href ?? '#'}
        justify="space-between"
        width="200px"
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color="white"
          fontFamily="roboto"
          textAlign="center"
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
      </Box>

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
]

export { NavigationBar }
