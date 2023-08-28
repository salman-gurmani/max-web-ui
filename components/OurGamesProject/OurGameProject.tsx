import {
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  Box,
  Grid,
  Button,
  HStack,
  Link,
} from '@chakra-ui/react'
import { map, slice } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { GamesData } from '../OurGamesProject/GameData'
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator,
} from '@ajna/pagination'
import React from 'react'

import { EllipseImage } from '@components/Images'

const OurGameProject = () => {
  const gamesPerPage = 6
  const outerLimit = 2
  const innerLimit = 2

  const { pages, pagesCount, offset, isDisabled, currentPage, setCurrentPage } =
    usePagination({
      total: 17,
      limits: {
        outer: outerLimit,
        inner: innerLimit,
      },
      initialState: {
        pageSize: gamesPerPage,
        currentPage: 1,
      },
    })

  const handlePageChange = (nextPage: number): void => {
    setCurrentPage(nextPage)
  }

  const gridTemplateColumns = {
    base: 'repeat(1, 1fr)',
    sm: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
  }

  const gridGap = {
    base: 0,
    md: 4,
    lg: 6,
  }
  const gamesToShow = slice(GamesData, offset, offset + gamesPerPage)

  return (
    <Flex
      bg="#111215"
      px={{ base: 4, md: 45 }}
      py={35}
      justifyContent="center"
      direction="column"
    >
      <VStack gap={5} paddingX={{ base: 0, md: 35, lg: 45 }}>
        <Heading
          backgroundImage="linear-gradient(135deg, #2FBBFB 20%, #D442E0 51.56%, #F15D3C 100%)"
          backgroundClip="text"
          fontStyle="normal"
          color="transparent"
          fontFamily="roboto"
          fontSize={{ base: '30px', md: '35px', lg: '46px' }}
          paddingTop={{ base: 0, md: 3, lg: 5 }}
          textAlign="center"
        >
          Our Games Projects
        </Heading>
        <Text
          fontFamily="roboto"
          color="white"
          textAlign="center"
          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
        >
          Maxovation Gaming Department, your gateway to captivating gaming
          experiences across mobile, web, and PC platforms. We are passionate
          about crafting immersive games that keep you entertained wherever you
          play. With our expert team of developers, designers, and artists, we
          create innovative and visually stunning games that push the boundaries
          of gameplay. Whether you're seeking thrilling adventures on your
          mobile device, engaging web-based games, or immersive PC gaming
          experiences, we have you covered. Our dedication to excellence and
          commitment to delivering top-quality games ensures that you'll be
          hooked from the first play. Get ready to dive into a world of
          excitement and join us on this exhilarating gaming journey with
          Maxovation.
        </Text>

        <Box borderRadius="20px" background="#17181B">
          <HStack>
            <Button
              backgroundImage="linear-gradient(135deg, #2FBBFB 20%, #D442E0 51.56%, #F15D3C 100%)"
              backgroundClip="text"
              fontStyle="normal"
              color="transparent"
              fontFamily="roboto"
              _hover={{
                backgroundImage:
                  'linear-gradient(135deg, #2FBBFB 20%, #D442E0 51.56%, #F15D3C 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              All
            </Button>
            <Box>
              <Image
                src={EllipseImage.ellipseIcon.src.src}
                alt={EllipseImage.ellipseIcon.alt}
              />
            </Box>
            <Button
              fontStyle="normal"
              backgroundColor="transparent"
              textColor="white"
              fontFamily="roboto"
              _hover={{
                backgroundImage:
                  'linear-gradient(135deg, #2FBBFB 20%, #D442E0 51.56%, #F15D3C 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Unity
            </Button>
            <Box>
              <Image
                src={EllipseImage.ellipseIcon.src.src}
                alt={EllipseImage.ellipseIcon.alt}
              />
            </Box>
            <Button
              fontStyle="normal"
              backgroundColor="transparent"
              textColor="white"
              fontFamily="roboto"
              _hover={{
                backgroundImage:
                  'linear-gradient(135deg, #2FBBFB 20%, #D442E0 51.56%, #F15D3C 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Unreal
            </Button>
          </HStack>
        </Box>
      </VStack>

      <Box>
        <Grid templateColumns={gridTemplateColumns} gap={gridGap}>
          {map(gamesToShow, (data) => {
            return (
              <Box
                key={uuidv4()}
                justifySelf="center"
                height="auto"
                width="auto"
                borderRadius="10px"
                border="1px solid #2A2C39"
                background="#17181B"
                marginY={25}
              >
                <VStack width="100%">
                  <Box
                    borderTopRadius="10px"
                    height="400"
                    width="auto"
                    bg="black"
                    overflow="hidden"
                  >
                    {
                      <Image
                        src={data.image}
                        alt=""
                        style={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'fill',
                        }}
                      />
                    }
                  </Box>

                  <VStack padding="10px" align="center" spacing={2}>
                    <Text
                      color="white"
                      text-align="center"
                      fontFamily="roboto"
                      fontSize="18px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="normal"
                    >
                      {data.name}
                    </Text>

                    <Text
                      color="#C0C0C0"
                      text-align="center"
                      fontFamily="roboto"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="normal"
                    >
                      {data.date} | {data.platform}
                    </Text>
                    <Link
                      href={data.link}
                      fontFamily="roboto"
                      fontSize={{ base: '12px', md: '12px', lg: '14px' }}
                      paddingX={{ base: '2', md: '2', lg: '4' }}
                      paddingY={2}
                      target="_blank"
                      backgroundImage="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
                      backgroundClip="text"
                      sx={{
                        borderImage: `linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%) 1`,
                        borderStyle: 'solid',
                        borderWidth: '1px',
                      }}
                      _hover={{
                        background:
                          'var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))',
                        textColor: 'white',
                      }}
                    >
                      {' '}
                      View Game
                    </Link>
                  </VStack>
                </VStack>
              </Box>
            )
          })}
        </Grid>
      </Box>

      <HStack direction="row" spacing="40" align="center">
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          isDisabled={isDisabled}
          onPageChange={handlePageChange}
        >
          <PaginationContainer align="center" justify="center" p={4} w="full">
            <PaginationPrevious
              variant="link"
              paddingRight="10px"
              paddingLeft="10px"
              marginRight="5px"
              _hover={{
                textDecoration: 'underline',
                textDecorationColor: 'white',
              }}
            >
              <Text
                fontFamily="roboto"
                fontSize="18px"
                textColor="white"
                textAlign="center"
              >
                Previous
              </Text>
            </PaginationPrevious>
            <PaginationPageGroup
              isInline
              align="center"
              separator={
                <PaginationSeparator
                  variant="link"
                  fontFamily="roboto"
                  fontSize="18px"
                  textColor="white"
                  w={7}
                  jumpSize={5}
                  paddingRight="10px"
                  paddingLeft="10px"
                  marginRight="5px"
                />
              }
            >
              {map(pages, (page: number) => (
                <PaginationPage
                  w={3}
                  variant="link"
                  padding={5}
                  key={uuidv4()}
                  page={page}
                  fontFamily="roboto"
                  fontSize="18px"
                  textColor="white"
                  _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'white',
                  }}
                  _current={{
                    textDecoration: 'underline',
                    textDecorationStyle: 'double',
                    color: 'white',
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext
              variant="link"
              paddingRight="10px"
              paddingLeft="10px"
              marginLeft="5px"
              _hover={{
                textDecoration: 'underline',
                textDecorationColor: 'white',
              }}
            >
              <Text
                fontFamily="roboto"
                fontSize="18px"
                textColor="white"
                textAlign="center"
              >
                Next
              </Text>
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
      </HStack>
    </Flex>
  )
}

export { OurGameProject }
