import { useRouter } from 'next/router'
import {
  Box,
  Heading,
  Text,
  Grid,
  Flex,
  VStack,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react'
import React from 'react'
import { WebsiteDetailBanner } from '@components/WebisteDetailBanner'

import { TextOnImagePanel } from '@components/TextOnImagePanel'
import { BoxList } from '@components/BoxList'
import { BoxTable } from '@components/BoxTable'
import webDetails, { ProjectDetailTypes } from '@components/Data/websitesData'
import { find, map } from 'lodash'
import { EllipseImage } from '@components/Images'
import { Footer } from '@components/Footer'
import { BackToHomeNavBar } from '@components/BackToHomeNavBar'
import { CldImage } from 'next-cloudinary'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

const WebsiteDetail = () => {
  const router = useRouter()
  const { projectId } = router.query
  const webData: ProjectDetailTypes = find(webDetails, {
    key: projectId,
  }) as ProjectDetailTypes

  if (webData)
    return (
      <Box>
        <BackToHomeNavBar />
        <WebsiteDetailBanner title={webData.title} />
        <Flex
          flexDirection="column"
          alignItems="left"
          justifyContent="left"
          bg="#111215"
          width="100%"
          paddingX={1}
        >
          <Slide>
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
              {webData.title}
            </Heading>
          </Slide>
          <Grid
            templateColumns={{ base: '1fr', md: '55% 45%', lg: '65% 35%' }}
            marginY={10}
            marginX={{ base: '3', md: '10', lg: '20' }}
            gap={{ base: 5, md: 10, lg: 14 }}
          >
            <VStack
              alignItems="left"
              justifyContent="left"
              spacing={6}
              paddingX={2}
            >
              <Fade cascade delay={10}>
                <Zoom>
                  <Box overflow="hidden" position="relative">
                    <CldImage
                      src={webData.image}
                      alt=""
                      width="1920"
                      height={1080}
                      style={{
                        zIndex: 0,
                      }}
                    />
                  </Box>
                </Zoom>
              </Fade>
              <Fade>
                <Text
                  color="white"
                  fontFamily="roboto"
                  fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                >
                  {webData.description}
                </Text>
              </Fade>
              <Slide>
                <Heading
                  color="white"
                  fontFamily="roboto"
                  fontSize={{ base: '20px', md: '30px', lg: '38px' }}
                >
                  Unique Attributes
                </Heading>
              </Slide>
              <List spacing={3}>
                <Slide cascade delay={200} duration={500} direction="left">
                  {map(webData.uniquePoints, (data, index) => (
                    <ListItem
                      key={index}
                      color="white"
                      fontFamily="roboto"
                      fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                      display="flex"
                      alignItems="center"
                    >
                      <Image src={EllipseImage.ellipseIcon.src.src} alt="" />
                      <span style={{ marginLeft: '20px' }}>{data}</span>
                    </ListItem>
                  ))}
                </Slide>
              </List>
              <Slide>
                <Heading
                  color="white"
                  fontFamily="roboto"
                  fontSize={{ base: '20px', md: '30px', lg: '38px' }}
                >
                  Features of the Project
                </Heading>
              </Slide>
              <List spacing={3}>
                <Fade cascade duration={400}>
                  {map(webData.features, (data, index) => (
                    <ListItem
                      key={index}
                      color="white"
                      fontFamily="roboto"
                      fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                      display="flex"
                      alignItems="center"
                    >
                      <CldImage
                        src="v1694585526/Icons/ProjectDetails/checkmark_kfgivm.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                      <span style={{ marginLeft: '20px' }}>{data}</span>
                    </ListItem>
                  ))}
                </Fade>
              </List>

              <Slide>
                <Heading
                  color="white"
                  fontFamily="roboto"
                  fontSize={{ base: '20px', md: '30px', lg: '38px' }}
                >
                  Technology Stack
                </Heading>
              </Slide>
              <List spacing={3}>
                <Fade cascade duration={400}>
                  {map(webData.technologies, (data, index) => (
                    <ListItem
                      key={index}
                      color="white"
                      fontFamily="roboto"
                      fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                      display="flex"
                      alignItems="center"
                    >
                      <Image src={EllipseImage.ellipseIcon.src.src} alt="" />
                      <span style={{ marginLeft: '20px' }}>{data}</span>
                    </ListItem>
                  ))}
                </Fade>
              </List>
            </VStack>
            <VStack marginX={{ base: '5', md: '10', lg: '20' }} gap={10}>
              {' '}
              <BoxTable
                Tags={webData.Tags}
                Year={webData.Year}
                Category={webData.Category}
              />
              <BoxList />
            </VStack>
          </Grid>
          <TextOnImagePanel />
        </Flex>
        <Footer />
      </Box>
    )
}

export default WebsiteDetail
