import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, breakpoints } from 'swiper'
import { map } from 'lodash'
import {
  Box,
  Text,
  Heading,
  VStack,
  Grid,
  Image,
  Flex,
  HStack,
  Button,
  IconButton,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import { WebArrowsImages } from '../Images'
WebArrowsImages.leftArrow.src.src
const StyledSwiper = styled(Swiper)`
  .swiper-button-prev {
    color: transparent;
    top: 50%;
    background-image: url(${WebArrowsImages.leftArrow.src.src}) !important;
    background-repeat: no-repeat;
    background-size: cover;
    width: 35px;
    height: 35px;
    &:after {
      font-size: 20px;
    }
  }
  .swiper-button-next {
    color: transparent;
    top: 50%;
    background-image: url(${WebArrowsImages.rightArrow.src.src}) !important;
    background-repeat: no-repeat;
    background-size: cover;
    width: 35px;
    height: 35px;
    &:after {
      font-size: 20px;
    }
  }
`

const Slider = ({ slides }) => {
  const Paddingsize = useBreakpointValue({
    base: 20,
    md: 50,
    lg: 50,
  })

  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      style={{
        width: '100%',
        paddingLeft: Paddingsize,
      }}
      breakpoints={{
        600: {
          slidesPerView: 1,
          spaceBetween: 3,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 2,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 2,
        },

        1200: {
          slidesPerView: 2,
          spaceBetween: 4,
        },
        1600: {
          slidesPerView: 2,
          spaceBetween: 3,
        },
        1924: {
          slidesPerView: 2,
          spaceBetween: 4,
        },
      }}
    >
      {map(slides, (data) => {
        return (
          <SwiperSlide key={uuidv4()}>
            <Box
              key={uuidv4()}
              width={{ base: '210px', md: '240px', lg: '245px' }}
              height={{ base: '310px', md: '320px', lg: '350px' }}
              borderRadius="10px"
              border="1px solid #2A2C39"
              background="#18191D"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                src={data.image}
                alt=""
                borderRadius="10px 10px 0 0"
                style={{ flex: '1', objectFit: 'cover' }}
              />

              <VStack mt="4" spacing="5" style={{ flex: '1', width: '100%' }}>
                <Text
                  color="white"
                  fontFamily="roboto"
                  fontWeight="400"
                  alignSelf="center"
                >
                  {data.date}
                </Text>
                <Text
                  color="white"
                  fontFamily="roboto"
                  fontWeight="400"
                  alignSelf="center"
                >
                  {data.name}
                </Text>
                <Link
                  href={`Websites/${data.id}`}
                  color="white"
                  fontFamily="roboto"
                  fontWeight="400"
                  alignSelf="center"
                  backgroundColor="transparent"
                  width="124px"
                  height="40px"
                  zIndex="5"
                  variant="outline"
                  textAlign="center"
                  fontSize="12px"
                  paddingX={{ base: '1', md: '5', lg: '4' }}
                  paddingY={2}
                  backgroundImage="linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%)"
                  backgroundClip="text"
                  sx={{
                    borderImage: `linear-gradient(95.1deg, #2FBBFB 0%, #D442E0 52.6%, #F15D3C 100%) 1`,
                    borderStyle: 'solid',
                    borderWidth: '2px',
                  }}
                  _hover={{
                    background:
                      'var(--gradient, linear-gradient(135deg, #2FBBFB 0%, #D442E0 52.60%, #F15D3C 100%))',
                    textColor: 'white',
                  }}
                >
                  View Project
                </Link>
              </VStack>
            </Box>
          </SwiperSlide>
        )
      })}
    </StyledSwiper>
  )
}
export { Slider }
