import {
  Box,
  Heading,
  Text,
  Grid,
  Flex,
  VStack,
  Image,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { PrimaryLayout } from '../../components/Layout/Layout'
import React from 'react'
import BannerImg from '../../public/images/header.png'
import BGImg from '../../public/images/DetailImg.png'
import { FaAngleRight } from 'react-icons/fa'
import { TickIcon } from './iconData'
import { TextOnImagePanel } from '@components/TextOnImagePanel'
import { BoxList } from '@components/BoxList'
import { BoxTable } from '@components/BoxTable'
export default function ProjectDetails() {
  return (
    <PrimaryLayout>
      <Box overflow="hidden" position="relative">
        <Image
          src={BannerImg.src}
          alt=""
          height={{ base: '300px', lg: '500px' }}
          style={{
            zIndex: 0,
            width: '100%',
          }}
        />
        <Flex
          position="absolute"
          top="3%"
          left="0"
          width="100%"
          height="100%"
          justifyContent="center"
        >
          <VStack
            w={{ base: '80%', md: '70%', lg: '50%' }}
            position="relative"
            padding={{ base: '40px', md: '70px' }}
            gap={{ base: '1', md: '3', lg: '6' }}
            align="center"
            justify="center"
          >
            <Heading
              color="transparent"
              backgroundImage="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
              backgroundClip="text"
              fontSize={{ base: '20px', md: '40px', lg: '55px' }}
              zIndex={1}
              fontFamily="roboto"
              fontStyle="normal"
              fontWeight="600"
            >
              Portfolio Details{' '}
            </Heading>

            <Flex alignItems="center">
              <Text
                color="white"
                fontFamily="roboto"
                maxWidth="100%"
                fontSize={{ base: '14px', md: '18px', lg: '20px' }}
              >
                Home
              </Text>
              <Box as="span" mx="2" color="white">
                <FaAngleRight />
              </Box>
              <Text
                color="white"
                fontFamily="roboto"
                maxWidth="100%"
                fontSize={{ base: '14px', md: '18px', lg: '20px' }}
              >
                Product Name
              </Text>
            </Flex>
          </VStack>
        </Flex>
      </Box>

      <Flex
        flexDirection="column"
        alignItems="left"
        justifyContent="left"
        bg="#111215"
        width="100%"
      >
        <Heading
          color="white"
          fontSize={{ base: '20px', md: '40px', lg: '55px' }}
          zIndex={1}
          fontFamily="roboto"
          fontStyle="normal"
          fontWeight="600"
          alignSelf="flex-start"
          marginTop={10}
          marginX={{ base: '5', md: '10', lg: '20' }}
        >
          IDEE GAMES - Website UI Design
        </Heading>
        <Grid
          templateColumns={{ base: '1fr', md: '50% 50%', lg: '70% 30%' }}
          marginY={10}
          marginX={{ base: '5', md: '10', lg: '20' }}
          gap={{ base: 10, md: 10, lg: 14 }}
        >
          <VStack alignItems="left" justifyContent="left" spacing={6}>
            <Box overflow="hidden" position="relative">
              <Image
                src={BGImg.src}
                alt=""
                h="100%"
                style={{
                  zIndex: 0,
                  width: '100%',
                }}
              />
            </Box>
            <Text
              color="white"
              fontFamily="roboto"
              fontSize={{ base: '13px', md: '15px', lg: '18px' }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout.
            </Text>
            <Text
              color="white"
              fontFamily="roboto"
              fontSize={{ base: '13px', md: '15px', lg: '18px' }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source.
            </Text>
            <Heading
              color="white"
              fontFamily="roboto"
              fontSize={{ base: '20px', md: '30px', lg: '38px' }}
            >
              The Challenge of Project
            </Heading>
            <Text
              color="white"
              fontFamily="roboto"
              fontSize={{ base: '13px', md: '15px', lg: '18px' }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
            <List spacing={3}>
              <ListItem
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                display="flex"
                alignItems="center"
              >
                <ListIcon as={TickIcon} /> Lorem Ipsum is simply dummy text.{' '}
              </ListItem>
              <ListItem
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                display="flex"
                alignItems="center"
              >
                <ListIcon as={TickIcon} />
                Lorem Ipsum is simply dummy text.{' '}
              </ListItem>
              <ListItem
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                display="flex"
                alignItems="center"
              >
                <ListIcon as={TickIcon} />
                Lorem Ipsum is simply dummy text.{' '}
              </ListItem>
              <ListItem
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                display="flex"
                alignItems="center"
              >
                <ListIcon as={TickIcon} />
                Lorem Ipsum is simply dummy text.{' '}
              </ListItem>
            </List>
          </VStack>
          <VStack marginX={{ base: '5', md: '10', lg: '20' }} gap={10}>
            {' '}
            <BoxTable />
            <BoxList />
          </VStack>
        </Grid>
        <TextOnImagePanel />
      </Flex>
    </PrimaryLayout>
  )
}
