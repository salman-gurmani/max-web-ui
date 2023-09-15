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
import { ProjectDetailsImages } from '@components/Images'
import { TextOnImagePanel } from '@components/TextOnImagePanel'
import { BoxList } from '@components/BoxList'
import { BoxTable } from '@components/BoxTable'
import webDetails, { ProjectDetailTypes } from '@components/Data/websitesData'
import { find, map } from 'lodash'
import { EllipseImage } from '@components/Images'
import { Footer } from '@components/Footer'
import { BackToHomeNavBar } from '@components/BackToHomeNavBar'

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
            {webData.title}
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
                  src={webData.image}
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
                {webData.description}
              </Text>

              <Heading
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '20px', md: '30px', lg: '38px' }}
              >
                Unique Attributes
              </Heading>

              <List spacing={3}>
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
              </List>

              <Heading
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '20px', md: '30px', lg: '38px' }}
              >
                Features of the Project
              </Heading>

              <List spacing={3}>
                {map(webData.features, (data, index) => (
                  <ListItem
                    key={index}
                    color="white"
                    fontFamily="roboto"
                    fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                    display="flex"
                    alignItems="center"
                  >
                    <Image
                      src={ProjectDetailsImages.checkmark.src.src}
                      alt=""
                    />
                    <span style={{ marginLeft: '20px' }}>{data}</span>
                  </ListItem>
                ))}
              </List>

              <Heading
                color="white"
                fontFamily="roboto"
                fontSize={{ base: '20px', md: '30px', lg: '38px' }}
              >
                Technology Stack
              </Heading>

              <List spacing={3}>
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