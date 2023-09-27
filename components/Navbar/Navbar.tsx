import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
  Show,
  Hide,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  VStack,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { css } from '@emotion/react'

import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'
import logo from '../../public/Icons/Logo.svg'
interface DesktopNavProps {
  selectedSection: string
  onSelect: (sectionId: string) => void
}
interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const NavigationBar = () => {
  const [selectedSection, setSelectedSection] = useState('home')
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure()

  const boxStyle = css`
    width: 100%;
    z-index: 6;
    padding: 0px 15px;
    height: 72px;
    align-items: center;
    display: inline-grid;
    box-shadow: 0 2px 4px -1px rgba(57, 76, 96, 0.15);
  `

  return (
    <Box css={boxStyle} backgroundColor="#111215" position="fixed">
      <Flex flex={{ base: 1 }} alignItems="center">
        <Hide below="md">
          <Image
            src={logo.src}
            //  src="v1694585522/Icons/Maxovation_Logo_V.2-ai_-_New_i4ycvr.svg"
            width={271}
            height={54}
            style={{
              marginLeft: '50px',
              marginTop: '5px',
            }}
            alt="Logo"
          />
        </Hide>
        <Show below="md">
          <Image src={logo.src} width={200} height={150} alt="Logo" />
          <Flex mr={{ base: -4 }} justifyContent="flex-end" ml="auto">
            <IconButton
              onClick={onOpenDrawer}
              icon={<HamburgerIcon color="blue" w={5} h={5} />}
              variant="ghost"
              aria-label="Toggle Navigation"
              size="sm"
              marginRight="20px"
            />
          </Flex>
        </Show>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          justify="flex-end"
          alignItems="center"
          mr={4}
          ml="auto"
        >
          <DesktopNav
            selectedSection={selectedSection}
            onSelect={setSelectedSection}
          />
        </Flex>
      </Flex>

      <Collapse animateOpacity>
        <MobileNav onClose={onCloseDrawer} isOpen={isOpenDrawer} />
      </Collapse>
    </Box>
  )
}

const DesktopNav: React.FC<DesktopNavProps> = ({ onSelect }) => {
  const gradientColor =
    'linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)'

  const handleSectionClick = (sectionId: string) => {
    onSelect(sectionId)
  }
  return (
    <Flex direction={'row'} justify={'flex-end'} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} mr={8}>
          <ScrollLink
            to={navItem.id}
            smooth={true}
            duration={1500}
            spy
            offset={-72}
          >
            <Text
              onClick={() => handleSectionClick(navItem.id)}
              cursor="pointer"
              fontSize={{ base: 'xs', sm: 'xs', md: 'xs', lg: 'sm', xl: 'md' }}
              fontFamily="roboto"
              fontWeight={500}
              color="white"
              backgroundImage="none"
              backgroundClip="none"
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
              {navItem.label}
            </Text>
          </ScrollLink>
        </Box>
      ))}
    </Flex>
  )
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
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
            <Grid templateColumns={'1fr 1fr 1fr'} paddingY="10px">
              <Image
                src={logo.src}
                width={250}
                height={300}
                alt="Logo"
                style={{ marginTop: '5px' }}
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
                <Stack key={uuidv4()} spacing={4}>
                  <ScrollLink
                    to={navItem.id}
                    smooth={true}
                    duration={1500}
                    spy
                    offset={-72}
                  >
                    <Box
                      py={2}
                      justifyContent="space-between"
                      width="200px"
                      alignContent={'center'}
                      _hover={{
                        textDecoration: 'none',
                      }}
                    >
                      <Text
                        cursor="pointer"
                        fontWeight={600}
                        color="white"
                        fontFamily="roboto"
                        textAlign="center"
                        onClick={onClose}
                      >
                        {navItem.label}
                      </Text>
                    </Box>
                  </ScrollLink>
                </Stack>
              ))}
            </VStack>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
  id: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    id: 'home',
  },
  {
    label: 'About',
    id: 'about',
  },
  {
    label: 'Web',
    id: 'web',
  },
  {
    label: 'Games',
    id: 'games',
  },
  {
    label: 'Service',
    id: 'service',
  },
  {
    label: 'Contact us',
    id: 'contact',
  },
]

export { NavigationBar }
